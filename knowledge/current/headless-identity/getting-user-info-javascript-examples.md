---
title: "Getting User Info JavaScript Examples"
domain: headless-identity
topic: getting-user-info-javascript-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.907Z
estimatedTokens: 79
keywords: [Getting, User, Info, JavaScript, Examples, access, token, via, headless, registration, login, retrieve, endpoint, understand, how]
---

# Getting User Info JavaScript Examples

> When you get an access token via headless registration or headless login, you can
        retrieve user information with a request to the User Info endpoint. Use this example to
        understand how.

# Getting User Info JavaScript Examples

When you get an access token via headless registration or headless login, you can retrieve user information with a request to the User Info endpoint. Use this example to understand how.

In this example, the access token is passed in an Authorization Bearer header.

```

```

## Code Examples

```
function getUserInfo(accessToken) {
    client = new XMLHttpRequest();
    client.open("GET", expDomain + userInfoURI, true);
    client.setRequestHeader("Content-Type", "application/json");
    client.setRequestHeader("Authorization", 'Bearer '  + accessToken);
    client.send(); 

    client.onreadystatechange = function() {
        if(this.readyState == 4) {
            if (this.status == 200) {
                //User Info response
                console.log(client.response);
            } else {
                console.log(client.response)
                onError("An Error Occured during Forgot Password Step: " + forgotPasswordProcessStep, client.response); 
            }
        } 
    }
}
```
