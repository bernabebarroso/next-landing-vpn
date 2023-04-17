import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";


// Testimonios de los clientes

const Testimoni = ({
  listTestimoni = [
    {
      name: "Charles Witson",
      image: "/assets/people-1.png",
      city: "California",
      country: " E.E.U.U",
      rating: "4.2",
      testimoni:
        "Excelente servicio. Cumple con las expectativas propuestas. No he tenido problema alguno desde que comencé a usar LoremVPN. Es un placer utilizarlo. 100% recomendado.",
    },
    {
      name: "Mariah Johnson",
      image: "/assets/people-2.png",
      city: "London",
      country: "England",
      rating: "4.5",
      testimoni:
        "LoremVPN es una herramienta indispensable. Sus funcionalidades le dan la frescura que otros programas de su indole no poseen. Su tecnología de punta es increible.",
    },
    {
      name: "Drewski Jonathan",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.1",
      testimoni:
        "Después de probar miles y miles de VPN, LoremVPN fue la única alternativa convicente. Puedo usarla desde cualquier parte del mundo sin problemas. Excelente!",
    },
    {
      name: "Mark Doused",
      image: "/assets/people-4.png",
      city: "Marselle",
      country: "France",
      rating: "4.0",
      testimoni:
        "Rapido, barato, con conexión a nivel global. Un VPN con todas las letras, con una atención impecable por parte de sus empleados. Nada que reprocharle a LoremVPN",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    className="rounded-3xl"
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
