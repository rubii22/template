import Image from "next/image";

const Services = () => {
  return (
    <section className="py-2 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <p className="text-sm uppercase text-gray-400 tracking-widest">Service</p>
          <h2 className="text-4xl font-bold text-gray-800">Our Vision & Our Goal</h2>
        </div>

        <div className="grid md:grid-cols-3 ">
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 min-h-[450px] max-w-[300px] mx-auto flex flex-col justify-between">
            <div>
              <div className="mb-6 flex justify-center">
                <Image
                  src="/Activity.png"
                  alt="Graphic Design"
                  height={30}
                  width={30}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Graphic Design</h3>
              <p className="text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus.
              </p>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 mt-8 rounded-lg hover:bg-orange-600 transition-colors duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 min-h-[450px] max-w-[300px] mx-auto flex flex-col justify-between">
            <div>
              <div className="mb-6 flex justify-center">
                <Image
                  src="/Video.png"
                  alt="Video Editing"
                  height={30}
                  width={30}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Video Editing</h3>
              <p className="text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus.
              </p>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 mt-8 rounded-lg hover:bg-orange-600 transition-colors duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 min-h-[450px] max-w-[300px] mx-auto flex flex-col justify-between">
            <div>
              <div className="mb-6 flex justify-center">
                <Image
                  src="/Chart.png"
                  alt="Digital Marketing"
                  height={30}
                  width={30}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
              <p className="text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus.
              </p>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 mt-8 rounded-lg hover:bg-orange-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Blocks and Components Section */}
<div className="flex flex-col lg:flex-row items-center bg-white py-12 px-6">
  <div className="lg:w-1/2 w-full text-left lg:pl-12 mb-6 lg:mb-0">
    <h3 className="text-2xl font-bold text-blue-900 mb-4">
      Many Blocks and Components
    </h3>
    <p className="text-gray-600 text-base mb-6">
      Startup Framework contains components and complex blocks which can easily 
      be integrated into almost any design.
    </p>
    <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all">
      Explore
    </button>
  </div>

  <div className="flex justify-center">
    <Image
      src="/Photo@2x.png"
      alt="Blocks and Components"
      height={700}
       width={700}
      className="rounded-lg shadow-lg"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Services;
