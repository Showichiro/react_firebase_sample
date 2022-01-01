import {
  FirestoreDataConverter,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import type { Message } from 'src/types/Message';

export const MessageConvertor: FirestoreDataConverter<Message> = {
  toFirestore: (message) => {
    return {
      userId: message.userId,
      createdAt: message.createdAt
        ? Timestamp.fromDate(message.createdAt)
        : serverTimestamp(),
      content: message.content,
    };
  },
  fromFirestore: (sn) => {
    const data = sn.data();
    const message = {
      id: data.id,
      ...data,
      createdAt: data.createdAt?.toDate(),
    } as Message;
    return message;
  },
};
export default MessageConvertor;
