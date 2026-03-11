---
title: "Get Standard Invocable Actions"
domain: rest-api
topic: get-standard-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.224Z
keywords: [Get, Standard, Invocable, Actions, Syntax, URI, Formats, HTTP, Methods, Authentication, Request, parameters, Example]
---

# Get Standard Invocable Actions

# Get Standard Invocable Actions

Gets the list of standard invocable actions that are provided by Salesforce. Some actions require special access. This resource is available in REST API version 32.0 and later.

For Salesforce Omnichannel Inventory and Salesforce Order Management, you can also call the corresponding Connect REST API endpoints or Apex ConnectApi methods. For more information, see [Salesforce Omnichannel Inventory Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_omnichannel_inventory_resources.htm "HTML (New Window)") and [Salesforce Order Management Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_order_management_resources.htm "HTML (New Window)") in the Connect REST API Developer Guide, and [ConnectApi Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexref/apex_classes_connect_api.htm "HTML (New Window)") in the Apex Reference Guide.

The Post to Chatter action supports the following features using a special format in the body post. For example, the string Hi @\[005000000000001\], check out #\[some\_topic\] is stored appropriately as Hi @Joe, check out #some\_topic where “@Joe” and “#some\_topic” are links to the user and topic, respectively.

-   @mentions using @\[<id>\]
-   Topic links using #\[<topicString>\]

For more information about actions, see the Actions Developer Guide.

## Syntax

## URI

/services/data/vXX.X/actions/standard

## Formats

JSON, XML

## HTTP Methods

GET

## Authentication

Authorization: Bearer token

## Request parameters

None required

## Example

Example Request

```

```

Example Response Body

```

```