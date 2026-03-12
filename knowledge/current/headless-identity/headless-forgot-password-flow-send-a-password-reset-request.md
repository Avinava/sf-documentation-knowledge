---
title: "Headless Forgot Password Flow: Send a Password Reset Request"
domain: headless-identity
topic: headless-forgot-password-flow-send-a-password-reset-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.941Z
estimatedTokens: 411
keywords: [Headless, Forgot, Password, Flow, Send, Reset, initialize, walks, sending, Postman]
---

# Headless Forgot Password Flow: Send a Password Reset Request

> To initialize the Headless Forgot Password Flow, send a password reset request. This
  example walks you through sending a request with Postman.

# Headless Forgot Password Flow: Send a Password Reset Request

To initialize the Headless Forgot Password Flow, send a password reset request. This example walks you through sending a request with Postman.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From the Headless Identity API Demo folder in Postman, select **Forgot Password - Initialize**.

    Note the location of the POST request. It’s the /services/auth/headless/forgot\_password endpoint on your Experience Cloud site.

2.  To see the request body, click **Body**. The password reset request includes these parameters.
    -   username—The user’s registered username
    -   recaptcha—A reCAPTCHA token. Because you configured your flow to require reCAPTCHA , you must include this parameter.
3.  Replace the body parameter values with your own information.
    1.  For username, enter the username that you registered and logged in with.
    2.  For recaptcha, enter a valid reCAPTCHA token from Google. You get this token when you implement reCAPTCHA on your app.
4.  To send the request to Headless Forgot Password API, click **Send**.

    If the request is successful, Salesforce sends a one-time password (OTP) to your email address. Here’s an example response in Postman. To avoid leaking user information, Salesforce always returns this response if reCAPTCHA validation succeeds, even if the user doesn’t exist.

    ```

    ```

5.  Check your email to confirm that you received the OTP.

Next, use the OTP to finish changing your password.

## Code Examples

```
{
    "status_code": "otp_sent"
}
```
