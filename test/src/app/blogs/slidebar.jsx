import Link from "next/link";

const SlideBar = () => {
  return (
    <div>
      <ul>
        {item.map((item) => (
          <li key={item.path} className="text-center">
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideBar;

const item = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/dashboard", title: "Dashboard" },
];
