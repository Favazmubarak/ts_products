import { Request, Response } from "express";
import { products } from "../model/product";
import mongoose, { Types } from "mongoose";

export async function getProducts(req: Request, res: Response): Promise<void> {
  try {
    const result = await products.find({});
    if (!result) {
      res.status(201).json({ message: "There is no products", success: false });
      return;
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

export async function postProducts(req: Request, res: Response): Promise<void> {
  try {
    const { name, price, quantity } = req.body;
    const exist = await products.findOne({ name });
    if (exist) {
      res.json({ message: "Product already Exist", success: false });
      return;
    }
    const result = await products.create({ name, price, quantity });
    res.status(200).json({ message: "Product Added", success: true });
  } catch (error) {
    console.log(error);
  }
}
interface UseParams {
  id: string;
}

export async function updateProducts(
  req: Request<UseParams>,
  res: Response
): Promise<void> {
  try {
    const id = req.params.id;
    const result = await products.findByIdAndUpdate(id, req.body);
    if (!result) {
      res
        .status(404)
        .json({ message: "not found the product", success: false });
      return;
    }
    console.log("Updated Succefully");
    res.status(200).json({
      message: "Updated Succesfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const id = req.params.id;
    const result = await products.findByIdAndDelete(id, req.body);
    if (!result) {
      res
        .status(404)
        .json({ message: "Not found the Product", success: false });
      return;
    }
    console.log("Deleted Successfully");
    res.status(200).json({ message: "Deleted Successfully", success: true });
  } catch (error) {
    console.log(error);
  }
}
