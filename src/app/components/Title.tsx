import React from 'react';

export function Title({ text, onClick }: { text: string; onClick?: () => void }) {
  return <h1 onClick={onClick}>{text}</h1>;
}
