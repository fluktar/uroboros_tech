const path = require("path");
const express = require("express");
const blogRoutes = require("./routes/link");
const db = require("./data/database");
const browserSync = require("browser-sync");

const app = express();

// Activate EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies
app.use("/dist", express.static("dist")); // Serve static files (e.g. CSS files)

app.use(blogRoutes);

// Error handling middleware
app.use(function (error, req, res, next) {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  console.log(error);
  res.status(500).render("500");
});

db.connectToDatabase().then(function () {
  const port = process.env.PORT || 4502;
  app.listen(port, function () {
    console.log(`Server is running on port ${port}`);

    // Initialize BrowserSync
    // browserSync({
    //   proxy: `localhost:${port}`, // Użyj dynamicznego portu
    //   files: ["views/**/*.ejs", "dist/css/*.css", "dist/js/*.js"],
    //   port: 3000,
    //   open: false,
    //   notify: false,
    // });
  });
});
