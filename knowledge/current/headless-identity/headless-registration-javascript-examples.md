---
title: "Headless Registration JavaScript Examples"
domain: headless-identity
topic: headless-registration-javascript-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.020Z
estimatedTokens: 277
keywords: [Headless, Registration, JavaScript, Examples, high-level, understand, how, implement, single-page, app, Authorization, Token, Exchange]
---

# Headless Registration JavaScript Examples

> Use these high-level  examples to understand how to implement headless registration for
  a single-page app.

# Headless Registration JavaScript Examples

Use these high-level examples to understand how to implement headless registration for a single-page app.

## Authorization Request

The authorization request for headless registration is similar to the request for headless login, but instead of passing the username and password in the header, you pass in the request identifier and OTP. The request also contains a few additional headers that aren’t required for headless login. Here’s an example.

```

```

Salesforce validates the request identifier and OTP and registers the user by calling the headless registration handler. When the user is created, Salesforce returns an authorization code response. You use a callback endpoint to extract the code and other parameters and return them to your app.

## Token Exchange

When your app receives the authorization code, it exchanges the code for an access token. This part of the flow is identical to the token exchange in headless login.

```

```

The result is an access token that you can use to request user information and establish the user’s session.

## Code Examples

```
// Make a POST Request to Authorize
  client = new XMLHttpRequest();
  client.open("POST", expDomain + authorizationURI, true);
  client.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
  //Headers for registration variation of the Code and Credentials flow
  client.setRequestHeader("Auth-Request-Type", "user-registration");
  client.setRequestHeader("Auth-Verification-Type", verificationMethod);
  //Request identifier is returned from the /init/registration endpoint, and requestCredential is the OTP sent in the email or SMS.
  client.setRequestHeader("Authorization", "Basic " + btoa(requestIdentifier + ':' + requestCredential));
  
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
