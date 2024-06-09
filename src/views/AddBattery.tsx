import React, { useState } from 'react';

const AddBatteryAndVehicle: React.FC = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    bin: '',
    model: '',
    type: '',
    sn: '',
  });

  const [vehicleInfo, setVehicleInfo] = useState({
    carPlate: '',
    make: '',
    model: '',
    vin: '',
  });

  const handleBatteryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBatteryInfo({
      ...batteryInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleInfo({
      ...vehicleInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Implement submission logic for both battery and vehicle here
    console.log('Battery Info:', batteryInfo);
    console.log('Vehicle Info:', vehicleInfo);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-section p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Add Vehicle</h2>
          <input 
            type="text" 
            name="carPlate"
            placeholder="Car Plate" 
            value={vehicleInfo.carPlate} 
            onChange={handleVehicleChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="make"
            placeholder="Make" 
            value={vehicleInfo.make} 
            onChange={handleVehicleChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="model"
            placeholder="Model" 
            value={vehicleInfo.model} 
            onChange={handleVehicleChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="vin"
            placeholder="VIN" 
            value={vehicleInfo.vin} 
            onChange={handleVehicleChange} 
            className="input input-bordered w-full mb-4"
          />
        </div>
        <div className="form-section p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Add Battery</h2>
          <input 
            type="text" 
            name="bin"
            placeholder="Battery BIN" 
            value={batteryInfo.bin} 
            onChange={handleBatteryChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="model"
            placeholder="Model" 
            value={batteryInfo.model} 
            onChange={handleBatteryChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="type"
            placeholder="Type" 
            value={batteryInfo.type} 
            onChange={handleBatteryChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="sn"
            placeholder="Serial Number" 
            value={batteryInfo.sn} 
            onChange={handleBatteryChange} 
            className="input input-bordered w-full mb-4"
          />
        </div>
      </div>
      <button onClick={handleSubmit} className="btn btn-primary w-full mt-4">Submit</button>
    </div>
  );
}

export default AddBatteryAndVehicle;
