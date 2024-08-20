import React from 'react';

const RegistrationFeeSection = () => {
  return (
    <div className="w-full px-10 mx-auto my-12">
      <table className="table-auto w-full text-left text-sm">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="px-4 py-2">Registration Fee</th>
            <th className="px-4 py-2">Indian (INR)</th>
            <th className="px-4 py-2">Foreign (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-black">
            <td className="border px-4 py-2">Faculty/Industry/Student</td>
            <td className="border px-4 py-2">4000*</td>
            <td className="border px-4 py-2">250</td>
          </tr>
          <tr className="bg-blue-100 text-black">
            <td className="border px-4 py-2">Early bird Registration</td>
            <td className="border px-4 py-2">3000*</td>
            <td className="border px-4 py-2">200</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm mt-4 ml-2">*inclusive of GST</p>
    </div>
  );
};

export default RegistrationFeeSection;
