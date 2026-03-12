---
title: "Practitioner Availability at Facilities"
domain: health-cloud-object-reference
topic: practitioner-availability-at-facilities
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:35.118Z
estimatedTokens: 800
keywords: [Practitioner, Availability, Facilities, book, appointment, know, facility, Health, Cloud, queries, specific, source, EHR, system, IDs]
---

# Practitioner Availability at Facilities

> To book an appointment, we need to know the availability of a given practitioner at a
  given facility. To get this information, Health Cloud queries the specific source EHR system,
  using the IDs of the practitioner and the facility as stored in that source system.

# Practitioner Availability at Facilities

To book an appointment, we need to know the availability of a given practitioner at a given facility. To get this information, Health Cloud queries the specific source EHR system, using the IDs of the practitioner and the facility as stored in that source system.

## Practitioner and Facility IDs

-   The source system ID comes from the Healthcare Practitioner Facility record for the practitioner+facility combination.
-   The source system facility ID comes from an Identifier record that looks up to the Contact record for the practitioner, with the same source system as the Healthcare Practitioner Facility record.
-   The source system facility ID comes from an Identifier record that looks up to the Account record for the facility, with the same source system as the Healthcare Practitioner Facility record.

Booking an appointment against a facility alone, such as an X-Ray, lab work, or dialysis, is not supported. A practitioner must be defined for the facility, even if it is a placeholder.

![Practitioner+Facility Data Model](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fpractitioner_facility_model.png&folder=health_cloud_object_reference)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

What's the difference between an ID and an Identifier?

-   An Identifier is a record type that represents real-world identifying information about a facility or practitioner, such as dates of validity, jurisdiction, and the issuing authority.
-   An ID is a machine-generated foreign key that identifies a record in a remote EHR system.

## Appointment Type and Service Type

The source system requires Appointment Type and Service Type codes that are derived from the “visit type” (Work Type record) selected by the call center agent. These codes are configured via Work Type Code Set Bundle records, one per Work Type, with lookups to Code Set Bundle and Code Sets for the Service Type and Appointment Type codes in each Source System the org integrates with.

![Appointment Type and Service Type Data Model](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fappointment_service_type_model.png&folder=health_cloud_object_reference)

Appointments booked by the call center agent result in a Service Appointment record being created along with a Healthcare Practitioner Facility Appointment junction between the Service Appointment and Healthcare Practitioner Facility. The Service Appointment status field is set to Booked upon record creation.

![Appointment Data Model](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fappointment_model.png&folder=health_cloud_object_reference)

#### See Also

-   [Provider Network Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_pnm_data_model.htm "Provider Network Management allows health insurance companies to bring providers into their network and helps members or patients find care that fits their needs. It provides objects for managing provider networks and contract payment agreement terms.")

## Related Topics

- Provider Network Management (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_pnm_data_model.htm)
