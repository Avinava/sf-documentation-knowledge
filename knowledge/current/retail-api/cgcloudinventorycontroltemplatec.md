---
title: "cgcloud__Inventory_Control_Template__c"
domain: retail-api
topic: cgcloudinventorycontroltemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.753Z
estimatedTokens: 2049
keywords: [cgcloud__Inventory_Control_Template__c, Stores, inventory, control, template, that's, inventories, API, version, 54.0, later, cgcloud, _Inventory, _Control, _Template]
---

# cgcloud__Inventory_Control_Template__c

> Stores the details of the inventory control template that's to be
         used for inventories. This object is available in API version 54.0 and later.

# cgcloud\_\_Inventory\_Control\_Template\_\_c

Stores the details of the inventory control template that's to be used for inventories. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the template is active.The default value is true. |
| cgcloud__Customer_Policy__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines whether inventories based on this template are associated to a customer.Possible values are:NoneOneThe default value is None. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Inventory_Control_Measure__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionUnit of measure that's defined for the inventory control.Possible values are:Qty/Consumer UnitQty/Order UnitValue/Domestic CurrencyThe default value is 'Qty/Consumer Unit'. |
| cgcloud__Period_Policy__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a period assignment for the inventory control is required.The default value is false. |
| cgcloud__Period_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionApplicable period for the inventory control record.Possible values are:MonthPeriodQuarterSales CycleSegmentWeekYearThe default value is Year. |
| cgcloud__Product_Policy__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines whether inventories based on this template are associated to a product.Possible values are:NoneOneThe default value is None. |
| cgcloud__Quota_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionApplicable quota type for the inventory control.Possible values are:Reception QuotaTransfer QuotaThe default value is Transfer Quota. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the Sales Organization in which the template can be used.Possible values are:0000000100020003 |
| cgcloud__Tour_Policy__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines whether inventories based on this template are associated to a tour.Possible values are:NoneOneThe default value is None. |
| cgcloud__Use_Description__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the language dependent description can be filled. If the description isn't allowed, the system doesn't create a text record for the inventory transaction.The default value is false. |
| cgcloud__User_Policy__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines whether inventories based on this template are associated to a user.Possible values are:NoneOneThe default value is None. |
| cgcloud__Vehicle_Policy__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines whether inventories based on this template are associated to a vehicle.Possible values are:NoneOneThe default value is None. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Inventory\_Control\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Inventory\_Control\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Inventory\_Control\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Inventory\_Control\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Inventory\_Control\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Inventory_Control_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Inventory_Control_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Inventory_Control_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Inventory_Control_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Inventory_Control_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
