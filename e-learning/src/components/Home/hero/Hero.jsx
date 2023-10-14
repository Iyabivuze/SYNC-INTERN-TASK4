import './Hero.css'

const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className='hero-container'>
        <div className="hero-wrapper">
          <div className="heading">
            <h3>Welcome to academica</h3>
            <h1>The best online learning platform</h1>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Dolore non consectetur consequatur sit nisi fugiat error 
            fuga nobis eveniet vel quo ut nihil, enim tempore cupiditate! 
            Ipsa, animi. Culpa, totam.</p>

            <div className="buttons">
              <button className="my-button">GET STARTED NOW</button>
              <button >VIEW COURSE</button>
            </div>
        </div>
      </div>
    </section>
    <div className="margin"></div>
    </>
  )
}

export default Hero
