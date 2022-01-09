import Navbar from "./newnav.component";
import Footer from "./footer.component";

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <main className="w-screen bg-gray-300 min-vh-default-main">{children}</main>
      <Footer />
    </div>
  );
}
