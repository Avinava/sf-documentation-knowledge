---
title: "Expense Analysis"
domain: loyalty
topic: expense-analysis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.579Z
estimatedTokens: 511
keywords: [Expense, Analysis, Stores, product, receipt, submitted, review, member, access, LoyaltyProgramMember, Resource, Rest, Sample, Output]
---

# Expense Analysis

> Stores the product and information from a receipt submitted for review by a member. To
  get the receipt information, access the LoyaltyProgramMember object reference.

# Expense Analysis

Stores the product and information from a receipt submitted for review by a member. To get the receipt information, access the LoyaltyProgramMember object reference.

## Resource

```

```

## Rest Method Type

POST

## Signature

```

```

## Request Parameters

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| filename | String | The file that contains the image of the receipt. | Required |
| membershipnumber | String | The unique identifier of the member. | Required |

## Sample Output

```

```

## Output Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| confidenceStatus | String | The receipt analysis status based on the confidence value defined in the app.Possible values are:SuccessFailurePartial |
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
services/apexrest/expense-analysis
```

```
curl --location --request POST 'https://yourInstance.salesforce.com/services/apexrest/expense-analysis/?filename=8925687d-7489-7ecb-5307-19d4d33bc650.jpeg&membershipnumber=124345696' \
--header 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' \
--header 'Cookie: BrowserId=MZ4W4WebEe6bX0_gtfh0Tw; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
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
