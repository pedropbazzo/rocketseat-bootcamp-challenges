import React, { Fragment } from 'react';
import Map from '../../components/Map';
import LeftBar from '../../components/LeftBar';
import RightBar from '../../components/RightBar';
import UserModal from '../../components/UserModal';

export default function Main() {
  return (
    <Fragment>
      <Map />
      <LeftBar />
      <UserModal />
      <RightBar />
    </Fragment>
  );
}
