---
title: "cgcloud__CP_Pricing_Condition__c"
domain: retail-api
topic: cgcloudcppricingconditionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.472Z
estimatedTokens: 1695
keywords: [cgcloud__CP_Pricing_Condition__c, holds, pricing, condition, Penny, Perfect, functionality, uses, API, version, 54.0, later, cgcloud, _CP, _Pricing]
---

# cgcloud__CP_Pricing_Condition__c

> This object holds the details of the pricing condition object that
         the Penny Perfect Pricing functionality uses. This object is available in API version
      54.0 and later.

# cgcloud\_\_CP\_Pricing\_Condition\_\_c

This object holds the details of the pricing condition object that the Penny Perfect Pricing functionality uses. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Account_Set__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the customer set object.This is a relationship field.Relationship Namecgcloud__Account_Set__rRelationship TypeLookupRefers Tocgcloud__Account_Set__c |
| cgcloud__Content_Hash__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Content Hash to identify the changes made to the Content field. |
| cgcloud__Content__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionXML structure with aggregated condition information. |
| cgcloud__Deleted__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether a pricing condition has been deleted by the complex pricing batch.The default value is false.This field is available in API version 55.0 and later. |
| cgcloud__Distribution_Category__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAdvanced pricing condition distribution category.Possible values are:CustomerProductTo AllUser |
| cgcloud__Key_Type__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the key type object.This is a relationship field.Relationship Namecgcloud__Key_Type__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Type__c |
| cgcloud__Merged_Key__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMerged key of all key attributes that the key type defines. |
| cgcloud__Pricing_Condition_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the pricing condition template.This is a relationship field.Relationship Namecgcloud__Pricing_Condition_Template__rRelationship TypeLookupRefers Tocgcloud__CP_Pricing_Condition_Template__c |
| cgcloud__Product_Assortment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the product assortment object.This is a relationship field.Relationship Namecgcloud__Product_Assortment__rRelationship TypeLookupRefers ToAssortment |
| cgcloud__Promotion__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the promotion object.This is a relationship field.Relationship Namecgcloud__Promotion__rRelationship TypeLookupRefers Tocgcloud__Promotion__c |
| cgcloud__Replication_Key_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID or value of the record that the staging replication key defines. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales org to which the pricing condition belongs.Possible values are:0000000100020003 |
| cgcloud__Unique_Key__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionKey that's used for the upsert process. |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart period of all conditions that are merged into this condition (earliest one). |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd period of all conditions that are merged into this condition (oldest one). |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_CP\_Pricing\_Condition\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_CP\_Pricing\_Condition\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__CP_Pricing_Condition__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__CP_Pricing_Condition__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__CP_Pricing_Condition__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__CP_Pricing_Condition__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__CP_Pricing_Condition__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
