import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  const products = [
    "/coffe-1.png",
    "/coffe-2.png",
    "/coffe-3.png",
    "/coffe-4.png",
    "/coffe-5.png",
  ];
  return (
    <Carousel className="mt-[60px] w-full max-w-xs">
      <Link href="/">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={products[index]}
                      alt="Product"
                      height={440}
                      width={400}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Link>
    </Carousel>
  );
};

export default Products;
