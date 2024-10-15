import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';
import { PlusCircle, MinusCircle } from 'lucide-react';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <MinusCircle className="mr-2" size={20} />
          Decrement
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <PlusCircle className="mr-2" size={20} />
          Increment
        </button>
      </div>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;