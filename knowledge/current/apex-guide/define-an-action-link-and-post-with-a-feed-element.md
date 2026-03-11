---
title: "Define an Action Link and Post with a Feed Element"
domain: apex-guide
topic: define-an-action-link-and-post-with-a-feed-element
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.830Z
keywords: [Define, Action, Link, Post, Feed, Element, Note]
---

# Define an Action Link and Post with a Feed Element

# Define an Action Link and Post with a Feed Element

Create one action link in an action link group, associate the action link group with a feed item, and post the feed item.

![Action link on a feed item in the feed.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_task_intial.png&folder=apexcode)

When a user clicks the action link, the action link requests the Connect REST API resource /chatter/feed-elements, which posts a feed item to the user’s feed. After the user clicks the action link and it executes successfully, its status changes to successful and the feed item UI is updated.

![Successfully executed action link.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_task_success.png&folder=apexcode)

Refresh the user’s feed to see the new post.

![Post created by an action link.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_task_post.png&folder=apexcode)

This simple example shows you how to use action links to call a Salesforce resource.

Think of an action link as a button on a feed item. Like a button, an action link definition includes a label (labelKey). An action link group definition also includes other properties like a URL (actionUrl), an HTTP method (method), and an optional request body (requestBody) and HTTP headers (headers).

When a user clicks this action link, an HTTP POST request is made to a Connect REST API resource, which posts a feed item to Chatter. The requestBody property holds the request body for the actionUrl resource, including the text of the new feed item. In this example, the new feed item includes only text, but it could include other capabilities such as a file attachment, a poll, or even action links.

Just like radio buttons, action links must be nested in a group. Action links within a group share the properties of the group and are mutually exclusive (you can click only one action link within a group). Even if you define only one action link, it must be part of an action link group.

This example calls [ConnectApi.ActionLinks.createActionLinkGroupDefinition​(communityId, actionLinkGroup)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_createActionLinkGroupDefinition_1) to create an action link group definition.

It saves the action link group ID from that call and associates it with a feed element in a call to [ConnectApi.ChatterFeeds.postFeedElement(communityId, feedElement)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_3).

To use this code, substitute an OAuth value for your own Salesforce org. Also, verify that the expirationDate is in the future. Look for the “To Do” comments in the code.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If the post fails, check the OAuth ID.