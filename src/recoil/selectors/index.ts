import {selector} from 'recoil';
import {getAllHomeData} from '../../api/';

export const homeDatas = selector({
  key: 'homeDatas',
  get: async () => {
    const res = await getAllHomeData();

    if (res.error) {
      throw res.error;
    }
    return res;
  },
});

export const bannerData = selector({
  key: 'bannerData',
  get: ({get}) => {
    const data = get(homeDatas);
    if (!data) return [];
    return data?.banner;
  },
});

export const servicesList = selector({
  key: 'servicesList',
  get: ({get}) => {
    const data = get(homeDatas);
    if (!data) return [];
    return data?.services;
  },
});

export const section2data = selector({
  key: 'section2data',
  get: ({get}) => {
    const data = get(homeDatas);
    if (!data) return [];
    return {
      heading: data?.sections[0],
      list: data?.sectionList,
    };
  },
});
