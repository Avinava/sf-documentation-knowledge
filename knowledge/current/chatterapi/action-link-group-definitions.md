---
title: "Action Link Group Definitions"
domain: chatterapi
topic: action-link-group-definitions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.529Z
estimatedTokens: 973
keywords: [Action, Link, Group, Definitions, definition, associate, feed, element, post, associated, actions, capability]
---

# Action Link Group Definitions

> Create an action link group definition. To
         associate an action link with a feed element, first create an action link group definition.
         Then post a feed element with an associated actions capability.

# Action Link Group Definitions

Create an action link group definition. To associate an action link with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability.

All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.

This image shows a feed element with one action link group containing two action links, **Download** and **Order**.![Action Link Group on Feed Item](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_order_download.png&folder=chatterapi)

Resource

```

```

```

```

Available since release

33.0

HTTP methods

POST

The Action Link Group Definitions resource doesn’t support query parameters for POST. You must use an Action Link Group Definition Input request body.

Request body for POST

[Action Link Group Definition Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_group_definition_input.htm#connect_requests_action_link_group_definition_input "The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.")

Response body for POST

[Action Link Group Definition](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group_definition.htm "The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.")

Example for POST

To associate an action link group with a feed item, first create an action link group definition:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

An actionUrl to a Salesforce resource can be relative. All others must be absolute and start with https://.

```

```

Next, associate the action link group with the feed item and post the feed item. Grab the action link group ID from the /connect/action-link-group-definitions response and pass it in a POST request to [/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.").

```

```

Different types of action links have different workflows to set their status property, whose value displays in the UI. See [/connect/action-links/actionLinkId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_specific.htm "Get information about or update the status of an action link. The status of the action link in combination with the labelKey property of the Action Link Definition Input determines the text that displays in the UI. To trigger the API request for Api and ApiAsync action links, set the status to PendingStatus.") for more information.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This example doesn’t include other capabilities, but feed items with action links do support other capabilities, such as content, polls, and links.

#### See Also

-   [Define Action Links and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm "Define actions links and post with a feed element.")

-   [*Salesforce Help*: Action Link Templates](https://help.salesforce.com/s/articleView?id=platform.action_link_group_template.htm&type=5&language=en_US "Salesforce Help: Action Link Templates - HTML (New Window)")

-   [Define Action Links in a Template and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link_template.htm "Define action links in a template and post with a feed element.")

## Code Examples

```
/connect/communities/communityId/action-link-group-definitions
```

```
POST /connect/action-link-group-definitions

{
    "actionLinks": [
    {
       "actionType" : "Api",
       "actionUrl" : "https://www.example.com/api/v1/confirm",
       "groupDefault" : "true",
       "headers" : [
       {
          "name" : "Authorization",
          "value" : "OAuth <SALESFORCE_ACCESS_TOKEN>
                        VNprqTeD12xYnvygD3JgPnNR._nmE6thZakAbBVJUsjUInMUaKMlkNKaWXdHO"
       },
       {
          "name" : "Content-Type",
          "value" : "application/json"
       },
       {
          "name" : "Accept",
          "value" : "application/json"
       },
       {
          "name" : "X-PrettyPrint",
          "value" : "1"
       } 
       ],
       "labelKey" : "Confirm",
       "method" : "HttpPost",
       "requiresConfirmation" : "true"
    },
    {
       "actionType" : "Api",
       "actionUrl" : "https://www.example.com/api/v1/deny",
       "groupDefault"  : "false",
       "headers" : [
       {
          "name" : "Authorization",
          "value" : "OAuth <SALESFORCE_ACCESS_TOKEN>
                        VNprqTeD12xYnvygD3JgPnNR._nmE6thZakAbBVJUsjUInMUaKMlkNKaWXdHO"
       },
       {
          "name" : "Content-Type",
          "value" : "application/json"
       },
       {
          "name" : "Accept",
          "value" : "application/json"
       },
       {
          "name" : "X-PrettyPrint",
          "value" : "1"
       } 
       ],
       "labelKey": "Deny",
       "method" : "HttpPost",
       "requiresConfirmation"  : "true"
    },
    {
       "actionType": "Ui",
       "actionUrl" : "https://www.example.com/reviewPage.html",
       "groupDefault" : "false",
       "labelKey" : "Review",
       "method" : "HttpGet",
       "requiresConfirmation" : "false"
    },
    "executionsAllowed" : "OncePerUser",
    "category" : "Primary",
    "expirationDate" :  "2014-05-09T18:45:39.000Z"
}
```

```
POST  /chatter/feed-elements

{
  "body": {
    "messageSegments": [
      {
        "type": "Text",
        "text": "Please confirm or deny this item. You can also click Review to provide more feedback."
       }
    ]
    },
  "subjectId": "me",
  "feedElementType": "FeedItem",
  "capabilities": {
    "associatedActions": {
      "actionLinkGroupIds": ["0AgRR0000004CTr0AM"]
    }
  }
}
```

## Related Topics

- Action Link Group Definition Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_group_definition_input.htm)
- Action Link Group
                     Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group_definition.htm)
- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- /connect/action-links/actionLinkId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_specific.htm)
- Define Action Links and Post with a Feed Element (atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm)
- Define Action Links in a Template and Post with a Feed Element (atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link_template.htm)
