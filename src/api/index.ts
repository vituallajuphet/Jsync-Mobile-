import {client} from './config';

export const getAllHomeData = async () => {
  const data = await client.fetch(`
    {
      'services':*[_type == "services"],
      'sectionList':*[_type == "section2List"],
      'sections': *[_type == "section2"],
      'banner': *[_type == "banner"],
      'post': *[_type == "post"],
    }
  `);

  return data;
};
