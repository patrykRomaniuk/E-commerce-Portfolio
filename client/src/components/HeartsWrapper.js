import React from 'react';
import HeartItem from './HeartItem';
import { connect } from 'react-redux';

const HeartsWrapper = ({ auth }) => 
    auth.user !== null &&
    auth.isAuthenticated && 
    auth.user.hearts !== [] &&
    auth.user.hearts !== null &&
    auth.user.hearts.map(heart => (
        <HeartItem key={heart._id} heart={heart}/>
    ))

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(HeartsWrapper);
