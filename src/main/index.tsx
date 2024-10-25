import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { init as navInit } from '@root/feature/navigation/navigationSlice';
import { init as tabInit } from '@root/feature/tab/tabSlice';

import HostTab from 'src/components/HostTab';
import PathTab from 'src/components/PathTab';

import { root } from './styles.module.css';
import ToastManager from '@root/components/ToastManager';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(navInit());
    dispatch(tabInit());
  }, []);

  return (
    <>
      <Box className={root}>
        <Tabs size="sm">
          <TabList>
            <Tab>Host</Tab>
            <Tab>Path</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <HostTab />
            </TabPanel>
            <TabPanel>
              <PathTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <ToastManager />
    </>
  );
};

export default Main;
