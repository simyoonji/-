const lang = document.querySelector(".lang__area");
const navMenu = document.querySelector(".nav__menu");
const navSearch = document.querySelector(".nav__search");
const search = document.getElementById("search"); //search modal창

const searchBox = document.querySelector(".search__box");
const searchInput = searchBox.querySelector("input");

const searchBtn = document.querySelector(".search_btn");
const searchClearBtn = searchBox.querySelector(".search_clear");
const searchClearBtnTop = searchBox.querySelector(".search__box_close > button");
const searchBoxBtn = searchBox.querySelector(".search__box_btn > button");

const logList = document.querySelector(".search__log_list");
const localLog = [];

const USER_KEY = "userkey"
const SHOW = "show";
const HIDE = "hide";
const ON = "on";

// search 보이기,숨기기
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    lang.classList.add(HIDE);
    navMenu.classList.add(HIDE);
    navSearch.classList.add(HIDE);

    search.classList.add(SHOW)
    searchBox.classList.add(SHOW);

    document.body.style.overflowY = "hidden";
});

//search box 닫기 버튼 Top - 1
searchClearBtnTop.addEventListener("click", (e) => { 
    e.preventDefault();

    lang.classList.remove(HIDE);
    navMenu.classList.remove(HIDE);
    navSearch.classList.remove(HIDE);
    search.classList.remove(SHOW)
    searchBox.classList.remove(SHOW);

    clearBtnHide();
    empty();
    searchInput.value = "";

    document.body.style.overflowY = "auto";
});

//search box 닫기 버튼 - 1
searchBoxBtn.addEventListener("click", (e) => { 
    e.preventDefault();

    lang.classList.remove(HIDE);
    navMenu.classList.remove(HIDE);
    navSearch.classList.remove(HIDE);
    search.classList.remove(SHOW)
    searchBox.classList.remove(SHOW);

    clearBtnHide();
    empty();
    searchInput.value = "";

    document.body.style.overflowY = "auto";
});

//search box 닫기 - 2
window.addEventListener('click', (e) => { 
    e.target === search ? search.classList.remove(SHOW) : false;
    e.target === search ? lang.classList.remove(HIDE) : false;
    e.target === search ? navMenu.classList.remove(HIDE) : false;
    e.target === search ? navSearch.classList.remove(HIDE) : false;
    e.target === search ? document.body.style.overflowY = "auto" : false;

    clearBtnHide();
    empty();
    searchInput.value = "";
});
// input clear하기
searchClearBtn.addEventListener("click",(e) => {
    searchInput.value = "";
});



function clearBtnShow(){
    searchClearBtn.classList.add(ON);
};
function clearBtnHide(){
    searchClearBtn.classList.remove(ON);
};
searchInput.addEventListener("keydown", clearBtnShow);

// input clear 버튼 숨기기
function empty(e){
    if(searchInput.value == null){
        clearBtnHide();
    };
};
empty();

// search-box에 검색기록 추가하고, 지우기

// localStorage에 저장한 string을 배열화
function localArray(){
    localStorage.setItem(USER_KEY, JSON.stringify(localLog));
};

// btn의 부모요소에 위치한 태그를 지우겠다.
function listDelet(e){
    const removeLi = e.target.parentElement; 
    removeLi.remove();
    
};

// submit을 하면 해당 내용으로 리스트를 추가한다.
function makeSearchLog(e){
    const li = document.createElement("li");
    let span = document.createElement("span");
    const btn = document.createElement("button");
    
    btn.addEventListener("click", listDelet);
    btn.innerText = "";

    span.innerText = e;
    li.appendChild(span);
    li.appendChild(btn);
    logList.appendChild(li);
};

// input submit 이벤트 제거
function inputSubmit(e){
    e.preventDefault();
    clearBtnHide()

    const userValue = searchInput.value;

    localStorage.setItem(USER_KEY, userValue);
    searchInput.value = "";
    localLog.push(userValue)

    makeSearchLog(userValue);
    localArray();
};
document.addEventListener("submit", inputSubmit);

const localStorageKey = localStorage.getItem(USER_KEY);

if(localStorageKey !== null){
    const parse = JSON.parse(localStorageKey);
    parse.forEach(makeSearchLog);
};

// mobile menu open

const mobileMenuOpen = document.querySelector("#m__trigger");
const mobileMenu = document.querySelector("#nav__menu-m");

mobileMenuOpen.addEventListener("click",(e) => {
    e.preventDefault();
    mobileMenu.classList.add(ON);
    console.log("버튼누름");
});