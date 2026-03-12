---
title: "OAuth 2.0 Authentication for JavaScript Remoting"
domain: pages
topic: oauth-20-authentication-for-javascript-remoting
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.775Z
estimatedTokens: 409
keywords: [OAuth, 2.0, Authentication, JavaScript, Remoting, authenticate, requests, instead, requiring, standard, username, password, login, process, cross-application]
---

# OAuth 2.0 Authentication for JavaScript Remoting

> You can use OAuth 2.0 to authenticate JavaScript remoting requests, instead of requiring
  a standard username and password login process. OAuth allows cross-application and
  cross-organization integrations that aren’t possible to do securely with standard
  authentication.

# OAuth 2.0 Authentication for JavaScript Remoting

You can use OAuth 2.0 to authenticate JavaScript remoting requests, instead of requiring a standard username and password login process. OAuth allows cross-application and cross-organization integrations that aren’t possible to do securely with standard authentication.

A Visualforce page that uses OAuth for authentication configures it at the page level, and uses OAuth for all JavaScript remoting requests. Other than configuration, using JavaScript remoting is exactly the same.

Configuring OAuth for JavaScript remoting from a Visualforce page takes the following form:

```

```

Once oauthAccessToken is set, all JavaScript remoting requests use OAuth. The rest of your JavaScript remoting code can remain the same.

oauthAccessToken is an OAuth authentication token obtained by your page’s code. Obtaining and updating an access token is straightforward OAuth, with one addition. JavaScript remoting OAuth authentication requests the “visualforce” scope, so your token must be generated with this or a scope that contains it, including “web” or “full”. Set scope=visualforce (or “web” or “full”) in your OAuth request.

For information about obtaining access tokens, and using OAuth with the Lightning platform, see [Authenticating Remote Access Applications](https://help.salesforce.com/apex/HTViewHelpDoc?id=remoteaccess_authenticate.htm&language=en_US "HTML (New Window)") and [Digging Deeper into OAuth 2.0 in Salesforce](https://help.salesforce.com/articleView?id=remoteaccess_authenticate_overview.htm&language=en_US "HTML (New Window)") in the Salesforce online help.

## Code Examples

```
<script type="text/javascript">

    Visualforce.remoting.oauthAccessToken = <access_token>;

    // ...
</script>
```
