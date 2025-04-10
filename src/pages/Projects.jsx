import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've worked on many projects as a developer, and these are some of my best works.
        Feel free to explore them and reach out if you'd like to collaborate or have any questions.
        You can contact me at ahmadshajahan3000@gmail.com or +91 8089021977.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="https://x.com/MrCode59636?s=09" target="_blank" rel="noopener noreferrer" className="social-link">
          Twitter
        </a>
        <a href="https://www.facebook.com/share/15wggD8y3b/" target="_blank" rel="noopener noreferrer" className="social-link">
          Facebook
        </a>
        <a href="https://github.com/ahmadshajhan" target="_blank" rel="noopener noreferrer" className="social-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mr-code-9567b333b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/mr_code_ahmad/profilecard/?igsh=MTRoYXQ1Z2llaTRnYQ==" target="_blank" rel="noopener noreferrer" className="social-link">
          Instagram
        </a>
      </div>

      <hr className="border-slate-200 mt-10" />

      <CTA />
    </section>
  );
};

export default Projects;