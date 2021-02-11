import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        ref={register({ required: true, value:'email' })}
      />
      {errors.email && <p>Please Enter a valid Email </p>}
      <input
        type="password"
        placeholder="Password"
        name="password"
        ref={register({
          required: true,
          minLength: { value: 8, message: 'Too Short' },
        })}
      />
      {errors.password && <p>Invalid</p>}
      <input type="submit" />
    </form>
  );
};
export default Login;
