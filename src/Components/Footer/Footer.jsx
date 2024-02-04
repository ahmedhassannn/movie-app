import React from 'react'







export default function Footer(isLoggedIn) {
  return (
    <>
     {!isLoggedIn && (<section className="bg-dark text-light w-100  footer-section ">
        <div className="container py-3">
            <div className="row align-items-center justify-content-end">
                <div className="col-lg-3">
                    <div className="lc-block mb-2">
                        <h1>noxe</h1>
                    </div>

                </div>
                <div className="col-lg-2 offset-lg-1">
                    <div className="lc-block mb-2">
                        <div editable="rich">
                            <h4>Get Started</h4>
                        </div>
                    </div>
                    
                    <div className="lc-block small">
                        <div editable="rich">
                            <p>Tutorial</p>
                            <p>Resources
                                <br/>
                            </p>
                            <p>Docs</p>
                            <p>Example</p>
                        </div>
                    </div>
                  
                </div>
                <div className="col-lg-2 offset-lg-1">
                    <div className="lc-block mb-2">
                        <div editable="rich">
                            <h4>About us</h4>
                        </div>
                    </div>
                    
                    <div className="lc-block small">
                        <div editable="rich">
                            <p>Story</p>
                            <p>Work with us</p>
                            <p>Blog</p>
                            <p>News</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-2 offset-lg-1">
                    <div className="lc-block mb-2">
                        <div editable="rich">
                            <h4>Downloads</h4>
                        </div>
                    </div>
                    
                    <div className="lc-block small">
                        <div editable="rich">
                            <p>Vertex 1.2</p>
                            <p>Templates</p>
                            <p>Sounds</p>
                            <p>Gradients</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </section>)}
    </>
  )
}
