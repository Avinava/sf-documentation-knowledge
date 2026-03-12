---
title: "Object Coverage"
domain: bi-dev-guide-rest
topic: object-coverage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.457Z
estimatedTokens: 263
keywords: [Coverage, security, source]
---

# Object Coverage

> The security coverage for a source object.

# Object Coverage

The security coverage for a source object.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| eligible​Sharing​Source | Boolean | Indicates whether the object is an eligible sharing source or not. | Small, 41.0 | 41.0 |
| label | String | The label of the object. | Small, 41.0 | 41.0 |
| name | String | The name of the object. | Small, 41.0 | 41.0 |
| namespace | String | The namespace of the object. | Small, 41.0 | 41.0 |
| unsupported​Records | Unsupported​Record​Collection | The specific records that are unsupported for sharing inheritance. | Small, 50.0 | 50.0 |
| url | String | The URL for retrieving this information. | Small, 41.0 | 41.0 |

#### See Also

-   [Security Coverage Object Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_security_coverage_object.htm "Returns the security coverage for a particular object. Use this API to discover whether Analytics can inherit sharing settings from an object.")

## Related Topics

- Unsupported​Record​Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_unsupported_record_collection.htm)
- Security Coverage Object Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_security_coverage_object.htm)
