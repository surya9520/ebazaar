
# eBazar - React.js Product Catalog

**eBazar** is a simple and responsive product catalog application built using React.js. The app displays a list of products and allows users to search, filter, sort, and view detailed product information. Designed with React best practices, it utilizes reusable components, state management with React hooks, and focuses on providing a clean, user-friendly interface.

---

## Features

### 1. Product Listing
- Displays products in a **grid format** with an image, name, price, and a **"View Details"** button.

### 2. Product Details
- Shows detailed information about a product when **"View Details"** is clicked.
- Includes **navigation back to the product listing** (using React Router).

### 3. Search Functionality
- Real-time **filtering of products by name** using a search bar.

### 4. Category Filter
- Allows filtering products by **categories**.

### 5. Pagination
- Displays **12 products per page**.
- Includes **"Previous"** and **"Next"** buttons, which are disabled when on the first or last page.

### 6. Sorting
- Allows users to **sort products by price** in ascending or descending order.

### 7. Fetch
- fetch the data from **https://fakestoreapi.com/products/** 

---

## Optional Enhancements

- **Responsive Design**: The app works seamlessly on desktops, tablets, and mobiles.
- **Hover Effects**: Interactive transitions added for a better user experience.

---

## Challenges Faced & Solutions

### 1. Managing Component State
- **Challenge**: Handling search, filter, and pagination states simultaneously.
- **Solution**: Used `useState` and `useEffect` hooks to manage dynamic updates efficiently.

### 2. Responsive Design
- **Challenge**: Ensuring the app adapts properly to different screen sizes.
- **Solution**: Leveraged **Tailwind CSS** to ensure seamless responsiveness across devices.

### 3. Pagination Logic
- **Challenge**: Keeping **'Previous'** and **'Next'** buttons inactive at boundary pages.
- **Solution**: Added **conditional logic** to disable buttons dynamically based on page boundaries.

### 4. Add to Cart Functionality
- **Challenge**: Implementing a global "Add to Cart" feature while maintaining scalability and state management efficiency.
- **Solution**: 
  - Used **`useContext`** for creating a global state for the cart.
  - Leveraged **`useReducer`** to handle complex state transitions such as adding, removing items, and updating the cart total.

---

## Installation and Setup

To run this project locally, follow these steps:

### 1. Clone the Repository
Clone the repository to your local machine.

```bash
git clone https://github.com/surya9520/ebazaar
cd ebazar
```

### 2. Install Dependencies
Install the required dependencies by running:

```bash
npm install
```

### 3. Run the Application
To start the development server and view the application locally, run:

```bash
npm start
```

Open your browser and visit **http://localhost:3000** to view the app.

### 4. Build for Production
To build the app for production, use:

```bash
npm run build
```

This will create an optimized production build in the **build** folder.


## Technologies Used
- **React.js**: JavaScript library for building the user interface.
- **React Router**: For routing between pages.
- **Tailwind CSS**: For responsive and utility-first styling.
- **React Context & Reducer**: For global state management (e.g., Cart functionality).
- **useState, useEffect**: React hooks for managing component state and side effects.

---

## Optional Enhancements Implemented
- **Sorting**: Products can be sorted by price in ascending or descending order.
- **Add to Cart Functionality**: Allows users to add products to the cart, remove them, and view cart totals.

---

## Future Enhancements
- **Authentication**: Add user authentication for a more personalized experience.
- **API Integration**: Replace static JSON data with a real API to fetch product details.
