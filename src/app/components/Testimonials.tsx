import Image from "next/image";

const testimonials = [
  {
    name: "Rayhan Curran",
    feedback:
      "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support.",
    Image: "/rahyan curran.png", // Replace with actual image path
  },
  {
    name: "Kayley Frame",
    feedback:
      "As a business targeting high net worth individuals, we were looking for a slick, cool and minimalistic design for our website.",
    Image: "/kayley frame.png", // Replace with actual image path
  },
  {
    name: "Gene Whitfield",
    feedback:
      "The most important part of the Startup Framework is the samples.",
    Image: "/gene whit.png", // Replace with actual image path
  },
  {
    name: "Allan Kim",
    feedback:
      "I’ve built my website with Startup just in one day, and it was ready-to-go.",
    Image: "/allan kim.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-center text-3xl text-[#0B1B35] font-bold mb-12">
          What Clients say about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg flex flex-col items-center text-center"
            >
              <Image
                src={testimonial.Image}
                alt={`${testimonial.name}'s picture`}
                width={64}
                height={64}
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg text-[#0B1B35] mb-4">
                {testimonial.feedback}
              </p>
              <h4 className="text-lg font-DM Sans text-[#97a4b9]">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
