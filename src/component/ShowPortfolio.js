import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from 'react-router-dom';
export default function ShowPortfolio() {
  return (
    <div class="container mt-2" style={{height: "441px"}}>
    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" dataBsTarget="#carouselExampleIndicators" dataBsSlideTo="0" class="active" ariaCurrent="true" ariaLabel="Slide 1"></button>
          <button type="button" dataBsTarget="#carouselExampleIndicators" dataBsSlideTo="1" aria-label="Slide 2"></button>
          <button type="button" dataBsTarget="#carouselExampleIndicators" dataBsSlideTo="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.w3docs.com/uploads/media/default/0001/05/805cddb75d8fdc035886bc8d78487eef8b3845bb.png" height="439px" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://www.tutorialrepublic.com/lib/images/css-illustration.png" class="d-block w-100" alt="..." height="439px"/>
          </div>
          <div class="carousel-item">
            <img src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" class="d-block w-100" alt="..." height="439px"/>
          </div>
          <div class="carousel-item">
            <img src="ADI-removebg-preview(1).png" class="d-block w-100" alt="..." height="439px"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" dataBsTarget="#carouselExampleIndicators" dataBsBie="prev">
          <span class="carousel-control-prev-icon" ariaHidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" dataBsTarget="#carouselExampleIndicators" dataBsSlide="next">
          <span class="carousel-control-next-icon" ariaHidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      
      



      <h1 style={{textAlign: "center;"}}><b>Weak4</b></h1>
<div class="row" >
    <div class="col md-4">
        <div class="card">
            <img src="https://www.wikihow.com/images/thumb/5/5f/Make-a-Timetable-Step-3-Version-3.jpg/v4-460px-Make-a-Timetable-Step-3-Version-3.jpg.webp" height="250px" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Assignment 1</h5>
            
              <Link  class="btn btn-primary" aria-current="page" to="/firstcomponent">Detail</Link>
            </div>
          </div>
    </div>
    <div class="col md-4">
        <div class="card">
            <img src="https://learn.microsoft.com/en-us/aspnet/core/mvc/views/layout/_static/page-layout.png?view=aspnetcore-7.0 " height="250px" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Assignment 2</h5>
          
              <Link  class="btn btn-primary" aria-current="page" to="/expression">Detail</Link>
            </div>
          </div>
    </div>
    <div class="col md-4">
        <div class="card">
            <img src="https://i.stack.imgur.com/IhpLz.png" height="250px" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Assignment 3</h5>
              
              <Link  class="btn btn-primary" aria-current="page" to="/demo">Detail</Link>
            </div>
          </div>
    </div>
    </div>
    
    <h1 style={{textAlign: "center;"}}><b>Weak5</b></h1>
<div class="row" >
    <div class="col md-4">
        <div class="card">
            <img src="https://www.wikihow.com/images/thumb/5/5f/Make-a-Timetable-Step-3-Version-3.jpg/v4-460px-Make-a-Timetable-Step-3-Version-3.jpg.webp" height="250px" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Assignment 1</h5>
              
              <Link  aria-current="page"   class="btn btn-primary" to="/product">Detail</Link>
            </div>
          </div>
    </div>
    <div class="col md-4">
        <div class="card">
            <img src="https://learn.microsoft.com/en-us/aspnet/core/mvc/views/layout/_static/page-layout.png?view=aspnetcore-7.0 " height="250px" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Assignment 2</h5>
              
              <Link  class="btn btn-primary" aria-current="page" to="/gallery1">Detail</Link>
            </div>
          </div>
    </div>
    <div class="col md-4">
        <div class="card">
            <img src="https://i.stack.imgur.com/IhpLz.png" height="250px" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Assignment 3</h5>
              
              <Link  class="btn btn-primary" aria-current="page" to="/inlinecss">Detail</Link>
            </div>
          </div>
    </div>
    </div>
    
  <h1 style={{textAlign: "center;"}}><b>Weak6</b></h1>
<div class="row" >
  <div class="col md-4">
      <div class="card">
          <img src="https://www.wikihow.com/images/thumb/5/5f/Make-a-Timetable-Step-3-Version-3.jpg/v4-460px-Make-a-Timetable-Step-3-Version-3.jpg.webp" height="250px" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Assignment 1</h5>
            
            <Link  class="btn btn-primary" aria-current="page" to="/likedislike">Detail</Link>
          </div>
        </div>
  </div>
  <div class="col md-4">
      <div class="card">
          <img src="https://learn.microsoft.com/en-us/aspnet/core/mvc/views/layout/_static/page-layout.png?view=aspnetcore-7.0 " height="250px" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Assignment 2</h5>
            
            <Link  class="btn btn-primary" aria-current="page" to="/todolist">Detail</Link>
          </div>
        </div>
  </div>


    
   </div>

</div>

    
  )
}

