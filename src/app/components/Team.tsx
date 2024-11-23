import Image from "next/image";

const TeamSection = () => {
  return (
    <section className="bg-gray-50 h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
      
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Our Team</p>
          <h2 className="text-3xl font-extrabold text-gray-800">Meet The Team</h2>
        </div>
        <div className=' flex justify-center items-center gap-14'>
          <div className=' w-64 h-64'>
          <Image
              src="/Member 1 (1).png"
              alt="Members"
              width={500}
              height={500}
            />
          </div>
          <div className='w-64 h-64'>
          <Image
              src="/Members (3).png"
              alt="Members"
              width={500}
              height={500}
            />
          </div>
          <div className='w-64 h-64'>
          <Image
              src="/Members (4).png"
              alt="Members"
              width={500}
              height={500}
            />
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default TeamSection;