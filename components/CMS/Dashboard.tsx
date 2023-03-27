import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white pt-52">
      <div className="p-10 pb-10 mx-8 bg-softGray/80">
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-softBlack/80">
              Dashboard
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 xl:grid-cols-4">
            <div className="px-8 py-6 space-y-5 font-medium bg-white rounded-sm text-softBlack/80">
              <div className="text-sm">Total User</div>
              <div className="text-3xl font-bold">{/* {report?.user} */}</div>
            </div>
            <div className="px-8 py-6 space-y-5 font-medium bg-white rounded-sm text-softBlack/80">
              <div className="text-sm">Total Product</div>
              <div className="text-3xl font-bold">
                {/* {report?.product} */}
              </div>
            </div>
            <div className="px-8 py-6 space-y-5 font-medium bg-white rounded-sm text-softBlack/80">
              <div className="text-sm">Total Order</div>
              <div className="text-3xl font-bold">
                {/* {report?.transaction} */}
              </div>
            </div>

            <div className="flex-col justify-between hidden row-span-3 p-6 bg-white rounded-sm xl:flex">
              <div className="text-base font-semibold xl:text-xl text-softBlack/80">
                Category Product
              </div>
              {/* <Doughnut
              data={data}
              className={"w-full h-full"}
              options={option}
            /> */}
              <div className="flex items-center p-3 rounded-sm bg-softGray/80">
                <div className="p-3 rounded-sm bg-white flex items-center w-[50%]">
                  <div className="">
                    <div className="text-xl font-semibold text-center text-softBlack/80">
                      {/* {((report?.sold / report?.transaction) * 100).toFixed(1)}% */}
                    </div>
                    <div className="text-xs font-medium text-softBlack/70">
                      Weekly
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-2xl font-semibold text-softBlack/80">
                    {/* {report?.sold} */}
                  </div>
                  <div className="text-xs font-medium text-softBlack/70">
                    Total Sold
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 row-span-2 p-8 space-y-8 bg-white rounded-sm">
              <div className="text-xl font-semibold text-softBlack/80">
                Revenue
              </div>
              {/* <Bar data={datas} height={102} options={options} /> */}
            </div>
            {/* <div className="col-span-3 row-span-2 bg-white rounded-sm h-96"></div>
          <div className="row-span-3 bg-white rounded-sm"></div>
          <div className="bg-white rounded-sm h-60"></div>
          <div className="bg-white rounded-sm h-60"></div>
          <div className="bg-white rounded-sm h-60"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
