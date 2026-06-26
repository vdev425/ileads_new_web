"use client";

import React, { useEffect, useRef, useState } from "react";

const OdometerComponent = ({ max, minDigits = 0 }) => {
  const wrapperRef = useRef(null);
  const digitElsRef = useRef([]);
  const digitInstancesRef = useRef([]);
  const [initialized, setInitialized] = useState(false);

  const digitsToRender = Math.max(minDigits || 0, String(Math.abs(max || 0)).length || 1);

  useEffect(() => {
    import("odometer").then((Odometer) => {
      if (!Odometer) return;
      digitElsRef.current.forEach((el, idx) => {
        if (el && !digitInstancesRef.current[idx]) {
          digitInstancesRef.current[idx] = new Odometer.default({
            el,
            value: 0,
            animation: "count",
          });
        }
      });
      setInitialized(true);
      // Immediately update to the target value to ensure correct digit count is visible
      const padded = String(Math.abs(max || 0)).padStart(digitsToRender, "0");
      for (let i = 0; i < digitsToRender; i++) {
        const digit = parseInt(padded[i], 10) || 0;
        const instance = digitInstancesRef.current[i];
        if (instance) {
          instance.update(digit);
        }
      }
    });
  }, [digitsToRender]);

  // Keep digits synced if props change (no intersection observer needed)
  useEffect(() => {
    if (!initialized) return;
    const padded = String(Math.abs(max || 0)).padStart(digitsToRender, "0");
    for (let i = 0; i < digitsToRender; i++) {
      const digit = parseInt(padded[i], 10) || 0;
      const instance = digitInstancesRef.current[i];
      if (instance) {
        instance.update(digit);
      }
    }
  }, [initialized, digitsToRender, max]);

  return (
    <span ref={wrapperRef} style={{ display: "inline-flex", gap: 0 }}>
      {Array.from({ length: digitsToRender }).map((_, idx) => (
        <span
          key={`digit-${idx}`}
          ref={(el) => {
            digitElsRef.current[idx] = el;
          }}
          className="odometer"
        >
          0
        </span>
      ))}
    </span>
  );
};

export default OdometerComponent;
