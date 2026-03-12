---
title: "cgcloud__Route__c"
domain: retail-api
topic: cgcloudroutec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.790Z
estimatedTokens: 1790
keywords: [cgcloud__Route__c, Stores, route, API, version, 54.0, later, cgcloud, _Route, Calls, Associated, Objects]
---

# cgcloud__Route__c

> Stores the details of the route object. This object is available
      in API version 54.0 and later.

# cgcloud\_\_Route\_\_c

Stores the details of the route object. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupTypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record.Refers ToGroup, User |
| cgcloud__Default_Start_Time__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault start time of the first call of the respective tour. |
| cgcloud__Default_Truck__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault truck that's used for the route.This is a relationship field.Relationship Namecgcloud__Default_Truck__rRelationship TypeLookupRefers Tocgcloud__Vehicle__c |
| cgcloud__Default_User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault user (driver) of the route.This is a relationship field.Relationship Namecgcloud__Default_User__rRelationship TypeLookupRefers ToUser |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the route.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__End_Warehouse__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd warehouse details.This is a relationship field.Relationship Namecgcloud__End_Warehouse__rRelationship TypeLookupRefers Tocgcloud__Warehouse__c |
| cgcloud__Route_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the route template.This is a relationship field.Relationship Namecgcloud__Route_Template__rRelationship TypeLookupRefers Tocgcloud__Route_Template__c |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org to which the route template belongs.Possible values are:0000000100020003 |
| cgcloud__Start_Warehouse__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart warehouse details.This is a relationship field.Relationship Namecgcloud__Start_Warehouse__rRelationship TypeLookupRefers Tocgcloud__Warehouse__c |
| cgcloud__Trailer_1__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFirst default trailer.This is a relationship field.Relationship Namecgcloud__Trailer_1__rRelationship TypeLookupRefers Tocgcloud__Vehicle__c |
| cgcloud__Trailer_2__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSecond default trailer.This is a relationship field.Relationship Namecgcloud__Trailer_2__rRelationship TypeLookupRefers Tocgcloud__Vehicle__c |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionFirst date of validity period of the route. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the route is valid. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Route\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Route\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Route\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Route\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Route\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Route__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Route__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Route__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Route__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Route__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
