import type { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

const createBudgetItem = async (
  userId: string,
  budgetId: string,
  categoryId: string,
  fields: Prisma.BudgetItemCreateInput,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const validBudget = await prisma.budget.findFirst({
      where: { userId: validUser.id, AND: { id: budgetId } },
    });
    if (!validBudget) throw Error("Budget not found");
    const validCategory = await prisma.category.findFirst({
      where: { id: categoryId, AND: { budgetId: validBudget.id } },
    });
    if (!validCategory) throw Error("Category not found");
    const item = await prisma.budgetItem.create({
      data: { ...fields, category: { connect: { id: categoryId } } },
    });
    return item;
  } catch (error) {
    throw error;
  }
};

const getBudgetItems = async (
  userId: string,
  budgetId: string,
  categoryId: string,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const validBudget = await prisma.budget.findFirst({
      where: { userId: validUser.id, AND: { id: budgetId } },
    });
    if (!validBudget) throw Error("Budget not found");
    const validCategory = await prisma.category.findFirst({
      where: { id: categoryId, AND: { budgetId: validBudget.id } },
    });
    if (!validCategory) throw Error("Category not found");

    const items = await prisma.budgetItem.findMany({
      where: { categoryId: validCategory.id },
    });
    return items;
  } catch (error) {
    throw error;
  }
};

const getSingleBudgetItem = async (
  userId: string,
  budgetId: string,
  categoryId: string,
  id: string,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const validBudget = await prisma.budget.findFirst({
      where: { userId: validUser.id, AND: { id: budgetId } },
    });
    if (!validBudget) throw Error("Budget not found");
    const validCategory = await prisma.category.findFirst({
      where: { id: categoryId, AND: { budgetId: validBudget.id } },
    });
    if (!validCategory) throw Error("Category not found");
    const item = await prisma.budgetItem.findFirstOrThrow({
      where: { id, AND: { categoryId: validCategory.id } }, include:{ buckets: true}
    });
    return item;
  } catch (error) {
    throw error;
  }
};

const updateBudgetItem = async (
  userId: string,
  budgetId: string,
  categoryId: string,
  id: string,
  fields: Prisma.BudgetItemUpdateInput,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const validBudget = await prisma.budget.findFirst({
      where: { userId: validUser.id, AND: { id: budgetId } },
    });
    if (!validBudget) throw Error("Budget not found");
    const validCategory = await prisma.category.findFirst({
      where: { id: categoryId, AND: { budgetId: validBudget.id } },
    });
    if (!validCategory) throw Error("Category not found");

    const item = await prisma.budgetItem.update({
      where: { id, AND: { categoryId: validCategory.id } },
      data: { ...fields },
    });
    return item;
  } catch (error) {
    throw error;
  }
};

const deleteBudgetItem = async (
  userId: string,
  budgetId: string,
  categoryId: string,
  id: string,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const validBudget = await prisma.budget.findFirst({
      where: { userId: validUser.id, AND: { id: budgetId } },
    });
    if (!validBudget) throw Error("Budget not found");
    const validCategory = await prisma.category.findFirst({
      where: { id: categoryId, AND: { budgetId: validBudget.id } },
    });
    if (!validCategory) throw Error("Category not found");
    const item = await prisma.budgetItem.delete({
      where: { id, AND: { categoryId: validCategory.id } },
    });
    return item;
  } catch (error) {
    throw error;
  }
};

export default {
  getBudgetItems,
  getSingleBudgetItem,
  createBudgetItem,
  updateBudgetItem,
  deleteBudgetItem,
};
