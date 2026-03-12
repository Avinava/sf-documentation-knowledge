---
title: "Source Field"
domain: bi-dev-guide-rest
topic: source-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.576Z
estimatedTokens: 209
keywords: [Source]
---

# Source Field

> A field for a source object.

# Source Field

A field for a source object.

Properties

SourceField inherits properties from the abstract [AbstractField](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_abstract_field.htm "The base definition of a dataset field."). These base properties appear in SourceField alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| access​Denied​Reason | String | If this source field is inaccessible, this property contains a message describing the reason. | Small, 37.0 | 37.0 |
| accessible | Boolean | If this property is present and false, the source field is inaccessible and can’t be synced. Check the accessDeniedReason property for more information. | Small, 37.0 | 37.0 |

## Related Topics

- AbstractField (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_abstract_field.htm)
