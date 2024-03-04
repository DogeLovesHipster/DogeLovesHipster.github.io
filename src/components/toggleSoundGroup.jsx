import React, { useState } from 'react';
import SoundButtonGroup from './SoundButtonGroup';

function ItemCard() {
  const [isSoundGroupVisible, setSoundGroupVisible] = useState(false);

  const toggleSoundGroup = () => {
    setSoundGroupVisible(!isSoundGroupVisible);
  };

  return (
    <div className="itemCard-card">
      <button onClick={toggleSoundGroup}>
        {isSoundGroupVisible ? 'Hide Sounds' : 'Show Sounds'}
      </button>
      {isSoundGroupVisible && (
        <div className="sound-button-group">
          <SoundButtonGroup />
        </div>
      )}
    </div>
  );
}

export default ItemCard;