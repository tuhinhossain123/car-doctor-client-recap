import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[100vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0.00] h-full">
          <div className="text-white space-y-3 w-3/4 pl-6">
            <h2 className=" text-3xl md:text-5xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] text-white border-none mr-3">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0.00] h-full">
          <div className="text-white space-y-3 w-3/4 pl-6">
            <h2 className=" text-3xl md:text-5xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] text-white border-none mr-3">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0.00] h-full">
          <div className="text-white space-y-3 w-3/4 pl-6">
            <h2 className=" text-3xl md:text-5xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] text-white border-none mr-3">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0.00] h-full">
          <div className="text-white space-y-3 w-3/4 pl-6">
            <h2 className=" text-3xl md:text-5xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] text-white border-none mr-3">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
