import React, { useState } from 'react'
import Location from './location';

function Sample()
{  
    return (
        <div>
          <Location city={{
            name: 'Toronto',
            population: 10
          }} />
          <Location city={{
            name: 'Montreal',
            population: 20
          }} />
        </div>
      )
}

export default Sample;