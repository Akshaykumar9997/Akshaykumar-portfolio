import websiteimg1 from '../assests/ecommerce-websites.jpg';
import websiteimg2 from '../assests/food-ecommerce.jpg';
import websiteimg3 from '../assests/website-blog.jpg';
export default function Projects() {

    const config = {
        projects: [
            {
                img: websiteimg1,
                desc: 'A Ecommerce website',
                link : 'https://github.com/'


            },
            {

                img: websiteimg2,
                desc: 'Food Ecommerce website like Swiggy',
                link : 'https://github.com/'

            },
            {
                img: websiteimg3,
                desc: 'A basic blog website',
                link : 'https://github.com/'

            }
        ]
    }


    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
                    <p>These are some of my projects. I have built these with React and Tailwindcss</p>
                </div>
            </div>
            <div className="w-full" >
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((projects) => (

                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={projects.img} />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>
                                    {projects.desc}
                                </p>

                                <div className='flex justify-center'>
                                   <a className='btn' target='_blank' href={projects.link}>View Projects</a> 
                                </div>

                            </div>
                        </div>

                    ))}


                </div>
            </div>
        </section>
    )
}  