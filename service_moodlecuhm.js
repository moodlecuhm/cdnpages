"use strict";

document.addEventListener('DOMContentLoaded', function(event) 
{
    //the event occurred
    console.log('cargado js');
    alert('server free');

    axios.get('https://recorrido.cuhm.mx/wp-json/wp/v2/posts?categories=13', {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    .then(function(res) 
    {   
        if(res.status == 200) 
        {
            alert(res.data[0].id);
            //console.log('resultado post: ' + res.data[0].id);
            //console.log('header: ' + res.headers['x-wp-total']);
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