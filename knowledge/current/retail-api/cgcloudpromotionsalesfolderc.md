---
title: "cgcloud__Promotion_Sales_Folder__c"
domain: retail-api
topic: cgcloudpromotionsalesfolderc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.658Z
estimatedTokens: 1455
keywords: [cgcloud__Promotion_Sales_Folder__c, Junction, Promotion, Sales, folder, API, version, 54.0, later, cgcloud, _Promotion, _Sales, _Folder, Calls, Associated]
---

# cgcloud__Promotion_Sales_Folder__c

> Junction object between Promotion and Sales folder. This object
      is available in API version 54.0 and later.

# cgcloud\_\_Promotion\_Sales\_Folder\_\_c

Junction object between Promotion and Sales folder. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Promotion_Anchor__c | TypestringPropertiesFilter, Nillable, SortDescriptionDisplays the anchor that's used in the promotion.This is a calculated field.FormulaIF(ISPICKVAL(cgcloud__Promotion__r.cgcloud__Promotion_Template__r.cgcloud__Anchor_Type__c,'Customer'),cgcloud__Promotion__r .cgcloud__Anchor_Account__r.Name,IF(ISPICKVAL(cgcloud__Promotion__r.cgcloud__Promotion_Template__r.cgcloud__Anchor_Type__c, 'CustomerSet'), cgcloud__Promotion__r.cgcloud__Anchor_Account_Set__r.cgcloud__Description__c, '')) |
| cgcloud__Promotion_Date_From__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionReferences to the promotion from date.This is a calculated field.Formulacgcloud__Promotion__r.cgcloud__Date_From__c |
| cgcloud__Promotion_Date_Thru__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionReferences to the promotion thru date.This is a calculated field.Formulacgcloud__Promotion__r.cgcloud__Date_Thru__c |
| cgcloud__Promotion_Phase__c | TypestringPropertiesFilter, Nillable, SortDescriptionReferences to the promotion phase.This is a calculated field.FormulaTEXT(cgcloud__Promotion__r.cgcloud__Phase__c) |
| cgcloud__Promotion_Slogan__c | TypestringPropertiesFilter, Nillable, SortDescriptionReferences to the promotion slogan.This is a calculated field.FormulaHYPERLINK('/' & cgcloud__Promotion__c, cgcloud__Promotion__r.cgcloud__Slogan__c, '_top') |
| cgcloud__Promotion_Template__c | TypestringPropertiesFilter, Nillable, SortDescriptionReferences to the promotion template.This is a calculated field.FormulaHYPERLINK('/' & cgcloud__Promotion__r.cgcloud__Promotion_Template__c, cgcloud__Promotion__r.cgcloud__Promotion_Template__r.Name, '_top') |
| cgcloud__Promotion__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the promotion.This is a relationship field.Relationship Namecgcloud__Promotion__rRelationship TypeMaster-detailRefers Tocgcloud__Promotion__c (the master object) |
| cgcloud__Sales_Folder_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionReferences to the sales folder description.This is a calculated field.Formulacgcloud__Sales_Folder__r.cgcloud__Description__c |
| cgcloud__Sales_Folder_Valid_From__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionReferences to the sales folder valid from date.This is a calculated field.Formulacgcloud__Sales_Folder__r.cgcloud__Valid_From__c |
| cgcloud__Sales_Folder_Valid_Thru__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionReferences to the sales folder valid thru date.This is a calculated field.Formulacgcloud__Sales_Folder__r.cgcloud__Valid_Thru__c |
| cgcloud__Sales_Folder__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the sales folder.This is a relationship field.Relationship Namecgcloud__Sales_Folder__rRelationship TypeMaster-detailRefers Tocgcloud__Sales_Folder__c (the detail object) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Promotion\_Sales\_Folder\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_Sales\_Folder\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_Sales\_Folder\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Promotion\_Sales\_Folder\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_Sales\_Folder\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Promotion_Sales_Folder__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion_Sales_Folder__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion_Sales_Folder__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion_Sales_Folder__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion_Sales_Folder__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
