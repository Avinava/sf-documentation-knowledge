---
title: "createActionLinkGroupDefinition​(communityId,
      actionLinkGroup)"
domain: apex-reference
topic: createactionlinkgroupdefinitioncommunityid-actionlinkgroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.943Z
keywords: [createActionLinkGroupDefinition​, communityId, actionLinkGroup, Create, action, link, group, definition., associate, feed, element, first, create, Then, post, associated, actions, capability., API, Version]
---

# createActionLinkGroupDefinition​(communityId,
      actionLinkGroup)

> Create an action link group definition. To associate an action link
      group with a feed element, first create an action link group definition. Then post a feed
      element with an associated actions capability.

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