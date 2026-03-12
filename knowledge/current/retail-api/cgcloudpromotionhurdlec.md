---
title: "cgcloud__Promotion_Hurdle__c"
domain: retail-api
topic: cgcloudpromotionhurdlec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.586Z
estimatedTokens: 1686
keywords: [cgcloud__Promotion_Hurdle__c, stores, restriction, satisfied, apply, rewards, API, version, 54.0, later, cgcloud, _Promotion, _Hurdle, Calls, Associated]
---

# cgcloud__Promotion_Hurdle__c

> This object stores the restriction that must be satisfied to apply
         the rewards. This object is available in API version 54.0 and later.

# cgcloud\_\_Promotion\_Hurdle\_\_c

This object stores the restriction that must be satisfied to apply the rewards. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Boolean_Value__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue to compare against an output parameter.Possible values are:falsetrue |
| cgcloud__Classification__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionClassification of products.Possible values are:C1C2C3C4C5 |
| cgcloud__Date_Value__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue to compare against an output parameter. |
| cgcloud__Numeric_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue to compare against an output parameter. |
| cgcloud__Operation__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines how hurdles are combined based on the sequence.Possible values are:ANDORThe default value is AND. |
| cgcloud__Operator__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOperator that's to be applied to the value returned from the user exit underlying the Expression.Possible values are:PEReq—=ge—>=gt—>le—<=lt—<ne—<> |
| cgcloud__Promotion_Hurdle_Expression__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionMaster-Detail to the Expression that defines the Hurdle.This is a relationship field.Relationship Namecgcloud__Promotion_Hurdle_Expression__rRelationship TypeMaster-detailRefers Tocgcloud__Promotion_Hurdle_Expression__c (Detail object) |
| cgcloud__Promotion_Reward_Group__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionMaster-Detail to the Reward Group to which the hurdle applies.This is a relationship field.Relationship Namecgcloud__Promotion_Reward_Group__rRelationship TypeMaster-detailRefers Tocgcloud__Promotion_Reward_Group__c (Master object) |
| cgcloud__Sort_Unique__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the uniqueness of the sort value. |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSort order of the displayable Hurdle records. |
| cgcloud__Text_Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue to compare against an output parameter. |
| cgcloud__Title_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the title of language 1. |
| cgcloud__Title_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the title of language 2. |
| cgcloud__Title_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the title of language 3. |
| cgcloud__Title_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the title of language 4. |
| cgcloud__Title__c | TypestringPropertiesFilter, Nillable, SortDescriptionLocalizable title of the Hurdle.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Title_Language_1__c, "Language2", BLANKVALUE(cgcloud__Title_Language_2__c,cgcloud__Title_Language_1__c), "Language3", BLANKVALUE(cgcloud__Title_Language_3__c,cgcloud__Title_Language_1__c), "Language4", BLANKVALUE(cgcloud__Title_Language_4__c,cgcloud__Title_Language_1__c), cgcloud__Title_Language_1__c) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Promotion\_Hurdle\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_Hurdle\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_Hurdle\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Promotion\_Hurdle\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_Hurdle\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Title_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Title_Language_2__c,cgcloud__Title_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Title_Language_3__c,cgcloud__Title_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Title_Language_4__c,cgcloud__Title_Language_1__c),
cgcloud__Title_Language_1__c)
```

## Related Topics

- cgcloud__Promotion_Hurdle__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion_Hurdle__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion_Hurdle__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion_Hurdle__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion_Hurdle__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
