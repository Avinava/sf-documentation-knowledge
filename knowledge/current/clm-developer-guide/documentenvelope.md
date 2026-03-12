---
title: "DocumentEnvelope"
domain: clm-developer-guide
topic: documentenvelope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.763Z
estimatedTokens: 992
keywords: [DocumentEnvelope, container, document, routed, signatures, API, version, 56.0, later, Calls, Associated, Objects]
---

# DocumentEnvelope

> The container for a document that is routed for signatures. This object is available in API version 56.0 and later.

# DocumentEnvelope

The container for a document that is routed for signatures. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContractDocumentVersionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Contract for the Contract Document Version to which this Document Envelope belongs.This is a relationship field.Relationship NameContractDocumentVersionRelationship TypeLookupRefers ToContractDocumentVersion |
| DeliveredDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp at which the document was most recently viewed by all recipients. |
| EnvelopeIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of this Document Envelope. |
| EnvelopeMessageContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe body of the email sent to the recipient. |
| EnvelopeSubject | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe subject of the email sent to the recipient. |
| EnvelopeUri | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URI of this Document Envelope. |
| FinalStatusDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time-stamp at which this Document Envelope was completed. |
| FinalStatusReason | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe final status reason of this Document Envelope. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this Document Envelope. |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the object associated with this Document Envelope.This is a polymorphic relationship field.Relationship NameReferenceObjectRelationship TypeLookup |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of this Document Envelope.Possible values are:SentDeliveredDeclinedVoidedCompleted |
| StatusChangeDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most recent timestamp at which the Status of this Document Envelope was updated. |
| Vendor | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe name of the online signature vendor. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DocumentEnvelopeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[DocumentEnvelopeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[DocumentEnvelopeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[DocumentEnvelopeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[DocumentEnvelopeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
