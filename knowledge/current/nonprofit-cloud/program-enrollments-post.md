---
title: "Program Enrollments (POST)"
domain: nonprofit-cloud
topic: program-enrollments-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.853Z
estimatedTokens: 224
keywords: [Program, Enrollments, POST, Enroll, participants]
---

# Program Enrollments (POST)

> Enroll participants in a program.

# Program Enrollments (POST)

Enroll participants in a program.

Resource

```

```

Example URI for POST

```

```

Available version

57.0

HTTP methods

POST

Request body for POST

Root XML tag

<ProgramEnrollmentsInputRepresentation>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enrollees | Program Enrollment Input[] | The list of program enrollments that need to be added or updated.For POST, the enrollments you want to add can either be a contact or an account.For PUT, specify the program enrollments that need to be updated. | Required | 57.0 |

JSON example

```

```

Response body for POST

[Program Enrollments Output](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_program_enrollments_output.htm "Output representation of the request to enroll or update participants in a program.")

## Code Examples

```
/connect/program-mgmt/programs/${programId}/enrollments
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect​​/program-mgmt/programs/11Wxx0000004F3kEAE/enrollments
```

```
{
  "enrollees": {
    "enrolleeList": [
      {
        "id": "003xx000004WhxNAAS"
      }
    ]
  }
}
```

## Related Topics

- Program Enrollment Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_program_enrollment_input.htm)
- Program Enrollments Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_program_enrollments_output.htm)
