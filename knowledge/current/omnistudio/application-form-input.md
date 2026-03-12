---
title: "Application Form Input"
domain: omnistudio
topic: application-form-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.054Z
estimatedTokens: 440
keywords: [Application, Form, Input, representation]
---

# Application Form Input

> Input representation of the application form.

# Application Form Input

Input representation of the application form.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account. | Optional | 61.0 |
| branchUnitId | String | Branch unit that owns the application. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the application form. | Optional | 61.0 |
| intakeChannel​Type | String | Channel type of the application form submission. | Optional | 61.0 |
| leadId | String | Lead that's associated with the application. | Optional | 61.0 |
| opportunityId | String | Opportunity that's associated with the application. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| stage | String | Stage of the application for a product that’s submitted by the applicant. | Optional | 61.0 |
| thirdParty​LoanProvider​AccountId | String | Third party loan provider account that's associated with the application. | Optional | 61.0 |
| tierType | String | Tier type of an application form, based on which the offer terms are evaluated. | Optional | 61.0 |
| totalDebtTo​IncomePercent | Double | Cumulative debt to income percentage for all applicants related to the application form. | Optional | 61.0 |
| totalIncomeTo​ExpenseRatio | Double | Ratio of the applicant's debt to income, as an input for the Underwriter to decide the applicant's eligibility (India Lending). | Optional | 61.0 |
| totalLoanTo​ValuePercent | Double | Cumulative loan to value percentage for all applicants related to the application form. | Optional | 61.0 |
| usageType | String | Usage type of the application form. | Required | 61.0 |

## Related Topics

- Custom Fields Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_digital_lending_custom_fields_input.htm)
