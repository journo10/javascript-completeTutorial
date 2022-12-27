let models = [
    {
        name: "Flowers 1",
        image: "./img/img-1.jpg",
        link: "https://www.pexels.com/tr-tr/fotograf/kirmizi-ve-pembe-gul-yakin-cekim-56866",
    },
    {
        name: "Flowers 2",
        image: "./img/img-2.jpg",
        link: "https://www.pexels.com/tr-tr/fotograf/kirmizi-gulun-secici-odak-fotografi-1212823",
    },
    {
        name: "Flowers 3",
        image: "./img/img-3.jpg",
        link: "https://www.pexels.com/tr-tr/fotograf/beyaz-gul-1713951",
    },
    {
        name: "Flowers 4",
        image: "./img/img-4.jpg",
        link: "https://www.pexels.com/tr-tr/fotograf/sari-hibrit-cay-cicek-acan-gul-cicegi-1590898",
    },
    {
        name: "Flowers 5",
        image: "./img/img-5.jpg",
        link: "https://www.pexels.com/tr-tr/fotograf/sari-cicek-209004",
    },
];

let index_model = 0;
let slayt_count = models.length; // slayt sayısı
let nextSlide = document.querySelector(".fa-arrow-circle-right"); //sonraki
let prevSlide = document.querySelector(".fa-arrow-circle-left"); //önceki

const showSlide = (slide) => {
    index_model = slide;
    if (slide < 0) {
        index_model = slayt_count - 1;
    }

    if (slide >= slayt_count) {
        index_model = 0;
    }

    document.querySelector(".card-title").textContent = models[index_model].name; // nameleri aldım.
    document.querySelector(".card-link").setAttribute("href", models[index_model].link); // linkleri aldım
    document.querySelector(".card-img-top").setAttribute("src", models[index_model].image); // resimleri aldım.
};

//sonraki
nextSlide.addEventListener("click", () => {
    index_model++;
    showSlide(index_model);
    //   console.log(index_model);
});

//önceki
prevSlide.addEventListener("click", () => {
    index_model--;
    showSlide(index_model);
    //   console.log(index_model);
});

