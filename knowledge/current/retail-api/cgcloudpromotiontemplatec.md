---
title: "cgcloud__Promotion_Template__c"
domain: retail-api
topic: cgcloudpromotiontemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.710Z
estimatedTokens: 5950
keywords: [cgcloud__Promotion_Template__c, Template, promotions, API, version, 54.0, later, cgcloud, _Promotion, _Template, Calls, Associated, Objects]
---

# cgcloud__Promotion_Template__c

> Template to create promotions. This object is available in API
      version 54.0 and later.

# cgcloud\_\_Promotion\_Template\_\_c

Template to create promotions. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Active_Policy__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether a promotion of this template is initially active or if a tactic of this type is initially pre-set as included in the promotion (not considered if the tactic is manually added to the promotion).The default value is false. |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the template is active.The default value is true. |
| cgcloud__Additional_Custom_Main_KPI_Subsets__c | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, Restricted picklist, UpdateDescriptionUsed when Subset Load Optimization is enabled to specify subsets that are additionally loaded when opening a promotion.Possible values are:AdjustmentBaselineManagementBrokerFinanceMidLevelPlanningMonitoringPlanningPromoUIPromotionScenariosRetailerSPCSPCLumpSumSPCPRVPCThe default value is 'Planning'. |
| cgcloud__Adjustment_KPI_1_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the description of KPI Set KPI Definition.This is a calculated field.Formulacgcloud__Adjustment_KPI_1__r.cgcloud__KPI_Definition__r.cgcloud__Description__c |
| cgcloud__Adjustment_KPI_1_Name__c | TypestringPropertiesFilter, Nillable, SortDescriptionCurrently not used in the layout. It will be referred by the UI team.This is a calculated field.Formulacgcloud__Adjustment_KPI_1__r.cgcloud__KPI_Definition__r.Name |
| cgcloud__Adjustment_KPI_1__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to KPI Set KPI Definition of the attached KPI Set.This is a relationship field.Relationship Namecgcloud__Adjustment_KPI_1__rRelationship TypeLookupRefers Tocgcloud__KPI_Set_KPI_Definition__c |
| cgcloud__Adjustment_KPI_2_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the description of KPI Set KPI Definition.This is a calculated field.Formulacgcloud__Adjustment_KPI_2__r.cgcloud__KPI_Description__c |
| cgcloud__Adjustment_KPI_2_Name__c | TypestringPropertiesFilter, Nillable, SortDescriptionCurrently not used in the layout. It will be referred by the UI team.This is a calculated field.Formulacgcloud__Adjustment_KPI_2__r.cgcloud__KPI_Definition__r.Name |
| cgcloud__Adjustment_KPI_2__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to KPI Set KPI Definition of the attached KPI Set.This is a relationship field.Relationship Namecgcloud__Adjustment_KPI_2__rRelationship TypeLookupRefers Tocgcloud__KPI_Set_KPI_Definition__c |
| cgcloud__Adjustment_KPI_3_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the description of KPI Set KPI Definition.This is a calculated field.Formulacgcloud__Adjustment_KPI_3__r.cgcloud__KPI_Description__c |
| cgcloud__Adjustment_KPI_3_Name__c | TypestringPropertiesFilter, Nillable, SortDescriptionCurrently not used in the layout. It will be referred by the UI team.This is a calculated field.Formulacgcloud__Adjustment_KPI_3__r.cgcloud__KPI_Definition__r.Name |
| cgcloud__Adjustment_KPI_3__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to KPI Set KPI Definition of the attached KPI Set.This is a relationship field.Relationship Namecgcloud__Adjustment_KPI_3__rRelationship TypeLookupRefers Tocgcloud__KPI_Set_KPI_Definition__c |
| cgcloud__Anchor_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the anchor type of the promotion.Possible values are:CustomerCustomerSet |
| cgcloud__Auto_Close_On_Filter_Apply__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the manage product modal window is closed automatically after applying the filters.The default value is false. |
| cgcloud__Available_Product_Level__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies whether the multiple set of values that a user can choose that will be further used for aggregation on the calculation grid for promotions.Possible values are:BrandCategoryFlavor—Sub BrandPackage—Product Price GroupSubCategory—Sub Category |
| cgcloud__BOM_Handler__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines whether BOM products will be considered in promotions created using the template.Possible values are:ConsiderBOMsExcludeBOMsNoneThe default value is None. |
| cgcloud__Calculation_Mode__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the values of Calculation Mode for the promotion.Possible values are:AdHocNoWritebackThe default value is No. |
| cgcloud__Consider_Account_Product_List__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFlag that indicates whether Account Product List is considered for Promotions.The default value is false. |
| cgcloud__Consider_Listing__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether all products of active listings are considered when bringing back the products that are part of the promoted cluster or product group according to the specified listing finding template.The default value is false |
| cgcloud__Consider_Product_KAM_Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the promotion dates that are used to determine valid products based on KAM Status.Possible values are:PromotionCommitDate—Promotion Commit DatePromotionTimeframe—Promotion TimeframeThe default value is PromotionCommitDate. |
| cgcloud__Consider_Promotion_Rewards__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the promotion is considered for rewards.The default value is false. |
| cgcloud__Creation_Platform__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the platform on which this template can be used to create new promotions.Possible values are:BothLaptopMobility |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the description.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Display_Fund_Card__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether a fund card is enabled for promotions created by using this template.The default value is true. |
| cgcloud__Display_In_Visit__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf at the call date the promotion is valid for the business partner of the call, the promotion is shown in a call.The default value is false. |
| cgcloud__Display_KPI_Validations_Only_On_Save__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether KPI validations are shown only on save while editing the promotion.The default value is false. |
| cgcloud__Display_SPC__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDepending on the value of this checkbox, SPC is shown.The default value is false. |
| cgcloud__Display_VPC__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionVPC is shown.The default value is false. |
| cgcloud__Displayed_Product_Level__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionProduct levels that are shown in P&L Views (VPC/SPC).Possible values are:BrandCategoryFlavor—Sub BrandPackage—Product Price GroupSubCategory—Sub Category |
| cgcloud__Enable_Condition_Creation__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFeature flag to enable the Tactic Condition Creation for promotions of this template. When enabled, conditions will be created for condition generating tactics.The default value is false.This field is available in API version 55.0 and later. |
| cgcloud__Ignore_Time_When_Deleting_The_Promotion__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf a TPM promotion is associated with a promotion template where Ignore_Time_When_Deleting_The_Promotion is true, then the dates of the TPM promotion (and the transfer lead time or the followup time) aren’t observed to determine if the promotion is relevant for the deletion process.The default value is false. |
| cgcloud__Is_Copyable__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFlag that indicates whether a promotion template is copyable.The default value is false'. |
| cgcloud__Is_Derivable__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Promotion Template can be used for a derive action.The default value is false. |
| cgcloud__Is_Pushable__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIdentifies whether the Promotion Template is pushable.The default value is false. |
| cgcloud__Is_Transfer_Relevant__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies and evaluates the promotion associated with the promotion template where Is Transfer Relevant is Yes for the promotion transfer process.The default value is No.Possible values areNoYes |
| cgcloud__KPI_Set__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis is a relationship field.Relationship Namecgcloud__KPI_Set__rRelationship TypeLookupRefers Tocgcloud__KPI_Set__c |
| cgcloud__Mass_Copy_Start_Date__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionControls how the dates of new promotions are determined when promotions are copied via the Mass Copy process.Possible values are:DateWeekdayThe default value is Weekday. |
| cgcloud__Mobility_Color__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionColor that are used to show the promotion.Possible values are:BlackBlueCoralCorn Flower BlueCranberry RedDark OrangeDark SalmonDark Sea GreenGoldGolden RodGrey BlueInk BlueKhaki 2Light BlueLight CoralLight SalmonLight Sea GreenLight Sky BlueLight Steel BlueLime Green 2Periwinkle BluePlumRedRed VioletRosy BrownSage GreenSalmonSandy BrownSea Green 2Sky BlueSky Blue 2Turquoise 2WhiteYellowYellow Orange |
| cgcloud__Number_Of_Copy_Usage_Hierarchies__c | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal number of Hierarchies under the Promotion Template with Copy Usage.This is a calculated field. |
| cgcloud__Number_Of_Derive_Usage_Hierarchies__c | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal number of Hierarchies under the Promotion Template with Derive Usage.This is a calculated field. |
| cgcloud__Number_Of_Push_Usage_Hierarchies__c | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of Child Templates in the Hierarchy with Usage as Push.This is a calculated field. |
| cgcloud__Product_Definition_Level__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the level at which products are defined.Possible values are:PromotionTacticThe default value is Tactic. |
| cgcloud__Product_Definition_Policy__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionFor Dynamic policy, promotion products can be defined via a filter. Promotion products change according to the changes in the product master data. The result can change until the promotion is frozen (Promotion.Is_Frozen = 'True'). For Static policy, promotion products are explicitly defined. Changes in the product master data don't trigger a change of the promotion products.Possible values are:DynamicStatic |
| cgcloud__Promo_Phases_Cleaning__c | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, Restricted picklist, UpdateDescriptionPromotion phases in which promotion cleaning (scenarios, inactive tactics) happens. Depends on the Promotion_Phases global picklist.Possible values are:CancelledCommittedForApprovalModelingPlanningPreparationThe default value is Preparation. |
| cgcloud__Promotion_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of promotion.Possible values are:PromotionSellablePromotion |
| cgcloud__Push_Process_Flow__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPromotion push process type.Possible values are:calculatedistributeAndCalculate |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org of the promotion template.Possible values are:0000000100020003 |
| cgcloud__Selectable_Promotion__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the promotion is auto-granted or selectable by selecting the corresponding checkbox.The default value is false. |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSort number. |
| cgcloud__Special_Order_Relevant__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFlag indicates whether the Promotion is special order-relevant.The default value is false. |
| cgcloud__Sub_Accounts_Enabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the Sub Account Planning feature is enabled for the promotions with this template. This checkbox can only be enabled if Anchor Type is Customer.The default value is false. |
| cgcloud__Synchronize_Promotion_Timeframes__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf this field is selected as TRUE, the Shipment Dates From and Thru and InStore From and Thru dates always have the values set in Date From and Date Thru.The default value is false. |
| cgcloud__Target_Promotion_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies target promotion template.Relationship Namecgcloud__Target_Promotion_Template__rRelationship TypeLookupRefers Tocgcloud__Promotion_Template__c |
| cgcloud__TFD_Commit_Date_Offset__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionOffset that's used to calculate the value of Commit Date from Date From, if the Timeframe Determination Policy isn't Manual. |
| cgcloud__TFD_Delivery_Date_From_Offset__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionOffset that's used to calculate the value of Shipment Date From from In-Store Date From, if the Timeframe Determination Policy isn't Manual. |
| cgcloud__TFD_Delivery_Date_Thru_Offset__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionOffset that's used to calculate the value of Shipment Date Thru from n-Store Date Thru, if the Timeframe Determination Policy isn't Manual. |
| cgcloud__Timeframe_Determination_Policy__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines whether promotion dates are added by the user or automatically determined by the system from a given pair of In-Store dates.Possible values are:ManualSimple—Automatic SimpleThe default value is Manual. |
| cgcloud__Trade_Calendar_Color__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the color of the promotion in Trade Calendar.Possible values are:0x002266—Violet Blue0x003344—Ink Blue0x0070D2—Navy Blue0x00716B—Pine Green0x008899—Sea Green0x009E73—Green Haze0x00A1E0—Pacific Blue0x00aa99—Aquamarine0x023248—Sherpa Blue0x08A69E—Persian Green0x16325C—Catalina Blue0x224433—Deep Green0x2f539c—Deep Violet0x337722—Forest Green0x359b4c—Emerald0x408fcd—Sky Blue0x551155—Red Violet0x60B17D—Ocean Green0x61022A—Tyrian Purple0x76DED9—Turquoise Blue0x7B399C—Vivid Violet0x94E3B1—Algae Green0x993399—Violet0xA10010—Carmine0xC23934—Flush Mahogany0xE2CE7D—Chenin0xE69F00—Gamboge0xFf9900—Yellow Orange0xaa1133—Cranberry0xbbbb00—Lime Green0xdd4411—Dark Orange0xeeaa00—Chrome YellowThe default value is x76DED9. |
| cgcloud__Trade_Calendar_Relevant__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the promotion is to be shown in Trade Calendar.Possible values are:DefaultNoYesThe default value is Yes. |
| cgcloud__Transfer_Relevant_Phases__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionIdentifies the promotion phases for the transfer process. Only the promotions in the transfer-relevant phases are considered for transfer.Possible values are:CanceledCommittedForApprovalModelingPlanningPreparationRejected |
| cgcloud__Transfer_Lead_Time__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the number of days in the past from the current date the promotion is eligible for transfer. |
| cgcloud__Transfer_Follow_Up_Time__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the number of days in the future from the current date the promotion is eligible for transfer. |
| cgcloud__Transfer_Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIdentifies the target sales org.The picklist values are preset from the global picklist value set of the cgcloud__Sales_Org_Value__c field in the cgcloud__Sales_Organization__c object. |
| cgcloud__UI_Contract__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContract that's associated with a template.This is a relationship field.Relationship Namecgcloud__UI_Contract__rRelationship TypeLookupRefers Tocgcloud__UI_Contract__c |
| cgcloud__UI_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies that the UI is displayed for a particular promotion type.Possible values are:SmartUIStandardUIThe default value is StandardUI. |
| cgcloud__Use_UI_Contract__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFlag that indicates whether UI contracts are switched off for promotions.The default value is false. |
| cgcloud__Used_Reference_Date__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the date that's to be used for the product hierarchy resolution if promotions of this type are calculated.Possible values are:commitdate—Commit Datetoday—TodayThe default value is commitdate. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Promotion\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Promotion\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Promotion_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
