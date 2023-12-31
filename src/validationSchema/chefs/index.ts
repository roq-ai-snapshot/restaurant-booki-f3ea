import * as yup from 'yup';

export const chefValidationSchema = yup.object().shape({
  specialty: yup.string().nullable(),
  experience_years: yup.number().integer().nullable(),
  working_hours: yup.string().nullable(),
  off_days: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
