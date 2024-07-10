/* eslint-disable @next/next/no-img-element */
import React from 'react';

const OurServices = () => {
    return (
        <section id="ourservices" className="features">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Services</h2>
                    <p>Ideation, strategy, execution: We ve got you covered.</p>
                </div>

                <ul className="nav nav-tabs row gy-4 d-flex">

                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                            <i className="bi bi-bullseye color-cyan"></i>
                            <h4>Branding</h4>
                        </a>
                    </li>{/* End Tab 1 Nav */}

                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                            <i className="bi bi-megaphone color-indigo"></i>
                            <h4>Marketing</h4>
                        </a>
                    </li>{/* End Tab 2 Nav */}

                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                            <i className="bi bi-cart3 color-teal"></i>
                            <h4>eCommerce</h4>
                        </a>
                    </li>{/* End Tab 3 Nav */}

                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                            <i className="bi bi-braces-asterisk color-red"></i>
                            <h4>Software</h4>
                        </a>
                    </li>{/* End Tab 4 Nav */}

                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-5">
                            <i className="bi bi-easel color-blue"></i>
                            <h4>Strategy</h4>
                        </a>
                    </li>{/* End Tab 5 Nav */}
                    {/* 
                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-6">
                            <i className="bi bi-tools color-orange"></i>
                            <h4>Manufacturing</h4>
                        </a>
                    </li>End Tab 6 Nav */}

                </ul>

                <div className="tab-content">

                    <div className="tab-pane active show" id="tab-1">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-1 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="mb-3">Branding & Communications</h3>
                                <p className="fst-italic">
                                    Create and craft your website, logo, slogan, and additional visual elements that
                                    mirror your brand identity and value proposition.
                                </p>
                                <p>
                                    Effectively engage with both internal and external stakeholders through digital
                                    channels and platforms. Produce and share compelling and pertinent content across
                                    various media formats, encompassing text, images, videos, podcasts, and more.
                                </p>
                                <p>
                                    Leverage chatbots, voice assistants, and conversational technologies to deliver
                                    customized and interactive communication experiences. Oversee your online reputation
                                    and reviews while adeptly managing any potential crises or negative feedback.
                                </p>

                            </div>
                            <div className="col-lg-4 order-2 order-lg-2 text-center" data-aos="fade-up"
                                data-aos-delay="200">
                                <img src="assets/img/features-1.svg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>{/* End Tab Content 1 */}

                    <div className="tab-pane" id="tab-2">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-1 order-lg-1">
                                <h3 className="mb-3">Performance Marketing</h3>
                                <p className="fst-italic">
                                    Plan and implement digital marketing initiatives to connect with and captivate your
                                    prospective clientele.
                                </p>
                                <p>
                                    Leverage social media, email, mobile, and various digital marketing methodologies to
                                    establish and cultivate relationships with your current customer base.
                                </p>
                                <p>
                                    Evaluate and refine your digital marketing effectiveness and achievements through
                                    the application of analytics and insights.
                                </p>
                                <p>
                                    Adopt a performance-oriented approach, emphasizing Return on Ad Spend (ROAS) and
                                    Return on Investment (ROI), to guarantee optimal value and outcomes from your
                                    digital marketing expenditure.
                                </p>

                            </div>
                            <div className="col-lg-4 order-2 order-lg-2 text-center">
                                <img src="assets/img/features-2.svg" alt="" className="img-fluid" width="250" />
                            </div>
                        </div>
                    </div>{/* End Tab Content 2 */}

                    <div className="tab-pane" id="tab-3">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3 className="mb-3">eCommerce</h3>

                                <p className="fst-italic">
                                    Create and build your e-commerce website or application, or seamlessly integrate
                                    with established e-commerce platforms and marketplaces.
                                </p>
                                <p>
                                    Efficiently oversee inventory, orders, payments, shipping, returns, and customer
                                    service through the utilization of digital solutions and tools.
                                </p>
                                <p>
                                    Leverage digital technologies to elevate customer experience and satisfaction. Aid
                                    traditional businesses in transitioning to digital commerce or support the
                                    initiation of a new brand direct e-commerce sales through our go-to-market
                                    strategies and technological assistance.
                                </p>
                                <p>
                                    Facilitate innovation for substantial growth by exploring new markets, products,
                                    services, or business models using digital tools and solutions.
                                </p>
                            </div>
                            <div className="col-lg-4 order-2 order-lg-2 text-center">
                                <img src="/assets/img/features-3.svg"  alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>{/* End Tab Content 3 */}

                    <div className="tab-pane" id="tab-4">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-1 order-lg-1">
                                <h3 className="mb-3">Software Automation</h3>
                                <p className="fst-italic">
                                    Delineate and chart your business processes, assess their efficiency and
                                    effectiveness, and pinpoint sectors requiring automation or enhancement.
                                </p>
                                <p>
                                    Choose and deploy optimal digital solutions and tools for your business processes,
                                    including workflow automation, robotic process automation, artificial intelligence,
                                    and more. Continuously monitor and refine business process performance and results
                                    through the application of analytics and insights.
                                </p>
                                <p>
                                    Provide guidance in selecting scalable and enduring technology aligned with business
                                    objectives.
                                </p>

                            </div>
                            <div className="col-lg-4 order-2 order-lg-2 text-center">
                                <img src="/assets/img/features-4.svg" alt="" width="350" className="img-fluid" />
                            </div>
                        </div>
                    </div>{/* End Tab Content 4 */}

                    <div className="tab-pane" id="tab-5">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-1 order-lg-1">
                                <h3 className="mb-3">Digital Strategy</h3>
                                <p>
                                    Digital strategy is not merely about technology; it the strategic use of
                                    technology to achieve goals, understand customers, stay ahead of competitors, and
                                    stand out in the market. Our expertise lies in assisting businesses, regardless of
                                    size, in crafting and implementing effective digital strategies.
                                </p>
                                <p>
                                    One key advantage of adopting a digital strategy is the ability to enhance customer
                                    engagement. By creating personalized and captivating experiences, businesses can
                                    foster increased loyalty and satisfaction among their customer base.
                                </p>
                                <p>
                                    Additionally, a well-executed digital strategy accelerates business development. It
                                    facilitates reaching new customers, expanding into unexplored markets, and driving
                                    innovation with the introduction of new products and services.
                                </p>
                                <p>
                                    Furthermore, digital strategies empower businesses with better management decisions.
                                    Real-time data and insights offer valuable information that aids in making informed
                                    decisions, contributing to more efficient business operations.
                                </p>
                                <p>
                                    In the competitive landscape, a digital strategy can also contribute to increased
                                    market share. By differentiating yourself from competitors, you position your
                                    business to capture a larger market share and fuel overall business growth.
                                </p>
                                <p>
                                    Lastly, the implementation of a digital strategy can lead to higher revenues.
                                    Streamlining the purchasing process for customers and providing an enhanced overall
                                    experience can result in increased sales and profits for your business.
                                </p>
                            </div>
                            <div className="col-lg-4 order-2 order-lg-2 text-center">
                                <img src="/assets/img/features-5.svg" alt="" width="900" className="img-fluid" />
                            </div>
                        </div>
                    </div>{/* End Tab Content 5 */}

                </div>

            </div>
        </section>
    );
};

export default OurServices;
