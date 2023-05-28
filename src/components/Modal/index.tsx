'use client';
import { useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: any) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      style={{
        position: 'fixed',
        zIndex: 10,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',

        backgroundColor: 'rgba(152, 32, 32, 0.6)'
      }}
      onClick={onClick}
    >
      <div
        ref={wrapper}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {children}
      </div>
    </div>
  );
};
