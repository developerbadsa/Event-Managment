import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

      const [services, setServices] = useState([]);

      useEffect(() => {
            fetch('https://raw.githubusercontent.com/developerbadsa/news-json-file/main/services.json')
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, [])


      return (
            <div className="py-40">

                  <h2 className="text-3xl text-center  mb-8 font-bold text-white">services</h2>
                  <div className="bg-transparent grid grid-cols-1 lg:grid-cols-3 gap-12 px-8">
                        {
                              services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                  </div>

            </div>
      );
};

export default Services;