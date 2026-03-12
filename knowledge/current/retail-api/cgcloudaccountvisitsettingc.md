---
title: "cgcloud__Account_Visit_Setting__c"
domain: retail-api
topic: cgcloudaccountvisitsettingc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.123Z
estimatedTokens: 1615
keywords: [cgcloud__Account_Visit_Setting__c, stores, settings, calls, user, customer, API, version, 54.0, later, cgcloud, _Account, _Visit, _Setting, Associated]
---

# cgcloud__Account_Visit_Setting__c

> This object stores the settings for the calls of a user based on a
         customer. This object is available in API version 54.0 and later.

# cgcloud\_\_Account\_Visit\_Setting\_\_c

This object stores the settings for the calls of a user based on a customer. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the customer.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the entry is active (true) or not (false).The default value is true. |
| cgcloud__Day_Of_Week__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains the day of the week that's to be used by the automatic planning algorithm to schedule the call.Possible values are:fri—Fridaymon—Mondaysat—Saturdaysun—Sundaythu—Thursdaytue—Tuesdaywed—Wednesday |
| cgcloud__Duration__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumeric value that's used to describe the length that a call of the specified category typically takes with the related account. |
| cgcloud__Frequency__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionNumber of weeks between two visits. |
| cgcloud__Initial_Year__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionInitial year of the planning.Possible values are:2015201620172018The default value is 2015. |
| cgcloud__Management_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the management relationship between a user and an account.Possible values are:CallCenterConsultantSalesService |
| cgcloud__Overdue_Check__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a customer with a particular visit template can be marked as overdue (true) or not (false).The default value is false. |
| cgcloud__Overdue_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date on which the call for a particular visit template is completed. Until this date, the customer is referred to as an overdue customer. |
| cgcloud__Planning_Mode__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionMode of automatic call planning.Possible values are:LastCall—Last Call & FrequencyStartWeek—Start WeekStartWeekYear—Start Week YearThe default value is StartWeek. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the Customer Visit Setting record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Start_Week__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionWeek of the year to start with automatic call planning. |
| cgcloud__Time_Of_Day__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionStores the time of day that the automatic planning algorithm uses to schedule the call. |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDate from which the entry is valid. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDate until which the entry is valid. |
| cgcloud__Visit_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the visit template.This is a relationship field.Relationship Namecgcloud__Visit_Template__rRelationship TypeLookupRefers Tocgcloud__Visit_Template__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Account\_Visit\_Setting\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Account\_Visit\_Setting\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Account\_Visit\_Setting\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Account\_Visit\_Setting\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Account\_Visit\_Setting\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Account_Visit_Setting__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Account_Visit_Setting__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Account_Visit_Setting__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Account_Visit_Setting__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Account_Visit_Setting__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
