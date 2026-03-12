---
title: "cgcloud__Tactic_Template_Cond_Creation_Def__c"
domain: retail-api
topic: cgcloudtactictemplatecondcreationdefc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:40.139Z
estimatedTokens: 1098
keywords: [configuration, condition, creation, definitions, generated, tactic, API, version, 55.0, later, cgcloud, _Tactic, _Template, _Cond, _Creation]
---

# cgcloud__Tactic_Template_Cond_Creation_Def__c

> Contains the configuration of condition creation definitions that will be
         generated for the related tactic. This object is available in API version 55.0 and
      later.

# cgcloud\_\_Tactic\_Template\_Cond\_Creation\_Def\_\_c

Contains the configuration of condition creation definitions that will be generated for the related tactic. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Additional_KPI_Definition_1__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional value that will be stored with the condition.This field is a relationship field.Relationship Namecgcloud__Additional_KPI_Definition_1__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Additional_KPI_Definition_2__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional value that will be stored with the condition.This field is a relationship field.Relationship Namecgcloud__Additional_KPI_Definition_2__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Additional_KPI_Definition_3__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional value that will be stored with the condition.This field is a relationship field.Relationship Namecgcloud__Additional_KPI_Definition_3__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Allowed_Product_Levels__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionDefines the eligible product levels when determining automatically the product levels on condition. Set only when product level defined in TTCCD is empty.Possible values are:BrandCategoryComponentFlavorPackageProductSubCategory |
| cgcloud__Change_Rule__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the rule to handle past conditions.Possible values are:finishupdateThe default value is finish. |
| cgcloud__Check_For_Duplicates__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the system reports generated internal conditions conflicting with pre-existing conditions.The default value is true. |
| cgcloud__Measure_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMeasure code of the condition. |
| cgcloud__Product_Level__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the product level at which the condition is created.Possible values are:BrandCategoryComponentFlavor—Sub BrandPackage—Product Price GroupProductSubCategory |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the Tactic Template Condition Creation Definition related list record.This field is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__RECORD_LINK, "_top") |
| cgcloud__Source_Kpi_Definition__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the KPI used to generate conditions.This field is a relationship field.Relationship Namecgcloud__Source_Kpi_Definition__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Tactic_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to Tactic Template.This field is a relationship field.Relationship Namecgcloud__Tactic_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Tactic_Template__c (the master object) |
| cgcloud__Targets__c | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, Restricted picklist, UpdateDescriptionDefines in which tables the conditions are generated.Possible values are:ExternalInternalThe default value is External. |
| cgcloud__Unique_Measure_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis is a helper field which is used to ensure that a measure code can only be assigned once to a TCCD of a tactic template. TacticTemplate.Id\|MeasureCode, where Measure code is either directly assigned to the rule or the editable measure code of the source KPI definition as fallback. |
