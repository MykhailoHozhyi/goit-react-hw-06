import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import style from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
});

export default function ContactForm({ onAddContact }) {
  const contactNameId = useId();
  const contactNumberId = useId();

  function handleSubmit(values, actions) {
    onAddContact(values);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={style.contactForm}>
        <div className={style.contactInput}>
          <label htmlFor={contactNameId}>Name</label>
          <Field type="text" name="name" id={contactNameId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={style.contactInput}>
          <label htmlFor={contactNumberId}>Number</label>
          <Field type="text" name="number" id={contactNumberId} />
          <ErrorMessage name="number" component="span" />
        </div>

        <button className={style.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
