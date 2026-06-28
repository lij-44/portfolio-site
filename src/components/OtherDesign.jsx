import './PetApp.css'; // 复用统一封页样式

const screenshots = [
  { id: 1, src: '/portfolio-site/images/other-design/APP界面设计1 (3)-39-37.jpg', title: '海报创意 1' },
  { id: 2, src: '/portfolio-site/images/other-design/APP界面设计1 (3)-39-38.jpg', title: '商业合成' },
  { id: 3, src: '/portfolio-site/images/other-design/APP界面设计1 (3)-39-39.jpg', title: '三维设计' },
  { id: 4, src: '/portfolio-site/images/other-design/APP界面设计1 (3)-39-40.jpg', title: '视觉设计' },
];

export default function OtherDesign({ onBack }) {
  return (
    <div className="pet-app">
      <section className="pet-cover" style={{ minHeight: '350px' }}>
        <button className="pet-back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          返回主页
        </button>

        <div className="pet-cover-bg">
          <div className="pet-cover-grain" />
          <div className="pet-cover-glow" />
        </div>

        <div className="pet-cover-content container">
          <div className="pet-cover-eyebrow">
            <span className="pet-cover-line" />
            BRANDING · POSTER · 3D · 2024
          </div>
          <h1 className="pet-cover-title">
            <span className="pet-cover-title-cn">其他设计作品</span>
            <span className="pet-cover-title-en">Visual Design Portfolio</span>
          </h1>
          <p className="pet-cover-desc">
            海报创意、商业图像合成、三维设计等多元化视觉作品，展现多维度跨媒介的视觉表达能力
          </p>
          <div className="pet-cover-meta">
            <div className="pet-meta-item">
              <span className="pet-meta-label">类型</span>
              <span className="pet-meta-value">海报 / 合成 / 3D</span>
            </div>
            <div className="pet-meta-divider" />
            <div className="pet-meta-item">
              <span className="pet-meta-label">风格</span>
              <span className="pet-meta-value">多元化视觉</span>
            </div>
            <div className="pet-meta-divider" />
            <div className="pet-meta-item">
              <span className="pet-meta-label">作品</span>
              <span className="pet-meta-value">{screenshots.length} 款设计</span>
            </div>
          </div>
          <div className="pet-cover-scroll">
            <span>浏览作品</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="pet-gallery" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="pet-gallery-header">
            <div className="section-label">Designs</div>
            <h2 className="pet-gallery-title">
              <span className="title-main">视觉设计展示</span>
              <span className="title-sub">Visual Design Showcase</span>
            </h2>
            <p className="pet-gallery-desc">
              跨媒介的多元化视觉作品，涵盖海报、合成、三维等方向
            </p>
          </div>

          <div className="pet-gallery-grid mixed fixed-ratio">
            {screenshots.map((shot) => (
              <div key={shot.id} className="pet-gallery-item">
                <img src={shot.src} alt={shot.title} loading="lazy" className="pet-gallery-img" />
                <div className="pet-gallery-item-overlay">
                  <span className="pet-gallery-item-label">{shot.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pet-footer">
        <button className="pet-back-btn secondary" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          返回主页
        </button>
      </div>
    </div>
  );
}
