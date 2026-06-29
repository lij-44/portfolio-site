import './PetApp.css'; // 复用统一封页样式

const screenshots = [
  { id: 1, src: '/images/aurora-app/APP界面设计1 (3)-24.jpg', title: '启动页' },
  { id: 2, src: '/images/aurora-app/APP界面设计1 (3)-25.jpg', title: '登录注册' },
  { id: 3, src: '/images/aurora-app/APP界面设计1 (3)-26.jpg', title: '首页仪表盘' },
  { id: 4, src: '/images/aurora-app/APP界面设计1 (3)-27.jpg', title: '计步详情' },
  { id: 5, src: '/images/aurora-app/APP界面设计1 (3)-28.jpg', title: '运动记录' },
  { id: 6, src: '/images/aurora-app/APP界面设计1 (3)-29.jpg', title: '健康数据' },
  { id: 7, src: '/images/aurora-app/APP界面设计1 (3)-30.jpg', title: '目标设定' },
  { id: 8, src: '/images/aurora-app/APP界面设计1 (3)-31.jpg', title: '个人中心' },
  { id: 9, src: '/images/aurora-app/APP界面设计1 (3)-32.jpg', title: '成就徽章' },
  { id: 10, src: '/images/aurora-app/APP界面设计1 (3)-33.jpg', title: '设置页面' },
];

export default function AuroraApp({ onBack }) {
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
            C-END · PRODUCT DESIGN · 2024
          </div>
          <h1 className="pet-cover-title">
            <span className="pet-cover-title-cn">极光计步</span>
            <span className="pet-cover-title-en">Aurora Pedometer App</span>
          </h1>
          <p className="pet-cover-desc">
            运动计步与健康管理 App 界面设计，以极光为视觉灵感，打造轻盈、动感的运动体验界面
          </p>
          <div className="pet-cover-meta">
            <div className="pet-meta-item">
              <span className="pet-meta-label">平台</span>
              <span className="pet-meta-value">iOS / Android</span>
            </div>
            <div className="pet-meta-divider" />
            <div className="pet-meta-item">
              <span className="pet-meta-label">定位</span>
              <span className="pet-meta-value">运动健康</span>
            </div>
            <div className="pet-meta-divider" />
            <div className="pet-meta-item">
              <span className="pet-meta-label">页面</span>
              <span className="pet-meta-value">{screenshots.length} 个界面</span>
            </div>
          </div>
          <div className="pet-cover-scroll">
            <span>浏览界面</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="pet-gallery" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="pet-gallery-header">
            <div className="section-label">Screenshots</div>
            <h2 className="pet-gallery-title">
              <span className="title-main">界面设计展示</span>
              <span className="title-sub">UI Design Gallery</span>
            </h2>
            <p className="pet-gallery-desc">
              完整的移动端界面设计，以极光色彩为视觉主题，打造轻盈动感的运动体验
            </p>
          </div>

          <div className="pet-gallery-grid portrait fixed-ratio">
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
