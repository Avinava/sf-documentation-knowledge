---
title: "QOC Qualification"
domain: revenue-cloud
topic: qoc-qualification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.202Z
keywords: [QOC, Qualification]
---

# QOC Qualification

# QOC Qualification

Input representation of the qualification request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​ContextData | Context Data Input[] | Additional nodes that are added to the custom or default context definition. The maximum number of supported nodes is 10. | Optional | 60.0 |
| catalog​Id | String | ID of the catalog. | Optional | 60.0 |
| category​Id | String | ID of the category. | Optional | 60.0 |
| context​Definition | String | API name of the custom context definition that’s sent for context creation. If this property isn’t specified, the default context definition is used. | Optional | 60.0 |
| context​Mapping | String | Default context mapping of the context definition. If a context mapping is specified, then the API checks whether the mapping belongs to the specified context definition to process the details for hydration. | Optional | 60.0 |
| correlation​Id | String | Unique identifier of the request. | Optional | 60.0 |
| product​Ids | String[] | List of product IDs for qualification check. | Required | 60.0 |
| qualification​Procedure | String | API name of the custom qualification procedure that’s sent for processing. If this property isn’t specified, the default qualification procedure is executed. | Optional | 60.0 |
| user​Context | User Context Input | User context details. For example, account ID or contact ID. | Optional | 60.0 |