---
title: "Find Available Time Slots for an Appointment"
domain: health-cloud-object-reference
topic: find-available-time-slots-for-an-appointment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:35.139Z
estimatedTokens: 651
keywords: [Time, Slots, Appointment, call, center, agent, wants, schedule, step, providers, match, patient’s, needs, gathers, selection]
---

# Find Available Time Slots for an Appointment

> When a call center agent wants to schedule an appointment, the first step is to find
    the available time slots for providers who match the patient’s needs. The call center agent
    gathers selection criteria and then initiates a search to obtain the available slots for
    providers who match the criteria.

# Find Available Time Slots for an Appointment

When a call center agent wants to schedule an appointment, the first step is to find the available time slots for providers who match the patient’s needs. The call center agent gathers selection criteria and then initiates a search to obtain the available slots for providers who match the criteria.

-   **Type**: Controller
-   **Verb**: POST
-   **Default URL Path**: <base-url>/Slot/\_search
-   **Content-Type (Header)**: application/x-www-form-urlencoded

Your Base URL is configured in Setup > Appointment Scheduling.

All communications with the external system use the FHIR R4 standard.

## Request Body

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

The request payload is sent as single line. It is listed here in separate lines for readability.

## Multiple Source Systems

If you are working with more than one source system, the Location.\_id gets the source system name and ID in pipe-delimited pairs, separated by commas, like this:

```

```

For a single source system, the Location.\_id is the ID only, like this:

```

```

## Response Codes

-   200: Success
-   400: Bad request
-   401: Unauthorized
-   5xx: Server error

## Response Body

-   To map slots, resource, resourceType, id, schedule, actor, start, and end are required in the FHIR response.
-   Response is a map keyed by CareProvider.careProviderId to give all available slots within the start/end range for a single practitioner+facility pair that can fulfill an appointment for the serviceTypeCode+appointmentTypeCode.
-   If a practitioner+facility pair is not found in the source system, the provider is ignored and nothing is returned for that careProviderId. If a practitioner+facility pair does not have availability that matches the slot range and codes, the careProviderId is returned without any slots.
-   By default, the list of returned slots for each provider is sorted by date/time in ascending order.
-   The sourceSlotId for a slot is the ID of a time slot in the source system for a care provider (eg. practitioner+facility) that can fulfill a specific serviceTypeCode+appointmentTypeCode. Given this ID during appointment booking, the source system is able to identify the practitioner, facility, time slot, service type and appointment type.

```

```

## Error Response for Multiple Source Systems

```

```

## Identifier

```

```

## CodeableConcept

```

```

## Coding

```

```

#### See Also

-   [FHIR Resource: Slot](https://www.hl7.org/fhir/slot.html)

## Code Examples

```
schedule:Schedule.actor:Practitioner.identifier=http://hl7.org/fhir/sid/us-npi|323,434,567,342,234,224,423
&schedule:Schedule.actor:Location._id=epic|555,epic|123,allscripts|124,allscripts|221,cerner|222,cerner|223,athena|331,athena|332
&schedule:Schedule.actor:Practitioner._id=epic|2342342,&start=ge2020-10-10
&start=le2021-03-31&appointment-type=epic|ROUTINE,epic|ROUTINE,cerner|RTN,athena|REGULAR
&service-type=epic|H999,cerner|E100,athena|C200,allscripts|A300
&status=free
&_include=Slot:schedule
&_sort=start
```

```
schedule:Schedule.actor:Location._id=epic|1404774,cerner|1476569
```

```
schedule:Schedule.actor:Location._id=1404774,1476569
```

```
{
"resourceType": "Bundle",
"id": "",
"meta": {"lastUpdated":},
"type": "searchset",
"total": n,
"entry": [    
    "fullUrl" : ""    ,
    "resource" : {     
        "resourceType" : "Slot",    
        "id" : "<String>",
        "identifier" : [{ Identifier }],     
        "serviceCategory" : [{ CodeableConcept }],     
        "serviceType" : [{ CodeableConcept }],     
        "specialty" : [{ CodeableConcept }],     
        "appointmentType" : { CodeableConcept },    
        "schedule" : { Reference(Schedule) }, //expects to get actor in this object
        "status" : "<code>",    
        "start" : "<instant>",    
        "end" : "<instant>",    
        "overbooked" : <boolean>,    
        "comment" : "<string>"    
     } 
    ]
}
```

```
{
      "resourceType": "Bundle",
      .......
      "entry": [
      {
      "fullUrl": "http://hapi.fhir.org/baseR4/Slot/1939809",
      "resource": {
      "resourceType": "Slot",
      .......
      },
      "search": {"mode": "match"}
      },
      {
      "fullUrl": "http://hapi.fhir.org/baseR4/Schedule/1939822",
      "resource": {
      "resourceType": "Schedule",
      "id": "1939822",
      .....
      },
      "search": {"mode": "include"}
      },
      { //If the targeting system is FHIR R4, you get OperationOutcome resource as error. Pass it back with one of the elements in "Bundle.entry" and "extension" to identify the target system.
      "resourceType": "OperationOutcome",
      ....
      "extension" : [{
      "url" : "https://fhir-ehr-code.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Slot/_search33",
      "value" : "cerner"
      }]
      "issue": [ {
      "severity": "error",
      "code": "processing",
      "diagnostics": "Invalid request: The FHIR endpoint on this server does not know how to handle GET operation[Slot/_search33] with parameters [[_include, _pretty, schedule:Schedule.actor:Practitioner.identifier, appointment-type, service-type, schedule:Schedule.actor:Practitioner._id, schedule:Schedule.actor:Location._id]]"
      }
      ]
      }
      ]
      }
```
