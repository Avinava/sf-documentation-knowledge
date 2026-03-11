---
title: "Data Mapper Execution Response"
domain: omnistudio
topic: data-mapper-execution-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.270Z
keywords: [Data, Mapper, Execution, Response]
---

# Data Mapper Execution Response

# Data Mapper Execution Response

Output representation of the response with error message, status, and response type.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | Error message if the execution fails for the input. | Small, 64.0 | 64.0 |
| response | String | Execution response corresponding to the custom input in JSON format. | Small, 64.0 | 64.0 |
| responseType | String | Format of the execution response, such as JSON, XML, or a custom class. | Small, 64.0 | 64.0 |