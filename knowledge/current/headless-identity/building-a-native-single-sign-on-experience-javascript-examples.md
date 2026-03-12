---
title: "Building a Native Single Sign-On Experience JavaScript Examples"
domain: headless-identity
topic: building-a-native-single-sign-on-experience-javascript-examples
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.915Z
estimatedTokens: 393
keywords: [Building, Native, Sign-On, Experience, JavaScript, Examples, high-level, understand, how, SSO, single-page, app, configuration, uses, redirect-based]
---

# Building a Native Single Sign-On Experience JavaScript Examples

> Use these high-level examples to understand how to create a native single sign-on (SSO)
  experience for a single-page app. This configuration uses a redirect-based flow to make it seem
  like your app natively integrates with an SSO provider. It isn’t technically headless, but the
  user experience is the same as the headless flows.

# Building a Native Single Sign-On Experience JavaScript Examples

Use these high-level examples to understand how to create a native single sign-on (SSO) experience for a single-page app. This configuration uses a redirect-based flow to make it seem like your app natively integrates with an SSO provider. It isn’t technically headless, but the user experience is the same as the headless flows.

## Constructing an Authorization URL

A key part of this configuration is the sso-provider parameter. You use this parameter to identify the SSO provider configured in Salesforce, whether it’s an authentication provider or a SAML identity provider. During the redirect-based flow, Salesforce checks for this parameter and redirects to the SSO provider so the user can log in.

To use the sso-provider parameter with a redirect-based flow, you must first construct an authorization URL. This example constructs the URL and redirects the browser to the Experience Cloud site.

```

```

The browser is redirected to the Experience Cloud site briefly, so the user never sees the Experience Cloud login page. The browser then automatically redirects to the SSO provider and loads the provider’s login page. The user logs in with their credentials from the provider. The browser is again briefly redirected to Salesforce before being automatically redirected to your app.

## Token Exchange

The app must process the redirect to get the authorization code.

```

```

In the last line, this example calls a token exchange function. Here’s an example of this function.

```

```

## Code Examples

```
//Setup the Authorization URL
  redirectURL = expDomain + _authorizationURI;
  
  //Add Params to the Authorization URL
  redirectURL = redirectURL + '?client_id=' + _this.clientId;
  redirectURL = redirectURL + '&redirect_uri=' + _this.ssoCallbackURL; 
  redirectURL = redirectURL + '&state=' + storeState(state);
  redirectURL = redirectURL + '&response_type=code';

  //Specificy the SSO Provider
  redirectURL = redirectURL + '&sso_provider=' + ssoProviderDevName;

  //Add Scopes
  if (scopes!= null) {
      redirectURL = redirectURL + '&scopes=' + scopes;
  }

  //Add Code Challenge 
  requestBody = requestBody + "&code_challenge=" + generateCodeChallenge(); 

  //Redirect the Browser
  window.location.href = redirectURL;
```

```
// Get URL Params from the callback URL
  queryString = window.location.search;
  urlParams = new URLSearchParams(queryString);
  console.log('Loading Callback Params: ' + urlParams); 

  //Create the Code Response from the URL params
  codeResponse = new Object; 
  codeResponse.code = urlParams.get('code');
  codeResponse.state = urlParams.get('state');
  codeResponse.sfdc_community_url = urlParams.get('sfdc_community_url');

  // Call the common token exhcange method.
  tokenExchange(codeResponse, getCodeChallenge(), authorizationType.SSOLogin, null);
```

```
function tokenExchange(response, codeChallenge, authorizeType, uniqueVisitorId) {
  // Get Values from Code Response
  code = response.code;
  stateIdentifier = response.state; 
  baseURL = response.sfdc_community_url; 

  state = null; 
  // validate state if it was present
  if (stateIdentifier != null) {
    state = getState(stateIdentifier, true); 
    if (state == null) {
      onError("A state param was sent back but no state was found");
      return; 
    }
  }

  // Create Client
  client = new XMLHttpRequest();
  client.open("POST", expDomain + tokenURI, true);
  client.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Build Request Body
  requestBody = "code=" + code + "&grant_type=authorization_code&client_id=" + _this.clientId + "&redirect_uri=" + _this.callbackURL;

  // Add PKCE
  requestBody = requestBody + "&code_verifier=" + generateCodeVerifier(); 

  // Send Request
  client.send(requestBody);
  client.onreadystatechange = function() {
    if(this.readyState == 4) {
      if (this.status == 200) {
          //Access Tokens have been returned
          console.log("Code and Credntial Flow, token response: ");
          console.log(JSON.parse(client.response)); 
        } else {
          onError("An error occured during token exchange for " + authorizeType, client.response)
        }  
      }
    }
  }
```
