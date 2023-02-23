import {content} from "../Content"
const Hero = () => {
  const {hero} = content

  return (
  <section id="home" className="overflow-hidden ">
    <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center" >
      <div 
      data-aos="slide-left"
      data-aos-delay="1200"
      className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
        <h1 className="rotate-90 absolute
         top-[50%] right-[-15%] text-[#EAF2FA]">
          {hero.firstName}
        {""}
        <span className="text-dark_primary ">
          {hero.LastName}
        </span>
        </h1>
      </div>
      {/* {first} */}
    <div className="pb-16 px-6 pt-5"
    data-aos='fade-down'>
      <h2>{hero.title}</h2>
      <br />
      <div className="flex justify-end">
    <a href="#contact">    <button className="btn"  >
          {hero.btnText }
        </button>
        </a> 
      </div>
      <div className="flex flex-col gap-10 mt-10">
        
       
       <div 
          data-aos='fade-down'
          

           className={`flex items-center w-80 gap-5  flex-row-reverse text-right`}>
            <p>   Capable of Building Websites with Front and Back end Operations.</p>
            <p> <a href="
            mycv.pdf" download="mycv.pdf"><btn className="btn ">Resume</btn></a></p>
          </div>
        
        
      </div>
    </div>
    {/* {second} */}
    <div className="md:h-[37rem] h-96 mb-[-7px]">
      <img src={hero.image} alt="..." className="h-full object-cover"
      data-aos='slide-up'/>
    </div>
    </div>
    </section>
    );
};

export default Hero;
