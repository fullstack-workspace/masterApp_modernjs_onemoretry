import React, { useState, Suspense } from 'react';
import { Button } from 'loginRemote/Button';

const Index = (): JSX.Element => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
      </Suspense>
    </div>
  );
};

export default Index;
