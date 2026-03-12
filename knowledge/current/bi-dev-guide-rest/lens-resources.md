---
title: "Lens Resources"
domain: bi-dev-guide-rest
topic: lens-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.782Z
estimatedTokens: 479
keywords: [Lens, Resources, Analytics, lenses, how, users, view, data, dataset, basis, building, any, dashboard, allow, manage]
---

# Lens Resources

> Analytics lenses are how users view data in a dataset and are the basis for building any dashboard. 
  These resources allow users to manage collections of lenses, individual lenses,
  and lens files.

# Lens Resources

Analytics lenses are how users view data in a dataset and are the basis for building any dashboard. These resources allow users to manage collections of lenses, individual lenses, and lens files.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Lenses List Resource | Returns a collection of Analytics lenses, or creates a lens. | GET POST | /wave/lenses |
| Lens Resource | Returns a JSON file that describes the structure of an Analytics lens with the specified ID, deletes a lens, or updates a lens. | GET DELETE PATCH | /wave/lenses/<lensIdOrApiName> |
| Lens Bundle Resource | Returns a JSON file that describes the structure of an Analytics lens bundle with the specified ID or updates a lens bundle. | GET PUT | /wave/lenses/<lensIdOrApiName>​/bundle |
| Lens File Resource | Returns a file that is part of an Analytics lens. | GET PUT | /wave/lenses/<lensIdOrApiName>​/files/<files ID> |

-   **[Lenses List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses.htm)**
    Returns a list of Analytics lenses or creates a lens.
-   **[Lens Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id.htm)**
    Returns, deletes, or updates the lens with the specified ID or API name.
-   **[Lens File Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_files_id.htm)**
    Returns or updates a file that is part of an Analytics lens.
-   **[Lens File Metadata Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_files.htm)**
    Returns or creates the lens file metadata with the specified ID or API name.
-   **[Lens Bundle Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_bundle.htm)**
    Returns or updates the lens bundle with the specified ID or API name.

## Related Topics

- Lenses List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses.htm)
- Lens Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id.htm)
- Lens Bundle Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_bundle.htm)
- Lens File Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_files_id.htm)
- Lens File Metadata Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_files.htm)
