/*
  Warnings:

  - A unique constraint covering the columns `[product]` on the table `cart` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `cart_product_key` ON `cart`(`product`);
