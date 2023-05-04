"use client"
import { useRef, useState } from "react"
import Carousel from '@/components/Carousel/Carousel'


const Segmented = () => {
  const [selectedValue1, setSelectedValue1] = useState("complete")
  const [selectedValue2, setSelectedValue2] = useState("complete")

  return (
    <div className="container">
      <Carousel
        name="group-2"
        callback={(val) => setSelectedValue2(val)}
        controlRef={useRef()}
        defaultIndex={1}
        segments={[
          {
            label: "First",
            value: "first",
            ref: useRef()
          },
          {
            label: "Second",
            value: "second",
            ref: useRef()
          },
          {
            label: "Third",
            value: "third",
            ref: useRef()
          }
        ]}
      />
      <div className="mt-8 space-y-2 sm:mt-8 sm:space-y-0  lg:mx-auto xl:max-w-none xl:mx-0"><div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 border border-pink-500">
      <div className="p-6">
                  <h2 className="text-2xl leading-6 font-semibold text-white">
                  {selectedValue2}
                  </h2>
                  <p className="mt-4 text-zinc-300">{selectedValue2}</p>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                    {selectedValue2}
                    </span>
                    <span className="text-base font-medium text-zinc-100">{selectedValue2}
                    </span>
                  </p>
                  </div>
</div></div>
    </div>
  );
};

export default Segmented
