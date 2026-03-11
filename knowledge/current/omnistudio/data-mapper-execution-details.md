---
title: "Data Mapper Execution Details"
domain: omnistudio
topic: data-mapper-execution-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.267Z
keywords: [Data, Mapper, Execution, Details]
---

# Data Mapper Execution Details

# Data Mapper Execution Details

Output representation of the execution details of a data mapper.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | Error message if the execution fails. | Small, 64.0 | 64.0 |
| response | Data Mapper Execution Response [] | List of responses corresponding to the custom inputs that are provided during the data mapper execution. | Small, 64.0 | 64.0 |
| status | String | Execution status of the data mapper. Valid values are:Error—Data mapper execution has failed due to an error.Success—Data mapper execution is successful. | Small, 64.0 | 64.0 |