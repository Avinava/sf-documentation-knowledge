---
title: "Field Mapping in Channel Order App v2 and Later"
domain: packagingGuide
topic: field-mapping-in-channel-order-app-v2-and-later
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.652Z
estimatedTokens: 511
keywords: [Mapping, Channel, Order, App, Later, COA, retired, service, detail, you’re, upgrading, v1.39, earlier, how, map]
---

# Field Mapping in Channel Order App v2 and Later

> In Channel Order App (COA) v2, we retired some fields on the service order detail
    object. If you’re upgrading from v1.39 or earlier to v2 or later, the table shows how the
    retired fields map to new ones.

# Field Mapping in Channel Order App v2 and Later

In Channel Order App (COA) v2, we retired some fields on the service order detail object. If you’re upgrading from v1.39 or earlier to v2 or later, the table shows how the retired fields map to new ones.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Field names are prefixed with CHANNEL\_ORDERS\_\_ unless otherwise noted.

## Fields

| Old Field (Retired) | New Field | Notes |
| --- | --- | --- |
| Application__c | None | Field retired. This field doesn’t populate with data for orders created in COA v2 and later. |
| Customer_Price__c | Customer_Price_Per_Month__c | Represents the product price per unit per month. |
| Fixed_Price__c | pc_Fixed_Price__c | Represents the fixed price of the product at the time the order was created. |
| Floor_Price__c | None | Field retired. This field doesn’t populate with data for orders created in COA v2 and later. |
| Estimated_SFDC_Price_Per_Month__c | SFDC_Price__c | Represents the total amount due to Salesforce based on the estimated value of the product. |
| Number_Of_Users_ISVforce__c | None | Field retired. This field doesn’t populate with data for orders created in COA v2 and later. |
| pc_Floor_Price__c | None | Field retired. This field doesn’t populate with data for orders created in COA v2 and later. |
| pc_PNR__c | PNR__c | Represents the percent net revenue of the product at the time the order was created. |
| pc_Pricing_Unit__c | None | Field retired. This field doesn’t populate with data for orders created in COA v2 and later. |
| pc_Product_ID__c | Product_ID__c | Represents the ID of the product. |
| Pricing_Type__c | pc_Pricing_Type__c | Represents the pricing model of the product. |
| Product_Line_Desc_Overridden__c | None | Field retired. This field doesn’t populate with data for orders created in COA v2 and later. |
| Special_Instructions__c | None | Field retired. This field doesn’t populate with data for orders created in COA v2 and later. |
