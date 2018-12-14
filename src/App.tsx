import * as React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="app">
        <h1>Flame</h1>
      </div>
    );
  }
}

const app: React.ComponentType = hot(module)(App);

export { app as App };
