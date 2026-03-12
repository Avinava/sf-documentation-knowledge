---
title: "cgcloud__CP_Key_Type__c"
domain: retail-api
topic: cgcloudcpkeytypec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.459Z
estimatedTokens: 2688
keywords: [cgcloud__CP_Key_Type__c, key, complex, pricing, search, strategy, API, version, 54.0, later, cgcloud, _CP, _Key, _Type, Calls]
---

# cgcloud__CP_Key_Type__c

> The key type object is used in the complex pricing search
         strategy. This object is available in API version 54.0 and later.

# cgcloud\_\_CP\_Key\_Type\_\_c

The key type object is used in the complex pricing search strategy. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Consider_Account_Hierarchy__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the condition is to be searched only in the trade org hierarchy of the orderer.The default value is false. |
| cgcloud__Consider_Account_Set__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the business partner set is to be used as a key for condition finding.The default value is false. |
| cgcloud__Consider_Account__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the business partner to be be used as a key for condition finding.The default value is false. |
| cgcloud__Consider_Product_Hierarchy__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the condition is to be searched only in the product hierarchy.The default value is false. |
| cgcloud__Consider_Product_Set__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the product set is to be used as a key for condition finding.The default value is false. |
| cgcloud__Consider_Promotion_Rewards__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the reward is to be used as a key for condition finding.The default value is false. |
| cgcloud__Consider_Promotion__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether a valid promotion is to be used as a key for condition finding.The default value is false. |
| cgcloud__Consider_Sales_Org__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the sales org is to be used as a key for condition finding.The default value is false. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Distribution_Category__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the distribution category that's used to replicate the current key type.Possible values are:CustomerTo All |
| cgcloud__Key_10__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mapping of key 10 with the attribute of an object.This is a relationship field.Relationship Namecgcloud__Key_10__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Attribute__c |
| cgcloud__Key_1__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mapping of key 1 with the attribute of an object.This is a relationship field.Relationship Namecgcloud__Key_1__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Attribute__c |
| cgcloud__Key_2__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mapping of key 2 with the attribute of an object.This is a relationship field.Relationship Namecgcloud__Key_2__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Attribute__c |
| cgcloud__Key_3__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mapping of key 3 with the attribute of an object.This is a relationship field.Relationship Namecgcloud__Key_3__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Attribute__c |
| cgcloud__Key_4__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mapping of key 4 with the attribute of an object.This is a relationship field.Relationship Namecgcloud__Key_4__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Attribute__c |
| cgcloud__Key_5__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mapping of key 5 with the attribute of an object.This is a relationship field.Relationship Namecgcloud__Key_5__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Attribute__c |
| cgcloud__Key_6__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mapping of key 6 with the attribute of an object.This is a relationship field.Relationship Namecgcloud__Key_6__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Attribute__c |
| cgcloud__Key_7__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mapping of key 7 with the attribute of an object.This is a relationship field.Relationship Namecgcloud__Key_7__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Attribute__c |
| cgcloud__Key_8__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mapping of key 8 with the attribute of an object.This is a relationship field.Relationship Namecgcloud__Key_8__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Attribute__c |
| cgcloud__Key_9__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the mapping of key 9 with the attribute of an object.This is a relationship field.Relationship Namecgcloud__Key_9__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Attribute__c |
| cgcloud__Product_Hierarchy_Only__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the condition is to be searched only in the product hierarchy.The default value is false. |
| cgcloud__Replication_Key__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the part of the merged key that's used to replicate the condition record.Possible values are:CustHier—Customer HierarchyCustSet—Customer SetCustomerKey1—Key 1Key10—Key 10Key2—Key 2Key3—Key 3Key4—Key 4Key5—Key 5Key6—Key 6Key7—Key 7Key8—Key 8Key9—Key 9NoReplKey—No Replication KeyProdHier—Product HierarchyProdSet—Product SetProductThe default value is NoReplKey. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales organization to which the key type belongs.Possible values are:0000000100020003 |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionControls the position of condition key types in overviews. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_CP\_Key\_Type\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_CP\_Key\_Type\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_CP\_Key\_Type\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_CP\_Key\_Type\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_CP\_Key\_Type\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__CP_Key_Type__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__CP_Key_Type__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__CP_Key_Type__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__CP_Key_Type__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__CP_Key_Type__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
