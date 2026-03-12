---
title: "Configuration (POST)"
domain: revenue-cloud
topic: configuration-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.878Z
estimatedTokens: 648
keywords: [Configuration, POST, Retrieve, product’s, configurator, Execute, rules, notify, users, any, violations, changes, product, bundle, attributes]
---

# Configuration (POST)

> Retrieve and update a product’s configuration from a configurator.
      Execute configuration rules and notify users of any violations for changes to product bundle,
      attributes, or product quantity within a bundle. Additionally, get pricing details for the
      configured bundle.

# Configuration (POST)

Retrieve and update a product’s configuration from a configurator. Execute configuration rules and notify users of any violations for changes to product bundle, attributes, or product quantity within a bundle. Additionally, get pricing details for the configured bundle.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

This example shows a sample to initiate a context based on a transaction ID.

```

```

This example shows a sample to add, update, or delete a node in an existing context.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| added​Nodes | Configurator Added Node Input[] | List of added context nodes that’s passed to the product configurator. | Optional | 60.0 |
| configurator​Options | Configurator Options Input[] | Options to pass to the configurator. | Optional | 60.0 |
| context​ResponseType | String | Specifies the type of transaction context response. Valid values are:Delta—Returns the sales transaction items that are added or updated.Full—Returns all sales transaction items in a transaction.None—Returns empty transaction context response.Product—Returns the sales transaction items related to the product that's being configured. | Required for large sales transactions with more than 1000 line items and less than 15K line items. | 65.0 |
| correlation​Id | String | ID that’s specified for traceability of logs. | Optional | 60.0 |
| deleted​Nodes | Configurator Deleted Node Input[] | List of deleted context nodes that’s passed to the product configurator. | Optional | 60.0 |
| qualification​Context | User Context Input[] | Details such as account ID, contact ID, and context ID that are used for executing qualification rules. | Optional | 60.0 |
| transaction​ContextId | String | ID of the transaction context. | Optional | 60.0 |
| transaction​Id | String | ID of the sales transaction that’s being configured such as a quote or an order. | Required | 60.0 |
| transaction​LineId | String | ID of the top-level line item that’s being configured. | Optional | 60.0 |
| updated​Nodes | Configurator Updated Node Input[] | List of updated context nodes that’s passed to the product configurator. | Optional | 60.0 |

Response body for POST

[Configuration Details](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_configurator_output.htm "Output representation of the product configuration details.")

## Code Examples

```
/connect/cpq/configurator/actions/configure
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/configurator/actions/configure
```

```
{
    "transactionLineId": "0QLDE000000IBXw4AO",
    "transactionId": "0Q0xx0000000001GAA",
    "correlationId": "c95246d4-102c-4ecd-a263-f74ac525d1e5",
    "configuratorOptions": {
        "executePricing": true,
        "returnProductCatalogData": true
    },
    "qualificationContext": {
        "accountId": "001xx0000000001AAA",
        "contactId": "003xx00000000D7AAI"
    }
}
```

```
{
    "transactionLineId": "0QLDE000000IBXw4AO",
    "transactionId": "0Q0DE000000ISHJs81",
    "correlationId": "c95246d4-102c-4ecd-a263-f74ac525d1e5",
    "configuratorOptions": {
        "executePricing": true,
        "returnProductCatalogData": true,
        "qualifyAllProductsInTransaction": true,
        "validateProductCatalog": true,
        "validateAmendRenewCancel": true,
        "executeConfigurationRules": true,
        "addDefaultConfiguration": true
    },
    "contextResponseType": "Full",
    "qualificationContext": {
        "accountId": "001xx0000000001AAA",
        "contactId": "003xx00000000D7AAI"
    },
    "transactionContextId": "008d27d7-e004-4906-a949-ee7d7c323c77",
    "addedNodes": [
        {
            "path": ["0Q0DE000000ISHJs81", "sti2_id"],
            "addedObject": {
                "id": "ref_sti2_id",
                "SalesTransactionSource": "sti2_id",
                "PricebookEntry": "01uxx0000000001AAA",
                "ProductSellingModel": "0jPxx0000000001AAA",
                "businessObjectType": "QuoteLineItem",
                "Quantity": 10,
                "UnitPrice": 2.0,
                "Product": "01txx0000000001AAA"
            }
        },
        {
            "path": ["0Q0DE000000ISHJs81", "ref_sti2_id","ref_stir1_id"],
            "addedObject": {
                "id": "ref_stir1_id",
                "businessObjectType": "QuoteLineItemRelationship",
                "MainItem": "0QLDE000000IBXw4AO",
                "AssociatedItem": "ref_sti2_id",
                "ProductRelatedComponent": "0dSxx0000000001AAA",
                "ProductRelationshipType": "0yoxx0000000001AAA",
                "AssociatedItemPricing": "IncludedInBundlePrice"
                
            }
        }
    ],
    "updatedNodes": [
        {
            "path": ["0Q0DE000000ISHJs81", "0QLDE000000IBXw4AO"],
            "updatedAttributes": {
                "Quantity": 5
            }
        }
    ],
    "deletedNodes": [
        {
            "path": ["0Q0DE000000ISHJs81", "0QLDE000000IBXw4AO"]
        }
    ]
}
```

## Related Topics

- Configurator Added Node Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_added_node_input.htm)
- Configurator Options Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_options_input.htm)
- Configurator Deleted Node Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_deleted_node_input.htm)
- User Context
                                            Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_user_context_input.htm)
- Configurator Updated Node Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_updated_node_input.htm)
- Configuration
              Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_configurator_output.htm)
