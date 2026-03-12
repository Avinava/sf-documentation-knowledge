---
title: "ApexLog"
domain: object-reference
topic: apexlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.475Z
estimatedTokens: 716
keywords: [ApexLog, debug, log, containing, transaction, including, Apex, Visualforce, workflow, validation, rules, API, version, 19.0, later]
---

# ApexLog

> Represents a debug log containing information about a transaction,
      including information about Apex, Visualforce, and workflow and validation rules. This
    object is available in API version 19.0 and later.

# ApexLog

Represents a debug log containing information about a transaction, including information about Apex, Visualforce, and workflow and validation rules. This object is available in API version 19.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Application | TypestringPropertiesFilter, Group, SortDescriptionThis value depends on the client type that triggered the log.For API clients, this value is the client ID.For browser clients, this value is Browser. |
| DurationMilliseconds | TypeintPropertiesFilter, Group, SortDescriptionDuration of the transaction in milliseconds. |
| Location | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the location of the origin of the log. Values are:Monitoring—Log is generated as part of debug log monitoring. These types of logs are maintained for seven days or until a user deletes them.SystemLog—Log is generated from the Developer Console. These types of logs are maintained for 24 hours or until the user clears them. |
| LogLength | TypeintPropertiesFilter, Group, SortDescriptionLength of the log in bytes. |
| LogUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user whose actions triggered the debug log.This is a polymorphic relationship field.Relationship NameLogUserRelationship TypeLookupRefers ToUser |
| Operation | TypestringPropertiesFilter, Group, SortDescriptionName of the operation that triggered the debug log, such as APEXSOAP, Apex Sharing Recalculation, and so on. |
| Request | TypestringPropertiesFilter, Group, SortDescriptionRequest type. Values are:API—Request came from the APIApplication—Request came from the Salesforce user interface |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the request that triggered the debug log. Use this request identifier to correlate multiple debug logs triggered by the same request. |
| StartTime | TypedateTimePropertiesFilter, SortDescriptionStart time of the transaction. |
| Status | TypestringPropertiesFilter, Group, SortDescriptionStatus of the transaction. This value is either Success, or the text of an unhandled Apex exception. |

## Usage

You can read information about this object, as well as delete it, but you can't update or insert it.

#### See Also

-   [ApexClass](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexclass.htm "Represents an Apex class.")

-   [ApexTrigger](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextrigger.htm "Represents an Apex trigger.")

-   [*Developer Guide*: Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "
    Developer Guide: Apex Developer Guide - html (New Window)")

## Related Topics

- ApexClass (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexclass.htm)
- ApexTrigger (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextrigger.htm)
