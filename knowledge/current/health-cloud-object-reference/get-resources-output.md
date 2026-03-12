---
title: "Get Resources Output"
domain: health-cloud-object-reference
topic: get-resources-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.629Z
estimatedTokens: 152
keywords: [Resources, Output, containing, results, resource, search]
---

# Get Resources Output

> The response body containing the results of the resource search.

# Get Resources Output

The response body containing the results of the resource search.

JSON Example

```

```

Properties

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| providerSearchResults | Provider Search Result | A list of healthcare providers or practitioners who match the search criteria. | Required |
| assetSearchResults | Asset Search Result | A list of available assets or resources (e.g., medical equipment, examination rooms) that match the search criteria. | Required |
| errors | Array of Objects | An array of errors that were found, if any. | Optional |

## Code Examples

```
{
  "matchingProviders": [
    {
      "acceptedInsurancePlans": [
        "Any Plan"
      ],
      "acceptingNewPatients": true,
      "additionalDetails": {},
      "certifications": [],
      "educationLevel": "high",
      "facilityAddress": {
        "addressText": "address",
        "city": "<city acronym>",
        "state": "<state acronym>",
        "postalCode": "123456",
        "country": "<country acronym>",
        "latitude": 22.2222,
        "longitude": -33.3333
      },
      "facilityName": "Any Hospital",
      "facilityPhone": "111-111-1111",
      "gender": "male",
      "languagesSpoken": [],
      "licenseCountries": [],
      "licenseRegions": [],
      "licenseStates": [],
      "licenseStatuses": [],
      "licenses": [],
      "nationalProviderIdentifier": "0123456789",
      "photoUrl": "/services/images/photo/001SB00000sb6aid",
      "providerId": "<provider_Id>",
      "providerName": "Dr. John Dae",
      "providerType": "Medical Doctor",
      "sourceSystem": "cerner",
      "specialties": [],
      "subSpecialties": []
    }
  ]
}
```

## Related Topics

- Provider Search Result (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_provider_search_result_representation.htm)
- Asset Search Result (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_asset_search_result_representation.htm)
