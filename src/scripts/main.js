import "../styles/fonts.css";
import "../styles/global.css";
import "../styles/variables.css";
import "../styles/style.css";

const products = [
  {
    id: 1,
    name: "Встраиваемый светильник Markt",
    discount: true,
    newPrice: "3 490",
    oldPrice: "6 700",
    src: "/images/markt.png",
  },
  {
    id: 2,
    name: "Линейный светильник ARG",
    discount: false,
    newPrice: "6 700",
    oldPrice: "",
    src: "/images/arg.png",
  },
  {
    id: 3,
    name: "Сведодиодный светильник",
    discount: true,
    newPrice: "5 060",
    oldPrice: "6 060",
    src: "/images/light.png",
  },
  {
    id: 4,
    name: "Встраиваемый светильник Markt",
    discount: false,
    newPrice: "3 490",
    oldPrice: "",
    src: "/images/markt.png",
  },
  {
    id: 5,
    name: "Линейный светильник ARG",
    discount: true,
    newPrice: "6 700",
    oldPrice: "6 060",
    src: "/images/arg.png",
  },
  {
    id: 6,
    name: "Сведодиодный светильник",
    discount: false,
    newPrice: "5 060",
    oldPrice: "",
    src: "/images/light.png",
  },
  {
    id: 7,
    name: "Встраиваемый светильник Markt",
    discount: true,
    newPrice: "3 490",
    oldPrice: "6 060",
    src: "/images/markt.png",
  },
  {
    id: 8,
    name: "Линейный светильник ARG",
    discount: false,
    newPrice: "6 700",
    oldPrice: "",
    src: "/images/arg.png",
  },
];

function renderCatalogue() {
	const template = document.querySelector("#product-template");
	const list = document.querySelector(".products__list");

	products.forEach((product) => {
		const clone = template.content.cloneNode(true);
		const article = clone.querySelector(".product");

		article.id = `product-${product.id}`;
		if (product.discount) {
			article.classList.add("discount");
		}

		const img = clone.querySelector(".product__image");
		img.src = product.src;
		img.alt = product.name;

		const productTitle = clone.querySelector(".product__title");
    productTitle.textContent = product.name;
    productTitle.setAttribute('title', `${product.name}`)

    const newPrice = clone.querySelector(".product__price_new");
		const oldPrice = clone.querySelector(".product__price_old");

		newPrice.textContent = `${product.newPrice} ₽`;

		if (product.discount) {
			newPrice.textContent = `${product.newPrice} ₽`;
      oldPrice.textContent = `${product.oldPrice} ₽`;
		} else {
			oldPrice.remove();
		}

		list.appendChild(clone);
	});
	}

renderCatalogue();



