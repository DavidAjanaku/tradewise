
(function() {
    
    // Create reusable copy fn
    function copy(element) {
        
        return function() {
          document.execCommand('copy', false, element.select());
        }
    }
    
    // Grab shareUrl element
    var shareUrl = document.querySelector('.js-shareUrl');

    // Create new instance of copy, passing in shareUrl element
    var copyShareUrl = copy(shareUrl);
    
    // Set value via markup or JS
    shareUrl.value = "bc1q387v8scvpxvtwa6relql9fec8zfyqgg9h0kp57";
  
    // Click listener with copyShareUrl handler
    shareUrl.addEventListener('click', copyShareUrl, false);
  
}());




(function() {
    
    // Create reusable copy fn
    function copy(element) {
        
        return function() {
          document.execCommand('copy', false, element.select());
        }
    }
    
    // Grab shareUrl element
    var shareUrl = document.querySelector('.js-shareUrl1');

    // Create new instance of copy, passing in shareUrl element
    var copyShareUrl = copy(shareUrl);
    
    // Set value via markup or JS
    shareUrl.value = "0x9Bf7Cd5dCd2fc166CC356625Db9922f19D2a5388";
  
    // Click listener with copyShareUrl handler
    shareUrl.addEventListener('click', copyShareUrl, false);
  
}());



(function() {
    
    // Create reusable copy fn
    function copy(element) {
        
        return function() {
          document.execCommand('copy', false, element.select());
        }
    }
    
    // Grab shareUrl element
    var shareUrl = document.querySelector('.js-shareUrl2');

    // Create new instance of copy, passing in shareUrl element
    var copyShareUrl = copy(shareUrl);
    
    // Set value via markup or JS
    shareUrl.value = "0x9Bf7Cd5dCd2fc166CC356625Db9922f19D2a5388";
  
    // Click listener with copyShareUrl handler
    shareUrl.addEventListener('click', copyShareUrl, false);
  
}());


$(document).ready(function(){




$('ul.tabs li').click(function(){
var tab_id = $(this).attr('data-tab');

$('ul.tabs li').removeClass('current');
$('.tab-content').removeClass('current');

$(this).addClass('current');
$("#"+tab_id).addClass('current');
})

})

//   let m =  document.querySelector('ul.tabs li');
//           m.addEventListener('click', function(){
//             console.log('work');

//             		var tab_id = $(this).attr('data-tab');
//                     let tab1 = 

//           })
