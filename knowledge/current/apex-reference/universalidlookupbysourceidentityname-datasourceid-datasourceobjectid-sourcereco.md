---
title: "universalIdLookupBySourceId(entityName, dataSourceId, dataSourceObjectId, sourceRecordId, dataspace)"
domain: apex-reference
topic: universalidlookupbysourceidentityname-datasourceid-datasourceobjectid-sourcereco
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [universalIdLookupBySourceId, entityName, dataSourceId, dataSourceObjectId, sourceRecordId, dataspace, Look, objects, source, specify, data, space., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# universalIdLookupBySourceId(entityName, dataSourceId, dataSourceObjectId, sourceRecordId, dataspace)

> Look up objects by source ID and specify the data
        space.

### universalIdLookupBySourceId(entityName, dataSourceId, dataSourceObjectId, sourceRecordId, dataspace)

Look up objects by source ID and specify the data space.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryDataOutput universalIdLookupBySourceId(String entityName, String dataSourceId, String dataSourceObjectId, String sourceRecordId, String dataspace)

#### Parameters

entityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Entity name.

dataSourceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Data source ID.

dataSourceObjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Data source object ID.

sourceRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Source record ID.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryDataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_data_output.htm "Query data output.")