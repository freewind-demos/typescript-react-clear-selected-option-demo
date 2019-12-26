import React, {useState} from 'react';

type Props = {
  options: { label: string, value: string }[]
}

export default function MySelect({options}: Props) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  return <select size={3} defaultValue={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
    {options.map(it => {
      return <option value={it.value} key={it.value}>{it.label}</option>
    })}
  </select>
};
