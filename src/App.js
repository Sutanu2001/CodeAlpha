import { Col, Container, FormControl, FormGroup, FormLabel, Row, Button } from 'react-bootstrap';
import './App.css';
import {
    differenceInDays,
    differenceInMonths,
    differenceInYears,
  } from 'date-fns';
import { useState } from 'react';
function App() {
    const[day,setday]=useState('');
    const handelDay=(e)=>{ setday(e.target.value)};
    const[Month,setMonth]=useState('');
    const handelMonth=(e)=>{ setMonth(e.target.value)};
    const[Year,setYear]=useState('');
    const handelYear=(e)=>{ setYear(e.target.value)};
    const [age, setAge] = useState(null);
    const birthDate= new Date(Year,Month,day);

    const calculateAge = () => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        const ageYears = differenceInYears(today, birthDateObj);
        const ageMonths = differenceInMonths(today, birthDateObj) % 12;
        const ageDays = differenceInDays(
          today,
          new Date(today.getFullYear(), today.getMonth(), birthDateObj.getDate())
        );
        setAge({
            years: ageYears,
            months: ageMonths,
            days: ageDays,
          });
    }  
    const AgeResult = ({ age }) => {
        return (
          <h4 className='mt-10'>
            You are {age.years} years, {age.months} months, and {age.days} days old.
          </h4>
        );
      };  
    return (
        <>
        <Container className='mt-5'>
            <Row>
                <Col className='mb-3 text-center'><h2>Age Calculator</h2></Col>
            </Row>
            <Row>
                <Col className='text-center'><h3>Please Enter Your Date Of Birth</h3></Col>
            </Row>
            <Row>
                <Col>
                <FormGroup className='mt-1'> 
                    <FormLabel>Date</FormLabel>
                    <FormControl placeholder='dd'type='number' maxLength={2} min={1} max={30} onChange={handelDay} value={day}></FormControl>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup className='mt-1'> 
                    <FormLabel>Month</FormLabel>
                    <FormControl placeholder='mm' type='number'maxLength={2} min={1} max={12} onChange={handelMonth} value={Month}></FormControl>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup className='mt-1'> 
                    <FormLabel>Year</FormLabel>
                    <FormControl placeholder='yyyy'type='number'maxLength={4} min={1000} onChange={handelYear} value={Year}></FormControl>
                </FormGroup>
                </Col>
            </Row>
            <div className='text-center'>
            <Button disabled={!Year} variant="outline-success" className='mt-3 mb-3' size='lg'onClick={calculateAge}>
                Calculate Age</Button>
            {age && <AgeResult age={age} />}
            </div>
        </Container>
        </>
        );
    }
    
export default App;