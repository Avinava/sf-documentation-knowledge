---
title: "cgcloud__Product_Category_Share__c"
domain: retail-api
topic: cgcloudproductcategorysharec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.455Z
estimatedTokens: 1396
keywords: [cgcloud__Product_Category_Share__c, business, product, categories, brands, user, manages, API, version, 54.0, later, cgcloud, _Product, _Category, _Share]
---

# cgcloud__Product_Category_Share__c

> This business class contains the product categories or brands that a
         user manages. This object is available in API version 54.0 and later.

# cgcloud\_\_Product\_Category\_Share\_\_c

This business class contains the product categories or brands that a user manages. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Access__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of access.Possible values are:ReadRead/Write |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the account for which the promotion access rights are defined.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Active__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines whether the current record is to be used for promotion access rights.Possible values are:ActiveInactiveToBeActivatedToBeDeactivatedThe default value is Inactive. |
| cgcloud__Group__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser group for which the product group rights is to be defined. |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to either the product at product level category or the brand for which rights are granted.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the details page of the Product Catergory Share related list record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__User_Group__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser group for which the product group rights is to be defined. |
| cgcloud__User_Setting__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user setting.This is a relationship field.Relationship Namecgcloud__User_Setting__rRelationship TypeLookupRefers Tocgcloud__User_Setting__c |
| cgcloud__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user for which the product group rights is to be defined.This is a relationship field.Relationship Namecgcloud__User__rRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Product\_Category\_Share\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Product\_Category\_Share\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Product\_Category\_Share\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Product\_Category\_Share\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Product\_Category\_Share\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Product_Category_Share__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Product_Category_Share__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Product_Category_Share__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Product_Category_Share__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Product_Category_Share__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
