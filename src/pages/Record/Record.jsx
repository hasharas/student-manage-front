import React, { useState } from 'react';
import userService from '../services/UserService';

const Record = () => {
      const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            dob: '',
            contactNo: '',
            studentId: ''
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const response = await userService.createUser(formData);
                  console.log('User created successfully:', response);
                  alert('User created successfully!');
            } catch (error) {
                  console.error('Error creating user:', error);
                  alert('Failed to create user.');
            }
      };

      return (
            <form onSubmit={handleSubmit} className="mx-auto bg-gray-300 shadow-md rounded p-6">
                  <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 mx-4 sm:mx-[50px] mb-5 gap-8 sm:gap-[10px]">
                              <div className="mb-2 mx-5">
                                    <label className="block text-base font-medium text-gray-700">First Name</label>
                                    <input
                                          type="text"
                                          name="firstName"
                                          placeholder="First Name"
                                          value={formData.firstName}
                                          onChange={handleChange}
                                          className="mt-1 px-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div className="mb-2 mx-5">
                                    <label className="block text-base font-medium text-gray-700">Last Name</label>
                                    <input
                                          type="text"
                                          name="lastName"
                                          placeholder="Last Name"
                                          value={formData.lastName}
                                          onChange={handleChange}
                                          className="mt-1 px-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div className="mb-4 mx-5">
                                    <label className="block text-base font-medium text-gray-700">Date of Birth</label>
                                    <input
                                          type="date"
                                          name="dob"
                                          placeholder="Date of Birth"
                                          value={formData.dob}
                                          onChange={handleChange}
                                          className="mt-1 px-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div className="mb-4 mx-5">
                                    <label className="block text-base font-medium text-gray-700">Contact No</label>
                                    <input
                                          type="text"
                                          name="contactNo"
                                          placeholder="0712345678"
                                          value={formData.contactNo}
                                          onChange={handleChange}
                                          className="mt-1 px-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                              <div className="mb-4 mx-5">
                                    {/* <label className="block text-base font-medium text-gray-700">Student Id</label>
                                    <input
                                          type="text"
                                          name="studentId"
                                          placeholder="user-123456"
                                          value={formData.studentId}
                                          onChange={handleChange}
                                          className="mt-1 px-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    /> */}
                              </div>
                              <div className="border-dashed border-2 mx-5 border-gray-500 flex justify-center items-center h-[70px] cursor-pointer">
                                    <p className="text-lg font-semibold text-gray-500">+ Add Image</p>
                              </div>
                              <div className="mb-4 mx-5">
                                    <button
                                          type="submit"
                                          className="w-full text-base bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
                                    >
                                          Submit Information
                                    </button>
                              </div>
                              <div className="mb-4 mx-5">
                                    <button
                                          type="button"
                                          className="w-full bg-gray-500 text-base text-white py-2 px-4 rounded hover:bg-gray-600"
                                    >
                                          Submit Image
                                    </button>
                              </div>
                        </div>
                  </div>
            </form>
      );
};

export default Record;
