import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight">
          "FreshVegz: Your Go-To Spot for Awesome Veggies Delivered Fresh!"
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Savor the simplicity of farm-fresh goodness with FreshVegz! Your
          one-stop destination for vibrant, awesome veggies delivered straight
          to your doorstep.
        </p>
        <div className="mt-4">
          <Link to="/vegetables" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="hidden h-[22rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
