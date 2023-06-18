
import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import lcss from '../loader/loader.module.css';

const Loader = ({ loading }) => {
  return (
    <div className={lcss.box}>
      {loading && (
        <div className={lcss.boxx}>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      )}
    </div>
  );
};

export default Loader;