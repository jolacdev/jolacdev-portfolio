import { type KeyboardEvent } from 'react';

enum Key {
  Enter = 'Enter',
  Space = ' ',
}

export const handleAccessibleKeyPress = (
  e: KeyboardEvent<HTMLElement>,
  callback: () => void,
) => {
  if (e.key === Key.Enter || e.key === Key.Space) {
    callback();
    return true;
  }

  return false;
};
