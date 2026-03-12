---
title: "Headless Registration Flow: Send an Authorization Request"
domain: headless-identity
topic: headless-registration-flow-send-an-authorization-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.966Z
estimatedTokens: 759
keywords: [Headless, Registration, Flow, Send, Authorization, API, initialize, Code, Credentials, log, user, part, call, Login]
---

# Headless Registration Flow: Send an Authorization Request

> After you send a registration request to Headless Registration API, initialize the
    Authorization Code and Credentials Flow to complete the registration and log the user in. For
    this part of the flow, you call Headless Login API.

# Headless Registration Flow: Send an Authorization Request

After you send a registration request to Headless Registration API, initialize the Authorization Code and Credentials Flow to complete the registration and log the user in. For this part of the flow, you call Headless Login API.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From the Headless Identity API Demo folder in Postman, select **Registration - Authorize**.

    Note the location of the POST request. It’s the /services/oauth2/authorize endpoint on your Experience Cloud site.

2.  To see the headers, click **Headers**. The authorization request for registration includes these headers and values.
    -   An Auth-Request-Type header set to user-registration
    -   An Auth-Verification-Type header set to email. This header specifies the method that was used to verify the user’s identity—note that its value matches the verificationmethod body parameter from your initial registration request.
    -   An Authorization header with the value Basic <base64Encoded identifier:otp>
3.  Update the Authorization header.
    1.  In a text editor, paste the request ID from the registration response from the previous step.
    2.  After the request ID, enter a colon, and then paste the one-time password (OTP) that you received from Salesforce, such as identifier:OTP.
    3.  Base64-encode the resulting value. For example, if you Base64-encode the string identifier:OTP, you get aWRlbnRpZmllcjpPVFA=.
    4.  In Postman, paste this value into the Authorization header to replace <base64Encoded identifier:otp>.
4.  To see the request body, click **Body**. The authorization request for registration includes these parameters, some of which you already entered when you set your variables.
    -   response\_type—The type of response you want to receive. For this flow, it’s set to code\_credentials.
    -   client\_id—The external client app consumer key
    -   redirect\_uri—The external client app callback URL, which points to the OAuth 2.0 echo endpoint on your Experience Cloud site
    -   scope—An optional comma-separated list of scopes. For this demo, you can leave it blank.
5.  To send the request to Headless Login API, click **Send**.

    Salesforce verifies the request ID and OTP and uses the request ID to retrieve the queued user data from the registration request. Salesforce then calls the headless Apex registration handler that you configured in your Experience Cloud site. The registration handler uses the queued data to create a user.

    If the request is successful, Salesforce returns a 302 redirect to a preconfigured URL containing the authorization code. The echo endpoint extracts the code and other parameters from the 302 redirect and returns them to your app in JSON format. Here’s an example response in Postman.

    ```

    ```


Next, you exchange the authorization code for an access token.

## Code Examples

```
{
    "code": "aPrxCdr***************",
    "sfdc_community_url": "https://MyExperienceCloudSite.my.site.com",
    "sfdc_community_id": "0DBXXXXXXXXXXXXXXXX"
}
```
