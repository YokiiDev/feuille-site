import { useQuery } from "@tanstack/react-query";

import { api } from "./lib/api";

export default function App() {
  const { data, refetch } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const { data } = await api.hello.get();

      if (data) {
        return data.message;
      }
    },
    enabled: false,
  });

  return (
    <>
    <header className="flex mt-15 items-center ">
      <h1 className="ml-25 font-serif font-bold tracking-[-0.06em] text-3xl">feuille<span className="text-[#355842]">.</span></h1>
      <div className="ml-auto mr-25 flex gap-10 text-2xl">
        <a href="#plants">Plantes</a>
        <a href="#advices">Conseils</a>
        <a href="#about">Notre histoire</a>
        <a id="cart">Panier</a>
      </div>
    </header>
    <section className="mt-40 ml-30 leading-[2.95]">
      <img src="/assets/images/bg.jpg" className="h-95 absolute right-0 mr-30 rounded-[50px]" alt="bg" />
      <b className=" text-[#355842] text-[18px] font-sans text-xs font-extrabold uppercase tracking-[0.16em]">Un peu de vert, beaucoup de vie</b>
      <h1 className="text-[50px] leading-[0.95] font-serif font-normal tracking-[-0.045em]">La nature prend <br />sa place.</h1>
      <h3 className="text-[#697263] text-[18px]">Des plantes choisies avec soin, livrées chez vous et prêtes à grandir.</h3>
      <button className=" bg-[#355842] text-white width-50 w-50 h-10 text-[15px] rounded-[5px] cursor-pointer">Explorer la collection  ↗</button>
    </section>
    </>
  );
}
