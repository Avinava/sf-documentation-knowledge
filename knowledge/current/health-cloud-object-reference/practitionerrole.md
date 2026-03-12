---
title: "PractitionerRole"
domain: health-cloud-object-reference
topic: practitionerrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.585Z
estimatedTokens: 1008
keywords: [PractitionerRole, FHIR, resource, maps, HealthcarePractitionerFacility, CareProviderFacilitySpecialty, objects, Salesforce​, V4​.0, Clinical, ​Data, Model, Mapping, Sample, Record]
---

# PractitionerRole

> The practitionerRole FHIR resource maps to the
      HealthcarePractitionerFacility and CareProviderFacilitySpecialty objects in Salesforce​.

# PractitionerRole

The practitionerRole FHIR resource maps to the HealthcarePractitionerFacility and CareProviderFacilitySpecialty objects in Salesforce​.

The practitionerRole resource in FHIR is represented as a combination of HealthcarePractitionerFacility and CareProviderFacilitySpecialty records, where the HealthcarePractitionerFacility record is the base. The CareProviderFacilitySpecialty record is associated to the HealthcarePractitionerFacility record by referencing the HealthcarePractitionerFacility record using the PractitionerFacilityId field on CareProviderFacilitySpecialty.

## FHIR V4​.0 - Clinical ​Data Model Mapping

Here’s how the fields defined by FHIR for [PractitionerRole](https://www.hl7.org/fhir/practitionerrole.html) map to the fields in Salesforce​.

| Practitioner Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0​.M | The identifier information for a practitioner​Role is represented as Identifier records that reference the Healthcare​Practitioner​Facility record using their Identifier​.Parent​RecordId field​. |
| active | Healthcare​Practitioner​Facility​.IsActive | Boolean | 0​.1 | N/A |
| period | Healthcare​Practitioner​Facility​.Effective​From | Date | 0​.1 | Because Salesforce doesn’t support a native period data type, the practitioner​Role​​.period FHIR resource is flattened to a set of from and to dates​. |
| Healthcare​Practitioner​Facility​.Effective​To | Date | 0​.1 |
| practitioner | Healthcare​Practitioner​Facility​.Healthcare​Provider​Id | Lookup: Healthcare​Provider | 0​.1 | N/A |
| organization | Healthcare​Practitioner​Facility​.Account​​Id | Lookup: Account | 0​.1 | N/A |
| code | CareProvider​Facility​Specialty​.Specialty​Role | Picklist | 0​.M | While FHIR defines practitioner​Role​.code as a code set bundle, its Salesforce implementation is a picklist​.Zero-to-many values can be associated by creating multiple CareProvider​Facility​Specialty​ records that reference a Healthcare​Practitioner​Facility​ record. However, a single CareProvider​Facility​Specialty​ record can have only one combination of role and specialty. |
| specialty | CareProvider​Facility​Specialty​.Specialty​Id | Lookup: CareSpecialty | 0​.M | While FHIR defines practitioner​Role​.code as a code set bundle, its Salesforce implementation is a CareSpecialty reference​.Zero-to-many values can be associated by creating multiple CareProvider​Facility​Specialty​ records that reference a Healthcare​Practitioner​Facility​ record. However, a single CareProvider​Facility​Specialty​ record can have only one combination of role and specialty. |
| location | Healthcare​Practitioner​Facility​.Healthcare​Facility​Id | Lookup: Healthcare​Facility | 0​.1 | The Salesforce implementation supports only one practitioner​Role​.location reference for each practitioner role. |
| healthcare​Service | N/A | N/A | N/A | Not supported |
| telecom | N/A | N/A | N/A | Not supported |
| availableTime | Healthcare​Practitioner​Facility​.Operating​HoursId | Operating​Hours | 0.M | Even though only one Operating​Hours record can be referenced from a Healthcare​Practitioner​Facility record, multiple time slots can be added to that Operating​Hours record. As such, zero-to-many available time values can be added to a single Healthcare​Practitioner​Facility record through a single Operating​Hours reference. |
| not​Available | N/A | N/A | N/A | Not supported |
| availability​Exceptions | Healthcare​Practitioner​Facility​.Avialability​Exceptions | String | 0​.1 | N/A |
| endPoint | N/A | N/A | N/A | Not supported |

## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

![A diagram that shows how Carol Peterson's practice at Goodly Healthification is represented in Salesforce.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2FMappings_FHIR%2Fimages%2Fsrd_hc_practitionerrole.png&folder=health_cloud_object_reference)
