const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          About
        </h1>
        <div className="stats bg-slate-500 shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              <span className="text-green-400">Fresh</span>
              <span className="text-amber-400">Vegz</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to FreshVegz, your one-stop destination for the freshest and
        finest vegetables delivered right to your doorstep! At FreshVegz, we
        believe that a healthy lifestyle begins with fresh, high-quality
        produce, and we are committed to bringing you the best selection of
        vegetables from local farms and trusted suppliers. <br />
        <br />
        <span className="text-slate-700 font-semibold">Our Mission:</span>
        <span> </span>At FreshVegz, our mission is simple - to make it easy and
        convenient for you to access fresh and nutritious vegetables without
        compromising on quality. We understand the importance of incorporating
        wholesome, farm-fresh produce into your daily diet, and we are dedicated
        to providing you with a diverse range of vegetables that are not only
        delicious but also packed with essential nutrients.
      </p>
    </>
  );
};

export default About;
