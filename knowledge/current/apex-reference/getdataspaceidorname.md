---
title: "getDataSpace(idOrName)"
domain: apex-reference
topic: getdataspaceidorname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.038Z
keywords: [getDataSpace, idOrName, Get, data, space, API, name., Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getDataSpace(idOrName)

> Get a data space by ID or API name.

### getDataSpace(idOrName)

Get a data space by ID or API name.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DataSpaceInfoRepresentation getDataSpace(String idOrName)

#### Parameters

idOrName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID or API name of the data space.

#### Return Value

Type: [ConnectApi.DataSpaceInfoRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_space_info.htm "Represents a data space.")