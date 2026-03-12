---
title: "cgc_sync__Sync_Mobile_App_Log__c"
domain: retail-api
topic: cgcsyncsyncmobileapplogc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.818Z
estimatedTokens: 875
keywords: [cgc_sync__Sync_Mobile_App_Log__c, Stores, error, messages, warnings, occurred, mobile, app, uploaded, every, time, user, runs, upload, Salesforce]
---

# cgc_sync__Sync_Mobile_App_Log__c

> Stores the error messages and warnings that occurred in the mobile app.
         Such
         error messages and warnings are uploaded every time a user
         runs
         the upload to Salesforce action in the mobile app. This object is available in API
      version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_Log\_\_c

Stores the error messages and warnings that occurred in the mobile app. Such error messages and warnings are uploaded every time a user runs the upload to Salesforce action in the mobile app. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the mobile app log. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync__Details__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionLink to the sync details record. |
| cgc_sync__DeviceId__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique identification of the client device that was used to submit the event. |
| cgc_sync__Device_Model__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModel number of the device.NoteThis field is for internal use. |
| cgc_sync__Device_OS_Version__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVersion of the operating system on the mobile device. |
| cgc_sync__Device_Platform__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOperating system of the mobile device, including Android, iOS, or web browser. |
| cgc_sync__Event_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEvent error code. |
| cgc_sync__Generated_At__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the date and time when the event is generated. |
| cgc_sync__Length_In_Millis__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the time taken (in milliseconds) to generate the event. |
| cgc_sync__Log_Level__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of the generated log.Possible values are:12001400500800900 |
| cgc_sync__Message__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionError log message that's used as the error description. |
| cgc_sync__Namespace__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNamespace used for the mobile app. Possible values:FW UIFW ENGINESYNC |
| cgc_sync__SubmittedBy__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser who uploaded the log.This is a relationship field.Relationship Namecgc_sync__SubmittedBy__rRelationship TypeLookupRefers ToUser |
| cgc_sync__Sync_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the unique ID of the sync request. |
|  |  |
| cgc_sync__Sync_Version__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser who's logged in on the client while the record was submitted to the back end. |
