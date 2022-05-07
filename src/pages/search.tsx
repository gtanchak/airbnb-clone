import Footer from "components/Footer";
import Header from "components/Header";
import { NextPage } from "next";

const Search: NextPage = () => (
  <div>
    <Header />
    <main className="flex">
      <section>
        <p className="text-sm">300+ Stays for 5 number of guest</p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

        <div className="hidden lg:inline-flex">
          <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100">
            Cancellation Flexibility
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Search;
