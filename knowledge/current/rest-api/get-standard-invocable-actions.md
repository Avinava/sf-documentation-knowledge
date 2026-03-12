---
title: "Get Standard Invocable Actions"
domain: rest-api
topic: get-standard-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.359Z
estimatedTokens: 436
keywords: [Get, Standard, Invocable, Actions, list, standard, invocable, actions, provided, Salesforce., require, special, access., resource, REST, API, version, 32.0, later., Syntax]
---

# Get Standard Invocable Actions

> Gets the list of standard invocable actions that are
      provided by Salesforce. Some actions require special access. This resource is available in
      REST API version 32.0 and later.

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

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/actions/standard -H "Authorization: Bearer token"
```

```
{
  "actions" : [ {
    "label" : "Post to Chatter",
    "name" : "chatterPost",
    "type" : "CHATTERPOST",
    "url" : "/services/data/v66.0/actions/standard/chatterPost"
  }, {
    "label" : "Enable Folder Support for a Content Workspace (Library)",
    "name" : "contentWorkspaceEnableFolders",
    "type" : "CONTENTWORKSPACE_ENABLE_FOLDERS",
    "url" : "/services/data/v66.0/actions/standard/contentWorkspaceEnableFolders"
  }, {
    "label" : "Send Email",
    "name" : "emailSimple",
    "type" : "EMAILSIMPLE",
    "url" : "/services/data/v66.0/actions/standard/emailSimple"
  }, {
    "label" : "Submit for Approval",
    "name" : "submit",
    "type" : "SUBMITAPPROVAL",
    "url" : "/services/data/v66.0/actions/standard/submit"
  }, {
    "label" : "Deactivate Session-Based Permission Set",
    "name" : "deactivateSessionPermSet",
    "type" : "DEACTIVATE_SESSION_PERM_SET",
    "url" : "/services/data/v66.0/actions/standard/deactivateSessionPermSet"
  }, {
    "label" : "Activate Session-Based Permission Set",
    "name" : "activateSessionPermSet",
    "type" : "ACTIVATE_SESSION_PERM_SET",
    "url" : "/services/data/v66.0/actions/standard/activateSessionPermSet"
  }, {
    "label" : "Choose Price Book",
    "name" : "choosePricebook",
    "type" : "CHOOSE_PRICEBOOK",
    "url" : "/services/data/v66.0/actions/standard/choosePricebook"
  }, {
    "label" : "Routing Address Verification",
    "name" : "routingAddressVerification",
    "type" : "ROUTING_ADDRESS_VERIFICATION",
    "url" : "/services/data/v66.0/actions/standard/routingAddressVerification"
  }, {
    "label" : "Create Customer Contact Request",
    "name" : "contactRequestAction",
    "type" : "CONTACT_REQUEST_ACTION",
    "url" : "/services/data/v66.0/actions/standard/contactRequestAction"
  }, {
    "label" : "Publish Managed Content Release",
    "name" : "managedContentReleasePublish",
    "type" : "MANAGED_CONTENT_RELEASE_PUBLISH",
    "url" : "/services/data/v66.0/actions/standard/managedContentReleasePublish"
  } ]
}
```
