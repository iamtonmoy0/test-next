import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({children,href,...props,activeClassName}) => {
	const path = usePathname()
	return (
		<Link href={href} {...props}>
		{children}
		</Link>
	);
};

export default NavLink;