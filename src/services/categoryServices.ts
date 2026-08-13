import type { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

const createCategory = async (
  userId: string,
  budgetId: string,
  fields: Prisma.CategoryCreateInput,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const category = await prisma.category.create({
      data: { ...fields, budget: { connect: { id: budgetId } } },
    });
    return category;
  } catch (error) {
    throw error;
  }
};

const getCategories = async (userId: string, budgetId: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const validBudget = await prisma.budget.findFirst({
      where: { userId: validUser.id },
    });
    if (!validBudget) throw Error("Budget not found");
    const categories = await prisma.category.findMany({ where: { budgetId } });
    if (categories.length === 0) throw Error("Items not found");
    return categories;
  } catch (error) {
    throw error;
  }
};

const getSingleCategory = async (
  userId: string,
  budgetId: string,
  id: string,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const validBudget = await prisma.budget.findFirst({
      where: { userId: validUser.id },
    });
    if (!validBudget) throw Error("Budget not found");
    const category = await prisma.category.findFirstOrThrow({
      where: { id, AND: { budgetId } },
    });
    return category;
  } catch (error) {
    throw error;
  }
};

const updateCategory = async (
  userId: string,
  budgetId: string,
  id: string,
  fields: Prisma.CategoryUpdateInput,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const validBudget = await prisma.budget.findFirst({
      where: { userId: validUser.id },
    });
    if (!validBudget) throw Error("Budget not found");
    const category = await prisma.category.update({
      where: { id, AND: { budgetId } },
      data: { ...fields, budget: { connect: { id: budgetId } } },
    });
    return category;
  } catch (error) {
    throw error;
  }
};

const deleteCategory = async (userId: string, id: string, budgetId: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const validBudget = await prisma.budget.findFirst({
      where: { userId: validUser.id },
    });
    if (!validBudget) throw Error("Budget not found");
    const category = await prisma.category.delete({
      where: { id, AND: { budgetId } },
    });
    return category;
  } catch (error) {
    throw error;
  }
};

export default {
  getCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
