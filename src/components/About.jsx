import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          {/* Left — Photo */}
          <div className="about-left">
            <div className="about-photo-wrapper">
              <div className="about-photo">
                <svg width="100%" height="100%" viewBox="0 0 400 520" fill="none" preserveAspectRatio="xMidYMid meet">
                  <rect width="400" height="520" rx="6" fill="var(--bg-card)" />
                  <circle cx="200" cy="180" r="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <circle cx="200" cy="170" r="55" stroke="rgba(200,168,130,0.2)" strokeWidth="1" />
                  <path d="M120 370c0-44.183 35.817-80 80-80s80 35.817 80 80" stroke="rgba(200,168,130,0.2)" strokeWidth="1" />
                  <rect x="60" y="400" width="280" height="60" rx="4" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  <line x1="60" y1="415" x2="340" y2="415" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <line x1="60" y1="430" x2="300" y2="430" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  <line x1="60" y1="445" x2="320" y2="445" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right — Summary + 个人优势 */}
          <div className="about-right">
            <div className="section-label">About</div>
            <h2 className="section-title">
              <span className="title-main">关于我</span>
              <span className="title-sub">About Me</span>
            </h2>

            {/* Summary */}
            <div className="about-summary">
              <span>5年+ 设计经验</span>
              <span className="about-summary-dot" />
              <span>华为资深设计师背景</span>
            </div>
            <p className="about-summary-desc">
              擅长 B 端可视化、C 端产品与品牌展会全品类视觉设计
            </p>

            {/* 个人优势 */}
            <div className="about-strengths">
              <h4 className="about-section-label">个人优势</h4>
              <p className="about-strength-text">
                行业背景上，拥有多年的美术绘画功底，设计专业科班出身，审美在线；
                工作上，有一定的执行力、责任感和忠诚度、以及不断精进的学习态度；
                专业上，精通各类设计和三维软件，擅于图形设计、三维创意等可多维度延申性发展
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
