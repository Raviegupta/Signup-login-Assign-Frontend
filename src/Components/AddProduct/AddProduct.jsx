import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    image:''
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const Add_Product = async () => {
    let responseData;
    let product = productDetails;
    console.log(product);

    let formData = new FormData();
    formData.append('product', image);

    await fetch('https://blinkit-imager.onrender.com/upload', {
        method: 'POST',
        headers:{
            Accept:'application/json',
        },
        body:formData,
    }).then(res=>res.json())
        .then(data=>{responseData=data})
    
    if(responseData.success){
        product.image = responseData.image_url;
        console.log(product);
        await fetch('https://blinkit-imager.onrender.com/addproduct', {
            method: 'POST',
            headers:{
                Accept:'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(product),            
        }).then(res=>res.json())
            .then((data)=>{
                data.success?alert('Image Uploaded & Added Successfully'): alert('failed')
            })
    }
  }



  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="addproduct-thumbnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={() => {Add_Product()}} className="addproduct-btn">POST</button>
    </div>
  );
};

export default AddProduct;
