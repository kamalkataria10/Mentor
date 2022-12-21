import React from 'react'
import BlankCard from './layout/BlankCard'

const maintile = () => {
  return (
    <div>
      <div className="hero-body columns" style={{ paddingBottom: "10px", marginTop: "40px" }} >
        <div className="column is-6" style={{ marginLeft: "100px" }}>
          <BlankCard className="container" >
            <h1 className="title">

              Welcome, buddy!
            </h1>
            <h2 className="subtitle has-text-weight-semibold">
              <p>
                {" "}
                If you are looking for a place where you can get information
                about{" "}
              </p>

              <p> &nbsp; &nbsp; - Campus Ambassador Programs</p>
              <p>&nbsp; &nbsp; - Active Scholarships</p>
              <p>&nbsp; &nbsp; - Full Time Opportunties</p>
              <p>&nbsp; &nbsp; - Intern Openings</p>
              <p>This place is one stop solution for all the listings.</p>
              <br />
              <br />
            </h2>
          </BlankCard>
        </div>
        <div className="coulmn is-6" style={{ marginTop: "25px" }}>
          <BlankCard>
            <img
              src="https://www.animationcareerreview.com/files/styles/large/public/images/articles/careerprofile700_3.jpg"
              alt="student mantra"
              width="100%"
            />
          </BlankCard>
        </div>
      </div>
      <br />
      <br />
      <div className="box" style={{ color: "#145DA0", fontSize: '20px' }}>
        <p className="has-text-centered ">
          <b>
            Whichever listing you are looking for, we have a dedicated section
            for it!{" "}
          </b>
        </p>
      </div>
    </div>
  )
}

export default maintile
