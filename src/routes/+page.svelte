<script>
		import { supabase } from '$lib/supabaseClient';
</script>

<body>
	<section id="start">
		<nav>
				<img src = "https://media.licdn.com/dms/image/C4D03AQGAKNn3VlvDJQ/profile-displayphoto-shrink_200_200/0/1637742243650?e=1672876800&v=beta&t=07E1uHPxClyyUoM1dAe_TZ5skHb0cN7DzVqolpICFdk" title="Corentin" class="image-ronde" />
		</nav>

		<section id="test">
			<div class="bjr">Bonjour, je suis</div><br>
			<div class="name">Corentin Giraud </div><br>
		</section>	 
	</section>

	<section id="description">
		<div class="bio">
					<p>Etudiant en dernière année de cycle ingénieur à l’EIGSI La Rochelle, dominante Entreprise du Futur. </p>
					<p>Futur ingénieur généraliste passionné par les nouvelles technologies, l’industrie du futur, les data et le management.  </p>
		</div>

		<div class="CV">
			<a href="https://phswvhkxzhnjbfkeufyk.supabase.co/storage/v1/object/public/infos/CV%20Corentin%20GIRAUD.pdf"><span>Mon CV papier</span></a>
		</div>
	</section>	
	<br>
</body>

<style>
	#start {
		display: flex;
		flex-wrap: wrap; 	
		align-content: flex-start;	 
		margin-top : 2%;
		justify-content : center;  
	}

	.image-ronde {
		width : 200px; height : 200px;
		border: none;
		-moz-border-radius : 75px;
		-webkit-border-radius : 75px;
		border-radius : 150px;
		margin: 0 25px 0 25px; 
	}

	#test {		
		margin-top: 50px; 
	}

	.bjr {
		color : black; 
		font-size : 20px;
		font-family : American Typewriter, serif; 
		text-align: center; 
	}

	.name {
		color : blue; 
		font-size : 35px;
		font-weight : bold; 
		font-family : Verdana, serif; 
		text-align: center; 
	}

	.bio {
		text-align: center; 
		color : black; 
		font-family : Verdana, serif;  
		margin-bottom : 40px; 
	}

	.CV {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		margin-bottom : 20px; 
	}

	a{
		display: block;
		width: 200px;
		height: 40px;
		line-height: 40px;
		font-size: 18px;
		font-family: sans-serif;
		text-decoration: none;
		color: firebrick;
		border: 2px solid #333;
		letter-spacing: 2px;
		text-align: center;
		position: relative;
		transition: all .35s;
		font-weight: bold; 
	}

	a span{
		position: relative;
		z-index: 2;
	}

	a:after{
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background: firebrick;
		transition: all .35s;
	}

	a:hover{
		color: #fff;
	}

	a:hover:after{
		width: 100%;
	}
	
</style>
