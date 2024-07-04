  import React from "react"
const Target=()=>
    {
        return(
            <section id="featured-services" className="featured-services">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-activity icon"></i></div>
                            <h4><a href="" className="stretched-link">Goal Evaluation</a></h4>
                            <p>Clearly outline and refine project objectives, scope, and limitations.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
                            <h4><a href="" className="stretched-link">Strategic Definition</a></h4>
                            <p>Establish and articulate the projects goals, scope, and constraints.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
                            <h4><a href="" className="stretched-link">Implementation Phase</a></h4>
                            <p>Carry out the plan and oversee tasks, address issues, and manage risks.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="600">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-broadcast icon"></i></div>
                            <h4><a href="" className="stretched-link">Outcome Assessment</a></h4>
                            <p>Evaluate outcomes, gather feedback, and pinpoint areas for improvement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
    export default Target