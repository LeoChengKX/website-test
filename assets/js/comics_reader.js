document.addEventListener("DOMContentLoaded", async() => {
    const params = new URLSearchParams(window.location.search);
    const comicId = params.get("id");

    // If the id does not match
    if (!comicId) {
        document.getElementById("comic-container").innerHTML = "Comic not found!";
        return;
    }

    const response = await fetch("../data/comics.json");
    const data = await response.json();
    const comic = data.comics.find(c => c.id === comicId);

    if (!comic) {
        document.getElementById("comic-container").innerHTML = "Comic not found!";
        return;
    }

    const container = document.getElementById("comic-container");
    comics.pages.forEach(page => {
        console.log(page);
        const img = document.createElement("img");
        img.src = page;
        img.alt = "ABCD";
        img.classList.add("comic-page");
        container.appendChild(img);
    });
})