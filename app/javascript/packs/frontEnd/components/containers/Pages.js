import React from 'react';
import {
  useRouteMatch, Switch, Route,
} from 'react-router-dom';
import uid from 'uid';
import SideBar from './SideBar';
import * as P from './PageComponents';

const Pages = () => {
  const { path, url } = useRouteMatch();
  const id = window.location.pathname.split('/')[2];
  const topics = ['Games', 'Food', 'Schedule'];

  return (
    <>
      <SideBar url={url} topics={topics} id={id} />
      <Switch>
        {topics.map(topic => <Route path={`${path}/${topic}`} key={uid()} component={P[topic]} />)}
      </Switch>
    </>
  );
};

export default Pages;
