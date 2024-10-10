// import Navbar from "./components/Navbar";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";
// import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import RoutLayout from "./layouts/RoutLayout";
// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<RoutLayout/>}>
//         <Route  />
//       </Route>
//     )
//   )
//   return (
//     <>
//       <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/products" element={<Products />} />
//         </Routes>
//     </>
//   );
// }

// export default App;




import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RoutLayout from "./layouts/RoutLayout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RoutLayout/>}>
        <Route index element={<Home />} />
         <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} />
           <Route path="products" element={<Products />} />
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
