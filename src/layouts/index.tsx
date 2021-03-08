import React from 'react';

import { RecoilRoot } from 'recoil';

export default ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
