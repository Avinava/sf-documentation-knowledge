---
title: "Create Appointment"
domain: health-cloud-object-reference
topic: create-appointment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:35.132Z
estimatedTokens: 584
keywords: [Appointment, patient, selects, slot, call, center, agent, books, triggers, Status, REST, EHR, system, Codes]
---

# Create Appointment

> When the patient selects an available slot, the call center agent books the
    appointment, which triggers a Get Slot Status REST call to the EHR system.

# Create Appointment

When the patient selects an available slot, the call center agent books the appointment, which triggers a Get Slot Status REST call to the EHR system.

1.  Health Cloud makes a Get Slot Status REST call.

    An error is displayed to the call center agent if the slot is no longer available.

2.  Health Cloud creates a Service Appointment record and a Healthcare Practitioner Facility Appointment junction between the Service Appointment and Healthcare Practitioner Facility.
3.  Health Cloud makes a Create (Book) Appointment REST call.
    -   Service Appointment is updated with the response.
    -   An error is displayed to the call center agent if the booking is rejected.

-   **Type**: Resource
-   **Verb**: POST
-   **Default URL Path**: \[base\]/Appointment/\[sourceSystem\]

Your Base URL is configured in Setup > Appointment Scheduling.

All communications with the external system use the FHIR R4 standard.

## Request Body

The resourceType, identifier, cancelationReason, serviceType, appointmentType, slot, comment, and status are the minimum required fields in the request that Health Cloud sends.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

For "identifier," Health Cloud sends 3 records:

-   Salesforce unique appointment id
-   Salesforce unique patient id
-   Source system (for multi-source systems only)

## Response Codes

-   200: Success
-   400: Bad request
-   401: Unauthorized
-   404: Slot or patient not found
-   5xx: Server error

## Response Body

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
    "resourceType" : "Appointment",
    "identifier" : [{ Identifier }], //See Note below
    "cancelationReason" : { CodeableConcept },
    "serviceType" : [{ CodeableConcept }], // From WorkType --> AppointmentType
    "appointmentType" : { CodeableConcept }, // From WorkType --> serviceType
    "slot" : [{ Reference(Slot) }], //Health Cloud sends the slot ID received from the Find Slots API response.
    "comment" : "<string>",
    "participant" : [{"type" : [{ CodeableConcept }], //Health Cloud sends sourcePatientId 
    "actor" : { Reference(Patient|Practitioner|PractitionerRole|RelatedPerson
    | Device|HealthcareService|Location) }, //Health Cloud sends the source practitioner id
    "status" : "<code>", 
      ]
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
