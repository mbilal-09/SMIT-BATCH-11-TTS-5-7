import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div>
      <Header />

      {/* outlet dashboard ke child leke aajaega */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Dashboard;
