// PricingTable.jsx
import React from 'react';
import { Card, Button, Row, Col } from 'antd';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$19/month',
    features: ['1 User', 'Basic Support', '10 Projects'],
    buttonText: 'Choose Basic',
  },
  {
    title: 'Pro',
    price: '$49/month',
    features: ['5 Users', 'Priority Support', '50 Projects'],
    buttonText: 'Choose Pro',
  },
  {
    title: 'Enterprise',
    price: '$99/month',
    features: ['Unlimited Users', '24/7 Support', 'Unlimited Projects'],
    buttonText: 'Contact Sales',
  },
];

const PricingTable = () => (
  <Row gutter={[16, 16]} justify="center">
    {pricingPlans.map((plan, index) => (
      <Col xs={24} sm={12} md={8} key={index}>
        <Card
          title={plan.title}
          bordered={false}
          style={{ textAlign: 'center' }}
          headStyle={{ fontSize: '1.5rem', fontWeight: 'bold' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{plan.price}</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {plan.features.map((feature, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>{feature}</li>
            ))}
          </ul>
          <Button type="primary" style={{ marginTop: '1rem' }}>
            {plan.buttonText}
          </Button>
        </Card>
      </Col>
    ))}
  </Row>
);

export default PricingTable;
