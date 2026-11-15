
export interface CartLine {
  productId: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  quantity: number;
  stock: number;     
  minQty: number;    
}

// send to place an order 
export interface AddCartRequest {
  userId: number;
  products: { id: number; quantity: number }[];   
}


export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

// whole cart
export interface Cart {
  id: number;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}