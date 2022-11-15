<body>
  <center>
    <div id="SkillBox">
      <center><p>Mes compétences informatiques</p></center>
            
      <div class="SkillBar">
        <div id="Skill-HTML"> 
          <span class="Skill-Area ">HTML - </span>
          <span class="PercentText ">65%</span>
        </div>
      </div>
      
      <div class="SkillBar">
        <div id="Skill-CSS">
          <span class="Skill-Area ">CSS - </span>
          <span class="PercentText ">60%</span>
        </div>
      </div>

      <div class="SkillBar">
        <div id="Skill-SQL">
          <span class="Skill-Area ">SQL - </span>
          <span class="PercentText ">80%</span>
        </div>
      </div>
      
      <div class="SkillBar">
        <div id="Skill-R">
          <span class="Skill-Area ">R - </span>
          <span class="PercentText ">75%</span>
        </div>
      </div>
      
      <div class="SkillBar">
        <div id="Skill-Java">
          <span class="Skill-Area ">Java - </span>
          <span class="PercentText ">55%</span>
        </div>
      </div>
      
    </div>
  </center>
</body>

<style>
  p{
    text-align:center; 
    color:black; 
    font-size : 25px; 
    font-family: "Gill Sans", sans-serif;
  }

  #SkillBox {
    font-size: 20px;
    width: 70%;
    height: auto;
    margin: 40px auto;
    background-color: #fff;
    padding: 10px;
    border-radius:20px;
    -o-border-radius:20px;
    -webkit-border-radius:20px;
    -ms-border-radius:20px;
    -moz-border-radius:20px;  
  }

  .SkillBar {
    font-size: 20px;
    font-family: "Gill Sans", fantasy;
    width: 80%;
    height: 50px;
    position: relative;
    background: rgba(17, 17, 17, .3);
    margin: 15px auto;
  }

  #Skill-HTML {
    width: 65%;
    animation: Animate-HTML 5s;
    -webkit-animation: Animate-HTML 5s;
    -moz-animation: Animate-HTML 5s;
    -o-animation: Animate-HTML 5s;
    height: 50px;
    position: absolute;
    background-color: darkorange;
    line-height: 50px;   
  }
  @keyframes Animate-HTML {
  from {
      width: 100%;
  }
  to {
    width: 65%}
  }
 
  #Skill-CSS {
    animation: Animate-CSS 5s;
    -webkit-animation: Animate-CSS 5s;
    -moz-animation: Animate-CSS 5s;
    -o-animation: Animate-CSS 5s;
    width: 60%;
    height: 50px;
    position: absolute;
    background-color: darkorange;
    line-height: 50px; 
  }
  @keyframes Animate-CSS {
  from {
    width: 100%;
  }
  to {
      width: 60%}
  }
  
  #Skill-SQL {
    animation: Animate-SQL 5s;
    -webkit-animation: Animate-SQL 5s;
    -moz-animation: Animate-SQL 5s;
    -o-animation: Animate-SQL 5s;
    width: 80%;
    height: 50px;
    position: absolute;
    background-color: #5aa669;
    line-height: 50px; 
  }
  @keyframes Animate-SQL {
  from {
    width: 100%;
  }
  to {
      width: 80%}
  }
  
  #Skill-R {
    animation: Animate-R 5s;
    -webkit-animation: Animate-R 5s;
    -moz-animation: Animate-R 5s;
    -o-animation: Animate-R 5s;
    width: 75%;
    height: 50px;
    position: absolute;
    background-color: #5aa669;
    line-height: 50px; 
  }
  @keyframes Animate-R {
  from {
    width: 100%;
  }
  to {
      width: 75%}
  }
  
  #Skill-Java {
    animation: Animate-Java 5s;
    -webkit-animation: Animate-Java 5s;
    -moz-animation: Animate-Java 5s;
    -o-animation: Animate-Java 5s;
    width: 55%;
    height: 50px;
    position: absolute;
    background-color: orangered;
    line-height: 50px; 
  }
  @keyframes Animate-Java {
  from {
    width: 100%;
  }
  to {
      width: 55%
  }
  }
</style>