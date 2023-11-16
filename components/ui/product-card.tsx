"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency"
import { useRouter } from "next/navigation";
import IconButton from "./iconbutton";
import { Expand, ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import Image from "next/image";
import { useState } from "react";
import PreviewModal from "../preview-modal";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ 
  data
 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cart = useCart();
  const previewModal=usePreviewModal();
const router =useRouter();
const handleHover = (hoverState: boolean) => {
  setIsHovered(hoverState);
};
const handleClick= ()=>{
  router.push(`/product/${data?.id}`);
}
const onPreview:MouseEventHandler<HTMLButtonElement>=(event)=>{
  event.stopPropagation();

  previewModal.onOpen(data)
}
const onAddToCart:MouseEventHandler<HTMLButtonElement>=(event)=>{
  event.stopPropagation();

  cart.addItem(data)
}


  return (
    <div className="col-lg-3 mb-lg-0 mb-4"
     onMouseEnter={() => handleHover(true)}
    onMouseLeave={() => handleHover(false)}
    >
      <div className="card"  onClick={handleClick}>
        <div className="card-header   aspect-square p-0 mx-3 mt-3 position-relative  ">
        
            <Image
              src={data?.images?.[0]?.url}
              fill
              className="img-fluid border-radius-lg shadow"
              alt="Image"
            />
       
        
       <div
            className={`transition absolute w-full px-6 bottom-5 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="  flex gap-x-6 justify-center">
              <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600"/>}/>
              <IconButton onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-gray-600"/>}/>

            </div>
     
          </div>
        </div>

        <div className="card-body pt-3">
          <div className="d-flex align-items-center">
            <div>
              <span className="text-sm">{data.category?.name}</span>
              <h4 className="card-description font-weight-bolder text-dark mb-4">
               {data.name}
              </h4>
            </div>
            <div className="ms-auto">
              <a href="javascript:;" className="btn btn-link text-dark p-0">
                <i className="fa fa-star text-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="mb-0 font-weight-bolder">
              <Currency value={data?.price}/>
            </h5>
            <h5 className="mb-0 opacity-4 text-sm ms-2">
              <s>$100.00</s>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
