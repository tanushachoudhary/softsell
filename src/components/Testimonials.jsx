const testimonials = [
  {
    name: "Alex Morgan",
    role: "CTO",
    company: "TechNova",
    quote:
      "SoftSell helped us recover significant value from unused tools. The process was seamless and the team was incredibly professional.",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "Jamie Lee",
    role: "IT Manager",
    company: "DataCore",
    quote:
      "Smooth, fast, and professional experience from start to finish. I'll definitely use SoftSell again for future license sales.",
    rating: 5,
    avatar: "👩‍💻",
  },
  {
    name: "Sarah Chen",
    role: "Operations Director",
    company: "InnovateCorp",
    quote:
      "The valuation was fair and the payout was exactly as promised. Highly recommend SoftSell to any business looking to monetize unused software.",
    rating: 5,
    avatar: "👩‍💼",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of satisfied customers who've turned unused licenses
            into revenue
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote marks */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">"</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              <p className="mb-6 italic text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role},{" "}
                    <span className="text-blue-600">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
