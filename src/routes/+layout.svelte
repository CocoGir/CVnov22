<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { supabase } from '$lib/supabaseClient';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>

	<footer>
		<hr>
		<div id="texte">
		<p>N'hésitez pas à vous <span class="highlight">connecter</span> ou à m'écrire !</p>
		</div>
		<div id="contacts">
			<a href="https://www.linkedin.com/in/corentingiraud-ingenieur/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" title="LinkedIn" alt="Lien LinkedIn" width=40px>
			</a>
			
			<a href="mailto:corentin.giraud.23@eigsi.fr">
				<img src="https://logos-marques.com/wp-content/uploads/2021/03/Gmail-Logo.png" title="Gmail" alt="Lien Gmail" width=65px>
			</a>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height : auto; 
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem; 
		width: 80%;
		max-width: 64rem;
		min-height: 40vh;
		margin: 0 auto;
		box-sizing: border-box;
		border-width : 1px; 
	}

	hr {
		height: 2px;
		background-color: blue;
		border: none;
		margin : 0px 30px 0px 30px; 
}

	footer {
		text-align : center; 
		color : black;
		margin-bottom : 40px;  
		font-weight : bold; 
	}

	.highlight:hover {
		background-color: gold; 
		font-size : 20px; 
	}

	img {
		padding : 5px; 
		padding-right : 10px; 
	}

	#contacts {
		border: 0px solid black;
		text-align:center; 
		display: inline-block;
		margin-top : -10px; 
	}


</style>
