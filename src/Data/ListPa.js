import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  User,
  ChartNoAxesColumn,
  Settings,
} from "lucide-react";
const menuItems = [
  {
    id: 1,
    title: "داشبورد",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    id: 2,
    title: "محصولات",
    icon: Package,
    path: "/admin/products",
  },
  {
    id: 3,
    title: "سفارش‌ها",
    icon: ShoppingCart,
    path: "/admin/orders",
  },
  {
    id: 4,
    title: "کاربران",
    icon: User,
    path: "/admin/users",
  },
  {
    id: 5,
    title: "گزارش‌گیری",
    icon: ChartNoAxesColumn,
    path: "/admin/reports",
  },
  {
    id: 6,
    title: "تنظیمات",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default menuItems;
