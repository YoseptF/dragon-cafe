import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import uid from 'uid';
import SideBar from './SideBar';

const Pages = () => {
  const { path, url } = useRouteMatch();
  const topics = ['Games', 'Food', 'Schedule'];

  return (
    <>
      <SideBar url={url} topics={topics} />
      <Switch>
        {topics.map(topic => <Route path={`${path}/${topic}`} key={uid()} component={window[topic]} />)}
      </Switch>
    </>
  );
};

export default Pages;
