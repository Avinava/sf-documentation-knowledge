---
title: "Process Program Rebate Type Products"
domain: channel-revenue-management-dev-guide
topic: process-program-rebate-type-products
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.809Z
estimatedTokens: 397
keywords: [Process, Program, Rebate, Products, Insert, records, Product, inserted, participate, inclusion, exclusion, defined, Filter, option, REST]
---

# Process Program Rebate Type Products

> Insert or delete the records in the Program Rebate Type Product
   object. The inserted products participate as inclusion or exclusion as defined in the
  Product Filter Type option on Program Rebate Type.

# Process Program Rebate Type Products

Insert or delete the records in the Program Rebate Type Product object. The inserted products participate as inclusion or exclusion as defined in the Product Filter Type option on Program Rebate Type.

For more information about how the processProgramRebateTypeProducts action inserts or deletes records, see [Create Payout Calculation Flows with Flow Actions](https://help.salesforce.com/s/articleView?id=xcloud.admin_rebates_flow_actions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

This object is available in API version 53.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/processProgramRebateTypeProducts

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| operationType | TypestringDescriptionRequired. The type of operation to be performed on the program rebate type product records.Possible values are:Delete—Deletes all program rebate type products for the specified program rebate type ID.Insert—Inserts all products as program rebate type products, preserves the existing ones. |
| productListViewId | TypestringDescriptionThe ID of the product list view containing the products to be added to the inclusion or exclusion list of this program rebate type.NoteThis field isn’t used when the type of operation is Delete. |
| programRebateTypeId | TypestringDescriptionRequired. The ID of the program rebate type for which the records are being processed. |

## Usage

**JSON Sample Request**

```

```

## Code Examples

```
{
   "inputs":[{
      "operationType" : "insert",
      "productListViewId": "00BHr00000Q6zqNMAR",
      "programRebateTypeId": "0hvHr000000HDQQIA4"
   }]
}
```
