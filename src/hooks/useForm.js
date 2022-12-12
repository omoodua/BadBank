import { useState } from "react";

function useForm(initialState = {}) {
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return {
    handleChange,
    setInput,
    input,
  };
}

export default useForm;
