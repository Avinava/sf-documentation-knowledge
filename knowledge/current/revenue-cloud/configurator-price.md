---
title: "Configurator Price"
domain: revenue-cloud
topic: configurator-price
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.513Z
estimatedTokens: 284
keywords: [Configurator, Price, Output, representation, pricing, details, product, configuration.]
---

# Configurator Price

> Output representation of the pricing details in a product configuration.

# Configurator Price

Output representation of the pricing details in a product configuration.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currency​IsoCode | String | Currency ISO code of the price book entry. | Small, 60.0 | 60.0 |
| effective​From | String | Date from when the price book entry is effective. | Small, 60.0 | 60.0 |
| effective​To | String | Date until when the price book entry is effective. | Small, 60.0 | 60.0 |
| isDefault | Boolean | Indicates if this price book entry is the default pricing model (true) or not (false). | Small, 60.0 | 60.0 |
| is​Selected | Boolean | Indicates if this price book entry is selected (true) or not (false). | Small, 60.0 | 60.0 |
| pricebook​EntryId | String | ID of the price book entry. | Small, 60.0 | 60.0 |
| pricebookId | String | Pricebook2 ID of the price book entry. | Small, 60.0 | 60.0 |
| pricing​Model | Configurator Pricing Model[] | Pricing model details of the price book entry. | Small, 60.0 | 60.0 |
| unitPrice | Double | Unit price of the price book entry. | Small, 60.0 | 60.0 |

## Related Topics

- Configurator Pricing Model (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_configurator_pricing_model_output.htm)
