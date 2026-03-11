---
title: "Context Definition Filter"
domain: omnistudio
topic: context-definition-filter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.177Z
keywords: [Context, Definition, Filter]
---

# Context Definition Filter

# Context Definition Filter

Output representation details of a context definition filter.

JSON example

This example shows a sample response for the Context Definition Filter by ID (GET) request.

```

```

This example shows a sample response for the Context Definition Filter By ID (PATCH) request.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextDefinitionFilterId | String | ID of the context definition filter. | Small, 65.0 | 65.0 |
| contextDefinitionVersionId | String | Unique identifier of the specific context definition version to which this filter belongs. | Small, 65.0 | 65.0 |
| description | String | Details of the context definition filter such as the purpose of the filter. Use this field to document the filter's business logic, intended use case, or any important implementation details for future reference. | Small, 65.0 | 65.0 |
| filterApiName | String | Unique API name identifier for the context definition filter. | Small, 65.0 | 65.0 |
| filterName | String | Display name for the context definition filter. | Small, 65.0 | 65.0 |
| filtersPerNode | String | A JSON string representation of the filter condition logic that defines the filter criteria. This field contains the structured query conditions that's evaluated to determine which records match the filter. The JSON structure typically includes field names, operators, and values that form the filter expression. | Small, 65.0 | 65.0 |
| inheritedFrom | String | Source context definition if filter is inherited in the GET request. This field is not applicable for POST request. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 65.0 | 65.0 |