import { db } from "../db/index.js";

export class groupContollerClass {
  async createGroup(req, res) {
    try {
      const result = await db.query(
        "insert into groups (name) values ($1) returning *",
        [req.body.name]
      );
      return res.status(201).json({
        statusCode: 201,
        message: "success",
        data: result.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message || "Internal server err",
      });
    }
  }
  async groupAll(req, res) {
    try {
      const result = await db.query("select * from groups");
      return res.status(200).json({
        statusCode: 200,
        message: "success",
        data: result.rows,
      });
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message || "Internal server err",
      });
    }
  }
  async updateGroup(req, res) {
    try {
      const id = req.params.id;

      const result = await db.query(
        "update groups set name=$1 where id=$2 returning *",
        [req.body.name, id]
      );
      return res.status(200).json({
        statusCode: 200,
        message: "success",
        data: result.rows,
      });
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message || "Internal server err",
      });
    }
  }
}
