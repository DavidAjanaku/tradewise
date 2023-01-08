let  depositModal =  document.querySelector('.depositModal');


let  depositModal2 =  document.querySelector('.depositModal2');


let depositBox = document.querySelector('#mySizeChartModal');
let depostBoxClose = document.querySelector('.ebcf_close');
depositModal.addEventListener('click', function(){
  console.log('work');
  depositBox.style.display = "block"
})

depositModal2.addEventListener('click', function(){
    console.log('work');
    depositBox.style.display = "block"
  })

depostBoxClose.addEventListener('click', function(){
    depositBox.style.display = "none"

})


window.onclick = function (e) {
    if (e.target.className === 'mySizeChartModal'){
        e.target.style.display = 'none';
    }
}


console.log(depositModal    );