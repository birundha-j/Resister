import React, { useEffect, useState } from "react";
import './App.css';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import Axios from 'axios';

const initialValues = {
  firstname: "",
  lastname: "",
  age: "",
  dob: "",
  education: "",
};

function App() {

  const [values, setValues] = useState(initialValues);
  const [test, setTest] = useState([]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // useEffect(() => {
  const url = "http://localhost:3000/users"

  // }, [])

  function addData() {
    setTest([...test, { fname: values.firstname, lname: values.lastname, age: values.age, db: values.dob, educ: values.education }])
    Axios.post(url, {
      fname: values.firstname, lname: values.lastname, age: values.age, db: values.dob, educ: values.education
    })
      .then(res => {
        console.log(res.values, "values")
      })

    setValues({
      firstname: "",
      lastname: "",
      age: "",
      dob: "",
      education: "",
    })
  }

  console.log(test, "testtest")
  return (
    <div className="container">

      {/* test1:
      <Input value={values.company}
        onChange={handleInputChange}
        name="company" /><br />
      test2:
      <Input value={values.position}
        onChange={handleInputChange}
        name="position" /><br />
      test3:
      <Input value={values.link}
        onChange={handleInputChange}
        name="link" />
      <br /><br />
      <Button onClick={addData}>Add</Button>
      {test.map((data) => {
        return (
          <div>
            <div>{data.test1}</div>
            <div>{data.test2}</div>
            <div>{data.test3}</div>
          </div>
        )
      })} */}



      <Form

        name="basic"
        initialValues={{
          remember: true,
        }}

      >
        <Row gutter={16}>
          <Col span={12}>
            <div className="fieldsView">*FirstName</div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input value={values.firstname} onChange={handleInputChange} name="firstname" />
            </Form.Item></Col>


          <Col span={12}>
            <div className="fieldsView">*LasteName</div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your lastname!',
                },
              ]}
            >
              <Input value={values.lastname} onChange={handleInputChange} name="lastname" />
            </Form.Item></Col>


          <Col span={12}>
            <div className="fieldsView">*age</div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your age!',
                },
              ]}
            >
              <Input type="number" value={values.age} onChange={handleInputChange} name="age" />
            </Form.Item></Col>


          <Col span={12}>
            <div className="fieldsView">*DOB</div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your DOB!',
                },
              ]}
            >
              <Input type="date" value={values.dob} onChange={handleInputChange} name="dob" />
            </Form.Item>
          </Col>


          <Col span={12}>
            <div className="fieldsView">*Education</div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your fathername!',
                },
              ]}
            >
              <Input value={values.education} onChange={handleInputChange} name="education" />
            </Form.Item>
          </Col>

        </Row>
        <div className="btnView">
          <Button type="primary" htmlType="submit" className="submitbtn" onClick={addData}>Submit </Button>
          <Button >Cancel</Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
