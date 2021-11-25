import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="8daafad3-64f5-4565-b295-ec4c73ccc365"
            userName="Jamflynt"
            userSecret="123123"
            renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        
        />
    );
}

export default App;