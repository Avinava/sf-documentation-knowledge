---
title: "Source Field Collection"
domain: bi-dev-guide-rest
topic: source-field-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.579Z
estimatedTokens: 212
keywords: [Source, Collection]
---

# Source Field Collection

> A collection of fields for a source object.

# Source Field Collection

A collection of fields for a source object.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data​Connector | Asset​Reference | A reference to the data connector that the fields belong to. | Small, 53.0 | 53.0 |
| fields | Source​Field[] | A list of Source Fields. | Small, 37.0 | 37.0 |
| source​Object​Name | String | The name of the source object that the fields belong to. | Small, 53.0 | 53.0 |
| url | String | URL to get the collection. | Small, 37.0 | 37.0 |

#### See Also

-   [Data Connector Source Object Fields Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname_fields.htm "Returns a list of source fields for a particular source object.")

## Related Topics

- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Source​Field (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_source_field.htm)
- Data Connector Source Object Fields Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname_fields.htm)
