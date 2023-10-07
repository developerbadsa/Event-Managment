import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";



const ServiceDetails = () => {
      const data = useLoaderData()
      const { id } = useParams()


      const matchedService = data.find(match => match.id == id)

      const { name, image, price, big_description
      } = matchedService;

      console.log(matchedService)

      return (
            <div className="text-white max-w-7xl mx-auto">
                  <Navbar></Navbar>
                  <div className="flex justify-between items-center my-6">
                        <div className="flex-1">
                              <img className="w-full" src={image} alt={name} />
                        </div>
                        <div className="flex-1 px-12">
                              <h2 className="text-3xl font-bold my-6">{name}</h2>
                              <p className="text-base font-normal my-3 leading-16">{big_description}</p>
                              <button className="btn btn-secondary my-8">Purchase Deal ${price}</button>
                        </div>

                  </div>
            </div>
      );
};

export default ServiceDetails;