import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import {connect} from 'react-redux';

import {getNotification} from '../../store/selectors';

class NotificationContainer extends Component {
   componentDidMount() {
      this.notificationSystem = this.refs.notificationSystem;
   }

   componentWillReceiveProps(nextProps) {
      const {notification} = nextProps;
      if (notification && (notification.title || notification.message) && notification.level) {
         this.notificationSystem.addNotification(notification);
      }
   }

   render() {
      return <NotificationSystem ref="notificationSystem"/>;
   }
}

NotificationContainer.propTypes = {
   message: PropTypes.string,
   level: PropTypes.string
};

const mapStateToProps = (state) => ({
   notification: getNotification(state)
});

export default connect(mapStateToProps)(NotificationContainer);
