---
title: "Borrower Employment Input"
domain: financial-services-cloud-object-reference
topic: borrower-employment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.262Z
estimatedTokens: 658
keywords: [Borrower, Employment, Input, borrower's, co-borrower's, current, past]
---

# Borrower Employment Input

> Represents details about the borrower's or co-borrower's current and
      past employment.

# Borrower Employment Input

Represents details about the borrower's or co-borrower's current and past employment.

Root XML tag

<employments>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currentJobAdditionalMonthCount | Integer | Additional number of months employed at this job (less than 12). | Optional | 48.0 |
| currentJobYearCount | Integer | Number of full years employed at this job. | Optional | 48.0 |
| employerAddress | Address Input[] | Address of borrower's employer or business. | Optional | 48.0 |
| employerName | String | Name of borrower's employer or business. | Optional | 48.0 |
| employerPhone | String | Employer's phone number. | Optional | 48.0 |
| endDate | String | Borrower's last date of employment at this job. | Optional | 48.0 |
| extendedFields | Extended Fields Input[] | Custom fields related to the borrower’s employment. | Optional | 48.0 |
| externalId | String | Identifier assigned to imported employer data by external data source. (if applicable) | Optional | 48.0 |
| id | String | ID of the borrower’s employment. | Optional | 48.0 |
| isLessThanQuarterShare | Boolean | Indicates whether borrower owns less than 25% of this business (if applicable). | Optional | 48.0 |
| isRelToTransactionParty | Boolean | Indicates whether borrower is employed by a family member, property seller, real estate agent, or other person party to the loan application transaction. | Optional | 48.0 |
| isSelfEmployed | Boolean | Indicates whether borrower is self-employed or owns the business. | Optional | 48.0 |
| jobTitle | String | Borrower's job title or employer's business or industry type. | Optional | 48.0 |
| monthlyBaseIncomeAmount | Double | Borrower's monthly bonus from this job. | Optional | 48.0 |
| monthlyBonusAmount | Double | Borrower's monthly bonus from this job. | Optional | 48.0 |
| monthlyCommissionAmount | Double | Borrower's monthly commission from this job. | Optional | 48.0 |
| monthlyIncome | Double | Borrower's monthly income or loss from this business. | Optional | 48.0 |
| monthlyMilitaryEntitlementAmt | Double | Borrower's monthly military entitlement from this job. | Optional | 48.0 |
| monthlyOtherIncomeAmount | Double | Borrower's other monthly income from this job. | Optional | 48.0 |
| monthlyOvertimeAmount | Double | Borrower's monthly overtime income from this job. | Optional | 48.0 |
| name | String | Name of the loan applicant employment. | Optional | 48.0 |
| startDate | String | Date borrower started working at this job. | Optional | 48.0 |

## Code Examples

```
{
  "employments": [
    {
      "currentJobAdditionalMonthCount": 24,
      "currentJobYearCount": 4,
      "employerAddress": {
        "city": "Fresno",
        "country": "United States",
        "postalCode": "93721",
        "state": "CA",
        "street": "1500 Divisadero Street"
      },
      "extendedFields": [],
      "externalId": "2a9460d0-3194-449a-8bf0-488a6cbaed0a",
      "isRelToTransactionParty": true,
      "isLessThanQuarterShare": true,
      "isSelfEmployed": true,
      "jobTitle": "developer",
      "monthlyBaseIncomeAmount": 2300,
      "monthlyBonusAmount": 100,
      "monthlyCommissionAmount": 10,
      "monthlyIncome": 5000,
      "monthlyMilitaryEntitlementAmt": 20,
      "monthlyOtherIncomeAmount": 10,
      "monthlyOvertimeAmount": 200,
      "name": "Empl1",
      "startDate": "2019-10-10T03:11:27.000Z"
    }
  ]
}
```

## Related Topics

- Address Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_address_input.htm)
- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)
