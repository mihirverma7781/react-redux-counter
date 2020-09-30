import React, { useEffect } from "react";
import { connect } from "react-redux";
import  fetchUsers from "../redux/user/UserActions";


function UserContainer({userData,fetchUsers}) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>LOADING....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>userlist</h2>
      <div>
        <h3>
          {userData &&
            userData.users &&
            userData.users.map((user) => <p>{user.name}</p>)}
        </h3>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
