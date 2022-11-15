<script>
	import { onMount } from 'svelte'
	import { supabase } from '$lib/supabaseClient'

	let mesValeurs = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('Valeurs')
			.select('valeurs')
		mesValeurs = data
	})

    let mesLangues = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('Langues')
			.select('langue,niveau,certificat')
		mesLangues = data
	})

    let mesLoisirs = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('Loisirs')
			.select('titre,lienImage')
		mesLoisirs = data
	})
</script>

<body>
    <table align="center">
        <caption>VALEURS</caption>
        <tr> 
            {#each mesValeurs as { valeurs }}
                <td>{valeurs}</td>
            {/each}
        </tr>
    </table>

    <table align="center">
        <caption>LANGUES</caption>
        <colgroup>
            <col style="width:100px">
            <col style="width:100px">
            <col style="width:300px">
        </colgroup>
        <tr> 
            <th>Langue</th> 
            <th>Niveau</th> 
            <th>Certificat</th> 
        </tr>
        {#each mesLangues as { langue, niveau, certificat }}
            <tr> 
                <td> {langue} </td> 
                <td> {niveau} </td> 
                <td> {certificat} </td> 
            </tr>
        {/each}
    </table>

    <section>
        <h2>Centres d'intérêt</h2>
        {#each mesLoisirs as { titre, lienImage }}
            <figure class="interet">
                <img src={lienImage} alt="">
                <figcaption>{titre}</figcaption>
             </figure>
        {/each}
    </section>
</body>

<style>
    /*SECTION TABLEAUX*/
    p{
        text-align:center; 
        color:red; 
    }

    table {
        margin-top : 30px; 
    }

    table, caption, th, td {
        border: 1px solid black;
        border-collapse: collapse; 
        text-align : center; 
        
    }

    caption, th, td {
        padding: 7px;
    }

    caption {
        background-color: mediumblue;
        font-size : 25px; 
        font-weight: bold; 
        color : white; 
    }

    th {
        background-color: lightsteelblue;
        font-style: italic;
    }

    td {
        background-color: whitesmoke;
        color : black; 
        padding-right : 15px; 
        padding-left: 15px; 
    }

    /*SECTION INTERETS*/
    .interet{
        flex: 0 1 50%;
        flex-flow: column wrap;
        align-items: center;
        margin-bottom: 35px;
        display : inline-block; 
        text-align: center; 
    }
    .interet img{
        width: 150px;
        height: 130px;
        border-radius: 50%;
        box-shadow: 0px 0px 20px #555;
    }
    section {
        text-align : center; 
    }
    h2 {
        font-size: 26px; 
        color : blue; 
    }
    figcaption {
        font-size: 20px;
        font-style : italic; 
        margin-top: 10px; 
        font-family : georgia; 
        color : dimgray; 
    }
</style>