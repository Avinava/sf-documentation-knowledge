---
title: "Source Object"
domain: bi-dev-guide-rest
topic: source-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.584Z
estimatedTokens: 483
keywords: [Source, Analytics, data, connector]
---

# Source Object

> A source object for an Analytics data connector.

# Source Object

A source object for an Analytics data connector.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| access​Denied​Reason | String | If this source object is inaccessible, this property contains a message describing the reason. | Small, 37.0 | 37.0 |
| accessible | Boolean | If this property is present and false, the source object is inaccessible and can’t be synced. Check the accessDeniedReason property for more information. | Small, 37.0 | 37.0 |
| connector​Label | String | The label of this source object. The specifics depend on the connector type. | Small, 53.0 | 53.0 |
| data​Connector | Asset​Reference | A reference to the data connector that the source object belongs to. | Small, 53.0 | 53.0 |
| data​Preview​Url | String | The URL to retrieve the data preview associated with this source object. | Small, 40.0 | 40.0 |
| data​Url | String | The URL to get the data associated with this source object. | Small, 39.0 | 39.0–39.0 |
| fields​Url | String | The URL to get the list of source fields that this source object has. | Small, 37.0 | 37.0 |
| name | String | The external name of this source object. The specifics depend on the connector type. | Small, 37.0 | 37.0 |
| replicated | Boolean | Indicates whether this source object is synced in Analytics (true) or not (false). | Small, 37.0 | 37.0 |
| url | String | The URL to get this source object. | Small, 37.0 | 37.0 |

#### See Also

-   [Data Connector Source Object Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname.htm "Returns a source object resource for an Analytics connector. A source object represents a specific category or type of data that the Analytics connector knows about. When a source object is synced to Analytics, it can be used to create datasets.")

## Related Topics

- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Data Connector Source Object Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname.htm)
