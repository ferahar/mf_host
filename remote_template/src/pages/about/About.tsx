import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="margin-l">
      <h1>Remote_template</h1>
      <Button
        label="Ferahar"
        onClick={() => navigate('/ferahar')}
      />
    </div>
  );
}
