import React from 'react';
import { Header, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

class ContactModal extends React.Component {
  handleOnClose = () => {
    const { history } = this.props;
    return history.push('/');
  };

  render() {
    return(
      <Modal basic
        open={this.props.open} onClose={this.handleOnClose}
        closeIcon dimmer="blurring" closeOnDocumentClick closeOnDimmerClick>
        <Helmet>
          <title>Subway Now (formerly The Weekendest) - Contact</title>
          <meta property="og:title" content="Subway Now (formerly The Weekendest) - Contact" />
          <meta name="twitter:title" content="Subway Now (formerly The Weekendest) - Contact" />
          <meta property="og:url" content={`https://www.subwaynow.app/contact`} />
          <meta name="twitter:url" content={`https://www.subwaynow.app/contact`} />
          <link rel="canonical" href={`https://www.subwaynow.app/contact`} />
        </Helmet>
        <Modal.Header>
          Contact
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <ul>
              <li>Follow on Twitter <a href="https://twitter.com/theweekendest" target="_blank">https://twitter.com/theweekendest</a></li>
              <li>Follow on Bluesky <a href="https://bsky.app/profile/theweekendest.com" target="_blank">https://bsky.app/profile/theweekendest.com</a></li>
              <li>Follow on Instagram <a href="https://instagram.com/theweekendest.nyc" target="_blank">https://instagram.com/theweekendest.nyc</a></li>
              <li>Email <a href="mailto:hello@subwaynow.app">hello@subwaynow.app</a></li>
            </ul>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
export default withRouter(ContactModal);