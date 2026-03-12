---
title: "cgcloud__Sales_Organization__c"
domain: retail-api
topic: cgcloudsalesorganizationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.888Z
estimatedTokens: 4897
keywords: [cgcloud__Sales_Organization__c, stores, Sales, Organization, API, version, 54.0, later, cgcloud, _Sales, _Organization, Calls, Associated, Objects]
---

# cgcloud__Sales_Organization__c

> This object stores the details of the Sales Organization. This
      object is available in API version 54.0 and later.

# cgcloud\_\_Sales\_Organization\_\_c

This object stores the details of the Sales Organization. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__APM_Product_List_Relevant_Measures__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionStores the measure codes that are defined for the accountproductmeasure table.Possible values are:BASP |
| cgcloud__Account_Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount number at the bank. |
| cgcloud__Account_Product_List_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the Product List that's to be used.Possible values are:globaltimedependentThe default value is global. |
| cgcloud__Automatic_Promotion_Push__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionActivates the automatic push on leave of the promotion.The default value is true. |
| cgcloud__Available_Trade_Calendar_Color_Schemas__c | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, Restricted picklist, UpdateDescriptionProperty Based Coloring of Promotion Bars within the Trade Calendar.Possible values are:1—Promotion Template2—Phase3—Custom 34—Custom 45—Custom 5The default value is 1. |
| cgcloud__BIN__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBank Identification Number. |
| cgcloud__Bank_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode of the bank. |
| cgcloud__Bank__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBank that's used for payments. |
| cgcloud__Business_Unit__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the book keeping segment. |
| cgcloud__City__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the city. |
| cgcloud__Country__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the country. |
| cgcloud__Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCurrency of the sales organization.Possible values are:BRLCAD—Canadian DollarCHF—Swiss FrancEUR—EuroGBP—Pound SterlingJPY—YenMXNNOK—Norwegian KroneRUB—Russian currencyTHBUSD—US Dollar |
| cgcloud__Custom_Calendar__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the custom calendar that's used for the sales org.This is a relationship field.Relationship Namecgcloud__Custom_Calendar__rRelationship TypeLookupRefers Tocgcloud__Custom_Calendar__c |
| cgcloud__DMI_Product_List_Relevant_Measures__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionStores measure codes that are defined for the daily measurement table.Possible values are:DMI |
| cgcloud__DMR_Product_List_Relevant_Measures__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionStores measure codes that are defined for the dailymeasurereal table.Possible values are:SHIP |
| cgcloud__Default_Mobility_Visit_Color__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionField to define the default color of visits on the calendar of a mobility device.Possible values are:0033440088990176D320B2AA4675965511556495ED6688BB77AA9987CEEB87CEFA8FBC8FAA1133ADD8E6B0C4DEBBBB00BC8F8FD1DDECDAA520DD4411DDECD1E9967AEE9B38EED2E0F08080F4A460F7EBD9FA8072FF7F50FFA07AFFD700The default value is 0176D3. |
| cgcloud__Default_Price_List_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault price list type of the sales organization.Possible values are:NotRelevant—Not RelevantWS1999—WholesalerWS2000—Direct Customers |
| cgcloud__Default_Price_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault price type of the sales organization.Possible values are:NotRelevantconsumerfactory |
| cgcloud__Default_Tactic_Fund_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault template that's used as a fallback if no fund template is selected in the tactic.This is a relationship field.Relationship Namecgcloud__Default_Tactic_Fund_Template__rRelationship TypeLookupRefers Tocgcloud__Fund_Template__c |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Distance_Unit__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDistance unit for mobility.Possible values are:km—Kilometermiles—MilesThe default value is km. |
| cgcloud__Email__c | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address. |
| cgcloud__Enable_Acc_Cat_WDS_Profile__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the account, category, account, and sales org-specific profiles use the Profile bucket share calculation, which is found first.The default value is false. |
| cgcloud__Enable_Account_Set_Search_in_TPC__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the customer set search filter is available in the trade calendar filter.The default value is true. |
| cgcloud__Enable_Auto_Tactic_Fund_Assignment__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the tactic fund assignment is automatic.The default value is true. |
| cgcloud__Enable_Payment_Overwrite__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the payment can be overwritten for the sales organization.The default value is true. |
| cgcloud__Enable_Sub_Account_Search_In_TPC__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the customer set search filter is available in the trade calendar filter.The default value is false. |
| cgcloud__Enable_Subperiod_Writeback__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the system stores subperiod values with writebacks.The default value is false. |
| cgcloud__Enable_Subset_Load_Optimization__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the system uses KPI subset configurations for optimized loading of KPIs in promotion and account plan.The default value is true. |
| cgcloud__Enable_Tactic_Condition_Creation__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the condition can be created at the tactic level.The default value is false. |
| cgcloud__Fax__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFax number. |
| cgcloud__First_Day_Of_Week__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the day of the week.Possible values are:1—Sunday2—Monday3—Tuesday4—Wednesday5—Thursday6—Friday7—Saturday |
| cgcloud__First_Week_Of_Year__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionShows the week for call scheduling.Possible values are:1—First January2—First Four Days3—First Full Week |
| cgcloud__Geofence_Distance__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMaximum distance(in kilometers) allowed for geofencing validation (start-of-day, end-of-day, visit). |
| cgcloud__Global_Sales_Org__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the current sales org is the global sales org.The default value is false. |
| cgcloud__Has_Activated_Business_Years__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the business years are activated for the sales org.The default value is false. |
| cgcloud__IBAN__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInternational Bank Account Number. |
| cgcloud__Language_1__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLanguage 1 of the sales org.Possible values are:de—Germanen—Englishes—Spanishfr—Frenchit—Italian |
| cgcloud__Language_2__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLanguage 2 of the sales org.Possible values are:de—Germanen—Englishes—Spanishfr—Frenchit—Italian |
| cgcloud__Language_3__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLanguage 3 of the sales org.Possible values are:de—Germanen—Englishes—Spanishfr—Frenchit—Italian |
| cgcloud__Language_4__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLanguage 4 of the sales org.Possible values are:de—Germanen—Englishes—Spanishfr—Frenchit—Italian |
| cgcloud__Legal_Information__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionLegal information to be shown on the printouts. |
| cgcloud__Lookback_Period_In_Years__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe products with an end date within the lookback period are selected for the calculation of account plan profit and loss and customer business plan.Possible values are:12 |
| cgcloud__No__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHouse Number. |
| cgcloud__PMR_Product_List_Relevant_Measures__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionStores measure codes that are defined for the WeeklyPromotionMeasureResult and MonthlyPromotionMeasureResult tables.Possible values are:PIVPTV |
| cgcloud__PM_Product_List_Relevant_Measures__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionStores measure codes that are defined for the product measure table.Possible values are:COGS |
| cgcloud__Phone__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number. |
| cgcloud__Postbox__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of a post box. |
| cgcloud__Promotion_Access_Definition_Policy__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines whether the edit and access rights are dependent on either the product categories that the user has assigned or the account and product category relationship.Possible values are:Combined_Anchors—Combined AnchorsIndependent_Anchors—Independent AnchorsThe default value is Independent_Anchors. |
| cgcloud__Promotion_Aggregation_Level__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines at which level the product is located.Possible values are:BrandCategoryFlavorPackageProductSubCategoryThe default value is Brand. |
| cgcloud__SWIFT__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInternational bank account identifier. |
| cgcloud__Sales_Org_Admin_User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the admin user of the sales org.This field is a relationship field.Relationship Namecgcloud__Sales_Org_Admin_User__rRelationship TypeLookupRefers ToUser |
| cgcloud__Sales_Org_Value__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionValue of the sales org that are defined in the global value picklist.Possible values are:0000000100020003 |
| cgcloud__Sales_Organization_Cluster__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionValues of the organization cluster.Possible values are:EUNASA |
| cgcloud__Should_Include_Discontinued_Products__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the discontinued products are included in the calculation of the account plan profit and loss and customer business plan. A single lookback period spans 380 days. The lookback period goes back from the start of the customer business plan or account plan. It goes back by 380 days for a 1-year period and 760 days for a 2-year period.The default value is false. |
| cgcloud__State__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the state. |
| cgcloud__Street__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of a street. |
| cgcloud__Tax_Jurisdiction_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTax Account Number. |
| cgcloud__Used_Reference_Date__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the value that's selected in the view for the product hierarchy resolution reference date.Possible values are:dynamic—Dynamicstartdate—Start DateThe default value is startdate. |
| cgcloud__Visit_Start_Time__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the Visit Start Time value. |
| cgcloud__Volume_Unit__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionItem volume unit used for complex pricing.Assumption: All pricing relevant volume values (product master data, condition data) are interpreted in this overall specified unit.Possible values are:cm3—cubic metersgallonl—literThe default value is l. |
| cgcloud__WMI_Product_List_Relevant_Measures__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionStores the measure codes that are defined for the weeklymeasureint table.Possible values are:BSLCONS |
| cgcloud__WMR_Product_List_Relevant_Measures__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionStores the measure codes that are defined for the weeklymeasurereal table.Possible values are:WMR |
| cgcloud__Week_Day_Share_Profile__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the weekday share profile that's used as the default for the sales organization.This is a relationship field.Relationship Namecgcloud__Week_Day_Share_Profile__rRelationship TypeLookupRefers Tocgcloud__Week_Day_Share_Profile__c |
| cgcloud__Weight_Unit__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionItem weight unit that's used for complex pricing.Assumption: All pricing relevant weight values (product master data, condition data) are interpreted in this overall specified unit.Possible values are:kgozpoundtonThe default value is kg. |
| cgcloud__Zip_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Sales\_Organization\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Sales\_Organization\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Sales\_Organization\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Sales\_Organization\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Sales\_Organization\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Sales_Organization__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Sales_Organization__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Sales_Organization__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Sales_Organization__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Sales_Organization__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
