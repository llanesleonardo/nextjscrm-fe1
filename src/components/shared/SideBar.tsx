// components/Sidebar.js
import Link from "next/link";
import {
  DashboardOutlined,
  UsergroupAddOutlined,
  ApartmentOutlined,
  ContactsOutlined,
  DollarOutlined,
  ShoppingOutlined,
  FileTextOutlined,
  ShoppingCartOutlined,
  DatabaseOutlined,
  FileDoneOutlined,
  CheckSquareOutlined,
  CalendarOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

const protectedNav = [
  { href: "/account/dashboard", label: "Dashboard", icon: <DashboardOutlined /> },
  { href: "/account/leads", label: "Leads", icon: <UsergroupAddOutlined /> },
  { href: "/account/companies", label: "Companies", icon: <ApartmentOutlined /> },
  { href: "/account/contacts", label: "Contacts", icon: <ContactsOutlined /> },
  { href: "/account/deals", label: "Deals", icon: <DollarOutlined /> },
  { href: "/account/products", label: "Products", icon: <ShoppingOutlined /> },
  { href: "/account/quotes", label: "Quotes", icon: <FileTextOutlined /> },
  { href: "/account/salesorders", label: "Sales Orders", icon: <ShoppingCartOutlined /> },
  { href: "/account/inventories", label: "Inventory", icon: <DatabaseOutlined /> },
  { href: "/account/purchaseorders", label: "Purchase Orders", icon: <FileDoneOutlined /> },
  { href: "/account/tasks", label: "Tasks", icon: <CheckSquareOutlined /> },
  { href: "/account/calendar", label: "Calendar", icon: <CalendarOutlined /> },
  { href: "/account/payments", label: "Payments", icon: <CreditCardOutlined /> },
];

export default function Sidebar() {
  return (
    <aside className="p-4">
      <div className="flex flex-col min-h-screen justify-between">
        <div>
          <nav className="flex flex-col gap-4">
            <span className="font-bold text-center uppercase text-4xl mb-2">3L</span>
            <hr />
            {protectedNav.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 hover:underline"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p>CONFIGS</p>
        </div>
      </div>
    </aside>
  );
}
