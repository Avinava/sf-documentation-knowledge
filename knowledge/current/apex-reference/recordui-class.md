---
title: "RecordUi Class"
domain: apex-reference
topic: recordui-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.534Z
estimatedTokens: 538
namespace: ConnectApi
keywords: [RecordUi, picklist, record, getPicklistValuesByRecordType, objectApiName, recordTypeId, API, Version, Guest, Users, Requires, Chatter, Usage]
---

# RecordUi Class

> Get picklist values by record type.

**Namespace:** `ConnectApi`

# RecordUi Class

Get picklist values by record type.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## RecordUi Methods

These methods are for RecordUi. All methods are static.

-   **[getPicklistValuesByRecordType(objectApiName, recordTypeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RecordUi_static_methods.htm#apex_ConnectAPI_RecordUi_getPicklistValuesByRecordType_1)**
    Get the values for all the picklist fields of a specific record type.

### getPicklistValuesByRecordType(objectApiName, recordTypeId)

Get the values for all the picklist fields of a specific record type.

#### API Version

66.0

#### Available to Guest Users

66.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PicklistValuesCollection getPicklistValuesByRecordType(String objectApiName, String recordTypeId)

#### Parameters

objectApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of a [User Interface API supported object](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects).

recordTypeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a record type.

#### Return Value

Type: [ConnectApi.PicklistValuesCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_values_collection.htm "Collection of picklist values for all the picklists of a record type.")

#### Usage

This method is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents\_\_c, Countries\_\_c, Cities\_\_c), use this method to get all the values for each picklist in one request.

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getPicklistValuesByRecordType(objectApiName, recordTypeId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RecordUi_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.PicklistValuesCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_values_collection.htm)
