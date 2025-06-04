import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";
import fs from "fs";

// Setup multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = "./uploads";
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Simpan dengan userId + ekstensi file asli
        const ext = path.extname(file.originalname);
        cb(null, req.params.id + ext);
    },
});

export const upload = multer({ storage });
export async function uploadUserPhoto(req, res) {
    try {
        const userId = req.params.id;

        if (!req.file) {
            return res
                .status(400)
                .json({ success: false, message: "No file uploaded" });
        }

        const photoUrl = '/uploads/${req.file.filename}';

        // Update kolom photo_url
        await User.update({ photo_url: photoUrl }, { where: { id: userId } });

        res
            .status(200)
            .json({ success: true, message: "Photo uploaded", photoUrl });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Register
async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;

        const existing = await User.findOne({ where: { email } });
        if (existing) {
            return res.status(400).json({ success: false, message: "Email Already Exists" });
        }

        // 2^10 putaran hashing  (1024 putaran hash)
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ success: true, message: "Registration Successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Login
async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ success: false, message: "Email Not Found, Please Register First" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ success: false, message: "Incorrect Password" });
        }

        res.status(200).json({
            success: true,
            message: "Login Successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function logoutUser(req, res) {
    try {
        res.status(200).json({ success: true, message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function getUserById(req, res) {
    try {
        const { id } = req.params;
        const user = await User.findOne({ where: { id } });
        if (!user) {
            return res.status(404).json({ success: false, message: "User Not Found" });
        }
        res.json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                photo: user.photo || null,
                password: user.password, // bisa juga dikosongkan atau dienkripsi
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function updateUser(req, res) {
    try {
        const { name, email, photo, password } = req.body;

        // Bangun objek update secara dinamis
        const updateData = { name, email };

        if (photo !== undefined) {
            // Hanya update photo jika disertakan
            updateData.photo = photo;
        }

        if (password) {
            updateData.password = await bcrypt.hash(password, 10); // tetap hash password
        }

        const id = req.params.id;
        const [updatedCount] = await User.update(updateData, { where: { id } });

        if (!updatedCount) {
            return res.status(404).json({ message: "User Have No Change or Not Found" });
        }

        res.status(200).json({ message: "User Updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteUser(req, res) {
    try {
        const id = req.params.id;
        const deleted = await User.destroy({ where: { id } });
        if (!deleted) return res.status(404).json({ message: "User Not Found" });
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export { registerUser, loginUser, logoutUser, getUserById, updateUser, deleteUser };
