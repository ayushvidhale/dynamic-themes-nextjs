import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CoolPage = ({ updateTheme }) => {
  const [backgroundColor, setBackgroundColor] = useState('green');
  const [fontColor, setFontColor] = useState('purple');

  useEffect(() => {
    updateTheme({ backgroundColor, fontColor });
  }, [backgroundColor, fontColor, updateTheme]);

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  return (
    <StyledPage>
      <h1>Cool Page</h1>
      <div>
        <label>
          Background Color:
          <input type="text" value={backgroundColor} onChange={handleBackgroundColorChange} />
        </label>
      </div>
      <div>
        <label>
          Font Color:
          <input type="text" value={fontColor} onChange={handleFontColorChange} />
        </label>
      </div>
    </StyledPage>
  );
};

CoolPage.propTypes = {
  updateTheme: PropTypes.func.isRequired,
};

CoolPage.pageTheme = {
  backgroundColor: 'green',
  fontColor: 'purple',
};

const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
`;

export default CoolPage;
