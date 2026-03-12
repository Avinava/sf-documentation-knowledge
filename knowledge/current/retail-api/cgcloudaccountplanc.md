---
title: "cgcloud__Account_Plan__c"
domain: retail-api
topic: cgcloudaccountplanc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.979Z
estimatedTokens: 2001
keywords: [cgcloud__Account_Plan__c, account, data, planning, business, year, multiple, categories, API, version, 54.0, later, cgcloud, _Account, _Plan]
---

# cgcloud__Account_Plan__c

> Contains the details of the account data for one planning account, one
         business year and one or multiple categories. This object is available in API version
      54.0 and later.

# cgcloud\_\_Account\_Plan\_\_c

Contains the details of the account data for one planning account, one business year and one or multiple categories. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRefers to the account on which the plan is anchored.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Available_Product_Level__c | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the multiple sets of values a user can choose, which are further used for aggregation on the calculation grid for account plan.Possible values are:BrandCategoryFlavor—Sub BrandPackage—Product Price GroupProductSubCategoryThe default value is 'Category'. |
| cgcloud__Business_Year_Label__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescribes the Business Year for which the plan is created.This field is a calculated field.This field is available in API version 55.0 and later.FormulaTEXT( cgcloud__Business_Year__c ) |
| cgcloud__Business_Year__c | TypedoublePropertiesCreate, Filter, idLookup, Nillable, Sort, UpdateDescriptionRefers to the business year for which the plan is defined. |
| cgcloud__Category_Labels_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category labels in short descriptions of language 1 for all categories associated with the plan. |
| cgcloud__Category_Labels_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category labels in short descriptions of language 2 for all categories associated with the plan. |
| cgcloud__Category_Labels_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category labels in short descriptions of language 3 for all categories associated with the plan. |
| cgcloud__Category_Labels_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category labels in short descriptions of language 4 for all categories associated with the plan. |
| cgcloud__Category_Labels__c | TypestringPropertiesFilter, Nillable, SortDescriptionCategory labels for all categories associated with the plan based on the user-specific language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Category_Labels_Language_1__c, "Language2", cgcloud__Category_Labels_Language_2__c, "Language3", cgcloud__Category_Labels_Language_3__c, "Language4",cgcloud__Category_Labels_Language_4__c, cgcloud__Category_Labels_Language_1__c) |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specific language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__KPI_Set__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the KPI Set.This is a relationship field.Relationship Namecgcloud__KPI_Set__rRelationship TypeLookupRefers Tocgcloud__KPI_Set__c |
| cgcloud__Note__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionComments to track the changes made in the customer's business plan record. |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescribes the sales organization to which the account plan belongs.This is a calculated field.FormulaTEXT (cgcloud__Account__r.cgcloud__Account_Template__r.cgcloud__Sales_Org__c) |
| cgcloud__Version__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionRefers to the version number. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Account\_Plan\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Account\_Plan\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Account\_Plan\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Account\_Plan\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Account\_Plan\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Category_Labels_Language_1__c,
"Language2", cgcloud__Category_Labels_Language_2__c,
"Language3", cgcloud__Category_Labels_Language_3__c,
"Language4",cgcloud__Category_Labels_Language_4__c,
cgcloud__Category_Labels_Language_1__c)
```

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),
cgcloud__Description_Language_1__c)
```

## Related Topics

- cgcloud__Account_Plan__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Account_Plan__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Account_Plan__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Account_Plan__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Account_Plan__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
