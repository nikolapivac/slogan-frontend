import { useState } from 'react';
import './App.css';
import { ServerController } from './api/server.controller';

const SloganGenerator = () => {
  const [description, setDescription] = useState('');
  const [slogan, setSlogan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateClick = () => {
    setLoading(true);
    generateSlogan();
    setLoading(false);
  };

  const generateSlogan = async () => {
    const response = await ServerController.SloganGenerator.generateSlogan(
      description
    );
    setSlogan(response.slogan);
  };

  return (
    <div className='container'>
      <h1>Slogan Generator</h1>
      <div className='input_field'>
        <input
          type='text'
          placeholder='Enter your company description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button disabled={loading} onClick={handleGenerateClick}>
          {loading ? 'Generating...' : 'Generate Slogan'}
        </button>
      </div>
      {slogan && (
        <div className='slogan-container'>
          <h2>Generated Slogan:</h2>
          <p>{slogan}</p>
        </div>
      )}
    </div>
  );
};

export default SloganGenerator;
