---
title: "Get Slots Action"
domain: health-cloud-object-reference
topic: get-slots-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.124Z
estimatedTokens: 487
keywords: [Slots, Action, Retrieve, appointment, resources, REST, HTTP, Inputs, Outputs]
---

# Get Slots Action

> Retrieve available appointment slots for one or more
        resources.

# Get Slots Action

Retrieve available appointment slots for one or more resources.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/connect/health/appointment-management/slots

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| appointmentTypes | TypeArrayDescriptionTypes of appointments to search such as Follow-up. Required, if none of the following are provided:workTypeIdserviceTypesserviceCategories. |
| channelId | TypeStringDescriptionID of the engagement channel associated with the appointment. Required, if an engagement channel is configured for a Work Type. |
| endDate | TypeStringDescriptionEnd date and time for the slot search range. |
| resources | TypeArrayDescriptionArray of resource objects to find slots for. |
| serviceCategories | TypeArrayDescriptionCategory of service to find slots for. Required, if none of the following are provided:workTypeIdserviceTypesappointmentTypes. |
| serviceTypes | TypeArrayDescriptionServices types to find slots for. Required, if none of the following:workTypeIdserviceCategoriesappointmentTypes. |
| sourceSystem | TypeStringDescriptionDescription of the external system defined in Salesforce, such as cerner. Required, if workTypeId is not provided. |
| startDate | TypeStringDescriptionRequired.Start date and time for the slot search range. |
| workTypeId | TypeStringDescriptionID of the Work Type associated with the desired appointment. Required, if none of the following are provided:serviceTypesserviceCategoriesappointmentTypes. |

## Outputs

| Output | Description |
| --- | --- |
| resourceSlotDetails | TypeArrayDescriptionList of resources and their corresponding available slots. |

## Example

POST

This sample request is for the Get Slots action.

```

```

This sample response is for the Get Slots action.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "startDate": "2025-07-14T00:12:00.7912",
            "endDate": "2025-07-15T06:59:59.000Z",
            "channelId": "0eFxx000000Mexx2AK",
            "workTypeId": "08qxx0000009cxxYAA",
            "sourceSystem": "Salesforce",
            "resources": [
                {
                    "resourceId": "0bSxx0000004pxx2AA",
                    "serviceTerritoryId": "0Hhxx000000Efxx0AK",
                    "serviceResourceId": "0Hnxx000000DAxx0AG",
                    "resourceType": "Provider",
                    "assetCategory": ""
                }
            ],
            "appointmentTypes": [],
            "serviceCategories": [],
            "serviceTypes": []
        }
    ]
}
```

```
[
    {
        "resourceSlotDetails": [
            {
                "resourceId": "0bSxx0000004pxx2AA",
                "availableSlots": [
                    {
                        "slotId": "slot-xyz-1",
                        "slotStartDate": "2025-07-14T11:00:00.000Z",
                        "slotEndDate": "2025-07-14T11:30:00.000Z",
                        "sourceSystem": "Salesforce"
                    },
                    {
                        "slotId": "slot-xyz-2",
                        "slotStartDate": "2025-07-14T14:30:00.000Z",
                        "slotEndDate": "2025-07-14T15:00:00.000Z",
                        "sourceSystem": "Salesforce"
                    }
                ]
            }
        ]
    }
]
```
