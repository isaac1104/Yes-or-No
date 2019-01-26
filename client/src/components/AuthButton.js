import React from 'react';

const AuthButton = ({ platform }) => <a href={`/auth/${platform}`}><button className={`loginBtn loginBtn--${platform}`}>Login with {platform}</button></a>;

export default AuthButton;
