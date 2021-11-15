const data = [
  {
    id: 1,
    name: "권영우",
    img: `https://via.placeholder.com/300?text=kwon-yeong-woo`,
    url: "https://via.placeholder.com/300?text=1",
  },
  {
    id: 2,
    name: "김성헌",
    img: "images/김성헌.png",
    url: "https://trainingezen.github.io/Pv002/",
  },
  {
    id: 3,
    name: "김채은",
    img: "images/김채은.png",
    url: "https://chaeeun7131.github.io/portfolio/",
  },
  {
    id: 4,
    name: "박철현",
    img: "images/박철현.png",
    url: "https://ironpark1105.github.io/wepPortfolio/",
  },
  {
    id: 5,
    name: "양상현",
    img: "images/양상현.png",
    url: "https://sangchu98.github.io/Portfolio/",
  },
  {
    id: 6,
    name: "이지은",
    img: "images/이지은.png",
    url: "https://zinio3o.github.io/portfolio/",
  },
  {
    id: 7,
    name: "최수미",
    img: `https://via.placeholder.com/300/eee?text=choi-su-mi`,
    url: "https://via.placeholder.com/300/300&text=4",
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