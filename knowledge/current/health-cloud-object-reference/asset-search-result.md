---
title: "Asset Search Result"
domain: health-cloud-object-reference
topic: asset-search-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.401Z
estimatedTokens: 403
keywords: [Asset, Search, Result, Detailed, resource, matching, criteria]
---

# Asset Search Result

> Detailed information about a single asset or resource matching the search criteria.

# Asset Search Result

Detailed information about a single asset or resource matching the search criteria.

Properties

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| assetId | String | A unique identifier assigned to this specific asset or resource. | Optional |
| assetName | String | The common name or description of the asset (e.g., "MRI Scanner", "Consultation Room A"). | Optional |
| facilityId | String | A unique identifier for the facility where this asset is located. | Optional |
| facilityName | String | The name of the facility or clinic where this asset can be found. | Optional |
| facilityAddress | Address Output | The physical address of the facility where the asset is located. | Optional |
| facilityPhone | String | The main contact phone number for the facility where the asset is located. | Optional |
| assetTypeIds | Array of Strings | A list of unique identifiers for the categories or types this asset belongs to. | Optional |
| assetCategories | Array of Strings | A list of broader classifications or groups this asset falls under (e.g., "Diagnostic Imaging", "Surgical Equipment"). | Optional |
| status | String | The current operational status of the asset (e.g., "Available", "In Use", "Maintenance"). | Optional |
| statusReason | String | A brief explanation or reason for the asset's current status. | Optional |
| productCode | String | The manufacturer's product code or model identifier for the asset. | Optional |
| additionalDetails | Object | A flexible object containing any extra key-value pair details about the asset. | Optional |

## Related Topics

- Address
                        Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_address_output_representation.htm)
