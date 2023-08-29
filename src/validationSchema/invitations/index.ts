import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  sender_id: yup.string().nullable().required(),
  receiver_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
