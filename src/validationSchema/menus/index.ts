import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().nullable(),
  category: yup.string().nullable(),
  availability: yup.boolean().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
