---
title: "DigitalSignature"
domain: object-reference
topic: digitalsignature
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.156Z
estimatedTokens: 1061
keywords: [DigitalSignature, captured, service, report, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# DigitalSignature

> Represents a signature captured on a service report in field
			service.

# DigitalSignature

Represents a signature captured on a service report in field service.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| DigitalSignatureNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the signature. |
| DocumentBody | Typebase64PropertiesCreateDescriptionThe captured signature image. |
| DocumentContentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe data type of the captured signature. Possible values are:audio/accaudio/amraudio/oggvideo/3gpp2video/3gppimage/aviftext/calendaraudio/x-cafimage/webp |
| DocumentLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe length of the captured signature. |
| DocumentName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe name of the captured signature image. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the service appointment, work order, or work order line item that the service report is generated for.This is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToAuthorizationFormConsent, Order, ServiceAppointment, WorkOrder, WorkOrderLineItem |
| Place | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe place where the report was signed. |
| SignatureType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionThe role of the person signing the service report. Your org comes with one signature type, Default. A service report template can only contain one signature per type. If you plan to collect multiple signatures on service reports, create additional values for the Signature Type field.Create at least one value for every role that might need to sign a service report. For example, Technician, Customer, Supervisor, or Supplier. If some service reports will be signed by multiple people in one role—for example, all technicians present at an appointment—create numbered types: Technician 1, Technician 2, and so forth.NoteYou can create up to 1,000 signature types. You can’t delete signature types, but you can deactivate them so they can’t be used in service report templates. When you deactivate a type, it still appears on service report templates that used it, but you can’t use it on new service report templates. |
| SignedBy | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe name of the person signing. |
| SignedDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time of the signing. |

## Usage

Add signature blocks to service report templates to determine which signatures need to be gathered on reports that use the template. Service report templates can contain up to 20 signatures, and each signature must use a different Signature Type. For example, create a standard service report template that contains a customer signature and a technician signature.

To learn more about digital signatures, see [Guidelines for Using Signatures on Service Reports](https://help.salesforce.com/articleView?id=fs_signature_guidelines.htm&language=en_US).

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[DigitalSignatureChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (Available in API version 57.0)

Change events are available for the object.

## Related Topics

- DigitalSignatureChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
