'use client';
import { useState } from 'react';

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Personal & Business Banking",
      description: "24/7 banking solutions tailored to individuals and enterprises alike.",
    },
    {
      title: "Loans",
      description: "Personal, home, and business loans with competitive interest rates.",
    },
    {
      title: "Investment Services",
      description: "Grow your wealth through a variety of safe investment options.",
    },
    {
      title: "Insurance",
      description: "Comprehensive insurance services for your life, health, and property.",
    },
    {
      title: "Forex & International Banking",
      description: "Seamless international banking, remittance and forex exchange.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-4">Fintract Global offers a wide range of services to meet your financial needs.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{service.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
