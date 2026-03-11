---
title: "createRecordAsync(processType, mbObject)"
domain: apex-reference
topic: createrecordasyncprocesstype-mbobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.342Z
keywords: [createRecordAsync, processType, mbObject, Asynchronously, creates, case, lead, custom, object, records., method, collects, record, creation, requests, processes, batches., Signature, Parameters, Return]
---

# createRecordAsync(processType, mbObject)

> Asynchronously creates case, lead, and custom object records. This
      method collects record creation requests and processes them in batches.

### createRecordAsync(processType, mbObject)

Asynchronously creates case, lead, and custom object records. This method collects record creation requests and processes them in batches.

#### Signature

public static String createRecordAsync(String processType, SObject mbObject)

#### Parameters

processType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The process you use to create records.

mbObject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The records created for objects. Objects must be supported by the high-volume record creation.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Returns the UUID for the record created.