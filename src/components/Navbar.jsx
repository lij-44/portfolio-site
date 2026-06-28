import { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { label: '首页', href: '#hero' },
  {
    label: '项目作品',
    href: '#projects',
    children: [
      { label: 'AI 创作', href: '#projects' },
      { label: 'B 端系统', href: '#projects' },
      { label: 'C 端产品', href: '#projects' },
      { label: '其他', href: '#projects' },
    ],
  },
  { label: '关于我', href: '#about' },
  { label: '技能', href: '#skills' },
  { label: '联系方式', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setDropdownOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="logo-dot" />
          LIU XIAOQIAN
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`nav-item ${item.children ? 'has-dropdown' : ''}`}
              onMouseEnter={() => item.children && setDropdownOpen(true)}
              onMouseLeave={() => item.children && setDropdownOpen(false)}
            >
              <a
                href={item.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
                {item.children && (
                  <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>

              {item.children && dropdownOpen && (
                <ul className="dropdown">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="dropdown-link"
                        onClick={(e) => handleNavClick(e, child.href)}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, '#contact')}>
          联系我
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}
