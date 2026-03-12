---
title: "Getting a List of Chatter Users"
domain: platform-connect
topic: getting-a-list-of-chatter-users
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.343Z
estimatedTokens: 193
keywords: [Getting, Chatter, Users, code, call]
---

# Getting a List of Chatter Users

> The following code example shows a call to return a list
of Chatter users.

# Getting a List of Chatter Users

The following code example shows a call to return a list of Chatter users.

```

```

#### See Also

-   [Cross-Domain XHR](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_intro.htm "Canvas apps are loaded on a Salesforce page in an iFrame. The Canvas app has its own domain and can't make XML HTTP request (XHR) calls back to the *.salesforce.com domain. You can develop and deploy your own proxies as part of the SDK, however, Canvas provides a client-side proxy written in JavaScript. This proxy enables client-side XHR calls back to Salesforce.")

-   [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)

-   [Links](atlas.en-us.platform_connect.meta/platform_connect/links_object.htm)

## Code Examples

```
// Paste the signed request string into a JavaScript object for easy access.
var sr = JSON.parse('<%=signedRequestJson%>');
// Reference the Chatter user's URL from Context.Links object.
var chatterUsersUrl = sr.context.links.chatterUsersUrl;

// Make an XHR call back to salesforce through the supplied browser proxy. 
Sfdc.canvas.client.ajax(chatterUsersUrl, 
    {client : sr.client,
    success : function(data){
    // Make sure the status code is OK.
    if (data.status === 200) {
        // Alert with how many Chatter users were returned.
        alert("Got back "  + data.payload.users.length + 
        " users"); // Returned 2 users
    }
}});
```

## Related Topics

- Cross-Domain XHR (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_intro.htm)
- Context (atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)
- Links (atlas.en-us.platform_connect.meta/platform_connect/links_object.htm)
