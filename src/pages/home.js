import Bootstrapnav from './bootstrapnav'
import Image from 'next/image';

const home = () => {
  return (
    <>

    <div className='component'>
    <section className='home' >
      <div className='home-container'>
        <div className='info'>
          <h1>Hi, i am Pankaj</h1>
          <h5>Full stack web developer</h5>
          <p>This will only remove the underline from the anchor tag with the my-link class, and not affect any other anchor tags on your page.
          </p>
          {/* <a href='#' className='btn'>Contact Me</a> */}
          <button type="button" className="btn btn-primary btn-lg">Contact Me</button>
          </div>
        
        <div className='home-img'>
            {/* <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' alt='image'/> */}
           <img src='portfolioimage.jpg' alt='image'/>
          </div>
        </div> 
    </section>
    </div>
    </>
  )
}

export default home