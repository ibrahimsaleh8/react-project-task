import ImgSlider from "../components/ImgSlider";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <ImgSlider />
      <h1 className="mt-5 mb-4 ms-auto me-auto w-25">Our Products</h1>
      <Products />
    </>
  );
}
