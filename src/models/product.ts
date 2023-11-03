export interface Product {
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
}

export interface CartProduct extends Product {
  qty: number;
}
