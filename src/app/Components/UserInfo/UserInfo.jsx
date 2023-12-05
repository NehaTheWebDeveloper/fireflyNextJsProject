import React from "react";

const UserInfo = () => {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
          <div>
            <h2>
              Name:<span>Neha</span>
            </h2>
            <h2>
              Email:<span>neha@gmail.com</span>
            </h2>
            <button className="bg-red-500 text-white font-bold px-6 py-2">Log Out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
