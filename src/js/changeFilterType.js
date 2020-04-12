const title = document.getElementById("form-title");
const description = document.getElementById("form-description");
const filter_title = document.getElementById("filter-title");
const filter_description = document.getElementById("filter-description");

// 在切换搜索方式时清空两个表格中的内容
function clearForm() {
    title.reset();
    description.reset();
}

// 显示标题搜索表格
function titleOnDisplay() {
    clearForm();
    title.className = "active";
    description.className = "";
    filter_title.className = "right selection selected";
    filter_description.className = "right selection";
}

// 显示描述搜索表格
function descriptionOnDisplay() {
    clearForm();
    title.className = "";
    description.className = "active";
    filter_title.className = "right selection";
    filter_description.className = "right selection selected";
}

