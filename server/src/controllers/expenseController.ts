import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpenses = async (req: Request, res: Response) => {
  try {
    const expenseByCategorySummaryRow = await prisma.expenseByCategory.findMany(
      {
        orderBy: {
          date: "desc",
        },
      }
    );

    const expenseByCategorySummary = expenseByCategorySummaryRow.map(
      (item) => ({
        ...item,
        amount: item.amount.toString(),
      })
    );

    res.json(expenseByCategorySummary);
  } catch (error) {
    res.status(500).json("Error retrieving expenses");
  }
};
