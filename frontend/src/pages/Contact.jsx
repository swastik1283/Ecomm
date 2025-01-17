import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={'Contact'} text2={'Us'}/>
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img className="w-full md:max-w-[480px]" src={assets.contact_img}alt=""/>
                  
                  <div className="flex flex-col justify-center items-start space-y-6">
                    <p className="font-semibold text-xl text-gray-600">Our Store</p>
                    <p className="text-gray-500">86239Nubjbviwv<br/>suite 549u9</p>
                    <p className="text-gray-500">Tel:9029095093 <br/>Email: swastojwn@gmail</p>
                    <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
                    <p className="text-gray-500"> Learn more about our teams and job opening</p>
                    <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-allduration-500 ">Explore Jobs</button>
                    </div>
                    </div>
                    <NewsletterBox/>
            
        </div>
    );
};

export default Contact;