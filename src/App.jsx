import './App.css';
import { SwipeButton } from './stories/SwipeButton';

function App() {
  return (
    <>
      <h1 className='font-bold p-4'>Foodwise Storybook</h1>
      <SwipeButton
        className='p-6 max-w-sm mx-auto bg-white font-montserrat'
        label='Swipe me'
      />
    </>
  );
}

export default App;
