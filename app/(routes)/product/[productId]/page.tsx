import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";


import Gallery from "@/components/gallery";
import ProductList from "@/components/product-list";
import Info from "@/components/info";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
    try {
      const product = await getProduct(params.productId);
      const categoryId = product?.category?.id;
  
      const suggestProducts = await getProducts({
        categoryId: categoryId,
      });
  
  
      return (
        <div className="bg-white">
        <Container>
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              {/**Gallery */}
              <Gallery images={product.images}/>
              <div className=" px-4 sm:mt-16 sm:px-0 lg:mt-0">
                {/**Info */}
              <Info data={product} />
              </div>
            </div>
            <hr className="my-5" />
            <ProductList title="Related Items" items={suggestProducts} />
          </div>
        </Container>
        
        </div>
      );
    } catch (error) {
      console.error('Error:', error);
      // Handle the error appropriately
    }
  };

export default ProductPage;



