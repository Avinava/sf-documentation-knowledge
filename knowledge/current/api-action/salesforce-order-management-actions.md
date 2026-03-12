---
title: "Salesforce Order Management Actions"
domain: api-action
topic: salesforce-order-management-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.156Z
estimatedTokens: 349
keywords: [Salesforce, Order, Management, Actions, Manage, fulfill, service, orders, flows, REST, HTTP]
---

# Salesforce Order Management Actions

> Manage, fulfill, and service orders in flows with Salesforce Order
   Management.

# Salesforce Order Management Actions

Manage, fulfill, and service orders in flows with Salesforce Order Management.

For more information about using Order Management actions in flows, see [Salesforce Order Management Flow Core Actions](https://help.salesforce.com/HTViewHelpDoc?id=flow_ref_elements_om_actions_list.htm&language=en_US "HTML (New Window)") in Salesforce Help.

These actions are available in API version 48.0 and later.

Your org must have a Salesforce Order Management license.

## Supported REST HTTP Methods

URI

Get a specific Order Management action:

/services/data/vXX.X/actions/standard/om\_action\_name

Formats

JSON, XML

HTTP Methods

GET

Authentication

Authorization: Bearer token

Notes

You can also call the corresponding Connect REST API endpoints or Apex ConnectApi methods. For more information, see [Order Management Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_order_management_resources.htm "HTML (New Window)") in the Connect REST API Developer Guide and [ConnectApi Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_connect_api.htm "HTML (New Window)") in the Apex Developer Guide.

In flows, Order Management action inputs and outputs use Apex-defined variables that map to input and output classes in the ConnectApi namespace.
