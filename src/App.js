import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useDispatch, connect } from "react-redux";
import { getResourceType } from './redux/Action/MasterOptionAction';
const { Option } = Select;

const all = []


function FormComponent(props) {
  const dispatch = useDispatch();

  const [test, setTest] = useState([]);
  const [resource, setResource] = useState({})
  // const children = [];
  // for (let i = 10; i < 36; i++) {
  //   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  // }

  useEffect(() => {
    dispatch(getResourceType())
  }, [])

  useEffect(() => {
    // let resource = []

    // props.getResourceType.map((data) => {
    //   resource.push({ id: data.resource_type_id, value: data.resource_type })
    // })
    // setResource({ resource })

  }, [props.getResourceType])

  function handleChange(value) {

    console.log("selected", value);
    all.push(value)
    setTest(all)
  }


  return (
    <div>
      <Select
        style={{ width: '50%' }}
        placeholder="Pleae select"
      >
        {props.getResourceType && props.getResourceType.map((data, index) => {
          return (
            <Option key={index} > {data.resource_type}</Option>
          )
        })
        }

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


const mapStateToProps = (state) =>
(
  console.log(state.masterdropdown.getResourceType, "statestatestate"),
  {
    getResourceType: state.masterdropdown.getResourceType,

  });

export default connect(mapStateToProps)(FormComponent);

