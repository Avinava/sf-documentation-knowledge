---
title: "cgcloud__User_Setting__c"
domain: retail-api
topic: cgcloudusersettingc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.381Z
estimatedTokens: 2461
keywords: [cgcloud__User_Setting__c, that's, created, store, user, settings, API, version, 54.0, later, cgcloud, _User, _Setting, Calls, Associated]
---

# cgcloud__User_Setting__c

> Object that's created to store user settings. This object is
      available in API version 54.0 and later.

# cgcloud\_\_User\_Setting\_\_c

Object that's created to store user settings. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionStandard field. Owner of the recordThis is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Bluetooth_Device__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the Bluetooth device to use with the Consumer Goods Cloud offline mobile app. Possible values are:KeyboardScannerThe default value is Scanner. |
| cgcloud__Current_Account_View__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the view that was last used by the user.This is a relationship field.Relationship Namecgcloud__Current_Account_View__rRelationship TypeLookupRefers Tocgcloud__View__c |
| cgcloud__Current_Promotion_View__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the promotion that was last used by the user.This is a relationship field.Relationship Namecgcloud__Current_Promotion_View__rRelationship TypeLookupRefers Tocgcloud__View__c |
| cgcloud__Default_Management_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault management type.Possible values are:Consultant—Consultant (Merchandizer)SalesService |
| cgcloud__Default_Visit_Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault visit status.Possible values are:AllOpen |
| cgcloud__Display_Considered_Promotions_Filter__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the Considered Promotions Filter field is shown in the Account Plan Filter.The default value is false. |
| cgcloud__Display_Weekend__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the call calendar (Agenda) on mobility devices shows weekends.The default value is false. |
| cgcloud__Initial_Time__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInitial time. |
| cgcloud__Initial_View__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInitial view.Possible values are:DayWithMapWeek |
| cgcloud__KPI_Subsets__c | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, Restricted picklist, UpdateDescriptionID of the KPI subset.Possible values are:AdjustmentBaselineManagement—Baseline ManagementBrokerFinanceMidLevelPlanning—Mid Level PlanningMonitoringPlanningPromoUIPromotionScenarios—Promotion ScenariosRetailerSPCSPCLumpSumSPCPRVPCThe default value is Planning. |
| cgcloud__Landing_Page__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the landing or the first page that's to be shown whenever a user logs in the mobility application.Possible values are:AdvancedUserCockpit—Advanced User CockpitMainMenu—Main MenuUserCockpit—User CockpitThe default value is MainMenu. |
| cgcloud__Picture_Quality__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPicture quality of the attached image.To evaluate the picture quality when creating a new picture attachment on a mobility device, the picklist values require specification of Picklist_Toggle_Mapping_Extension.ValidationCode that represents the width-height-quality of the picture.Possible values are:H-LargeM-LargeMediumSmall |
| cgcloud__Route_In_Map__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the navigation route is shown on the map.The default value is false. |
| cgcloud__Show_Agenda_Time__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether agenda time information is required in the agenda of the call calendar.The default value is false. |
| cgcloud__Show_Calendar_Week__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether calender week information is required in the agenda of the call calender.The default value is false. |
| cgcloud__Sync_Time_Interval__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNo longer in use. Indicated the time interval between sync requests. |
| cgcloud__Traffic_In_Map__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether traffic is shown on the map.The default value is false. |
| cgcloud__Unique_User_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique user ID. |
| cgcloud__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user to which the segment belongs.This is a relationship field.Relationship Namecgcloud__User__rRelationship TypeLookupRefers ToUser |
| cgcloud__Works_On_Friday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the day of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Monday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the day of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Saturday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the day of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Sunday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the day of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Thursday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the day of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Tuesday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the day of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Wednesday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the day of the week on which the user typically works. For example, used for capacity planning.The default value is false. |

## Associated Objects

This object contains these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_User\_Setting\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_User\_Setting\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_User\_Setting\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_User\_Setting\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_User\_Setting\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__User_Setting__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__User_Setting__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__User_Setting__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__User_Setting__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__User_Setting__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
