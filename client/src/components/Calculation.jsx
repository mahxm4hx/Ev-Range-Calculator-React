import React, { useState } from 'react';
import Footer from './Footer';

const vehicleOptions = {
  '': { battery: '', soc: '', consumption: '' },
  'Tesla Model 3 (Standard Range)': { battery: 57.5, consumption: 137 },
  'Nissan Leaf': { battery: 40, consumption: 170 },
  'Hyundai Kona Electric': { battery: 64, consumption: 147 },
  'MG ZS EV': { battery: 50, consumption: 160 },
};

const EVRangeCalculator = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [batterySize, setBatterySize] = useState('');
  const [stateOfCharge, setStateOfCharge] = useState('');
  const [consumption, setConsumption] = useState('');
  const [range, setRange] = useState(null);

  const handleVehicleChange = (e) => {
    const vehicle = e.target.value;
    setSelectedVehicle(vehicle);
    const { battery, soc, consumption } = vehicleOptions[vehicle];
    setBatterySize(battery);
    setStateOfCharge(soc);
    setConsumption(consumption);
  };

  const handleCalculate = () => {
    const battery = parseFloat(batterySize);
    const soc = parseFloat(stateOfCharge);
    const consumptionWh = parseFloat(consumption);

    if (battery > 0 && soc > 0 && consumptionWh > 0) {
      const availableEnergy = battery * (soc / 100); // in kWh
      const consumptionKWhPerKm = consumptionWh / 1000;
      const estimatedRange = availableEnergy / consumptionKWhPerKm;
      setRange(estimatedRange.toFixed(2));
    } else {
      setRange(null);
    }
  };

  return (
    <div className="mb-10 pb-10">
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">EV Range Calculator</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Input Section */}
        <div className="flex-1 p-4 border-r">
          <h3 className="text-lg font-semibold mb-4">🔧 Input</h3>

          <div className="mb-4">
            <label className="block font-medium mb-1">Select EV</label>
            <select
              value={selectedVehicle}
              onChange={handleVehicleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">-- Select a Vehicle --</option>
              {Object.keys(vehicleOptions)
                .filter((key) => key !== '')
                .map((vehicle) => (
                  <option key={vehicle} value={vehicle}>
                    {vehicle}
                  </option>
                ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Battery Size (kWh)</label>
            <input
              type="number"
              value={batterySize}
              onChange={(e) => setBatterySize(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="e.g., 75"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">State of Charge (%)</label>
            <input
              type="number"
              value={stateOfCharge}
              onChange={(e) => setStateOfCharge(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="e.g., 80"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">EV Consumption (Wh/km)</label>
            <input
              type="number"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="e.g., 150"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Calculate Range
          </button>
        </div>

        {/* Output Section */}
        <div className="flex-1 p-4">
          <h3 className="text-lg font-semibold mb-4">📊 Output</h3>
          {range !== null ? (
            <div className="text-2xl text-blue-700 font-bold">
              Estimated Range: {range} km
            </div>
          ) : (
            <div className="text-gray-600">Enter all values and click "Calculate Range"</div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default EVRangeCalculator;
