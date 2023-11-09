let men_section = document.querySelector('.men');
let women_section = document.querySelector('.women');
let kids_section = document.querySelector('.kids');
let home_section = document.querySelector('.homeliving');
let beauty_section = document.querySelector('.beauty');

let men_section_items = document.querySelector('.men-section-items');
let women_section_items = document.querySelector('.women-section-items');
let kids_section_items = document.querySelector('.kids-section-items');
let home_section_items = document.querySelector('.home-section-items');
let beauty_section_items = document.querySelector('.beauty-section-items');

const container_ele = document.querySelector('.container');
var bodyele = document.getElementsByTagName("BODY");

men_section.onmouseout = () => {
    men_section_items.classList.add('visibility');
}
men_section.onmouseover = () => {
    men_section_items.classList.remove('visibility');
}
 /* men section ends here */

women_section.onmouseout = () => {
    women_section_items.classList.add('visibility');
} 
women_section.onmouseover = () => {
    women_section_items.classList.remove('visibility');
}
/* women section ends here */

kids_section.onmouseout = () => {
    kids_section_items.classList.add('visibility');
}
kids_section.onmouseover = () => {
    kids_section_items.classList.remove('visibility');
}
 /* kids section ends here */

home_section.onmouseout = () => {
    home_section_items.classList.add('visibility');
}
home_section.onmouseover = () => {
    home_section_items.classList.remove('visibility');
}
 /* home and living ends here */

beauty_section.onmouseout = () => {
    beauty_section_items.classList.add('visibility');
}
beauty_section.onmouseover = () => {
    beauty_section_items.classList.remove('visibility');
}
/* beauty section ends here */