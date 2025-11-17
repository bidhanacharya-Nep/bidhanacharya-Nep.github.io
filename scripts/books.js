const bookJSON = `
[
    {
        "title": "Karnali Blues",
        "author": "Buddhisagar",
        "price": 15,
        "image": "../pics/Karnali Blues.jfif"
    },
    {
        "title": "The Barefoot Surgeon",
        "author": "Ali Gripper",
        "price": 18,
        "image": "../pics/The Barefoot Surgeon.webp"
    },
    {
        "title": "A Ray Of Light In The Himalayas",
        "author": "Takashi Miyahara",
        "price": 25,
        "image": "../pics/A Ray Of Light In The Himalayas.jpg"
    }
]
`;

class Book {
    #price;

    constructor(title, author, price, image) {
        this.title = title;
        this.author = author;
        this.#price = price;
        this.image = image;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value < 0 ? 0 : value;
    }

    createHTMLElement() {
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";
        wrapper.style.background = "white";
        wrapper.style.padding = "15px";
        wrapper.style.marginBottom = "20px";
        wrapper.style.borderRadius = "6px";
        wrapper.style.boxShadow = "0 0 4px rgba(0,0,0,0.2)";
        wrapper.style.gap = "20px";

        const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.title;
        img.style.width = "110px";
        img.style.height = "150px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "4px";

        const infoBox = document.createElement("div");

        const titleEl = document.createElement("h3");
        titleEl.textContent = this.title;
        titleEl.style.margin = "0 0 8px 0";

        const authorEl = document.createElement("p");
        authorEl.textContent = `by ${this.author}`;
        authorEl.style.margin = "0 0 6px 0";

        const priceEl = document.createElement("p");
        priceEl.textContent = `Price: $${this.price}`;
        priceEl.style.margin = "0";

        infoBox.appendChild(titleEl);
        infoBox.appendChild(authorEl);
        infoBox.appendChild(priceEl);

        wrapper.appendChild(img);
        wrapper.appendChild(infoBox);

        return wrapper;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const bookArray = JSON.parse(bookJSON);

    const books = bookArray.map(b => new Book(b.title, b.author, b.price, b.image));

    const container = document.getElementById("media-container");

    books.forEach(book => {
        container.appendChild(book.createHTMLElement());
    });

});
