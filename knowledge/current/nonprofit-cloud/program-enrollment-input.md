---
title: "Program Enrollment Input"
domain: nonprofit-cloud
topic: program-enrollment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.758Z
estimatedTokens: 183
keywords: [Program, Enrollment, Input, representation, enrollee]
---

# Program Enrollment Input

> Input representation of the enrollee for the program.

# Program Enrollment Input

Input representation of the enrollee for the program.

Root XML tag

<ProgramEnrollmentsDTO>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applicationDate | String | The date when the enrollee applied to the program. | Optional | 57.0 |
| endDate | String | The end date of the enrollment in the program. | Optional | 57.0 |
| id | String | The ID of the enrollee record. The enrollee can either be a contact or an account. | Required | 57.0 |
| startDate | String | The start date of the enrollment in the program. | Optional | 57.0 |
| status | String | The enrollment status of the enrollee for the program. | Optional | 57.0 |
