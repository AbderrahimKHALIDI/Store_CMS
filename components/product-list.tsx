import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps{
    title:string;
    items:Product[];
};

const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {

  
    return ( 

        <div>
            
           
            <section className="pt-6 pb-4">
        <div className="container">
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <h3 className="mb-5" >{title}</h3>
                </div>
                
                {items.length===0 && <NoResults/>}  
                {items.map((item)=>(
 <ProductCard key={item.id} data={item} />
                ))}
              
               
            </div>
        </div>
    </section>
        </div>
     );
}
 
export default ProductList;