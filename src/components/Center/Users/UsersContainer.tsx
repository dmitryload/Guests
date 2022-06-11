import React from "react"
import {connect} from "react-redux";
import {
    setFollow,
    UserType,
    setCurrentPage,
    setUsers,
    setUsersCount,
    setUnfollow, setIsFollowing, UsersPageType
} from "../../../Redux/users-reducer";
import {AppStateType} from "../../../Redux/store";
import Preloader from "../../UniversalComponents/Preloader/Preloader";
import {setIsFetching} from "../../../Redux/actions/actions";
import Users from "./Users";
import {UsersAPI} from "../../../Api/api";

class UsersAPIContainer extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
        })
    }
    render() {
        return <> {this.props.isFetching ? <Preloader/>
            : null}
            <Users
                pageSize={this.props.pageSize}
                   users={this.props.users}
                   usersCount={this.props.usersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.setFollow}
                   unfollow={this.props.setUnfollow}
                   onPageChanged={this.onPageChanged}
                   setIsFollowing={this.props.setIsFollowing}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

type MapStateToPropsType = {
    state: UsersPageType
    users: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
    setUsers: (refreshFriends: UserType[]) => void
    setCurrentPage: (countNumber: number) => void
    setUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setIsFollowing: (isFollowing: boolean, userId: number) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.UsersPage,
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        usersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}

export type UsersAPIPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {
    setFollow,
    setUnfollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    setIsFetching,
    setIsFollowing,
})(UsersAPIContainer)
