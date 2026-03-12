---
title: "Salesforce Omnichannel Inventory Actions"
domain: api-action
topic: salesforce-omnichannel-inventory-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.153Z
estimatedTokens: 370
keywords: [Salesforce, Omnichannel, Inventory, Actions, Manage, availability, provide, commerce, experiences, flows, REST, HTTP]
---

# Salesforce Omnichannel Inventory Actions

> Manage inventory availability and provide omnichannel commerce
   experiences in flows with Salesforce Omnichannel Inventory.

# Salesforce Omnichannel Inventory Actions

Manage inventory availability and provide omnichannel commerce experiences in flows with Salesforce Omnichannel Inventory.

For more information about using Omnichannel Inventory actions in flows, see [Salesforce Omnichannel Inventory Flow Core Actions](https://help.salesforce.com/HTViewHelpDoc?id=flow_ref_elements_oci_actions_list.htm&language=en_US "HTML (New Window)") in Salesforce Help.

These actions are available in API version 51.0 and later.

Your org must have Salesforce Omnichannel Inventory enabled.

## Supported REST HTTP Methods

URI

Get a specific Omnichannel Inventory action:

/services/data/vXX.X/actions/standard/oci\_action\_name

Formats

JSON, XML

HTTP Methods

GET

Authentication

Authorization: Bearer token

Notes

You can also call the corresponding Connect REST API endpoints or Apex ConnectApi methods. For more information, see [Omnichannel Inventory Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_omnichannel_inventory_resources.htm "HTML (New Window)") in the Connect REST API Developer Guide and [ConnectApi Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_connect_api.htm "HTML (New Window)") in the Apex Developer Guide.

In flows, Omnichannel Inventory action inputs and outputs use Apex-defined variables that map to input and output classes in the ConnectApi namespace.
