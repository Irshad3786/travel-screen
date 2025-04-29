import React, { useRef, useState } from "react";
import HotelCard from "./HotelCard";

const DragScroll = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // adjust speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="overflow-x-auto overflow-y-hidden whitespace-nowrap cursor-grab"
      style={{
        width: "100%",
        userSelect: "none",
      }}
    >
      <div className="flex m-2 gap-3">
        <div className="  font-mont  flex justify-center items-center text-[#0B0809] font-semibold ">
          <div className="bg-[#D3F462] -rotate-90  rounded-t-xl">
          <h1 className="p-2 pb-4">JAN</h1>
          </div>
          <div className="w-14 h-12 px-2  font-mont font-medium text-white border border-[#D3F462] rounded-e-lg">
          <h1>MON</h1>
          <h1>27</h1>
        </div>
        </div>


        <div className="w-14 h-12 px-2  font-mont  text-white bg-[#292929] flex flex-col justify-center items-center rounded-lg">
          <h1>TUE</h1>
          <h1>28</h1>
        </div>

        <div className="w-14 h-12 px-2  font-mont  text-white bg-[#292929] flex flex-col justify-center items-center rounded-lg">
          <h1>WED</h1>
          <h1>29</h1>
        </div>

        <div className="w-14 h-12 px-2  font-mont  text-white bg-[#292929] flex flex-col justify-center items-center rounded-lg">
          <h1>THU</h1>
          <h1>30</h1>
        </div>

        <div className="w-14 h-12 px-2  font-mont  text-white bg-[#292929] flex flex-col justify-center items-center rounded-lg">
          <h1>FRI</h1>
          <h1>31</h1>
        </div>


        <div className="  font-mont  flex justify-center items-center text-[#0B0809] font-semibold ">
          <div className="bg-[#808080] -rotate-90  rounded-t-xl">
          <h1 className="p-2 pb-4">FEB</h1>
          </div>
          <div className="w-14 h-12 px-2  font-mont font-medium text-white border border-[#292929] rounded-e-lg bg-[#292929]">
          <h1>MON</h1>
          <h1>27</h1>
        </div>
        </div>
        
        
      </div>


      
    </div>

  );
};

export default DragScroll;
