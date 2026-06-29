import './PetApp.css'; // 复用统一封页样式

const screenshots = [
  { id: 1, src: '/images/web-design/APP界面设计1 (3)-34.jpg', title: '品牌官网 1' },
  { id: 2, src: '/images/web-design/APP界面设计1 (3)-35.jpg', title: '品牌官网 2' },
  { id: 3, src: '/images/web-design/APP界面设计1 (3)-36.jpg', title: '企业站设计' },
];

export default function WebDesign({ onBack }) {
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
            WEB DESIGN · BRANDING · 2024
          </div>
          <h1 className="pet-cover-title">
            <span className="pet-cover-title-cn">网页设计作品</span>
            <span className="pet-cover-title-en">Web Design Portfolio</span>
          </h1>
          <p className="pet-cover-desc">
            多款品牌官网与企业站网页设计，涵盖运动器材、科技企业等不同行业，从信息架构到高保真完整交付
          </p>
          <div className="pet-cover-meta">
            <div className="pet-meta-item">
              <span className="pet-meta-label">类型</span>
              <span className="pet-meta-value">品牌官网 / 企业站</span>
            </div>
            <div className="pet-meta-divider" />
            <div className="pet-meta-item">
              <span className="pet-meta-label">涵盖</span>
              <span className="pet-meta-value">信息架构 → 高保真</span>
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
              <span className="title-main">网页设计展示</span>
              <span className="title-sub">Web Design Showcase</span>
            </h2>
            <p className="pet-gallery-desc">
              从品牌定位到视觉呈现，完整的网页设计案例展示
            </p>
          </div>

          <div className="pet-gallery-grid landscape fixed-ratio">
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
