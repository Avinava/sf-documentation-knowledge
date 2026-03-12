---
title: "cgcloud__Tour__c"
domain: retail-api
topic: cgcloudtourc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.176Z
estimatedTokens: 3798
keywords: [cgcloud__Tour__c, Stores, tour, API, version, 54.0, later, cgcloud, _Tour, Calls, Associated, Objects]
---

# cgcloud__Tour__c

> Stores the details of the tour object. This object is available
      in API version 54.0 and later.

# cgcloud\_\_Tour\_\_c

Stores the details of the tour object. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date that a user referenced this record on. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date that a user viewed this record on. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the record type.This field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Assignment_Confirmation__c | TypePicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the tour assignment confirmation type for the user.Possible values are:ConfirmedNoConfirmationRequired—No Confirmation RequiredPendingConfirmation—Pending ConfirmationThis field is reserved for future use. |
| cgcloud__Cancel_Note__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNote that can be specified if the tour is canceled. |
| cgcloud__Cancel_Reason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the reason that the tour was canceled for.Possible values are:RouteClosed—Route ClosedVehicleProblems—Vehicle Problems |
| cgcloud__Cash_Check_In_Required__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines whether the cash check-in at the end of each tour is mandatory.Possible values are:MandatoryOptional |
| cgcloud__Cash_Handling_Required__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the driver can perform cash-related actions during the tour execution.The default value is false. |
| cgcloud__Completion_Release_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the tour end release time. |
| cgcloud__Consider_Mileage__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether it's mandatory that the driver documents the odometer information when beginning and ending the tour.Possible values are:NoOptionalYes |
| cgcloud__Consider_Vehicle_Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the driver must check and document the status or damages of the truck (and its trailers) at the beginning and the end of the tour.Possible values are:NoStatus—Only StatusStatusReason—Status + Reason |
| cgcloud__Consider_Vehicle__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the driver must check the license plate numbers of the truck and its trailers.Possible values are:NoTruckTruckTrailer—Truck + TrailerTruckTrailers—Truck + Trailer 1,2 |
| cgcloud__Default_Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the default currency of the tour template.Possible values are:CADCHFEURGBPJPY—YenNOKRUBUSD |
| cgcloud__Default_Driver__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the default driver of the tour.This field is a relationship field.Relationship Namecgcloud__Default_Driver__rRelationship TypeLookupRefers ToUser |
| cgcloud__Default_Tour_Visit_Duration__c | TypenumberPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for creating tour-related visits based on the sequence. It’s measured in minutes.The default value is 30. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionReference to the description based on the user-specified language.This field is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__End_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFirst date and time of validity period of the tour. |
| cgcloud__End_Warehouse__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the warehouse where the tour ended.This field is a relationship field.Relationship Namecgcloud__End_Warehouse__rRelationship TypeLookupRefers Tocgcloud__Warehouse__c |
| cgcloud__Express_Check_Out__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the driver is allowed to use the express checkout type.The default value is false. |
| cgcloud__Has_End_Tour_Veh_Details_Rvw__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the vehicle details are reviewed (true) or not (false) during the end tour activities.The default value is false. |
| cgcloud__Is_Odometer_Photo_Required__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the user documents the odometer reading at the start and the end of the day with a picture.The default value is false. |
| cgcloud__Message__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionMessage for the driver of the tour. |
| cgcloud__Multiple_Cash_Check_In_Allowed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether multiple cash check-ins for one tour are allowed.The default value is false. |
| cgcloud__Odometer_End__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMileage of the truck after ending the tour. |
| cgcloud__Odometer_Start__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMileage of the truck before starting the tour. |
| cgcloud__Route__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the route.This field is a relationship field.Relationship Namecgcloud__Route__rRelationship TypeLookupRefers Tocgcloud__Route__c |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales org that the tour belongs to.Possible values are:0000000100020003 |
| cgcloud__Show_Cash_Info__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionShow cash or expenses information in the tour summary report.The default value is false. |
| cgcloud__Should_Allow_End_Day_Geofencing__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the validation of the user's GPS location against warehouse location is enabled at the end of the day.The default value is false. |
| cgcloud__Should_Allow_End_Day_GPS_Tracking__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether GPS tracking is allowed at the end of the day.The default value is false. |
| cgcloud__Should_Allow_End_Day_Time_Tracking__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether end-of-day time tracking is allowed.The default value is false. |
| cgcloud__Should_Allow_Seal_Scanning__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the user validates a list of seals through scanning or manual entry. This field is applicable only when the Express Check-Out field is selected.The default value is false. |
| cgcloud__Should_Allow_Start_Day_Geofencing__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the validation of the user's GPS location against warehouse location is enabled at the start of the day.The default value is false. |
| cgcloud__Should_Allow_Start_Day_GPS_Tracking__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether GPS tracking is allowed at the start of the day.The default value is false. |
| cgcloud__Should_Allow_Start_Day_Time_Tracking__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the day and time tracking at the start of the day is allowed.The default value is false. |
| cgcloud__Start_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLast date and time of validity period of the tour. |
| cgcloud__Start_Release_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the start release time. |
| cgcloud__Start_Warehouse__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the warehouse.This field is a relationship field.Relationship Namecgcloud__Start_Warehouse__rRelationship TypeLookupRefers Tocgcloud__Warehouse__c |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionCurrent status of the tour.Possible values are:CanceledCompletedInitialOpenRunningThe default value is Open. |
| cgcloud__Tour_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the tour template.This field is a relationship field.Relationship Namecgcloud__Tour_Template__rRelationship TypeLookupRefers Tocgcloud__Tour_Template__c |
| cgcloud__Trailer_1__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the truck with trailer. Reference to the vehicle.This field is a relationship field.Relationship Namecgcloud__Trailer_1__rRelationship TypeLookupRefers Tocgcloud__Vehicle__c |
| cgcloud__Trailer_2__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the truck with second trailer. Reference to the vehicle.This field is a relationship field.Relationship Namecgcloud__Trailer_2__rRelationship TypeLookupRefers Tocgcloud__Vehicle__c |
| cgcloud__Truck_Status_End__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of damage observed after the tour finishes.Possible values are:Brakes—Brakes are BrokenLights—Lights brokenMirror—Wing mirror brokenMiscPaint—Paint scratchTires—Flat tireVehicle—Vehicle damagedWash—Screenwash empty |
| cgcloud__Truck_Status_Start__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of damage observed before the tour starts.Possible values are:Brakes—Brakes are BrokenLights—Lights brokenMirror—Wing mirror brokenMiscPaint—Paint scratchTires—Flat tireVehicle—Vehicle damagedWash—Screenwash empty |
| cgcloud__Truck__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the truck that carries out the tour. Reference to the vehicle.This is a relationship field.Relationship Namecgcloud__Truck__rRelationship TypeLookupRefers Tocgcloud__Vehicle__c |
| cgcloud__Truck_ok_End__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the truck (and its trailers) have had any damage after finishing the tour.Possible values are:0—No1—Yes |
| cgcloud__Truck_ok_Start__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the truck (and its trailers) had any damage before starting the tour.Possible values are:0—No1—Yes |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Tour\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Tour\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Tour\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Tour\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Tour\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Tour__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Tour__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Tour__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Tour__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Tour__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
