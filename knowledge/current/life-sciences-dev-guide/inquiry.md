---
title: "Inquiry"
domain: life-sciences-dev-guide
topic: inquiry
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:46.135Z
estimatedTokens: 1286
keywords: [Inquiry, logged, sales, representative, user, API, version, 65.0, later, Calls, Associated, Objects]
---

# Inquiry

> Represents the details of an inquiry logged by a sales representative
         or other user. This object is available in API version 65.0 and later.

# Inquiry

Represents the details of an inquiry logged by a sales representative or other user. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the case associated with the inquiry. Inquiry is an extension of the case. This is a unique field.This field is a relationship field.Relationship NameCaseRelationship TypeMaster-detailRefers ToCase (the master object) |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe special handling instructions for Inquiry. |
| DisclaimerText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe disclaimer that was presented to the user for the Inquiry. |
| InquiryChannelType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the channel through which the inquiry was made.Possible values are:EmailFaxCall CenterField RequestWeb |
| IsSignatureCopyRequested | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the signature copy is requested (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe Timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the inquiry. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe priority type of the inquiry.Possible values are:YesNo |
| ResponseContactPointRecId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact method through which the account receives the information.This field is a polymorphic relationship field.Relationship NameResponseContactPointRecRefers ToContactPointAddress, ContactPointEmail, ContactPointPhone |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |
| SubmittedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the inquiry was submitted. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe territory or organizational region associated with the inquiry.This field is a relationship field.Relationship NameTerritory2Refers ToTerritory2 |
| TerritoryName | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the name of the related territory when the territory is deleted. This field is only used for reporting purposes. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type or category of the inquiry.Possible values are:EfficacySafetyOthers |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InquiryChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InquiryFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InquiryHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InquiryChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- InquiryFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- InquiryHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
