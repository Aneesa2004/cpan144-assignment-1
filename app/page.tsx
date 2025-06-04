import Nav from '../components/Nav';
import Message from '../components/Message';
import ToggleMessage from '../components/ToggleMessage';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Nav />
      <h1 style={{ color: '#0070f3' }}>Welcome to My React Web App!</h1>
      <Message text="This message is passed through props!" />
      <ToggleMessage />
    </div>
  );
}
