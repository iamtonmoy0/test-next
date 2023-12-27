import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex item-center justify-center  mx-auto bg-slate-200 h-12 pt-3">
      <ul className="flex item-center justify-center">
        {navItems.map((item) => (
          <li key={item.path} className="mr-4">
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
const navItems = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/profile", title: "Contact" },
  { path: "/blogs", title: "Blogs" },
  { path: "/dashboard", title: "Dashboard" },
];
