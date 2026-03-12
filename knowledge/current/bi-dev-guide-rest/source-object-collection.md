---
title: "Source Object Collection"
domain: bi-dev-guide-rest
topic: source-object-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.589Z
estimatedTokens: 224
keywords: [Source, Collection, objects, Analytics, data, connector]
---

# Source Object Collection

> A collection of source objects for an Analytics data connector.

# Source Object Collection

A collection of source objects for an Analytics data connector.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| next​Page​Url | String | The URL to get the next page of source objects in the collection. | Small, 53.0 | 53.0 |
| source​Objects | Source​Object[] | A list of source objects. | Small, 37.0 | 37.0 |
| total​Size | Integer | The total count of elements in the collection, irrespective of the page. | Small, 53.0 | 53.0 |
| url | String | The URL to get the collection. | Small, 53.0 | 53.0 |

#### See Also

-   [Data Connector Source Objects List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects.htm "Returns a list of all the source objects that are present under the specified Analytics connection.")

## Related Topics

- Source​Object (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_source_object.htm)
- Data Connector Source Objects List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects.htm)
