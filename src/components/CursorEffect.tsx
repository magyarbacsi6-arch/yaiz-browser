'use client';

import { useEffect, useRef } from 'react';

export default function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let mouseX = -100;
    let mouseY = -100;
    let particles: { x: number; y: number; vx: number; vy: number; life: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 10,
          y: mouseY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1 - 1,
          life: 1,
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter((p) => p.life > 0);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.015;
        p.vy += 0.02;

        const alpha = p.life * 0.4;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 4);
        gradient.addColorStop(0, `rgba(0, 212, 255, ${alpha})`);
        gradient.addColorStop(1, `rgba(123, 97, 255, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
