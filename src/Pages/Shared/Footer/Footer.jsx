import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (
      <footer>
       <div className="flex">
       <div className="bg-[#1F2937] text-white w-full text-center py-32">
        <h2 className="mb-6 text-2xl">Contact Us</h2>
        <p>123 ABS Street, Uni 21, Bangladesh</p>
        <p>+88123456789</p>
        <p>Mon - Fri: 08:00 - 22:00</p>
        <p>Sat - Sun: 10:00 - 23:00</p>
       </div>
       <div className="bg-[#111827] text-white w-full text-center py-32">
        <h2 className="mb-6 text-2xl">Follow US</h2>
        <p>Join us on social media</p>
        <p className="flex justify-center text-3xl mt-6 "> <BiLogoFacebook/> <BiLogoInstagram/> <BiLogoTwitter/> </p>
       </div>
       </div>
       <p className="text-center text-white py-4 bg-[#151515]">Copyright © CulinaryCloud {currentYear}. All rights reserved.</p>
      </footer>
    );
};

export default Footer;