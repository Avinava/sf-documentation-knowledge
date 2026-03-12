---
title: "cgcloud__Contract_Tactic__c"
domain: retail-api
topic: cgcloudcontracttacticc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.381Z
estimatedTokens: 1088
keywords: [cgcloud__Contract_Tactic__c, Relation, Contract, Tactic, template, API, version, 54.0, later, cgcloud, _Contract, _Tactic, Calls, Associated, Objects]
---

# cgcloud__Contract_Tactic__c

> Relation between a Contract and a Tactic template. This object
      is available in API version 54.0 and later.

# cgcloud\_\_Contract\_Tactic\_\_c

Relation between a Contract and a Tactic template. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionActive flag.The default value is true. |
| cgcloud__Contract_Tactic_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the contract tactic template.This is a relationship field.Relationship Namecgcloud__Contract_Tactic_Template__rRelationship TypeLookupRefers Tocgcloud__Contract_Template__c |
| cgcloud__Contract__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the customer contract object.This is a relationship field.Relationship Namecgcloud__Contract__rRelationship TypeMaster-detailRefers Tocgcloud__Contract__c (Master object) |
| cgcloud__Cost_Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount agreed with the customer as a compensation for fulfilling this tactic. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the contract tactic.This is a calculated field.Formula(HYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top")) |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionFirst date of validity period of the contract tactic. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionLast date of validity period of the contract tactic. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Contract\_Tactic\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Contract\_Tactic\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Contract\_Tactic\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Contract\_Tactic\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Contract\_Tactic\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Contract_Tactic__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Contract_Tactic__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Contract_Tactic__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Contract_Tactic__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Contract_Tactic__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
