import { useState, useEffect, useRef } from 'react';
import './Projects.css';

const categories = [
  { key: 'all', label: '全部' },
  { key: 'ai', label: 'AI 创作' },
  { key: 'b-end', label: 'B 端系统' },
  { key: 'c-end', label: 'C 端产品' },
  { key: 'other', label: '其他' },
];

const projects = [
  // ---- B 端系统 ----
  {
    id: 1,
    title: '健康检测平台可视化',
    category: 'b-end',
    tags: ['Data Viz', '动效设计', '健康医疗'],
    desc: '健康检测数据可视化大屏，集成人体健康指标实时监测与数据呈现，独立完成 UI 设计与动效制作。',
    videos: [
      '/videos/健康系统可视化 -作品1.mp4',
      '/videos/人体.mp4',
    ],
    size: 'wide',
    aspectRatio: '2560 / 1080',
  },
  {
    id: 2,
    title: '数据实时监控测评分析可视化',
    category: 'b-end',
    tags: ['Real-time', '数据监控', '测评分析'],
    desc: '面向企业运维场景的实时数据监控与测评分析可视化大屏，覆盖全球节点数据呈现与异常预警交互设计。',
    videos: [
      '/videos/实时监控.mp4',
      '/videos/地球.mp4',
    ],
    size: 'wide',
    aspectRatio: '2500 / 1056',
  },

  // ---- C 端产品 ----
  {
    id: 3,
    title: '我宠 — APP 界面设计',
    category: 'c-end',
    tags: ['iOS', 'Android', 'UX Design'],
    desc: '基于爱宠人士衍生的宠物服务 App，提供洗护、医疗、食品购买、社区交流等一站式服务，定位于中端用户。',
    link: '#pet-app',
    zcoolLink: 'https://www.zcool.com.cn/work/ZNTc0MDk2MzI=.html',
    cover: '/images/pet-app/APP界面设计1 (3)-03.jpg',
  },
  {
    id: 4,
    title: '极光计步 — 运动健康 App',
    category: 'c-end',
    tags: ['iOS', '运动健康', 'UI Design'],
    desc: '运动计步与健康管理 App 界面设计，以极光为视觉灵感，打造轻盈、动感的运动体验界面。',
    hasDetail: true,
    cover: '/images/aurora-app/APP界面设计1 (3)-24.jpg',
  },

  // ---- 其他 ----
  {
    id: 5,
    title: '网页设计作品',
    category: 'other',
    tags: ['Web Design', '品牌官网', 'UX'],
    desc: '多款品牌官网与企业站网页设计，涵盖运动器材、科技企业等不同行业，从信息架构到高保真完整交付。',
    hasDetail: true,
    cover: '/images/web-design/APP界面设计1 (3)-34.jpg',
  },
  {
    id: 6,
    title: '其他设计作品',
    category: 'other',
    tags: ['Branding', '海报', '视觉'],
    desc: '海报创意、商业图像合成、三维设计等多元化视觉作品，展现多维度跨媒介的视觉表达能力。',
    hasDetail: true,
    cover: '/images/other-design/APP界面设计1 (3)-39-39.jpg',
  },
];

export default function Projects({ onNavigateToPetApp, onNavigateToAuroraApp, onNavigateToWebDesign, onNavigateToOtherDesign }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [carouselIndex, setCarouselIndex] = useState({});
  const carouselTimers = useRef({});

  // Auto-rotate carousel for each project
  useEffect(() => {
    const projectWithVideos = projects.filter(p => p.videos);
    projectWithVideos.forEach(project => {
      if (carouselIndex[project.id] === undefined) {
        setCarouselIndex(prev => ({ ...prev, [project.id]: 0 }));
      }
      if (!carouselTimers.current[project.id]) {
        carouselTimers.current[project.id] = setInterval(() => {
          setCarouselIndex(prev => ({
            ...prev,
            [project.id]: ((prev[project.id] ?? 0) + 1) % project.videos.length,
          }));
        }, 4000);
      }
    });
    return () => {
      Object.values(carouselTimers.current).forEach(clearInterval);
      carouselTimers.current = {};
    };
  }, [activeCategory]);

  const setCarouselSlide = (projectId, index) => {
    // Reset timer
    if (carouselTimers.current[projectId]) {
      clearInterval(carouselTimers.current[projectId]);
    }
    setCarouselIndex(prev => ({ ...prev, [projectId]: index }));
    const project = projects.find(p => p.id === projectId);
    if (project) {
      carouselTimers.current[projectId] = setInterval(() => {
        setCarouselIndex(prev => ({
          ...prev,
          [projectId]: ((prev[projectId] ?? 0) + 1) % project.videos.length,
        }));
      }, 4000);
    }
  };

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-label">Projects</div>

        <h2 className="section-title">
          <span className="title-main">项目作品</span>
          <span className="title-sub">Selected Works</span>
        </h2>

        {/* Category Filter */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="project-grid">
          {filtered.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.size === 'wide' ? 'wide' : ''}`}
            >
              <div className="project-image" style={project.aspectRatio ? { aspectRatio: project.aspectRatio } : undefined}>
                {/* Video cards for B-end projects */}
                {project.videos ? (
                  <div className="project-carousel">
                    {project.videos.map((video, i) => (
                      <div
                        key={i}
                        className={`project-carousel-slide ${(carouselIndex[project.id] ?? 0) === i ? 'active' : ''}`}
                      >
                        <video
                          className="project-carousel-video"
                          src={video}
                          muted
                          loop
                          playsInline
                          autoPlay
                          ref={(el) => {
                            if (el && (carouselIndex[project.id] ?? 0) === i) {
                              el.play().catch(() => {});
                            } else if (el) {
                              el.pause();
                            }
                          }}
                        />
                      </div>
                    ))}
                    {/* Indicators */}
                    <div className="project-carousel-dots">
                      {project.videos.map((_, i) => (
                        <button
                          key={i}
                          className={`project-carousel-dot ${(carouselIndex[project.id] ?? 0) === i ? 'active' : ''}`}
                          onClick={(e) => { e.preventDefault(); setCarouselSlide(project.id, i); }}
                        />
                      ))}
                    </div>
                    {/* Label */}
                    <span className="project-carousel-label">
                      {(carouselIndex[project.id] ?? 0) === 0 ? '主视觉' : '辅助视觉'}
                    </span>
                  </div>
                ) : project.cover ? (
                  <img className="project-cover-img" src={project.cover} alt={project.title} loading="lazy" />
                ) : (
                  /* Fallback placeholder */
                  <div className="project-image-placeholder">
                    {project.category === 'b-end' && (
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect x="4" y="4" width="40" height="40" rx="4" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <rect x="8" y="8" width="32" height="24" rx="2" stroke="rgba(200,168,130,0.2)" strokeWidth="1" />
                        <circle cx="24" cy="20" r="6" stroke="rgba(200,168,130,0.3)" strokeWidth="1" />
                        <line x1="24" y1="20" x2="28" y2="16" stroke="rgba(200,168,130,0.3)" strokeWidth="1" />
                      </svg>
                    )}
                    {project.category === 'c-end' && (
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect x="8" y="2" width="32" height="44" rx="5" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <rect x="12" y="8" width="24" height="24" rx="2" stroke="rgba(200,168,130,0.15)" strokeWidth="1" />
                        <circle cx="24" cy="36" r="3" stroke="rgba(200,168,130,0.25)" strokeWidth="1" />
                      </svg>
                    )}
                    {project.category === 'ai' && (
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <path d="M24 8v8M24 32v8M8 24h8M32 24h8" stroke="rgba(200,168,130,0.15)" strokeWidth="1" />
                        <circle cx="24" cy="24" r="4" stroke="rgba(200,168,130,0.25)" strokeWidth="1" />
                      </svg>
                    )}
                    {project.category === 'other' && (
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect x="6" y="4" width="36" height="40" rx="3" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <rect x="12" y="10" width="24" height="18" rx="2" stroke="rgba(200,168,130,0.15)" strokeWidth="1" />
                        <line x1="12" y1="34" x2="36" y2="34" stroke="rgba(200,168,130,0.2)" strokeWidth="1" />
                      </svg>
                    )}
                  </div>
                )}
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                {project.link && (
                  project.id === 3 ? (
                    <div className="project-links">
                      <button className="project-link" onClick={onNavigateToPetApp}>
                        查看案例详情
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      {project.zcoolLink && (
                        <a href={project.zcoolLink} target="_blank" rel="noopener noreferrer" className="project-link external">
                          站酷主页
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      查看站酷主页
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )
                )}
                {/* 有内部封页的项目 */}
                {project.hasDetail && (
                  <button
                    className="project-link"
                    onClick={() => {
                      if (project.id === 4) onNavigateToAuroraApp();
                      else if (project.id === 5) onNavigateToWebDesign();
                      else if (project.id === 6) onNavigateToOtherDesign();
                    }}
                  >
                    查看案例详情
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
