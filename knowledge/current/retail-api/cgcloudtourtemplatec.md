---
title: "cgcloud__Tour_Template__c"
domain: retail-api
topic: cgcloudtourtemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.214Z
estimatedTokens: 2761
keywords: [cgcloud__Tour_Template__c, Stores, tour, template, that's, tours, API, version, 54.0, later, cgcloud, _Tour, _Template, Calls, Associated]
---

# cgcloud__Tour_Template__c

> Stores the details of the tour template object that's to be used for
         tours. This object is available in API version 54.0 and later.

# cgcloud\_\_Tour\_Template\_\_c

Stores the details of the tour template object that's to be used for tours. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionActive flag.The default value is true. |
| cgcloud__Cash_Check_In_Required__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines whether the cash check-in at the end of each tour is mandatory.Possible values are:MandatoryOptional |
| cgcloud__Cash_Handling_Required__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the driver can perform cash-related actions during the tour execution.The default value is false. |
| cgcloud__Consider_Mileage__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether it's mandatory for the driver to document odometer information when beginning and ending the tour.Possible values are:NoOptionalYesThe default value is No. |
| cgcloud__Consider_Multiple_Warehouses__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines if more than one warehouse must be considered for the tour.The default value is false. |
| cgcloud__Consider_Vehicle_Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the driver must check and document the status or damages of the truck (and its trailers) at the beginning and end of the tour.Possible values are:NoStatus—Only StatusStatusReason—Status + ReasonThe default value is No. |
| cgcloud__Consider_Vehicle__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the vehicle that the driver has to provide identification (license number) for.Possible values are:NoTruckTruckTrailer—Truck+TrailerTruckTrailers—Truck + Trailer 1,2The default value is Truck. |
| cgcloud__Creation_Platform__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the platform on which the template can be used for creating tours.Possible values are:LaptopMobilityBoth |
| cgcloud__Default_Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the default currency of the tour template.Possible values are:CADCHFEURGBPJPY—YenNOKRUBUSD |
| cgcloud__Default_Tour_Visit_Duration__c | TypenumberPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for creating tour-related visits based on the sequence. It’s measured in minutes.The default value is 30. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This field is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Express_Check_Out__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether express checkout is allowed for this template.The default value is false. |
| cgcloud__Is_Odometer_Photo_Required__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the user documents the odometer reading at the start and the end of the day with a picture.The default value is false. |
| cgcloud__Mobility_User_Guidance_End_of_Day__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionMobility user guidance for the end of the day process.Possible values are:DeliveryNoneThe default value is None. |
| cgcloud__Mobility_User_Guidance_Start_of_Day__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionMobility user guidance for the start of the day process.Possible values are:DeliveryNoneThe default value is None. |
| cgcloud__Multiple_Cash_Check_In_Allowed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the multiple cash check-ins for one tour are allowed.The default value is false. |
| cgcloud__Should_Allow_End_Day_Geofencing__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the validation of the user's GPS location against warehouse location is enabled at the end of the day.The default value is false. |
| cgcloud__Should_Allow_End_Day_GPS_Tracking__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether GPS tracking is allowed at the end of the day.The default value is false. |
| cgcloud__Should_Allow_End_Day_Time_Tracking__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether end-of-day time tracking is allowed.The default value is false. |
| cgcloud__Should_Allow_Seal_Scanning__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the user validates a list of seals through scanning or manual entry. This field is applicable only when the Express Check-Out field is selected.The default value is false. |
| cgcloud__Should_Allow_Start_Day_Geofencing__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the validation of the user's GPS location against warehouse location is enabled at the start of the day.The default value is false. |
| cgcloud__Should_Allow_Start_Day_GPS_Tracking__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether GPS tracking is allowed at the start of the day.The default value is false. |
| cgcloud__Should_Allow_Start_Day_Time_Tracking__c | TypeBooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the day and time tracking for the start of the day is allowed.The default value is false. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales org that the tour template belongs to.Possible values are:0000000100020003 |
| cgcloud__Show_Cash_Info__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionShows cash and expenses information in the tour summary report.The default value is false. |
| cgcloud__Sync_Options__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether an immediate background synchronization is to be started after a special event.Possible values are:NoOnTourEnd—On Tour EndOnTourEndStart—On Tour End/StartOnTourStart—On Tour StartThe default value is No. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Tour\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Tour\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Tour\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Tour\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Tour\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Tour_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Tour_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Tour_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Tour_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Tour_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
