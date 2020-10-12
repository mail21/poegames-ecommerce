import React from 'react';
import pc from './../../assets/pc.svg';
import ps from './../../assets/Ps.svg';
import xbox from './../../assets/xbox-logo.svg';
import wii from './../../assets/wii-logo.svg';
import hp from './../../assets/cell-phone.svg';
import nintendo from './../../assets/nintendo.svg';

import './PlatformList.scss';

function PlatformsList({ platforms }) {
  return (
    <>
      {platforms.map(({ platform }) => {
        if (
          platform.name.includes('PlayStation') ||
          platform.name.includes('PS') ||
          platform.name.includes('PSP')
        ) {
          return (
            <img
              key={platform.id}
              className="platform-icon"
              src={ps}
              alt={platform.name}
              title={platform.name}
              width="60"
            />
          );
        } else if (platform.name.includes('Xbox')) {
          return (
            <img
              key={platform.id}
              className="platform-icon"
              src={xbox}
              alt={platform.name}
              title={platform.name}
              width="60"
            />
          );
        } else if (platform.name.includes('Wii')) {
          return (
            <img
              key={platform.id}
              className="platform-icon"
              src={wii}
              alt={platform.name}
              title={platform.name}
              width="60"
            />
          );
        } else if (platform.name.includes('Nintendo')) {
          return (
            <img
              key={platform.id}
              className="platform-icon"
              src={nintendo}
              alt={platform.name}
              title={platform.name}
              width="60"
            />
          );
        } else if (
          platform.name.includes('macOS') ||
          platform.name.includes('Linux') ||
          platform.name.includes('PC')
        ) {
          return (
            <img
              key={platform.id}
              className="platform-icon"
              src={pc}
              alt={platform.name}
              title={platform.name}
              width="60"
            />
          );
        } else if (platform.name.includes('Android') || platform.name.includes('iOS')) {
          return (
            <img
              key={platform.id}
              className="platform-icon"
              src={hp}
              alt={platform.name}
              title={platform.name}
              width="60"
            />
          );
        }
      })}
    </>
  );
}

export default PlatformsList;
