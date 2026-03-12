---
title: "Headless Registration Flow: Send a Registration Request"
domain: headless-identity
topic: headless-registration-flow-send-a-registration-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.961Z
estimatedTokens: 745
keywords: [Headless, Registration, Flow, Send, configure, start, API, walks, sending, Postman]
---

# Headless Registration Flow: Send a Registration Request

> To configure the Headless Registration Flow, start with a request to Headless
  Registration API. This example walks you through sending a request with Postman.

# Headless Registration Flow: Send a Registration Request

To configure the Headless Registration Flow, start with a request to Headless Registration API. This example walks you through sending a request with Postman.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


For the Headless Registration Flow, we use these three examples from the headless Postman collection.

-   Registration - Initialize
-   Registration - Authorize
-   Registration - Token Exchange

1.  From the Headless Identity API Demo folder in Postman, select **Registration - Initialize**.

    Note the location of the POST request. It’s the /services/auth/headless/init/registration endpoint on your Experience Cloud site.

2.  To see the request body, click **Body**. The body for the initial registration request includes these parameters.
    -   userdata—Contains basic information about the user, including their first name, last name, email address, and username.
    -   customdata—Contains custom information that you want to collect in addition the data in the userdata parameter. In this example, it contains the user’s mobile phone number, street address, city, state, ZIP code, and privacy policy.
    -   password—The user’s password.
    -   recaptcha—A reCAPTCHA token. Because you configured your flow to require reCAPTCHA, this parameter is required.
    -   verificationmethod—The method you want to use to verify the user’s identity. They can use email or SMS. For this example, we use email.
3.  For the request body, update the parameter values that aren’t filled out already.
    1.  In the userdata parameter, change userFirstName and userLastName to your own first name and last name.
    2.  For email, enter your own email address.
    3.  For username, enter a test username. You can use your email address for the username.
    4.  For recaptcha, enter a valid reCAPTCHA token from Google.

        Generating this token is out of the scope of this guide. Google provides several examples, which you can find at [https://developers.google.com/recaptcha/docs/v3](https://developers.google.com/recaptcha/docs/v3 "HTML (New Window)").

4.  To send the request to Headless Registration API, click **Send**.

    Salesforce receives the request and queues the user data to be processed later. It creates an identifier to track the request. If the request is successful, Salesforce sends you a response that includes your verification method and request identifier. Here’s an example response from Postman.

    ```

    ```

    Because you configured email as the verification method, Salesforce also sends an email containing a one-time password (OTP) to your email address.

5.  Check your email for the OTP. You use it in the next step.

Next, you send an authorization request to initialize the Authorization Code and Credentials Flow and log the user in.

## Code Examples

```
{
    "status": "success",
    "email": "testemail@example.com",
    "identifier": "dg3o**********"
}
```
