import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"

    }
    return (
        <div style={styles}>
            <Product title="Keychorn K8 Keyboard" idx={0} />
            <Product title="Apple Pencil (3rd Gen)" idx={1} />
            <Product title="Blaukpaunt speaker 30W" idx={2} />
            <Product title="Nothing Ear(1)" idx={3} />
        </div>
    );
}

export default ProductTab;