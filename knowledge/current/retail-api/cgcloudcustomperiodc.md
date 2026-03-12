---
title: "cgcloud__Custom_Period__c"
domain: retail-api
topic: cgcloudcustomperiodc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.554Z
estimatedTokens: 1283
keywords: [cgcloud__Custom_Period__c, stores, attributes, custom, period, API, version, 54.0, later, cgcloud, _Custom, _Period, Calls, Associated, Objects]
---

# cgcloud__Custom_Period__c

> This object stores the attributes of the custom period. This
      object is available in API version 54.0 and later.

# cgcloud\_\_Custom\_Period\_\_c

This object stores the attributes of the custom period. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Business_Year__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBusiness year of the period. |
| cgcloud__Custom_Calendar__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionCustom calendar to which the period belongs.This is a relationship field.Relationship Namecgcloud__Custom_Calendar__rRelationship TypeMaster-detailRefers Tocgcloud__Custom_Calendar__c (Master object) |
| cgcloud__Date_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart date of the period. |
| cgcloud__Date_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date of the period. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c,"Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),cgcloud__Description_Language_1__c) |
| cgcloud__ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionStores the unique case-sensitive external ID. |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescribes the sales organization to which the custom period belongs.This is a calculated field.FormulaTEXT(cgcloud__Custom_Calendar__r.cgcloud__Sales_Org__c) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Custom\_Period\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Custom\_Period\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Custom\_Period\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Custom\_Period\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Custom\_Period\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Custom_Period__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Custom_Period__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Custom_Period__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Custom_Period__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Custom_Period__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
