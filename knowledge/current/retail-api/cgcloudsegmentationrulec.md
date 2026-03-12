---
title: "cgcloud__Segmentation_Rule__c"
domain: retail-api
topic: cgcloudsegmentationrulec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.910Z
estimatedTokens: 1652
keywords: [cgcloud__Segmentation_Rule__c, stores, segmentation, rule, API, version, 54.0, later, cgcloud, _Segmentation, _Rule, Calls, Associated, Objects]
---

# cgcloud__Segmentation_Rule__c

> This object stores the details of the segmentation rule. This
      object is available in API version 54.0 and later.

# cgcloud\_\_Segmentation\_Rule\_\_c

This object stores the details of the segmentation rule. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Hierarchy_Node__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the field that shows the account lookup to select the hierarchy node and then apply filters on the customer hierarchy.This is a relationship field.Relationship Namecgcloud__Hierarchy_Node__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Input_Variables_JSON__c | TypetextareaPropertiesCreate, Nillable, UpdateDescription.json files that contains the user input. |
| cgcloud__Org_Unit_Hierarchy_Node__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the field that shows the account lookup to select the hierarchy node and then apply filters on the customer hierarchy.This is a relationship field.Relationship Namecgcloud__Org_Unit_Hierarchy_Node__rRelationship TypeLookupRefers Tocgcloud__Org_Unit__c |
| cgcloud__Result_Level__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the level from which to retrieve customers.Possible values are:StoreTrade OrgThe default value is Trade Org. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales organization to which the segmentation rule belongs.Possible values are:0000000100020003 |
| cgcloud__Segmentation_Rule_Def__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Segmentation Rule Definition.This is a relationship field.Relationship Namecgcloud__Segmentation_Rule_Def__rRelationship TypeLookupRefers Tocgcloud__Segmentation_Rule_Def__c |
| cgcloud__Segmentation_Rule_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Segmentation Rule Template.This is a relationship field.Relationship Namecgcloud__Segmentation_Rule_Template__rRelationship TypeLookupRefers Tocgcloud__Segmentation_Rule_Template__c |

## Associated Objects

This object has these following associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Segmentation\_Rule\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Segmentation\_Rule\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Segmentation\_Rule\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Segmentation\_Rule\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Segmentation\_Rule\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),
cgcloud__Description_Language_1__c)
```

## Related Topics

- cgcloud__Segmentation_Rule__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Segmentation_Rule__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Segmentation_Rule__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Segmentation_Rule__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Segmentation_Rule__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
