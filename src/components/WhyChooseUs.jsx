const benefits = [
  {
    icon: "⚡",
    title: "Lightning Fast Payouts",
    desc: "Get your money within 48 hours of completing the transaction. No waiting, no delays.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: "🔒",
    title: "Bank-Level Security",
    desc: "Your transactions are protected with enterprise-grade encryption and secure payment processing.",
    color: "from-green-400 to-blue-500",
  },
  {
    icon: "📈",
    title: "Maximum Value",
    desc: "Our AI-powered valuation engine ensures you get the best possible market rate for your licenses.",
    color: "from-blue-400 to-purple-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Why Choose SoftSell
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best experience for selling your
            software licenses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-4xl filter drop-shadow-sm">
                    {benefit.icon}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
