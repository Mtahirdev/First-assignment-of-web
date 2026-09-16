// Upper Navbar
let UpperNav = document.querySelector(".upper-nav");
let UpperNavInfo = [
  { icon: "icon-[clarity--email-line]", text: "tahirpansota@gmail.com" },
  { icon: "icon-[famicons--call]", text: "03203981965" },
  { icon: "icon-[akar-icons--location]", text: "Chack no 195RB faislabad" },
];

console.log(UpperNavInfo);

let UpperNavHtml = "";
UpperNavInfo.forEach((ele) => {
  UpperNavHtml += `
  <div class="flex w-[33%] gap-6 justify-center items-center h-full">
        <span class="${ele.icon} text-[20px] text-[#6c757d]"></span>
        <h3 class="text-[#6c757d] text-[18px]">${ele.text}</h3>
      </div>`;
});

UpperNav.innerHTML = UpperNavHtml;


// Lower Navbar for Mobile

let toggleBtn = document.querySelector(".toggle-btn");
let nav = document.querySelector(".nav");
let state = true;

toggleBtn.addEventListener("click",()=>{
  if(state == true){
    state = !state;
    nav.classList.remove("hidden")

  } else {
    state = !state
    nav.classList.add("hidden")

  }
})

// Upper Navbar countries

let Countries_Btn = document.querySelector(".countries-btn");
let Countries_div = document.querySelector(".countries-div");
let countries_state = true;

Countries_Btn.addEventListener("click",()=>{
  
  if(countries_state == true){
    countries_state = !countries_state;
    Countries_div.classList.add("hidden");
    Countries_Btn.innerHTML = `
    
          <a href="" class="">Countries</a>
    <span class="icon-[akar-icons--chevron-up-small] text-4xl self-center"></span>

    `;
  } else {
    countries_state = !countries_state;
    Countries_div.classList.remove("hidden");
    Countries_Btn.innerHTML = `
          <a href="" class="">Countries</a>
          <span class="icon-[entypo--chevron-small-down] self-center text-4xl"></span>

    `

  }
})


// Navbar for desktop

let navDesk = document.querySelector(".nav-desk");
let LinkDev = document.querySelector(".link-div");
let aTag = document.querySelectorAll(".a-tag-for-link")

let linkarr =  JSON.parse(localStorage.getItem("linkarr")) ||
[{text:"Home",link:"www.google.com", className:"text-[18px] pl-1.5 text-[#194C4D]",classofdiv:"w-16 border h-0.5"}
  ,{text:"About",link:"www.google.com", className:"text-[18px] pl-1.5  text-[#194C4D]",classofdiv:"w-16 border h-0.5 hidden"}
  ,{text:"Services",link:"www.google.com", className:"text-[18px]  text-[#194C4D]",classofdiv:"w-16 border h-0.5 hidden"},
  {text:"Gallery",link:"www.google.com", className:"text-[18px] pl-1 text-[#194C4D]",classofdiv:"w-16 border h-0.5 hidden"}
];

let linkarr2 = [
    {text:"Countries",link:"www.google.com", className:"text-[18px] -pl-5 text-[#194C4D]",classofdiv:"w-16 border h-0.5 hidden"},
]




let desknavHtml = ``;

linkarr.forEach((ele,index)=>{
  desknavHtml += `
   <a href="" class="cursor-pointer flex flex-col  justify-evenly h-full a-tag-for-link ">
            <div class="${ele.classofdiv} line-div-A"></div>
            <h1 class="${ele.className} hover:text-orange-500 link-tag ">${ele.text}</h1>
            <div class="${ele.classofdiv} line-div-B"></div>
          </a>
  `
});

linkarr2.forEach((ele,index)=>{
  desknavHtml += `
  <div href="" class="cursor-pointer flex flex-col  justify-evenly h-full a-tag-for-link-cou ">
            <div class="${ele.classofdiv} line-div-cou"></div>
            <h1 class="${ele.className} hover:text-orange-500 link-tag-cou ">${ele.text}</h1>
            <div class="${ele.classofdiv} line-div-cou"></div>
          </div>
  `
})

desknavHtml += `
      <button class="self-center hover:bg-[#003a66]  mt-5 text-2xl bg-[#FFAD0C] px-2 py-0.5 text-white rounded-3xl relative left-5 border-2 border-gray-400 mb-5">Contact</button>
`;

LinkDev.innerHTML = desknavHtml;

let linkTag = document.querySelectorAll(".link-tag");
let lineDivA = document.querySelectorAll(".line-div-A")
let lineDivB = document.querySelectorAll(".line-div-B")
let linkTagCou = document.querySelector(".link-tag-cou")

let Countries_div_desk = document.querySelector(".countries-div-desk");

let showCountries = 0;
function getcountries(){
  showCountries = showCountries == 0 ? 1 : 0;
  localStorage.setItem("showcountries",JSON.stringify(showCountries));
  if(showCountries == 0){
      Countries_div_desk.classList.add("flex")
      Countries_div_desk.classList.remove("hidden")
  } else {
    Countries_div_desk.classList.remove("flex");
  Countries_div_desk.classList.add("hidden")
  }
  
}
linkTagCou.addEventListener("click",()=>{
  showCountries = showCountries == 0 ? 1 : 0;
  if(showCountries == 0){
      Countries_div_desk.classList.add("flex")
      Countries_div_desk.classList.remove("hidden")
  } else {
    Countries_div_desk.classList.remove("flex");
  Countries_div_desk.classList.add("hidden")
  }
  
})

linkTagCou.addEventListener("mouseover",(e)=>{

        let arr = linkarr2.find(elem=>elem.text == e.currentTarget.innerHTML);
  
        if(arr.classofdiv == "w-16 border h-0.5") return;
        console.log(arr);
    const prevElement = e.currentTarget.previousElementSibling;
 const nextElement = e.currentTarget.nextElementSibling;
    
    prevElement.classList.remove("hidden");
    nextElement.classList.remove("hidden")
});

linkTagCou.addEventListener("mouseout",(e)=>{
  let arr = linkarr2.find(elem=>elem.text == e.currentTarget.innerHTML);

    if(arr.classofdiv == "w-16 border h-0.5") return;

    const nextElement = e.currentTarget.nextElementSibling;
    const prevElement = e.currentTarget.previousElementSibling;

     nextElement.classList.add("hidden");
     prevElement.classList.add("hidden");
})

linkTag.forEach(ele=>{


  ele.addEventListener("click",(e)=>{
    let arr = linkarr.find(elem=>elem.text == e.currentTarget.innerHTML);
    arr.classofdiv = "w-16 border h-0.5";

    let arrB = linkarr.filter(elem=>elem.text != e.currentTarget.innerHTML);

    arrB.forEach(elem=>{return elem.classofdiv = "w-16 border h-0.5 hidden" })

    

      localStorage.setItem("linkarr", JSON.stringify(linkarr));
    
  })

  ele.addEventListener("mouseover",(e)=>{
    
        let arr = linkarr.find(elem=>elem.text == e.currentTarget.innerHTML);

        
        
        if(arr.classofdiv == "w-16 border h-0.5") return;
        
        console.log(arr);
    

    const prevElement = e.currentTarget.previousElementSibling;
 const nextElement = e.currentTarget.nextElementSibling;
    
    prevElement.classList.remove("hidden");
    nextElement.classList.remove("hidden")


  })
  
  ele.addEventListener("mouseout",(e)=>{
    
        let arr = linkarr.find(elem=>elem.text == e.currentTarget.innerHTML);

               if(arr.classofdiv == "w-16 border h-0.5") return;

const nextElement = e.currentTarget.nextElementSibling;
    const prevElement = e.currentTarget.previousElementSibling;

     nextElement.classList.add("hidden");
     prevElement.classList.add("hidden");

 
  })
})

window.addEventListener("scroll",()=>{
  console.log(window.scrollY);
  
  if(window.scrollY > 42){
    navDesk.classList.add("top-0");
  } else if(window.scrollY < 42){
    navDesk.classList.remove("top-0")
  } else if(window.scrollY > 100){
    console.log("hello");
    
    navDesk.classList.remove("h-24")
    navDesk.classList.add("h-16 bg-green-500")
  }
  console.log(window.scrollY);
  
})

window.addEventListener("scroll",()=>{
  console.log(window.scrollY);
   if(window.scrollY > 100){
    console.log("hello");
    navDesk.classList.remove("h-24")
    navDesk.classList.add("h-14")
    navDesk.classList.add("bg-[#F0F5FB]")
    navDesk.classList.remove("bg-white")
    // aTag.classList.add("justify-center")
    // aTag.classList.remove("justify-evenly")
    lineDivA.forEach(ele=>{
    return ele.classList.add("relative", "top-3")
    })
    lineDivB.forEach(ele=>{
      
      return ele.classList.add("relative", "bottom-3")
    })

    // linkarr.forEach(e=>{e.classofdiv = "w-16 border h-0.5 relative top-4 bottom-4"}) 
    
  } else if (window.scrollY < 100){
     navDesk.classList.add("h-24")
    navDesk.classList.remove("h-14")
    navDesk.classList.remove("bg-[#F0F5FB]")
    navDesk.classList.add("bg-white")
    // aTag.classList.add("justify-evenly")
    // aTag.classList.remove("justify-center ")
    lineDivA.forEach(ele=>{
    return ele.classList.remove("relative", "top-3")
    })
    lineDivB.forEach(ele=>{
      
      return ele.classList.remove("relative", "bottom-3")
    })


  }
  console.log(window.scrollY);
  
})


// Banner Main

let bannerMain = document.querySelector(".banner-main-div");

let arrofBanner = [{img:"../../images/carousel-1.jpg",first:"Your Trusted Partner for Visa Solutions",
  second:"Immigration Process Starts Here!", third:`At Syeds Consultancy,
             we provide personalized
             and expert visa services to help you navigate through the
              immigration process smoothly. Whether you're looking to study, work, or settle 
              abroad, our dedicated team is here to guide you every step of the way.`,
              btn:"Learn more"
},
{img:"../../images/carousel-2.jpg",first:"Comprehensive Visa Assistance",
  second:"Your Gateway to Global Opportunities", third:`With Syeds Consultancy, embark on your global journey with the support of visa experts who understand the intricacies of immigration processes. We offer tailored services to help you secure the right visa for your goals.`,
              btn:"Learn more"
},
];


let stateofbanner = 0;

function setstate(e){
  
  stateofbanner = e;
  renderBanner();
}

function renderBanner(){
let arr = arrofBanner[stateofbanner];
 console.log(stateofbanner);
 
 
 bannerMain.innerHTML = `

 <div
 style="background-image: url('${arr.img}')"
 class="w-full h-full  bg-center bg-cover flex justify-evenly      ">

  <div class="bg-black/60 bg-cover bg-no-repeat flex justify-evenly">
  
  <button onclick={renderBanner()} class="text-4xl  text-white  w-[5%] hover:text-orange-500 btn-prev"><span class="icon-[entypo--chevron-small-left]"></span></button>

  <div class="w-[90%] h-full  flex flex-col justify-center items-center gap-10">

    <h1 class="text-white text-3xl font-bold">${arr.first}</h1>
    <h1 class="text-7xl text-center font-bold text-white w-[70%] self-center">${arr.second}</h1>
    <h3 class="text-2xl text-center  text-white w-[80%] self-center">${arr.third}
    </h3>
<button class="text-2xl mt-4 hover:bg-[#194C4D] self-center   bg-[#FFAD0C] px-10 py-2 text-white rounded-3xl relative left-5  mb-5">${arr.btn}</button>
  <div class="flex w-[7%] justify-evenly flex-row self-center ml-9 justify-self-center">
    <button onclick={setstate(0)} class="bg-gray-500 ${stateofbanner == 0 ? "bg-orange-500":"bg-gray-500"} rounded-full w-5 h-5 flex justify-center items-center"><div class="bg-white rounded-full w-2 h-2 "></div></button>
    <button onclick={setstate(1)} class="bg-gray-500 ${stateofbanner == 1 ? "bg-orange-500":"bg-gray-500"} rounded-full w-5 h-5 flex justify-center items-center"><div class="bg-white rounded-full w-2 h-2 "></div></button>

  </div>
  </div>
  <button onclick={renderBanner()} class="text-4xl  text-white  w-[5%] hover:text-orange-500 btn-next"><span class="icon-[entypo--chevron-small-right]"></span></button>
  </div>

        </div>

 `;
 if(stateofbanner == 0){
  stateofbanner = 1;
 } else {
  stateofbanner = 0;
 }
}
let interval = setInterval(renderBanner, 5000);


    //  next content

    let cardDiv = document.querySelector(".small-card-div");

    let cardarr = [{icon:"icon-[fluent--book-globe-20-filled]",text:"View Category",number:"+31"},
      {icon:"icon-[mdi--account-group]",text:"Team Member",number:"+331"},
      {icon:"icon-[mdi--account-check-outline]",text:"Visa Process",number:"4.9K"},
      {icon:"icon-[fa6-solid--handshake]",text:"Success Rate",number:"98%"}
    ];

    let cardHtml = ``;

    cardarr.forEach(ele=>{
      return cardHtml+= `
      <div class="bg-[#194C4D] w-48 h-56 rounded-b-full peer">
                  <div class=" h-[50%] flex justify-center">
                    <div class="bg-[#F0F5FB] h-[90%] w-[80%] rounded-b-full flex justify-center items-center">
                      <span class="${ele.icon} text-6xl text-orange-400 hover:scale-110"></span>
                    </div>
                  </div>
                  <div class="bg-white rounded-b-full h-[50%] w-full flex mt-2 gap-2 items-center flex-col ">
                    <h1 class="text-2xl text-[#194C4D] font-bold">${ele.text}</h1>
                    <h1 class="text-2xl text-orange-500 font">${ele.number}</h1>
                  </div>
                </div>
      `;
    });
    cardDiv.innerHTML = cardHtml;


    // show card

    let showCardDisplay = document.querySelector(".show-card-display");

    let showcardarr = [
      {img:"../../images/service-1.jpg",text:"Student Visa",cardpara:`Here's a shorter version of your text: **Graduate Visa Support**
         We help international master’s and PhD graduates apply for the UK
          Graduate Route visa, making your shift from study to work in the UK
           smooth and stress-free.`},
      {img:"../../images/service-1.jpg",text:"Visit Visa",cardpara:`Our visit visa services assist
         individuals in securing short-term visas for travel, tourism, or family 
        visits—making the process smooth and hassle-free.`},
      {img:"../../images/service-1.jpg",text:"Visa Immigration",cardpara:`Our skilled immigration services
         support professionals in securing long-term visas based on their 
         qualifications and work experience—simplifying
         the path to global career opportunities.`},
      {img:"../../images/service-1.jpg",text:"Judicial Review",cardpara:`Our judicial review services assist
         individuals in challenging refused visa decisions through legal channels,
         ensuring your case is reviewed fairly and professionally.`},
      {img:"../../images/service-1.jpg",text:"Work Permit",cardpara:`We assist Gulf professionals in
         obtaining work permits for Schengen countries,
         enabling legal employment and career growth in Europe.`},
      {img:"../../images/service-1.jpg",text:"Schengen Visa",cardpara:`Apply for your Schengen visa today
         and explore travel,
         work, and study opportunities across Europe.`},

    ];

    let showcardHtml =``;


    showcardarr.forEach(ele=>{
      showcardHtml += `
      <div class="show-card-div w-[28%]  h-90 shadow-2xl shadow-gray-100 mt-3 rounded-2xl flex flex-col justify-center items-center  ">
               <div class="w-full h-[80%] rounded-2xl bg-center bg-no-repeat  flex flex-col justify-center items-center " style="background-image:url(${ele.img})">
               <div class="w-full h-full rounded-2xl   flex flex-col justify-center items-center z-40 set-bg"></div>
               </div>
                
                <button class="w-[80%] bg-orange-400 text-center text-2xl text-white py-2 px-1 rounded-full relative bottom-4">${ele.text}</button>
                <button class="ex-btn w-[60%] bg-gray-300  text-center text-2xl  text-orange-400 py-2 px-1 rounded-full " >Explore More</button>
                <div class="border-2 w-[20%] h-fit pb-3 hidden rounded-2xl   border-[#194C4D] bg-[#194C4D] absolute z-50 show-card">
                 <h1 class="text-center text-3xl font-bold text-white w-full">${ele.text}</h1>
                 <div class="h-0.5 mt-3 bg-gray-600 w-full"></div>
                 <p class="text-gray-300 mx-auto mt-3 w-[80%] text-center">${ele.cardpara}</p>
                <button class="w-[60%] bg-gray-300  text-center ml-12 text-2xl mt-3  text-orange-400 py-2 px-1 rounded-full " >Explore More</button>
                </div>

              </div>
      `;
    });

    showCardDisplay.innerHTML = showcardHtml;

    
    let showCard = document.querySelectorAll(".show-card");
    let showCardDiv = document.querySelectorAll(".show-card-div");

    showCardDiv.forEach(e=>{

    e.addEventListener("mouseenter",(e)=>{

      let setbg = e.srcElement.querySelector(".set-bg");

      setbg.classList.add("bg-gray-100/40")


      e.srcElement.childNodes[5].classList.add("hidden");

      e.srcElement.childNodes[7].classList.remove("hidden")
      
      // let card = e.relatedTarget.querySelector(".show-card");
      // card.classList.remove("hidden")
      
      
    });
e.addEventListener("mouseleave",()=>{

 
  
  let card = e.querySelector(".show-card");

  let btn = e.querySelector(".ex-btn");

  let setbg = e.querySelector(".set-bg")

  setbg.classList.remove("bg-gray-100/40")

  btn.classList.remove("hidden")

  card.classList.add("hidden")
  

      // e.srcElement.childNodes[7].classList.add("hidden")

  
    });
    })

    // why we choose us

    let ChooseDiv = document.querySelector(".choose-div");

    let choosearr = [{icon:"icon-[ant-design--dollar-circle-filled]",text:"Cost-Effective Services",para:`We provide budget-friendly services that ensure you get the best value
       for your investment in your education abroad.`},
      {icon:"icon-[brandico--visa]",text:"Expert Visa Assistance",para:`Our visa experts provide you with clear
         guidance on how to navigate the complex visa application process.`},
         {icon:"icon-[fluent--book-globe-20-filled]",text:"Streamlined Application Process",para:`We simplify the application process and ensure that all your
           documents are in order, so you don’t miss any deadlines.`},
           {icon:"icon-[mdi--account-group]",text:"Personalized Support",para:`We offer one-on-one consultations to better
             understand your goals and provide solutions tailored to your needs.`}
      ];


      let chooseHtml = ``;

      choosearr.forEach(ele=>{
        chooseHtml += `
        <div class="group flex flex-col hover:text-orange-400 hover:bg-[#F0F5FB] justify-center mt-4 items-center w-[22%] h-80 pb-16 pt-12 bg-white shadow-2xl shadow-gray-200">
              <div class="bg-[#F0F5FB] w-36 h-36 rounded-2xl text-center flex justify-center items-center">
                <span class="${ele.icon} text-9xl group-hover:animate-spin  "></span>
              </div>
              <h1 class="font-bold text-[16px] w-[90%] text-center mt-3 text-[#194C4D]">
                ${ele.text}
              </h1>
              <p class="w-[95%] text-[#194C4D] mt-3 text-center pb-4">${ele.para}</p>
            </div>
        
        `
      });

      ChooseDiv.innerHTML = chooseHtml;


      // PoPular Countries

      let popularCouDiv = document.querySelector(".popular-cou");

      let arrofpopularcou = [{bgimg:"../../images/uk-2img.webp",flag:"../../images/uk-flag.jpeg",text:"UK"},
        {bgimg:"../../images/switzerland.jpg",flag:"../../images/uk-flag.jpeg",text:"Switzerland"},
        {bgimg:"../../images/switzerland.jpg",flag:"../../images/uk-flag.jpeg",text:"England"},
        {bgimg:"../../images/switzerland.jpg",flag:"../../images/uk-flag.jpeg",text:"Pakistan"},
      ];

      let popularofHtml = ``;

      arrofpopularcou.forEach(ele=>{
        popularofHtml += `
        <div class="group bg-center mt-3 bg-no-repeat bg-cover w-[23%] rounded-2xl h-[65%]" style="background-image: url(${ele.bgimg});">
                <div class="w-full h-full rounded-2xl hover:bg-blue-400/40 flex justify-center items-center z-30">
                  <img src="${ele.flag} " class="rounded-full relative bottom-48 group-hover:animate-spin  group-hover:left-12 z-50 h-24 w-24" alt="">
                  <h1 class="text-3xl hidden group-hover:block font-bold relative right-14 text-white z-40  ">${ele.text}</h1>
                </div>
              </div>
        `;

      });

      popularCouDiv.innerHTML = popularofHtml;


      // Affliated Universites

      let UniversitesDiv = document.querySelector(".affliated-un");

      let arrofunversites = [{img:"../../images/Bppuni.jpg"},{img:"../../images/Bppuni.jpg"},
        {img:"../../images/Bppuni.jpg"},{img:"../../images/Bppuni.jpg"},{img:"../../images/Bppuni.jpg"},
        {img:"../../images/Bppuni.jpg"},{img:"../../images/Bppuni.jpg"},{img:"../../images/Bppuni.jpg"},
      ];
      let uniHtml = ``;
      arrofunversites.forEach(ele=>{

        console.log(ele);
        

        uniHtml += `
        <div class=" shadow-md shadow-gray-500 rounded-2xl flex justify-center items-center">
        <img src="${ele.img}" class="w-30 h-30"/>
        </div>
        
        `;

      });

      UniversitesDiv.innerHTML = uniHtml;

// Explore Services



    let showCardexplore = document.querySelector(".show-card-explore");

    let showcardexplore = [
      {img:"../../images/service-1.jpg",text:"Student Visa",cardpara:`Here's a shorter version of your text: **Graduate Visa Support**
         We help international master’s and PhD graduates apply for the UK
          Graduate Route visa, making your shift from study to work in the UK
           smooth and stress-free.`},
      {img:"../../images/service-1.jpg",text:"Visit Visa",cardpara:`Our visit visa services assist
         individuals in securing short-term visas for travel, tourism, or family 
        visits—making the process smooth and hassle-free.`},
      {img:"../../images/service-1.jpg",text:"Visa Immigration",cardpara:`Our skilled immigration services
         support professionals in securing long-term visas based on their 
         qualifications and work experience—simplifying
         the path to global career opportunities.`},
      {img:"../../images/service-1.jpg",text:"Judicial Review",cardpara:`Our judicial review services assist
         individuals in challenging refused visa decisions through legal channels,
         ensuring your case is reviewed fairly and professionally.`},
      

    ];

    let showcardexploreHtml =``;


    showcardexplore.forEach(ele=>{
      showcardexploreHtml += `
      <div class="show-explore group w-[20%]  h-110 shadow-2xl shadow-gray-100 mt-3 rounded-2xl flex flex-col justify-center items-center  ">
               <div class="w-full h-[80%] rounded-2xl bg-center bg-no-repeat  flex flex-col justify-center items-center " style="background-image:url(${ele.img})">
               <div class="w-full h-full rounded-2xl   flex flex-col justify-center items-center z-30 set-bg"></div>
               </div>
                
                <h1 class="  text-center text-2xl w-full text-white  px-1 rounded-full relative bottom-24 font-bold">${ele.text}</h1>
                <div class="border-2 w-[20%] h-fit pb-3 hidden group-hover:block rounded-2xl   border-[#194C4D] bg-[#194C4D] absolute z-40 show-card-explore">
                 <h1 class="text-center text-3xl font-bold text-white w-full">${ele.text}</h1>
                 <div class="h-0.5 mt-3 bg-gray-600 w-full"></div>
                 <p class="text-gray-300 mx-auto mt-3 w-[80%] text-center">${ele.cardpara}</p>
                </div>

              </div>
      `;
    });

    showCardexplore.innerHTML = showcardexploreHtml;

    
//     let showCardexplore2 = document.querySelectorAll(".show-card-explore");
//     let showCardDivexplore = document.querySelectorAll(".show-explore");

//     showCardDivexplore.forEach(e=>{

//     e.addEventListener("mouseenter",(e)=>{

//       console.log(e.srcElement.childNodes);
      
      

//       let setbg = e.srcElement.querySelector(".set-bg");

//       setbg.classList.add("bg-gray-100/40");


//       e.srcElement.childNodes[5].classList.add("hidden");

//       e.srcElement.childNodes[7].classList.remove("hidden")
      
//       // let card = e.relatedTarget.querySelector(".show-card");
//       // card.classList.remove("hidden")
      
      
//     });
// e.addEventListener("mouseleave",(e)=>{



  
//       let setbg = e.fromElement.querySelector(".set-bg");

//       setbg.classList.remove("bg-gray-100/40")


//       e.fromElement.childNodes[5].classList.remove("hidden");

//       e.fromElement.childNodes[7].classList.add("hidden")
  

 
  
 

 

//       // e.srcElement.childNodes[7].classList.add("hidden")

  
//     });
//     })
