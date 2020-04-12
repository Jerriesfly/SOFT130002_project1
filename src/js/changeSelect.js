const arr_content = ["Filter by content", "Scenery", "City", "People", "Animal", "Building", "Wonder"];
const arr_country = ["Filter by country", "China", "Italy", "Japan", "America"];
const arr_city = [
    ["Filter by city"],
    ["Shanghai", "Kun Ming", "Beijing", "Yan Tai"],
    ["Rome", "Milan", "Venice", "Florence"],
    ["Tokyo", "Osaka", "Chiba", "Akihabara"],
    ["New York", "San Francisco", "Washington DC"]
];

const content = document.getElementById("select1");
const country = document.getElementById("select2");
const city = document.getElementById("select3");

const hotCities = document.getElementById("hotCities");

// 界面加载时设置内容筛选和国家筛选框中的内容
window.onload = function () {
    content.length = arr_content.length;
    country.length = arr_country.length;

    for (let j = 0; j < arr_content.length; j++) {
        content.options[j].text = arr_content[j];
        content.options[j].value = arr_content[j];
    }

    for (let i = 0; i < arr_country.length; i++) {
        country.options[i].text = arr_country[i];
        country.options[i].value = arr_country[i];
    }
    // 显示国家筛选为Filter by country，同时城市筛选为Filter by city
    changeSelection(0);
};

// 根据国家筛选框中选中的选项设置城市筛选框中的选项
function changeSelection(index) {
    country.selectedIndex = index;
    city.length = arr_city[index].length;

    for (let i = 0; i < arr_city[index].length; i++) {
        city.options[i].text = arr_city[index][i];
        city.options[i].value = arr_city[index][i];
    }
}

// 点击侧边栏中"热门国家"，通过innerHTML设置"热门城市"下的内容
function changeHotCity(index) {
    changeSelection(index);
    let string = "";
    for (let i = 0; i < arr_city[index].length; i++) {
        string = string + "<p/><a onclick=refreshCity(" + i + ")>" + arr_city[index][i] + "</a></p>\n";
    }
    hotCities.innerHTML = string;
}

// 点击侧边栏中"热门内容"，设置内容筛选框选中的选项
function refreshContent(index) {
    content.selectedIndex = index;
    alert("Page already refreshed!");
}

// 点击侧边栏中"热门城市"，设置城市筛选框选中的选项，如果此时为Filter by city则设置国家为第二个（中国）并选中对应城市
function refreshCity(index) {
    if (city.length === 1) {
        changeSelection(1);
    }
    city.selectedIndex = index;
    alert("Page already refreshed!");
}