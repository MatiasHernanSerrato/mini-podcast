import React, { useEffect, useState } from "react";
import getUrl from '../../utils/utils';

const CardContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getPodcast = async () => {
      const podcasts = await getUrl();
      setData(podcasts);
    };
    getPodcast();
  }, []);

  return (
    <div>
      tenemos data? puede ferpa?
      {
        data?.feed?.entry && 
        Object.keys(data.feed.entry).map(key => 
          <div><div>{data.feed.entry[key].title.label}</div><div>{data.feed.entry[key]?.['im:artist'].label}</div></div>)
      }
    </div>
  );
};

export default CardContainer;
