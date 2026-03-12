---
title: "Liability Input"
domain: financial-services-cloud-object-reference
topic: liability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.407Z
estimatedTokens: 549
keywords: [Liability, Input, borrower, co-borrower, current, liabilities]
---

# Liability Input

> Details about the borrower and co-borrower current liabilities.

# Liability Input

Details about the borrower and co-borrower current liabilities.

Root XML tag

<liabilities>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountNumber | String | Borrower's account number with lender or creditor. | Optional | 48.0 |
| accountType | String | Personal debt borrower owes like credit card balances, other debts, and leases. | Optional | 48.0 |
| assetExternalId | String | Identifier assigned to imported asset data by external data source (if applicable). | Optional | 48.0 |
| assetId | String | ID of the asset. | Optional | 48.0 |
| borrowersExternalIds | String[] | Identifier assigned to imported borrowers data by external data source (if applicable). | Optional | 48.0 |
| borrowersIds | String[] | IDs of the borrowers. | Optional | 48.0 |
| creditLimitAmount | Double | Credit limit of real estate loan or line of credit. | Optional | 48.0 |
| creditorName | String | Lender or creditor owed the debt. | Optional | 48.0 |
| extendedFields | Extended Fields Input[] | Custom fields related to the asset. | Optional | 48.0 |
| externalId | String | Identifier assigned to imported liability data by external data source (if applicable). | Optional | 48.0 |
| id | String | ID of the liability. | Optional | 48.0 |
| isJointLiability | Boolean | Indicates whether borrower holds liability jointly. | Optional | 48.0 |
| liabilityClass | String | Include the liability's monthly payment in this liability class monthly payment total. | Optional | 48.0 |
| loanType | String | Existing real estate loan type. | Optional | 48.0 |
| monthlyPaymentAmount | Double | Borrower's monthly payment required to keep debt account current. | Optional | 48.0 |
| name | String | Name of the liability. | Optional | 48.0 |
| otherLiabilityType | String | Identifies type of other borrower expense or liability. | Optional | 48.0 |
| shouldBePaidInFull | Boolean | Indicates whether borrower to pay off debt on or before closing. | Optional | 48.0 |
| unpaidBalanceAmount | Double | Unpaid liability balance when borrower completed loan application. | Optional | 48.0 |

## Code Examples

```
{
  "liabilities": [
    {
      "accountNumber": "134234242",
      "accountType": "Revolving",
      "borrowersExternalIds": [
        "0fc5e4d6-de5d-4954-9d21-3c628ad8809a",
        "732c3d7e-78ae-4b5e-944d-f411fb4011d4"
      ],
      "creditLimitAmount": 34353,
      "creditorName": "BOFA",
      "extendedFields": [],
      "externalId": "df126729-19c0-4dc9-80c6-322bc6fb994c",
      "isJointLiability": true,
      "liabilityClass": "Financial",
      "loanType": "Conventional",
      "monthlyPaymentAmount": 35353,
      "name": "Liab1",
      "otherLiabilityType": "Child Support",
      "shouldBePaidInFull": true,
      "unpaidBalanceAmount": 242
    },
    {
      "accountNumber": "464634123",
      "accountType": "Revolving",
      "borrowersExternalIds": [
        "0fc5e4d6-de5d-4954-9d21-3c628ad8809a",
        "732c3d7e-78ae-4b5e-944d-f411fb4011d4"
      ],
      "creditLimitAmount": 423465356,
      "creditorName": "CHase",
      "extendedFields": [],
      "externalId": "194bcc9c-7b86-4a49-9d17-fad0e4d205a3",
      "isJointLiability": true,
      "liabilityClass": "Financial",
      "loanType": "Conventional",
      "monthlyPaymentAmount": 2423535,
      "name": "Liab2",
      "otherLiabilityType": "Alimony",
      "shouldBePaidInFull": true,
      "unpaidBalanceAmount": 553
    }
  ]
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)
