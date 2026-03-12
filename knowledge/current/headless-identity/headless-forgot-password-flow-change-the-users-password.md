---
title: "Headless Forgot Password Flow: Change the User’s Password"
domain: headless-identity
topic: headless-forgot-password-flow-change-the-users-password
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.937Z
estimatedTokens: 414
keywords: [Headless, Forgot, Password, Flow, Change, User’s, receive, one-time, OTP, Salesforce, new, endpoint, walks, changing, Postman]
---

# Headless Forgot Password Flow: Change the User’s Password

> After you receive a one-time password (OTP) from Salesforce, you can change your
  password with a new request to the forgot password endpoint. This example walks you through
  changing the password in Postman.

# Headless Forgot Password Flow: Change the User’s Password

After you receive a one-time password (OTP) from Salesforce, you can change your password with a new request to the forgot password endpoint. This example walks you through changing the password in Postman.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From the Headless Identity API Demo folder in Postman, select **Forgot Password - Change Password**.

    Note the location of the POST request. It’s the /services/auth/headless/forgot\_password endpoint on your Experience Cloud site, which is the same endpoint you used for the initial reset request.

2.  To see the request body, click **Body**. The password reset request includes these parameters.
    -   username—The user’s registered username
    -   newpassword—The user’s new password.
    -   otp—The one-time password (OTP) sent to the user’s email
3.  Replace the body parameter values with your own information.
    1.  For username, enter the username that you registered and logged in with.
    2.  For newpassword, enter a new password that includes uppercase and lowercase characters, a number, and a special character.
    3.  For otp, enter the OTP that you received from your initial request to the forgot password endpoint.
4.  To send the request to Headless Forgot Password API, click **Send**.

    Salesforce validates the OTP and finishes resetting the password. If the request is successful, Salesforce sends a success response. Here’s an example response in Postman.

    ```

    ```

## Code Examples

```
{
    "status_code": "success"
}
```
