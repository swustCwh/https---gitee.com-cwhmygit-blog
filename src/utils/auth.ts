/*
 * @Author: WH-Chen cwh2024@163.com
 * @Date: 2025-05-09 20:43:50
 * @LastEditors: WH-Chen cwh2024@163.com
 * @LastEditTime: 2025-05-09 20:43:55
 * @FilePath: \https---gitee.com-cwhmygit-blog\src\utils\auth.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${WH-Chen}, All Rights Reserved.
 */
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET = process.env.JWT_SECRET || "your-secret-key";

// 加密密码
export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

// 验证密码
export const verifyPassword = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};

// 生成 JWT
export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, SECRET, { expiresIn: "1d" });
};

// 验证 JWT
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET) as { userId: number };
  } catch (err) {
    return null;
  }
};
