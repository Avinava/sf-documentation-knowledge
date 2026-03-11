---
title: "Error
    Output"
domain: revenue-cloud
topic: error-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.411Z
keywords: [Error, Output]
---

# Error
    Output

# Error Output

Output representation of the error details.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error​Code | String | Code of the error message. | Small, 60.0 | 60.0 |
| message​Detail | String | Details of the error message. | Small, 60.0 | 60.0 |
| message​Title | String | Title of the error message. | Small, 60.0 | 60.0 |
| node​ProductId | String | ID of the product node. | Small, 61.0 | 61.0 |
| record​Id | String | ID of the record. | Small, 60.0 | 60.0 |
| record​Name | String | Name of the record. | Small, 60.0 | 60.0 |
| related​ObjectNodes | Invalid Related Object Node[] | List of related object nodes with errors. | Small, 62.0 | 62.0 |
| source | String | Name of the API that’s the source of the error. | Small, 60.0 | 60.0 |