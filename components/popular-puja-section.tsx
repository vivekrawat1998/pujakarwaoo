"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import tabsData from "@/lib/tabsData.json";

interface PujaCard {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  benefits: string[];
  duration: string;
  discountPercent?: number;
}

export function PopularPujaSection() {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("all-puja");
  const [visibleCards, setVisibleCards] = useState(6);
  const cardsPerPage = 6;

  useEffect(() => {
    setVisibleCards(cardsPerPage);
  }, [activeTab]);

  const getStableDiscount = (price: number, id: string) => {
    const seed = price + id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return ((seed % 26) + 5);
  };

  const calculateDiscountedPrice = (originalPrice: number, discountPercent: number) => {
    return Math.floor(originalPrice * (1 - discountPercent / 100));
  };

  const getCurrentTabCards = () => {
    const currentTab = tabsData.tabs.find(tab => tab.id === activeTab);
    const cards = currentTab ? currentTab.cards.slice(0, visibleCards) : [];
    return cards.map(card => ({
      ...card,
      discountPercent: getStableDiscount(card.price, card.id)
    }));
  };

  const handleViewMore = () => {
    const currentTab = tabsData.tabs.find(tab => tab.id === activeTab);
    const totalCards = currentTab ? currentTab.cards.length : 0;
    setVisibleCards(prev => Math.min(prev + cardsPerPage, totalCards));
  };

  const hasMoreCards = () => {
    const currentTab = tabsData.tabs.find(tab => tab.id === activeTab);
    return currentTab ? visibleCards < currentTab.cards.length : false;
  };

  const handleClick = () => {
    if (tabsRef.current) {
      const firstChild = tabsRef.current.children[0] as HTMLElement;
      if (firstChild) {
        const scrollAmount = firstChild.offsetWidth * 2;
        tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            All Types of Pooja At Your Home
          </h2>
          <Image
            src="/bordere.png"
            alt="Diyabati"
            width={0}
            height={0}
            className="mx-auto mt-5 w-[124px] h-[10px]"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full relative h-20 overflow-x-auto flex items-center mb-8">
            <div
              ref={tabsRef}
              className="flex items-center overflow-x-auto whitespace-nowrap"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {tabsData.tabs.map((tab) => (
                <Button
                  key={tab.id}
                  className={`mr-4 mb-4 ${activeTab === tab.id
                    ? "bg-[#a3431f] text-white"
                    : "bg-white text-black"
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </Button>
              ))}
            </div>
          </div>
          <button
            onClick={handleClick}
            className="w-8 h-8 rounded-full -mt-12 ml-3 bg-[#a3431f] text-white"
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentTabCards().map((card) => (
            <Card key={card.id} className="overflow-hidden ">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={0}
                    height={0}
                    className="w-full rounded-xl  h-[33vh]"
                  />
                </div>
                <div className="mt-5 text-start">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <div className="flex justify-start  items-center gap-5">
                    <span className="text-[#BD3A19] font-bold">
                      ₹{calculateDiscountedPrice(card.price, card.discountPercent!).toLocaleString()}
                    </span>
                    <span className="text-gray-500 line-through">
                      ₹{card.price.toLocaleString()}
                    </span>
                    <span className="bg-[#00BD68] px-3 py-2  rounded-md text-white uppercase font-semibold">
                      {card.discountPercent}% off
                    </span>
                  </div>
                  <Button className="mt-4 px-5 py-3 rounded-full text-md bg-[#FEBD02] text-[#BD3A19] font-bold text-start hover:bg-[#BD3A19] hover:text-white ">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {hasMoreCards() && (
          <div className="w-full text-center mt-8">
            <button
              onClick={handleViewMore}
              className="px-10 py-3 bg-[#B84C25] hover:bg-[#a3431f] rounded-md text-center text-white"
            >
              View more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

