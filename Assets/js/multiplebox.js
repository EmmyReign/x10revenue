$(document).ready(function(){
      
    //$('#search_data').tokenfield({
        
    //});
    $('#search_data').tokenfield({
        autocomplete :{
            source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
            delay: 100
        }
    });
  });