import { useContext, useState } from "react";
import "./Landing.css";
import "../header/Header";
import Menu from "../menu/Menu";
import StartupBox from "../StartupBox";
import Header from "../header/Header";
import Home from "../home/Home";
import { Context as NameContext } from "../../contexts/searchContext";

function Landing() {
  return (
    <div className="App">
      <Header />
      <div>
        <div className="app-container">
          <div className="app-content">
            <div className="app-sidebar"></div>
            <div className="projects-section">
              <div className="projects-section-header">
                <p>Start-ups</p>
              </div>
              <div className="projects-section-line">
                <div className="projects-status">
                  <div className="item-status">
                    <span className="status-number">45</span>
                    <span className="status-type">Posted</span>
                  </div>
                  <div className="item-status">
                    <span className="status-number">24</span>
                    <span className="status-type">Pending</span>
                  </div>
                  <div className="item-status">
                    <span className="status-number">62</span>
                    <span className="status-type">Total Start-ups</span>
                  </div>
                </div>
                <div className="view-actions"></div>
              </div>
              <div className="project-boxes jsGridView">
                <div className="project-box-wrapper">
                  <div
                    className="project-box"
                    style={{ backgroundColor: "#fee4cb" }}
                  >
                    <div className="project-box-header"></div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">FinTech</p>
                      <p className="box-content-subheader">
                        Finance, Technology
                      </p>
                    </div>
                    <div className="box-progress-wrapper">
                      <p className="box-progress-header">Number of Projects</p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: "60%", backgroundColor: "#ff942e" }}
                        />
                      </div>
                      <p className="box-progress-percentage">15</p>
                    </div>
                    <div className="project-box-footer">
                      <div className="days-left" style={{ color: "#ff942e" }}>
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-box-wrapper">
                  <div
                    className="project-box"
                    style={{ backgroundColor: "#e9e7fd" }}
                  >
                    <div className="project-box-header">
                      <div className="more-wrapper"></div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">EdTech</p>
                      <p className="box-content-subheader">
                        Education, Technology
                      </p>
                    </div>
                    <div className="box-progress-wrapper">
                      <p className="box-progress-header">Number of Projects</p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: "50%", backgroundColor: "#4f3ff0" }}
                        />
                      </div>
                      <p className="box-progress-percentage">10</p>
                    </div>
                    <div className="project-box-footer">
                      <div className="days-left" style={{ color: "#4f3ff0" }}>
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-box-wrapper">
                  <div className="project-box">
                    <div className="project-box-header">
                      <div className="more-wrapper"></div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">HealthTech</p>
                      <p className="box-content-subheader">
                        Healthcare, Technology
                      </p>
                    </div>
                    <div className="box-progress-wrapper">
                      <p className="box-progress-header">Number of Projects</p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: "80%", backgroundColor: "#096c86" }}
                        />
                      </div>
                      <p className="box-progress-percentage">18</p>
                    </div>
                    <div className="project-box-footer">
                      <div className="days-left" style={{ color: "#096c86" }}>
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-box-wrapper">
                  <div
                    className="project-box"
                    style={{ backgroundColor: "#ffd3e2" }}
                  >
                    <div className="project-box-header">
                      <div className="more-wrapper"></div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">E-Commerce</p>
                      <p className="box-content-subheader">Retail</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <p className="box-progress-header">Number of Projects</p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: "20%", backgroundColor: "#df3670" }}
                        />
                      </div>
                      <p className="box-progress-percentage">06</p>
                    </div>
                    <div className="project-box-footer">
                      <div className="days-left" style={{ color: "#df3670" }}>
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-box-wrapper">
                  <div
                    className="project-box"
                    style={{ backgroundColor: "#c8f7dc" }}
                  >
                    <div className="project-box-header">
                      <div className="more-wrapper"></div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">SaaS</p>
                      <p className="box-content-subheader">Technology</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <p className="box-progress-header">Number of Projects</p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: "60%", backgroundColor: "#34c471" }}
                        />
                      </div>
                      <p className="box-progress-percentage">16</p>
                    </div>
                    <div className="project-box-footer">
                      <div className="days-left" style={{ color: "#34c471" }}>
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-box-wrapper">
                  <div
                    className="project-box"
                    style={{ backgroundColor: "#d5deff" }}
                  >
                    <div className="project-box-header">
                      <div className="more-wrapper"></div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">Entertainment</p>
                      <p className="box-content-subheader">Service, Retail</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <p className="box-progress-header">Number of Projects</p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: "40%", backgroundColor: "#4067f9" }}
                        />
                      </div>
                      <p className="box-progress-percentage">08</p>
                    </div>
                    <div className="project-box-footer">
                      <div className="days-left" style={{ color: "#4067f9" }}>
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="messages-section">
              <div className="projects-section-header">
                <p>User Testimonials</p>
              </div>
              <div className="messages">
                <div className="message-box">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="profile image"
                  />
                  <div className="message-content">
                    <div className="message-header">
                      <div className="name">Stephanie</div>
                      <div className="star-checkbox">
                        <input type="checkbox" id="star-1" />
                        <label htmlFor="star-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </label>
                      </div>
                    </div>
                    <p className="message-line">
                      I found my co-founder through this incubator. 🥳 I
                      appreciate the initiative.
                    </p>
                    <p className="message-line time">Dec, 12</p>
                  </div>
                </div>
                <div className="message-box">
                  <img
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="profile image"
                  />
                  <div className="message-content">
                    <div className="message-header">
                      <div className="name">Mark</div>
                      <div className="star-checkbox">
                        <input type="checkbox" id="star-2" />
                        <label htmlFor="star-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </label>
                      </div>
                    </div>
                    <p className="message-line">
                      This is a brilliant way to connect Penn students with
                      similar business ideas.
                    </p>
                    <p className="message-line time">Dec, 12</p>
                  </div>
                </div>
                <div className="message-box">
                  <img
                    src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="profile image"
                  />
                  <div className="message-content">
                    <div className="message-header">
                      <div className="name">David</div>
                      <div className="star-checkbox">
                        <input type="checkbox" id="star-3" />
                        <label htmlFor="star-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </label>
                      </div>
                    </div>
                    <p className="message-line">
                      Awesome! 🤩 I like this website a lot. Very helpful!
                    </p>
                    <p className="message-line time">Dec, 12</p>
                  </div>
                </div>
                <div className="message-box">
                  <img
                    src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="profile image"
                  />
                  <div className="message-content">
                    <div className="message-header">
                      <div className="name">Jessica</div>
                      <div className="star-checkbox">
                        <input type="checkbox" id="star-4" />
                        <label htmlFor="star-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </label>
                      </div>
                    </div>
                    <p className="message-line">
                      I am really impressed! Can't wait to see what start-ups
                      Penn students come up with.
                    </p>
                    <p className="message-line time">Dec, 11</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="app-header">
        <div className="app-header-left">
          <p className="app-name">Project Archive</p>
          <div className="search-wrapper">
            <input className="search-input" type="text" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="feather feather-search"
              viewBox="0 0 24 24"
            >
              <defs />
              <circle cx={11} cy={11} r={8} />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>
        <div className="app-header-right"></div>
      </div>
      <Home />
      <footer>
        <div className="footer-container">
          <div className="footer-row">
            <ul>
              <li>
                Wharton Undergraduate Entrepreneurship Club © 2022. Made with ♥
                in Philly.
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
