---
title: "Cross-Domain XHR"
domain: platform-connect
topic: cross-domain-xhr
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.349Z
estimatedTokens: 548
keywords: [Cross-Domain, XHR, Canvas, apps, loaded, Salesforce, iFrame, app, own, domain, can't, XML, HTTP, calls, back]
---

# Cross-Domain XHR

> Canvas apps are loaded on a Salesforce page in an iFrame. The Canvas
  app has its own domain and can't make XML HTTP request (XHR) calls back to the
  *.salesforce.com domain. You can develop and deploy your own proxies as part
  of the SDK, however, Canvas provides a client-side proxy written in
  JavaScript. This proxy enables client-side XHR calls back to
  Salesforce.

# Cross-Domain XHR

Canvas apps are loaded on a Salesforce page in an iFrame. The Canvas app has its own domain and can't make XML HTTP request (XHR) calls back to the \*.salesforce.com domain. You can develop and deploy your own proxies as part of the SDK, however, Canvas provides a client-side proxy written in JavaScript. This proxy enables client-side XHR calls back to Salesforce.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_connect)

#### Important

To prepare your Canvas apps for the new web browser restrictions on third-party cookies, see [How Third-Party Cookie Restrictions Impact Salesforce Canvas Apps](https://help.salesforce.com/s/articleView?id=002192971&type=1&language=en_US "HTML (New Window)") in Salesforce Help.

If you use this proxy from the client to make an XHR request, the API forwards the request to the outer iFrame and the request is submitted on your behalf. When the request is complete, the SDK calls the client’s callback function with the results. Here are some examples of how you can make XHR calls:

-   [Getting a List of Chatter Users](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_code_example_list_of_chatter_users.htm)
-   [Posting to a Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_code_example_posting_to_chatter_feed.htm)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

The SDK supports cross-domain XHR calls, however, it shouldn’t be used to make same-domain calls.

-   **[Getting a List of Chatter Users](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_code_example_list_of_chatter_users.htm)**

-   **[Posting to a Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_code_example_posting_to_chatter_feed.htm)**


#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

## Related Topics

- Getting a List of Chatter Users (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_code_example_list_of_chatter_users.htm)
- Posting to a Chatter Feed (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_code_example_posting_to_chatter_feed.htm)
- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
