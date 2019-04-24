import { TRANSLATE_CARD } from './types';

export function translateCard() {  
  return {
    type: TRANSLATE_CARD,
    isShowTranslate: true,
    isShowButtonsContainer: true
  };
}