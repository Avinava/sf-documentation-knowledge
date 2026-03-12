---
title: "CarePractnFacilityAppt"
domain: health-cloud-object-reference
topic: carepractnfacilityappt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.839Z
estimatedTokens: 512
keywords: [CarePractnFacilityAppt, junction, HealthcarePractitionerFacility, practitioner, facility, ServiceAppointment, appointment, API, version, 52.0, later, Calls]
---

# CarePractnFacilityAppt

> Represents a junction object between a HealthcarePractitionerFacility
         (practitioner at a facility) and a ServiceAppointment (appointment). This object is
      available in API version 52.0 and later.

# CarePractnFacilityAppt

Represents a junction object between a HealthcarePractitionerFacility (practitioner at a facility) and a ServiceAppointment (appointment). This object is available in API version 52.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| HealthcarePractitionerFacilityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The healthcare practitioner facility scheduled for this appointment.This field is a relationship field.Relationship NameHealthcarePractitionerFacilityRelationship TypeMaster-DetailRefers ToHealthcarePractitionerFacility |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the provider is required at the appointment (true) or not (false).This field is available in API version 62.0 or later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The provider associated with the service appointment. |
| ServiceAppointmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The appointment associated with this record.This field is a relationship field.Relationship NameServiceAppointmentRelationship TypeLookupRefers ToServiceAppointment |
