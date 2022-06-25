import React from "react";
import { lazy, Suspense } from 'react';



const DisplayLogos = (props) => {
const logoArr = []
for(let i = 0; i < props.techArr.length ; i++){
 const CurLogo = (lazy(() => import(`./TechLogos/${props.techArr[i].toLowerCase()}-Icon.js`)));
 logoArr.push(
    <Suspense fallback={<div>Loading...</div>}>
      <CurLogo />
    </Suspense>
  );
}
return logoArr

};



export default DisplayLogos