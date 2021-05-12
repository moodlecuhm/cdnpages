"use strict";

document.addEventListener('DOMContentLoaded', function(event) 
{
    //the event occurred
    console.log('cargado js');

    //https://recorrido.cuhm.mx/wp-json/wp/v2/posts?categories=13

    axios.get('https://recorrido.cuhm.mx/744-2/', {
        headers: {
            'Content-Type': 'application/json',
        }
    })

    .then(function(res) 
    {  
        //console.log('correcto ok'); 
        if(res.status == 200) 
        {
        // //   console.log('resultado post: ' + res.data[0].id);          
        // //   console.log('header: ' + res.headers['x-wp-total']);
             console.log('correcto');
        }
    })
    
    .catch(function(err) 
    {
        console.log(err);
    })
    
    .then(function() 
    {
        console.log('termino solicitud')
    });
});