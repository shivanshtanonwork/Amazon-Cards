import "./Product.css"
import Price from "./Price"

function Product({ title, idx }) {
    let oldPrices = ["10,800", "9,900", "5,999", "12,299"];
    let newPrices = ["9,999", "7,999", "3,499", "8,499"];
    let description = [
        ["RGB Colors", "Brown keys"],
        ["intuitive surafe", "Designed for Ipad"],
        ["Dolby Surround Sound 5.1", "Home Theatre"],
        ["bluetooth", "Best Earphones 2025"]
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;