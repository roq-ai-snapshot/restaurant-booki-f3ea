import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  status: string;
  sender_id: string;
  receiver_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  user_invitation_sender_idTouser?: UserInterface;
  user_invitation_receiver_idTouser?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  sender_id?: string;
  receiver_id?: string;
  restaurant_id?: string;
}
