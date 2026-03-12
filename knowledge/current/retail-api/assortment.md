---
title: "Assortment"
domain: retail-api
topic: assortment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.604Z
estimatedTokens: 1634
keywords: [Assortment, products, eligible, sale, store, API, version, 47.0, later, Calls, Associated, Objects]
---

# Assortment

> Represents a list of products that are eligible for sale in a store. This
    object is available in API version 47.0 and later.

# Assortment

Represents a list of products that are eligible for sale in a store. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUser-defined description of an assortment of products. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUser-defined name of an assortment of products. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the assortment owner. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of language 1. This field is available in API version 55.0 and later. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of language 2. This field is available in API version 55.0 and later. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of language 3. This field is available in API version 55.0 and later. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of language 4. This field is available in API version 55.0 and later. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user specific language.This field is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Distribution__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is not used in Consumer Goods Cloud. |
| cgcloud__Facings__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis field is not used in Consumer Goods Cloud. |
| cgcloud__Listing_Module__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionValue of the Listing Module. This field is available in API version 55.0 and later.Possible values are:Base ModuleThe default value is Base Module. |
| cgcloud__Obligatory__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDenotes whether this is a closed listing. Used by the system.The default value is false. This field is available in API version 55.0 and later. |
| cgcloud__Price_Survey__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis field is not used in Consumer Goods Cloud. |
| cgcloud__Product_Assortment_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to the name of product assortment template. This field is available in API version 55.0 and later.This field is a relationship field.Relationship Namecgcloud__Product_Assortment_Template__rRelationship TypeLookupRefers Tocgcloud__Product_Assortment_Template__c |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescribes the sales org which the product assortment belongs to. This field is available in API version 55.0 and later.This field is a calculated field.FormulaTEXT(cgcloud__Product_Assortment_Template__r.cgcloud__Sales_Org__c) |
| cgcloud__Sync_Pending__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionFlagged to be relevant for this sync process. This field is available in API version 55.0 and later.This field is a calculated field.FormulaIF( cgcloud__Version__c <>  cgcloud__Version_Off_Platform_APL__c , cgcloud__Product_Assortment_Template__r.cgcloud__Consider_For_APL_Generation__c, false ) |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe starting date of the valid period for the Assortment. This field is available in API version 55.0 and later. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the valid period for the Assortment. This field is available in API version 55.0 and later. |
| cgcloud__Version_Off_Platform_APL__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionStores the off platform version number of Account product list. This field is available in API version 55.0 and later. |
| cgcloud__Version__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the version number of Authorization list. This field is available in API version 55.0 and later. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[AssortmentFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed are available for the object.

[AssortmentHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[AssortmentShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- AssortmentFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- AssortmentHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- AssortmentShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
