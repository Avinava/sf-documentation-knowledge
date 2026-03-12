---
title: "cgcloud__Week_Day_Share_Profile__c"
domain: retail-api
topic: cgcloudweekdayshareprofilec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.506Z
estimatedTokens: 1987
keywords: [cgcloud__Week_Day_Share_Profile__c, statistical, profiles, distribution, weekly, data, among, different, days, week, API, version, 54.0, later, cgcloud]
---

# cgcloud__Week_Day_Share_Profile__c

> Contains statistical profiles of the distribution of weekly data
         among different days of a week. This object is available in API version 54.0 and
      later.

# cgcloud\_\_Week\_Day\_Share\_Profile\_\_c

Contains statistical profiles of the distribution of weekly data among different days of a week. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Description_Language_1__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Friday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value on Fridays = Friday/Total. Rounded up to two decimal places.This is a calculated field.Formulacgcloud__Friday__c / cgcloud__Total__c |
| cgcloud__Friday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share valid on Fridays. |
| cgcloud__Monday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value on Mondays = Monday/Total. Rounded up to two decimal places.This is a calculated field.Formulacgcloud__Monday__c / cgcloud__Total__c |
| cgcloud__Monday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share valid on Mondays. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales organization to which the Week Day Share Profile belongs.Possible values are:0000000100020003 |
| cgcloud__Saturday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value on Saturdays = Saturday/Total. Rounded up to two decimal places.This is a calculated field.Formulacgcloud__Saturday__c / cgcloud__Total__c |
| cgcloud__Saturday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share valid on Saturdays. |
| cgcloud__Sunday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value on Sundays = Sunday/Total. Rounded up to two decimal places.This is a calculated field.Formulacgcloud__Sunday__c / cgcloud__Total__c |
| cgcloud__Sunday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share valid on Sundays. |
| cgcloud__Thursday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value on Thursdays = Thursday/Total. Rounded up to two decimal places.This is a calculated field.Formulacgcloud__Thursday__c / cgcloud__Total__c |
| cgcloud__Thursday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share valid on Thursdays. |
| cgcloud__Total__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum total of all input weekday values in the current profile.This is a calculated field.Formulacgcloud__Sunday__c + cgcloud__Monday__c + cgcloud__Tuesday__c + cgcloud__Wednesday__c + cgcloud__Thursday__c + cgcloud__Friday__c + cgcloud__Saturday__c |
| cgcloud__Tuesday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value on Tuesdays = Tuesday/Total. Rounded up to two decimal places.This is a calculated field.Formulacgcloud__Tuesday__c / cgcloud__Total__c |
| cgcloud__Tuesday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share valid on Tuesdays. |
| cgcloud__Wednesday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value on Wednesdays = Wednesday/Total. Rounded up to two decimal places.This is a calculated field.Formulacgcloud__Wednesday__c / cgcloud__Total__c |
| cgcloud__Wednesday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share valid on Wednesdays. |

## Associated Objects

This object contains these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Week\_Day\_Share\_Profile\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Week\_Day\_Share\_Profile\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Week\_Day\_Share\_Profile\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Week\_Day\_Share\_Profile\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Week\_Day\_Share\_Profile\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Week_Day_Share_Profile__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Week_Day_Share_Profile__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Week_Day_Share_Profile__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Week_Day_Share_Profile__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Week_Day_Share_Profile__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
