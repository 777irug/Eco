type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>White Summer Vibes  in the uiKit line with a colorful print. <br></br>Made of jersey cotton.  fits perfectly with jeans, pants or shorts.</p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>White Summer Vibes  in the uiKit line with a colorful print. <br></br>Made of jersey cotton.  fits perfectly with jeans, pants or shorts.</p>
      </div>
    </section>
  );
};
  
export default Description;
    