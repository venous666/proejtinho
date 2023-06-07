import { Drawer } from "expo-router/drawer";
import React from "react";

export default function AppLayout() {
  return (
    <Drawer>
    <Drawer.Screen
      name="index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Home",
        title: "Principal",
      }}
    />
    <Drawer.Screen
      name="telaB" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Pagina inicial",
        title: "Encomende e compre seus livros favoritos",
      }}
    />
    <Drawer.Screen
      name="telaC" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "carrinho",
        title: "Seu carrinho de compras",
      }}
    />
     <Drawer.Screen
      name="telaA" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Login",
        title: "acesse sua conta",
      }}
    />
  </Drawer>
  );
}