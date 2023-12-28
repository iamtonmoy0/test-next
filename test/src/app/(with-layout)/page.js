import Image from "next/image";
import image1 from "@/assets/img1.png";

function HomePage() {
  return (
    <div className="text-center">
      hello World
      <Image  src={image1} alt="" placeholder="blur" />
      <Image  width={400} height={400} src="/img2.png" alt=""  />
      <Image width={400} height={400} src="https://images.unsplash.com/photo-1682687982298-c7514a167088?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
    </div>
  );
}
export default HomePage;
