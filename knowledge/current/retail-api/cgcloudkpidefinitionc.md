---
title: "cgcloud__KPI_Definition__c"
domain: retail-api
topic: cgcloudkpidefinitionc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:38.936Z
estimatedTokens: 5344
keywords: [cgcloud__KPI_Definition__c, measure, derived, current, KPI_Set, json, file, API, version, 54.0, later, cgcloud, _KPI, _Definition, Calls]
---

# cgcloud__KPI_Definition__c

> Contains the description of a single measure. The fields of the table
         can be derived from the current KPI_Set .json file. This object is available in API
      version 54.0 and later.

# cgcloud\_\_KPI\_Definition\_\_c

Contains the description of a single measure. The fields of the table can be derived from the current KPI\_Set .json file. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the KPI, defines how the KPI is handled by the system.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Aggregation_Merge_Rule__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines how subperiods are merged into either full weeks or months.Possible values are:avg—Avgsum—SumThe default value is sum. |
| cgcloud__Aggregation_Rule__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines how the data in lower level nodes are aggregated to higher levels.Possible values are:avg—Avgformula—Formulamax—Maxmin—Minsum—Sum |
| cgcloud__Aggregation_Time_Rule__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the monthly calculation rule.Possible values are:aggregate—Aggregateformula—Formularead—Read |
| cgcloud__BoM_Scope__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionDefines the levels for which the calculation engine determines values.Possible values are:ComponentHeaderProductThis field is available in API version 55.0 and later. |
| cgcloud__Comment__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores extra information about the KPI Definition. |
| cgcloud__Compound_Main__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether this KPI is main compound KPI.The default value is false. |
| cgcloud__Data_Source_Aggregation_Mode__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines whether a core aggregation is to be used or a custom aggregation is to be usedPossible values are:custom—Customstandard—StandardThe default value is standard. |
| cgcloud__Data_Source_BoM_Component_Source_Level__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines from which level the values are determined.Possible values are:ComponentProductThis field is available in API version 55.0 and later. |
| cgcloud__Data_Source_Condition_Search_Group_Code__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the group code of the condition search group.This field is a calculated field.This field is available in API version 55.0 and later.Formulacgcloud__Data_Source_Condition_Search_Group__r.cgcloud__Group_Code__c |
| cgcloud__Data_Source_Condition_Search_Group__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to the condition search group.This field is a relationship field.This field is available in API version 55.0 and later.Relationship Namecgcloud__Data_Source_Condition_Search_Group__rRelationship TypeLookupRefers Tocgcloud__Condition_Search_Group__c |
| cgcloud__Data_Source_Consider_Product_Hierarchy__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product hierarchy is considered for the condition search.The default value is false. |
| cgcloud__Data_Source_Load_For_Sub_Accounts__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the loaded data is anchored to the planning account or to a list of accounts (Sub accounts). This field is applicable only for Read type.The default value is false. |
| cgcloud__Data_Source_Measure_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique code of a data source measure. |
| cgcloud__Data_Source_Monthly_Table_Name__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the source table for Monthly data that's to be read.Possible values are:accountmeasure—Account Measureaccountproductmeasure—Account Product Measuredailymeasureint—Daily Measure Intdailymeasurereal—Daily Measure Realmonthlyaccountmeasureresult—Monthly Account Measure Resultmonthlypaymenttacticmeasureresult—Monthly Payment Tactic Measure Resultmonthlypromotionmeasureresult—Monthly Promotion Measure Resultproductmeasure—Product Measurepromotiontacticdailymeasurereal—Promotion Tactic Daily Measure Real |
| cgcloud__Data_Source_Table_Name__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the source table from which the measure data is drawn.Possible values are:accountmeasure—Account Measureaccountproductmeasure—Account Product Measuredailymeasureint—Daily Measure Intdailymeasurereal—Daily Measure Realproductmeasure—Product Measurepromotiontacticdailymeasurereal—Promotion Tactic Daily Measure Realpromotiontacticweeklymeasurereal—Promotion Tactic Weekly Measure Realweeklyaccountmeasureresult—Weekly Account Measure Resultweeklymeasureint—Weekly Measure Intweeklymeasurereal—Weekly Measure Realweeklypaymenttacticmeasureresult—Weekly Payment Tactic Measure Resultweeklypromotionmeasureresult—Weekly Promotion Measure Result |
| cgcloud__Data_Source_Week_Offset__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionData is fetched from the database for the timeframe that lies within this number of weeks before the promotion. This field is supported only for volume data. |
| cgcloud__Data_Source_Year_Offset__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNumber of years to go back in time. The data is fetched from the database for the timeframe that lies within this number of years that can be either one or two years before the promotion. This field is applicable only for Read type. It can't be used in combination with week offset for one KPI at the same time. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c,       "Language1", cgcloud__Description_Language_1__c,       "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),       "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),       "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),       cgcloud__Description_Language_1__c) |
| cgcloud__Display_Enabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionOnly the measures whose display is enabled are to be displayed on the UI.The default value is true. |
| cgcloud__Display_Round__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionUI Rounding determines the number of decimal places that are to be shown in the cell. |
| cgcloud__Distribution_Acc_Hierarchy_Dist_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionMeasure code defines the code that's used to distributevalues down the account hierarchy.Possible values are:copy—Copyequal—Equalmetric—Metric (KPI) |
| cgcloud__Distribution_Acc_Hierarchy_Metric_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe measure code defines the code that is used for distribution of values down the account hierarchy. |
| cgcloud__Distribution_Order__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the order in which hierarchies are traversed.Possible values are:PlanThenTime—Planning Hierarchy -> TimeTimeThenPlan—Time -> Planning HierarchyThe default value is PlanThenTime. |
| cgcloud__Distribution_Plan_Hierarchy_Dist_Metric__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the KPI definition when distribution is of plan hierarchy.This is a relationship field.Relationship Namecgcloud__Distribution_Plan_Hierarchy_Dist_Metric__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Distribution_Plan_Hierarchy_Dist_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the distribution type that's to be used to distribute values down the planning hierarchy.Possible values are:copy—Copyequal—Equalmetric—Metric (KPI)proportional—ProportionalThe default value is metric. |
| cgcloud__Distribution_Time_Hierarchy_Dist_Metric__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the KPI definition when distribution is of time hierarchy.This is a relationship field.Relationship Namecgcloud__Distribution_Time_Hierarchy_Dist_Metric__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Distribution_Time_Hierarchy_Dist_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the distribution type that's to be used to distribute values down the time hierarchy.Possible values are:copy—Copyequal—Equalmetric—Metric (KPI)proportional—ProportionalThe default value is metric. |
| cgcloud__Editable_Edit_Mode__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis field is for lump sum. After this field is enabled and when a user introduces a total, the totals don't change even if other items change (KPI, products, and so on).Possible values are:all—Allnone—Nonetotal—Totalweek—WeekThe default value is week. |
| cgcloud__Editable_Enable_Past_Weeks__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the cells of past weeks remain editable.The default value is false. |
| cgcloud__Editable_Fixed_Totals__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the non-obsolete last edited or calculated total value of the KPI is saved for use in the Promotion Calculation.The default value is false. |
| cgcloud__Editable_Measure_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique code of the editable measure that's used when saving the edit history. |
| cgcloud__Formula__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionFunction that executes the calculation. |
| cgcloud__Is_Storage_Level_Bom_Component__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFlag that indicates whether the KPI Definition Storage Levels is BOM Component.The default value is false.This field is available in API version 55.0 and later. |
| cgcloud__Parent__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Compound KPI to which this KPI belongs.This is a relationship field.Relationship Namecgcloud__Parent__rRelationship TypeLookupRefers Tocgcloud__KPI_Definition__c |
| cgcloud__Reporting_Formula__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDefines the calculation rule for calculated reporting KPIs as a JavaScript formula. |
| cgcloud__Reporting_Relevant__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the KPI is relevant for reporting.The default value is false. |
| cgcloud__Reporting_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionControls whether the KPI is either directly read from the Writeback measure or calculated.Possible values are:calculated—Calculatedexternal—Externalread—ReadThe default value is read. |
| cgcloud__Rounding_Order__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPeriod Then Sub Periods method rounds period values first, and then rounds the buckets. This ensures that their merged value matches the period value. Sub Periods Then Period rounds subperiods first, and then merges them into periods.Possible values are:default—Defaultperiodfirst—Period Then Sub Periodssubperiodfirst—Sub Periods Then Period |
| cgcloud__Rounding_Precision__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the precision to which the calculation engine rounds the calculated values of the KPI at product level such that these values aggregate up to the correct weekly, monthly, and total values without losing precision.Possible values are:0123456 |
| cgcloud__Rounding_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRounding With Carry Over is a special configuration that uses a carryover from one cell to another to ensure that aggregations and totals match with the rounded number. Rounding Enabled performs a simple rounding to the nearest number.Possible values are:nocarryover—Rounding Enabledwithcarryover—Rounding With Carry Over |
| cgcloud__Scope__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the object scope of the KPI. The KPI can be added to the relevant KPI Set based on the defined scope.Possible values are:account—Accountfund—Fundingpaymenttactic—Payment Tacticpromotion—Promotionpromotiontactic—Promotion TacticThe default value is account. |
| cgcloud__Storage_Options_Measure_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique code of the writeback measure that's used when writing back KPIs. The last character may be a # for KPIs with the object scope as Payment Tactic. |
| cgcloud__Storage_Options_Storage_Levels__c | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, Restricted picklist, UpdateDescriptionLevels on which the data is written back. More than one level can be defined.Possible values are:BrandCategoryFlavor—Sub BrandPackage—Product Price GroupProductSubCategory—Sub CategoryTacticmeasures—MeasuresThe default value is Product. |
| cgcloud__Storage_Options_Subperiod__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf active, writeback has to generate daily accurate values for the subperiods that belong to different months.Possible values are:weeksplits—Week Splits By Month |
| cgcloud__Storage_Options_Writeback__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRows with writeback as true are saved back to the database for further use by external tools.The default value is false. |
| cgcloud__Time_Granularity__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf granularity is Subperiod, the formula is applied at the subperiod level and then merged by using merge rule. In Period granularity, the formula is applied over already merged values.Possible values are:period—Periodsubperiod—Sub PeriodThe default value is subperiod. |
| cgcloud__Time_Scope__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionConsideration of time ranges within the calculation.Possible values are:complete—Completecustom1—Custom 1custom2—Custom 2order—Orderplacement—Instoreshipment—ShipmentThe default value is complete. |
| cgcloud__Total_Calculation_Cumulative__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the KPI is a cumulative KPI.Possible values are:off—Offon—OnThe default value is off. |
| cgcloud__Total_Calculation_Rule__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines how the total column is aggregated along the x-axis.Possible values are:avg—Avgformula—Formulamax—Maxmin—Minsum—Sum |
| cgcloud__Validation_Error_Message__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLabel ID of the error string. |
| cgcloud__Validation_Level__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines the level at which the validation is to be executed. This field is applicable only for the Validation record type.Possible values are:promotion—Promotionpromotionproduct—Promotion Productpromotionproductgroup1—Promotion Product Group1promotionproductgroup2—Promotion Product Group2tactic—Tactictacticproduct—Tactic Producttacticproductgroup1—Tactic Product Group1tacticproductgroup2—Tactic Product Group2 |
| cgcloud__Validation_Value_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines the granular level at which the validation is run.Possible values are:total—Totalweek—Week |
| cgcloud__Value_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines the granular level at which the validation is executed. This field is applicable only for the Validation record type.Possible values are:MoneyNonePercentagePriceVolumeThe default value is None. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_KPI\_Definition\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_KPI\_Definition\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_KPI\_Definition\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_KPI\_Definition\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_KPI\_Definition\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__KPI_Definition__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__KPI_Definition__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__KPI_Definition__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__KPI_Definition__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__KPI_Definition__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
