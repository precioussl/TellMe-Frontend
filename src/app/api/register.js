// pages/api/register.js

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const usersFilePath = path.join(process.cwd(), "data", "users.json");
    const usersData = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    // Simulate generating a user ID (you can use UUID or any other method)
    const userId = usersData.length + 1;

    const newUser = { id: userId, username, password };

    usersData.push(newUser);

    fs.writeFileSync(usersFilePath, JSON.stringify(usersData));

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
