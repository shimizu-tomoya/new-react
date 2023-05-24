import { useEffect } from 'react';

export const useBgLightBlue = () => {
  useEffect(() => {
    console.log('こいつが実行されるよ');
    return () => {
      console.log('アンマウントも実行されるよ');
    }
  }, []);
}
