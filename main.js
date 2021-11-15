const data = [
    {
        id: 1,
        name: '최수진',
        img: `images/최수진.png`,
        url: 'https://monari12.github.io/portfolio/',
    },
    {
        id: 2,
        name: '양상현',
        img: `images/양상현.png`,
        url: 'https://sangchu98.github.io/Portfolio/',
    },
    {
        id: 3,
        img: `https://via.placeholder.com/300/300&text=${3}`
    },
    {
        id: 4,
        img: `https://via.placeholder.com/300/300&text=${4}`
    },
    {
        id: 5,
        img: `https://via.placeholder.com/300/300&text=${5}`
    },
    {
        id: 6,
        img: `https://via.placeholder.com/300/300&text=${6}`
    },
    {
        id: 7,
        img: `https://via.placeholder.com/300/300&text=${7}`
    },
    {
        id: 8,
        img: `https://via.placeholder.com/300/300&text=${8}`
    },
    {
        id: 9,
        img: `https://via.placeholder.com/300/300&text=${9}`
    },
]

const list = document.querySelector('#works .work-list');
let html = ``;

var img_arr = 0;
for (var i = 0; i < 15; i++) {
    // console.log(data[i], i);
    if (i == 5 || i == 9 || i == 10 || i == 11 || i == 13 || i == 14) {
        html += `
            <li class="col-div-5">
                
            </li>            
        `
    } else{
        html += `
            <li class="col-div-5">
                <a href="${data[img_arr].url}">
                    <img src="${data[img_arr].img}" alt="${i}">
                </a>
            </li>
        `;
        img_arr++;
    }
}



list.innerHTML = html;
