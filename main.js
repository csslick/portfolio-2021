const data = [
  {
    id: 1,
    name: "송유진",
    img: "images/송유진.png",
    url: "https://eugeneeeeee.github.io/portfolio/index.html",
  },
  {
    id: 2,
    name: "김성헌",
    img: "images/김성헌.png",
    url: "https://trainingezen.github.io/Pv002/",
  },
  {
    id: 3,
    name: "신은영",
    img: "images/신은영.png",
    url: "https://eunyoungdana.github.io/portfolio/",
  },
  {
    id: 4,
    name: "박철현",
    img: "images/박철현.png",
    url: "https://ironpark1105.github.io/wepPortfolio/",
  },
  {
    id: 5,
    name: "권순민",
    img: "images/권순민.png",
    url: "https://ks830111.github.io/pptHome/",
  },
  {
    id: 6,
    name: "양상현",
    img: "images/양상현.png",
    url: "https://sangchu98.github.io/Portfolio/",
  },

  {
    id: 7,
    name: "문성훈",
    img: "images/문성훈.png",
    url: "https://sunghoon-moon-portfolio.netlify.app/",
  },
  {
    id: 8,
    name: "최수진",
    img: `images/최수진.png`,
    url: "https://monari12.github.io/portfolio/",
  },
  {
    id: 9,
    name: "황은빈",
    img: "images/황은빈.png",
    url: "https://vol2028.github.io/HEB-portpoilo/",
  },

];

const list = document.querySelector("#works .work-list");
let html = ``;

for (var i = 0; i < data.length; i++) {
  // console.log(data[i], i);
  html += `
            <li class="col-div-5 item">
                <a href="#">
                    <img src="${data[i].img}" alt="${i}">
                </a>
            </li>
        `;
}

list.innerHTML = html;


$(function(){
    $('.work-list > li').on('click', function(){
        console.log($(this).index())
        const idx = $(this).index();
        const work_info = `
            <div class="work-info">
                <figure>
                    <a href="${data[idx].url}" target="_blank">
                        <img src="${data[idx].img}" alt="${idx}">
                    </a>
                    <figcaption>${data[idx].name}</figcaption>
                </figure>          
                <a class="btn btn-outline-primary" href="${data[idx].url}" target="_blank">작품보러가기</a>
            </div>
        `
        $('#works .figure').html(work_info);
    })

    $('.work-list > li').eq(0).trigger('click');
})


// selector string
imagesLoaded( '.page', function() {
    console.log('loaded')
    $('.page').removeClass('loading');
    $('progress').hide();
});