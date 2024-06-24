import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";


class Customer extends Model {}

Customer.init(
  {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    address: { type: DataTypes.TEXT },
    phone_number: { type: DataTypes.STRING },
  },
  {
    sequelize,
    tableName: "customers",
  }
);

export default Customer;
