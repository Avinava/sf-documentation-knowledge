---
title: "Learnings Graph (GET)"
domain: edu-cloud-dev-guide
topic: learnings-graph-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.910Z
estimatedTokens: 164
keywords: [Learnings, Graph, learning, course, program, achievements, their, associations]
---

# Learnings Graph (GET)

> Get details about a learning course or program,
      achievements, and their associations.

# Learnings Graph (GET)

Get details about a learning course or program, achievements, and their associations.

Resource

```

```

Resource Example - Get learning by ID:

```

```

Resource Example - Get learning by course external ID:

```

```

Resource Example - Get learning by program external ID:

```

```

Available version

62.0

HTTP methods

GET

Response body for GET

[Get Learning](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_get_learning_output.htm "Output representation of the details of a learning object, including its core details, prerequisites, corequisites, recommended items, and learning outcomes.")

## Code Examples

```
/connect/education/academic-operations/learnings/learningId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/academic-operations/learnings/learningId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/academic-operations/learnings/{externalId}?course_external_id_field={course_custom_field}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/academic-operations/learnings/{externalId}?program_external_id_field={program_custom_field}
```

## Related Topics

- Get
            Learning (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_get_learning_output.htm)
