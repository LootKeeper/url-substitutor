import React, { useCallback } from 'react';

import { Card, CardBody, CardFooter, Text } from '@chakra-ui/react';

import Button from '@root/components/common/Button';
import { useDispatch } from 'react-redux';
import { getPath, setPath } from '@root/feature/tab/tabSlice';

const View = () => {
  const dispatch = useDispatch();
  const copyClickCallback = useCallback(() => dispatch(getPath()), []);

  const pasteClickCallback = useCallback(
    async () =>
      dispatch(setPath({ path: await navigator.clipboard.readText() })),
    []
  );

  return (
    <Card>
      <CardBody padding="2">
        <Text>
          Work with <Text as="b">Path</Text> in current Tab
        </Text>
      </CardBody>
      <CardFooter padding="2" gap="2">
        <Button variant="outline" onClick={copyClickCallback} label="Copy" />
        <Button variant="outline" onClick={pasteClickCallback} label="Paste" />
      </CardFooter>
    </Card>
  );
};

export default View;
