const toggleBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-theme");
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark");
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    else{
        localStorage.setItem("theme","light");
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});