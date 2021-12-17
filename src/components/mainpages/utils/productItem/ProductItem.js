import BtnRender from "./BtnRender";

function ProductItem({ product,isAdmin, deleteProduct, handleCheck}) {


  return (
    <div className="product_card">
    {
      isAdmin && <input type="checkbox" checked={product.checked} onChange={() => handleCheck(product._id)}/>
    }
      <img src={product.images.url} alt="" />

      <div className="product-box">
        <h2 className="h2title" title={product.title}>{product.title}</h2> <br />
        <span>{product.price}€/Unidade</span>
      </div>


      <BtnRender product={product} deleteProduct={deleteProduct}/>

    </div>
  );
}

export default ProductItem;
