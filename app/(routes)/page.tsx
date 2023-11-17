import getBillboard from "@/actions/get-billboards";

import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Billboard from "@/components/billboard";

import getProducts from "@/actions/get-products";
import StaticDesign from "@/components/static-design";

export const revalidate = 0;

const HomePage = async () => {
const billboard= await getBillboard("2d769bb3-e99e-4729-b720-c98211be15af")
const products=await getProducts({isFeatured:true})
    return ( <Container>
      <div> <Billboard data={billboard}/>
       <div><ProductList title="Featured Products" items={products} /></div>
       <div > <StaticDesign/></div>
       </div>
    </Container> );
}
 
export default HomePage;