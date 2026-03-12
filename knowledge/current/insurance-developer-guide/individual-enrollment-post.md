---
title: "Individual Enrollment (POST)"
domain: insurance-developer-guide
topic: individual-enrollment-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.141Z
estimatedTokens: 274
keywords: [Individual, Enrollment, POST, Enroll, group, census, member, benefit, insurance, plan, creating, necessary, policy, records]
---

# Individual Enrollment (POST)

> Enroll a group census member in a group benefit insurance plan, creating the necessary
  policy records.

# Individual Enrollment (POST)

Enroll a group census member in a group benefit insurance plan, creating the necessary policy records.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| memberId | String | ID of the group census member. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| flowName | String | API name of an optional flow to run as part of the enrollment process.The default value is Process Group Census Member Data. | Optional | 65.0 |
| plan | String | ID of the root contract group plan. | Required | 65.0 |

Response body for POST

[Individual Enrollment Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_individual_enrollment_output.htm "Output representation for the Individual Enrollment API.")

## Code Examples

```
/connect/insurance/group-census-members/memberId/policies
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/group-census-members/0r6RM0000000h1pYAA/policies
```

```
{
  "flowName": "MyEnrollmentFlow",
  "plan": "0gpp00000004C9wAAE"
}
```

## Related Topics

- Individual Enrollment
       Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_individual_enrollment_output.htm)
