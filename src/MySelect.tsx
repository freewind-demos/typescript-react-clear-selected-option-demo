import React from 'react';

type Props = {
  options: { label: string, value: string }[]
}

export default function MySelect({options}: Props) {
  return <select size={3}>
    {options.map(it => {
      return <option value={it.value} key={it.value}>{it.label}</option>
    })}
  </select>
};

