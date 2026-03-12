---
title: "Posting to a Chatter Feed"
domain: platform-connect
topic: posting-to-a-chatter-feed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.345Z
estimatedTokens: 196
keywords: [Posting, Chatter, Feed, code, call, post, item, context, user’s]
---

# Posting to a Chatter Feed

> The following code example shows a call to post an item
to the context user’s Chatter feed.

# Posting to a Chatter Feed

The following code example shows a call to post an item to the context user’s Chatter feed.

```

```

#### See Also

-   [Cross-Domain XHR](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_intro.htm "Canvas apps are loaded on a Salesforce page in an iFrame. The Canvas app has its own domain and can't make XML HTTP request (XHR) calls back to the *.salesforce.com domain. You can develop and deploy your own proxies as part of the SDK, however, Canvas provides a client-side proxy written in JavaScript. This proxy enables client-side XHR calls back to Salesforce.")

-   [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)

-   [Links](atlas.en-us.platform_connect.meta/platform_connect/links_object.htm)

## Code Examples

```
var sr = JSON.parse('<%=signedRequestJson%>');
// Reference the Chatter user's URL from Context.Links object.
var url = sr.context.links.chatterFeedsUrl+"/news/"+sr.context.user.userId+"/feed-items";
var body = {body : {messageSegments : [{type: "Text", text: "Some Chatter Post"}]}};

Sfdc.canvas.client.ajax(url,
    {client : sr.client,
        method: 'POST',
        contentType: "application/json",
        data: JSON.stringify(body),
        success : function(data) {
        if (201 === data.status) {
             alert("Success");
             }
        }
    });
```

## Related Topics

- Cross-Domain XHR (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_intro.htm)
- Context (atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)
- Links (atlas.en-us.platform_connect.meta/platform_connect/links_object.htm)
