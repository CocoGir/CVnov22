<script>
  import { supabase } from '$lib/supabaseClient'

  let name = '';
  let subject = '';
  let mail = '';
  let msg = ''; 

	let form = undefined
  const handleClick = async () => {
	const { data, error } = await supabase
  .from('Formulaire')
  .insert([ { nom: name , sujet: subject, email: mail, message: msg }, ])
  form = data;
  }
</script>

<body>
  <div class="contact">
      <p>Si vous avez un message, veuillez remplir le formulaire de contact ci-dessous.</p>
      <p>Je vous laisse mon numéro de téléphone si besoin : <span class="tel">+33 (0)7 62 53 84 86</span> </p>  
  </div><br>

  <form>
    <div class="container">
      <h1>Formulaire de contact</h1>
        <label for="name">Nom & Prénom</label>
        <input type="text" id="name" name="firstname" placeholder="Votre nom et prénom" bind:value={name}>

        <label for="sujet">Sujet</label>
        <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message"  bind:value={subject}>

        <label for="emailAddress">Email</label>
        <input id="emailAddress" type="email" name="email" placeholder="Votre email"  bind:value={mail}>

        <label for="subject">Message</label>
        <textarea id="subject" name="subject" placeholder="Votre message" style="height:150px" bind:value={msg}></textarea>
        
        <button id="button" on:click={handleClick}>Envoyer</button>
    </div>
  </form>
</body>

<style>
  body {font-family: Arial, Helvetica, sans-serif;
    padding: 0px;
  }

  input[type=text], textarea, input[type=email] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    margin-right: 0px;
    margin-left: 0px;
    resize: vertical;
  }
  .contact {
    text-align: center; 
  }

  label{
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;
  }

  button{
    background-color: #1255a2;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #1872D9;
  }

  .container {
    box-sizing : border-box;
    border-radius:5px;
    background-color:#f2f2f2;
    padding:20px;
    width: 100%;
    max-width: 440px;
    margin:0 auto;
    margin-bottom : 20px; 
  }

  h1  {
    color: blue;
    width: 100%;
    margin-top: -3px;
  }

  .tel {
      color : red; 
      font-size: 17px; 
      font-weight : bold; 

  }
</style>