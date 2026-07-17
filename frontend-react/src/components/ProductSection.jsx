import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";
import ProductCard from "./ProductCard";

export default function ProductSection() {

    const [products, setProducts] = useState([]);

    async function fetchProducts(){

        try {
            const response = await apiRequest({
                endpoint: "/products",
                method: "GET",
            });

            console.log(response);

            setProducts(response.data.data);

        } catch (error) {
            console.error(error);
        }

    }

     useEffect(() => {
        fetchProducts();
    }, []);

    return(

        <section className="py-20 bg-gray-100">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-3">
                    Featured Courses
                </h2>

                <p className="text-gray-500 mb-10">
                    Pilihan course terbaik untuk meningkatkan skillmu.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {products.map((product)=>(
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </div>

        </section>

    )

}