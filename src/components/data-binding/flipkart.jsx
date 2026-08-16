import { useEffect, useState } from "react";


export function Flipkart(){


    const [product, setProduct] = useState({title:null, price:0, image:null, rating:{rate: 0,ratings:0, reviews:0},offers:[]})

    function LoadData(){
        var http = new XMLHttpRequest();
        http.open('get','product.json',true);
        http.send();
        http.onreadystatechange = function(){
            if(http.readyState === 4){
                setProduct(JSON.parse(http.responseText));
            }
        }
    }

    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <div className="mt-4">
                <div className="row">
                    <div className="col-3">
                        <img src={product.image} width="100%" />
                    </div>
                    <div className="col-9 mt-3">
                        <div className="fs-5 fw-bold">{product.title}</div>
                        <div className="mt-2">
                            <span className="badge bg-success text-white rounded">{product.rating.rate} <span className="bi bi-star-fill"></span></span><span className="mx-2 text-secondary fw-bold">
                                {product.rating.ratings.toLocaleString('en-in')} ratings &
                                {product.rating.reviews.toLocaleString('en-in')} reviews
                            </span>
                        </div>
                        <div className="mt-3 fs-2 fw-bold">
                            {product.price.toLocaleString('en-in',{style:'currency',currency:'INR', minimumFractionDigits:0,})}
                        </div>
                        <div className="mt-3">
                            <h5>Available Offers</h5>
                            <ul className="list-unstyled mt-3">
                                {
                                    product.offers.map(offer=> 
                                        <li className="bi bi-tag-fill text-success my-2">{offer}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}