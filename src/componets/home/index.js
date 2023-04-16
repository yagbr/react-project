import React from 'react'
import Header from '../../layout/navbar'
import "./home.scss"
import icon from '../../assets/images/icon-01.png'
import icon1 from '../../assets/images/icon-02.png'
import icon2 from '../../assets/images/icon-03.png'


export default function HomePage() {
  return (
    <>
      <Header/>
      <main className="homeSection">
        <div className="container">
          <div className="inner">
              <h1 className="title theme-gradient">A digital <br/> agency. </h1>
          </div>

          <div className="singleGrid">
            <div className="gridLitems">
               <img src={icon} alt="icon1"></img>
               <div className="content">
                  <h2>Business Stratagy</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered.</p>
               </div>
            </div>
            <div className="gridLitems">
               <img src={icon1} alt="icon1"></img>
               <div className="content">
                  <h2>Business Stratagy</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered.</p>
               </div>
            </div>

            <div className="gridLitems">
               <img src={icon2} alt="icon1"></img>
               <div className="content">
                  <h2>Website Development</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered.</p>
               </div>
            </div>
          </div>
        </div>

        <div className="aboutSection">
          <div className="container">
            <div className="aboutGrid">
              <div className="gridLitems">
                 222
              </div>
              <div className="gridLitems">
                 222
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
