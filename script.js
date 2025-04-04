const DrumMachine = () => {
  const [display, setDisplay] = React.useState('');
  
  const drumPads = [
    {
      id: 'Heater-1',
      key: 'Q',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      id: 'Heater-2',
      key: 'W',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      id: 'Heater-3',
      key: 'E',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      id: 'Heater-4',
      key: 'A',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      id: 'Clap',
      key: 'S',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      id: 'Open-HH',
      key: 'D',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      id: 'Kick-n-Hat',
      key: 'Z',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      id: 'Kick',
      key: 'X',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      id: 'Closed-HH',
      key: 'C',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  const handleClick = (key, id) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setDisplay(id);
    
    // Add active class for visual feedback
    const pad = document.getElementById(`pad-${key}`);
    pad.classList.add('active');
    setTimeout(() => pad.classList.remove('active'), 100);
  };

  const handleKeyPress = (e) => {
    const pad = drumPads.find(pad => pad.key === e.key.toUpperCase());
    if (pad) {
      handleClick(pad.key, pad.id);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div className="pad-bank">
        {drumPads.map((pad) => (
          <div
            key={pad.key}
            id={`pad-${pad.key}`}
            className="drum-pad"
            onClick={() => handleClick(pad.key, pad.id)}
          >
            {pad.key}
            <audio
              id={pad.key}
              className="clip"
              src={pad.url}
            />
          </div>
        ))}
      </div>
      <div className="controls">
        <div id="display">{display}</div>
      </div>
    </div>
  );
};

ReactDOM.render(<DrumMachine />, document.getElementById('root'));
