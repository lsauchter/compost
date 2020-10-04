// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useState } from 'react'

const App = () => {
  const [totalWeight, updateTotalWeight] = useState(null)
  fetch('weight', { method: 'GET' }).then(response => response.json())
  .then(res => {
    console.log('res', res);
    updateTotalWeight(res);
  });
  return (
    <div>Total weight {totalWeight}</div>
  );
}

export default App