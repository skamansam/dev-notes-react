/** If you want to implement your own backend, you need to implement these objects: */

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface ItemStateList {
  id: string;
  name: string;
  itemStates: ItemState[];
}

interface ItemState {
  id: string;
  name: string;  // the name of the item state, so we can use it as a key
  color: string; // the color of the item, will color a note or a list item
  icon: string;   // the icon of the item state, will be used in the UI to quickly represent the state
}

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  user: User;
  private?: boolean;
}

interface NoteState {
  id: string;
  noteId: string;
  itemState: string; // the name of the item state, so we can use it as a key
}

interface ListItemState {
  id: string;
  listId: string;
  listItemId: string;
  itemState: string; // the name of the item state, so we can use it as a key so we can futz with the states and maintain the state
}
