let movie = [
    {
        name: "About Time",
        date: 2013,
        quote: "We're all travelling through time together, every day of our lives. All we can do is do our best to relish this remarkable ride.",
        src: "https://t1.daumcdn.net/cfile/tistory/236A5E4D52D6B15B03"
    },
    {
        name: "Kingsman",
        date: 2015,
        quote: "Manners. Maketh. Man.",
        src: "https://cdn.gamemeca.com/data_center/629/32/20170829150816.jpg"
    },
    {
        name: "Eternal Sunshine",
        date: 2005,
        quote: "You can erase someone from your mind. Getting them out of your heart is another story.",
        src: "https://lh3.googleusercontent.com/proxy/J2nZVxKfWmO2iD9ZJdN9nzJIr1vZuW11GYLRzmud0gdUYpYkn2HkjEULTpwTSNBdwYJtkzV6b5OOcismk9j9ZNJ4n6DKRbIqAJpTKDysqfghCzLn18M"
    }
    
];

let btn = document.querySelectorAll(".nav-item");
let currentMovie = 1;

function showMovie(id){
    document.querySelector('.card-img-top').setAttribute("src", movie[id-1].src); //img
    document.querySelector('.card-title').textContent = movie[id-1].name; //title
    document.querySelector('.date').textContent = movie[id-1].date; //date
    document.querySelector('.quotes').textContent = movie[id-1].quote; //quote
}

showMovie(1); //default value

btn.forEach((b)=>{
    b.addEventListener('click', ()=>{
        showMovie(b.id*1);
    });
});