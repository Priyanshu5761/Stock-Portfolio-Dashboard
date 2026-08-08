import React from 'react';
function Team() {
    return ( 
    <div className="container">
        <div className="row p-3 mt-5 border-top">
            <h1 className="text-center mt-5 ">People</h1>
        </div>

      <div className="row between p-3 mt-5  text-muted" style={{lineHeight:"1.8em"}}>
        <div className="col-6 p-5 text-center" >
         <img src="/images-20260604T070444Z-3-001/images/priyanshuPathak.jpg" alt="..." style={{ borderRadius: "90%", width:"60%", height:"auto"}} />
         <h5 className="mt-3">Priyanshu Pathak</h5>
         <h6 className="text-muted">Founder & CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Priyanshu Pathak is a visionary entrepreneur and the driving force behind our company.
            With a passion for innovation and a commitment to excellence, he has led the team to achieve remarkable milestones.
            His leadership style fosters creativity, collaboration, and a culture of continuous improvement.
            Under his guidance, the company has grown exponentially, making a significant impact in the industry. 
            Priyanshu's dedication to delivering high-quality products and services has earned him recognition as a thought leader and influencer in the business community.
          </p>
        </div>
      </div>
    </div>
     );
}

export default Team;