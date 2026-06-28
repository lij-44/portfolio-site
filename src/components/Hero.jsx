import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Subtle background animation */}
      <div className="hero-bg">
        <div className="hero-grain" />
        <div className="hero-glow-top" />
      </div>

      <div className="hero-content container">
        <div className="hero-grid">
          {/* Left — Main Typography */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" />
              UI/UX DESIGNER · VISUAL CREATOR
            </div>

            <h1 className="hero-name">
              <span className="hero-name-cn">刘筱倩</span>
              <span className="hero-name-en">LIU XIAOQIAN</span>
            </h1>

            <p className="hero-desc">
              5年+ 设计经验 · 华为资深设计师背景<br />
              擅长 B 端可视化、C 端产品与品牌展会全品类视觉设计
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-btn-primary" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                浏览作品
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="hero-btn-ghost" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                联系我
              </a>
            </div>
          </div>

          {/* Right — Visual Element */}
          <div className="hero-right">
            <div className="hero-visual">
              <div className="hero-video-card">
                <video
                  className="hero-card-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/videos/地球.mp4"
                />
                <div className="hero-card-overlay" />
              </div>
              <div className="hero-video-card secondary">
                <video
                  className="hero-card-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/videos/实时监控.mp4"
                />
                <div className="hero-card-overlay" />
              </div>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">5+</span>
                <span className="hero-stat-label">年经验</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">50+</span>
                <span className="hero-stat-label">项目交付</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">华为</span>
                <span className="hero-stat-label">资深背景</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>SCROLL</span>
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  );
}
