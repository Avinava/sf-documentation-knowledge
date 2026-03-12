---
title: "Learner Restriction Violation (GET, POST)"
domain: edu-cloud-dev-guide
topic: learner-restriction-violation-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.945Z
estimatedTokens: 460
keywords: [Learner, Restriction, Violation, POST, Retrieve, apply, new, hold, their, contact]
---

# Learner Restriction Violation (GET, POST)

> Retrieve and apply a new restriction (hold) to a learner by their contact
    ID.

# Learner Restriction Violation (GET, POST)

Retrieve and apply a new restriction (hold) to a learner by their contact ID.

Resource

```

```

Resource example for GET

```

```

Resource example for POST

```

```

Available version

64.0

HTTP methods

GET POST

Response body for GET

[Hold Violation Result](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_hold_violation_result.htm "Output representation of the response details to retrieve hold violation information.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| caseOrigin | String | Origin of the case for the contact user. | Optional | 65.0 |
| caseRecord​TypeId | String | Record Type ID of the case for the contact user. | Optional | 65.0 |
| caseStatus | String | Status of the case for the contact user. | Optional | 65.0 |
| compliance​DueDate | String | Date by which compliance is expected for the hold violation. | Optional | 65.0 |
| dateCreated | String | Date from which the hold violation is effective. | Optional | 65.0 |
| dateResolved | String | Date on which the hold violation is resolved. | Optional | 65.0 |
| description | String | Description of the hold violation. | Optional | 65.0 |
| reasons | String[] | Reasons for the hold violation. | Optional | 65.0 |
| regulatory​CodeId | String | Unique ID for hold Definition. | Required | 65.0 |
| status | String | Status of the hold violation. | Optional | 65.0 |
| type | String | Type of the hold violation. | Optional | 65.0 |

Response body for POST

[Hold Violation](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_hold_violation_output.htm "Output representation of the response details for a newly created hold violation.")

## Code Examples

```
/connect/education/holds/assignees/${contactId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/holds/assignees/0x33445566778899AA
```

```
https://yourInstance.salesforce.com/services/data/v66.0connect/education/holds/assignees/0x33445566778899AA
```

```
{
  "caseStatus": "string",
  "caseOrigin": "string",
  "caseRecordTypeId": "string",
  "dateCreated": "2025-07-25",
  "description": "string",
  "complianceDueDate": "2025-07-25",
  "dateResolved": "2025-07-25",
  "status": "string",
  "type": "string",
  "regulatoryCodeId": "string",
  "reasons": [
    "string"
  ]
}
```

## Related Topics

- Hold Violation Result (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_hold_violation_result.htm)
- Hold Violation (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_hold_violation_output.htm)
