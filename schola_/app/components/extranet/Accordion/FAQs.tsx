"use client";
import React, { useState } from "react";
import styles from "./FAQs.module.css";

interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="accordion collapse-plus bg-base-200">
          <div
            className={`accordion-header collapse-title text-xl font-medium mb-10 ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div className="accordion-content collapse-content mb-5">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const accordionItems = [
  {
    title: "Item 1",
    content: "Content for Item 1",
  },
  {
    title: "Item 2",
    content: "Content for Item 2",
  },
  // Add more items as needed
];

const FAQs: React.FC = () => {
  return (
    <div className={`${styles.navContainer} mx-auto pt-28`}>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default FAQs;
