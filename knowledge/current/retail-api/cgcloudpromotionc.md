---
title: "cgcloud__Promotion__c"
domain: retail-api
topic: cgcloudpromotionc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:39.553Z
estimatedTokens: 6339
keywords: [cgcloud__Promotion__c, Promotion, activity, user, includes, definition, prices, time, segment, API, version, 54.0, later, cgcloud, _Promotion]
---

# cgcloud__Promotion__c

> Promotion is an activity of a user that includes the definition of
         prices for a time segment. This object is available in API version 54.0 and later.

# cgcloud\_\_Promotion\_\_c

Promotion is an activity of a user that includes the definition of prices for a time segment. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDecides whether a promotion is available.The default value is true. |
| cgcloud__Aggregation_Category__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores information about the aggregation category. |
| cgcloud__Anchor_Account_Set__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the customer set.This is a relationship field.Relationship Namecgcloud__Anchor_Account_Set__rRelationship TypeLookupRefers Tocgcloud__Account_Set__c |
| cgcloud__Anchor_Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the customer.This is a relationship field.Relationship Namecgcloud__Anchor_Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Commit_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the promotion was committed. This field is used to fetch the prices and discounts of a promotion. |
| cgcloud__Count_Tactics__c | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of tactics associated with this promotion.This is a calculated field. |
| cgcloud__Custom1_Date_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart date of a project-specific time range. For example, pre-dip. |
| cgcloud__Custom1_Date_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date of a project-specific time range. For example, pre-dip. |
| cgcloud__Custom2_Date_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart date of a project-specific time range. For example, pre-dip. |
| cgcloud__Custom2_Date_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date of a project-specific time range. For example, pre-dip. |
| cgcloud__Date_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPromotion date from. |
| cgcloud__Date_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPromotion date thru. |
| cgcloud__Delivery_Date_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDelivery date from. |
| cgcloud__Delivery_Date_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDelivery date thru. |
| cgcloud__Effective_Brands__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores a list (JSON array) of the effective Brand SfIds for this promotion. |
| cgcloud__Effective_Categories__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores a list (JON array) of the effective Category Sf IDs for this promotion. |
| cgcloud__ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of the promotion that's used as a reference in external systems. Integration uses this ID to import tactic-specific actuals into the offplatform back end. |
| cgcloud__Filter_Criteria__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the .json file that's used to apply product filters for the promotion. |
| cgcloud__Group_Text_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the Group Text in language 1. |
| cgcloud__Group_Text_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the Group Text in language 2. |
| cgcloud__Group_Text_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the Group Text in language 3. |
| cgcloud__Group_Text_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the Group Text in language 4. |
| cgcloud__Group_Text__c | TypestringPropertiesFilter, Nillable, SortDescriptionFormula.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Group_Text_Language_1__c, "Language2", BLANKVALUE(cgcloud__Group_Text_Language_2__c,cgcloud__Group_Text_Language_1__c), "Language3", BLANKVALUE(cgcloud__Group_Text_Language_3__c,cgcloud__Group_Text_Language_1__c), "Language4", BLANKVALUE(cgcloud__Group_Text_Language_4__c,cgcloud__Group_Text_Language_1__c), cgcloud__Group_Text_Language_1__c) |
| cgcloud__In_Calculation_Time_Frame__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionChecks the condition for calculation-relevant promotions within the offset timeframe (90 days) from today's date, and returns a boolean value.This is a calculated field.FormulaIF(((TODAY() - $Setup.cgcloud__Promotion_Calculation_Server_Offset__c.cgcloud__Days_Before__c) <= cgcloud__Date_Thru__c) && (cgcloud__Date_From__c <= (TODAY() + $Setup.cgcloud__Promotion_Calculation_Server_Offset__c.cgcloud__Days_After__c)), true, false) |
| cgcloud__Is_Frozen__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a dynamic product set is to be frozen so that it can't be changed anymore. This can be set manually or via a a workflow rule.The default value is false. |
| cgcloud__Is_Locked__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the promotion is locked.The default value is false. |
| cgcloud__Is_Push_In_Progress__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the push process for this promotion is currently in progress. This attribute is applicable for pushable promotions.The default value is false. |
| cgcloud__Is_Transferable__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIdentifies whether the promotion is eligible for transfer.This field is a calculated field.FormulaAND(ISPICKVAL(cgcloud__Promotion_Template__r.cgcloud__Is_Transfer_Relevant__c, "YES"),                                              RecordType.DeveloperName = 'Promotion', cgcloud__Date_From__c - IF(                                              ISBLANK(cgcloud__Promotion_Template__r.cgcloud__Transfer_Lead_Time__c) , 0,                                              cgcloud__Promotion_Template__r.cgcloud__Transfer_Lead_Time__c) <=                                              TODAY(),cgcloud__Date_Thru__c + IF(                                              ISBLANK(cgcloud__Promotion_Template__r.cgcloud__Transfer_Follow_Up_Time__c) , 0,                                              cgcloud__Promotion_Template__r.cgcloud__Transfer_Follow_Up_Time__c) >= TODAY()) |
| cgcloud__KPI_Dirty__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is set as true whenever there is any modification in the promotion record.The default value is false. |
| cgcloud__KPI_Value_1__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWriteback Synchronized KPI 1. |
| cgcloud__KPI_Value_2__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWriteback Synchronized KPI 2. |
| cgcloud__KPI_Value_3__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWriteback Synchronized KPI 3. |
| cgcloud__KPI_Value_4__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWriteback Synchronized KPI 4. |
| cgcloud__Last_Push_Update_Executed__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the parent promotion was last pushed. |
| cgcloud__Last_Push_Update_Received__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the child promotion received the last push update. |
| cgcloud__Lock_Deletion__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionConfigures promotions to indicate whether a promotion deletion is locked based on phases.The default value is false. |
| cgcloud__Manual_Calculation_Input__c | TypetextareaPropertiesCreate, Defaulted on create, Nillable, UpdateDescriptionStores the configuration of manually updated KPIs in .json format. |
| cgcloud__Manual_Calculation_Input_2__c | TypetextareaPropertiesDescriptionContinuation of Manual_Calculation_Input__c. Filled if the manual calculation input .json is bigger than 128k.This field is available in API version 55.0 and later. |
| cgcloud__Manual_Calculation_Input_3__c | TypetextareaPropertiesDescriptionContinuation of Manual_Calculation_Input_2__c. Filled if the manual calculation input .json is bigger than 256k.This field is available in API version 55.0 and later. |
| cgcloud__Note__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionGeneral notes about the promotion. |
| cgcloud__Order_Date_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionOrder date from. |
| cgcloud__Order_Date_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionOrder date thru. |
| cgcloud__Outdated_Staging_Records__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this attribute must be recalculated when conditions are changed.The default value is false. |
| cgcloud__Parent_Promotion__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the parent promotion.This is a relationship field.Relationship Namecgcloud__Parent_Promotion__rRelationship TypeLookupRefers Tocgcloud__Promotion__c |
| cgcloud__Phase__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionPhase of the promotion.Possible values are:CancelledCommittedForApproval—For ApprovalModelingPlanningPreparationRejectedThe default value is Preparation. |
| cgcloud__Placement_Date_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionPlacement date from. |
| cgcloud__Placement_Date_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionPlacement date thru. |
| cgcloud__Promotion_Template_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the description of the selected promotion template.This is a calculated field.Formulacgcloud__Promotion_Template__r.cgcloud__Description__c |
| cgcloud__Promotion_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the promotion template.This is a relationship field.Relationship Namecgcloud__Promotion_Template__rRelationship TypeLookupRefers Tocgcloud__Promotion_Template__c |
| cgcloud__Push_Target_Account_Selection__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionOnly filled for Pushable promotions. Contains a .json file with the selected push target accounts. |
| cgcloud__Reference_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference date that's used for hierarchy search. The date is retrieved from the promotion template used reference date field. |
| cgcloud__Relevant_For_Account_Plan__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the promotion is relevant for Account Plan Calculation.The default value is true. |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionSales org of the promotion.This is a calculated field.FormulaTEXT (cgcloud__Promotion_Template__r.cgcloud__Sales_Org__c) |
| cgcloud__Scenario_1_Manual_Inputs__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the promotion-specific manual input for Scenario 1. |
| cgcloud__Scenario_1_Parameters__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores scenario parameters for Scenario 1 in .json format. |
| cgcloud__Scenario_2_Manual_Inputs__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptioStores promotion-specific manual input for Scenario 2. |
| cgcloud__Scenario_2_Parameters__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores scenario parameters for Scenario 2 in .json format. |
| cgcloud__Scenario_3_Manual_Inputs__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores promotion-specific manual input for Scenario 3. |
| cgcloud__Scenario_3_Parameters__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores scenario parameters for Scenario 3 in .json format. |
| cgcloud__Scenario_4_Manual_Inputs__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores promotion-specific manual input for Scenario 4. |
| cgcloud__Scenario_4_Parameters__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores scenario parameters for Scenario 4 in .json format. |
| cgcloud__Scenario_5_Manual_Inputs__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores promotion-specific manual input for Scenario 5. |
| cgcloud__Scenario_5_Parameters__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores scenario parameters for Scenario 5 in .json format. |
| cgcloud__Selected_Scenario__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionIndicates the active scenario for the promotion. |
| cgcloud__Skip_Version_Update__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFlag that's used to skip the version update. This flag is stored as false in the database, but the system verifies the input value to detect whether the version is to be upgraded.The default value is false. |
| cgcloud__Slogan_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the slogan in language 1. |
| cgcloud__Slogan_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the slogan in language 2. |
| cgcloud__Slogan_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the slogan in language 3. |
| cgcloud__Slogan_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the slogan in language 4. |
| cgcloud__Slogan__c | TypestringPropertiesFilter, Nillable, SortDescriptionFormulaThis is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Slogan_Language_1__c, "Language2", BLANKVALUE(cgcloud__Slogan_Language_2__c,cgcloud__Slogan_Language_1__c), "Language3", BLANKVALUE(cgcloud__Slogan_Language_3__c,cgcloud__Slogan_Language_1__c), "Language4", BLANKVALUE(cgcloud__Slogan_Language_4__c,cgcloud__Slogan_Language_1__c), cgcloud__Slogan_Language_1__c) |
| cgcloud__Source_Promotion__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the source promotion.Relationship Namecgcloud__Source_Promotion__rRelationship TypeLookupRefers Tocgcloud__Promotion__c |
| cgcloud__Sub_Accounts_Selection__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetermines the selection of the valid sub accounts of the parent customer. |
| cgcloud__Sync_Relevant_Changes__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUsed for push promotions. This object indicates whether any changes are done to this promotion, which is to be synced down to the child promotions.The default value is false. |
| cgcloud__Trade_Calendar_Color_Code_1__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionProperty Based Coloring of Promotion Bars in the Trade Calendar.Possible values are:0x002266—Violet Blue0x003344—Ink Blue0x0070D2—Navy Blue0x00716B—Pine Green0x008899—Sea Green0x009E73—Green Haze0x00A1E0—Pacific Blue0x00aa99—Aquamarine0x023248—Sherpa Blue0x08A69E—Persian Green0x16325C—Catalina Blue0x224433—Deep Green0x2f539c—Deep Violet0x337722—Forest Green0x359b4c—Emerald0x408fcd—Sky Blue0x551155—Red Violet0x60B17D—Ocean Green0x61022A—Tyrian Purple0x76DED9—Turquoise Blue0x7B399C—Vivid Violet0x94E3B1—Algae Green0x993399—Violet0xA10010—Carmine0xC23934—Flush Mahogany0xE2CE7D—Chenin0xE69F00—Gamboge0xFf9900—Yellow Orange0xaa1133—Cranberry0xbbbb00—Lime Green0xdd4411—Dark Orange0xeeaa00—Chrome YellowThe default value is 0x76DED9. |
| cgcloud__Trade_Calendar_Color_Code_2__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionProperty Based Coloring of Promotion Bars in the Trade Calendar.Possible values are:0x002266—Violet Blue0x003344—Ink Blue0x0070D2—Navy Blue0x00716B—Pine Green0x008899—Sea Green0x009E73—Green Haze0x00A1E0—Pacific Blue0x00aa99—Aquamarine0x023248—Sherpa Blue0x08A69E—Persian Green0x16325C—Catalina Blue0x224433—Deep Green0x2f539c—Deep Violet0x337722—Forest Green0x359b4c—Emerald0x408fcd—Sky Blue0x551155—Red Violet0x60B17D—Ocean Green0x61022A—Tyrian Purple0x76DED9—Turquoise Blue0x7B399C—Vivid Violet0x94E3B1—Algae Green0x993399—Violet0xA10010—Carmine0xC23934—Flush Mahogany0xE2CE7D—Chenin0xE69F00—Gamboge0xFf9900—Yellow Orange0xaa1133—Cranberry0xbbbb00—Lime Green0xdd4411—Dark Orange0xeeaa00—Chrome YellowThe default value is 0x76DED9. |
| cgcloud__Trade_Calendar_Color_Code_3__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionProperty Based Coloring of Promotion Bars in the Trade Calendar.Possible values are:0x002266—Violet Blue0x003344—Ink Blue0x0070D2—Navy Blue0x00716B—Pine Green0x008899—Sea Green0x009E73—Green Haze0x00A1E0—Pacific Blue0x00aa99—Aquamarine0x023248—Sherpa Blue0x08A69E—Persian Green0x16325C—Catalina Blue0x224433—Deep Green0x2f539c—Deep Violet0x337722—Forest Green0x359b4c—Emerald0x408fcd—Sky Blue0x551155—Red Violet0x60B17D—Ocean Green0x61022A—Tyrian Purple0x76DED9—Turquoise Blue0x7B399C—Vivid Violet0x94E3B1—Algae Green0x993399—Violet0xA10010—Carmine0xC23934—Flush Mahogany0xE2CE7D—Chenin0xE69F00—Gamboge0xFf9900—Yellow Orange0xaa1133—Cranberry0xbbbb00—Lime Green0xdd4411—Dark Orange0xeeaa00—Chrome YellowThe default value is 0x76DED9. |
| cgcloud__Trade_Calendar_Color_Code_4__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionProperty Based Coloring of Promotion Bars in the Trade Calendar.Possible values are:0x002266—Violet Blue0x003344—Ink Blue0x0070D2—Navy Blue0x00716B—Pine Green0x008899—Sea Green0x009E73—Green Haze0x00A1E0—Pacific Blue0x00aa99—Aquamarine0x023248—Sherpa Blue0x08A69E—Persian Green0x16325C—Catalina Blue0x224433—Deep Green0x2f539c—Deep Violet0x337722—Forest Green0x359b4c—Emerald0x408fcd—Sky Blue0x551155—Red Violet0x60B17D—Ocean Green0x61022A—Tyrian Purple0x76DED9—Turquoise Blue0x7B399C—Vivid Violet0x94E3B1—Algae Green0x993399—Violet0xA10010—Carmine0xC23934—Flush Mahogany0xE2CE7D—Chenin0xE69F00—Gamboge0xFf9900—Yellow Orange0xaa1133—Cranberry0xbbbb00—Lime Green0xdd4411—Dark Orange0xeeaa00—Chrome YellowThe default value is 0x76DED9. |
| cgcloud__Trade_Calendar_Color_Code_5__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionProperty Based Coloring of Promotion Bars in the Trade Calendar.Possible values are:0x002266—Violet Blue0x003344—Ink Blue0x0070D2—Navy Blue0x00716B—Pine Green0x008899—Sea Green0x009E73—Green Haze0x00A1E0—Pacific Blue0x00aa99—Aquamarine0x023248—Sherpa Blue0x08A69E—Persian Green0x16325C—Catalina Blue0x224433—Deep Green0x2f539c—Deep Violet0x337722—Forest Green0x359b4c—Emerald0x408fcd—Sky Blue0x551155—Red Violet0x60B17D—Ocean Green0x61022A—Tyrian Purple0x76DED9—Turquoise Blue0x7B399C—Vivid Violet0x94E3B1—Algae Green0x993399—Violet0xA10010—Carmine0xC23934—Flush Mahogany0xE2CE7D—Chenin0xE69F00—Gamboge0xFf9900—Yellow Orange0xaa1133—Cranberry0xbbbb00—Lime Green0xdd4411—Dark Orange0xeeaa00—Chrome YellowThe default value is 0x76DED9. |
| cgcloud__Trade_Calendar_Transparency_1__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProperty Based Coloring of Promotion Bars in the Trade Calendar. |
| cgcloud__Trade_Calendar_Transparency_2__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProperty Based Coloring of Promotion Bars in the Trade Calendar. |
| cgcloud__Trade_Calendar_Transparency_3__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProperty Based Coloring of Promotion Bars in the Trade Calendar. |
| cgcloud__Trade_Calendar_Transparency_4__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProperty Based Coloring of Promotion Bars in the Trade Calendar. |
| cgcloud__Trade_Calendar_Transparency_5__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProperty Based Coloring of Promotion Bars in the Trade Calendar. |
| cgcloud__Transferred_Version__c | TypeNumberPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionLast transferred version value of the source promotion. |
| cgcloud__Version_Synced_Off_Platform__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionVersion that Off Platform operations receive. |
| cgcloud__Version__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionCurrent version of the record. The system updates this field after each operation. |
| cgcloud__Volume_Percent__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSmartUI calculates this field every time the Sub Account list values are updated. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Promotion\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Promotion\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Group_Text_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Group_Text_Language_2__c,cgcloud__Group_Text_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Group_Text_Language_3__c,cgcloud__Group_Text_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Group_Text_Language_4__c,cgcloud__Group_Text_Language_1__c),
cgcloud__Group_Text_Language_1__c)
```

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Slogan_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Slogan_Language_2__c,cgcloud__Slogan_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Slogan_Language_3__c,cgcloud__Slogan_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Slogan_Language_4__c,cgcloud__Slogan_Language_1__c),
cgcloud__Slogan_Language_1__c)
```

## Related Topics

- cgcloud__Promotion__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
