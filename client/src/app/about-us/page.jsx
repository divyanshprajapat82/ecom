import Link from "next/link";
import React from "react";
import CustumersSay from "../components/CustumersSay";

export default function page() {
  return (
    <>
      <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center border-b border-[#00000025]">
        <h1 className="text-[40px] font-bold">About us</h1>
        <p>
          <Link href="/">Home</Link>
          <span className="text-[#c7a473]"> {">"} About </span>
        </p>
      </div>
      <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center ">
        <img src="/images/aboutMain.jpg" className="w-full" alt="" />
        <div className="mt-4">
          <h1 className="text-[25px] font-bold">Welcome to Monsta!</h1>
          <p className="text-[15px]/[25px] text-[#555]">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum. Typi non
            habent claritatem insitam, est usus legentis in iis qui facit eorum
            claritatem.
          </p>
          <p className="text-[15px] mt-3 text-[#c7a473]">
            “There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.”
          </p>
        </div>
      </div>

      <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center">
        <h1 className="text-[25px] font-bold">Why chose us?</h1>
        <div className="flex flex-wrap justify-between gap-2">
          <div className="md:max-w-[350px] w-full text-center flex flex-col items-center">
            <img src="/images/smileLogo.jpg" width={100} alt="" />
            <h5>Creative Design</h5>
            <p className="text-[15px] text-[#555]">
              Erat metus sodales eget dolor consectetuer, porta ut purus at et
              alias, nulla ornare velit amet enim
            </p>
          </div>
          <div className="md:max-w-[350px] w-full text-center flex flex-col items-center">
            <img src="/images/homeLogo.jpg" width={100} alt="" />
            <h5>100% Money Back Guarantee</h5>
            <p className="text-[15px] text-[#555]">
              Erat metus sodales eget dolor consectetuer, porta ut purus at et
              alias, nulla ornare velit amet enim
            </p>
          </div>
          <div className="md:max-w-[350px] w-full text-center flex flex-col items-center">
            <img src="/images/usersLogo.jpg" width={100} alt="" />
            <h5>Online Support 24/7</h5>
            <p className="text-[15px] text-[#555]">
              Erat metus sodales eget dolor consectetuer, porta ut purus at et
              alias, nulla ornare velit amet enim
            </p>
          </div>
        </div>
      </div>

      <div className="md:max-w-[1100px] m-auto py-4 px-2 text-center">
        <div className="flex flex-wrap justify-between gap-2">
          <div className="md:max-w-[350px] w-full text-center flex flex-col items-center">
            <img src="/images/aboutImg-1.jpg" alt="" />
            <h5 className="mt-2">What Do We Do?</h5>
            <p className="text-[15px] text-[#555]">
              Mirum est notare quam littera gothica, quam nunc putamus parum
              claram, anteposuerit litterarum formas humanitatis per seacula
              quarta decima et quinta decima.
            </p>
          </div>
          <div className="md:max-w-[350px] w-full text-center flex flex-col items-center">
            <img src="/images/aboutImg-2.jpg" alt="" />
            <h5 className="mt-2">Our Mission</h5>
            <p className="text-[15px] text-[#555]">
              Mirum est notare quam littera gothica, quam nunc putamus parum
              claram, anteposuerit litterarum formas humanitatis per seacula
              quarta decima et quinta decima.
            </p>
          </div>
          <div className="md:max-w-[350px] w-full text-center flex flex-col items-center">
            <img src="/images/aboutImg-3.jpg" alt="" />
            <h5 className="mt-2">History Of Us</h5>
            <p className="text-[15px] text-[#555]">
              Mirum est notare quam littera gothica, quam nunc putamus parum
              claram, anteposuerit litterarum formas humanitatis per seacula
              quarta decima et quinta decima.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <CustumersSay />
      </div>
    </>
  );
}
