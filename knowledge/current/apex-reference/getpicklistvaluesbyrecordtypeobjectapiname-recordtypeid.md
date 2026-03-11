---
title: "getPicklistValuesByRecordType(objectApiName, recordTypeId)"
domain: apex-reference
topic: getpicklistvaluesbyrecordtypeobjectapiname-recordtypeid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.709Z
keywords: [getPicklistValuesByRecordType, objectApiName, recordTypeId, Get, values, picklist, fields, specific, record, type., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getPicklistValuesByRecordType(objectApiName, recordTypeId)

> Get the values for all the picklist fields of a specific record type.

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