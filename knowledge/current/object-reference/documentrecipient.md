---
title: "DocumentRecipient"
domain: object-reference
topic: documentrecipient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.221Z
estimatedTokens: 1181
keywords: [DocumentRecipient, Connects, Service, Report, Digital, API, version, 55.0, later, Calls, Associated, Objects]
---

# DocumentRecipient

> Connects a Service Report to a Digital Signature. This object is
      available in API version 55.0 and later.

# DocumentRecipient

Connects a Service Report to a Digital Signature. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DigitalSignatureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDigital Signature to be used on the Service Report.This field is a relationship field.Relationship NameDigitalSignatureRelationship TypeLookupRefers ToDigitalSignature |
| DigitalSignatureUrl | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionLink to request signature from Experience Cloud site. |
| DocumentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe document sent to the recipient.This field is a polymorphic relationship field.Relationship NameDocumentRelationship TypeLookupRefers ToServiceReport |
| DocumentRecipient | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionNumber automatically assigned to a new record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| QuoteDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote document sent to the recipient.This field is a relationship field.Relationship NameQuoteDocumentRefers ToQuoteDocument |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe recipient to sign the document.This field is a polymorphic relationship field.Relationship NameRecipientRelationship TypeLookupRefers ToContact, User |
| SignatureIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier that associates DocumentRecipient with a signature Lightning web component (LWC) on the report page layout, telling you where on the report the signature goes. |
| SignatureStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the signature. The default value is Completed. Possible values are:CompletedSkipped |
| SignatureStatusReason | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn explanation for the signature status. For example, a reason why the signature was skipped. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the document recipient record.Possible values are:CompletedDeclinedDeliveredNoneSentThe default value is None. |
| StatusReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe final status reason. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DocumentRecipientFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DocumentRecipientOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DocumentRecipientShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DocumentRecipientFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- DocumentRecipientOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DocumentRecipientShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
