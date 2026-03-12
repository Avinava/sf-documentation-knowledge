---
title: "CommSubConsentCmplSnpsht"
domain: life-sciences-dev-guide
topic: commsubconsentcmplsnpsht
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.607Z
estimatedTokens: 1128
keywords: [CommSubConsentCmplSnpsht, snapshot, compliance, that’s, captured, time, consent, communication, subscription, API, version, 65.0, later, Calls, Associated]
---

# CommSubConsentCmplSnpsht

> Represents the snapshot of compliance information that’s captured at
         the time of consent of the communication subscription. This object is available in API
         version 65.0 and later.

# CommSubConsentCmplSnpsht

Represents the snapshot of compliance information that’s captured at the time of consent of the communication subscription. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountRestrictedProdtList | TypetextareaPropertiesCreate, NillableDescriptionThe list of restricted products associated with the consent giver at the time of consent. |
| AccountTerrRstrcProdtList | TypetextareaPropertiesCreate, NillableDescriptionThe list of territory restricted products associated with the consent giver at the time of consent. |
| ConsentGiverId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the person who gave consent to the communication subscription.This field is a polymorphic relationship field.Relationship NameConsentGiverRefers ToAccount, Contact, Individual, User |
| DisclaimerText | TypetextareaPropertiesCreate, NillableDescriptionThe disclaimer information agreed upon by the consent giver. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReceiptRequestStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the request raised by the consent giver requesting for the receipt with the consent and compliance information.Possible values are:NotRequestedReceiptSentRequestedThe default value is NotRequested. |
| SourceRequestRecordId | Reserved for future use. |
| TermsAndConditionsText | TypetextareaPropertiesCreate, NillableDescriptionThe terms and conditions information agreed upon by the consent giver. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CommSubConsentCmplSnpshtChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CommSubConsentCmplSnpshtFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CommSubConsentCmplSnpshtHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CommSubConsentCmplSnpshtShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CommSubConsentCmplSnpshtChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- CommSubConsentCmplSnpshtFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- CommSubConsentCmplSnpshtHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- CommSubConsentCmplSnpshtShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
