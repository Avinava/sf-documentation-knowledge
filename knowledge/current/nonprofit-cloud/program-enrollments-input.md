---
title: "Program Enrollments Input"
domain: nonprofit-cloud
topic: program-enrollments-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.760Z
estimatedTokens: 140
keywords: [Program, Enrollments, Input, representation, enroll, participants]
---

# Program Enrollments Input

> Input representation of the request to enroll or update participants
  in a program.

# Program Enrollments Input

Input representation of the request to enroll or update participants in a program.

Root XML tag

<ProgramEnrollmentsInputRepresentation>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enrollees | Program Enrollment Input[] | The list of program enrollments that need to be added or updated.For POST, the enrollments you want to add can either be a contact or an account.For PUT, specify the program enrollments that need to be updated. | Required | 57.0 |

## Related Topics

- Program Enrollment Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_program_enrollment_input.htm)
