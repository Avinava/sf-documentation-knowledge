---
title: "cgcloud__Visit_Template__c"
domain: retail-api
topic: cgcloudvisittemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.460Z
estimatedTokens: 3572
keywords: [cgcloud__Visit_Template__c, Template, basic, call, behavior, API, version, 54.0, later, cgcloud, _Visit, _Template, Calls, Associated, Objects]
---

# cgcloud__Visit_Template__c

> Template that describes the basic call behavior. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Visit\_Template\_\_c

Template that describes the basic call behavior. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionActive flag.The default value is true. |
| cgcloud__Add_Job_Policy__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether tasks and survey questions can be manually added to visits.The default value is false. |
| cgcloud__Auto_Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionVisit status set when call will be planned automatically.Possible values are:AbandonedCompletedPlannedThe default value is Planned. |
| cgcloud__Cancel_Reason_Required__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user must provide a reason for visit cancellation.The default value is false. |
| cgcloud__Capture_Proceeding_Time__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionCaptures the start and end time of a visit.The default value is false. |
| cgcloud__Check_Overlap__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to check for overlaps while creating calls. If this option is selected, the system checks if a current visit overlaps with any other visits. Only visits in Planned state are considered.The default value is false. |
| cgcloud__Cmpl_Vst_Geolc_Validation__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the validation type when a user completes a visit, based on the comparison between their GPS location and the geolocation of the store.Possible values are:ErrorNoneWarningThe default value is None. |
| cgcloud__Company_Required__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionRequired company details.Possible values are:MandatoryNot requiredThe default value is Not required. |
| cgcloud__Consider_POS_Check__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf its value is true, then the Call considers POS in its questions.The default value is true. |
| cgcloud__Creation_Platform__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionCreation platform.Possible values are:BothLaptopMobilityThe default value is Both. |
| cgcloud__Default_Duration__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionVisit default duration in minutes. |
| cgcloud__Delete_Allowed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a visit can be deleted using a mobile device.The default value is false. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionReference to the description based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c,       "Language1", cgcloud__Description_Language_1__c,       "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),       "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),       "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),       cgcloud__Description_Language_1__c) |
| cgcloud__Display_Promotions__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether valid promotions for the customer selected for a visit creation are shown in the Promotions tab of the Visit Detail page.The default value is false. |
| cgcloud__Does_Show_Read_Only_Visit_Info__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the users sees an information message that indicates that the visit hasn’t started and is in read-only mode.The default value is false. |
| cgcloud__Historical_Products__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines whether and how historical products are considered when determining the list of products to be surveyed in a visit.Possible values are:AllNoSameMeta—Same TemplateThe default value is No. |
| cgcloud__Is_Start_Visit_Rqr_To_Check_In__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether a user needs to start a visit before visit execution.The default value is false. |
| cgcloud__KPI_Relevant__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionDefines whether a call is relevant for KPI calculation for the selected KPIs.Possible values are:All—All KPIs |
| cgcloud__Limit_To_One_Visit_In_Progress__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionPrevent users from executing multiple visits at the same time.The default value is false. |
| cgcloud_Location_Capture_at_Start__C | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if a user’s GPS location is captured at the start of a visit. This field applies only to Direct Store Delivery and Van Sales processes.The default value is false. |
| cgcloud__Loc_Capture_During_Cancel__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user's GPS location is recorded during visit cancellation.The default value is false. |
| cgcloud__Loc_Capture_During_Complete__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the GPS location of the user is captured at visit completion.The default value is false. |
| cgcloud__Max_Pictures__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximum number of pictures. |
| cgcloud__Meta_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines another level of abstraction - categorizes templates into template templates. For example, is it a template for a Call, a Delivery Visit, a Van Sales, a Merchandising, a Service, or a Phone.Possible values are:CallDeliveryVisit—Delivery VisitMerchandisingPhoneServiceVanSales—Van SalesThe default value is Call. |
| cgcloud__Mobility_Color__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionField that defines the color of call on a mobility device.Possible values are:003344—ink blue008899—sea green 220B2AA—light sea green467596—grey blue551155—red violet6495ED—corn flower blue6688BB—periwinkle blue77AA99—sage green87CEEB—sky blue87CEFA—light sky blue8FBC8F—dark seagreenAA1133—cranberry redADD8E6—light blueB0C4DE—light steel blueBBBB00—lime green 2BC8F8F—rosy brownD1DDEC—sky blue 2DAA520—golden rodDD4411—dark orangeDDECD1—turquoise 2E9967A—dark salmonEE9B38—yellow orangeEED2E0—plumF08080—light coralF4A460—sandy brownF7EBD9—khaki 2FA8072—salmonFF7F50—coralFFA07A—light salmonFFD700—gold |
| cgcloud__Mobility_Relevant__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a visit created can be executed using mobile devices.The default value is false. |
| cgcloud__Mobility_User_Guidance__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionProcess navigation (user guidance) that is used on mobility devices.Possible values are:DeliveryMerchandizingNonCustomerSalesThe default value is Sales. |
| cgcloud__Promotion_Finding_Lead_Time__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of days that specifies future time range for finding of planned promotions. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the Sales Organization in which the template can be used.Possible values are:0000000100020003 |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOn Selection of visit template (For example, when creating a new visit): Defines the order of the templates. |
| cgcloud__Start_Vst_Geolc_Validation__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the validation type when a user starts a visit, based on the comparison between their GPS location and the geolocation of the store.Possible values are:ErrorNoneWarningThe default value is None. |
| cgcloud__Sync_Options__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines when a visit based on this template will be synced automatically:Possible values are:CancelCallCompleteCallCompleteCancelCallNoThe default value is No. |
| cgcloud__Tag_Media_Date_Time__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether date and time of media captured during visit execution on mobile devices is stored.The default value is false. |
| cgcloud__Tag_Media_Geo_Location__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether GPS coordinates of media captured during visit execution on mobile devices is stored.The default value is false. |
| cgcloud__Update_Planned_Times__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the Start or End datetimes and duration of the visit should be setThe default value is false. |
| cgcloud__User_Roles__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionUser roles that are assigned to the Order Template. Note: Ensure that the master picklist values exactly match the technical name of the permission sets. Select the user value in translation. For example, if CGCloud_Master_Data_Admin is the master picklist value, then Master Data Admin is the translated value.Possible values are:CGCloud_KAM—KAMCGCloud_Master_Data_Admin—Master Data AdminCGCloud_Retail_Admin—Retail AdminCGCloud_Sales_User—Sales UserCGCloud_Security_Admin—Security AdminCGCloud_Supervisor—SupervisorCGCloud_Tour_User |

## Associated Objects

This object contains these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Visit\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Visit\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Visit\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Visit\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Visit\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Visit_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Visit_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Visit_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Visit_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Visit_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
