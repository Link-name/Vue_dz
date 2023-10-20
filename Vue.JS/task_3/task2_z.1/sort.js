const sort = {
    data() {
        return {
            products: [
                {
                    id: 1,
                    imgSrc: 'img_product/product_1.svg',
                    category: 'Kitchen Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December, 2022',
                    price: 2000
                },
                {
                    id: 2,
                    imgSrc: 'img_product/product_2.svg',
                    category: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December, 2022',
                    price: 4000
                },
                {
                    id: 3,
                    imgSrc: 'img_product/product_3.svg',
                    category: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December, 2022',
                    price: 56000
                },
                {
                    id: 4,
                    imgSrc: 'img_product/product_4.svg',
                    category: 'Kitchan Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December, 2022',
                    price: 8000
                },
                {
                    id: 5,
                    imgSrc: 'img_product/product_5.svg',
                    category: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December, 2022',
                    price: 24000
                },
                {
                    id: 6,
                    imgSrc: 'img_product/product_6.svg',
                    category: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December, 2022',
                    price: 2000
                },
                // Добавьте другие статьи, при необходимости
            ]
        };
    },
    methods: {
        sortToUp() {
            this.products.sort((a, b) => a.price - b.price);
        },
        sortToDown() {
            this.products.sort((a, b) => b.price - a.price);
        },

    },
    template:
        `<h1 class="section__product__head">Articles & News</h1>
        <button @click="sortToUp">sortToUp2</button>
        <button @click="sortToDown">sortToDown2</button>
        <div class="section__product__wrapper center">
            <div class="section__product__cart" v-for="product in products" :key="product.id">
                <div class="section__product__cart__img">
                    <img class="section__product__cart__img__radiuse" :src="product.imgSrc" alt="foto">
                    <div class="section__product__cart__nameImg">
                        <p class="section__product__cart__nameImg__text">{{ product.category }}</p>
                    </div>
                </div>
                <h3 class="section__product__cart__header">{{ product.title }}</h3>
                <p class="section__product__cart__prise">{{product.price}}</p>
                <div class="section__product__cart__dataInButton">
                    <time class="section__product__cart__data">{{ product.date }}</time>
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                        <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>`


}


