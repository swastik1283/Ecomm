import { assets } from "../assets/assets"


const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt=""/>
            <p className="w-full md:w-2/3 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores facere eos, assumenda libero expedita exercitationem eius voluptatibus et magni explicabo qui tempore incidunt perspiciatis quo maiores, sed voluptas unde.
            </p>

        </div>
        <div>
        <p className="text-xl font-medium mb-5">Company</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home </li>
          <li>About</li>
          <li>Delievery</li>
          <li> Privacy Policy</li>

        </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-2346964 76</li>
            <li>everyting@forever.com</li>
          </ul>
        </div>
        
      </div>
      <div>
        <hr/>
        <p className="py-5 text-sm text-center">Copyright 2024 @hallmark reserved </p>
       <p/>
      </div>
    </div>
   
  )
}

export default Footer
