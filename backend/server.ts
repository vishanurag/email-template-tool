import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint to serve the customized template
app.post("/downloadTemplate", (req: Request, res: Response): void => {
  const { title, content, author, image } = req.body;

  // Validate input
  if (!title?.data || !content?.data || !author?.data || !image?.data) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  // Path to the static template file
  const templatePath = path.join(__dirname, "templates", "template.html");

  // Read the HTML template file
  fs.readFile(templatePath, "utf-8", (err, template) => {
    if (err) {
      console.error("Error reading template file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Replace placeholders in the template
    const customizedHtml = template
      .replace("{{title}}", title.data)
      .replace("{{title}}", title.data)
      .replace("{{title}}", title.data)
      .replace("{{content}}", content.data)
      .replace("{{author}}", author.data)
      .replace("{{image}}", image.data)
      .replace("{{font-title}}", title.font)
      .replace("{{color-title}}", title.color)
      .replace("{{font-content}}", content.font)
      .replace("{{color-content}}", content.color)
      .replace("{{font-author}}", author.font)
      .replace("{{color-author}}", author.color);

    // Send the customized HTML as a downloadable file
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Content-Disposition", "attachment; filename=template.html");
    res.send(customizedHtml);
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
