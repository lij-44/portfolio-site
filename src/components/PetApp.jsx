import './PetApp.css';

// 所有我宠 App 界面截图
const screenshots = [
  { id: 3, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-03.jpg', title: '登录注册' },
  { id: 5, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-05.jpg', title: '服务分类' },
  { id: 6, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-06.jpg', title: '洗护服务' },
  { id: 7, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-07.jpg', title: '医疗健康' },
  { id: 8, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-08.jpg', title: '食品商城' },
  { id: 9, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-09.jpg', title: '社区动态' },
  { id: 10, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-10.jpg', title: '宠物档案' },
  { id: 11, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-11.jpg', title: '消息通知' },
  { id: 12, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-12.jpg', title: '个人中心' },
  { id: 13, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-13.jpg', title: '设置页面' },
  { id: 14, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-14.jpg', title: '订单详情' },
  { id: 15, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-15.jpg', title: '支付流程' },
  { id: 16, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-16.jpg', title: '预约流程' },
  { id: 17, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-17.jpg', title: '地图导航' },
  { id: 18, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-18.jpg', title: '评价反馈' },
  { id: 19, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-19.jpg', title: '搜索结果' },
  { id: 20, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-20.jpg', title: '会员中心' },
  { id: 21, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-21.jpg', title: '数据统计' },
  { id: 22, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-22.jpg', title: '引导页 1' },
  { id: 23, src: '/portfolio-site/images/pet-app/APP界面设计1 (3)-23.jpg', title: '引导页 2' },
];

export default function PetApp({ onBack }) {
  return (
    <div className="pet-app">
      {/* Cover Hero */}
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
            <span className="pet-cover-title-cn">我宠</span>
            <span className="pet-cover-title-en">Pet Service App</span>
          </h1>

          <p className="pet-cover-desc">
            基于爱宠人士衍生的宠物服务 App，提供洗护、医疗、食品购买、社区交流等一站式服务
          </p>

          <div className="pet-cover-meta">
            <div className="pet-meta-item">
              <span className="pet-meta-label">平台</span>
              <span className="pet-meta-value">iOS / Android</span>
            </div>
            <div className="pet-meta-divider" />
            <div className="pet-meta-item">
              <span className="pet-meta-label">定位</span>
              <span className="pet-meta-value">中端用户</span>
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

      {/* Screenshot Gallery */}
      <section className="pet-gallery" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="pet-gallery-header">
            <div className="section-label">Screenshots</div>
            <h2 className="pet-gallery-title">
              <span className="title-main">界面设计展示</span>
              <span className="title-sub">UI Design Gallery</span>
            </h2>
            <p className="pet-gallery-desc">
              完整的移动端界面设计，覆盖从启动引导到核心功能的所有关键页面
            </p>
          </div>

          <div className="pet-gallery-grid portrait fixed-ratio">
            {screenshots.map((shot) => (
              <div key={shot.id} className="pet-gallery-item">
                <img
                  src={shot.src}
                  alt={shot.title}
                  loading="lazy"
                  className="pet-gallery-img"
                />
                <div className="pet-gallery-item-overlay">
                  <span className="pet-gallery-item-label">{shot.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
