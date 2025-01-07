"use client";

import SmoothScrollButton from "@/components/UI/SmoothScrollButton/SmoothScrollButton";
import styles from "./styles.module.scss";
import ExpandingBox from "@/components/UI/ExpandingBox/ExpandingBox";
import { useState } from "react";
const Hero = () => {
  const [openBox, setOpenBox] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenBox((prev) => (prev === id ? null : id));
  };

  const QUESTIONS_DATA = [
    {
      title: "General",
      questions: [
        {
          id: 1,
          question: "But I must explain to you how all this?",
          answer: "Mistaken idea of denouncing pleasure...",
        },
        {
          id: 2,
          question: "Nor again is there anyone who loves or pursues?",
          answer: "Mistaken idea of denouncing pleasure...",
        },
        {
          id: 3,
          question: "Who avoids a pain that produces no resultant pleasure?",
          answer: "Neque porro quisquam est...",
        },
        {
          id: 4,
          question: "Why is it important?",
          answer: "Pleasure itself is attractive, and painful situations...",
        },
        {
          id: 5,
          question: "What is Lorem Ipsum?",
          answer: "Lorem Ipsum is simply dummy text of the printing...",
        },
      ],
    },
    {
      title: "Portfolio and Dashboard",
      questions: [
        {
          id: 6,
          question: "What is the best way to track?",
          answer: "Portfolio tracking tips and tricks...",
        },
        {
          id: 7,
          question: "Can I connect my bank account?",
          answer: "Yes, you can connect multiple accounts...",
        },
        {
          id: 8,
          question: "How to enable notifications?",
          answer: "Go to your dashboard and enable notifications...",
        },
        {
          id: 9,
          question: "What currencies are supported?",
          answer: "All major currencies are supported, including USD, EUR...",
        },
        {
          id: 10,
          question: "Can I export my data?",
          answer: "Yes, you can export your data in CSV format...",
        },
      ],
    },
    {
      title: "Features",
      questions: [
        {
          id: 11,
          question: "What new features are coming soon?",
          answer: "Stay tuned for our next updates...",
        },
        {
          id: 12,
          question: "How to enable dark mode?",
          answer: "Go to settings and select 'Dark Mode'...",
        },
        {
          id: 13,
          question: "What integrations are available?",
          answer: "We support integrations with Zapier, Slack...",
        },
        {
          id: 14,
          question: "How to report a bug?",
          answer: "Please use our support portal to report any issues...",
        },
        {
          id: 15,
          question: "Can I customize my dashboard?",
          answer: "Yes, you can fully customize widgets and layout...",
        },
      ],
    },
  ];

  return (
    <section className={styles.general}>
      <div className={styles.general__container}>
        {/*  */}
        <div className={styles.general__content}>
          <h1 className={styles.general__content__title}>
            Frequently Asked Questions
          </h1>
          <p className={styles.general__content__text}>
            Are you an e-commerce business owner looking for the best bank
            account and card for your
            <br /> business? Slash is the right answer for you!
          </p>
        </div>

        <div className={styles.general__buttons}>
          <SmoothScrollButton
            className={styles.general__buttons_item}
            targetId="General"
          >
            General
          </SmoothScrollButton>
          <SmoothScrollButton
            className={styles.general__buttons_item}
            targetId="PortFolio and Dashboard"
          >
            PortFolio and Dashboard
          </SmoothScrollButton>
          <SmoothScrollButton
            className={styles.general__buttons_item}
            targetId="Features"
          >
            Features
          </SmoothScrollButton>
        </div>

        {/* QUESTIONS */}

        {/* GENERAL */}
        <div className={styles.general__questions}>
          <h3 className={styles.general__questions_title}>
            {QUESTIONS_DATA[0].title}
          </h3>
          <div className={styles.general__questions_items}>
            {QUESTIONS_DATA[0].questions.map((question) => (
              <ExpandingBox
                key={question.id}
                id={question.id}
                isOpen={openBox === question.id}
                onToggle={handleToggle}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </div>
        </div>

        {/* PORTFOLIO AND DASHBOARD */}
        <div className={styles.general__questions}>
          <h3 className={styles.general__questions_title}>
            {QUESTIONS_DATA[1].title}
          </h3>
          <div className={styles.general__questions_items}>
            {QUESTIONS_DATA[1].questions.map((question) => (
              <ExpandingBox
                key={question.id}
                id={question.id}
                isOpen={openBox === question.id}
                onToggle={handleToggle}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className={styles.general__questions}>
          <h3 className={styles.general__questions_title}>
            {QUESTIONS_DATA[2].title}
          </h3>
          <div className={styles.general__questions_items}>
            {QUESTIONS_DATA[2].questions.map((question) => (
              <ExpandingBox
                key={question.id}
                id={question.id}
                isOpen={openBox === question.id}
                onToggle={handleToggle}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </div>
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default Hero;
