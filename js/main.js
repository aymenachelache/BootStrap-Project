let button = document.querySelector(".show");
button.addEventListener("click", sidebarFunction);


let sidebar = document.querySelector(".sidebar");

if (localStorage.getItem("isTall") === "yes") {
    sidebar.classList.remove("small-sidebar");
    console.log('red');

} else {
    sidebar.classList.add("small-sidebar");

}

function sidebarFunction() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("small-sidebar");

    if (sidebar.classList.contains("small-sidebar")) {
        localStorage.setItem("isTall", "no");
    } else {
        localStorage.setItem("isTall", "yes");
    }
}