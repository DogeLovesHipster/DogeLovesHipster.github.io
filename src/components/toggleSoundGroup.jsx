import { useState } from 'react';
import SoundButtonGroup from './SoundButtonGroup';

/**
 * Renders an item card with a toggleable sound group.
 *
 * @returns {JSX.Element} The rendered item card component.
 */

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