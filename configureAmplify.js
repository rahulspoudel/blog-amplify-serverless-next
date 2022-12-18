import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(config);
