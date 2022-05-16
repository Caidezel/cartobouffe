$(document).ready(function () {
 if ($('#myModal').length) {
   $.magnificPopup.open({
    items: {
        src: '#myModal' 
    },
    type: 'inline'
      });
   }
});