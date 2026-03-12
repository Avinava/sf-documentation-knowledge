---
title: "ApptBookingConfig"
domain: health-cloud-object-reference
topic: apptbookingconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.315Z
estimatedTokens: 1159
keywords: [ApptBookingConfig, collection, appointment, scheduling, API, version, 52.0, later, SOAP, Calls, REST]
---

# ApptBookingConfig

> Represents a collection of fields to set up appointment scheduling. This
      object is available in API version 52.0 and later.

# ApptBookingConfig

Represents a collection of fields to set up appointment scheduling. This object is available in API version 52.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Apex class that's used when scheduling an appointment using an external scheduling system. If not specified, the default Health Cloud-supplied Apex class is used.Relationship NameApexClassRelationship TypeLookupRefers ToApexClass |
| AssignedProviderRole | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRole used in an Account Contact Relation record to associate a patient (Person Account) with their assigned provider (Contact). |
| AttendanceThresholdPct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPercentage of attended appointments above which a time slot is highlighted in the scheduling console. |
| BestTimeSlotsDefinition | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the attendance prediction taken from Einstein Discovery. |
| CanCreateDuplicateRecord | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, Health Cloud creates a new record when two or more existing records contain duplicate data. If false, Health Cloud stops processing and creates a case you can review to reconcile the duplicates. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow as a DeveloperName is generated for each record. |
| GetSlotStatusTimeout | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of milliseconds before a request to retrieve time slot statuses from a scheduling system times out. Valid values are from 0 through 60000.This field is available in API version 62.0 and later. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a configuration is active.The default value is false. |
| IsSingleSourceSystem | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the configuration is associated with a single source system.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the appointment booking configuration.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe UI label of Appointment Booking Configuration |
| NamedCredentialId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fully-qualified named credential used by the Apex class to connect to an external scheduling system.This field is a relationship field.Relationship NameNamedCredentialRelationship TypeLookupRefers ToNamedCredential |
| ServiceApptRecordTypeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record type of the service appointment used for appointment scheduling. |
