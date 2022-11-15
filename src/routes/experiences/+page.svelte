<body>
  <div class="timeline">
    <div class="timeline-object">
      <div class="timeline-status"></div>
        <div class="timeline-content">
          <h3>Contrat de professionalisation  - Ingénieur Méthodes Logistique</h3>
          <span id="grand">Alstom, </span><span>La Rochelle (17)</span><br>
          <span>Oct. 2022 - Sept. 2023 (1 an)</span>
          <p> Expérience à venir (période école actuellement) prolongement de mon stage élève-ingénieur </p>
          <ul>
            <li>Amélioration continue (rouleaux, étiquettes, etc) </li>
            <li>Externaliser certaines tâches par un prestataire </li>
            <li>Déploiement des BOP</li>
          </ul>
        </div>
    </div>

    <div class="timeline-object complete">
      <div class="timeline-status"></div>
        <div class="timeline-content">
          <h3>Stage élève-ingénieur - Ingénieur Méthodes Logistique</h3>
          <span id="grand">Alstom, </span><span>La Rochelle (17)</span><br>
          <span>Mai. 2022 - Sept. 2022 (15 semaines)</span>
          <ul>
            <li>Coordonner l’approvisionnement et la gestion du stock d'un flux particulier pour le site de La Rochelle </li>
            <li>Déploiement des boites d’opérations pour livrer les composants dans les mains des compagnons en chaine </li>
            <li>Mise en place de distributeurs automatiques de produits chimiques</li>
          </ul>
        </div>
    </div>
    
    <div class="timeline-object complete">
      <div class="timeline-status"></div>
        <div class="timeline-content">
          <h3>Emploi saisonnier - employé libre-service</h3>
          <span id="grand">Super U,  </span><span>Nieul-sur-Mer (17)</span><br>
          <span>Juin. 2021 - Août. 2021 (11 semaines) </span>
          <ul>
            <li>Mise en rayon de produits frais, gestion de 2 rayons </li>
            <li>Réassort, merchandising, organisation des stocks </li>
          </ul>
        </div>
    </div>   
</body>

<img class="Alstom" src="https://www.alstom.com/sites/alstom.com/files/styles/560w/public/2019/07/11/Alstom_mobility_by_nature_2019.jpg?itok=icP1Tbnd" alt="test" width=150px > 

<img class="SuperU" src="https://www.magasins-u.com/images/logo-super-u-hd" alt="test2" width=150px>  


<style>
  * {
    box-sizing: border-box;
  }

  body {
    min-height : 150vh; 
  }

  .timeline-object {
    display: flex;
    align-items: center;
    margin-top: 30px;
    position: relative;
    margin-left: 80px;
  }

  .timeline-object.complete::after {
    content: '';
    display: block;
    position: absolute;
    margin-top: -7px;
    width: 5px;
    height:215%;
    background-color: #1DBF73;
    left: 23px;
    top: -60x;
    transform: translateX(-15%);
  }

  .timeline-status {
    height: 46px;
    width: 46px;
    border-radius: 50%;
    background-color: #1DBF73;
  }

  .timeline-object:not(.complete) .timeline-status {
    background: #ffffff;
    border: 4px solid #C5C5C5;
  }

  .timeline-content {
    margin-left: 15px;
  }

  .timeline-content h3 {
    color: #1DBF73;
    background: #CFF6CF;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .timeline-content span {
    color: #103B27;
    font-size: .9em;
    font-weight: bold;
  }

  .timeline-content li {
    color: black;
    font-size: 1em;
    font-style: italic;
    margin : 5px;
  }

  .Alstom {
    margin-left : -120px; 
    margin-top : -1150px; 
  }

  .SuperU {
    margin-left : -120px; 
    margin-top : 250px; 
    margin-bottom : 200px; 
  }

  #grand {
    font-size: 20px; 
    color : ForestGreen; 
  }

  .timeline-content p {
    color: red;
    font-size: 1em;
    margin-top: 0px;  
    margin-bottom: -8px; 
  }

  .timeline-object:not(.complete) .timeline-content h3 {
    color: #8A8A8A;
    background: #E1E1DF;
  } 
</style>