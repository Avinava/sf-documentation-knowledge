---
title: "PartyCreditProfileInquiry"
domain: automotive-cloud
topic: partycreditprofileinquiry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.389Z
estimatedTokens: 768
keywords: [PartyCreditProfileInquiry, inquiries, made, external, organizations, access, borrower's, credit, report, influence, lender's, opinion, risk, profile, received]
---

# PartyCreditProfileInquiry

> Represents the details of inquiries made by external organizations to access
         a borrower's credit report. Can influence a lender's opinion of a borrower's risk profile
         based on the type of credit inquiries received. This object is available in API
      version 65.0 and later.

# PartyCreditProfileInquiry

Represents the details of inquiries made by external organizations to access a borrower's credit report. Can influence a lender's opinion of a borrower's risk profile based on the type of credit inquiries received. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InquirerName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the inquirer. |
| InquiryDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date of inquiry. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| PartyCreditProfileId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe party credit profile associated with the inquiry.This field is a relationship field.Relationship NamePartyCreditProfileRelationship TypeMaster-detailRefers ToPartyCreditProfile (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyCreditProfileInquiryChangeEvent](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PartyCreditProfileInquiryHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PartyCreditProfileInquiryOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PartyCreditProfileInquiryShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

## Related Topics

- PartyCreditProfileInquiryChangeEvent (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_associated_objects_change_event.htm)
