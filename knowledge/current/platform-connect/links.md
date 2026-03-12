---
title: "Links"
domain: platform-connect
topic: links
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.521Z
estimatedTokens: 715
keywords: [Links, JSON-formatted, containing, URLs, helpful, integrating, canvas, app, enterpriseUrl, calls, Salesforce, enterprise, WSDL, OAuth, Scopes]
---

# Links

> The Links object is a JSON-formatted object containing URLs that can be helpful when
                integrating your canvas app. For example, use the enterpriseUrl
                to make calls into Salesforce using the enterprise WSDL.

# Links

The Links object is a JSON-formatted object containing URLs that can be helpful when integrating your canvas app. For example, use the enterpriseUrl to make calls into Salesforce using the enterprise WSDL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

The links that are listed here are the most commonly used links. They can be helpful when you’re building the REST endpoints for your canvas app. For a complete list of links and related functionality, see the [Lightning Platform REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_what_is_rest_api.htm) and the [Connect REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm).

| Field | Description |
| --- | --- |
| chatterFeedItemsUrl | URL to return Chatter feed items for the context organization. This link will still work for integrations created prior to API version 66.0, because the link only points to functionality within API versions 31.0 and earlier. |
| chatterFeedsUrl | URL to return Chatter feeds for the context organization. This link will still work for integrations created prior to API version 66.0, because the link only points to functionality within API versions 31.0 and earlier. |
| chatterGroupsUrl | URL to return Chatter groups for the context organization. |
| chatterUsersUrl | URL that returns Chatter users for the context organization. |
| enterpriseUrl | URL to make API calls back to Salesforce using the enterprise WSDL. |
| loginUrl | URL of the login server for the instance the context user is logged into. Used internally. |
| metadataUrl | URL to make calls to the Metadata API. |
| partnerUrl | URL to make API calls back to Salesforce using the partner WSDL. |
| queryUrl | URL to issue a SOQL query. |
| recentItemsUrl | URL to access recent items. |
| restUrl | URL to return a list of REST API resources. |
| searchUrl | URL to issue a SOSL search. |
| sobjectUrl | URL that retrieves metadata or data from Salesforce objects. |
| userUrl | URL for the context user. |

The following code snippet shows an example of the Links object.

```

```

## Available Links and OAuth Scopes

Links that the canvas app can use depend on what OAuth scopes are selected when you create the connected app.

| Scope | Description |
| --- | --- |
| Access your basic information | userUrlloginUrl |
| Access and manage your data | enterpriseUrlmetadataUrlpartnerUrlqueryUrlrecentItemsUrlrestUrlsearchUrlsobjectUrl |
| Access and manage your Chatter data | chatterFeedItemsUrlchatterFeedsUrlchatterGroupsUrlchatterUsersUrl |
| Full access | All links |

#### See Also

-   [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)

## Code Examples

```
"links":
{
    "chatterFeedItemsUrl":"/services/data/v31.0/chatter/feed-items", 
    "chatterFeedsUrl":"/services/data/v31.0/chatter/feeds", 
    "chatterGroupsUrl":"/services/data/v66.0/chatter/groups", 
    "chatterUsersUrl":"/services/data/v66.0/chatter/users", 
    "enterpriseUrl":"/services/Soap/c/66.0/00Dx00000001hxy", 
    "loginUrl":"https://login.salesforce.com",
    "metadataUrl":"/services/Soap/m/66.0/00Dx00000001hxy", 
    "partnerUrl":"/services/Soap/u/66.0/00Dx00000001hxy", 
    "queryUrl":"/services/data/v66.0/query/", 
    "recentItemsUrl":"/services/data/v66.0/recent/", 
    "restUrl":"/services/data/v66.0/", 
    "searchUrl":"/services/data/v66.0/search/", 
    "sobjectUrl":"/services/data/v66.0/sobjects/", 
    "userUrl":"/005x0000001SyyEAAS" 
}
```

## Related Topics

- Context (atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)
