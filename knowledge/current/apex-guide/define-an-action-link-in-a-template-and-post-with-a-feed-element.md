---
title: "Define an Action Link in a Template and Post with a Feed Element"
domain: apex-guide
topic: define-an-action-link-in-a-template-and-post-with-a-feed-element
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.319Z
estimatedTokens: 613
keywords: [Define, Action, Link, Template, Post, Feed, Element, Create, action, link, group, instantiate, template., Step, Templates, Instantiate, Group, Associate, Item]
---

# Define an Action Link in a Template and Post with a Feed Element

> Create an action link and action link group and instantiate the action link group from
    a template.

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

## Code Examples

```apex
// Get the action link group template Id.
ActionLinkGroupTemplate template = [SELECT Id FROM ActionLinkGroupTemplate WHERE DeveloperName='Doc_Example'];

// Add binding name-value pairs to a map.
// The names are defined in the action link template(s) associated with the action link group template.
// Get them from Setup UI or SOQL.
Map<String, String> bindingMap = new Map<String, String>();
bindingMap.put('ApiVersion', 'v33.0');
bindingMap.put('Text', 'This post was created by an API action link.');
bindingMap.put('SubjectId', 'me');

// Create ActionLinkTemplateBindingInput objects from the map elements.
List<ConnectApi.ActionLinkTemplateBindingInput> bindingInputs = new List<ConnectApi.ActionLinkTemplateBindingInput>();

for (String key : bindingMap.keySet()) {
    ConnectApi.ActionLinkTemplateBindingInput bindingInput = new ConnectApi.ActionLinkTemplateBindingInput();
    bindingInput.key = key;
    bindingInput.value = bindingMap.get(key);
    bindingInputs.add(bindingInput);
}

// Set the template Id and template binding values in the action link group definition.
ConnectApi.ActionLinkGroupDefinitionInput actionLinkGroupDefinitionInput = new ConnectApi.ActionLinkGroupDefinitionInput();
actionLinkGroupDefinitionInput.templateId = template.id;
actionLinkGroupDefinitionInput.templateBindings = bindingInputs;

// Instantiate the action link group definition.
ConnectApi.ActionLinkGroupDefinition actionLinkGroupDefinition =
 ConnectApi.ActionLinks.createActionLinkGroupDefinition(Network.getNetworkId(), actionLinkGroupDefinitionInput);

ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
ConnectApi.FeedElementCapabilitiesInput feedElementCapabilitiesInput = new ConnectApi.FeedElementCapabilitiesInput();
ConnectApi.AssociatedActionsCapabilityInput associatedActionsCapabilityInput = new ConnectApi.AssociatedActionsCapabilityInput();
ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

// Define the FeedItemInput object to pass to postFeedElement
feedItemInput.body = messageBodyInput;
feedItemInput.capabilities = feedElementCapabilitiesInput;
feedItemInput.subjectId = 'me';

// The MessageBodyInput object holds the text in the post
messageBodyInput.messageSegments = new List<ConnectApi.MessageSegmentInput>();

textSegmentInput.text = 'Click to post a feed item.';
messageBodyInput.messageSegments.add(textSegmentInput);


// The FeedElementCapabilitiesInput object holds the capabilities of the feed item.
// For this feed item, we define an associated actions capability to hold the action link group.
// The action link group ID is returned from the call to create the action link group definition. 
feedElementCapabilitiesInput.associatedActions = associatedActionsCapabilityInput;
associatedActionsCapabilityInput.actionLinkGroupIds = new List<String>();
associatedActionsCapabilityInput.actionLinkGroupIds.add(actionLinkGroupDefinition.id);

// Post the feed item. 
ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), feedItemInput);
```

## Related Topics

- Define an Action Link and Post with a Feed Element (atlas.en-us.apexcode.meta/apexcode/connectapi_examples_define_post_action_link.htm)
