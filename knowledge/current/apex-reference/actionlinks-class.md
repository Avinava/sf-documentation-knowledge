---
title: "ActionLinks Class"
domain: apex-reference
topic: actionlinks-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.316Z
estimatedTokens: 4033
namespace: ConnectApi
keywords: [ActionLinks, action, link, group, definition, associate, feed, element, post, associated, actions, capability, Usage, createActionLinkGroupDefinition​, communityId]
---

# ActionLinks Class

> Create an action link group definition. To associate an action link
      group with a feed element, first create an action link group definition. Then post a feed
      element with an associated actions capability.

**Namespace:** `ConnectApi`

# ActionLinks Class

Create, delete, and get information about an action link group definition; get information about an action link group; get action link diagnostic information.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Usage

An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.

There are two views of an action link and an action link group: the definition, and the context user’s view. The definition includes potentially sensitive information, such as authentication information. The context user’s view is filtered by visibility options and the values reflect the state of the context user.

Action link definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission. Use these methods to operate on action link group definitions (which contain action link definitions).

-   [createActionLinkGroupDefinition​(communityId, actionLinkGroup)](#apex_ConnectAPI_ActionLinks_createActionLinkGroupDefinition_1 "Create an action link group definition. To associate an action link group with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability.")
-   [deleteActionLinkGroupDefinition(communityId, actionLinkGroupId)](#apex_ConnectAPI_ActionLinks_deleteActionLinkGroupDefinition_1 "Delete an action link group definition. Deleting an action link group definition removes all references to it from feed elements.")
-   [getActionLinkGroupDefinition(communityId, actionLinkGroupId)](#apex_ConnectAPI_ActionLinks_getActionLinkGroupDefinition_1 "Get information about an action link group definition.")

Use these methods to operate on a context user’s view of an action link or an action link group.

-   [getActionLink(communityId, actionLinkId)](#apex_ConnectAPI_ActionLinks_getActionLink_1 "Get information about an action link, including state for the context user.")
-   [getActionLinkGroup(communityId, actionLinkGroupId)](#apex_ConnectAPI_ActionLinks_getActionLinkGroup_1 "Get information about an action link group including state for the context user.")
-   [getActionLinkDiagnosticInfo(communityId, actionLinkId)](#apex_ConnectAPI_ActionLinks_getActionLinkDiagnosticInfo_1 "Get diagnostic information returned when an action link executes. Diagnostic information is given only for users who can access the action link.")

For information about how to use action links, see [Working with Action Links](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_features_action_links.htm).

## ActionLinks Methods

These methods are for ActionLinks. All methods are static.

-   **[createActionLinkGroupDefinition​(communityId, actionLinkGroup)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_createActionLinkGroupDefinition_1)**
    Create an action link group definition. To associate an action link group with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability.
-   **[deleteActionLinkGroupDefinition(communityId, actionLinkGroupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_deleteActionLinkGroupDefinition_1)**
    Delete an action link group definition. Deleting an action link group definition removes all references to it from feed elements.
-   **[getActionLink(communityId, actionLinkId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_getActionLink_1)**
    Get information about an action link, including state for the context user.
-   **[getActionLinkDiagnosticInfo(communityId, actionLinkId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_getActionLinkDiagnosticInfo_1)**
    Get diagnostic information returned when an action link executes. Diagnostic information is given only for users who can access the action link.
-   **[getActionLinkGroup(communityId, actionLinkGroupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_getActionLinkGroup_1)**
    Get information about an action link group including state for the context user.
-   **[getActionLinkGroupDefinition(communityId, actionLinkGroupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_getActionLinkGroupDefinition_1)**
    Get information about an action link group definition.

### createActionLinkGroupDefinition​(communityId, actionLinkGroup)

Create an action link group definition. To associate an action link group with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActionLinkGroupDefinition createActionLinkGroupDefinition(String communityId, ConnectApi.ActionLinkGroupDefinitionInput actionLinkGroup)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkGroup

Type: [ConnectApi.ActionLinkGroupDefinitionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_action_link_group_definition.htm#apex_connectapi_input_action_link_group_definition "The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.")

A ConnectApi.ActionLinkGroupDefinitionInput object that defines the action link group.

#### Return Value

Type: [ConnectApi.ActionLinkGroupDefinition](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_action_link_group_definition.htm#apex_connectapi_output_action_link_group_definition "The definition of an action link group. Information in the action link group definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link group definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.")

#### Usage

An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.

All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.

Information in the action link group definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link group definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Invoking ApiAsync action links from an app requires a call to set the status. However, there isn’t currently a way to set the status of an action link using Apex. To set the status, use Connect REST API. See the Action Link resource in the [Connect REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/ "HTML (New Window)")for more information.

#### Example for Defining an Action Link and Posting with a Feed Element

For more information about this example, see [Define an Action Link and Post with a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_define_post_action_link.htm).

```

```

#### Example for Defining an Action Link in a Template and Posting with a Feed Element

For more information about this example, see [Define an Action Link in a Template and Post with a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_define_post_action_link_template.htm).

```

```

### deleteActionLinkGroupDefinition(communityId, actionLinkGroupId)

Delete an action link group definition. Deleting an action link group definition removes all references to it from feed elements.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static void deleteActionLinkGroupDefinition(String communityId, String actionLinkGroupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkGroupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the action link group.

#### Return Value

Type: Void

#### Usage

Information in the action link group definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link group definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.

### getActionLink(communityId, actionLinkId)

Get information about an action link, including state for the context user.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PlatformAction getActionLink(String communityId, String actionLinkId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the action link.

#### Return Value

Type: [ConnectApi.PlatformAction](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_platform_action.htm#apex_connectapi_output_platform_action "A platform action instance with state information for the context user.")

### getActionLinkDiagnosticInfo(communityId, actionLinkId)

Get diagnostic information returned when an action link executes. Diagnostic information is given only for users who can access the action link.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActionLinkDiagnosticInfo getActionLinkDiagnosticInfo(String communityId, String actionLinkId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the action link.

#### Return Value

Type: [ConnectApi.ActionLinkDiagnosticInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_action_link_diagnostic.htm#apex_connectapi_output_action_link_diagnostic "Any diagnostic information that may exist for an executed action link. Diagnostic info is provided only for users who can access the action link.")

### getActionLinkGroup(communityId, actionLinkGroupId)

Get information about an action link group including state for the context user.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PlatformActionGroup getActionLinkGroup(String communityId, String actionLinkGroupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkGroupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the action link group.

#### Return Value

Type: [ConnectApi.PlatformActionGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_platform_action_group.htm#apex_connectapi_output_platform_action_group "A platform action group instance with state appropriate for the context user.")

#### Usage

All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Action link groups are accessible by clients, unlike [action link group definitions](#apex_ConnectAPI_ActionLinks_getActionLinkGroupDefinition_1 "Get information about an action link group definition.").

### getActionLinkGroupDefinition(communityId, actionLinkGroupId)

Get information about an action link group definition.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActionLinkGroupDefinition getActionLinkGroupDefinition(String communityId, String actionLinkGroupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkGroupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the action link group.

#### Return Value

Type: [ConnectApi.ActionLinkGroupDefinition](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_action_link_group_definition.htm#apex_connectapi_output_action_link_group_definition "The definition of an action link group. Information in the action link group definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link group definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.")

#### Usage

Information in the action link group definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link group definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.

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

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createActionLinkGroupDefinition​(communityId, actionLinkGroup) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm)
- deleteActionLinkGroupDefinition(communityId, actionLinkGroupId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm)
- getActionLink(communityId, actionLinkId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm)
- getActionLinkDiagnosticInfo(communityId, actionLinkId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm)
- getActionLinkGroup(communityId, actionLinkGroupId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm)
- getActionLinkGroupDefinition(communityId, actionLinkGroupId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ActionLinkGroupDefinitionInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_action_link_group_definition.htm)
- ConnectApi.ActionLinkGroupDefinition (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_action_link_group_definition.htm)
