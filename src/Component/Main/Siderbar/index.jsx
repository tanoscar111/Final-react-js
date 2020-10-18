import React from 'react';


import './siderbar.css'

function Siderbar(props) {
  const { listName } = props;
  return (

    <>
      <div className=" siderbarName">
        {listName}
        </div>



    </>
  );
}

export default Siderbar;
