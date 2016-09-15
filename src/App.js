import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button'
import SampleTable from './SampleTable'

// Import react-toolbox resets
import 'react-toolbox/lib/commons.scss'

export default class App extends Component {
  render() {
    return (
      <SampleTable />
    );
  }
}
