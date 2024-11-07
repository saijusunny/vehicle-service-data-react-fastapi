import React from 'react'
import { Card, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/Dashboard.css';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering the components you need from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



function Dashboard() {
  const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
          {
              label: 'Sales',
              data: [65, 59, 80, 81, 56, 55, 59, 80, 81, 56, 55],
              backgroundColor: 'white',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
          },
      ],
  };

  const options = {
    scales: {
          x: {
              ticks: {
                  color: 'white', // Change x-axis label color
              },
              title: {
                  display: true,
                  text: 'Months',
                  color: 'white', // Change x-axis title color
              },
          },
          y: {
              ticks: {
                  color: 'white', // Change y-axis label color
              },
              title: {
                  display: true,
                  text: 'Sales',
                  color: 'white', // Change y-axis title color
              },
          },
      },
      plugins: {
        legend: {
            labels: {
                color: 'orange', // Change legend label color
            },
        },
    },
  };
  
  return (
  
    <Container className="">
      
      <div className="row mt-3">
        <div class="col-md-3 col-sm-12 mt-2">
          <a href="/vehiclelist" className="text-decoration-none">
            <Card className="card bg-dark text-white text-center p-4 p-sm-0" >
              
              <Card.Body>
                <i class="bi bi-car-front-fill fs-5"></i>
                <Card.Title>Vehicle Details</Card.Title>
                <Card.Text>
                
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div class="col-md-3 col-sm-12 mt-2">
          <a href="" className="text-decoration-none">
            <Card className="card bg-dark text-white text-center p-4 p-sm-0" >
              
              <Card.Body>
                <i class="bi bi-car-front-fill fs-5"></i>
                <Card.Title>Vehicle Details</Card.Title>
                <Card.Text>
                
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div class="col-md-3 col-sm-12 mt-2">
          <a href="" className="text-decoration-none">
            <Card className="card bg-dark text-white text-center p-4 p-sm-0" >
              
              <Card.Body>
                <i class="bi bi-car-front-fill fs-5"></i>
                <Card.Title>Vehicle Details</Card.Title>
                <Card.Text>
                
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>

        <div class="col-md-3 col-sm-12 mt-2">
          <a href="" className="text-decoration-none">
            <Card className="card bg-dark text-white text-center p-4 p-sm-0" >
              
              <Card.Body>
                <i class="bi bi-car-front-fill fs-5"></i>
                <Card.Title>Vehicle Details</Card.Title>
                <Card.Text>
                
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        
      </div>
      
    </Container>

    
  )
}

export default Dashboard
