import React, {useState} from 'react'
import MySelect from './MySelect';

const options1 = [{label: 'aaa', value: '111'}, {label: 'bbb', value: '222'}]
const options2 = [{label: 'aaa', value: '111'}, {label: 'ccc', value: '333'}]

export default function Hello() {
  const [options, setOptions] = useState(options1);

  return <div>
    <h1>Select 'aaa' then click on the "Switch Options" button</h1>
    <div>
      <button onClick={() => {
        if (options === options1) {
          setOptions(options2)
        } else {
          setOptions(options1)
        }
      }}>Switch Options
      </button>
    </div>
    <div><MySelect options={options}/></div>
  </div>
};
