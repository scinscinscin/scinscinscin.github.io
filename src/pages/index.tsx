import styles from "../styles/index.module.scss";
import Profile from "../../public/profile.png";
import LamonaFeatured from "../../public/lamona_featured.png";
import CSSFeatured from "../../public/css_featured.png";
import MWRFeatured from "../../public/main_website_featured.png";
import LandingImage from "../../public/landing_featured.png";
import BylinePageImage from "../../public/bylines_featured.png";
import R101_2023Featured from "../../public/r101_2023.png";
import SectionsPageImage from "../../public/sections_featured.png";
import FeaturedArticlePageImage from "../../public/featured_page.png";
import RedstoneComputer from "../../public/redstone_computer.png";
import ScintaxFeatured from "../../public/scintax_featured.png";
import ScinSSFeatured from "../../public/scinss_featured.png";
import MastheadFeatured from "../../public/masthead_featured.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ReactNode, useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "react-simple-typewriter";

const Writer = () => (
  <span style={{ color: "var(--gray)" }}>
    <Typewriter words={["sysadmin", "student"]} loop />
  </span>
);

function PopoutHoverable(props: { children: ReactNode; active: boolean; setActive: (b: boolean) => void }) {
  return (
    <>
      <div className={styles.right}>
        <div className={styles.popout_hoverable}>
          <div className={styles.zoomer} onClick={() => props.setActive(true)}>
            <Image src={MWRFeatured} alt="TomasinoWeb.org main website featured image" />
          </div>
        </div>
      </div>

      <div
        className={
          styles.popout + " " + (props.active ? styles.active_popout : undefined) + " " + styles.removeOnMobile
        }
      >
        {props.children}
      </div>
      <div className={styles.closer + " " + styles.removeOnMobile} onClick={() => props.setActive(false)}></div>
    </>
  );
}

export default function () {
  const [mainWebsitePopoutActive, setMainWebsitePopoutActive] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <Image src={Profile} alt="my profile picture" className={styles.img} />
          <div className={styles.right_side}>
            <div className={styles.right_side_inner}>
              <h1 className={styles.heading}>Lance Owen Gulinao</h1>
              <h2 className={styles.subheading}>
                Fullstack Web Developer
                <span className={styles.writer}>
                  , <Writer />
                </span>
              </h2>
            </div>

            <div className={styles.icons}>
              <a href="https://github.com/scinscinscin" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size="2xl" />
              </a>

              <a href="https://www.linkedin.com/in/lance-owen-gulinao-028644258/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
              </a>
            </div>
          </div>
        </header>

        {/** HIBIKASE: https://www.youtube.com/watch?v=TkroHwQYpFE */}
        <section className={styles.section + " " + styles.about}>
          <h1>About</h1>

          <div className={styles.item}>
            <p>
              👋 I'm Lance, a second year computer science student studying in UST. I develop websites that provide
              value to other people. I constantly refine my skills and workflow by experimenting with new tech and
              tools.
            </p>
          </div>

          <div className={styles.item}>
            <p>
              In my free time, I automate tedious processes that block creative output and tinker with programming
              language design.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h1>Education</h1>

          <div className={styles.item}>
            <div className={styles.split}>
              <h1>University of Santo Tomas</h1>
              <h1 className={styles.removeOnMobile}>2022 - Present</h1>
            </div>
            <h2>BS Computer Science</h2>
            <ul>
              <li>
                Winner of CodeSprint 2023, a competitive programming competition hosted by the UST Computer Science
                Society
              </li>
              <li>1st runner up in DLSU Hackercup 2023, a hackathon hosted by the La Salle Computer Society</li>
              <li>Consistent dean's lister with{" <"}1.50 running GWA</li>
            </ul>
          </div>

          <div className={styles.item}>
            <div className={styles.split}>
              <h1>De La Salle University - Integrated School</h1>
              <h1 className={styles.removeOnMobile}>2020 - 2022</h1>
            </div>
            <h2>Senior High School - STEM</h2>
            <ul>
              <li>
                Published{" "}
                <a
                  href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/research/journals/mjs/MJS15-2022/issue-2/MJS15-3-2023-chu-et-al.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  a paper in the Manila Journal of Science
                </a>{" "}
                discussing the viability of using code libraries as a teaching aid for problem solving skills in the
                context of programming.
              </li>
              <li>
                Presented{" "}
                <a href="https://github.com/Cybalt-SR/SpaceSimulator" target="_blank">
                  SpaceSimulator
                </a>
                , a classical mechanics code library written in C# for calculating various physics concepts, in the 2022
                DLSU SHS Research Congress.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h1>Experience</h1>

          <div className={styles.item}>
            <h1>Lead Backend Developer</h1>
            <h2>TomasinoWeb</h2>

            <ul>
              <li>Designed and implemented website backends using latest web development technologies. </li>
              <li>Lead projects and coordinated features and scope with the frontend and UI/UX teams.</li>
              <li>Developed minimum viable prototypes which iterated into published applications.</li>
              <li>Onboarded fellow backend developers with chosen technology stacks.</li>
              <li>Deployed websites on VPSs using Nginx + Docker and cloud hosting platforms.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section + " " + styles.sectionWithImages}>
          <h1>Websites I've worked on</h1>

          <div className={styles.item + " " + styles.divide}>
            <div className={styles.left}>
              <h1 className={styles.tw_heading}>
                <a href="https://tomasinoweb.org" target="_blank" rel="noopener noreferrer">
                  TomasinoWeb.org
                </a>
              </h1>

              <h2>
                The official website of <em>TomasinoWeb</em>, the premier digital media organizaton of the University of
                Santo Tomas.
              </h2>

              <div className={styles.push_everything_bottom}></div>
              <div>
                <h2
                  className={styles.removeOnMobile}
                  style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}
                  onClick={() => setMainWebsitePopoutActive(true)}
                >
                  Learn More <FontAwesomeIcon icon={faChevronRight} />
                </h2>
              </div>
            </div>

            <PopoutHoverable active={mainWebsitePopoutActive} setActive={setMainWebsitePopoutActive}>
              <h1 className={styles.tw_heading + " " + styles.heading}>TomasinoWeb.org</h1>
              <h2 className={styles.subheading}>
                The official website of the premier digital media organizaton of the University of Santo Tomas
              </h2>

              <section className={styles.section}>
                <div className={styles.image_grid}>
                  <div style={{ gridArea: "a" }} className={styles.horizontal_grid_image}>
                    <div className={styles.zoomer}>
                      <a href="https://tomasinoweb.org" target="_blank" rel="noopener noreferrer">
                        <Image src={LandingImage} alt="TomasinoWeb.org landing page" />
                        <div className={styles.container}>
                          <h1>Landing Page</h1>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div style={{ gridArea: "b" }} className={styles.vertical_grid_image}>
                    <div className={styles.zoomer}>
                      <a href="https://tomasinoweb.org/byline/brin-isaac" target="_blank" rel="noopener noreferrer">
                        <Image src={BylinePageImage} alt="TomasinoWeb.org author byline page" />
                        <div className={styles.container}>
                          <h1>Byline Page</h1>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div style={{ gridArea: "c" }} className={styles.vertical_grid_image}>
                    <div className={styles.zoomer}>
                      <a href="https://tomasinoweb.org/masthead" target="_blank" rel="noopener noreferrer">
                        <Image src={MastheadFeatured} alt="TomasinoWeb.org masthead" />
                        <div className={styles.container}>
                          <h1>Masthead</h1>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div style={{ gridArea: "d" }} className={styles.horizontal_grid_image}>
                    <div className={styles.zoomer}>
                      <a
                        href="https://tomasinoweb.org/post/1689390437440-daa6899f-Living-in-modern-sensitivity:-Stop-trying-to-make-%22woke%22-an-insult/featured"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={FeaturedArticlePageImage} alt="TomasinoWeb.org featured article" />
                        <div className={styles.container}>
                          <h1>Featured Article Page</h1>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <h2 className={styles.caption}>Some of the pages I brought to life</h2>
              </section>

              <section className={styles.section}>
                <h1>
                  Problems faced and solutions{" "}
                  <span className={styles.section_heading_bestie}>
                    <a
                      href="https://github.com/TomasinoWeb/webtech/blob/main/how-tomasinoweb-org-works.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      system design writeup here
                    </a>
                  </span>
                </h1>

                <div className={styles.item}>
                  <h1>Short development time (April 18 - June 19)</h1>
                  <ul>
                    <li>
                      Creating a custom backend framework that allowed for rapid feature development and integration
                      between backend and frontend.
                    </li>
                    <li>Implementing continous integration and testing with GitHub actions for constant QA.</li>
                    <li>
                      Developing reusable components for the public and admin side of the website, with the help of SCSS
                      mixins.
                    </li>
                  </ul>
                </div>

                <div className={styles.item}>
                  <h1>Lack of existing code libraries for common tasks</h1>
                  <h2>Developed copy and paste code snippets that can be used in future projects</h2>

                  <ul>
                    <li>
                      Lack of full text search support for Prisma + SQLite
                      <ul></ul>
                    </li>

                    <li>
                      <a
                        href="https://gist.github.com/scinscinscin/27dd8cd65b65dd87af1982e19e7cf9f5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gandalf
                      </a>{" "}
                      - A function for describing and manipulating bitfields with full typesafety.{" "}
                      <ul>
                        <li>Used to implement role based user authentication with permissions.</li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://gist.github.com/scinscinscin/50dea8ae6a23903c2deb7c8a58b86845"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RuntimeEnum
                      </a>{" "}
                      - A function for creating enums which can be validated at runtime using Zod.
                      <ul>
                        <li>Used to store enum strings in databases that don't support enum values.</li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://gist.github.com/scinscinscin/f986dbb2c56b158c36048fe257cb77b2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Scheduler.ts
                      </a>{" "}
                      - A basic task scheduler built on top of node-schedule.
                      <ul>
                        <li>Used to release scheduled posts in the content management system.</li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://gist.github.com/scinscinscin/998bf5d35c464bbdc5324f41204c9523"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Paginator
                      </a>{" "}
                      - A react hook generator for dealing with paginated data from the backend.{" "}
                    </li>
                  </ul>
                </div>

                <div className={styles.item}>
                  <h1>Reconciling content from an existing repository</h1>
                  <ul>
                    <li>Automated migration of content from old sources using Google Sheets</li>
                  </ul>
                </div>
              </section>
            </PopoutHoverable>
          </div>

          <div className={styles.item + " " + styles.divide}>
            <div className={styles.left}>
              <h1 className={styles.lamona_heading}>
                <a href="https://lamona.lol" target="_blank" rel="noopener noreferrer">
                  lamona
                </a>
              </h1>

              <h2>A food and drink directory for Thomasians featuring over 180 establishments.</h2>
            </div>

            <div className={styles.right + " " + styles.zoomer}>
              <Image src={LamonaFeatured} alt="Lamona featured image" />
            </div>
          </div>

          <div className={styles.item + " " + styles.divide}>
            <div className={styles.left}>
              <h1 className={styles.css_heading}>
                <a href="https://ust-css.com/" target="_blank" rel="noopener noreferrer">
                  UST Computer Science Society Website
                </a>
              </h1>
              <h2>A website that showcases information about the UST CS department's Mother Organization</h2>
            </div>

            <div className={styles.right + " " + styles.zoomer}>
              <Image src={CSSFeatured} alt="CSS Website Featured image" />
            </div>
          </div>

          <div className={styles.item + " " + styles.divide}>
            <div className={styles.left}>
              <h1 className={styles.tw_heading}>
                <a href="https://join.tomasinoweb.org/" target="_blank" rel="noopener noreferrer">
                  join.tomasinoweb.org
                </a>
              </h1>
              <h2>An organization recruitment / application website for TomasinoWeb</h2>
            </div>

            <div className={styles.right + " " + styles.zoomer}>
              <Image src={R101_2023Featured} alt="join.tomasinoweb.org Featured image" />
            </div>
          </div>
        </section>

        <section className={styles.section + " " + styles.sectionWithImages}>
          <h1>Non-webdev personal projects</h1>

          <div className={styles.item + " " + styles.divide}>
            <div className={styles.left}>
              <h1>8-bit Minecraft Redstone Computer</h1>
              <h2>
                A compiler toolchain written in C and Python for compiling a custom programming language to a Minecraft
                computer's instruction set.
              </h2>
            </div>

            <div className={styles.right + " " + styles.zoomer}>
              <Image src={RedstoneComputer} alt="8-bit Redstone computer" />
            </div>
          </div>

          <div className={styles.item + " " + styles.divide}>
            <div className={styles.left}>
              <h1>
                <a href="https://github.com/scinscinscin/scintax" target="_blank" rel="noopener noreferrer">
                  Scintax programming language
                </a>
              </h1>

              <h2>
                A treewalk interpreted general purpose programming langauge, inspired by JavaScript, written in C#.
              </h2>
              <h2>It comes with its own REPL and "IDE" with semantic highlighting.</h2>
            </div>

            <div className={styles.right + " " + styles.zoomer}>
              <Image src={ScintaxFeatured} alt="8-bit Redstone computer" />
            </div>
          </div>

          <div className={styles.item + " " + styles.divide}>
            <div className={styles.left}>
              <h1>
                <a href="https://github.com/scinscinscin/scinss" target="_blank" rel="noopener noreferrer">
                  scinss css preprocessor
                </a>
              </h1>

              <h2>A rudimentary stylesheet language, allowing users to write shorter, more succinct CSS.</h2>
            </div>

            <div className={styles.right + " " + styles.zoomer}>
              <Image src={ScinSSFeatured} alt="scinss featured image" />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h1>Open source</h1>

          <div className={styles.item}>
            <h1>
              <a href="https://www.npmjs.com/package/@scinorandex/rpscin" target="_blank" rel="noopener noreferrer">
                @scinorandex/rpscin
              </a>
            </h1>
            <h2>An experimental library for building fullstack typesafe REST APIs with TypeScript</h2>

            <ul>
              <li>Improves developer experience by reducing type-related code errors</li>
              <li>
                Used in production by{" "}
                <a href="https://tomasinoweb.org" target="_blank" rel="noopener noreferrer">
                  TomasinoWeb.org
                </a>
              </li>
              <li>Generates a typesafe client-side library based on server-side code automatically</li>
              <li>Simplifies common tasks such as multipart form uploads and authentication</li>
              <li>Provides middleware type information to API resolvers using TypeScript generics</li>
            </ul>
          </div>

          <div className={styles.item}>
            <h1>
              <a href="https://github.com/scinscinscin/scider" target="_blank" rel="noopener noreferrer">
                @scinorandex/scider
              </a>
            </h1>
            <h2>A volatile in-memory data store for JavaScript applications</h2>

            <ul>
              <li>Fully typed with TypeScript and tested with Jest.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section + " " + styles.skills}>
          <h1>Skills</h1>

          <div className={styles.divide}>
            <div className={styles.left}>
              <div className={styles.item}>
                <h1>Programming Languages</h1>
                <h2>HTML, CSS, SCSS, JavaScript, TypeScript, Bash, SQL</h2>
              </div>

              <div className={styles.item}>
                <h1>Frameworks</h1>
                <h2>React, Next,js, Express, Koa</h2>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.item}>
                <h1>Other</h1>
                <h2>Git, GitHub Pages, Vercel, Docker</h2>
              </div>

              <div className={styles.item}>
                <h1>What I Use</h1>
                <h2>VSCode, Obsidian, Iosevka, Linux</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
