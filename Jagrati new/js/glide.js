var glide = new Glide('.glide',{
  			type: 'slider',
  			focusAt: 'center',
  			perView: 2,
  			autoplay: 2000,
  			gap: 30
  		})

var ele = document.querySelectorAll(".glide__slides li")
var ele1 = document.querySelectorAll(".glide__slide--clone")
// ele1[1].classList.add("llll")
// ele1[2].classList.add("rrrr")
console.log(ele1)

glide.on(['mount.after', 'run'], function () {
  var a = glide.index
  // var l= a==0?8:a-1
  // var r= a==8?0:a+1
  // console.log(ele[l]);
  // console.log(ele[r]);
  for(var i=0; i<9; i++){
  	ele[i].classList.remove("rrrr");
  	ele[i].classList.remove("llll");
  }
  if(a!=0) ele[a-1].classList.add("llll");
  // ele[l].classList.remove("rrrr");
  // ele[r].classList.remove("llll");
  if(a!=8) ele[a+1].classList.add("rrrr");
  // ele[a].classList.remove("rrrr");
  // ele[a].classList.remove("llll");

})

glide.mount()