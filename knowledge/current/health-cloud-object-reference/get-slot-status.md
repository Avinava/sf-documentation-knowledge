---
title: "Get Slot Status"
domain: health-cloud-object-reference
topic: get-slot-status
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:35.143Z
estimatedTokens: 240
keywords: [Slot, Status, Codes]
---

# Get Slot Status

# Get Slot Status

-   **Type**: Resource
-   **Verb**: GET
-   **Default URL Path** for Single-Source System: <base-url>/Slot/{sourceSlotId}
-   **Default URL Path** for Multi-Source System: <base-url>/Slot/{sourceSystem}/{sourceSlotId}

Where:

-   sourceSystem identifies the source system.
-   sourceSlotId is the ID of a time slot in the SourceSystem returned from the Find Available Slots operation.

Your Base URL is configured in Setup > Appointment Scheduling.

All communications with the external system use the FHIR R4 standard.

## Response Codes

-   200: Success
-   401: Unauthorized
-   404: Slot not found
-   5xx: Server error

## Response Body

To map slots, resourceType, id, status, start, and end are required in the FHIR response.

```

```

The valid values for slotStatus are:

-   busy
-   free
-   busy-unavailable
-   busy-tentative
-   entered-in-error

#### See Also

-   [FHIR Resource: Slot](https://www.hl7.org/fhir/slot.html)

## Code Examples

```
{     
        "resourceType" : "Slot",    
        "id" : "<string>"
        "identifier" : [{ Identifier }],     
        "serviceCategory" : [{ CodeableConcept }],     
        "serviceType" : [{ CodeableConcept }],     
        "specialty" : [{ CodeableConcept }],     
        "appointmentType" : { CodeableConcept },    
        "schedule" : { Reference(Schedule) },//As we are passing _include=Slot:schedule in query, it should include the "Schedule" resource as one of the item in "entry" field. 
        "status" : "<code>",    
        "start" : "<instant>",    
        "end" : "<instant>",    
        "overbooked" : <boolean>,    
        "comment" : "<string>"    
 }
```
