---
title: "cgcloud__Promotion_Hurdle_Expression__c"
domain: retail-api
topic: cgcloudpromotionhurdleexpressionc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:39.596Z
estimatedTokens: 1340
keywords: [cgcloud__Promotion_Hurdle_Expression__c, New, stores, expression, API, version, 54.0, later, cgcloud, _Promotion, _Hurdle, _Expression, Calls, Associated, Objects]
---

# cgcloud__Promotion_Hurdle_Expression__c

> New object that stores the information about an expression. This
      object is available in API version 54.0 and later.

# cgcloud\_\_Promotion\_Hurdle\_Expression\_\_c

New object that stores the information about an expression. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Allows_Classification__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the expression function can dynamically consider the classification and the KAM is able to filter products according to the classification at Promotion Hurdle level.The default value is false. |
| cgcloud__Expression_Function__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the function that's called to determine the value of the Expression. This function must be defined in the Mobility Modeler as a Javascript function. It receives a predefined list of parameters as input and returns a numeric value. |
| cgcloud__Expression_Result_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of result of the expression (Text, Numeric, Boolean).Possible values are:BooleanDateNumericText |
| cgcloud__Field_Api_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional parameter. |
| cgcloud__Job_Definition_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional parameter. The question to be answered or verified.This is a relationship field.Relationship Namecgcloud__Job_Definition_Template__rRelationship TypeLookupRefers Tocgcloud__Job_Definition_Template__c |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional parameter. The product that's to be verified from a survey.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales organization to which the promotion expression belongs.Possible values are:0000000100020003 |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Promotion\_Hurdle\_Expression\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_Hurdle\_Expression\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_Hurdle\_Expression\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Promotion\_Hurdle\_Expression\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_Hurdle\_Expression\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Promotion_Hurdle_Expression__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion_Hurdle_Expression__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion_Hurdle_Expression__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion_Hurdle_Expression__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion_Hurdle_Expression__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
