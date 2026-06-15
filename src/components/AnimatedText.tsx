import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  id?: string;
}

export default function AnimatedText({ text, className = "", id }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  const totalLength = text.length;
  let charGlobalIndex = 0;

  return (
    <p id={id} ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, wordIndex) => {
        const chars = word.split("");
        return (
          <React.Fragment key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {chars.map((char) => {
                const currentIndex = charGlobalIndex;
                charGlobalIndex++;
                return (
                  <Character
                    key={currentIndex}
                    char={char}
                    index={currentIndex}
                    total={totalLength}
                    progress={scrollYProgress}
                  />
                );
              })}
            </span>
            {wordIndex < words.length - 1 && (() => {
              const spaceIndex = charGlobalIndex;
              charGlobalIndex++;
              return (
                <Character
                  key={spaceIndex}
                  char=" "
                  index={spaceIndex}
                  total={totalLength}
                  progress={scrollYProgress}
                />
              );
            })()}
          </React.Fragment>
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  key?: any;
}

function Character({ char, index, total, progress }: CharacterProps) {
  // Map index to a specific range of the scroll progress
  // First characters fade in first, progressing sequentially to the end
  const start = index / total;
  const end = Math.min(1, start + 0.05); // subtle trailing overlap window
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block select-none" style={{ margin: char === " " ? "0 0.18em" : "0" }}>
      {/* Invisible placeholder keeps paragraph layout perfectly aligned */}
      <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
      {/* Absolute positioned animated span */}
      <motion.span style={{ opacity }} className="absolute top-0 left-0">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}
