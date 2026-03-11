---
title: "Context Definition Filter Input"
domain: omnistudio
topic: context-definition-filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.106Z
keywords: [Context, Definition, Filter, Input]
---

# Context Definition Filter Input

# Context Definition Filter Input

Input representation details of context definition filter.

This example shows a sample request to create, get, or update a context definition filter.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextDefinitionVersionId | String | Unique identifier of the specific context definition version to which this filter belongs. | Required | 65.0 |
| description | String | Details of the context definition filter such as the purpose of the filter. Use this field to document the filter's business logic, intended use case, or any important implementation details for future reference. | Optional | 65.0 |
| filterApiName | String | Unique API name identifier for the context definition filter. | Required | 65.0 |
| filterName | String | Display name for the context definition filter. | Required | 65.0 |
| filtersPerNode | String | A JSON string representation of the filter condition logic that defines the filter criteria. This field contains the structured query conditions that's evaluated to determine which records match the filter. The JSON structure typically includes field names, operators, and values that form the filter expression. | Required | 65.0 |
| inheritedFrom | String | Source context definition if filter is inherited in the GET request. This field is not applicable for POST request. | Optional | 65.0 |