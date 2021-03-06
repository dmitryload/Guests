import React from 'react';
import Auth from "./Auth";
import {connect} from "react-redux";
import {AppStateType} from "../../../BLL/store";
import {withRouter} from "../../../BLL/withRouter";
import {logOutTC} from "../../../BLL/auth-reducer";

const AuthContainer = (props: AuthPropsType) => {
    return (
        <Auth logout={props.logOutTC} isAuth={props.isAuth}/>
    );
};

type MapStateToPropsType = {
    login: string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    logOutTC: () => void
}
type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.Auth.login,
        isAuth: state.Auth.isAuth,
    }
}
export default connect(mapStateToProps, {logOutTC})(withRouter(AuthContainer));
