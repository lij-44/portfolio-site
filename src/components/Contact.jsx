import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-bg">
        <div className="contact-grid-pattern" />
        <div className="contact-glow" />
      </div>

      <div className="container contact-content">
        <div className="contact-header">
          <div className="section-label">Contact</div>
          <h2 className="contact-title">
            开启合作
            <span className="contact-title-en">Let's Work Together</span>
          </h2>
          <p className="contact-desc">
            无论您是有一个项目想要合作，还是只想打个招呼，<br />
            都欢迎随时联系我。
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M2 6l8 5.5L18 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <span className="contact-item-label">邮箱</span>
                <a href="mailto:1058312739@qq.com" className="contact-item-value">1058312739@qq.com</a>
              </div>
            </div>
          </div>

          <div className="contact-cta-wrapper">
            <a href="mailto:1058312739@qq.com" className="contact-cta">
              <span className="contact-cta-text">发送邮件</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 17L17 3M17 3H8M17 3V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <footer className="contact-footer">
          <div className="contact-footer-line" />
          <p className="contact-copyright">
            © 2026 刘筱倩 · Portfolio. Designed with care.
          </p>
        </footer>
      </div>
    </section>
  );
}
