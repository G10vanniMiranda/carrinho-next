'use client'

import React, { useState } from "react";
import "./carrinho.css";
import Image from "next/image";
import Left from "../../../../public/arrowLeft.png";
import Trash from "../../../../public/trash-can.png";
import Right from "../../../../public/arrowRight.png";
import Mouse from "../../../../public/mouse.webp";
import Headset from "../../../../public/headset.png"
import Headset2 from "../../../../public/headset2.png"
import Teclado from "../../../../public/teclado.png"

export default function Carrinho() {
  const [item1, setItem1] = useState(1);
  const [item2, setItem2] = useState(1);
  const [item3, setItem3] = useState(1);
  const [item4, setItem4] = useState(1);
  const [produtoPreco1, setProdutoPreco1] = useState(199);
  const [produtoPreco2, setProdutoPreco2] = useState(277);
  const [produtoPreco3, setProdutoPreco3] = useState(169);
  const [produtoPreco4, setProdutoPreco4] = useState(349);

  function increment1(event: any) {
    event.preventDefault();

    setItem1(item1 + 1);
    setProdutoPreco1(produtoPreco1 + 199);
  }

  function increment2(event: any) {
    event.preventDefault();

    setItem2(item2 + 1);
    setProdutoPreco2(produtoPreco2 + 277);
  }

  function increment3(event: any) {
    event.preventDefault();

    setItem3(item3 + 1);
    setProdutoPreco3(produtoPreco3 + 169);
  }

  function increment4(event: any) {
    event.preventDefault();

    setItem4(item4 + 1);
    setProdutoPreco4(produtoPreco4 + 349);
  }

  function decrement1(event: any) {
    event.preventDefault();

    if (item1 > 1) {
      setItem1(item1 - 1);

      setProdutoPreco1(produtoPreco1 - 199);
    }

  }

  function decrement2(event: any) {
    event.preventDefault();

    if (item2 > 1) {
      setItem2(item2 - 1);

      setProdutoPreco2(produtoPreco2 - 277);
    }

  }

  function decrement3(event: any) {
    event.preventDefault();

    if (item3 > 1) {
      setItem3(item3 - 1);

      setProdutoPreco3(produtoPreco3 - 169);
    }

  }

  function decrement4(event: any) {
    event.preventDefault();

    if (item4 > 1) {
      setItem4(item4 - 1);

      setProdutoPreco4(produtoPreco4 - 349);
    }

  }

  function excluir() {

  }
  return (
    <div className="container-carrinho">

      <div className="main flex flex-1 w-full">
        <div className="box-left w-full">
          {/* colocar alguma coisa */}
        </div>

        {/* right box dos itens */}
        <div className="box-right pt-5 w-full md:w-[400px]">

          {/* Item 1 */}
          <div className="item">
            <div className="flex items-center gap-5">
              <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg">
                <Image src={Mouse} alt="a" className="w-20" />
              </div>

              <div className="productInfo flex flex-col">
                <h2>Logitech MX Master 3s</h2>

                <div className="flex gap-3">
                  <span className="font-semibold">R$ {produtoPreco1} </span>
                  <span className="text-zinc-500 line-through">R$ 719,90</span>
                </div>

                <div className="qtd gap-2 flex items-center mt-2.5">
                  <button onClick={decrement1} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                    <Image src={Left} alt="menos" className="w-2" />
                  </button>

                  <span> {item1} </span>

                  <button onClick={increment1} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                    <Image src={Right} alt="mais" className="w-2" />
                  </button>
                </div>
              </div>
            </div>

            <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10">
              <Image src={Trash} alt="Lixeira" className="w-4" />
            </button>
          </div>

          {/* Item 2 */}
          <div className="item">
            <div className="flex items-center gap-5">
              <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg">
                <Image src={Headset2} alt="a" className="w-20 hover:scale-125 duration-300" />
              </div>

              <div className="productInfo flex flex-col">
                <h2>Logitech Headset</h2>

                <div className="flex gap-3">
                  <span className="font-semibold">R$ {produtoPreco2} </span>
                  <span className="text-zinc-500 line-through">R$ 719,90</span>
                </div>

                <div className="qtd gap-2 flex items-center mt-2.5">
                  <button onClick={decrement2} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                    <Image src={Left} alt="menos" className="w-2 hover:scale-125" />
                  </button>

                  <span> {item2} </span>

                  <button onClick={increment2} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                    <Image src={Right} alt="mais" className="w-2" />
                  </button>
                </div>
              </div>
            </div>

            <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10">
              <Image src={Trash} alt="Lixeira" className="w-4" />
            </button>
          </div>

          {/* Item 3 */}
          <div className="item">
            <div className="flex items-center gap-5">
              <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg">
                <Image src={Headset} alt="a" className="w-20 hover:scale-125 duration-300" />
              </div>

              <div className="productInfo flex flex-col">
                <h2>Headset Gamer</h2>

                <div className="flex gap-3">
                  <span className="font-semibold">R$ {produtoPreco3} </span>
                  <span className="text-zinc-500 line-through">R$ 719,90</span>
                </div>

                <div className="qtd gap-2 flex items-center mt-2.5">
                  <button onClick={decrement3} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                    <Image src={Left} alt="menos" className="w-2 hover:scale-125" />
                  </button>

                  <span> {item3} </span>

                  <button onClick={increment3} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                    <Image src={Right} alt="mais" className="w-2" />
                  </button>
                </div>
              </div>
            </div>

            <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10">
              <Image src={Trash} alt="Lixeira" className="w-4" />
            </button>
          </div>

          {/* Item 4 */}
          <div className="item">
            <div className="flex items-center gap-5">
              <div className="imgContent bg-[#1D1D1D] h-22 flex items-center justify-center rounded-lg">
                <Image src={Teclado} alt="a" className="w-20 hover:scale-125 duration-300" />
              </div>

              <div className="productInfo flex flex-col">
                <h2>Teclado Gamer Redragon</h2>

                <div className="flex gap-3">
                  <span className="font-semibold">R$ {produtoPreco4} </span>
                  <span className="text-zinc-500 line-through">R$ 719,90</span>
                </div>

                <div className="qtd gap-2 flex items-center mt-2.5">
                  <button onClick={decrement4} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                    <Image src={Left} alt="menos" className="w-2 hover:scale-125" />
                  </button>

                  <span> {item4} </span>

                  <button onClick={increment4} className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm">
                    <Image src={Right} alt="mais" className="w-2" />
                  </button>
                </div>
              </div>
            </div>

            <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10">
              <Image src={Trash} alt="Lixeira" className="w-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Total */}
      <div className="results">
        <div className="w-screen h-[1px] bg-white"></div>
        <div className="sub w-screen px-5 flex justify-between">
          <span>Subtotal:</span>
          <span>R$ 1.601,57</span>
        </div>

        <div className="w-screen h-[1px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-screen px-5 flex justify-between">
          <span>Valor do Frete</span>
          <span>Gratuito</span>
        </div>

        <div className="w-screen h-[1px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-screen px-5 flex justify-between">
          <span>Valor Desconto:</span>
          <span>- R$ 374,64</span>
        </div>

        <div className="w-screen h-[1px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-screen px-5 flex justify-between">
          <span className="font-bold">Total:</span>
          <span className="font-bold">R$ 1.226,93</span>
        </div>
      </div>

    </div>
  );
}
