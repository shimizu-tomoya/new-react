import { useCallback, useState } from 'react';

export const useInputArray = () => {
  const [text , setText] = useState("");
  const [array, setArray] = useState([1, 2, 3]);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((array) => {
      if (array.some((item) => item === text)) {
        alert("既に存在しています");
        return array;
      }
      return [...array,text];
    });
  }, [text])

  return { text , array , handleChange , handleAdd};
}
