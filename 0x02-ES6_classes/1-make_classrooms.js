import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const data = [19, 20, 34];
  const rooms = [];

  for (const item of data) {
    rooms.push(new ClassRoom(item));
  }

  return rooms;
}
