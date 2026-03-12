---
title: "Source Object Data Input"
domain: bi-dev-guide-rest
topic: source-object-data-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.865Z
estimatedTokens: 232
keywords: [Source, Data, Input, retrieve, advanced]
---

# Source Object Data Input

> The request to retrieve data from a source object given a list of fields and advanced
  properties.

# Source Object Data Input

The request to retrieve data from a source object given a list of fields and advanced properties.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| source​Object​Fields | Object[] | A list of fields used to filter the results returned in the response. | Required | 40.0 |
| advanced​Properties | Object(Advanced​Property​Value​Input) | A list of user-specified advanced properties associated with this source object. | Optional | 40.0 |

#### See Also

-   [Data Connector Source Object Data Preview Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname_datapreview.htm "Returns a preview of the source object data that the Analytics connector knows about. When a source object is synced to Analytics, it can be used to create datasets.")

## Related Topics

- Advanced​Property​Value​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_advanced_property_value_input.htm)
- Data Connector Source Object Data Preview Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname_datapreview.htm)
