---
title: "Headless Forgot Password JavaScript Examples"
domain: headless-identity
topic: headless-forgot-password-javascript-examples
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.905Z
estimatedTokens: 189
keywords: [Headless, Forgot, Password, JavaScript, Examples, high-level, understand, how, implement, Flow, single-page, app]
---

# Headless Forgot Password JavaScript Examples

> Use these high-level  examples to understand how to implement the Headless Forgot
  Password Flow for a single-page app.

# Headless Forgot Password JavaScript Examples

Use these high-level examples to understand how to implement the Headless Forgot Password Flow for a single-page app.

The Headless Forgot Password Flow contains two requests to the same endpoint. You initialize the flow with a request to Headless Forgot Password API. Here’s a function that you can call to initialize the password reset.

```

```

This request results in Salesforce sending the user a one-time password (OTP).

For the second request, you pass the username, new password, and OTP to Headless Forgot Password API. Here’s a function that you can call to complete the password change.

```

```

Because both requests call the same endpoint, you can use one function for both calls.

```

```

## Code Examples

```
//This is the function call to initialize the forgot password request
forgotPasswordRequest(username, null, null, recapchaToken, forgotPasswordProcess.init, callbackFunction);
```

```
//This is the function call to complete the forgot password request
forgotPasswordRequest(username, password, otp, null, forgotPasswordProcess.changePassword, callbackFunction)
```

```
function forgotPasswordRequest(username, password, otp, recapchaToken, forgotPasswordProcessStep, callbackFunction) {
    client = new XMLHttpRequest();
    client.open("POST", expDomain + forgotPasswordURI, true);
    client.setRequestHeader("Content-Type", "application/json");

    requestBody = {
    username: username,
    newpassword: password,
    otp: otp,
    recaptcha: recapchaToken
    }

    client.send(JSON.stringify(requestBody)); 

    client.onreadystatechange = function() {
      if(this.readyState == 4) {
        if (this.status == 200) {
          callbackFunction(JSON.parse(client.response), username, forgotPasswordProcessStep)
        } else {
          this.onError("An Error Occured during Forgot Password Step: " + forgotPasswordProcessStep, client.response); 
        }
      } 
    }
  }
```
