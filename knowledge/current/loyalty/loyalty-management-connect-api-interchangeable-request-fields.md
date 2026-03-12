---
title: "Loyalty Management Connect API Interchangeable Request Fields"
domain: loyalty
topic: loyalty-management-connect-api-interchangeable-request-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.094Z
estimatedTokens: 316
keywords: [Loyalty, Management, Connect, API, Interchangeable, Business, supports, JSON, requests, either, number, don’t, want, store, Salesforce]
---

# Loyalty Management Connect API Interchangeable Request Fields

> The Loyalty Management Business API supports interchangeable fields in JSON requests.
    For some of the request fields, you can use either an ID, number, or name. For example, if you
    don’t want to store and use Salesforce IDs when accessing Loyalty Management-related data from
    an external system, simply use names and numbers instead.

# Loyalty Management Connect API Interchangeable Request Fields

The Loyalty Management Business API supports interchangeable fields in JSON requests. For some of the request fields, you can use either an ID, number, or name. For example, if you don’t want to store and use Salesforce IDs when accessing Loyalty Management-related data from an external system, simply use names and numbers instead.

Here’s a list of Loyalty Management object fields that are interchangeable with alternative field names.

| Field Name | Alternative Field Name |
| --- | --- |
| MemberId | MembershipNumber |
| VoucherId | VoucherCode or VoucherNumberEnsure that the voucher code is unique among all active vouchers. |
| LoyaltyProgramId | LoyaltyProgramName |
| JournalTypeId | JournalTypeName |
| JournalSubTypeId | JournalSubTypeName |
| PromotionId | PromotionNameEnsure that the promotion name is unique among all active promotions. |
| ProductId | ProductCode or ProductNameEnsure that the product name or code is unique among all active products. |
| ProductCategoryId | ProductCategoryNameEnsure that the product name or code is unique among all active products. |
| PartnerId | PartnerName |

JSON example with IDs

```

```

JSON example with names and numbers

```

```

## Code Examples

```
{
   "MemberId":"0lMT10000004CfA",
   "JournalTypeId":"0lET10000004CQp",
   "JournalSubTypeId":"0pQS10000005CQm",
   "VoucherId":"0kdxx000000000B245",
   "ProductId":"0lVxx00000000cj",
   "ProductCategoryId":"0c8RM0000004DnXYAU",
   "PromotionId":"0c8xx00000000BJEAY",
   "LoyaltyProgramId":"0lpT10000004CdN"
}
```

```
{
   "MembershipNumber":"Member123",
   "JournalType":"Accrual",
   "JournalSubType":"Social",
   "VoucherCode":"15OFF",
   "ProductName":"Nike",
   "ProductCategoryName":"Apparel",
   "PromotionName":"Flat20",
   "LoyaltyProgramName":"NTO"
}
```
