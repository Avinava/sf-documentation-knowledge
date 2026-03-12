---
title: "Eclair Chart Resources"
domain: bi-dev-guide-rest
topic: eclair-chart-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.733Z
estimatedTokens: 439
keywords: [Eclair, Chart, Resources, charts, render, maps, geodata, Analytics, dashboards]
---

# Eclair Chart Resources

> Eclair charts render maps and geodata in Analytics dashboards.

# Eclair Chart Resources

Eclair charts render maps and geodata in Analytics dashboards.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Charts Maps List Resource | Returns a collection of maps, or creates a map. | GET POST | /eclair/maps |
| Charts Maps Resource | Get, update, or delete a specific map. | DELETE GET PATCH | /eclair/maps/<id> |
| Charts Geodata Resource | Get, update, or delete a specific geodata definition. | DELETE GET PATCH | /eclair/geodata/<id> |
| Charts Geodata List Resource | Returns a collection of geodata definitions, or creates a geodata definition. | GET POST | /eclair/geodata |
| Charts Geodata File List Resource | Get the binary file associated with a geodata definition. | GET | /eclair/geodata/<id>/file |

-   **[Charts Geodata List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_geodata.htm)**
    Returns a collection of geodata definitions and creates a geodata definition.
-   **[Charts Geodata Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_geodata_id.htm)**
    Returns a geodata definition, updates, or delete a geodata definition.
-   **[Charts Geodata File List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_geodata_id_file.htm)**
    Return the binary file associated with a geodata definition.
-   **[Charts Maps List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps.htm)**
    Returns a list of maps or creates a map.
-   **[Charts Maps Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps_id.htm)**
    Returns, updates, or deletes a specific map.

## Related Topics

- Charts Maps List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps.htm)
- Charts Maps Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps_id.htm)
- Charts Geodata Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_geodata_id.htm)
- Charts Geodata List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_geodata.htm)
- Charts Geodata File List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_geodata_id_file.htm)
