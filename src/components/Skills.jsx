import './Skills.css';

const skillCategories = [
  {
    title: '设计工具',
    en: 'Design Tools',
    skills: [
      { name: 'Figma / Sketch', level: 95 },
      { name: 'Photoshop', level: 90 },
      { name: 'Illustrator', level: 85 },
      { name: 'InDesign', level: 75 },
    ],
  },
  {
    title: '三维 & 动效',
    en: '3D & Motion',
    skills: [
      { name: 'C4D', level: 80 },
      { name: '3ds Max', level: 70 },
      { name: 'After Effects', level: 75 },
      { name: 'Blender', level: 60 },
    ],
  },
  {
    title: '设计领域',
    en: 'Expertise',
    skills: [
      { name: 'UI/UX 设计', level: 95 },
      { name: '可视化大屏', level: 90 },
      { name: '品牌视觉', level: 85 },
      { name: '三维创意', level: 80 },
    ],
  },
  {
    title: '综合能力',
    en: 'Capabilities',
    skills: [
      { name: '设计系统搭建', level: 90 },
      { name: '团队管理', level: 85 },
      { name: '跨部门协作', level: 88 },
      { name: '项目推进', level: 92 },
    ],
  },
];

const toolTags = [
  'Figma', 'Sketch', 'PS', 'AI', 'ID',
  'C4D', '3ds Max', 'AE', 'Blender',
  'Design System', '原型设计', '动效设计',
  'APP 设计', '网页设计', 'Banner',
  '海报创意', '商业合成', '三维建模',
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-label">Skills</div>

        <h2 className="section-title">
          <span className="title-main">技能</span>
          <span className="title-sub">Skills & Expertise</span>
        </h2>

        {/* Skill Bars Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category">
              <div className="skill-category-header">
                <h3 className="skill-category-title">{cat.title}</h3>
                <span className="skill-category-en">{cat.en}</span>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-info">
                      <span className="skill-bar-name">{skill.name}</span>
                      <span className="skill-bar-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ '--fill-width': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool Tags Cloud */}
        <div className="skills-tools">
          <h4 className="skills-tools-title">工具 & 能力标签</h4>
          <div className="skills-tags-cloud">
            {toolTags.map((tag) => (
              <span key={tag} className="skills-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
