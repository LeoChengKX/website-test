document.addEventListener("DOMContentLoaded", async () => {
    const comicsContainer = document.getElementById("comics-list");

    const response = await fetch("./data/comics.json");
    const data = await response.json()

    data.comics.forEach(comic => {
        const comicElement = document.createElement("div");
        comicElement.classList.add("img__wrap");
        comicElement.innerHTML = `
            <a href="reader.html?id=${comic.id}">
                <img class="img__img" src="${comic.cover}" alt="${comic.title}">
                <p class="img__description">${comic.description}</p>
            </a>
        `;
        comicsContainer.appendChild(comicElement);
    });
});