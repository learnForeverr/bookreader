import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function ProductionIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 48 48"
      {...props}>
      <G fill="#164285">
        <Path d="M28.5 18.7H26v2.902c0 1.097-.898 2-2 2-1.102 0-2-.903-2-2v-2.903h-2.5v9h9zm0 0" />
        <Path d="M47.7 20c-.302-1.5-1.302-2.7-2.7-2.898l-2.2-.5c-.1-.301-.198-.5-.3-.801l1.2-2c.8-1.403.6-3.102-.598-4.102L38 4.602c-1-1-2.7-1.204-4-.403l-2 1.2c-.3-.098-.5-.2-.7-.297L30.8 3C30.5 1.5 29.103.3 27.5.3h-7.3c-1.5 0-2.7.9-3.2 2.4 0 .1 0 .1-.102.198L16.5 5c-.3.102-.5.2-.8.3l-2-1.198c-1.4-.801-3.098-.602-4.098.597L4.5 9.9A3.334 3.334 0 004 14l1.3 2c-.1.2-.198.5-.3.7l-2.102.5C1.398 17.5.2 18.897.2 20.5v7.3c0 1.5.903 2.7 2.403 3.2.097 0 .097 0 .199.102L5 31.398c.102.301.2.5.3.801l-1.198 2c-.801 1.403-.602 3.102.597 4.102l5.102 5.097a3.329 3.329 0 004.097.5l2-1.199c.301.102.5.2.704.301l.5 2.102c.296 1.5 1.699 2.699 3.296 2.699H27.7c1.5 0 2.7-.903 3.2-2.403 0-.097 0-.097.101-.199L31.5 43c.3-.102.5-.2.8-.3l2 1.198c1.4.801 3.098.602 4.098-.597l5.102-5.102a3.329 3.329 0 00.5-4.097l-1.2-2c.098-.301.2-.5.302-.704l2.097-.5c1.5-.296 2.7-1.699 2.7-3.296V20.3c-.2 0-.2-.2-.2-.301zm-15.2 7.8c0 2.2-1.8 3.9-3.898 3.9h-9.204c-2.199 0-3.898-1.802-3.898-3.9v-9.198c0-2.204 1.7-3.903 3.898-3.903h9.204c2.199 0 3.898 1.7 3.898 3.903zm0 0" />
      </G>
    </Svg>
  );
}

export default ProductionIcon;