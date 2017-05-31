import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ActionHome from 'material-ui/svg-icons/action/home';
import NotificationEventAvailable from 'material-ui/svg-icons/notification/event-available';





const UpcomingEvents = () => {
  return (
    <div>
      <List>
        <Subheader>Upcoming Events</Subheader>
        <ListItem
          primaryText="7/1"
          secondaryText="OPENING DAY!"
          leftIcon={<ActionHome />}
          rightIcon={<NotificationEventAvailable />}
        />
        <ListItem
          primaryText="7/4"
          secondaryText="ID-4"
          leftAvatar={<Avatar icon={<ActionHome />} />}
        />
        <ListItem
          primaryText="7/20"
          leftAvatar={<Avatar icon={<ActionHome />} />}
        />
        <ListItem
          primaryText="8/1"
          leftAvatar={<Avatar icon={<ActionHome />} />}
        />
        <ListItem
          primaryText="9/5"
          secondaryText="Beer-to-School"
          leftAvatar={<Avatar icon={<ActionHome />} />}
        />
      </List>
      <Divider />
      <List>
        <Subheader>Past Events</Subheader>
        <ListItem
          primaryText="6/15"
          leftAvatar={<Avatar icon={<ActionHome />} />}
        />
        <ListItem
          primaryText="6/22"
          leftAvatar={<Avatar icon={<ActionHome />} />}
        />
      </List>
    </div>
  );
};

export default UpcomingEvents;