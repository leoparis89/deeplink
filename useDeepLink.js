import {useEffect} from 'react';
import {Linking} from 'react-native';

export const useDeepLink = () => {
  useEffect(() => {
    Linking.getInitialURL().then(d => {
      // Fires if app was closed and I enter command
      // npx uri-scheme open "mychat://bar" --ios
      console.warn('initial deep link url', d);
    });

    Linking.addEventListener('url', u => {
      // Never fires when I enter command
      // npx uri-scheme open "mychat://bar" --ios
      console.log('updated deep link url', u);
    });
  }, []);
};
