# 📝 React Blog Site

A minimal yet functional Blog Site built with **React** and **Vite**. This app demonstrates basic CRUD operations using a mock REST API (`json-server`). It includes routing, loading/error handling, and blog management features.

---

## 🚀 Features

- ✅ Fast React setup using **Vite**
- 🧭 Client-side routing with **React Router**
- 📡 Custom data fetching hook using `fetch`
- 🗑️ Delete blog posts
- 🧭 Dynamic route handling (`/blogs/:id`)
- 🌐 Mock backend with `json-server`

---

## 📁 Project Structure

```

blog/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── BlogDetails.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── useFetch.js
│   └── index.css
├── db.json                # Mock API data
├── package.json
├── vite.config.js
└── README.md

````

---

## 🛠️ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/Vivek-1499/Blog_React.git
cd Blog_React

# 2. Install dependencies
npm install

# 3. Run mock backend
npx json-server --watch db.json --port 8000

# 4. Start the React app
npm run dev
````

---

## 📦 Available Scripts

* `npm run dev` — Run development server
* `npm run build` — Build app for production
* `npm run preview` — Preview production build
* `npx json-server --watch db.json --port 8000` — Start mock API

---

## 🖥️ Pages

| Route                  | Description         |
| ---------------------- | ------------------- |
| `/`                    | Home with blog list |
| `/blogs/:id`           | Blog details view   |
| `/create` *(optional)* | Add new blog post   |

---

## 📚 Technologies Used

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [React Router](https://reactrouter.com/)
* [json-server](https://github.com/typicode/json-server)

---

## 📸 Screenshots

> 
