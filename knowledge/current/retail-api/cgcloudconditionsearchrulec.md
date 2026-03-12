---
title: "cgcloud__Condition_Search_Rule__c"
domain: retail-api
topic: cgcloudconditionsearchrulec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.303Z
estimatedTokens: 916
keywords: [cgcloud__Condition_Search_Rule__c, Holds, attributes, Condition, Search, Rule, API, version, 55.0, later, cgcloud, _Condition, _Search, _Rule, Calls]
---

# cgcloud__Condition_Search_Rule__c

> Holds the attributes of Condition Search Rule. This object is available
      in API version 55.0 and later.

# cgcloud\_\_Condition\_Search\_Rule\_\_c

Holds the attributes of Condition Search Rule. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Account_Dimension__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the account hierarchical node to start condition search from.Possible values are:Bottom_UpExactNot_RelevantThe default value is Exact. |
| cgcloud__Condition_Anchor__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe source table from which the conditions need to be searched from.Possible values are:AccountAccount_ProductProductThe default value is Account_Product. |
| cgcloud__Condition_Search_Group__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Condition Search Group object.This field is a relationship field.Relationship Namecgcloud__Condition_Search_Group__rRelationship TypeMaster-detailRefers Tocgcloud__Condition_Search_Group__c (the master object) |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user specific language.This field is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Dimension_Priority__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the search order of the different dimensions.Possible values are:Account_ProductProduct_Account |
| cgcloud__Measure_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the code for the condition type of the conditions records to be retrieved. |
| cgcloud__Product_Dimension__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the product hierarchical node to start condition search from.Possible values are:Bottom_UpExactNot_RelevantThe default value is Exact. |
| cgcloud__Search_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the strategy to be used for search conditions across product and account hierarchies.Possible values are:CollectionFirst_HitThe default value is First_Hit. |

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),
cgcloud__Description_Language_1__c)
```
