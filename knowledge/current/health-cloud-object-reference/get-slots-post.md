---
title: "Get Slots (POST)"
domain: health-cloud-object-reference
topic: get-slots-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.717Z
estimatedTokens: 577
keywords: [Slots, POST, associated, provider, asset]
---

# Get Slots (POST)

> Get slots associated with the provider or asset.

# Get Slots (POST)

Get slots associated with the provider or asset.

Resource

```

```

Resource Example

```

```

HTTP methods

POST

Request body for POST

{ "resources": \[ { "resourceId": "c51xx000000B1xxBCI", "serviceTerritoryId": "08pxx000000G6xxGHG", "serviceResourceId": "08pxx000000I8xxIKM", "resourceType": "Provider" } \], "channelId": "a02xx000000A8xxAGH", "workTypeId": "1Fwxx0000004C9bCAE", "startDate": "2013-12-10T09:00:00Z", "endDate": "2013-12-10T11:00:00Z", "sourceSystem": "<cerner>", "appointmentTypes": \[ "FOLLOW-UP" \], "serviceCategories": \[ "serviceCategoryCode1", "serviceCategoryCode2" \], "serviceTypes": \[ "serviceTypeCode1", "serviceTypeCode2" \] }

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available version |
| --- | --- | --- | --- | --- |
| appointment​Types | Array | Type of the appointment. An array of strings. Required, if none of the following are provided:workTypeIdserviceTypesserviceCategories | Required | 65.0 |
| channel​Id | String | Engagement channel associated with the work type. | Required | 65.0 |
| endDate | String | End date and time for the slots range. | Required | 65.0 |
| resources | Resources Input | Array of resources, like provider or device. | Required | 65.0 |
| service​Categories | Array | List of broad categorizations of the service. An array of strings. Required, if none of the following are provided:workTypeIdserviceTypesappointmentType | Required | 65.0 |
| service​Types | Array | List of specific services to be performed. An array of strings. Required, if none of the following are provided:workTypeIdappointmentTypeserviceCategories | Required | 65.0 |
| source​System | String | Source system associated with the appointment type, service type or service category. Required, if workTypeId is not provided but either appointmentType, serviceTypes, or serviceCategories is. | Required | 65.0 |
| start​Date | String | Start date and time for the slots range. | Required | 65.0 |
| workType​Id | String | Work type associated with the resource. | Required | 65.0 |

Response body for POST

[Get Slots Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_get_slots.htm "Output representation for getting appointment slots.")

## Code Examples

```
/connect/health/appointment-management/slots
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/health/appointment-management/slots
```

## Related Topics

- Resources Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_get_slots_resources.htm)
- Get Slots
                                Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_get_slots.htm)
