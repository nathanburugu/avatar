/** @format */

import React, { useState } from 'react';
import '../testimonials/Testimonial.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Zoom from 'react-reveal/Zoom';
import '../services/services.css';
import Roll from 'react-reveal/Roll';
import { FcCollapse, FcExpand } from 'react-icons/fc';

const Services = () => {
  const [full, setFull] = useState(false);
  const handleFullCollapse = () => {
    setFull(!full);
  };
  const data = [
    {
      name: 'Online Presence 24/7',
      des: "Having a website meanscustomers are always able to find you anytime anywhere even outside of your business hours your webiste continues to find and secure new customers, it offers to the user convinience as they can access the information they need in the conform of their own home, with no added pressure to buy. Plus at most compamnies nowadays have their own website, there's every chance you could be losing customers to competitors by staying online",
      img: 'https://img.icons8.com/external-bearicons-blue-bearicons/64/000000/external-24-7-time-and-date-bearicons-blue-bearicons.png',
    },
    {
      name: 'Information Exchange',
      des: 'At its simplest, a website provides a quick and easy way of communicating information between buyers and sellers. You can list your opening hours, contact information, show images of your location or products, and use contact forms to facilitate enquiries from potential customers or feedback from existing ones. You can even upload promotional videos to really engage your customers and sell your business in an effective and cost efficient way. This is also a good way to promote your social media channels and build up a community with your customers',
      img: 'https://img.icons8.com/clouds/100/000000/knowledge-transfer.png',
    },
    {
      name: 'Credibility',
      des: "In today’s modern world, there is an expectation for any reputable company to have some kind of online presence. Potential customers would likely be distrusting of any business that didn't have a telephone number or a physical address, and the same can be said for not having a website and email address. These are useful tools to share crucial information about your business with customers and answer all the What’s and Why’s that they may have. What’s more, having a good quality, easy-to-use website makes customers feel comfortable using your services, as they will assume they can expect the same positive experience in all areas of your business.",
      img: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-badge-award-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-3.png',
    },
    {
      name: ' It Cuts Costs',
      des: ' As well as simply displaying information, you can also use your website to sell goods & services directly to consumers, in some cases removing the need to use “brick-and-mortar” stores which involve large operating costs (staff wages, rental, utilities to name just a few). Eliminating these overheads will also allow you to lower your prices, giving your business that real competitive edge. It can also be used internally within your business; do you have any news you want to share with colleagues or have any important information that can be accessed by management? Having an internal website can save you a lot of time as everything you need is one place and can be accessed at any time. ',
      img: 'https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-cut-money-soft-fill-soft-fill-juicy-fish.png',
    },
    {
      name: ' Market Expansion',
      des: 'As your site is accessible to anyone all over the world, the ability to break through geographical barriers has never been easier. Anyone, from any country, will be able to find your company and as such, is now a potential customer.',
      img: 'https://img.icons8.com/clouds/100/000000/online-shop.png',
    },
    {
      name: 'Consumer Insightsn',

      des: 'Analytic tools allow you to identify who your typical customer is, how they found you, what they like, and adapt your business to maximise purchases through your site. The diverse range of data available can also help you better understand how your social media channels affect your brand, and can even highlight opportunities to change the offline aspects of your business such as branch opening times, promotions and product ranges.',
      img: 'https://img.icons8.com/stickers/100/000000/customer-insight.png',
    },
    {
      name: 'Advertising',

      des: "Tools like Google AdWords or advertising on Facebook give you the power to reach customers with much more accuracy and reliability than with traditional offline advertising methods. SEO and online advertising are a great way to help build up awareness, if it’s done correctly traffic to your website can see an increase. Be the first company that a potential new customer sees when searching for a specific product or service online, and use your website's contact page or e-commerce features to make purchasing a product or finding a retail outlet easier than ever before.",
      img: 'https://img.icons8.com/external-others-pike-picture/50/000000/external-Advertisement-no-ads-others-pike-picture.png',
    },
    {
      name: 'Competitors Online',

      des: 'If you don’t have a website it is highly likely that your competitor will do, this means that you are missing out on gaining new customers and can be in the forefront of their minds. It is crucial that no opportunities are missed and are gained by the competition.',
      img: 'https://img.icons8.com/external-filled-outline-wichaiwi/64/000000/external-business-marketing-strategy-filled-outline-wichaiwi-5.png',
    },
    {
      name: 'Customer Service Online',

      des: 'Websites provide an easier way to handle customer service. Offering answers to regularly asked questions in a FAQ (Frequently Asked Questions) section, you can reduce customer service costs and save yourself time and money, as well as providing much more information. This also means that customers can receive a reply instantly and saves time, which helps to encourage positive customer relations in the long run. This could be a benefit for you, all positive feedback can be uploaded into a testimonial, your customers are happy why not show it off?!',
      img: 'https://img.icons8.com/external-filled-outline-perfect-kalash/64/000000/external-support-coronavirus-protective-filled-outline-perfect-kalash.png',
    },
    {
      name: 'Growth Opportunity',

      des: 'Websites, in general, are great ways to in providing a place that potential investors can be referred to. It shows what your company is about, what it has achieved and what it can achieve in the future.',
      img: 'https://img.icons8.com/external-mixed-line-solid-yogi-aprelliyanto/64/000000/external-growth-fintech-mixed-line-solid-yogi-aprelliyanto.png',
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    rows: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container servicesSection" id="service">
      <div className="sectionTitle">
        <h5>What i offer</h5>
        <span className="line"></span>
      </div>

      <div className="services-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              {' '}
              <div className="contentSliderMain byService">
                {' '}
                <Roll>
                  <div
                    className="contentSlider yaService"
                    key={index}
                    onClick={handleFullCollapse}
                  >
                    <div className="picha-na-dDown">
                      <img
                        src={item.img}
                        alt="services"
                        className="service-img-center "
                      />
                      <p className="p-ndani">
                        {full ? (
                          <FcCollapse size={20} />
                        ) : (
                          <FcExpand size={20} />
                        )}
                      </p>
                    </div>
                    <p className="jina-ya-itemu">{item.name}</p>
                    <p>{item.position}</p>
                    <div className="description-services">
                      {full ? (
                        <p>{item.des}</p>
                      ) : (
                        <p>
                          {item.des.substring(0, 79)}...
                          <p style={{ color: '#137dae' }}>Read More</p>
                        </p>
                      )}
                    </div>
                  </div>
                </Roll>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
    // </Parallax>
  );
};

export default Services;
