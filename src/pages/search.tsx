import Footer from "components/Footer";
import Header from "components/Header";
import InfoCard from "components/InfoCard";
import Map from "components/Map";
import { format } from "date-fns";
import { SearchResultData } from "interfaces";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  searchResult: SearchResultData[];
}

const Search: NextPage<Props> = ({ searchResult }) => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate =
    startDate && format(new Date(startDate.toString()), "dd MMM yy");
  const formattedEndDate =
    endDate && format(new Date(endDate.toString()), "dd MMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guest`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            300+ Stays - {range} - for {noOfGuests} guest
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="searchButton">Cancellation Flexibility</p>
            <p className="searchButton">Type of Place</p>
            <p className="searchButton">Price</p>
            <p className="searchButton">Rooms and Beds</p>
            <p className="searchButton">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map((result: SearchResultData) => (
              <InfoCard key={result.title} result={result} />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600]">
          <Map />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://jsonkeeper.com/b/1W6B").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
