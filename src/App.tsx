import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Redux Counter Example</h1>
          <Counter />
        </div>
      </div>
    </Provider>
  );
}

export default App;