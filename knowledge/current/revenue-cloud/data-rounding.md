---
title: "Data Rounding"
domain: revenue-cloud
topic: data-rounding
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.397Z
keywords: [Data, Rounding]
---

# Data Rounding

# Data Rounding

Output representation of the data rounding response.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 63.0 | 63.0 |
| errorCode​ToErrorMap | Map<String, Unit Of Measure Error> | Error codes mapped to their details. | Small, 63.0 | 63.0 |
| keyToData​RowOutput | Map<String, Data Row> | Data row key mapped to the associated data row. | Small, 63.0 | 63.0 |
| status | Unit Of Measure Status[] | Status of the API request. | Small, 63.0 | 63.0 |