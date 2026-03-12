---
title: "Mentoring Benefit Assignment Details"
domain: edu-cloud-dev-guide
topic: mentoring-benefit-assignment-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.109Z
estimatedTokens: 692
keywords: [Mentoring, Benefit, Assignment, Output, representation, record, that’s, updated, provider]
---

# Mentoring Benefit Assignment Details

> Output representation of the benefit assignment record that’s updated with provider
    details.

# Mentoring Benefit Assignment Details

Output representation of the benefit assignment record that’s updated with provider details.

JSON example

This JSON example shows the updated providerId details.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| benefitId | String | ID of the benefit associated with the benefit assignment. | Small, 60.0 | 60.0 |
| createdById | String | ID of the user who created the benefit assignment. | Small, 60.0 | 60.0 |
| createdDate | String | Date when the benefit assignment record was created. | Small, 60.0 | 60.0 |
| endDateTime | String | Date and time until when the assignment is valid. | Small, 60.0 | 60.0 |
| enrolleeId | String | ID of the participant who enrolls for the benefit assignment. | Small, 60.0 | 60.0 |
| enrollment​Count | String | Number of times that the benefit is applicable to an individual. | Small, 60.0 | 60.0 |
| entitlement​Amount | String | Amount that a participant is entitled to receive from the assignment. | Small, 60.0 | 60.0 |
| id | String | ID of the benefit assignment record. | Small, 60.0 | 60.0 |
| lastModified​ById | String | ID of the user who updated the benefit assignment record. | Small, 60.0 | 60.0 |
| lastModified​Date | String | Date when the benefit assignment record was last modified. | Small, 60.0 | 60.0 |
| maximum​BenefitAmount | String | Maximum amount that’s disbursed during an assignment period. | Small, 60.0 | 60.0 |
| minimum​BenefitAmount | String | Minimum amount that’s disbursed during an assignment period. | Small, 60.0 | 60.0 |
| name | String | Name of the benefit assignment. | Small, 60.0 | 60.0 |
| parent​RecordId | String | ID of the parent record that’s associated with the benefit assignment. | Small, 60.0 | 60.0 |
| priority | String | Priority of the benefit assignment record. | Small, 60.0 | 60.0 |
| program​EnrollmentId | String | ID of the enrollment program record created for the participant that this benefit is assigned to. | Small, 60.0 | 60.0 |
| providerId | String | ID of the contact who provides the benefit that’s associated with the benefit assignment. | Small, 60.0 | 60.0 |
| startDate​Time | String | Date and time when the benefit assignment was first available. | Small, 60.0 | 60.0 |
| status | String | Status of the benefit assignment. | Small, 60.0 | 60.0 |
| taskJob​Status | String | Status of the task that’s associated with the benefit assignment. | Small, 60.0 | 60.0 |
| taskJob​StatusMessage | String | Status message of the task that’s associated with the benefit assignment. | Small, 60.0 | 60.0 |
| unitOf​MeasureId | String | ID of the unit of measure that’s associated with the benefit assignment. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "mentoringBenefitAssignment": {
    "benefitId": "0jixx0000000001AAA",
    "createdById": "005xx000001X7rlAAC",
    "createdDate": "2023-10-31T04:34:46.000+0000",
    "endDateTime": "2023-11-11T20:00:00.000+0000",
    "enrolleeId": "003xx000004WhHQAA0",
    "enrollmentCount": "1",
    "entitlementAmount": "1.00",
    "id": "0nDxx0000000001EAA",
    "lastModifiedById": "005xx000001X7rlAAC",
    "lastModifiedDate": "2023-11-01T00:38:55.000+0000",
    "maximumBenefitAmount": "1.00",
    "minimumBenefitAmount": "1.00",
    "name": "BA-000000001",
    "parentRecordId": "11Xxx0000004GfjEAE",
    "priority": "High",
    "programEnrollmentId": "11Xxx0000004GfjEAE",
    "providerId": "003xx000004WhJ2AAK",
    "startDateTime": "2023-10-30T19:00:00.000+0000",
    "status": "Enrolled",
    "taskJobStatus": "NA",
    "taskJobStatusMessage": "NA",
    "unitOfMeasureId": "0hExx0000000001EAA"
  }
}
```
