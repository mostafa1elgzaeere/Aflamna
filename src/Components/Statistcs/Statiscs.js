import React, { useState } from 'react';
import "./statics.css"
import Chart from 'react-apexcharts'


function Statiscs(props) {
  
    
let [options,SetOpetions]=useState({chart: {
  id: "basic-bar"
},
xaxis: {
  categories: ["Age : Count ","-18","18-25","25-35","35-45","+ 45"]
}
})

let [series,SetSeries]=useState( [
  {
    name: ["-18"],
    data: [1200]
  },
  {
      name: ["18-25"],
      data: [2000]
    },
    {
      name: ["25-35"],
      data: [2050]
    },
    {
      name: ["35-45"],
      data: [5300]
    },
    {
      name: ["+ 45"],
      data: [3000]
    },
    
]
)

let [options2,SetOpetions2]=useState({chart: {
  id: "basic-bar"
},
xaxis: {
  categories: ["12-3 AM","4-8 AM","9-12 AM","1-3 PM","4-8 PM","9-12 PM"]
},
stroke: {
  curve: 'smooth',
}
})


let [series2,SetSeries2]=useState( [
  {
    name: ["WorldWar"],
    data: [0,250,300,305,400,120]
  },
  {
      name: ["Hope"],
      data: [0,350,250,100,150,270]
    },
    {
      name: ["Titanic"],
      data: [0,400,300,240,350,120]
    },
    {
      name: ["Little Wood"],
      data: [0,180,200,210,350,80]
    },
    {
      name: ["Death Game"],
      data: [0,80,102,220,300,205]
    },
    
]
)

let [options3,SetOpetions3]=useState( {
  labels: ['Egypt', 'USA',"Mexico","Algeria","Qatar","UK"]
})

let [series3,SetSeries3]=useState([35, 15,8,20,14,8])

let [options4,SetOpetions4]=useState({ chart: {
type: 'area',
stacked: false,
height: 350,
},
labels:["17 Apr","18 Apr","19 Apr","20 Apr","21 Apr","22 Apr","23 Apr","24 Apr","25 Apr","26 Apr","27 Apr","28 Apr","29 Apr","30 Apr"]})
let series4=[{
name: 'Views',
data: [1000,2000,5000,7000,2500,3000,1200,4500,7000,4300,4025,3025,7801,2500]
}]

    return (
        <div className='bg-black justify-content-center container my-5'>
             <div>

        <main id="main" className="main">


          <section className="section dashboard">
            <div className="row">
              {/* Left side columns */}
              <div className="col-lg-8">
                <div className="row">


                  {/* users Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
                      <div className="card-body">
                        <h5 className="card-title">Users </h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart" />
                          </div>
                          <div className="ps-3">
                            <h6>14501</h6>
                            <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End users Card */}



                  {/* films Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">

                      <div className="card-body">
                        <h5 className="card-title">Films</h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar" />
                          </div>
                          <div className="ps-3">
                            <h6>218</h6>
                            <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End films Card */}




                  {/* comments Card */}
                  <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card customers-card">
                      <div className="card-body">
                        <h5 className="card-title">Comments</h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people" />
                          </div>
                          <div className="ps-3">
                            <h6>1244</h6>
                            
                            <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End comments Card */}



                  {/* watched at  */}
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Movie Views</h5>
                        {/* Line Chart */}
                        <div id="reportsChart" />

                        <Chart options={options2} series={series2} type='area'  width="100%"  />
                        {/* End Line Chart */}
                      </div>
                    </div>
                  </div>{/* End watched at */}

                  {/* Age of users  */}
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Age of Users</h5>
                        {/* Line Chart */}
                        <div id="reportsChart" />
                        {/* <Chart options={options4}  series={series4} type="line" width="80%" height="300px"/> */}
                        <Chart options={options} series={series} type="bar" width="100%"  height="140%"/>

                        
                        {/* End Line Chart */}
                      </div>
                    </div>
                  </div>{/* End age of users  */}






                </div>
              </div>{/* End Left side columns */}



              {/* Right side columns */}
              <div className="col-lg-4">


                {/* Recent Added Films */}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Recent Added Films</h5>
                    <div className="activity">


                        {/* start item */}
                      <div className="activity-item d-flex">
                        <div className="activite-label">32 min</div>
                        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                        <div className="activity-content">
                          Spider Man
                        </div>
                      </div>{/* end item */}

                        {/* start item */}
                      <div className="activity-item d-flex">
                        <div className="activite-label">10 hour</div>
                        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                        <div className="activity-content">
                         IT
                        </div>
                      </div>{/* end item */}

                        {/* start item */}
                      <div className="activity-item d-flex">
                        <div className="activite-label">22 hour</div>
                        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                        <div className="activity-content">
                          IRon Man
                        </div>
                      </div>{/* end item */}


                    </div>
                  </div>
                </div>
                
                {/* End Recent Added Films  */}





                {/* Website Visted country */}
                <div className="card my-2">
                  <div className="card-body pb-0">
                    <h5 className="card-title">Visiting Country</h5>
                    <Chart options={options3} series={series3} type="donut" width="100%" height="100%"/>

                  </div>
                </div>{/* End Website Visted country */}


                {/* News & Updates Traffic */}
                <div className="card my-5">

                  <div className="card-body pb-0">
                    <h5 className="card-title">News &amp; Updates </h5>
                    <div className="news">
                      <div className="post-item clearfix">
                        <img src="https://pbs.twimg.com/media/CRXSrkaUsAA0r1N.jpg" alt="" />
                        <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                        <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                      </div>
                      <div className="post-item clearfix">
                        <img src="https://www.mrdustbin.com/us/wp-content/uploads/2021/09/sofia-wylie.jpg" alt="" />
                        <h4><a href="#">Quidem autem et impedit</a></h4>
                        <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                      </div>
                      <div className="post-item clearfix">
                        <img src="https://lthumb.lisimg.com/636/20181636.jpg?width=740&sharpen=true&aspect_ratio=1:1&crop_gravity=north" alt="" />
                        <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                        <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                      </div>
                      <div className="post-item clearfix">
                        <img src="https://4.bp.blogspot.com/-gjMx2NxPMDw/WU_jllP30PI/AAAAAAAAOxw/7wAfgrVi0CQFiqIQyhgNkMDq-ZFPgIeTgCLcBGAs/s1600/4.jpg" alt="" />
                        <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                        <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                      </div>
                      <div className="post-item clearfix">
                        <img src="https://images.networthlist.org/medias/profile/13/dylan-bruce.jpg" alt="" />
                        <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                        <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                      </div>
                    </div>{/* End sidebar recent posts*/}
                  </div>
                </div>{/* End News & Updates */}


              </div>{/* End Right side columns */}
            </div>




          </section>
        </main>{/* End #main */}
      </div>
            
        </div>
    );
}

export default Statiscs;