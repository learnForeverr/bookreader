import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 48 48"
      {...props}>
      <Path
        d="M36 47.398h-6.8C27.397 47.398 26 46 26 44.2V34.102L25.898 34h-4l-.097.102v10c0 1.796-1.403 3.199-3.2 3.199h-6.8c-3.602 0-6.602-3-6.602-6.602V29.801c-1.097-.2-2-.801-2.8-1.602-2.297-2.398-2.2-6.199 0-8.398L19.8 2.398c2.398-2.296 6.199-2.296 8.398 0l17.403 17.403.097.097c1.2 1.403 1.7 2.903 1.403 4.403-.102 2.597-2 4.8-4.5 5.5v11.097c0 3.5-3 6.5-6.602 6.5zm0 0"
        fill="#164285"
      />
    </Svg>
  );
}

export default HomeIcon;
