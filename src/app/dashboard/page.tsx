"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const Dashboard = () => {
  const token = Cookies.get("token");
  const router = useRouter();
  if (!token) {
    router.push("/login");
  }
  return <div>Dashboard</div>;
};
export default Dashboard;
