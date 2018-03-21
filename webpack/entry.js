import React, { Component } from 'react';
import { render } from 'react-dom';
import EventGallery from './components/EventGallery';

class App extends Component {
    render() {
        return <EventGallery />;
    }
}

render(<App />, document.getElementById('gallery'));
