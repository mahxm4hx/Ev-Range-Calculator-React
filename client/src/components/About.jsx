import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">About the EV Range Calculator</h1>
      </header>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome to the EV Range Calculator!</h2>
        <p className="text-lg text-gray-700">
          The EV Range Calculator is designed to help electric vehicle owners and enthusiasts estimate the range of their electric vehicles based on various parameters. Whether you're planning a road trip or trying to optimize your vehicle’s energy usage, this tool gives you a quick and reliable estimate of how far you can go on a single charge.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800">Features:</h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Estimate your EV's range based on battery capacity, energy consumption, and driving conditions.</li>
          <li>Get accurate calculations to make better decisions about your travel routes and charging stops.</li>
          <li>Easy-to-use interface for quick input and result display.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800">How It Works:</h3>
        <p className="text-lg text-gray-700">
          To calculate your EV's range, simply input the battery capacity (in kWh) and the average energy consumption (in Wh/km). Our algorithm takes into account these values and provides an estimated range based on typical driving conditions.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800">Why Use It?</h3>
        <p className="text-lg text-gray-700">
          With the increasing popularity of electric vehicles, it's essential to have tools that help optimize their use. This calculator is perfect for anyone looking to better plan their trips, optimize energy usage, and ensure a smooth, worry-free ride.
        </p>
      </section>

      <footer className="text-center mt-12 text-gray-600">
        <p>Created with ❤️ by Mahesh</p>
      </footer>
    </div>
  );
};

export default About;
