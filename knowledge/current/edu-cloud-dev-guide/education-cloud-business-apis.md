---
title: "Education Cloud Business APIs"
domain: edu-cloud-dev-guide
topic: education-cloud-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.136Z
estimatedTokens: 321
keywords: [Education, Cloud, Business, APIs, Add, provider’s, contact, benefit, assignment, record, Party-Role, Relationship, PRR, CCR, records]
---

# Education Cloud Business APIs

> Add the provider’s contact ID to the benefit assignment record, and
      create Party-Role Relationship (PRR) and Contact Contact Relationship (CCR) records if the
      records aren’t already present. Additionally, create or update a learning graph, or get
      details of a learning graph.

# Education Cloud Business APIs

Add the provider’s contact ID to the benefit assignment record, and create Party-Role Relationship (PRR) and Contact Contact Relationship (CCR) records if the records aren’t already present. Additionally, create or update a learning graph, or get details of a learning graph.

## Available Resources

| Resource | Description |
| --- | --- |
| /connect/education/mentoring/benefit-assignment/${benefitAssignmentId}/provider (POST) | Add the provider’s contact ID to the benefit assignment record. Create Party-Role Relationship (PRR) and Contact Contact Relationship (CCR) records if the records aren’t already present. |
| /connect/education/academic-operations/learnings/recordId (GET) | Get details about a learning course or program, achievements, and their associations. |
| /connect/education/academic-operations/learnings (POST, PATCH) | Create a learning graph to include details of learnings, achievements, and their associations. Additionally, update the fields in the learning graph. |

-   **[REST Reference](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/edu_cloud_apis_rest_references.htm)**
    You can access Education Cloud Business API by using REST endpoint. This REST API follow similar conventions as Connect REST APIs.

## Related Topics

- /connect/education/mentoring/benefit-assignment/${benefitAssignmentId}/provider (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_resources_mentoring_benefit_assignment.htm)
- /connect/education/academic-operations/learnings/recordId (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_resources_getlearnings.htm)
- /connect/education/academic-operations/learnings (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_resources_learning_graph.htm)
- REST Reference (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/edu_cloud_apis_rest_references.htm)
