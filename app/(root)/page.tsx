import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: {
        _id: 1,
      },
      _id: 1,
      description: "This is a description",
      image:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/We-Robot-Recap-Carousel-Slide-2-Desktop.png",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup
          <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Notice in Vitual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartUpCardType, index: number) => {
              return <StartupCard key={post._id} post={post}/>;
            })
          ) : (
            <p className="no-results">No Results</p>
          )}
        </ul>
      </section>
    </>
  );
}
