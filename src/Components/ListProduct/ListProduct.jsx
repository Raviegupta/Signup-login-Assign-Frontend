import { useEffect, useState } from 'react'
import './ListProduct.css'

const ListProduct = () => {
    const [allproducts, setAllproducts] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://blinkit-imager.onrender.com/allproducts');
        const data = await response.json();
        setAllproducts(data);
    }

    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <div className='list-product'>
       
        <div className="list-product-all">
            {
                allproducts.map((prod, index)=>{
                    return (
                        <>
                            <div key={index} className='list-product-format'>
                                <img src={prod.image} alt="" className="listproduct-product-image" />
                            </div>
                        </>
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default ListProduct
