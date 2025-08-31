import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HTML from "../assets/img/HTML5.svg";
import CSS from "../assets/img/CSS3.svg";
import JavaScript from "../assets/img/JavaScript.svg";
import ReactLogo from "../assets/img/React.svg";
import Python from "../assets/img/Python.svg";
import CPP from "../assets/img/C++ (CPlusPlus).svg";
import Github from "../assets/img/github-142-svgrepo-com.svg";
// import Node from "../assets/img/Nodejs.svg";
import Django from "../assets/img/django-svgrepo-com.svg";
import Git from "../assets/img/Git.svg";
import SQL from "../assets/img/SQL Developer.svg";
import AWS from "../assets/img/AWS.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of my technical skills and proficiencies.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={HTML} alt="HTML5 logo" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={CSS} alt="CSS3 logo" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={JavaScript} alt="JavaScript logo" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={ReactLogo} alt="React logo" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={CPP} alt="C++ logo" />
                  <h5>C++</h5>
                </div>
                {/* <div className="item">
                                <img src={Node} alt="Node.js logo" />
                                <h5>Node.js</h5>
                            </div> */}
                <div className="item">
                  <img src={Python} alt="Python logo" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={Django} alt="Django logo" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={Git} alt="Git logo" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={Github} alt="GitHub logo" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img src={SQL} alt="SQL logo" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={AWS} alt="AWS logo" />
                  <h5>AWS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
