import "./App.css";
import Form from "./Components/Form";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import Hata from "./Components/Hata";
import axios from "axios";
import List from "./Components/List";

let formSchema = Yup.object().shape({
  name: Yup.string().required("İsminizi girmelisiniz."),

  email: Yup.string()
    .email("Geçerli bir e-mail giriniz")
    .required("E-mail girmeniz zorunludur efenim"),

  password: Yup.string()
    .min(6, "Parolanız az 6 karakter olmalıdır canım.")
    .required("Parolayı söyle!!"),

  terms: Yup.boolean().oneOf(
    [true],
    "Kullanım şartlarını kabul etmelisin dostum :("
  ),
});

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });
  const [registerMember, setRegisterMember] = useState([]);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [submitDisable, setSubmitDisable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((response) => setRegisterMember([...registerMember,response.data]))
      .catch((error) => console.error(error));
    setForm({
      name: "",
      email: "",
      password: "",
      terms: false,
    });
  };

  const handleChange = (event) => {
    const { value, name, checked, type } = event.target;
    let newValue = type === "checkbox" ? checked : value;
    checkForm(name, newValue);
    setForm({ ...form, [name]: newValue });
  };
  const checkForm = (name, value) => {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((error) => setErrors({ ...errors, [name]: error.errors[0] }));
  };

  useEffect(() => {
    formSchema.isValid(form).then((response) => setSubmitDisable(!response));
  }, [form]);

  return (
    <div className="App">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        member={form}
        submitDisable={submitDisable}
        errors={errors}
      />
      <Hata errors={errors} />
      <List registerMember={registerMember}/>
    </div>
  );
}

export default App;
