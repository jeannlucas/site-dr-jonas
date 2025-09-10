const InformationSummary = ({ item }) => {
  return (
    <div className="bg-[#B4CBE9] rounded-lg shadow-md text-center flex flex-col justify-center items-center w-[130px] sm:w-[160px] lg:w-[200px] h-[90px] sm:h-[100px] lg:h-[110px] transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-gray-700">
        {item.description}
      </p>
      <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-gray-500 mt-1">
        {item.title}
      </p>
    </div>
  );
};

export default InformationSummary;
