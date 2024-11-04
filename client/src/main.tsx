import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { FeedbackStorageProvider } from './context/FeedbackStorageContext.tsx';
import { FeedbackQueryProvider } from './context/FeedbackQueryContext.tsx';

createRoot(document.getElementById('root')!).render(
  <FeedbackStorageProvider>
    <FeedbackQueryProvider>
      <App />
    </FeedbackQueryProvider>
  </FeedbackStorageProvider>
);
