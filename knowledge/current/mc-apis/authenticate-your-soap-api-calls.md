---
title: "Authenticate Your SOAP API Calls"
domain: mc-apis
topic: authenticate-your-soap-api-calls
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.374Z
estimatedTokens: 588
keywords: [Authenticate, SOAP, API, Calls, step, API-based, integration, authenticating, OAuth, access, token, authentication, secure, way, Marketing]
---

# Authenticate Your SOAP API Calls

> The first step in an API-based integration is authenticating your calls. OAuth access token authentication is the most secure way to authenticate SOAP API calls. You can also use a Marketing Cloud username and password to authenticate your calls. UsernameToken authentication is not as secure as acce

# Authenticate Your SOAP API Calls

The first step in an API-based integration is authenticating your calls. OAuth access token authentication is the most secure way to authenticate SOAP API calls. You can also use a Marketing Cloud username and password to authenticate your calls. UsernameToken authentication is not as secure as access token authentication.

## Authenticate with an Access Token

1.  [Get a Client ID and Secret](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/api-integration.htm). Obtain a client ID and secret by creating a package in Marketing Cloud with an API Integration component. Once you have your client ID and secret credentials, use them to acquire an OAuth access token directly from the API authentication service.

    > The Marketing Cloud user for your integrated account must have the Installed Package | Administer permission.

2.  [Get an access token](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/create-integration-enhanced.htm). Call the REST auth service to obtain an access token.

3.  Use the access token to authenticate your SOAP calls in the header.

    > This access token authorizes calls in the account where you created the token. It does not flow down through child accounts.
    >
    > ```
    > <soap:header>
    >   <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
    > </soap:header>
    > ```


## Authenticate with UsernameToken

1.  When setting up the Marketing Cloud user, select **API User**.
2.  For Marketing Cloud accounts with role-based permissions, select the **Role | Email | Admin | API Access | WebServices API** permission. For accounts with legacy permissions, select the **Grant the user access to the web services** permission.
3.  Enable the username and password security setting. Go to **Setup | Security | Security Settings** and find the setting under **Username and Logins**.
4.  Use the Marketing Cloud username and password to authenticate your SOAP calls in the header.
    ```
    <soap:header>
     <Security xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <UsernameToken>
             <Username>XXXXX</Username>
             <Password>XXXXX</Password>
         </UsernameToken>
     </Security>
    </soap:header>
    ```

## Code Examples

```
<soap:header>
  <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
</soap:header>
```

```
<soap:header>
 <Security xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
     <UsernameToken>
         <Username>XXXXX</Username>
         <Password>XXXXX</Password>
     </UsernameToken>
 </Security>
</soap:header>
```
