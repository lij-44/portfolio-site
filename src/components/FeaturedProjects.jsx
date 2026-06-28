import './FeaturedProjects.css';

const featured = [
  {
    id: 1,
    title: '数据实时监控测评分析可视化',
    subtitle: 'B-End · Data Visualization',
    category: 'B 端系统',
    desc: '面向企业运维场景的实时数据监控与测评分析可视化大屏，覆盖全球节点数据呈现与异常预警交互，独立完成 UI 设计与动效制作。',
    size: 'large',
    video: '/videos/地球.mp4',
  },
  {
    id: 2,
    title: '我宠 — 宠物服务 App',
    subtitle: 'C-End · Product Design',
    category: 'C 端产品',
    desc: '从用户研究到界面交付的完整移动端设计案例，为宠物主提供洗护、医疗、社交一站式服务。',
    size: 'normal',
    link: 'https://www.zcool.com.cn/work/ZNTc0MDk2MzI=.html',
  },
  {
    id: 3,
    title: '健康检测平台可视化',
    subtitle: 'B-End · Health Data Viz',
    category: 'B 端系统',
    desc: '健康检测数据可视化大屏方案，集成人体健康指标实时监测与数据呈现。',
    size: 'normal',
    video: '/videos/人体.mp4',
  },
];

export default function FeaturedProjects({ onNavigateToPetApp }) {
  return (
    <section id="featured" className="featured">
      <div className="container">
        <div className="section-label">Featured</div>

        <h2 className="section-title">
          <span className="title-main">精选项目</span>
          <span className="title-sub">Featured Projects</span>
        </h2>

        <div className="featured-grid">
          {featured.map((project) => (
            <article
              key={project.id}
              className={`featured-card ${project.size === 'large' ? 'large' : ''}`}
            >
              <div className="featured-image">
                <div className="featured-image-bg">
                  {project.video ? (
                    <video
                      className="featured-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={project.video}
                    />
                  ) : (
                    <div className="featured-image-pattern" />
                  )}
                </div>
                <span className="featured-category">{project.category}</span>
              </div>
              <div className="featured-content">
                <p className="featured-subtitle">{project.subtitle}</p>
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-desc">{project.desc}</p>
                {project.id === 2 ? (
                  <button className="featured-link" onClick={onNavigateToPetApp}>
                    查看案例详情
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ) : (
                  <span className="featured-link">
                    {project.link ? '查看站酷主页' : '查看案例'}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
