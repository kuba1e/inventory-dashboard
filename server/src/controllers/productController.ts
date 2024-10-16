import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProducts(req: Request, res: Response): Promise<void> {
  try {
    const search = req.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products" });
  }
}

export async function createProduct(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const product = await prisma.products.create({
      data: { productId, name, price, rating, stockQuantity },
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
}
