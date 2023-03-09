import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const userForm = ({
  handleChange,
  handleSubmit,
  member,
  submitDisable,
  errors,
}) => {
  const { name, email, password, terms } = member;
  return (
    <div className=" form-wrapper login-form p-3 border border-primary-subtle rounded shadow  ">
      <h2 className="text-warning">Kayıt Ol</h2>
      <Form onSubmit={handleSubmit} className="userForm">
        <FormGroup>
          <Label for="name" className="form-label">
            İsim Soyisim
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="İsim Soyisim"
            invalid={errors.name}
            className="form-input"
          />
          <FormFeedback>{errors.name}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="abc@abc.com"
            invalid={errors.email}
          />
          <FormFeedback>{errors.email}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Parola</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Parolanızı giriniz"
            invalid={errors.password}
          />
          <FormFeedback>{errors.password}</FormFeedback>
        </FormGroup>
        <FormGroup check>
          <Label check>
            Kullanım Şartları
            <Input
              type="checkbox"
              name="terms"
              id="terms"
              checked={terms}
              onChange={handleChange}
              invalid={errors.terms}
            />
          </Label>
          <FormFeedback className="form-feedback">{errors.terms}</FormFeedback>
        </FormGroup>

        <Button
          color="success"
          type="submit"
          disabled={submitDisable}
          className="mt-2"
        >
          Gönder
        </Button>
      </Form>
    </div>
  );
};

export default userForm;
