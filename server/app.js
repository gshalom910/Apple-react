const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");

// Question 1:
const connection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "myDBuser",
  database: "myDB",
});

connection.connect((err) => {
  if (err) console.log("Error found");
  console.log("👏 Connected");
});

// Question 2:
app.use(
  express.urlencoded({
    extended: true, // if false array or string datas are parsed
  })
);

app.use(cors());
app.use(express.json());

app.get("/install", (req, res) => {
  let products = `create table if not exists Products(
            product_id int auto_increment,
            product_url VARCHAR(255) not null,
            product_name VARCHAR(30) not null,
            PRIMARY KEY (product_id)
        )`;

  let productDescription = `create table if not exists ProductDescription(
            description_id int auto_increment,
            product_id int not null,
            product_description varchar(255) not null,
            product_brief_description TEXT not null,
            product_img varchar(255) not null,
            product_link varchar(255) not null,
            PRIMARY KEY (description_id),
            FOREIGN KEY (product_id) REFERENCES Products (product_id)
        )`;

  let productPrice = `create table if not exists ProductPrice(
            price_id int auto_increment,
            product_id int not null,
            starting_price varchar(255) not null,
            price_range varchar(255) not null,
            PRIMARY KEY (price_id),
            FOREIGN KEY (product_id) REFERENCES Products (product_id)
        )`;

  let users = `create table if not exists User(
            user_id int auto_increment,
            user_name VARCHAR(255) not null,
            user_password VARCHAR(255) not null,
            PRIMARY KEY (user_id)
        )`;

  let orders = `create table if not exists Orders(
            order_id int auto_increment,
            ProductId int not null,
            user_id int not null,
            PRIMARY KEY (order_id),
            FOREIGN KEY (ProductId) REFERENCES Products (product_id),
            FOREIGN KEY (user_id) REFERENCES User(user_id)
        )`;

  connection.query(products, (err, results, fields) => {
    if (err) console.log(`Error Found in Products table: ${err}`);
  });
  connection.query(productDescription, (err, results, fields) => {
    if (err) console.log(`Error Found in Products ProductDescription: ${err}`);
  });
  connection.query(productPrice, (err, results, fields) => {
    if (err) console.log(`Error Found in ProductPrice table: ${err}`);
  });
  connection.query(users, (err, results, fields) => {
    if (err) console.log(`Error Found in User table: ${err}`);
  });
  connection.query(orders, (err, results, fields) => {
    if (err) console.log(`Error Found in order table: ${err}`);
  });
  res.send("Tables Created");
});

app.post("/add-product", (req, res) => {
  const {
    p_url,
    p_name,
    p_desc,
    p_bDesc,
    p_img,
    p_link,
    startPrice,
    priceRange,
  } = req.body;
  console.log(req.body);

  let insertProducts = `INSERT INTO Products (product_url, product_name) VALUES (?,?)`;
  let insertProductDesc = `Insert into ProductDescription (product_id,product_description, product_brief_description, product_img, product_link) values (?,?,?,?,?) `;
  let insertProductPrice = `Insert into ProductPrice (product_id,starting_price, price_range) values (?,?,?) `;
  connection.query(insertProducts, [p_url, p_name], (err, rows, fields) => {
    if (err)
      console.log(`Error Found in inserting data into Products table: ${err}`);
    console.log(rows);
    const pid = rows.insertId;
    connection.query(
      insertProductDesc,
      [pid, p_desc, p_bDesc, p_img, p_link],
      (err, rows) => {
        if (err)
          console.log(
            `Error Found in inserting data into ProductDesc table: ${err}`
          );
        console.log(rows);
      }
    );
    connection.query(
      insertProductPrice,
      [pid, startPrice, priceRange],
      (err, rows) => {
        if (err)
          console.log(
            `Error Found in inserting data into ProductPrice table: ${err}`
          );
        console.log(rows);
      }
    );
  });

  res.send("Data inserted successfully!");
});

app.get("/iphones", (req, res) => {
  connection.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphones = { products: [] };
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});

app.listen(3111, () => console.log("Listening to port 3111"));
