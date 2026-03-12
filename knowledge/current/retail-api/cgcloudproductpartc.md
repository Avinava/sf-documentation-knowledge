---
title: "cgcloud__Product_Part__c"
domain: retail-api
topic: cgcloudproductpartc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.490Z
estimatedTokens: 1497
keywords: [cgcloud__Product_Part__c, Stores, relationship, two, products, how, ChildPKey, assembled, parent, product, ParentPKey, comparison, assortment, result, real]
---

# cgcloud__Product_Part__c

> Stores the details of the relationship between two products.
         Describes which and how many products (ChildPKey) are assembled into a parent product
         (ParentPKey). In comparison to a product assortment, the result is a real product. This
         relation is only used as information; it can't be used to define a set of products to be
         used in other applications. This object is available in API version 54.0 and later.

# cgcloud\_\_Product\_Part\_\_c

Stores the details of the relationship between two products. Describes which and how many products (ChildPKey) are assembled into a parent product (ParentPKey). In comparison to a product assortment, the result is a real product. This relation is only used as information; it can't be used to define a set of products to be used in other applications. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Brand__c | TypestringPropertiesFilter, Nillable, SortDescriptionReference to the brand of the child product.This field is a calculated field.This field is available in API version 55.0 and later.Formulacgcloud__Child_Product__r.cgcloud__Criterion_3_Product__r.Name |
| cgcloud__Category__c | TypestringPropertiesFilter, Nillable, SortDescriptionReference to the category of the child product.This field is a calculated field.This field is available in API version 55.0 and later.Formulacgcloud__Child_Product__r.cgcloud__Criterion_1_Product__r.Name |
| cgcloud__Child_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the product that belongs to the bill of material referred by Parent ID.This is a relationship field.Relationship Namecgcloud__Child_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique external id.This field is available in API version 55.0 and later. |
| cgcloud__Pack_Size__c | TypestringPropertiesFilter, Nillable, SortDescriptionReference to the Pack Size of the child product.This field is a calculated field.This field is available in API version 55.0 and later.FormulaTEXT(cgcloud__Child_Product__r.cgcloud__Pack_Size__c) |
| cgcloud__Parent_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the product that contains the product referred by Child ID.This is a relationship field.Relationship Namecgcloud__Parent_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescribes how often the child product is included in the parent product. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the Product Part record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionReference to the sales org of the parent product.This field is a calculated field.This field is available in API version 55.0 and later.Formulacgcloud__Parent_Product__r.cgcloud__Sales_Org__c |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe entry is valid from this date onwards. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe entry is valid until this date. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Product\_Part\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Product\_Part\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Product\_Part\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Product\_Part\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Product\_Part\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Product_Part__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Product_Part__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Product_Part__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Product_Part__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Product_Part__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
