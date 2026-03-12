---
title: "Benefit Assignment Input"
domain: psc-api
topic: benefit-assignment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.836Z
estimatedTokens: 391
keywords: [Benefit, Assignment, Input, representation]
---

# Benefit Assignment Input

> Input representation of the assignment of a benefit.

# Benefit Assignment Input

Input representation of the assignment of a benefit.

Root XML tag

<BenefitAssignment>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefitDisbursements | Benefit Disbursement for Benefit Session Input[] | Details of benefit disbursements to be created for a benefit assignment in a benefit session. | Optional | 58.0 |
| benefitFrequency | String | Frequency at which the benefit is applied. | Optional | 55.0 |
| benefitId | String | ID of the benefit record associated with the assignment. | Required | 55.0 |
| customFields | Custom Field Input[] | The custom fields details of the goal assignment plan. | Optional | 56.0 |
| endDate | String | End date up to when the assignment is valid. | Optional | 55.0 |
| enrollmentCount | Integer | Number of times the benefit is applicable to an individual. | Optional | 55.0 |
| entitlementAmount | Double | Amount a participant is entitled to from the assignment. | Optional | 55.0 |
| id | String | ID of the benefit assignment record. | Optional | 55.0 |
| maximumAmount | Double | Maximum amount that can be disbursed during an assignment period. | Optional | 55.0 |
| participantId | String | ID of the account associated with the assignment. | Optional | 55.0 |
| priority | String | Priority of the benefit assignment record. | Optional | 55.0 |
| startDate | String | Start date from when the assignment begins. | Optional | 55.0 |
| status | String | Status of the benefit assignment, | Optional | 56.0 |

## Related Topics

- Benefit Disbursement for Benefit Session
                      Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_benefit_disbursement_for_benefit_session_input.htm)
- Custom Field
                      Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_custom_field_input.htm)
