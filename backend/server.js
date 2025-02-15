"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Endpoint to serve the customized template
app.post("/downloadTemplate", (req, res) => {
    const { title, content, author, image } = req.body;
    // Validate input
    if (!(title === null || title === void 0 ? void 0 : title.data) || !(content === null || content === void 0 ? void 0 : content.data) || !(author === null || author === void 0 ? void 0 : author.data) || !(image === null || image === void 0 ? void 0 : image.data)) {
        res.status(400).json({ error: "All fields are required." });
        return;
    }
    // Path to the static template file
    const templatePath = path_1.default.join(__dirname, "templates", "template.html");
    // Read the HTML template file
    fs_1.default.readFile(templatePath, "utf-8", (err, template) => {
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
