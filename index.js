import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/toastify', express.static(path.join(__dirname, 'node_modules', 'toastify-js', 'src')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    try {
        //readdir is used to read the files inside the directory
        const fileNames = await fs.readdir(`./files`);

        const files = await Promise.all(
            fileNames.map(async (file) => {
                const content = await fs.readFile(`./files/${file}`, "utf-8");
                return {
                    title: file.replace(".txt", ""),
                    content: content,
                }
            })
        )
        res.render("index", { files })
    } catch (err) {
        console.error("🔥 Error reading files:", err);
        res.render("error", { message: "Error Fetching Notes🙀", submessage: "There was an error in fetching you notes. Please check your internet connection and try again!!" })
    }
});

// Middleware to filter the file title and remove special characters from them and warning them if any special character is used
// app.use()

const specialChar = /[^a-zA-Z0-9]/;

app.post("/create", async (req, res) => {
    try {
        if (specialChar.test(req.body.title)) {
            res.render("error", {
            message: "Error creating notes🙀",
            submessage: "Your title probably has a special character in it. Please remove it and try again!!"
        });
        } else {
            await fs.writeFile(`./files/${req.body.title.split(" ").join('')}.txt`, req.body.content);
            res.redirect("/?created=1");
        }
    } catch (err) {
        console.error(err);
        res.render("error", {
            message: "Error creating notes🙀",
            submessage: "There was some error in creation of notes. Please try again!!"
        });
    }
});


app.post("/delete", async (req, res) => {
    try {
        await fs.unlink(`./files/${req.body.title}.txt`);
        res.redirect("/?deleted=1");
    } catch (err) {
        console.error("🔥 Error reading files:", err);
        res.render("error", { message: "Error Deleting Note🙀", submessage: "There was an error in deleting you notes because either the note is already deleted or there is an server error. Please try!!" })
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});