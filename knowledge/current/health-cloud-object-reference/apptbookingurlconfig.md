---
title: "ApptBookingUrlConfig"
domain: health-cloud-object-reference
topic: apptbookingurlconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.324Z
estimatedTokens: 787
keywords: [ApptBookingUrlConfig, collection, URL, paths, appointment, scheduling, endpoints, API, version, 52.0, later, SOAP, Calls, REST]
---

# ApptBookingUrlConfig

> Represents a collection of fields used to set up the URL paths for
         appointment scheduling endpoints. This object is available in API version 52.0 and
      later.

# ApptBookingUrlConfig

Represents a collection of fields used to set up the URL paths for appointment scheduling endpoints. This object is available in API version 52.0 and later.

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
| AdditionalHeaders | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSpecify headers added to the HTTP request. The format is: key:value;key:value;key:value; |
| ApptBookingConfigId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe appointment scheduling config associated with the record.This field is a relationship field.Relationship NameApptBookingConfigRelationship TypeLookupRefers ToApptBookingConfig |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow as a DeveloperName is generated for each record. |
| EndpointName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the name of the endpoint to be called.Possible values are:CANCEL_APPOINTMENT—Cancel AppointmentCREATE_APPOINTMENT—Create AppointmentCREATE_PATIENT—Create PatientFIND_SLOTS—Find SlotsGET_APPOINTMENT—Get AppointmentGET_SLOT_STATUS—Get Slot Status |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the Appointment Booking URL Configuration.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe UI label of Appointment Booking URL Configuration. |
| UrlPath | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL path for the endpoint. |
