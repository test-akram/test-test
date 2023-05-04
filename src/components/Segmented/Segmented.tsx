"use client"
import { useRef, useState } from "react"
import { Carousel } from '@/components/Carousel/Carousel'

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
      <p className="selected-item">Selected: {selectedValue2}</p>
    </div>
  );
};

export default Segmented
