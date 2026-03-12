---
title: "WorkTypeCodeSetBundle"
domain: health-cloud-object-reference
topic: worktypecodesetbundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.274Z
estimatedTokens: 819
keywords: [WorkTypeCodeSetBundle, relationship, visit, Work, code, bundles, represent, service, appointment, API, version, 52.0, later, Calls]
---

# WorkTypeCodeSetBundle

> Represents a relationship between visit type (Work Type) and code set bundles
         that represent the service and appointment details for the visit type. This object is
      available in API version 52.0 and later.

# WorkTypeCodeSetBundle

Represents a relationship between visit type (Work Type) and code set bundles that represent the service and appointment details for the visit type. This object is available in API version 52.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppointmentTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of appointment associated with the visit type (work type) and service.This is a relationship field.Relationship NameAppointmentTypeRelationship TypeLookupRefers ToCodeSetBundle |
| FlowName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the internal flow that's invoked when the visit type (work type) is selected. |
| HasPrerequisitesCheckInFlow | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the flow associated with the work type code set bundle checks prerequisites (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the WorkTypeCodeSetBundle record. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent visit type (work type) that the code sets for service and appointment details are associated with. The value for this field is unique across your org in records. That means you can’t have multiple WorkTypeCodeSetBundle records for the same WorkType record.This is a relationship field.Relationship NameParentRelationship TypeMaster-DetailRefers ToWorkType |
| SchedulingSystem | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the scheduling system that's used to schedule an appointment.Possible values are:ExternalSalesforceThe default value is 'External'. |
| ServiceCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the category of service associated with the visit type (Work Type).This is a relationship field.Relationship NameServiceCategoryRelationship TypeLookupRefers ToCodeSetBundle |
| ServiceTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of service associated with the visit type (Work Type).This is a relationship field.Relationship NameServiceTypeRelationship TypeLookupRefers ToCodeSetBundle |
