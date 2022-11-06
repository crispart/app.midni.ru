import webClient from '@/plugins/webClient';

export default class MessageController {
  public static getPublicMessage = () => webClient('public');

  public static getPrivateMessage = () => webClient('private');
}
