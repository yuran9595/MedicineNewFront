import React from 'react'
import slide1 from '../img/slide/slide-1.jpg'
import slide2 from '../img/slide/slide-2.jpg'
import slide3 from '../img/slide/slide-3.jpg'
import slide4 from '../img/doctors/doctors-1.jpg'
import { Carousel } from 'react-bootstrap'

export default function HeroComponent() {
  return (
    <section id="hero">
      <Carousel id="heroCarousel" interval='3000'>

          <Carousel.Item style={{backgroundImage:`url(${slide1})`}} >
            <div className="container">
              <h2>Welcome to <span>Medicio</span></h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
              <a href="#about" className="btn-get-started scrollto">Read More</a>
            </div>
          </Carousel.Item>

          <Carousel.Item style={{backgroundImage:`url(${slide2})`}}>
            <div className="container">
              <h2>Lorem Ipsum Dolor</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
              <a href="#about" className="btn-get-started scrollto">Read More</a>
            </div>
          </Carousel.Item>

          <Carousel.Item style={{backgroundImage:`url(${slide3})`}}>
            <div className="container">
              <h2>Sequi ea ut et est quaerat</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
              <a href="#about" className="btn-get-started scrollto">Read More</a>
            </div>
          </Carousel.Item>
      </Carousel>
    </section>
  )
}
