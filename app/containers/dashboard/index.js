import React from 'react';
import { Layout, Form, Input } from '../../components';

const Dashboard = () =>
  <Layout>
    <Form>
      <Input type="file" name="pic" accept="image/*" />
    </Form>
  </Layout>;

export { Dashboard }
