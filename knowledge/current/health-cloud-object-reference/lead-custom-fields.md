---
title: "Lead Custom Fields"
domain: health-cloud-object-reference
topic: lead-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:42.561Z
estimatedTokens: 163
keywords: [Lead, extend, standard, Emergency, Management]
---

> Custom fields extend the standard Lead object for use in Emergency Response
      Management.

# Lead Custom Fields

Custom fields extend the standard Lead object for use in Emergency Response Management.

## Fields

| Field | Details |
| --- | --- |
| AppointmentDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate of the appointment. |
| AppointmentId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier of the appointment. |
| StatusGroup__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCategorizes a person’s stage within the testing and monitoring process. Possible values are:MonitoredPositiveReady for intakeUnknownUnmonitored |
