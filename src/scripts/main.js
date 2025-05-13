import "../styles/fonts.css";
import "../styles/global.css";
import "../styles/variables.css";
import "../styles/style.css";

const products = [
  {
    id: 1,
    name: "Встраиваемый светильник Markt",
    discount: true,
    oldPrice: "3 490",
    newPrice: "6 700",
    src: "/images/markt.jpg",
  },
  {
    id: 2,
    name: "Линейный светильник ARG",
    discount: false,
    oldPrice: "6 700",
    newPrice: "",
    src: "/images/arg.jpg",
  },
  {
    id: 3,
    name: "Сведодиодный светильник",
    discount: true,
    oldPrice: "5 060",
    newPrice: "6 060",
    src: "/images/light.jpg",
  },
  {
    id: 4,
    name: "Встраиваемый светильник Markt",
    discount: false,
    oldPrice: "3 490",
    newPrice: "",
    src: "/images/markt.jpg",
  },
  {
    id: 5,
    name: "Линейный светильник ARG",
    discount: true,
    oldPrice: "6 700",
    newPrice: "6 060",
    src: "/images/arg.jpg",
  },
  {
    id: 6,
    name: "Сведодиодный светильник",
    discount: false,
    oldPrice: "5 060",
    newPrice: "",
    src: "/images/light.jpg",
  },
  {
    id: 7,
    name: "Встраиваемый светильник Markt",
    discount: true,
    oldPrice: "3 490",
    newPrice: "6 060",
    src: "/images/markt.jpg",
  },
  {
    id: 8,
    name: "Линейный светильник ARG",
    discount: false,
    oldPrice: "6 700",
    newPrice: "",
    src: "/images/arg.jpg",
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

		clone.querySelector(".product__title").textContent = product.name;

		const oldPrice = clone.querySelector(".product__price_old");
		const newPrice = clone.querySelector(".product__price_new");

		oldPrice.textContent = `${product.oldPrice} ₽`;

		if (product.discount && product.newPrice) {
			newPrice.textContent = `${product.newPrice} ₽`;
		} else {
			newPrice.remove();
		}

		list.appendChild(clone);
	});
	}

renderCatalogue();



