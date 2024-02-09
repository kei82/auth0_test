"use client";

import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import { memo } from "react";

export default memo(function Login() {
  return (
    <div className="m-3">
      <MDBBtnGroup shadow="0">
        <MDBBtn outline href="/api/auth/login" role="link">
          Login
        </MDBBtn>
        <MDBBtn outline href="/api/auth/logout" role="link">
          Logout
        </MDBBtn>
      </MDBBtnGroup>
    </div>
  );
});
