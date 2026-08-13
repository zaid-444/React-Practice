import { useEffect, useState } from "react";


export function DataBinding3(){

    const [product,setProduct] = useState({id:1,name:'TV',price:45000,cities:['Delhi','Pune'],rating:{rate:4.3,count:6000}});

    useEffect(()=>{

    },[])


    return(
        <div className="container-fluid">
            <h4>Product Details</h4>
            <dl className="ms-4">
                <dt>Product Id</dt>
                <dd>{product.id}</dd>
                <dt>Name</dt>
                <dd>{product.name}</dd>
                <dt>Price</dt>
                <dd>{product.price.toLocaleString('en-in',{style:'currency',currency:'INR'})}</dd>
                <dt>Shipped To</dt>
                <dd>
                    <ol>
                        {
                            product.cities.map(city=> <li key={city}>{city}</li>)
                        }
                    </ol>
                    <dt>Ratings</dt>
                    <dd>
                        {product.rating.rate} <span className="bi bi-star-fill text-success"></span>
                        [{product.rating.count}]
                    </dd>
                </dd>
            </dl>
        </div>
    )
}