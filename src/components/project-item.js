import React from 'react'

export default function ProjectItem({ title, techStack, screenshot, bulletPoints, links }) {
  return (
    <div className="card mb-3 bg-transparent my-5" style={{maxWidth: "1440px"}} data-aos="zoom-in-right">
        <div className="row g-0">
            <div className="col-8 p-3 d-flex justify-content-center" >
                <img src={screenshot} className="img-fluid rounded" alt="project screenshot" style={{maxHeight: "512px"}} />
            </div>
            <div className="col-4">
                <div className="card-body">
                    <p className="card-text lead">
                        <strong className="text-heading">
                            {title}
                        </strong>
                    </p>
                    <p className="card-text">
                        <em className="text-subheading">
                            {techStack}
                        </em>
                    </p>
                    
                    <ul>
                        {
                            bulletPoints.map(point => {
                                return (
                                    <li className="card-text text-normal d-none d-md-block" key={point}>
										{point}
									</li>
                                )
                            })
                        }
                    </ul>
                    <div className = 'btn-group d-md-flex d-none'>
                        {
                            links.map(link => {
                                return (
                                    <div key={link.name}>
                                        <a href={link.url}>
                                            <button className='btn btn-outline-light highlighted-btn'> {link.name} </button>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className = 'd-md-none'>
                        {
                            links.map(link => {
                                return (
                                    <div key={link.name}>
                                        <a href={link.url}>
                                            <button className='btn btn-outline-light highlighted-btn'> {link.name} </button>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
