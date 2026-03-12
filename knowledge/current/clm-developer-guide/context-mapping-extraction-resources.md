---
title: "Context Mapping Extraction Resources"
domain: clm-developer-guide
topic: context-mapping-extraction-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.234Z
estimatedTokens: 411
keywords: [Context, Mapping, Extraction, Resources, Manage, custom, mappings, flow, documents, their, sent, resource, map, extracted, own]
---

# Context Mapping Extraction Resources

> Manage custom mappings used in the extraction flow of documents before their fields
      are sent for extraction. Use the Extraction Context Mapping resource to map extracted field
      values to their own set of custom fields relevant to their contract types and business
      cases.

# Context Mapping Extraction Resources

Manage custom mappings used in the extraction flow of documents before their fields are sent for extraction. Use the Extraction Context Mapping resource to map extracted field values to their own set of custom fields relevant to their contract types and business cases.

Available resource is:

| Resource | Description |
| --- | --- |
| /connect/clm/extraction-context-mappings (POST) | Create extraction context-mapping details that show how extracted data is associated with Salesforce fields. |
| /connect/clm/extraction-context-mappings/${contextUseCaseMappingId} (DELETE, GET, PATCH) | Delete extraction context mapping details based on the specified context use case mapping ID. Get extraction context mapping details based on the specified context use case mapping ID. Update extraction context mapping details based on the specified context use case mapping ID. |

-   **[Extraction Context Mapping (POST)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_extraction_context_mapping.htm)**
    Create extraction context-mapping details that show how extracted data is associated with Salesforce fields.
-   **[Extraction Context Mappings (DELETE, GET, PATCH)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_extraction_context_mappings_get_delete_patch.htm)**
    Delete extraction context mapping details based on the specified context use case mapping ID. Get extraction context mapping details based on the specified context use case mapping ID. Update extraction context mapping details based on the specified context use case mapping ID.

## Related Topics

- /connect/clm/extraction-context-mappings
                           (POST) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_extraction_context_mapping.htm)
- /connect/clm/extraction-context-mappings/${contextUseCaseMappingId}
                           (DELETE, GET, PATCH) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_extraction_context_mappings_get_delete_patch.htm)
- Extraction Context Mapping (POST) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_extraction_context_mapping.htm)
- Extraction Context Mappings (DELETE, GET, PATCH) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_extraction_context_mappings_get_delete_patch.htm)
