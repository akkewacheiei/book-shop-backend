import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize("book_shop", "root", "root_password", {
  host: "localhost",
  port: 3307,
  dialect: "mysql"
});

export { sequelize };
