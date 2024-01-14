import { Link } from "react-router-dom";
import img1 from "../assets/veg1-spinach.jpg";
import img2 from "../assets/veg2-carrot.jpg";
import img3 from "../assets/veg3-greenbeans.jpg";
import img4 from "../assets/veg4-potatoes.jpg";

const VegGrid = [
  { id: 1, img: img1, text: "Spinach", price: "₹30 per Bunch" },
  { id: 2, img: img2, text: "Carrots", price: "₹50 per Kg" },
  { id: 3, img: img3, text: "Green Beans", price: "₹100 per Kg" },
  { id: 4, img: img4, text: "Potatoes", price: "₹35 per Kg" },
];

const VegetableGrid = () => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {VegGrid.map((veg) => {
        const { id, img, text, price } = veg;
        return (
          <Link
            key={id}
            to={"/vegetables/:id"}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={img}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title tracking-wider">{text}</h3>
              <span className="text-secondary">{price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VegetableGrid;
