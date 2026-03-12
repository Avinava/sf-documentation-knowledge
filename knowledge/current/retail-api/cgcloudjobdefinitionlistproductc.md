---
title: "cgcloud__Job_Definition_List_Product__c"
domain: retail-api
topic: cgcloudjobdefinitionlistproductc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.820Z
estimatedTokens: 1289
keywords: [cgcloud__Job_Definition_List_Product__c, Stores, relationship, Job, Definition, Product, API, version, 54.0, later, cgcloud, _Job, _Definition, _List, _Product]
---

# cgcloud__Job_Definition_List_Product__c

> Stores the details of the relationship between the Job Definition
         List and Product related lists. This object is available in API version 54.0 and
      later.

# cgcloud\_\_Job\_Definition\_List\_Product\_\_c

Stores the details of the relationship between the Job Definition List and Product related lists. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Composite_Key__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains concatenation of the Job Definition List and Product related records. The field is set by workflow. This field prevents a Product from being added twice to a Job Definition List. |
| cgcloud__Excluded__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe product can be temporarily excluded from the product list.The default value is false. |
| cgcloud__Job_Definition_List__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the activity.This is a relationship field.Relationship Namecgcloud__Job_Definition_List__rRelationship TypeMaster-detailRefers Tocgcloud__Job_Definition_List__c (master object) |
| cgcloud__Manually__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAdded products are marked as Manually True. Products that are added via FSA are marked as Manually False.The default value is true. |
| cgcloud__Product_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionShows the description of the product.This is a calculated field.Formulacgcloud__Product__r.cgcloud__Description_1__c |
| cgcloud__Product_Number__c | TypestringPropertiesFilter, Nillable, SortDescriptionShows the number of the product.This is a calculated field.Formulacgcloud__Product__r.cgcloud__Consumer_Goods_Product_Code__c |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to a product.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionReplaces Name by Hyperlink View.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales organization to which the product assignment of the activity (and the activity itself) belongs.Possible values are:0000000100020003 |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Job\_Definition\_List\_Product\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Job\_Definition\_List\_Product\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Job\_Definition\_List\_Product\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Job\_Definition\_List\_Product\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Job\_Definition\_List\_Product\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Job_Definition_List_Product__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Job_Definition_List_Product__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Job_Definition_List_Product__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Job_Definition_List_Product__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Job_Definition_List_Product__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
