---
title: "cgcloud__Account_Specific_Product_Condition__c"
domain: retail-api
topic: cgcloudaccountspecificproductconditionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.061Z
estimatedTokens: 1302
keywords: [Holds, relation, customer, condition, template, API, version, 54.0, later, cgcloud, _Account, _Specific, _Product, _Condition, Calls]
---

# cgcloud__Account_Specific_Product_Condition__c

> Holds the relation between a customer and the condition template. This
      object is available in API version 54.0 and later.

# cgcloud\_\_Account\_Specific\_Product\_Condition\_\_c

Holds the relation between a customer and the condition template. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to customer.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| cgcloud__Condition_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the condition template.This is a relationship field.Relationship Namecgcloud__Condition_Template__rRelationship TypeLookupRefers Tocgcloud__Condition_Template__c |
| cgcloud__Price_List_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of a price list.Possible values are:NotRelevant—Not RelevantWS1999—WS1999 - WholesalerWS2000—WS2000 - Direct Customer |
| cgcloud__Price_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType or usage of a price.Possible values are:NotRelevant—Not Relevantconsumer—Consumerfactory—Factory |
| cgcloud__Product_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the product.This is a calculated field.Formulacgcloud__Product__r.cgcloud__Description_1__c |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the product.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed for quantity discounts. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the account-specific product conditions record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe date from when the entry is valid. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe date until when the entry is valid. |
| cgcloud__Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the value of a condition. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Account\_Specific\_Product\_Condition\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Account\_Specific\_Product\_Condition\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Account\_Specific\_Product\_Condition\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Account\_Specific\_Product\_Condition\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Account\_Specific\_Product\_Condition\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Account_Specific_Product_Condition__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Account_Specific_Product_Condition__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Account_Specific_Product_Condition__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Account_Specific_Product_Condition__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Account_Specific_Product_Condition__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
