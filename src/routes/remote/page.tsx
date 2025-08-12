import { Button } from 'loginRemote/Button';
import React, { useState, Suspense } from 'react';

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
