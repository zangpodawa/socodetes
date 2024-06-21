import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Learn, Code & Share
      <br className="max-md:hidden" />
      <span className="red_gradient text-center">
        {" "}
        Best philosophy with code
      </span>
    </h1>
    <p className="desc text-center">
      socodetes is an open-source philosophical and coding tool for developer's
      of the world to learn, code and share thier favourite philosophy and
      coding tools
    </p>

    <Feed />
  </section>
);

export default Home;
