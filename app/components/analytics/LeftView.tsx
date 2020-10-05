import React, { CSSProperties } from 'react';

import Circle from './circle';

interface Props {
  rate: number;
}

export default function LeftView(props: Props) {
  const { rate } = props;

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        style={{
          width: '100%',
          height: '85%',
          display: 'grid',
          paddingLeft: '20px',
          paddingRight: '20px',
          justifyItems: 'center'
        }}
      >
        <div
          className="my-auto"
          style={{
            width: '100%',
            height: '70%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Circle
            responsive
            bgColor="brown"
            progressColor="aquamarine"
            progress={rate}
          />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '15%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div className="my-auto">
          <span>Success rate - </span>
          <span style={{ color: 'rgb(164, 240, 154)' }}>{rate} %</span>
        </div>
      </div>
    </div>
  );
}

LeftView.defaultProps = {
  rate: 0
};
