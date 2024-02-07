import {
  CosmosMessage,
} from "@subql/types-cosmos";
import { SendMsg } from "../types";

export async function handleSendMsg(message: CosmosMessage): Promise<void> {
  logger.info(`Received SendMsg: ${message}`);

  SendMsg.create({
    id: message.idx.toString(),
  });
}
