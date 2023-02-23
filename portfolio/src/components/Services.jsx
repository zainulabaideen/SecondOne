import {content} from '../Content'
const Services = () => {
  const {services}= content
  return <section id='services' >
    <div className="px-5 py-20 md:container">
      <h2  data-aos='fade-down' className='title'>{services.title}</h2>
      <h4  data-aos='fade-down' className='subtitle'>{services.subtitle}</h4>
      <br />
      <div className='flex gap-5 justify-between flex-wrap group mt-12'> 
  {
    services.service_content.map((content,i )=>(
    <div key={i}
    data-aos='fade-up'
         data-aos-delay={i*400}
    className='min-w-[14rem] duration-300 cursor-pointer border-2 flex-1 rounded-xl text-center group-hover:blur-sm hover:!blur-none bg-bg_light_primary p-6 border-slate-200'>
      <img src={content.logo} alt="..." className='mx-auto ' width='35px' height='55px'/>
      <h6 className='my-3'>{content.title}</h6>
      <p className='leading-7'>{content.para}</p>
      </div>
    ))
  }
      </div>

    </div>
  
  </section>;
};

export default Services;
