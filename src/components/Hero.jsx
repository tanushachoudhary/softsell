import { useState } from "react";

// Hero Component with improved gradient and animations
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Sell Unused Software
          </span>
          <br />
          <span className="text-yellow-300">Licenses Easily</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Convert idle software into cash with SoftSell's secure resale
          platform. Get the best market rates with guaranteed secure
          transactions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-blue-50">
            <span className="flex items-center gap-2">💼 Sell My Licenses</span>
          </button>
          <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
