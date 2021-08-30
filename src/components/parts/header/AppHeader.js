import React ,{ useState }from 'react';
import Mainheader from '../../parts/header/Mainheader';
import TopBar from '../../parts/header/TopBar';
import { Affix, Button } from 'antd';
function AppHeader() {
    const [top, setTop] = useState(0);
    return (
     <header className="app-header">
         <TopBar/>
         <Affix offsetTop={top}>
         <Mainheader />
       
      </Affix>
       
     </header>
    )
}

export default AppHeader;
