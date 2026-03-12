---
title: "LegalEntity"
domain: revenue-cloud
topic: legalentity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.713Z
estimatedTokens: 677
keywords: [LegalEntity, way, organization, structured, legal, entity, comprise, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# LegalEntity

> Represents the way an organization is structured. An organization can
         be a single legal entity or it can comprise more than one legal entity. This object is
      available in API version 62.0 and later.

# LegalEntity

Represents the way an organization is structured. An organization can be a single legal entity or it can comprise more than one legal entity. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need the Accounts Receivables Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| CompanyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the company that this legal entity represents. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the legal entity. |
| EmailTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA template that's used to send emails for the legal entity. This field is available in API version 65.0 and later.This field is a relationship field.Relationship NameEmailTemplateRefers ToEmailTemplate |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a legal entity indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a legal entity. If this value is null, it’s possible that the user only accessed the legal entity or a related list view (LastReferencedDate), but not viewed the legal entity itself. |
| LegalEntityAddress | TypeaddressPropertiesFilter, NillableDescriptionThe address of the company that this legal entity represents. See Address Compound Fields for details on compound address fields. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the legal entity. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ShouldAttachInvoiceDocToEmail | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to attach the invoice PDF document to the email that's sent for the legal entity (true) or not (false). This field is available in API version 65.0 and later.The default value is false. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the legal entity.Valid values are:ActiveInactive |
