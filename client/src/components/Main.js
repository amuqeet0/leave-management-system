import React, { Component } from 'react';
import styles from './Main.module.css';
import { updateCurrentRouteTitle } from '../actions/utilActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Main extends Component {
  componentDidMount = () => {
    this.props.updateCurrentRouteTitle('Dashboard');
  };

  render() {
    let boxes = null;

    const isDarkTheme = this.props.isDarkTheme;

    if (this.props.auth.user.accountType === 0) {
      boxes = (
        <div className={`${styles.boxContainer}`}>
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i className={`icon ion-md-today ${styles.customHeaderIcon}`} />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>Today's Leave List</div>
              {/* <div className={styles.subtitle}>Check list of staff </div> */}
            </div>
          </div>
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i className={`icon ion-md-repeat ${styles.customHeaderIcon}`} />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>Today's Altered List</div>
            </div>
          </div>{' '}
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i className={`icon ion-md-time ${styles.customHeaderIcon}`} />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>Leaves Awaiting Response</div>
            </div>
          </div>{' '}
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i
                className={`icon ion-md-thumbs-down ${styles.customHeaderIcon}`}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>Declined Leave List</div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i className={`icon ion-md-cash ${styles.customHeaderIcon}`} />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>CPL Clearance</div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i
                className={`icon ion-md-close-circle ${
                  styles.customHeaderIcon
                }`}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>Cancel Request</div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i
                className={`icon ion-md-list-box ${styles.customHeaderIcon}`}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>Leave List</div>
            </div>
          </div>
        </div>
      );
    } else {
      boxes = (
        <div className={`${styles.boxContainer}`}>
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i className={`icon ion-md-cash ${styles.customHeaderIcon}`} />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>CPL Credits</div>
              <div className={styles.subtitle}>Check available CPL credits</div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i
                className={`icon ion-md-checkbox-outline ${
                  styles.customHeaderIcon
                }`}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>Leave Status</div>
              <div className={styles.subtitle}>
                Check status of applied leaves
              </div>
            </div>
          </div>{' '}
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i
                className={`icon ion-md-construct ${styles.customHeaderIcon}`}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>Awaiting Alterations</div>
              <div className={styles.subtitle}>
                Check the alternations given to you
              </div>
            </div>
          </div>{' '}
          <div className={`${styles.box} ${styles.boxHover}`}>
            <div className={styles.boxIcon}>
              <i className={`icon ion-md-repeat ${styles.customHeaderIcon}`} />
            </div>
            <div className={styles.boxText}>
              <div className={styles.title}>Compensations</div>
              <div className={styles.subtitle}>
                Check the list of compensations
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        className={
          isDarkTheme
            ? `${styles.scrollWrapper}`
            : `${styles.scrollWrapper} ${styles.lightTheme}`
        }>
        <div className={styles.contentWrapper}>
          <div className={styles.body}>
            <div
              className={`${styles.welcomeMessage} ${styles.marginTop20} ${
                styles.marginBottom20
              }`}>
              Welcome, {this.props.auth.user.name}
            </div>
            {boxes}
            <div className={`${styles.boxContainer} ${styles.mainFuncs}`}>
              {this.props.auth.user.accountType !== 0 ? (
                <div className={styles.box}>
                  <div className={styles.boxText}>
                    <div className={styles.title}>Leave Availability</div>
                    {/* <div className={styles.subtitle}>Leave Availability</div> */}
                  </div>
                  {/* <div className={styles.boxIcon}>
                    <i
                      className={`icon ion-md-repeat ${
                        styles.customHeaderIcon
                      }`}
                    />
                  </div> */}
                </div>
              ) : null}
              <div className={styles.box}>
                <div className={styles.boxText}>
                  <div>
                    <span className={styles.title}>Recent Logins </span>
                    <span className={styles.subtitle}>(approximate)</span>
                  </div>
                </div>
                {/* <div className={styles.boxIcon}>
                    <i
                      className={`icon ion-md-repeat ${
                        styles.customHeaderIcon
                      }`}
                    />
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  updateCurrentRouteTitle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { updateCurrentRouteTitle }
)(Main);
