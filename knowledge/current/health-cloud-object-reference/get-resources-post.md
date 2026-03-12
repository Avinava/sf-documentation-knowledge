---
title: "Get Resources (POST)"
domain: health-cloud-object-reference
topic: get-resources-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.297Z
estimatedTokens: 383
keywords: [Resources, POST, Search, healthcare, care, providers, assets, backend, engine, data]
---

# Get Resources (POST)

> Search for healthcare care providers or assets using the backend search engine and
    data.

# Get Resources (POST)

Search for healthcare care providers or assets using the backend search engine and data.

Resource

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

```

```

Properties

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| resourceType | String | Type of resource to search for. Possible values are:ProviderAsset. | Required |
| providerSearchCriteria | Provider Search Criteria Input | Criteria used specifically for searching for healthcare providers. | Optional |
| assetSearchCriteria | Asset Search Criteria Input | Criteria used specifically for searching for assets. | Optional |
| commonSearchCriteria | Common Search Criteria Input | Search filters that apply to both provider and asset searches. | Optional |
| orderBy | String | Field by which the search results should be sorted. Possible values are:namedistanceor a valid CPSF field. | Optional |
| ascending | Boolean | Indicates if the sort order is ascending (true) or descending (false). | Optional |
| offset | Integer | Starting point for retrieving a subset of search results. Minimum value is 0. | Optional |
| searchLimit | Integer | Maximum number of search results to return. Minimum value is 1, maximum is 1000. | Optional |

Response body for POST

[Get Resources Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_get_resources_output_representation.htm "The response body containing the results of the resource search.")

## Code Examples

```
/connect/health/appointment-management/resources
```

```
{
"resourceType": "Provider",
"providerSearchCriteria": {
"providerName": "John Dae",
"specialties": [
“Cardiology”],
“planType”:[“HMO”]
},
"commonSearchCriteria": {
"facilityName": "Any Clinic",
"radius": 5,
"distanceUnit": "miles"
},
"offset": 0,
"searchLimit": 10
}
```

## Related Topics

- Provider Search Criteria Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_provider_search_criteria_input_representation.htm)
- Asset Search Criteria Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_asset_search_criteria_input_representation.htm)
- Common Search Criteria Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_common_search_criteria_input_representation.htm)
- Get Resources Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_get_resources_output_representation.htm)
