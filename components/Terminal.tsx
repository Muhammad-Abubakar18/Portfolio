'use client';

import { useState, useEffect } from 'react';

interface TerminalStep {
  type: 'input' | 'output' | 'clear';
  text?: string;
  delayBefore?: number;
  delayAfter?: number;
}

export default function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [sequenceIndex, setSequenceIndex] = useState(0);

  const sequence: TerminalStep[] = [
    { type: 'input', text: 'whoami', delayBefore: 500, delayAfter: 500 },
    { type: 'output', text: 'Name: Muhammad Abubakar' },
    { type: 'output', text: 'Role: Software Engineer' },
    { type: 'output', text: 'Focus: Cybersecurity & Full-Stack Development' },
    { type: 'output', text: 'Location: Islamabad, Pakistan' },
    { type: 'output', text: 'Status: Available for opportunities' },
    { type: 'input', text: 'cat skills.txt', delayBefore: 1500, delayAfter: 500 },
    { type: 'output', text: 'Languages:        Python • Java • JavaScript • PHP' },
    { type: 'output', text: 'Backend:          Django • DRF • FastAPI • Spring Boot • REST APIs' },
    { type: 'output', text: 'Frontend:         React.js • Tailwind CSS • HTML5 • CSS3' },
    { type: 'output', text: 'Databases:        PostgreSQL • MySQL • Firebase • Redis' },
    { type: 'output', text: 'DevOps & Tools:   Docker • Git • CI/CD • Celery • Selenium • BeautifulSoup' },
    { type: 'output', text: 'AI & Security:    Machine Learning • Gemini API • Vulnerability Detection • JWT' },
    { type: 'clear', delayBefore: 3000 }
  ];

  useEffect(() => {
    let active = true;
    let timer: NodeJS.Timeout;

    const runSequence = async () => {
      if (sequenceIndex >= sequence.length) {
        // Loop back to start
        timer = setTimeout(() => {
          if (active) {
            setLines([]);
            setCurrentText('');
            setSequenceIndex(0);
          }
        }, 1000);
        return;
      }

      const step = sequence[sequenceIndex];

      // Delay before executing step
      if (step.delayBefore) {
        await new Promise((resolve) => {
          timer = setTimeout(resolve, step.delayBefore);
        });
      }

      if (!active) return;

      if (step.type === 'clear') {
        setLines([]);
        setSequenceIndex((prev) => prev + 1);
      } else if (step.type === 'input' && step.text) {
        let currentTyped = '$ ';
        setCurrentText(currentTyped);
        
        for (let i = 0; i < step.text.length; i++) {
          await new Promise((resolve) => {
            timer = setTimeout(resolve, 80 + Math.random() * 40); // Realistic typing variation
          });
          if (!active) return;
          currentTyped += step.text[i];
          setCurrentText(currentTyped);
        }

        // Delay after typing before printing output or moving next
        if (step.delayAfter) {
          await new Promise((resolve) => {
            timer = setTimeout(resolve, step.delayAfter);
          });
        }
        if (!active) return;

        setLines((prev) => [...prev, currentTyped]);
        setCurrentText('');
        setSequenceIndex((prev) => prev + 1);
      } else if (step.type === 'output' && step.text !== undefined) {
        setLines((prev) => [...prev, step.text || '']);
        setSequenceIndex((prev) => prev + 1);
      }
    };

    runSequence();

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [sequenceIndex]);

  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-xl border border-slate-800 bg-[#070b13] shadow-2xl overflow-hidden font-mono text-sm text-slate-300">
      {/* Header bar */}
      <div className="flex items-center justify-between bg-[#0e1420] px-4 py-3 select-none border-b border-slate-800/50">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs text-slate-500 font-semibold font-sans">bash — whoami</span>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Terminal window content */}
      <div className="p-6 min-h-[260px] text-left leading-relaxed overflow-x-auto">
        {lines.map((line, idx) => {
          const isCommand = line.startsWith('$');
          return (
            <div key={idx} className={`${isCommand ? 'text-blue-400 font-semibold' : 'text-emerald-400/90'} whitespace-pre-wrap break-words`}>
              {line}
            </div>
          );
        })}
        {currentText && (
          <div className="text-blue-400 font-semibold">
            {currentText}
            <span className="inline-block w-2 h-4 ml-1 bg-blue-400 animate-pulse" />
          </div>
        )}
        {!currentText && (
          <div className="text-blue-400 font-semibold">
            $ <span className="inline-block w-2 h-4 ml-1 bg-blue-400 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
