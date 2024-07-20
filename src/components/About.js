import AboutIMg from '../assests/about.png';
export default function About() {
  const config  = {
    line1 : "Hello everyone I am currently pursuing UG degree In the branch of Computer science.",
    line2 :"I'm currently developing myskills in programming language, problem solving and analyticalthinking. Proficient typing and transcription. Organisational andtime management abilities.",
    line3 :"I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more."
  }


    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5'id='about'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutIMg} />
            </div>
            <div className=' md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-5'>{config.line3}</p>
                </div>
            </div>
        </section>
    )
} 
