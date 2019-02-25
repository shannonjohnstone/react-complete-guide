import React, { useState, useEffect } from 'react';
import { useDataFetching } from '../hooks';

const DataFetching = props => {
  const [loadingMessage, setLoadingMessage] = useState('Fetching Data');

  const loadingEffect = msg => {
    let loadingMessage = msg;
    let effectInterval;

    const startEffect = () => {
      effectInterval = setInterval(() => {
        loadingMessage += '.';
        setLoadingMessage(loadingMessage);
      }, 500);
    };

    const endEffect = () => {
      clearInterval(effectInterval);
    };

    return {
      startEffect,
      endEffect,
    };
  };

  const { data, isLoading } = useDataFetching(props.fetchData);
  const { startEffect, endEffect } = loadingEffect(loadingMessage);

  useEffect(() => props.setData(data), [data]);

  if (isLoading) startEffect();
  else endEffect();

  if (isLoading) return <div>{loadingMessage}</div>;
  return props.render(data);
};

export default DataFetching;
