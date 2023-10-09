import { FaShoppingCart } from "react-icons/fa";

const Conference = () => {
      return (
            <div className="grid grid-cols-1 lg:grid-cols-3 py-16">
                  <div>
                        <img className="w-full" src="https://i.ibb.co/jJj9Rh3/conterence-img.jpg" alt="" />
                  </div>
                  <div className="col-span-2 text-white p-8 lg:pl-10 order-1 my-4 lg:my-0 ">
                        <h2 className="text-xl my-2">Hackathon Conference</h2>
                        <h3 className="text-4xl font-bold my-4">Stay Informed About Speakers</h3>
                        <p className="text-base my-3 font-light text-slate-400">Stay ahead of the curve and never miss out on our exciting speaker announcements. Our conference is proud to host a diverse lineup of industry experts, thought leaders, and innovators. Be the first to know when we reveal new speakers who will inspire, educate, and empower you. Keep your finger on the pulse of our event by subscribing to our newsletter, following us on social media, or checking our website regularly. Join us in shaping an unforgettable conference experience with our remarkable lineup of speakers.</p>
                        <button className="btn btn-secondary my-6"><FaShoppingCart></FaShoppingCart> Purchase Ticket</button>

                  </div>
                  
            </div>
      );
};

export default Conference;