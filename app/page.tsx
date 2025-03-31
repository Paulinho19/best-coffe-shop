import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex min-h-[612px] flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-orange-800">
        Tia Rosa, Coffe Shop
      </h1>
      <p className="mt-4 text-2xl text-gray-700">
        Bem-vindo ao nosso café! Aqui você encontra os melhores cafés da cidade.
      </p>

      <Products />
    </main>
  );
}
