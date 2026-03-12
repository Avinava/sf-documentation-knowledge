---
title: "Receipt Status Updation"
domain: loyalty
topic: receipt-status-updation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.649Z
estimatedTokens: 550
keywords: [Receipt, Status, Updation, reward, points, transaction, journal, line, item, Resource, HTTP, Input, Sample, Output]
---

# Receipt Status Updation

> Update the status of the receipt, reward points, and create a transaction journal for
  each line item in the receipt.

# Receipt Status Updation

Update the status of the receipt, reward points, and create a transaction journal for each line item in the receipt.

## Resource

```

```

## HTTP methods

PUT

## Signature

```

```

## Input Parameters

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| comments | String | The comments related to the receipt status change. | Required |
| receiptId | String | The ID of the receipt whose status is to be updated. | Required |
| status | String | The status that’s assigned to the receipt after the update. Valid status values are:ApprovedCancelledDraftIn ProgressManual ReviewPendingProcessedRejected | Required |

## Sample Output

```

```

## Output Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| confidenceStatus | String | The receipt analysis status based on the confidence value defined in the app. Possible values are: Success, Failure, or Partial. |
| isEligible | Boolean | Indicates whether the item is eligible for accrual of loyalty points ((true)) or not ((false)).This value is displayed only if the admin has opted to display ineligible items in the receipt. |
| lineItem | String | The details of the receipt line item. |
| lineItemPrice | String | The total price of the receipt line item. |
| memberShipNumber | String | The unique identifier of the member. |
| price | Currency | The unit price of the receipt line item. |
| productName | String | The name of the product purchased. |
| quantity | Integer | The quantity of the product purchased. |
| receiptDate | dateTime | The date when the receipt is generated. |
| receiptNumber | String | The receipt number. |
| receiptSFDCId | Reference | The unique ID of the receipt. |
| storeAddress | String | The store address. |
| storeName | String | The store name. |

#### See Also

-   [*Salesforce Help*: Set Up Amazon Web Services](https://help.salesforce.com/s/articleView?id=sf.loyalty_receipt_setaws.htm&language=en_US)

-   [*Salesforce Help*: Set Up Salesforce Org With Loyalty Management Receipt Scanner Kit Unlocked Package](https://help.salesforce.com/s/articleView?id=sf.loyalty_receipt_setup_unlocked_package.htm&language=en_US)

## Code Examples

```
services/apexrest/receipt-status-updation
```

```
curl --location --request PUT 'https://yourInstance.salesforce.com/services/apexrest/receipt-status-updation/' \
--header 'Content-Type: text/plain' \
--header 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' \
--header 'Cookie: BrowserId=MZ4W4WebEe6bX0_gtfh0Tw; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1' \
--data '{
 "receiptId":"a0N1Q00000d0Rv4UAE",
 "status":"In Progress",
 "comments":""
}'
```

```
{
  "storeName" : "alpine nutrition",
  "storeAddress" : "625 Market Street,
6th floor,
San Francisco,
CA, 94105",
  "receiptSFDCId" : "a0PHp00000tstqeMAA",
  "receiptNumber" : "#0529-0002",
  "receiptDate" : "2020-01-10",
  "memberShipNumber" : "124345696",
  "lineItem" : [ {
    "quantity" : "5",
    "productName" : "Alpine-Bran Cereal",
    "price" : "$7.99",
    "lineItemPrice" : "$39.95",
    "isEligible" : false
  }, {
    "quantity" : "2",
    "productName" : "Alpine-Oat Cereal",
    "price" : "$7.99",
    "lineItemPrice" : "$15.98",
    "isEligible" : false
  } ],
  "confidenceStatus" : "Partial"
}
```
