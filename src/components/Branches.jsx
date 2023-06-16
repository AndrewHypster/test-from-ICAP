import '../css/BranchesSection.css'
import '../css/quote.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import carts from '../carts.json'

const Branches = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  // const rotate = e => {
  //   let cardItem = e
  //   console.log(cardItem);
  // }

  return (
    <section id="branches" className="alternate-bg">
      <h2 className="section-title">Our Projects</h2>
      <div className="branches-section"><div>
        <div className="cardContainer">
          <Slider {...settings}>
            {carts.map(cart =>
              <div className="fade-in" key={cart.id} onMouseMove={element => rotate(element)}>
                <div className="cardItem">
                  <div className="hoverItemContainer">
                    <div className="hoverItemContentWrapper">
                      <img className="hoverItemContentImage" src={cart['href-img']} />
                      <div className="hoverItemContentInfo">
                        <span className="hoverItemContentTags">{cart.Tags[0]}</span>{cart.Tags[1]}
                      </div>
                      <div className="hoverItemContentTitle">
                        <p className="hoverItemContentTitleText">{cart.Text}</p>
                      </div>
                    </div>
                    <a href={cart['ReadMore-link']} className="hoverItemReadMore">
                      <span>READ MORE</span>
                      <img src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png" alt="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Slider>
        </div>
      </div>
      </div>
      <div className="quote-wrapper">
        <div className="quote-content flex">
          <img src="https://icapgroupgmbh.com/static/media/quote-svgrepo-com.3aab7c5625d9ee7a4e04372c1b9602f9.svg" alt="quote" className="quote-img" />
          <p className="gotham white quote-copy">Opportunities don't happen, you create them.</p>
        </div><p className="avenir blue quote-name"> — Chris Grosser</p>
      </div>
    </section>
  )
}

export default Branches