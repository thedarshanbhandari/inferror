
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    // for nav bar js
    const p=document.querySelector(".hambutton");
    const q=document.querySelector(".menubarsec");

    p.addEventListener("click",()=>{
      if(q.classList.contains("active")){
        q.classList.remove("active");
        q.style.transition='.7s';

      }else{
        q.classList.add("active");
      }
  
    })

    /////////for stickey nav bar
    let hd=document.querySelector(".navbar");
  window.addEventListener("scroll",()=>{
    let p=window.scrollY;
    console.log(p)
    if(p>0){
        hd.classList.add('sticky');
      }
    if(p==0){
        hd.classList.remove('sticky');
        hd.style.transition='.5s'
    }
});

//////////////////for active menu bar///////////
let section= document.querySelectorAll(".target")
let navlink=document.querySelectorAll("ul a")
console.log(section);
console.log(navlink);
console.log("hii")
window.addEventListener('scroll',()=>{
  section.forEach(sec=>{
      let top=window.scrollY;
      let offset=sec.offsetTop-250;
      let height=sec.offsetHeight;
      let id=sec.getAttribute('id');
      if(top>= offset && top<offset + height){
          navlink.forEach(links=>{
              links.classList.remove('active1')
              document.querySelector('ul a[href*=' +id +']').classList.add('active1')
          })
      }

  })
})
//////////////////////////for filter//////////////////////
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".pic");

window.onload = () =>{ //once window loaded
    filterItem.onclick = (selectedItem) =>{
      if(selectedItem.target.classList.contains("item")){
        filterItem.querySelector(".activated").classList.remove("activated"); // removes the active class (in the 1st element)
        selectedItem.target.classList.add("activated");
        let filterName = selectedItem.target.getAttribute("data-name"); // gets data-name value of the user selected options
        //console.log(filterName);
        filterImg.forEach((image)=>{
          let filterImages = image.getAttribute("data-name"); // gets image data-name value
          //console.log(filterImages);
          if((filterImages == filterName) || filterName == "all"){
            image.classList.remove("hide");
            image.classList.add("show");
          }else{
            image.classList.add("hide");
            image.classList.remove("show");
          }
        });
      }
      
    }
}

////////////link of project////////////////

const ecom=document.querySelector(".ecommerce");
ecom.addEventListener("click",()=>{
  location.href="https://developerdarshan.github.io/jupiter-online-shopping/";
})


const nft=document.querySelector(".nft");
nft.addEventListener("click",()=>{
  location.href="https://developerdarshan.github.io/nftspace/";
})

const design=document.querySelector(".design");
design.addEventListener("click",()=>{
  location.href="https://www.figma.com/proto/K6lgQUDJLc8YwKuAdWUNVn/Bazar?page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2";
})

const gym=document.querySelector(".gym");
gym.addEventListener("click",()=>{
  location.href="https://kanchan-sarkar.github.io/Gym-Website/";
})
