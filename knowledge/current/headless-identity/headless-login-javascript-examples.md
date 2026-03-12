---
title: "Headless Login JavaScript Examples"
domain: headless-identity
topic: headless-login-javascript-examples
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.909Z
estimatedTokens: 212
keywords: [Headless, Login, JavaScript, Examples, high-level, understand, how, implement, single-page, app, Authorization, Token, Exchange]
---

# Headless Login JavaScript Examples

> Use these high-level examples to understand how to implement headless login for a
    single-page app.

# Headless Login JavaScript Examples

Use these high-level examples to understand how to implement headless login for a single-page app.

## Authorization Request

The Authorization Code and Credentials Flow enables users to log in with a username and password. A core concept of this flow is making an authorization request to Headless Login API. This client-side JavaScript example shows you how to send an authorization request.

```

```

## Token Exchange

After receiving the authorization request, Salesforce validates the username and password and returns an authorization code. The app then calls the token endpoint to exchange the code for an access token. This client-side JavaScript example shows the token exchange.

```

```

The result is an access token that you can use to request user information and establish the user’s session.

## Code Examples

```
// Make a POST Request to Authorize
  client = new XMLHttpRequest();
  client.open("POST", expDomain + authorizationURI, true);
  client.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  //Headers for the Username and Password Code and Cred Flow
  client.setRequestHeader("Auth-Request-Type", "Named-User");
  client.setRequestHeader("Authorization", "Basic " + btoa(username + ':' + password));

  //Request Body
  requestBody = "response_type=code_credentials&client_id=" +  clientId + "&redirect_uri=" + callbackURL; 

  // Add State
  if (state != null) {
    requestBody = requestBody + '&state=' + storeState(state); 
  }

  // Add Scopes
  if (scopes != null) {
    requestBody = requestBody + '&scope=' + scopes; 
  }

  // PKCE Enabled
  requestBody = requestBody + "&code_challenge=" + generateCodeChallenge(); 

  // Send the Authorization Request
  client.send(requestBody);

  // Handle the Authorization Response
  client.onreadystatechange = function() {
    if(this.readyState == 4) {
      if (this.status == 200) {
          //Auth Code has been returned, perform token exchange
          tokenExchange(JSON.parse(client.response), null, authorizeType, uniqueVisitorId); 
      } else {
        onError("An Error Occured during Authorize", client.response); 
      }
    } 
  }
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
