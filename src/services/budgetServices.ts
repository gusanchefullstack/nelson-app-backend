import type { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";


const getBudgets = async (userId: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const budgets = await prisma.budget.findMany({ where: { userId } });
    if (budgets.length === 0) throw Error("Items not found");
    return budgets;
  } catch (error) {
    throw error;
  }
};

const getSingleBudget = async (userId: string, id: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const budget = await prisma.budget.findFirstOrThrow({
      where: { id, AND: { userId } }, include: { categories: true, }
    });
    return budget;
  } catch (error) {
    throw error;
  }
};

const createBudget = async (
  userId: string,
  fields: Prisma.BudgetCreateInput,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const budget = await prisma.budget.create({
      data: { ...fields, user: { connect: { id: userId } } },
    });
    return budget;
  } catch (error) {
    throw error;
  }
};

const updateBudget = async (
  userId: string,
  id: string,
  fields: Prisma.BudgetUpdateInput,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const budget = await prisma.budget.update({
      where: { id, AND: { userId } },
      data: { ...fields, user: { connect: { id: userId } } },
    });
    return budget;
  } catch (error) {
    throw error;
  }
};

const deleteBudget = async (userId: string, id: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const budget = await prisma.budget.delete({
      where: { id, AND: { userId } },
    });
    return budget;
  } catch (error) {
    throw error;
  }
};

export default { getBudgets, getSingleBudget, createBudget, updateBudget, deleteBudget};