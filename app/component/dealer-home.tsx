"use client"

import DealerCard from "./dealer-card";

const DealerHome = () => {
  return (
    <>
          <div className="flex justify-between items-center px-8 py-4 mt-4">
        <div className="w-24 h-12">
          <img
            className="w-24 h-12 rounded-lg"
            src="https://static.dezeen.com/uploads/2019/04/ikea-logo-new-hero-1-852x479.jpg"
            alt=""
          />
        </div>
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-[#F7F9FC] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M220.07,176.94C214.41,167.2,206,139.73,206,104a78,78,0,1,0-156,0c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198H90.48a38,38,0,0,0,75,0H208a14,14,0,0,0,12.06-21.06ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218Zm81.71-33a1.9,1.9,0,0,1-1.7,1H48a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.87,170,62,139.69,62,104a66,66,0,1,1,132,0c0,35.68,8.14,65.95,15.71,79A2,2,0,0,1,209.71,185Z"></path>
            </svg>
          </div>
          <div className="px-4 gap-3 h-12 bg-[#F7F9FC] rounded-full flex justify-center items-center">
            <div>
              <img
                className="w-5 h-6"
                src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?t=st=1739517014~exp=1739520614~hmac=34990ead9b8e26b11a4a7bf9c2f9a806f043939a0a7378aeeb1f19504fff264a&w=740"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-3xl px-8 py-2">
        <p>Manage your Inventory with ease! 🚀</p>
        </div>
      <div className="flex justify-between px-4">
        <DealerCard
          count="110"
          title1="Total"
          title2="Inventory"
         
        />
        <DealerCard
          count="110"
          title1="Sold"
          title2="Items"

        />
      </div>
      <div className="flex justify-between px-4">
        <DealerCard
          count="110"
          title1="Pending"
          title2="Issues"

        />
        <DealerCard
          count="110"
          title1="Active"
          title2="Warranty"

        />
      
      </div>
    </>
  );
};

export default DealerHome;
