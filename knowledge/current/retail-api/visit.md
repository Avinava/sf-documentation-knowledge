---
title: "Visit"
domain: retail-api
topic: visit
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:40.988Z
estimatedTokens: 2996
keywords: [Visit, Track, rep’s, retail, store, they, perform, activities, API, version, 47.0, later, Calls, Associated, Objects]
---

# Visit

> Track information related to a field rep’s visit to a retail store where they
      perform retail activities. This object is available in API version 47.0 and later.

# Visit

Track information related to a field rep’s visit to a retail store where they perform retail activities. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that is associated with a visit. This field is available in API versions 48.0 and later. |
| ActualVisitEndTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time when the visit ended. |
| ActualVisitStartTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time when the visit started. |
| AddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe address of the retail store where the visit must be conducted. This field is available in API versions 52.0 and later. Not applicable for the enhanced model of Consumer Goods cloud.This is a relationship field.Relationship NameAddressRelationship TypeLookupRefers ToAddress |
| cgcloud__Account_City__c | TypestringPropertiesFilter, Nillable, SortDescriptionCity of the related account. This is a calculated field. |
| cgcloud__Account_Street__c | TypestringPropertiesFilter, Nillable, SortDescriptionStreet name of the related account. |
| cgcloud__Accountable__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe accountable user for this visit. System sets the initiator of the visit as the initial accountable user. |
| cgcloud__Completed_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the visit was completed. |
| cgcloud__Creation_Date_and_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the visit was created. |
| cgcloud__Creation_Mode__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the way the visit was created. Possible values are manually or automatic. The default value is manually. |
| cgcloud__Date_mock__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHelp/Mock field to visualize calendar in visual force page. Value of this field won't be saved in the database. |
| cgcloud__Distribution_Rate_All__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDistribution rate of all products. The system calculates and stores the 'Distribution Rate of All Products' (DRallP) as percentage value. |
| cgcloud__Distribution_Issue__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis is a KPI Field calculated based on the distribution rate of all products. The system caluclates and stores the 'Distribution Issues' (DI) as boolean value. |
| cgcloud__Duration_Effective__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEffective visit duration captured via time tracking. Only implemented in mobile, will remain empty if visit is completed on desktop. |
| cgcloud__Duration_In_Minutes__c | TypedoublePropertiesFilter, Nillable, SortDescriptionPlanned duration of the visit (difference between planned start and end data). This is a calculated field. |
| cgcloud__End_Date__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionPlanned end date of the visit. |
| cgcloud__Fixed_Visit_Date__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies that this visit was scheduled with the customer at a fixed date and time. Attribute can be used to implement a logic which will not allow to move the visit to a different date or time. Possible values are 0 (No) and 1 (Yes). The default value is 0. |
| cgcloud__Geolocation__c | TypelocationPropertiesNillableDescriptionUser’s geo coordinates (Latitude and Longitude) captured using their mobile device during the visit completion or cancellation. |
| cgcloud__IsAllDayEvent__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionVisit is planned for the entire day. Weekly calendar visualizes such visits in the header of the day. The default value is false. |
| cgcloud__Is_Vst_Cmpl_Osid_Range__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the visit completed outside the allowed distance between the GPS location and the store’s geolocation.The default value is false. |
| cgcloud__Is_Vst_Start_Osid_Range__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the visit started outside the allowed distance between the GPS location and the store’s geolocation.The default value is false. |
| cgcloud__Note__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionVisit notes which can be captured to prepare the visit or during execution time. |
| cgcloud__Reason_Code__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason for visit cancellation.Possible values are:Unserviced—End of day reachedNoManager—Manager unavailableStoreClosed—Store ClosedTimeWindow—Time window missed |
| cgcloud__Responsible__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionResponsible user for this visit. |
| cgcloud__Start_Date__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionPlanned start date of the visit. |
| cgcloud__Start_Geolocation__c | TypeGeolocationPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustomer’s location coordinates (latitude and longitude) at the start of a visit. |
| cgcloud__Subject__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSubject of the visit. |
| cgcloud__Subject_Formula__c | TypestringPropertiesFilter, Nillable, SortDescriptionThis field is required when subject needs to be displayed in a formula format. This is a calculated field. |
| cgcloud__Visit_Planned_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPlanned date for the visit. |
| cgcloud__Visit_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTemplate of the visit. This field is a relationship field. |
| ContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe person to contact at the retail store during a visit. This field is available in API versions 52.0 and later. Not applicable for the enhanced model of Consumer Goods cloud.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| ContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe purpose of a visit, such as claim, business license application, or work type. This field is available in API versions 48.0 and later. Not applicable for the enhanced model of Consumer Goods cloud. |
| CreatedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser who created the visit. |
| CreatedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the visit was created. |
| InstructionDescription | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecial instructions provided by a sales manager or an admin that a sales rep refers to during a visit. Not applicable for the enhanced model of Consumer Goods cloud. |
| LastModifiedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser who last modified the visit. |
| LastModifiedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate and time of the last modification for this visit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LocationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe location of the retail store where visit must be conducted. This field is available in API versions 52.0 and later.This is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the visit record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the visit record owner. |
| PlaceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the place that sales reps visit. |
| PlannedVisitEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit is expected to end. |
| PlannedVisitStartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the visit is expected to start. |
| RetailStoreId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe retail store where the visit is conducted. This field is available in API versions 52.0 and later. Used in CG Cloud base model to assign a retail store. Not applicable for the enhanced model of Consumer Goods cloud.This is a relationship field.Relationship NameRetailStoreRelationship TypeLookupRefers ToRetailStore |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe status of the visit. Sales reps’ can’t edit this field.Possible values are:AbandonedCompletedInProgressPlannedUnscheduledNoneErrorThe default value is Planned.NoteThis is a static picklist. The values of the picklist aren’t displayed in the Object Manager. |
| StatusRemarks | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe reasons for abandoning or completing the visit as provided by the sales rep. Not applicable for the enhanced model of Consumer Goods cloud. |
| VisitPriority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the visit.Possible values are:HighLowMediumNot applicable for the enhanced model of Consumer Goods cloud. |
| VisitorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the sales representative visiting the store. Not applicable for the enhanced model of Consumer Goods cloud. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VisitShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[VisitFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[VisitHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[VisitOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

Sharing rule is available for the object.

## Related Topics

- VisitShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
- VisitFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- VisitHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- VisitOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
