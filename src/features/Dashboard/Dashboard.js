import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import debounce from 'lodash/debounce';

import Input from '../../components/Input';
import { getPodcasts } from '../../api';
import CardContainer from '../../components/CardContainer';

const Dashboard = () => {
  const { data } = useQuery({ queryKey: ['podcasts'], queryFn: getPodcasts });
  const [filterValue, setFilterValue] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  
  const filterPodcasts = ({data, value}) => {
    const filtered = data?.feed?.entry?.filter(item => item.title.label.includes(value))
    return setFilteredData(filtered);
  }
  const debounceLoadData = useCallback(debounce(filterPodcasts, 1000), []);

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilterValue(value);
    debounceLoadData({data, value});
  };

  return (
    <>
      <Input value={filterValue} onChange={handleFilterChange}/>
      { !filterValue.length && <CardContainer data={data} />}
      { filteredData.length && <CardContainer data={{feed:{entry: filteredData}}} />}
    </>
  );
}

export default Dashboard;
