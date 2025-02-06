import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row bg-red-200">
      {/* LEFT  */}
      <div className="w-full lg:w-2/3">left</div>
       
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">right</div>
    </div>
  );
};

export default AdminPage;
