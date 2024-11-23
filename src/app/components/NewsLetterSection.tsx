import Image from "next/image";

const NewsLetterSection = () => {
  return (
    <section className="bg-gray-50 h-screen py-2">
     <div className="max-w-7xl mx-auto px-6">
      
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Our Team</p>
        <h2 className="text-3xl font-extrabold text-gray-800">Subscribe Our Newsletter</h2>
      </div>
      <div className=" flex justify-center items-center">
        <div className=" flex-1 w-72 h-72 ">
        <Image
              src="/Frame.png"
              alt="Members"
              width={400}
              height={200}
              className="ml-36"
            />
        </div>
        <div className="flex-1 justify-between">
            <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit corrupti accusantium eligendi non cumque provident exercitationem dolore laboriosam vero, praesentium nihil ducimus totam voluptatibus ipsum debitis iure facilis assumenda nam.</p>

            <div className="flex flex-col gap-8 items-center space-x-4">
            <input
              type="email"
              placeholder="Your E-mail here..."
              className="flex-grow w-[550px] px-4 py-3 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="px-6 py-3 w-[550px] bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Subscribe Our Newsletter
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
export default NewsLetterSection;