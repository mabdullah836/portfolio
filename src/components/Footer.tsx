// @flow strict
import Link from 'next/link';
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
   <div className='p-5'>
    <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/muhammad-abdullah-8512012b4/" className="text-[#16f2b3]">Muhammad Abdullah</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/mabdullah836/portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
          
          </div>
        </div>
   </div>
  );
};

export default Footer;