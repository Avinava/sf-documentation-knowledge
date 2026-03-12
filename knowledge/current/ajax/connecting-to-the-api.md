---
title: "Connecting to the API"
domain: ajax
topic: connecting-to-the-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.579Z
estimatedTokens: 952
keywords: [Connecting, API, portion, any, JavaScript, code, uses, AJAX, Toolkit, different, depending, whether, embedding, Visualforce, button]
---

# Connecting to the API

> The first portion of any JavaScript code that uses the AJAX Toolkit must make the
          toolkit available to the JavaScript code. The syntax for this is different depending on
          whether you are embedding JavaScript in a Visualforce page, or a button or
          link.

# Connecting to the API

The first portion of any JavaScript code that uses the AJAX Toolkit must make the toolkit available to the JavaScript code. The syntax for this is different depending on whether you are embedding JavaScript in a Visualforce page, or a button or link.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=ajax)

#### Note

API calls using the AJAX Toolkit always use the latest version of installed packages. If you’re working with Visualforce components, keep in mind that you cannot access deleted components from previous package versions using the API.

-   For Visualforce pages or any source other than a custom onclick JavaScript button, specify a <script\> tag that points to the toolkit file:

    ```

    ```

-   For Visualforce pages where <apex:page showHeader="false">, you must first set var \_\_sfdcSiteUrlPrefix = '{!$Site.Prefix}' before you load the toolkit file:

    ```

    ```

     Alternatively, you can set the site path directly on the UserContext Javascript object with UserContext.siteUrlPrefix = '{!$Site.Prefix}';.
-   For a custom onclick JavaScript button, use !requireScript to point to the toolkit file:

    ```

    ```

    The AJAX Toolkit picks up the endpoint and manages the session ID. You do not need to set them.

The version of the AJAX Toolkit is in the URL.

After this script executes, the toolkit is loaded and a global object, sforce.connection, is created. This object contains all of the API calls and AJAX Toolkit methods, and manages the session ID. No other session management is needed.

Salesforce checks the IP address from which the client app is logging in and blocks logins from unknown IP addresses. For a blocked login via the API, Salesforce returns a login fault. Then, the user must add their security token to the end of their password in order to log in. A security token is an automatically-generated key from Salesforce. For example, if a user's password is mypassword, and their security token is XXXXXXXXXX, then the user must enter mypasswordXXXXXXXXXX to log in. Users can obtain their security token by changing their password or resetting their security token via the Salesforce user interface. When a user changes their password or resets their security token, Salesforce sends a new security token to the email address on the user's Salesforce record. The security token is valid until a user resets their security token, changes their password, or has their password reset. When the security token is invalid, the user must repeat the login process to log in. To avoid this, the administrator can make sure the client's IP address is added to the organization's list of trusted IP addresses. For more information, see “Security Token” in the in the [SOAP API Developer Guide](https://resources.docs.salesforce.com/260/latest/en-us/sfdc/pdf/apex_api.pdf).

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=ajax)

#### Tip

We recommend that you obtain your security token via the Salesforce user interface from a trusted network prior to attempting to access Salesforce from a new location.

If single sign-on (SSO) is enabled, users who access the API or a desktop client can’t log in unless their IP address is included on your org’s list of trusted IP addresses or on their profile, if their profile has IP address restrictions set. The delegated authentication authority usually handles login lockout policies for users with the Uses Single Sign-On permission. However, if the security token is enabled, your login lockout settings determine how many times a user can try to log in with an invalid security token before getting locked out. For more information, see Setting Login Restrictions and Setting Password Policies in Salesforce Help.

## Code Examples

```
<apex:page>
          <script type="text/javascript" src="../../soap/ajax/66.0/connection.js"></script>
          <script type="text/javascript">
               sforce.connection.sessionId='{!GETSESSIONID()}';
          ...
          </script>
</apex:page>
```

```
<apex:page showHeader="false">
          <script type="text/javascript">
               var __sfdcSiteUrlPrefix = '{!$Site.Prefix}';
          </script>
          <script type="text/javascript" src="{!$Site.Prefix}/soap/ajax/66.0/connection.js"></script>
          <script type="text/javascript">
               sforce.connection.sessionId='{!GETSESSIONID()}';
          ...
          </script>
</apex:page>
```

```
<body>
     {!requireScript("/soap/ajax/66.0/connection.js")}
     ...
```
