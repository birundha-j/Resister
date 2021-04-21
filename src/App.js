import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const all = []


function FormComponent() {
  const [test, setTest] = useState([]);

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }


  function handleChange(value) {

    all.push(value)
    setTest(all)

  }
  console.log("selected", all[2]);


  return (
    <div>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '50%' }}
        placeholder="Pleae select"
        onChange={handleChange}
      >
        {children}
      </Select>
      <div>
        {/* {test && test.map((data) => {
          return (
            <div>{data}</div>
          )
        })} */}
      </div>
    </div>
  );
}

export default FormComponent;
