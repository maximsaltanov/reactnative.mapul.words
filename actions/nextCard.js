import { NEXT_CARD } from './types';

export function nextCard(rate) {
  return {
    type: NEXT_CARD,
    rate: rate
  };
}