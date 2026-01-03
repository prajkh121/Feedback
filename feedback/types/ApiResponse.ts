import { Message } from "@/models/User";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMesages?: boolean;
  messages?: Array<Message>;
}
