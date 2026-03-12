---
title: "cgcloud__Inventory__c"
domain: retail-api
topic: cgcloudinventoryc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.736Z
estimatedTokens: 2027
keywords: [cgcloud__Inventory__c, Stores, inventory, API, version, 54.0, later, cgcloud, _Inventory, Calls, Associated, Objects]
---

# cgcloud__Inventory__c

> Stores the details of the inventory object. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Inventory\_\_c

Stores the details of the inventory object. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the Record Type.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the account.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Balance__c | TypedoublePropertiesFilter, Nillable, SortDescriptionBalance of the inventory.This is a calculated field. |
| cgcloud__Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRelevant currency of the inventory.Possible values are:CADCHFEURGBPJPYNOKRUBUSD |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Initial_Inventory__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAttribute that controls whether the system automatically creates an initial transaction for this inventory. |
| cgcloud__Invalid__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the Inventory is valid.The default value is false. |
| cgcloud__Inventory_Control_Measure__c | TypestringPropertiesFilter, Nillable, SortDescriptionInventory control measure of the inventory control template.This is a calculated field.FormulaTEXT(cgcloud__Inventory_Template__r.cgcloud__Inventory_Control_Measure__c) |
| cgcloud__Inventory_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the inventory control template.This is a relationship field.Relationship Namecgcloud__Inventory_Template__rRelationship TypeLookupRefers Tocgcloud__Inventory_Control_Template__c |
| cgcloud__Phase__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the phase of the inventory.Possible values are:ActiveClosedThe default value is Active. |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the product.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Quota_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionQuote type of the inventory control template.This is a calculated field.FormulaTEXT(cgcloud__Inventory_Template__r.cgcloud__Quota_Type__c) |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org of the template.Possible values are:0000000100020003 |
| cgcloud__Tour__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the tour.This is a relationship field.Relationship Namecgcloud__Tour__rRelationship TypeLookupRefers Tocgcloud__Tour__c |
| cgcloud__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user.This is a relationship field.Relationship Namecgcloud__User__rRelationship TypeLookupRefers ToUser |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInventory valid from date. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInventory valid thru date. |
| cgcloud__Vehicle__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the vehicle.This is a relationship field.Relationship Namecgcloud__Vehicle__rRelationship TypeLookupRefers Tocgcloud__Vehicle__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Inventory\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Inventory\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Inventory\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Inventory\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Inventory\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Inventory__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Inventory__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Inventory__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Inventory__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Inventory__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
