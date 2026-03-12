---
title: "Cancel Appointment"
domain: health-cloud-object-reference
topic: cancel-appointment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:35.124Z
estimatedTokens: 355
keywords: [Cancel, Appointment, Codes]
---

# Cancel Appointment

# Cancel Appointment

-   **Type**: Controller
-   **Verb**: POST
-   **Default URL Path** for Single-Source System: <base-url>/Appointment/{sourceAppointmentId}
-   **Default URL Path** for Multi-Source System:\* <base-url>/Appointment/{sourceSystem}/{sourceAppointmentId}

Where:

-   sourceSystem identifies the source system.
-   sourceAppointmentId is the ID of an appointment in the source system.

Your Base URL is configured in Setup > Appointment Scheduling.

All communications with the external system use the FHIR R4 standard.

## Request Body

```

```

## Response Codes

-   200: Success
-   401: Unauthorized
-   404: Appointment not found
-   5xx: Server error

To map slots, resourceType, id, identifier, serviceType, appointmentType, slot, participant, actor, and status are required in the FHIR response.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

"Cancelation" is spelled with one L, per the FHIR R4 specification.

The valid values for status are:

-   proposed
-   pending
-   booked
-   arrived
-   fulfilled
-   cancelled
-   noshow
-   entered-in-error
-   checked-in
-   waitlist

If the request cannot be processed for any reason (e.g. it’s unsupported, there’s a timeout, etc.) status is returned as proposed.

#### See Also

-   [FHIR Resource: Appointment](https://www.hl7.org/fhir/Appointment.html)

## Code Examples

```
{
         "resourceType": "Appointment",
         "id": "1839594",
         "status": "cancelled",
         "cancelationReason" : {
         "coding" : [
         {
         "system" : "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
         "code" : "pat-mv"
         }
         ]
         }
         }
```

```
{
    "resourceType" : "Appointment",
    "id" : "<string>"
    "identifier" : [{ Identifier }], //Source system identifier mandatory in the response if there are multiple source systems
    "cancelationReason" : { CodeableConcept },
    "serviceCategory" : [{ CodeableConcept }],
    "serviceType" : [{ CodeableConcept }],
    "specialty" : [{ CodeableConcept }],
    "appointmentType" : { CodeableConcept },
    "reasonCode" : [{ CodeableConcept }],
    "reasonReference" : [{ Reference(Condition|Procedure|Observation|ImmunizationRecommendation) }],
    "priority" : "<unsignedInt>",
    "description" : "<string>", 
    "supportingInformation" : [{ Reference(Any) }],
    "start" : "<instant>",// start of the appointment - ISO 8601 format
    "end" : "<instant>",// end of the appointment - ISO 8601 format
    "minutesDuration" : "<positiveInt>",
    "slot" : [{ Reference(Slot) }],
    "created" : "<dateTime>",
    "comment" : "<string>",
    "patientInstruction" : "<string>",
    "basedOn" : [{ Reference(ServiceRequest) }],
    "participant" : [{"type" : [{ CodeableConcept }],//Patient EHR id
    "actor" : { Reference(Patient|Practitioner|PractitionerRole|RelatedPerson | Device|HealthcareService|Location) }, //Practitioner EHR id
    "required" : "<code>",
    "status" : "<code>", // Mandatory in the response
    "period" : { Period }}],
    "requestedPeriod" : [{ Period }
    ]
}
```
