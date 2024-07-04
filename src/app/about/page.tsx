/* eslint-disable @next/next/no-img-element */
import React from "react";
const About = () => {
  return (
      <section id="about" className="about">
          <div className="container" data-aos="fade-up">
              <div className="section-header">
                  <h2>About Us</h2>
                  <p>Digital strategy involves the strategic use of technology to enhance business performance,
                      resilience, and agility. It provides guidance on adopting optimal technological solutions and
                      preparing for the digital era. Through the implementation of a digital strategy, organizations
                      can experience improved customer engagement, accelerated business development, informed
                      management decisions, expanded market share, and increased revenue.</p>
              </div>

              <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
                  <div className="col-lg-5">
                      <div className="about-img">
                          <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                      </div>
                  </div>

                  <div className="col-lg-7">
                      <h3 className="pt-0 pt-lg-5">Our digital transformation process unfolds in four key stages:
                          Evaluation, Strategic Planning, Execution, and Measurement.</h3>

                      {/* Tabs */}
                      <ul className="nav nav-pills mb-3">
                          <li><a className="nav-link active" data-bs-toggle="pill" href="#tab1">Evaluation</a></li>
                          <li><a className="nav-link" data-bs-toggle="pill" href="#tab2">Strategic Planning</a></li>
                          <li><a className="nav-link" data-bs-toggle="pill" href="#tab3">Execution</a></li>
                          <li><a className="nav-link" data-bs-toggle="pill" href="#tab4">Measurement</a></li>
                      </ul>

                      {/* Tab Content */}
                      <div className="tab-content">
                          <div className="tab-pane fade show active" id="tab1">
                              <p className="fst-italic">In the initial stage, Evaluation, we collaborate with you to
                                  ensure the clarity and achievability of project objectives. This involves
                                  identifying and defining your goals, expectations, scope, and constraints. We
                                  conduct a comprehensive analysis of your current situation, challenges,
                                  opportunities, and competitive landscape using methods such as interviews, surveys,
                                  SWOT analysis, and benchmarking. The outcome includes a well-defined problem
                                  statement and success criteria for the project.</p>
                          </div>

                          <div className="tab-pane fade" id="tab2">
                              <p className="fst-italic">Moving on to the second stage, Strategic Planning, we work
                                  closely with you to pinpoint and prioritize your digital transformation objectives.
                                  Our aim is to craft a tailored strategy that aligns with your business goals, needs,
                                  and capabilities. This involves designing a digital solution mix and assisting in
                                  the selection and integration of the most suitable digital solutions and tools for
                                  your project.</p>
                          </div>

                          <div className="tab-pane fade" id="tab3">
                              <p className="fst-italic">In the Execution phase, we put the digital transformation strategy
                                  into action. This involves implementing the chosen technological solutions and tools
                                  to optimize your business performance, resilience, and agility. Throughout the
                                  process, we actively monitor and manage any arising issues or risks, providing
                                  regular communication on project progress and status. We employ methods and tools
                                  such as dashboards, reports, and meetings to keep you informed and updated, making
                                  any necessary changes or adjustments.</p>
                          </div>

                          <div className="tab-pane fade" id="tab4">
                              <p className="fst-italic">The final stage, Measurement, ensures the success of your digital
                                  transformation project. We evaluate results and outcomes against predefined success
                                  criteria and key performance indicators (KPIs). Data and information are collected
                                  and analyzed using methods like surveys, interviews, and analytics. A comparative
                                  analysis is conducted between achieved results and expected outcomes. Feedback and
                                  lessons learned from you and other stakeholders contribute to future improvement and
                                  optimization. We celebrate the achievements and success of the project together.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
export default About