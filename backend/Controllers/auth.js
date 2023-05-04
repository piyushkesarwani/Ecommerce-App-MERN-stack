import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length > 0) return res.status(409);

    const q = "INSERT INTO users(`email`, `username`, `password`) VALUES (?)";
    const values = [req.body.email, req.body.username, req.body.password];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json("User registered Sucessfully.");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);

    if (data.length === 0) return res.status(400).json("User not Found");

    const isPasswordCorrect = req.body.password === data[0].password;
    if (!isPasswordCorrect) {
      return res.json("Username or Password is Incorrect");
    }

    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};
export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: "true",
    })
    .status(200)
    .json("User has been logged out.");
};
