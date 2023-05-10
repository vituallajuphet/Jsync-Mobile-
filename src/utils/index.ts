import {CDN_URL} from '../api/config';

export const getImage = (imageTxt: string) => {
  if (!imageTxt) return undefined;
  const split = imageTxt.split('-');
  const image = split[1] + '-' + split[2] + '.' + split[3];

  return CDN_URL + image;
};
