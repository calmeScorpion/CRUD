import { useFormik } from 'formik';

const Form = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'username Required';
    }

    if (!values.password) {
      errors.password = 'password Required';
    }
    return errors;
  };
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validate,
      onSubmit: (values) => {},
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <p>
          {''}
          {touched.username && errors.username ? (
            <span>{errors.username}</span>
          ) : null}
        </p>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p>
            {' '}
            {touched.password && errors.password ? (
              <span>{errors.password}</span>
            ) : null}
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit{' '}
        </button>
        <button type="button" className="btn btn-light" onClick={oncancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};
export default Form;
