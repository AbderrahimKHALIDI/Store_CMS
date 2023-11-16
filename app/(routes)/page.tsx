import getBillboard from "@/actions/get-billboards";

import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Billboard from "@/components/billboard";

import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
const billboard= await getBillboard("f746ecdb-486e-4a7a-9d20-5d0dfb5a4384")
const products=await getProducts({isFeatured:true})
    return ( <Container>
      <div> <Billboard data={billboard}/>
       <div><ProductList title="Featured Products" items={products} /></div>
       </div>
    </Container> );
}
 
export default HomePage;