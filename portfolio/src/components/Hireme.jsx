import {content} from '../Content'
const Hireme = () => 
{
  const {Hireme}=content
  return <section className=''
  >
    <div className='md:container px-5 pt-16'>
      <h2 className='title'  data-aos='fade-down'>
        {Hireme.title}
      </h2>
      <h4 className='subtitle' data-aos='fade-down'>
        {Hireme.subtitle}
      </h4>
      <br />
      <div className="flex items-center md:flex-row flex-col-reverse">
        <img src={Hireme.image1} alt="...."  className='max-w-sm md:block hidden'  data-aos='fade-right'/>
                <div  data-aos='fade-left' className="border-2 border-dark_primary mzx-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]">
          <p className='leading-7'>{Hireme.para}</p>
       <a href="#contact">   <button className='btn bg-dark_primary text-white hover:bg-dark_primary hover:scale-105'>{Hireme.btnText}</button>
       </a></div>
      </div>
    </div>

  </section>;
};

export default Hireme;
