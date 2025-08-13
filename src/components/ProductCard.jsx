import "./ProductCard.css"
export default function ProductCard ({productData}){
    return (
        <>
            <div className="Productcard_Container">
                <div className="Imgcard_Container">
                    <img src={productData.imgSrc} alt={productData.name} />
                </div>

                <div className="Productdetails_container">
                    <h1>{productData.name}</h1>
                    <h1>{productData.price}</h1>
                    <p>{productData.description}</p>
                    <button onClick={() => console.log(`Ordering this food : ${productData.name}`)}>Order</button>
                </div>
            </div>
        </>
    )
}