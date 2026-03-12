---
title: "Service Territories"
domain: chatterapi
topic: service-territories
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.441Z
estimatedTokens: 705
keywords: [Service, Territories, workTypeId, workTypeGroupId, Filter, sort, radius, latitude, longitude, sortBy, sortOrder]
---

# Service Territories

> Get service territories for a workTypeId or workTypeGroupId. Filter and
      sort the service territories using the radius, latitude, longitude,
        sortBy, and sortOrder properties.

# Service Territories

Get service territories for a workTypeId or workTypeGroupId. Filter and sort the service territories using the radius, latitude, longitude, sortBy, and sortOrder properties.

Resource

```

```

Resource example

```

```

Available version

48.0

HTTP methods

GET

Query parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filterBy​TerritoryIds | String[] | Comma-separated list of service territory IDs to filter the API response. | Optional | 57.0 |
| latitude | Double | Latitude of the service territory area. | Optional | 48.0 |
| limit | Integer | Limit of the service territories returned. For example, specify limit=1 to have only one service territory in the service territories list. The default value is 40. | Optional | 48.0 |
| longitude | Double | Longitude of the service territory area. | Optional | 48.0 |
| offset | Integer | Offset for the service territories returned. The default value is 0. | Optional | 48.0 |
| radius | Integer | Radius around the latitude and longitude values to get service territories. Default value is 5 when latitude and longitude values are provided, otherwise there is no default value. | Optional | 48.0 |
| radiusUnit | String | Unit for the radius value. Possible values are mi for miles and km for kilometer. Default value is mi when latitude and longitude values are provided, otherwise there is no default value. | Optional | 48.0 |
| scheduling​PolicyId | String | ID of the AppointmentSchedulingPolicy object. If no scheduling policy is passed in the request body, the default configurations are used. All Scheduling Policy Configurations are considered when using this API. | Optional | 48.0 |
| serviceResource​Ids | String[] | Comma-separated list of service territory technician or asset IDs to filter the API response. | Optional | 48.0 |
| sortBy | String[] | Criteria to sort the service territories list. Possible case-insensitive values are distance and name. The default value is distance when latitude and longitude values are provided, otherwise name. | Optional | 48.0 |
| sortOrder | String[] | Sorting order of the service territory list. Possible case-insensitive values are asc for ascending and desc for descending. The default value is asc. | Optional | 48.0 |
| workTypeGroupId | String | ID of the work type group containing the work types that are being performed. | Required if workTypeId isn’t given | 48.0 |
| workTypeId | String | ID of the type of work to be performed. | Required if workTypeGroupId isn’t given | 48.0 |

Response body

[Service Territories Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_service_territories_output.htm "Output for the service territories GET method.")

Sample Response body

```

```

## Code Examples

```
/connect/scheduling/service-territories
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/​​​scheduling/service-territories?workTypeGroupId=0VSRM000000009Z4AQ&latitude=37.79332​&longitude=-122.392761&radius=50&radiusUnit=km&sortBy=Distance&sortOrder=asc
```

```
{
  "result" : {
    "serviceTerritories" : [ {
      "city" : "San Francisco",
      "country" : "United States",
      "id" : "0HhRM00000002U50AI",
      "latitude" : 37.79332,
      "longitude" : -122.392761,
      "name" : "Chase 1 Mission",
      "operatingHoursId" : "0OHRM00000002Ps4AI",
      "postalCode" : "94105",
      "state" : "CA",
      "street" : "1 Mission Street"
    }, {
      "city" : "San Francisco",
      "country" : "United States",
      "id" : "0HhRM00000002Tq0AI",
      "latitude" : 37.793872,
      "longitude" : -122.394865,
      "name" : "Chase 1 Market",
      "operatingHoursId" : "0OHRM00000002Ps4AI",
      "postalCode" : "94105",
      "state" : "CA",
      "street" : "1 Market Street"
    } ]
  }
}
```

## Related Topics

- Service Territories Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_service_territories_output.htm)
