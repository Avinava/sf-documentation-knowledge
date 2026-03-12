---
title: "DigitalPass"
domain: loyalty
topic: digitalpass
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.907Z
estimatedTokens: 1507
keywords: [DigitalPass, user-facing, representation, generated, digital, pass, template, specific, relevant, data, membership, number, voucher, making, unique]
---

# DigitalPass

> Represents a user-facing representation generated from a digital pass
         template. It contains specific, relevant data, such as a membership number or voucher
         details, making each pass unique to the user. This pass can be optionally stored in a
         mobile or digital wallet. This object is available in API version 66.0 and later.

# DigitalPass

Represents a user-facing representation generated from a digital pass template. It contains specific, relevant data, such as a membership number or voucher details, making each pass unique to the user. This pass can be optionally stored in a mobile or digital wallet. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account ID associated with the digital pass.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact ID associated with the digital pass.This field is a relationship field.Relationship NameContactRefers ToContact |
| DigitalPassTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the digital pass template.This field is a relationship field.Relationship NameDigitalPassTemplateRefers ToDigitalPassTemplate |
| ExpiryDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the digital pass expires. |
| ExternalUniqueIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique identifier of the digital pass at the service provider's end. |
| InputPayload | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe specific data or parameters provided to issue a digital pass, such as a loyalty program member ID. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastSyncDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latest date when the digital pass was synchronized. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the loyalty program member associated with the digital pass.This field is a relationship field.Relationship NameLoyaltyProgramMemberRefers ToLoyaltyProgramMember |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the digital pass. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The entity or individual to whom the digital pass is issued. It can be an account, or contact or a loyalty program member.This field is a polymorphic relationship field.Relationship NamePartyRefers ToAccount, Contact, LoyaltyProgramMember |
| SourceRecordReferenceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The activity or a transaction associated with the digital pass. A digital pass can be associated to a voucher, event or loyalty program enrollment.This field is a polymorphic relationship field.Relationship NameSourceRecordReferenceRefers ToLoyaltyProgramMember, Voucher |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the current state of the digital pass in the lifecycle of issuance and usagePossible values are:ActiveExpiredInactiveSyncError |
| SyncErrorMessage | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe message displayed when there is an error in synchronization. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DigitalPassChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DigitalPassHistory](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DigitalPassOwnerSharingRule](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DigitalPassShare](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DigitalPassChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
- DigitalPassHistory (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_history.htm)
- DigitalPassOwnerSharingRule (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_ownersharingrule.htm)
- DigitalPassShare (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_share.htm)
