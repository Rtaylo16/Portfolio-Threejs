import logo from './logo.svg';
import './App.css';
import './customStyles.css'
import Firstload from './Composition/Composition'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import AnimatedTitle from './Composition/Utils/AnimatedText';
import AnimatedSubhead from './Composition/Utils/AnimatedSubhead';
import Spinner from './Composition/Utils/Spinner';
import ContactForm from './Composition/Utils/contact';
import { useLayoutEffect, Suspense, useRef, useEffect, useState, useCallback } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { motion, useScroll } from 'framer-motion';



function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  console.log('Ref:', ref);
  console.log('Ref.current:', ref.current);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal2 = () => {
    setModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setModalOpen2(false);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: matches ? '90%' : '50%',
    height: matches ? '90%' : '80%',
    paddingBottom: matches ? '10px' : '20px',
    bgcolor: '#e5d5c3',
    border: '2px  #000',
    borderRadius: '15px',
    boxShadow: 24,
    zIndex: -1,
    p: 4,
    overflowY: 'hidden'
  };

  const buttonStyle = {
    borderRadius: "15px",
    height: "25px",
    width: "80px",
    color: 'black',
    borderColor: 'black',
    size: 'small',
    marginBottom: matches ? '5px' : '10px', // adjust the margin as needed
    marginTop: matches ? '5px' : '15px',

  };

  const handleSocialLinkedin = () => {
    window.open("https://www.linkedin.com/in/ryan-c-taylor211/", "_blank");
  }

  const handleSocialGithub = () => {
    window.open("https://github.com/Rtaylo16", "_blank");
  }



  const renderModal = () => {
    const handleliveSite1 = () => {
      window.open("https://iptracker-seven.vercel.app/", "_blank");
    };

    const handlegithub1 = () => {
      window.open("https://github.com/Rtaylo16/Iptracker", "_blank");
    };

    return (
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"

      >
        <>

          <Box sx={style} ref={ref}>

            <div class="modal-content-1">
              <p>IP-Tracker</p>
              <IconButton onClick={handleCloseModal} style={{ position: 'absolute', right: 10, top: 10 }}>
                <CancelPresentationIcon />
              </IconButton>
            </div>
            <img src="IP-Tracker.png" style={{ height: "45%", width: "100%", zIndex: 5, position: 'absolute', padding: 0, right: '0px' }} alt="IP-Tracker" />
            <Grid container class="modal-lower-panels">
              <Grid item xs={12} sm={4} style={{ maxHeight: '100%', overflowY: 'hidden' }}>
                <div className="modal-left-content-2">
                  <Button variant="outlined" onClick={handleliveSite1} style={buttonStyle}>Site</Button>
                  <Button variant="outlined" onClick={handlegithub1} style={buttonStyle}>Github</Button>
                  <p class='tools-modal-title'>Tools/Frameworks</p>
                  <div class='tools-modal'>
                    <p style={{ margin: 0, color: 'gray' }}>React</p>
                    <p style={{ margin: 0, color: 'gray' }}>React Leaflet</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={8} style={{ maxHeight: '100%', overflowY: 'auto' }}>
                <div className="modal-content-3">
                  <p class='tools-modal-title-right'>IP-Tracker</p>
                  <p class='tools-modal-p-right'>Step into the realm of full-stack finesse with this ingenious IP tracking tool. Engineered to adjust to any device, whether it's a smartphone, tablet, or desktop, the application is a balanced blend of utility and elegance. It delivers a frictionless user experience with a subtle touch of creativity, setting it apart from the rest. A reflection of advanced technology imbued with a dash of distinctiveness</p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </>
      </Modal>
    );

  };


  const renderModal2 = () => {
    const handleliveSite2 = () => {
      window.open("https://epime-chatapp.vercel.app/", "_blank");
    };

    const handlegithub2 = () => {
      window.open("https://github.com/Rtaylo16/Epime-chatapp", "_blank");
    };

    return (
      <Modal
        open={modalOpen2}
        onClose={handleCloseModal2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"

      >
        <>

          <Box sx={style} ref={ref}>

            <div class="modal-content-1">
              <p>Epime</p>
              <IconButton onClick={handleCloseModal2} style={{ position: 'absolute', right: 10, top: 10 }}>
                <CancelPresentationIcon />
              </IconButton>
            </div>
            <img src="epime-login.png" style={{ height: "45%", width: "100%", zIndex: 5, position: 'absolute', padding: 0, right: '0px' }} alt="IP-Tracker" />
            <Grid container class="modal-lower-panels">
              <Grid item xs={12} sm={4} style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <div className="modal-left-content-2">
                  <Button variant="outlined" onClick={handleliveSite2} style={{ borderRadius: "15px", height: "25px", width: "80px", color: 'black', borderColor: 'black', size: 'small', marginBottom: '10px', marginTop: '15px' }}>Site</Button>
                  <Button variant="outlined" onClick={handlegithub2} style={{ borderRadius: "15px", height: "25px", width: "80px", color: 'black', borderColor: 'black', size: 'small' }}>Github</Button>
                  <p class='tools-modal-title'>Tools/Frameworks</p>
                  <div class='tools-modal'>
                    <p style={{ margin: 0, color: 'gray' }}>React.js</p>
                    <p style={{ margin: 0, color: 'gray' }}>Redux Toolkit</p>
                    <p style={{ margin: 0, color: 'gray' }}>Redux Toolkit Query</p>
                    <p style={{ margin: 0, color: 'gray' }}>Hero Icons</p>
                    <p style={{ margin: 0, color: 'gray' }}>React Router</p>
                    <p style={{ margin: 0, color: 'gray' }}>Node.js</p>
                    <p style={{ margin: 0, color: 'gray' }}>Express.js</p>
                    <p style={{ margin: 0, color: 'gray' }}>OpenAI</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={8} style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <div className="modal-content-3">
                  <p class='tools-modal-title-right'>Epime</p>
                  <p class='tools-modal-p-right'>Epime: an innovative application integrating modern technologies and human connection. Utilizing ChatEngine for chat functionality, Redux Toolkit for state management and API calls, Hero icons for the UI, and React Router for navigation. The backend leverages Node.js runtime, Express.js framework, and OpenAI for AI-enhanced chats. Epime serves as a bridge between cutting-edge technology foresight and the afterthought of genuine human interaction.</p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </>
      </Modal>
    );

  };

  useEffect(() => {
    // simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 7000);


  }, []);




  const boxVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const CustomButton = styled(Button)`
  background-color: transparent;
  border-color: #000; /* Set your desired button color */
  color: #000; /* Set your desired text color */
  border-radius: 15px; /* Set the desired border radius */

  &:hover {
    background-color: #bbb2bb; /* Set your desired hover color */
    border-color: #fff;
    color: #fff; /* Set your desired text color on hover */
    transition: background-color 0.3s, color 0.3s; /* Add transition for color change */
  }
`;

  const LiquidButton = () => {
    const handleClick = () => {
      window.open("https://docs.google.com/document/d/1_f7TG1-ojguBEUWq3XbzDmBQF6LbrSDZSXBjtPzDT20/edit?pli=1", "_blank");
    };
    return (
      <motion.div
        className="box"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <CustomButton variant="outlined" onClick={handleClick}>
          Resume
        </CustomButton>
      </motion.div>
    );
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div class="canvas">
        <Firstload class="FirstLoad" />
      </div>

      <div class="page">
        <div class="page-wrapper">
          <section class="title">
            <div class="title-wrapper">
              <div class="title-main">
                <AnimatedTitle name="Ryan Taylor" className="title-main-h1" />
                <AnimatedSubhead name="Full-Stack Engineer" className="title-main-desc" />
                <div class="line line-thin"></div>
                <div class="line line-medium"></div>
                <div class="line line-thick"></div>
                <div>
                  <IconButton onClick={handleSocialLinkedin} size="small">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton onClick={handleSocialGithub} size="small">
                    <GitHubIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="arrow bounce">
          <ArrowDownwardIcon fontSize="large" />
        </div>
        <div class="first-move"></div>
        <div class="first-move-mobile"></div>
        <div class="sidebar-1">
          <div class="sidebar-wrapper-1">
            <div class="section-intro-wrapper-1">
              <div class="section-title1">
                <h1 class="about-me-sidebar">About</h1>
                <h1 class="about-me-sidebar">ME</h1>
              </div>
            </div>
            <div class="header-number-1">
              <h2>01</h2>
            </div>
            <div class="top-thin-section-1"></div>
            <div class="section-detail-wrapper">
              <p class="section-text">
                As a Full-stack Developer with an artist's heart, I craft web and mobile applications that resonate. My skill set includes React, Node.js, Firebase, MySQL, and UX, allowing me to sculpt digital experiences that are as engaging as they are functional.
              </p>
              <p class="section-text">
                My inspiration flows from a range of eclectic sources such as film, vintage print media, and vivid animations. This diverse palette infuses each project with a unique narrative, resulting in digital landscapes that are aesthetically compelling and user-oriented.
              </p>
              <p class="section-text">
                Whether I'm venturing on a solo project or collaborating within a team, I navigate the challenges of development with finesse. Currently exploring the realms of Java and Spring, my commitment to continuous learning drives me to create digital experiences that persistently captivate and engage users.
              </p>
              <LiquidButton />
            </div>
          </div>
        </div>

        <div class="second-move"></div>
        <div class="second-move-mobile"></div>
        <div class="sidebar-2">
          <div class="sidebar-wrapper-2">
            <div class="section-intro-wrapper-1">
              <div class="section-title1">
                <h1 class="about-me-sidebar">Projects</h1>
              </div>
            </div>
            <div class="header-number-1">
              <h2>02</h2>
            </div>
            <div class="top-thin-section-2"></div>
            <div class="section-detail-wrapper">
              <div class="project-list">

                <div class="project-01-list-item">
                  <div class="project-01-content">
                    <div class="project-01-content-desc">
                      <h3 class="project-01-content-title">IP Tracker</h3>
                      <div class="project-01-content-p">The IP Address Tracker is a web app that provides key information about any entered IP address or domain, including its location, displayed on an interactive map.</div>
                    </div>

                  </div>
                  <div class="button-wrap">
                    <a class="line-button" href="#" onClick={(event) => {
                      event.preventDefault();
                      handleOpenModal();
                    }}>
                      <div class="line-button__arrow">
                        <span class="btnarrow"></span></div>
                    </a>
                  </div>
                </div>

                <div class="project-01-list-item">
                  <div class="project-01-content">
                    <div class="project-01-content-desc">
                      <h3 class="project-01-content-title">Epime</h3>
                      <div class="project-01-content-p">Epime, inspired by the Greek Titan Epimetheus, bridges the gap between the foresight of AI technology and the afterthought of human conversation, bringing ancient wisdom to modern communication.</div>
                    </div>

                  </div>
                  <div class="button-wrap">
                    <a class="line-button" href="#" onClick={(event) => {
                      event.preventDefault();
                      handleOpenModal2();
                    }}>
                      <div class="line-button__arrow">
                        <span class="btnarrow"></span></div>
                    </a>
                  </div>
                </div>
                <div class="top-divider"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="third-move"></div>
        <div class="third-move-mobile"></div>
        <div class="sidebar-3">
          <div class="sidebar-wrapper-3">
            <div class="section-intro-wrapper">
              <div class="section-title1">
                <h1 class="about-me-sidebar">Skills</h1>
              </div>
            </div>
            <div class="header-number-1">
              <h2>03</h2>
            </div>
            <div class="top-thin-section-3"></div>
            <div class="section-detail-wrapper">
              <div class="skills-container">
                <div class="skill-block">
                  <div class="skill-title">JavaScript</div>
                  <div class="skill__d">Powers dynamic web content through client-side scripting.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">Java</div>
                  <div class="skill__d">Drives robust application logic with its OOP and garbage collection capabilities.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">React.js</div>
                  <div class="skill__d"> Facilitates interactive UIs using JSX and Virtual DOM.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">Next.js</div>
                  <div class="skill__d"> Enhances React apps with server-side rendering and static generation.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">Three.js</div>
                  <div class="skill__d">  Simplifies working with WebGL and GLSL for 3D graphics.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">MySQL</div>
                  <div class="skill__d">Manages application data with its efficient relational database system.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">Firebase</div>
                  <div class="skill__d">Accelerates app development with ready-made backend services.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">SCSS</div>
                  <div class="skill__d">Supercharges CSS with variables, nesting, and mixins for advanced styling.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">React Native</div>
                  <div class="skill__d">Enables cross-platform mobile development using a shared JavaScript codebase.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">PHP</div>
                  <div class="skill__d">Drives server-side scripting for dynamic web content.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">Node.js</div>
                  <div class="skill__d">Empowers JavaScript to run server-side, enabling full-stack development.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">Express</div>
                  <div class="skill__d">Streamlines server-side logic with its minimalist web framework for Node.js.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">Figma</div>
                  <div class="skill__d">Facilitates UI/UX design with its collaborative, vector-based interface design tool.</div>
                  <div class="skill__line"></div>
                </div>
                <div class="skill-block">
                  <div class="skill-title">Blender</div>
                  <div class="skill__d">Enables 3D modeling, rigging, and rendering for multimedia projects.</div>
                  <div class="skill__line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-div">
          <div class='contact-title-div'>
            <h1 class="about-me-sidebar">Contact</h1>
          </div>
          <ContactForm />
        </div>
      </div>
      {renderModal()}
      {renderModal2()}
    </>
  )
}

export default App;
