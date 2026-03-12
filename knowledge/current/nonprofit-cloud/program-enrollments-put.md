---
title: "Program Enrollments (PUT)"
domain: nonprofit-cloud
topic: program-enrollments-put
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.911Z
estimatedTokens: 221
keywords: [Program, Enrollments, PUT]
---

# Program Enrollments (PUT)

> Update program enrollments.

# Program Enrollments (PUT)

Update program enrollments.

Resource

```

```

Example URI for PUT

```

```

Available version

57.0

HTTP methods

PUT

Request body for PUT

Root XML tag

<ProgramEnrollmentsInputRepresentation>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enrollees | Program Enrollment Input[] | The list of program enrollments that need to be added or updated.For POST, the enrollments you want to add can either be a contact or an account.For PUT, specify the program enrollments that need to be updated. | Required | 57.0 |

JSON example

```

```

Response body for PUT

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
        "id": "11Xxx0000004Gz5EAE",
        "status": "Enrolled",
        "endDate": "2025-05-11T13:05:23.000Z"
      },
      {
        "id": "11Xxx0000004Gz6EAE",
        "status": "Enrolled",
        "startDate": "2023-02-11T13:05:23.000Z",
        "endDate": "2024-01-12T13:05:23.000Z"
      },
      {
        "id": "11Xxx0000004Gz7EAE",
        "status": "Enrolled",
        "startDate": "2023-02-11T13:05:23.000Z",
        "applicationDate": "2023-02-11T13:05:23.000Z"
      },
      {
        "id": "11Xxx0000004Gz9EAE",
        "status": "Enrolled",
        "endDate": "2024-01-11T13:05:23.000Z",
        "applicationDate": "2023-02-12T13:05:23.000Z"
      }
    ]
  }
}
```

## Related Topics

- Program Enrollment Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_program_enrollment_input.htm)
- Program Enrollments Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_program_enrollments_output.htm)
