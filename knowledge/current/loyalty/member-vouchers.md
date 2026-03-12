---
title: "Member Vouchers"
domain: loyalty
topic: member-vouchers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.146Z
estimatedTokens: 476
keywords: [Member, Vouchers, issued, loyalty, program, Retrieve, asynchronously, requesting, data, API, Resource, Input, Sample, Output]
---

# Member Vouchers

> Retrieve a list of vouchers issued to the member, while asynchronously requesting data
  from the Member Vouchers API.

# Member Vouchers

Retrieve a list of vouchers issued to the member, while asynchronously requesting data from the Member Vouchers API.

## Resource

```

```

## Signature

```

```

## Input Parameters

| Parameter Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| membershipNumber | String | Unique identifier of the member whose vouchers are being retrieved. | Required |
| devMode | Boolean | Indicates whether the request is run in developer mode (true) ot not (false). | Optional |
| pageNumber | Integer | The page number to be returned. If you don’t specify a value, the first page is returned. Each page contains 200 vouchers, sorted by their date of creation. | Optional |
| productCategoryId | String | The ID of a product category associated with the member vouchers to be retrieved. You can specify up to 20 product category IDs. | Optional |
| productCategoryName | String | The product category name associated with the vouchers to be retrieved. You can specify up to 20 product categories. | Optional |
| productId | String | The product ID associated with the vouchers to be retrieved. You can specify up to 20 product IDs. | Optional |
| productName | String | The product name associated with the vouchers to be retrieved. You can specify up to 20 product names. | Optional |
| voucherStatus | String | The status of the member vouchers to filter the API response. Possible values are:IssuedCancelledExpired | Optional |
| sortBy | String | The voucher field for sorting the API response. The default value is ExpirationDate. Possible values are:CreatedDateEffectiveDateExpirationDate | Optional |
| sortOrder | String | The sort order of the API response. The default value is Ascending. Possible values are:AscendingDescending | Optional |
| version | String | Version of the API. The request body is available in version 55.0 and later. | Optional |

## Sample Output

```

```

## Output Parameters

| Property Name | Type | Description |
| --- | --- | --- |
| attributesUrl | String | The URL of the attribute associated with the voucher. |
| currencyIsoCode | String | The currency ISO code in which the member has redeemed the voucher. |
| description | String | The description of the voucher issued to the member. |
| discountPercent | Integer | The discount percentage that's offered to the member by the voucher. |
| effectiveDate | String | The date the member can redeem the voucher. |
| expirationDate | String | The date the voucher expires. |
| faceValue | Double | The value that the member can redeem using the voucher. |
| id | String | The ID of the voucher record. |
| isVoucherDefinitionActive | Boolean | Indicates whether the voucher definition associated with the voucher is active (true) or not (false). |
| isVoucherPartiallyRedeemable | Boolean | Indicates whether the voucher can be redeemed across multiple transactions (true) or only one transaction (false). |
| partnerAccount | String | The name of the partner associated with the voucher's voucher definition. |
| product | String | The name of the product associated with the voucher definition. |
| productCategory | String | The product category associated with the voucher's voucher definition. |
| productCategoryId | String | The ID of product category associated with the voucher's voucher definition. |
| productId | String | The ID of the product associated with the voucher definition. |
| promotionId | String | The ID of the promotion for which the voucher is issued. |
| promotionName | String | The name of the promotion for which the voucher is issued. |
| redeemedValue | Double | The value that the member has already redeemed from a partially redeemable voucher. |
| remainingValue | Double | The remaining value of the voucher after partial redemption. |
| status | String | The status of the voucher. |
| type | String | The type of voucher issued to the member. |
| useDate | String | The date the voucher was redeemed. |
| voucherCode | String | The code of the voucher. |
| voucherDefinition | String | The name of the voucher definition used to issue the voucher to the member. |
| voucherImageUrl | String | The URL of the image associated with the voucher definition.In the promotion record, enter an image URL and ensure that the webpage that hosts the image is publicly accessible. |
| voucherNumber | String | The unique number of the voucher. |

## Code Examples

```
/loyalty/programs/${programName}/members/${membershipNumber}/vouchers
```

```
https://yourInstance.salesforce.com/services/data/v58.0
/loyalty/programs/NTO/members/M1/vouchers
```

```
https://yourInstance.salesforce.com/services/data/v58.0
/loyalty/programs/NTO/members/M1/vouchers?voucherStatus=Cancelled,Expired
```

```
https://yourInstance.salesforce.com/services/data/v58.0
/loyalty/programs/NTO/members/M1/vouchers?pageNumber=2&voucherStatus=Issued&productName=Linea,Creta
```

```
getVouchers(membershipNumber:voucherStatus:pageNumber:productId:productCategoryId:productName:productCategoryName:sortBy:sortOrder:version:devMode:)
```

## Related Topics

- Vouchers List (atlas.en-us.loyalty.meta/loyalty/connect_responses_vouchers_list.htm)
