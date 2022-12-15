const companies = {
    id: "companies",
    logo: "Annual Reports",
    button: "Visit",
    cards: [
        {
            title: "Apple",
            sub: "AAPL",
            text: "$ 2.690 T"
        },
        {
            title: "Microsoft",
            sub: "MSFT",
            text: "$ 2.228 T"
        },
        {
            title: "Saudi Aramco",
            sub: "2222.SR",
            text: "$ 2.205 T"
        },
        {
            title: "Alphabet (Google)",
            sub: "GOOG",
            text: "$ 1.778 T"
        },
        {
            title: "Amazon",
            sub: "AMZN",
            text: "$ 1.565 T"
        },
        {
            title: "Tesla",
            sub: "TSLA",
            text: "$ 837.00 B"
        },
        {
            title: "Nvidia",
            sub: "NVDA",
            text: "$ 601.99 B"
        }
    ]
}

const cards = companies.cards

const main = document.querySelector("main")

for (let i = 0; i < cards.length; i++) {
    main.innerHTML +=
        `
        <section class="card">
            <div class="card__inner">
                <div class="sub">${cards[i].sub}</div>
                <h2>${cards[i].title}</h2>
                <div class="text">${cards[i].text}</div>
            </div>
            <button>
                    ${companies.button}
                    <span class="material-symbols-outlined"> arrow_forward </span>
            </button>
            
        </section>
        `
}