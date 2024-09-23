
import React from 'react';

export const withOpenOrNot = (WrappedComponent) => {
  return (props) => {
    if (props.resData.info.avgRating > 4.0) {
      return (
        <div>
          <WrappedComponent {...props} />
        </div>

        
      );
    } else {
      return (
        <div>
          <WrappedComponent {...props} />
        </div>
      );
    }
  };
};
export default withOpenOrNot;