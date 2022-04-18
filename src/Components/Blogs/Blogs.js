import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5 m-5 border border-2 shadow-lg border-danger'>
            <div>
                <h3>Difference between authorization and authentication?</h3>
                <p> <strong> Authentication:</strong> In a system user providing her username and password. Accoding to the email and password system find out who is the user.
                    <br />
                    <strong>Authorization:</strong> in a system authorization is the process of verifying what router/path, files, and data a user has access to.</p>
                    <p>In one sentence difference is Authentication is who are you or your identity and Authorization is where are you allow to access.</p>
            </div>
            <hr />
            <div>
                <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>The reasons we are using firebase to manages all data like develop mobile apps such as live streaming, website user information and action chat messaging, etc... realtime in the database.</p>
                <p>there are lot of alternative firebase authentication:</p>
                <ul>
                    <li>Auth0 (very populer)</li>
                    <li>Back4App </li>
                    <li>Parse </li>
                    <li>Okta </li>
                    <li>Kuzzle</li>
                    <li>AWS Amplify </li>
                    <li>and so on.</li>
                </ul>
            </div>
            <hr />
            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>Not only authentication But also firebase provide lot of services  like</p>
                <ul>
                    <li><strong>Real-time Database :</strong>Store and sync app data in realtime</li>
                    <li><strong>Google analytics</strong></li>
                    <li><strong>Cloud storage system</strong></li>
                    <li><strong>Cloud Messaging :</strong> Deliver and receive messages in a more reliable way across platforms</li>
                    <li><strong>Remote Config: </strong>Customize your app on the go</li>
                    <li><strong>Hosting :</strong>Deliver web content faster</li>
                    <li><strong>Test Lab: </strong> Test in the lab instead of on your users</li>
                    <li><strong>Crash Reporting: </strong>Keep your app stable</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;