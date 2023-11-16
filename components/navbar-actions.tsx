"use client";
import {ShoppingBag} from "lucide-react"
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";



const NavbarActions = () => {
  const  [isMounted,setIsMounted]=useState(false);

  useEffect(()=>{
    setIsMounted(true)
  },[]);
  
  const router=useRouter();
  const cart=useCart();

  if(!isMounted){
    return null;
  }

  return <Button onClick={()=>router.push("/cart")} className="flex items-center  " >
<ShoppingBag
size={20}
color="white"

/>
<span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
  </Button>;
};

export default NavbarActions;
