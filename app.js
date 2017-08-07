function init(){

  $.ajax({

    url:"http://localhost:8080/sgp/api/collaborateurs",
    type: 'GET',
    dataType: 'json',
    success:  function(data){
        data.forEach(function(collab) {
            
        	$('#tbody').append('<tr><th>'+collab.matricule+'</th><th>'+collab.nom+'</th><th>'+collab.prenom+'</th></tr>');
        });
    }

});


}