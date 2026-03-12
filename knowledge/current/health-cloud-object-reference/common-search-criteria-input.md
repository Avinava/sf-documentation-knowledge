---
title: "Common Search Criteria Input"
domain: health-cloud-object-reference
topic: common-search-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.912Z
estimatedTokens: 160
keywords: [Common, Search, Criteria, Input, filters, apply, provider, asset, searches]
---

# Common Search Criteria Input

> Search filters that apply to both provider and asset searches.

# Common Search Criteria Input

Search filters that apply to both provider and asset searches.

JSON Example

```

```

Properties

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| facilityName | String | The name of the facility. | Optional |
| facilityAddress | Object | Detailed address information for the facility. See Address Input. | Optional |
| radius | Integer | The search radius around the specified longitude and latitude. Minimum value is 0, maximum is 100. | Optional |
| distanceUnit | String | The unit of measurement for the search radius. Valid values are miles or kilometers. | Optional |

## Code Examples

```
{
  "commonSearchCriteria": {
    "facilityName": "City General Hospital",
    "facilityAddress": {
      "text": "123 Main St, Anytown, CA 90210, USA",
      "line": [
        "123 Main St",
        "Suite 100"
      ],
      "city": "Anytown",
      "district": "Any County",
      "state": "CA",
      "postalCode": "90210",
      "country": "USA",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "radius": 25,
    "distanceUnit": "kilometers"
  }
}
```

## Related Topics

- Address Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_address_input_representation.htm)
