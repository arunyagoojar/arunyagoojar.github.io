import blog from './assets/blog.png';
import task from './assets/task.svg';
import eye from './assets/eye.png';
import a from './assets/a.svg';
import music from './assets/music.png';
import script from './assets/script.png';
import update from './assets/update.png';

export default function Content() {
  return (
    <>
      <div className="content">
        <div id="about" className="about">
          <p>Aspiring tech engineer with a flair for fusing engineering and design. My sweet spot is the intersection of coding and user experience.</p>
          <p>I geek out on languages like <b>C++</b>, <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. But I also obsess over aesthetics and intuition in <b>UI</b> and <b>UX</b>. I love sculpting products that are both visually striking and seamlessly usable. </p>
          <p>I'm always seeking out new adventures, perspectives, and design inspirations. Whether it's through travel, food, art or just meeting new people, I immerse myself in diverse experiences that fuel my hybrid technical-creative approach.</p>
        </div>

        <div id="experience" className="journey">
          <div className="learning-path">
           <p className='title'>Experience</p>
            <div className="lesson">
              <div className="lesson-intro">
                <h6>June - Present 2023</h6>
              </div>
              <div className="lesson-details">
                <h4>Developer - Infocus Signcom</h4>
                <h6>Lead Web Developer & Designer</h6>
                <p>As a web developer intern, I'm redesigning my company's services, including courses, to enhance user experience and boost our digital presence. I'm thrilled to make a meaningful impact using my skills.</p>
                <div className="skills-container">
                  <a className="skill-button">UI/UX</a>
                  <a className="skill-button">FIGMA</a>
                  <a className="skill-button">PHOTOSHOP</a>
                  <a className="skill-button">GRAPHIC DESIGN</a>
                  <a className="skill-button">HTML</a>
                  <a className="skill-button">CSS</a>
                  <a className="skill-button">JS</a>
                  <a className="skill-button">REACT. JS</a>
                </div>
              </div>
            </div>

            <div className="lesson">
              <div className="lesson-intro">
                <h6>July - Present 2023</h6>
              </div>
              <div className="lesson-details">
                <h4>Developer - Code Clause</h4>
                <h6>Front end Web Developer</h6>
                <p>At Code Clause, as a front-end developer, I built a portfolio site, an Amazon-like site, and a product page, successfully delivering inventive designs and completing all tasks.</p>
                <div className="skills-container">
                  <a className="skill-button">UI/UX</a>
                  <a className="skill-button">GRAPHIC DESIGN</a>
                  <a className="skill-button">HTML</a>
                  <a className="skill-button">CSS</a>
                  <a className="skill-button">JS</a>
                  <a className="skill-button">REACT. JS</a>
                </div>
              </div>
            </div>

            <div className="lesson">
              <div className="lesson-intro">
                <h6>April - Finished 2023</h6>
              </div>
              <div className="lesson-details">
                <h4>Developer - Manojagrati Special School</h4>
                <h6>Freelancing</h6>
                <p>At Manojagrati Special School, I worked as a freelancer to design and develop a static webpage for their NGO, enhancing their online presence.</p>
                <div className="skills-container">
                  <a className="skill-button">UI/UX</a>
                  <a className="skill-button">HTML</a>
                  <a className="skill-button">CSS</a>
                  <a className="skill-button">JS</a>
                </div>
              </div>
            </div>

          </div>
          <a target="_blank" href="https://drive.google.com/file/d/1h_K45H2_TerPFP898-kRw0T4crp3V0ts/view?usp=share_link" className="resume">View Full Résumé ›</a>
        </div>

        <div id="projects" className="projects">
          <div id="experience" className="journey">
            <div className="learning-path">
           <p className='title2'>Projects</p>
              <div className="lesson">
                <div className="icon-intro">
                  <img className="blog" src={blog}/>
                </div>
                <div className="project-details">
                  <h4>The Reader</h4>
                  <h6>Creating a Blog Website Using GitHub Pages</h6>
                  <p>An accessible solution for developers with basic web skills, this project offers a straightforward method to create customizable blog sites via JSON file edits and index additions.</p>
                  <div className='link'>
                    <a href='https://arunyagoojar.me/thereader/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/Modern-Design-Blog-Builder-Solution'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">Github</a>
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                    <a className="skill-button">JS</a>
                    <a className="skill-button">JSON</a>
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={task}/>
                </div>
                <div className="project-details">
                  <h4>React Tasks</h4>
                  <h6>Vision OS styled Task Manager</h6>
                  <p>React Tasks is a simple task management app with an intuitive design inspired by Apple. Easy to add, organize, and check off your daily tasks. Form meets function in this minimal productivity app.</p>
                  <div className='link'>
                    <a href='https://arunyagoojar.me/react-tasks/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/react-tasks'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UI/UX</a>
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                    <a className="skill-button">JS</a>
                    <a className="skill-button">REACT. JS</a>
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={eye}/>
                </div>
                <div className="project-details">
                  <h4>Easy-Eye Theme</h4>
                  <h6>A theme designed for visual comfort</h6>
                  <p>A code editor theme optimizing readability with a high-contrast, dark color scheme and subtle syntax highlighting, designed to reduce eye strain and boost productivity for developers.</p>
                  <div className='link'>
                    <a href='https://arunyagoojar.me/Easy-Eye/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/Easy-Eye'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UX</a>
                    <a className="skill-button">CSS</a>
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={a}/>
                </div>
                <div className="project-details">
                  <h4>Vision OS Portfolio</h4>
                  <h6>vision os inspired portfolio</h6>
                  <p>A digital portfolio project showcasing my skills and works, uniquely designed with the sleek, modern aesthetics of Vision OS windows.</p>
                  <div className='link'>
                    <a href='https://arunyagoojar.me/VisionOS-Portfolio-Design/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/VisionOS-Portfolio-Design'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UI/UX</a>
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                    <a className="skill-button">JS</a>
                    <a className="skill-button">REACT. JS</a>
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={music}/>
                </div>
                <div className="project-details">
                  <h4>Music Product Site</h4>
                  <h6>A streamlined product showcase site</h6>
                  <p>A dynamic product site showcasing our music company's diverse offerings, from cutting-edge tracks to innovative sound solutions, all wrapped in a user-friendly design.</p>
                  <div className='link'>
                    <a href='https://arunyagoojar.me/music-product-site/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/music-product-site'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UI/UX</a>
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                  </div>
                </div>
              </div>
              
              <div className="lesson">
                <div className="icon-intro">
                  <img src={script}/>
                </div>
                <div className="project-details">
                  <h4>Run AsDate - Mac OS</h4>
                  <h6>Script for Backdated App Execution</h6>
                  <p>A user-friendly shell script complemented by Apple Shortcuts, designed to effortlessly run apps on a specified previous date.</p>
                  <div className='link'>
                    <a href='https://github.com/arunyagoojar/RunAsDate-for-MacOS'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">SHELL SCRIPT</a>
                    <a className="skill-button">APPLE SHORTCUTS</a>
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={update}/>
                </div>
                <div className="project-details">
                  <h4>Moc Update</h4>
                  <h6>Emulations of Various OS Update Screens</h6>
                  <p>A unique project replicating the update screens of various operating systems including Chrome OS, Windows 10, 11, and Apple Mac, offering a nostalgic and educational experience.</p>
                  <div className='link'>
                    <a href='https://mocupdate.tech/'>Live↗</a>
                    <a href='https://github.com/arunyagoojar/MocUpdate'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                  </div>
                </div>
              </div>

              <a href="https://github.com/arunyagoojar" className="github">Visit my github profile ›</a>
            </div>
          </div>
        </div>

        <p className='end'>Influenced by <a  href='https://brittanychiang.com'>Brittany Chiang's</a> portfolio, this project was reimagined with a personal twist. Developed using React and core web technologies in the Visual Studio Code environment. </p>
      </div>
    </>
  )
}
