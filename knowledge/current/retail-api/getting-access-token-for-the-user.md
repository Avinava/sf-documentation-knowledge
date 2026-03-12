---
title: "Getting Access Token for the User"
domain: retail-api
topic: getting-access-token-for-the-user
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.276Z
estimatedTokens: 123
keywords: [Getting, Access, Token, User, perform, subsequent, requests, Integration, API, accessing, tokens, multiple, ways, sending, RTR]
---

# Getting Access Token for the User

> To perform subsequent requests to the Integration API, you must get an access token for accessing
    the Integration API. You can get access tokens in multiple ways before sending requests to the
    RTR API endpoints. This example uses the simple username-password combination (not recommended
    

# Getting Access Token for the User

To perform subsequent requests to the Integration API, you must get an access token for accessing the Integration API. You can get access tokens in multiple ways before sending requests to the RTR API endpoints. This example uses the simple username-password combination (not recommended in non-DEV environments). The response contains "access\_token", which is needed for subsequent requests.

## cURL example:

```

```

## Sample Response:

```

```

## Code Examples

```
curl --location --request POST 'https://login.salesforce.com/services/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: BrowserId=S0x8SC_iEeu04d3AnIIK0w; CookieConsentPolicy=0:0' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'client_id={{CONNECTED APP CLIENT ID}}' \
--data-urlencode 'client_secret={{CONNECTED APP CLIENT SECRET}}' \
--data-urlencode 'username={{USERNAME}}' \
--data-urlencode 'password={{PASSWORT}}'
```

```
{
"access_token": "xyz!xyz",
"instance_url": "xyz",
"id": "https://login.salesforce.com/id/xyz/xyz",
"token_type": "Bearer",
"issued_at": "1631625949723",
"signature": "xyz“
}
```
