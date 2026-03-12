---
title: "DigitalPassTemplate"
domain: loyalty
topic: digitalpasstemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.918Z
estimatedTokens: 1137
keywords: [DigitalPassTemplate, template, creating, digital, passes, loyalty, membership, cards, coupons, outlines, pass's, design, data, functionality, enabling]
---

# DigitalPassTemplate

> Represents a template for creating digital passes, such as loyalty membership
         cards or coupons. It outlines the pass's design, data fields, and functionality, enabling
         the generation of multiple unique passes from a single, reusable template. This object
      is available in API version 66.0 and later.

# DigitalPassTemplate

Represents a template for creating digital passes, such as loyalty membership cards or coupons. It outlines the pass's design, data fields, and functionality, enabling the generation of multiple unique passes from a single, reusable template. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the digital pass template. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the digital pass template. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ServiceProvider | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The organization that develops the digital pass.Possible values are:Google |
| ServicePrvdTmplIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the external template used by the digital pass. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the digital pass template.Possible values are:ActivationInProgressActiveDraftInactiveThe default value is Draft. |
| StatusReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the current status of the digital pass template. Displays the detailed error message from the system in case of digital wallet activation failure. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the type of the digital pass template.Possible values are:GiftCardLoyalty |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DigitalPassTemplateChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DigitalPassTemplateHistory](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DigitalPassTemplateOwnerSharingRule](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DigitalPassTemplateShare](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DigitalPassTemplateChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
- DigitalPassTemplateHistory (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_history.htm)
- DigitalPassTemplateOwnerSharingRule (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_ownersharingrule.htm)
- DigitalPassTemplateShare (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_share.htm)
