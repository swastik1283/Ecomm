import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'Us'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p>forwever is really true </p>
          <p> wfbwjbf </p>
          <b className="text-gray-800">Our Mission</b>
          <p> wnjwejihwi</p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'Why'} text2={'Choose us'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">We wvusbhuijeb</p></div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6">
            <b>Convenience</b>
            <p className="text-gray-600"> with our friemd;y ...</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-7">
            <b>Exceptional customer service</b>
            <p className="text-gray-600"> our tecam djnjbkjsrbkje</p>
          </div>
          </div>
          <NewsLetterBox/>
      </div>
  
  )
}

export default About
