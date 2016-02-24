// Write your code here!
$(document).ready(function(){
  $.delete()
  $.get('http://portal.batchacademy.com/api/wdfne/test-data/items_endpoint', function(items){
    var itemTemplate = $('Template#item').html();
    for(var i = 0; i < items.length; i++){
      console.log(itemTemplate[i]);
      var newItem = $(itemTemplate);
      $('.title', newItem).text(items[i].name);
      $('.title', newItem).text(items[i].name);
      $('.title', newItem).text(items[i].name);

    }

  });
  $.post('http://portal.batchacademy.com/api/wdfne/test-data/items_endpoint', {data}, function(responseData){

  });
  });