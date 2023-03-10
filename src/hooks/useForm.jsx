import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [erros, setErros] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  //console.log(form)
  //La validacion de errores puede ser en el blur o el submit
  //como se prefiera
  const handleBlur = (e) => {
    handleChange(e);
    setErros(validateForm(form));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErros(validateForm(form));

    if (Object.keys(erros).length === 0) {
      setLoading(true);
      setResponse(true);
      setForm(initialForm);

      setTimeout(() => {
        return setResponse(false), setLoading(false);
      }, 5000);

      //POSTEAR LOS DATOS AL MAIL
    } else {
      return;
    }
  };

  return {
    form,
    erros,
    loading,
    response,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};
