---
title: "Billing Fields on Asset"
domain: blng-dev
topic: billing-fields-on-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.948Z
estimatedTokens: 194
keywords: [Billing, Asset, Standard, custom, extend, represent, assets]
---

# Billing Fields on Asset

> Standard and custom fields extend the standard Asset object for use
         in Billing to represent information about assets.

# Billing Fields on Asset

Standard and custom fields extend the standard Asset object for use in Billing to represent information about assets.

## Fields

| Field | Details |
| --- | --- |
| blng__InvoiceLineBalanceUpdated__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when balances of the invoice lines related to the asset were last updated. |
| blng__InvoiceLineBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of balances on all the posted invoice lines related to the asset. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: Asset](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asset.htm)
