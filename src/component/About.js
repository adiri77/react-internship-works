import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div class="container">
   <div class="row mt-3"><h1 style={{textAlign: "center"}}><b>ABOUT MYSELF</b></h1></div>
<div class="row mt-3">
<div class="col col-md-2"></div>
    <div class="col col-md-8" style={{border: "2px solid black",borderRadius:"10px"}}>
<div class="row mt-4">
<div class="col col-md-2"></div>
<div class="col col-md-8">
<div class="row" style={{display: "flex",justifyContent:"center",alignItems: "center;"}}>
<img src="1.jpg" alt="..."  height="250px" width="150px"/>

</div>
<div class="row mt-3">

    <label for="exampleFormControlTextarea1" class="form-label">About Myself:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">MY NAME IS ADITYA KUMAR SINGH. CURRENTLY I AM DOING MY BTECH FROM ABESIT , GHAZIABAD. I AIMED TO BE A PROFESSIONAL FULL STACK DEVELOPER WHERE I WILL DOING MANY FREELANCINMG PROJECTS.I HAVE GREAT COMMAND ON LANGUAGES LIKE C,CPP,JAVA, HTML,CSS,DBMS ETC. WHERE I WILL DOING LOTS OF PROJECTS ON IT.I HAD DONE TWO COLLEGE LEVEL PROJECTS AND ONE INDIA LEVEL WHERE I GOT SELECTED IN SMART INDIA HACKATHON WITH MY PROJECT NAME "CENTRALIZED GRIEVANCE SYSTEM PORTAL" AND ALSO GOT CERTIFICATION ON IT.</textarea>
  
</div>
<br></br><br></br>

</div>
<div class="col col-md-2"></div>
</div>
    </div>
    
    <div class="col col-md-2"></div>
    </div>
</div>


)
}
