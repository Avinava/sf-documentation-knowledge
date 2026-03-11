---
title: "Define an Action Link in a Template and Post with a Feed Element"
domain: apex-guide
topic: define-an-action-link-in-a-template-and-post-with-a-feed-element
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.835Z
keywords: [Define, Action, Link, Template, Post, Feed, Element, Step, Create, Templates, Instantiate, Group, Associate, Item]
---

# Define an Action Link in a Template and Post with a Feed Element

# Define an Action Link in a Template and Post with a Feed Element

Create an action link and action link group and instantiate the action link group from a template.

This example creates the same action link and action link group as the example [Define an Action Link and Post with a Feed Element](atlas.en-us.apexcode.meta/apexcode/connectapi_examples_define_post_action_link.htm#connectapi_examples_define_post_action_link "Create one action link in an action link group, associate the action link group with a feed item, and post the feed item."), but this example instantiates the action link group from a template.

## Step 1: Create the Action Link Templates

1.  From Setup, enter Action Link Templates in the Quick Find box, then select **Action Link Templates**.
2.  Use these values in a new Action Link Group Template:
    
    | Field | Value |
    | --- | --- |
    | Name | Doc Example |
    | Developer Name | Doc_Example |
    | Category | Primary action |
    | Executions Allowed | Once per User |
    
3.  Use these values in a new Action Link Template:
    
    | Field | Value |
    | --- | --- |
    | Action Link Group Template | Doc Example |
    | Action Type | Api |
    | Action URL | /services/data/{!Bindings.ApiVersion}/chatter/feed-elements |
    | User Visibility | Everyone can see |
    | HTTP Request Body | { "subjectId":"{!Bindings.SubjectId}", "feedElementType":"FeedItem", "body":{ "messageSegments":[ { "type":"Text", "text":"{!Bindings.Text}" } ] } } |
    | HTTP Headers | Content-Type: application/json |
    | Position | 0 |
    | Label Key | Post |
    | HTTP Method | POST |
    
4.  Go back to the Action Link Group Template and select Published. Click **Save**.

## Step 2: Instantiate the Action Link Group, Associate it with a Feed Item, and Post it

This example calls [ConnectApi.ActionLinks.createActionLinkGroupDefinition​(communityId, actionLinkGroup)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_createActionLinkGroupDefinition_1) to create an action link group definition.

It calls [ConnectApi.ChatterFeeds.postFeedElement(communityId, feedElement)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_3) to associate the action link group with a feed item and post it.

```

```