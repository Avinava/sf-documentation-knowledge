---
title: "Get Resources Action"
domain: health-cloud-object-reference
topic: get-resources-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.099Z
estimatedTokens: 506
keywords: [Resources, Action, Search, healthcare, providers, medical, assets, criteria, REST, HTTP, Inputs, Outputs]
---

# Get Resources Action

> Search for available resources, such as healthcare providers or
      medical assets, based on specified search criteria.

# Get Resources Action

Search for available resources, such as healthcare providers or medical assets, based on specified search criteria.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v65.0/connect/health/appointment-management/resources

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| resourceType | TypeStringDescriptionThe type of resource to search for.Valid values are:AssetProvider |
| providerSearchCriteria | TypeObjectDescriptionSearch criteria specific to healthcare providers, such as specialties and languages spoken.Use this parameter when resourceType is set to Provider. |
| assetSearchCriteria | TypeObjectDescriptionSearch criteria specific to medical assets, such as asset type IDs and categories.Use this parameter when resourceType is set to Asset. |
| commonSearchCriteria | TypeObjectDescriptionSearch criteria that apply to both providers and assets, such as facility location and search radius. |
| orderBy | TypeStringDescriptionThe field used to sort the search results. |
| ascending | TypeBooleanDescriptionThe sort order. Set to true for ascending or false for descending. |
| offset | TypeIntegerDescriptionThe starting point for retrieving a subset of results, used for pagination. |
| searchLimit | TypeIntegerDescriptionThe maximum number of search results to return. |

## Outputs

| Output | Details |
| --- | --- |
| assetSearchResults | TypeList<Object>DescriptionA list of medical assets that match the search criteria. This is populated when resourceType is set to Asset. |
| providerSearchResults | TypeList<Object>DescriptionA list of healthcare providers who match the search criteria. This is populated when resourceType is set to Provider. |
| error | TypeList<Object>DescriptionA list of errors that occurred during the search, including error codes and messages. |

## Example

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
{
          "resourceType": "Asset",
          "assetSearchCriteria": {
          "assetName": "machine",
          "assetTypeIds": [
          "1Fwxx0000004C9bCAE",
          "1Fwxx0000004C96CAE"
          ],
          "assetCategories": [
          "Device",
          "HealthcareService",
          "Location"
          ],
          "status": "Active",
          "productCode": "PC-45678"
          },
          "commonSearchCriteria": {
          "radius": 5,
          "distanceUnit": "miles"
          },
          "orderBy": "distance",
          "ascending": true,
          "offset": 0,
          "searchLimit": 10
          }
```

```
{
          "providerSearchResults": [],
          "assetSearchResults": [
          {
          "assetId": "02iSG000000DA4p0AG",
          "assetName": "MRI Machine Room 3",
          "facilityId": "001SG000000EfT80AK",
          "facilityName": "Downtown Imaging Center",
          "assetCategories": ["Device", "Imaging"],
          "status": "Active",
          "productCode": "PC-45678"
          }
          ],
          "error": []
          }
```
