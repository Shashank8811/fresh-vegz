import { Link } from "react-router-dom";
import img1 from "../assets/veg1-spinach.jpg";
import img2 from "../assets/veg2-carrot.jpg";
import img3 from "../assets/veg3-greenbeans.jpg";
import img4 from "../assets/veg4-potatoes.jpg";
import img5 from "../assets/veg-5 tomatoes.jpg";
import img6 from "../assets/veg6-greenchilly.jpg";
import img7 from "../assets/veg7-capsicum.jpg";
import img8 from "../assets/veg8-onions.jpg";
import img9 from "../assets/veg9-ginger.jpg";
import img10 from "../assets/veg10-garlic.jpg";
import img11 from "../assets/veg11-coriander.jpg";
import img12 from "../assets/veg12-beetroot.jpg";
import img13 from "../assets/veg13-radish.jpg";
import img14 from "../assets/veg14-ladysfinger.jpg";
import img15 from "../assets/veg15-cabbage.jpg";
import img16 from "../assets/veg16-cauliflower.jpg";
import img17 from "../assets/veg17-cucumbers.jpg";
import img18 from "../assets/veg18-eggplant.jpg";
import img19 from "../assets/veg19-curryleaves.jpg";
import img20 from "../assets/veg20-greenpeas.jpg";
import img21 from "../assets/veg21-pumpkins.jpg";
import img22 from "../assets/veg22-corn.jpg";
import img23 from "../assets/veg23-mushrooms.jpg";

const vegs = [
  { id: 1, img: img1, text: "Spinach", price: "₹30 per Bunch" },
  { id: 2, img: img2, text: "Carrots", price: "₹50 per Kg" },
  { id: 3, img: img3, text: "Green Beans", price: "₹100 per Kg" },
  { id: 4, img: img4, text: "Potatoes", price: "₹35 per Kg" },
  { id: 5, img: img5, text: "Tomatoes", price: "₹27 per Kg" },
  { id: 6, img: img6, text: "Green Chillies", price: "₹45 per Kg" },
  { id: 7, img: img7, text: "Capsicum", price: "₹55 per Kg" },
  { id: 8, img: img8, text: "Onions", price: "₹40 per Kg" },
  { id: 9, img: img9, text: "Ginger", price: "₹220 per Kg" },
  { id: 10, img: img10, text: "Garlic", price: "₹140 per Kg" },
  { id: 11, img: img11, text: "Coriander", price: "₹20 per Bunch" },
  { id: 12, img: img12, text: "Beetroot", price: "₹45 per Kg" },
  { id: 13, img: img13, text: "Radish", price: "₹40 per Kg" },
  { id: 14, img: img14, text: "Ladies Finger", price: "₹47 per Kg" },
  { id: 15, img: img15, text: "Cabbage", price: "₹25 per Kg" },
  { id: 16, img: img16, text: "Cauliflower", price: "₹45 per Kg" },
  { id: 17, img: img17, text: "Cucumber", price: "₹30 per Kg" },
  { id: 18, img: img18, text: "Brinjal", price: "₹70 per Kg" },
  { id: 19, img: img19, text: "Curry Leaves", price: "₹15 per Bunch" },
  { id: 20, img: img20, text: "Green Peas", price: "₹90 per Kg" },
  { id: 21, img: img21, text: "Pumpkins", price: "₹25 per Kg" },
  { id: 22, img: img22, text: "Corn", price: "₹130 per Kg" },
  { id: 23, img: img23, text: "Mushrooms", price: "₹100 per Kg" },
];

const Vegetables = () => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {vegs.map((veg) => {
        const { id, img, text, price } = veg;
        return (
          <Link
            key={id}
            to={"/vegetables"}
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
            <div className="flex gap-4 items-center p-4 ">
              <button className="btn btn-neutral rounded">Buy Now</button>
              <button className="btn btn-neutral rounded ">Add to Cart</button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Vegetables;
