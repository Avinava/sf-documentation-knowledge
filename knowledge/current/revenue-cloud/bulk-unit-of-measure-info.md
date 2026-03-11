---
title: "Bulk Unit Of Measure Info"
domain: revenue-cloud
topic: bulk-unit-of-measure-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.371Z
keywords: [Bulk, Unit, Measure, Info]
---

# Bulk Unit Of Measure Info

# Bulk Unit Of Measure Info

Output representation of the details of the unit of measure records along with error details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 63.0 | 63.0 |
| errorCode​ToErrorMap | Map<String, Unit Of Measure Error> | Error codes mapped to their details. | Small, 63.0 | 63.0 |
| status | Unit Of Measure Status[] | Status of the API request. | Small, 63.0 | 63.0 |
| uomIdToUnit​OfMeasure​Info | Map<String, Unit Of Measure Info> | Unit of measure record IDs mapped to their details. | Small, 63.0 | 63.0 |