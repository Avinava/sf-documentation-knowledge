---
title: "Define an Action Link and Post with a Feed Element"
domain: apex-guide
topic: define-an-action-link-and-post-with-a-feed-element
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.299Z
estimatedTokens: 774
keywords: [Define, Action, Link, Post, Feed, Element, group, associate, item]
---

# Define an Action Link and Post with a Feed Element

> Create one action link in an action link group, associate the action link group with a
    feed item, and post the feed item.

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

## Code Examples

```apex
ConnectApi.ActionLinkGroupDefinitionInput actionLinkGroupDefinitionInput = new ConnectApi.ActionLinkGroupDefinitionInput();
ConnectApi.ActionLinkDefinitionInput actionLinkDefinitionInput = new ConnectApi.ActionLinkDefinitionInput();
ConnectApi.RequestHeaderInput requestHeaderInput1 = new ConnectApi.RequestHeaderInput();
ConnectApi.RequestHeaderInput requestHeaderInput2 = new ConnectApi.RequestHeaderInput();

// Create the action link group definition.
actionLinkGroupDefinitionInput.actionLinks = New List<ConnectApi.ActionLinkDefinitionInput>();
actionLinkGroupDefinitionInput.executionsAllowed = ConnectApi.ActionLinkExecutionsAllowed.OncePerUser;
actionLinkGroupDefinitionInput.category = ConnectApi.PlatformActionGroupCategory.Primary;
// To Do: Verify that the date is in the future.
// Action link groups are removed from feed elements on the expiration date.
datetime myDate = datetime.newInstance(2016, 3, 1);
actionLinkGroupDefinitionInput.expirationDate = myDate;

// Create the action link definition.
actionLinkDefinitionInput.actionType = ConnectApi.ActionLinkType.Api;
actionLinkDefinitionInput.actionUrl = '/services/data/v33.0/chatter/feed-elements';
actionLinkDefinitionInput.headers = new List<ConnectApi.RequestHeaderInput>();
actionLinkDefinitionInput.labelKey = 'Post';
actionLinkDefinitionInput.method = ConnectApi.HttpRequestMethod.HttpPost;
actionLinkDefinitionInput.requestBody = '{"subjectId": "me","feedElementType": "FeedItem","body": {"messageSegments": [{"type": "Text","text": "This is a test post created via an API action link."}]}}';
actionLinkDefinitionInput.requiresConfirmation = true;

// To Do: Substitute an OAuth value for your Salesforce org. 
requestHeaderInput1.name = 'Authorization';
requestHeaderInput1.value = 'OAuth <SALESFORCE_ACCESS_TOKEN>';
actionLinkDefinitionInput.headers.add(requestHeaderInput1);

requestHeaderInput2.name = 'Content-Type';
requestHeaderInput2.value = 'application/json';
actionLinkDefinitionInput.headers.add(requestHeaderInput2);

// Add the action link definition to the action link group definition.
actionLinkGroupDefinitionInput.actionLinks.add(actionLinkDefinitionInput);

// Instantiate the action link group definition.
ConnectApi.ActionLinkGroupDefinition actionLinkGroupDefinition = ConnectApi.ActionLinks.createActionLinkGroupDefinition(Network.getNetworkId(), actionLinkGroupDefinitionInput);

ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
ConnectApi.FeedElementCapabilitiesInput feedElementCapabilitiesInput = new ConnectApi.FeedElementCapabilitiesInput();
ConnectApi.AssociatedActionsCapabilityInput associatedActionsCapabilityInput = new ConnectApi.AssociatedActionsCapabilityInput();
ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

// Set the properties of the feedItemInput object.
feedItemInput.body = messageBodyInput;
feedItemInput.capabilities = feedElementCapabilitiesInput;
feedItemInput.subjectId = 'me';

// Create the text for the post.
messageBodyInput.messageSegments = new List<ConnectApi.MessageSegmentInput>();
textSegmentInput.text = 'Click to post a feed item.';  
messageBodyInput.messageSegments.add(textSegmentInput);


// The feedElementCapabilitiesInput object holds the capabilities of the feed item.
// Define an associated actions capability to hold the action link group.
// The action link group ID is returned from the call to create the action link group definition. 
feedElementCapabilitiesInput.associatedActions = associatedActionsCapabilityInput;
associatedActionsCapabilityInput.actionLinkGroupIds = new List<String>();
associatedActionsCapabilityInput.actionLinkGroupIds.add(actionLinkGroupDefinition.id);

// Post the feed item. 
ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), feedItemInput);
```
