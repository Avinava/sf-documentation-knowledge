---
title: "cgcloud__KPI_Set_KPI_Definition__c"
domain: retail-api
topic: cgcloudkpisetkpidefinitionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.968Z
estimatedTokens: 1618
keywords: [cgcloud__KPI_Set_KPI_Definition__c, Junction, KPI, Definition, API, version, 54.0, later, cgcloud, _KPI, _Set, _Definition, Calls, Associated, Objects]
---

# cgcloud__KPI_Set_KPI_Definition__c

> Junction object between KPI Definition and KPI Definition Set.
      This object is available in API version 54.0 and later.

# cgcloud\_\_KPI\_Set\_KPI\_Definition\_\_c

Junction object between KPI Definition and KPI Definition Set. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID of the record owner. |
| cgcloud__KPI_Definition__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionParent object (KPI Definition).This is a relationship field.Relationship Namecgcloud__KPI_Definition__rRelationship TypeMaster-detailRefers Tocgcloud__KPI_Definition__c (Detail object) |
| cgcloud__KPI_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the KPI definition that's shown when selecting the Adjustment KPI from lookup.This is a calculated field.Formulacgcloud__KPI_Definition__r.cgcloud__Description__c |
| cgcloud__KPI_Set__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionParent object (Calculation Configuration).This is a relationship field.Relationship Namecgcloud__KPI_Set__rRelationship TypeMaster-detailRefers Tocgcloud__KPI_Set__c (Master object) |
| cgcloud__KPI_Subsets__c | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, Restricted picklist, UpdateDescriptionID of the KPI subset.Possible values are:AdjustmentBaselineManagement—Baseline ManagementBrokerFinanceMidLevelPlanning—Mid Level PlanningMonitoringPlanningPromoUIPromotionScenarios—Promotion ScenariosRetailerSPCSPCLumpSumSPCPRVPCThe default value is Planning. |
| cgcloud__KPI_Tactic_Dependent__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionField value that's updated based on KPI_Definition.Aggregation_Skipped_Dimesnions.This is a calculated field.FormulaOR(ISPICKVAL(cgcloud__KPI_Definition__r.cgcloud__Scope__c , "promotiontactic"),ISPICKVAL(cgcloud__KPI_Definition__r.cgcloud__Scope__c , "paymenttactic")) |
| cgcloud__Manual_Input_Copy_Mode__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines whether manual input is copied over to the target promotion.Possible values are:NoYes |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the KpiSetKpiDefinition Record for related custom lists.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sort_Subset_PSP__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSorts KPI subsets with the Promotion scenario. |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionSorts the KPI definition in the KPI set. |
| cgcloud__Storage_Options_Subset__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefine subsets of KPIs that can be calculated in various writeback steps.Possible values are:basic—Basicbusinessplan—Business Plan |
| cgcloud__Unique_Editable_Measure_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnsures that the editable measure codes per KPI set are unique. This means that no two editable KPIs create manual entries for the same measure code. |
| cgcloud__Unique_KPI_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnsures that a KPI is assigned only once to a KPI set. |
| cgcloud__Unique_KPI_Id_for_Sort__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnsures that the KPI sort order is total (for two KPIs k1 within the set, either k1 < k2 or k2 < k1 is true; otherwise k1 = k2). |
| cgcloud__Unique_Storage_Options_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnsures that the storage measure codes per KPI set are unique. This means that no two writeback KPIs create writebacks for the same measure code. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_KPI\_Set\_KPI\_Definition\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_KPI\_Set\_KPI\_Definition\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_KPI\_Set\_KPI\_Definition\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_KPI\_Set\_KPI\_Definition\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_KPI\_Set\_KPI\_Definition\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__KPI_Set_KPI_Definition__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__KPI_Set_KPI_Definition__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__KPI_Set_KPI_Definition__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__KPI_Set_KPI_Definition__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__KPI_Set_KPI_Definition__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
