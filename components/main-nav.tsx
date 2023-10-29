"use client";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <ul className="navbar-nav navbar-nav-hover ms-3 ">
      {routes.map((route) => (
        <li className="nav-item mx-2 ml-2 " key={route.label}>
          <Link
            key={route.href}
            href={route.href}
            className={
              "nav-link ps-2 cursor-pointer" + route.active
                ? "text-neutral-500"
                : "text-black"
            }
          >
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
