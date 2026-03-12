---
title: "Benefit Assignment (POST)"
domain: edu-cloud-dev-guide
topic: benefit-assignment-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.939Z
estimatedTokens: 347
keywords: [Benefit, Assignment, POST, Add, provider’s, contact, record, Party-Role, Relationship, PRR, CCR, records, aren’t, already, present]
---

# Benefit Assignment (POST)

> Add the provider’s contact ID to the
      benefit assignment record. Create Party-Role Relationship (PRR) and Contact Contact
      Relationship (CCR) records if the records aren’t already present.

# Benefit Assignment (POST)

Add the provider’s contact ID to the benefit assignment record. Create Party-Role Relationship (PRR) and Contact Contact Relationship (CCR) records if the records aren’t already present.

A PRR refers to a matching record between a mentor and a mentee depending on the benefit provided and sought after. A CCR is a record that represents contact relationships between corresponding mentors and mentees, indicating the connection between a mentor contact and a mentee contact.

Resource

```

```

The benefitAssignmentId parameter is the ID of the benefit assignment record. In a mentorship benefit scenario, a benefit assignment record represents the connection between a mentor, a mentee, and the benefit that’s provided.

Resource Example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| providerId | String | ID of the provider offering record associated with the benefit assignment. | Required | 60.0 |

Response body for POST

[Mentoring Benefit Assignment](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_mentoring_benefit_assignment_output.htm "Output representation of the benefit assignment details along with the provider offering’s contact ID.")

## Code Examples

```
/connect/education/mentoring/benefit-assignment/benefitAssignmentId/provider
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/mentoring/benefit-assignment/0nDSG0000000Rxt2AE/provider
```

```
{
  "providerId": "0WqSG0000000Frt0AE"
}
```

## Related Topics

- Mentoring Benefit
              Assignment (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_mentoring_benefit_assignment_output.htm)
