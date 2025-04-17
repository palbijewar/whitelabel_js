import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import dummy from 'enl-api/dummy/dummyContents';
import { Cover } from 'enl-components';
import { injectIntl } from 'react-intl';

import { getUserDetails } from '../../../middlewares/interceptors';
import Loading from '../../Session/AuthLoading';
import UsersTable from '../../Tables/UsersTable';
import HostsTable from '../../Tables/HostsTable';

function TabContainer(props) {
  const { children } = props;
  return <div style={{ paddingTop: 8 * 3 }}>{children}</div>;
}

TabContainer.propTypes = { children: PropTypes.node.isRequired };

function UserProfile() {
  const title = brand.name + ' - Profile';
  const description = brand.desc;

  const [userData, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const userFetchedData = await getUserDetails();
        setUser(userFetchedData);
      } catch (error) {
        console.error('Failed to fetch user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const userDetails = userData?.data;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <Cover
          coverImg=""
          avatar={dummy.user.avatar}
          name={userDetails?.name}
          desc=""
          mobile={userDetails?.mobile}
          email={userDetails?.email}
        />
      )}
      {/* <AppBar position="static" className={classes.profileTab}>
        {!mdUp && (
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<AccountCircle />} />
            <Tab icon={<SupervisorAccount />} />
            <Tab icon={<PhotoLibrary />} />
          </Tabs>
        )}
        {!mdDown && (
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<AccountCircle />} label={intl.formatMessage(messages.about)} />
            <Tab icon={<SupervisorAccount />} label={'20 ' + intl.formatMessage(messages.connections)} />
            <Tab icon={<PhotoLibrary />} label={'4 ' + intl.formatMessage(messages.albums)} />
          </Tabs>
        )}
      </AppBar>
      {value === 0 && <TabContainer><About /></TabContainer>}
      {value === 1 && <TabContainer><Connection /></TabContainer>}
      {value === 2 && <TabContainer><Albums /></TabContainer>} */}
      {/* <HostsTable />
      <UsersTable /> */}
    </div>
  );
}

UserProfile.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(UserProfile);
