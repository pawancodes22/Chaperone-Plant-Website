# Chaperone Plant Website

## Introduction
The **Chaperone Plant Website** is a React-based platform designed to provide detailed information about plants, allowing users to purchase the products in an intuitive and interactive way. This project highlights my skills in modern web development, focusing on creating a user-friendly and responsive interface.

## Features
- **User-Friendly Plant Information Display:** A well-organized display of plant details to enhance user engagement.
- **Pagination:** Implements pagination for efficient navigation of large product datasets.
- **Search Bar:** A dynamic search feature for users to quickly find products.
- **Profile and Cart Icons:** Smooth user navigation for account and shopping management.
- **Thank You Page:** A visually appealing thank you page designed to improve user satisfaction and overall experience.

## Approach
This application follows a **component-based architecture** to ensure maintainability and modularity. **React Router** is used for navigation between pages, and **state management** is handled using React's `useState` hook. The project is structured using **good code organization**, ensuring the maintainability of the codebase.

### Creating the Basic Structure
- The project was initialized using `npx create-react-app`.
- Dependencies were installed using `npm install`.

### Uploading Resources to Cloudinary
- Downloaded design assets from Figma and uploaded them to **Cloudinary** for easy access via URL within the codebase.

### Navbar Component
- Created a responsive Navbar component (`src/components/Navbar`), ensuring a clean structure with consistent font sizes, weights, and colors.
- CSS Flexbox was used extensively to achieve the desired layout, with additional components for the profile and cart icons.

### Static Product Data
- A well-structured data folder (`src/data/productsData`) was created, housing product information in an organized manner, with properties like `imageUrl`, `name`, `specification`, `rating`, `originalPrice`, and `finalPrice`. This **good code structure** ensures easy management and scalability.

### Home Component
- The Home component was developed in `src/components/Home`, where the Navbar was imported and structured using semantic HTML elements.
- A search bar and product listing were created, with the product section consisting of filters and individual product cards.

### Product Item Component
- The Product Item component receives props from the Home component, displaying information with options to view, add to cart, or rent the product.

### Pagination Component
- Pagination logic was handled within the Home component, using state variables like `currentPage`, `firstIndex`, `lastIndex`, and `records`. The pagination section was styled using Bootstrap for user-friendly navigation.

### Product View Component
- The Product View page was customized with an AI-generated background. With the help of ChatGPT, I discovered the **optimum colors**, animations, and styles (e.g., font-family, colors). I then **tweaked the code** to match my style and project requirements. This approach saved me time, allowing me to complete the page in just 5 minutes, whereas it would have taken 15 minutes otherwise.

### Routing
- Installed `react-router-dom` and implemented routing for navigation.
  - Home Path: `/`
  - Product View: `/products/:id`

### Adding functionality to 'View Product' Button
- Integrated the `useNavigate` hook to navigate dynamically to the product page using the product’s ID. Used `useParams` to retrieve the product ID from the route.

### Adding functionality to 'Add to Cart' Button
- Creating the AddPopUp Component
  - Created an AddPopUp component inside src/components/.
  - Installed the reactjs-popup package by running 'npm install reactjs-popup'
  - Imported the Popup component from reactjs-popup into AddPopUp.
- Integrating the Popup for the Add to Cart Button
  - Referred to the React Popup documentation and integrated the relevant popup type. The popup was then customized to meet the project’s requirements.
  - The ‘Add to Cart’ button was set as the trigger for the popup, which displays a checkout modal when clicked.
- Managing State with useState Hook and adding close button
 - Used the useState hook to manage the state of the checkout process. This tracks whether the checkout button inside the modal is clicked.
 - Imported 'x' icon from 'react-icons' for the close button.
- Displaying the Final Modal:
 - Once the checkout button inside the modal is clicked, the state is updated, and a final Congratulations Page is displayed.
 - The Congratulations page includes a ‘Continue Shopping’ button, which closes the modal and returns the user to the main shopping area.
## Challenges Faced
### 1. Pagination Implementation
**Challenge:** Implementing pagination posed some difficulties, especially when specifying different variables such as noOfPages, lastIndex, firstIndex, and currentPage. I had to determine where to add these variables and how to manage state with useState to ensure the Home page re-renders whenever the page changes. 
**Solution:** After thoroughly analyzing the component structure and understanding which parts needed re-rendering, I was able to determine where to place the pagination variables and state. I made sure to maintain a clean and structured codebase by carefully organizing the variables and related functions 
**Outcome:** This enhanced my understanding of React’s state management and how to efficiently implement pagination while maintaining clean and modular code.

### 2. React Router Syntax Changes (Version 5 to Version 6)
**Challenge:**  I had previously worked with react-router-dom version 5 while learning through NxtWave, but in this project, version 6 was being used, which introduced significant syntax changes. Hooks and components in version 6 replaced some of the older ones, which created confusion when trying to navigate through the app.  
**Solution:**  I used ChatGPT to help identify the new syntax and hook replacements in version 6, allowing me to quickly adapt to the updated version of react-router-dom. I learned how to replace outdated code and use the latest methods for routing and navigation in React.
**Outcome:** With the help of AI tools, I was able to overcome my challenges with new syntax quickly. This experience also prepared me for future updates, as I’m now confident in adapting to changes in libraries or frameworks by researching or using AI assistance.


### 3. Documentation Efficiency with AI Assistance
**Challenge:** Writing comprehensive and professional documentation from scratch typically takes 2 to 3 hours.  
**Solution:** Instead of creating the documentation from scratch, I provided a zip file of the code, along with the issues I faced and an outline. Using AI tools, I was able to generate tailor-cut, professional documentation efficiently.  
**Outcome:** Documentation was completed within 30-40 minutes, allowing me to focus on other development tasks while still delivering high-quality, professional documentation.

## Running the Project
To run this project in your environment, follow these steps:

1. Clone the repository:
    git clone "https://github.com/pawancodes22/Chaperone-Plant-Website.git" chaperone-plant-website
2. Navigate to the project directory:
    cd ./chaperone-plant-website
3. Install the necessary dependencies:
    npm install
4. Run the project:
    npm start

