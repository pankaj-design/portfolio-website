import React from 'react'

const projects = () => {
  return (
    <>
    <div className='project1'>
      <h3>Projects</h3>
    <div className="grid-container2">

<div className="card " >
  <img src="/images/mountainimg.jpg" style={{ height:"250px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Vocabulary app</h5>
    <p className="card-text">A vocabulary website built using the MERN stack would be a web application that allows users to learn and improve their vocabulary skills. MERN stands for MongoDB, Express.js, React, and Node.js, which are the four technologies used to build the application.</p>
    <a href="#" className="btn btn-primary">Go to website</a>
  </div>
</div>
<div className="card" >
  <img src="/images/clement.jpg" style={{ height:"250px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Travellers app</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go to website</a>
  </div>
</div>
<div className="card">
  <img src="/images/iheb.jpg" style={{ height:"250px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Portfolio website</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go to website</a>
  </div>
</div>
</div>
</div>
    </>
  )
}

export default projects