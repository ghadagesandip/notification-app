import { Notification } from './modules/notification.controller.js';

export function setupRoute(app) {
  new Notification(app);
}