import React from "react"
const Faq=()=>
    {
        return(
            
    <section id="faq" className="faq">
    <div className="container-fluid" data-aos="fade-up">
      <div className="row gy-4">
        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
          <div className="content px-xl-5">
            <h3>Frequently Asked <strong>Questions</strong></h3>
            <p>
              Got questions? We have got answers.
            </p>
          </div>

          <div className="accordion accordion-flush px-xl-5" id="faqlist">

            <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq-content-1">
                  <i className="bi bi-question-circle question-icon"></i>
                  What is digital consulting and why do you need it?
                </button>
              </h3>
              <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Digital consulting is the process of helping businesses use digital technology to achieve their goals.
                  Whether you want to improve your online presence, optimize your customer journey, automate your processes,
                  or expand your market reach, digital consulting can help you design and implement effective solutions that
                  fit your needs and budget.
                </div>
              </div>
            </div>

            <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq-content-2">
                  <i className="bi bi-question-circle question-icon"></i>
                  How can digital consulting help my business grow?
                </button>
              </h3>
              <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Digital consulting can help you grow your business by:
                  <ul>
                    <li>Increasing customer engagement</li>
                    <li>Accelerating business development</li>
                    <li>Making better management decisions</li>
                    <li>Expanding market share</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item" data-aos="fade-up" data-aos-delay="400">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq-content-3">
                  <i className="bi bi-question-circle question-icon"></i>
                  What kind of digital services do you offer?
                </button>
              </h3>
              <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  We offer a range of digital services to help businesses of all sizes grow and succeed.
                  <ul>
                    <li>Brand building and communication: We help you create a strong and consistent brand identity and voice,
                      and communicate effectively with your target audience.
                    </li>
                    <li>Performance marketing: We help you plan, execute, and measure marketing campaigns that drive traffic,
                      conversions, and ROI.
                    </li>
                    <li>eCommerce: We help you create and optimize an online store that showcases your products or services,
                      attracts customers, and generates sales.
                    </li>
                    <li>Software automation: We help you automate your business processes and workflows using software solutions
                      to save time and improve efficiency.
                    </li>
                    <li>Strategy consulting: We help you define your business goals and objectives, develop a strategic plan, and
                      monitor and evaluate your progress and performance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item" data-aos="fade-up" data-aos-delay="500">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq-content-4">
                  <i className="bi bi-question-circle question-icon"></i>
                  How do you work with your clients?
                </button>
              </h3>
              <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  We work with our clients in a collaborative and transparent manner. We follow these steps:
                  <ol>
                    <li>Discovery: We start by understanding your business goals, needs, challenges, opportunities, and
                      expectations. We also conduct a thorough analysis of your current situation and performance using
                      various tools and methods.
                    </li>
                    <li>Proposal: We present you with a detailed proposal that outlines the scope of work, deliverables,
                      timeline, budget, and terms of agreement. We also provide you with a clear breakdown of the costs and
                      benefits of our services.
                    </li>
                    <li>Execution: We implement the agreed-upon solutions using best practices and standards. We also communicate
                      with you regularly to keep you updated on the progress and status of the project. We also solicit your
                      feedback and input to ensure your satisfaction.
                    </li>
                    <li>Evaluation: We measure the results and outcomes of our services using various metrics and indicators.
                      We also provide you with a comprehensive report that summarizes the achievements, challenges, learnings,
                      and recommendations for improvement.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="accordion-item" data-aos="fade-up" data-aos-delay="600">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq-content-5">
                  <i className="bi bi-question-circle question-icon"></i>
                  What are some of the projects that you have done for other clients?
                </button>
              </h3>
              <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  We have worked with clients in a variety of industries, including:
                  <ul>
                    <li>Health & wellness: website, SEO, content marketing, social media marketing</li>
                    <li>Retail services: eCommerce platform, order management, payment processing, customer support</li>
                    <li>Food: mobile app, delivery services, payment gateways</li>
                    <li>Home care: web portal, scheduling, billing, reporting</li>
                    <li>Real estate: website, SEO, PPC, email marketing</li>
                    <li>Fashion / lifestyle: blog, SEO, social media marketing, influencer marketing</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
          style={{ backgroundImage: "url('assets/img/faq.jpg')" }}>&nbsp;</div>
      </div>
    </div>
  </section>

        )
    }
    export default Faq