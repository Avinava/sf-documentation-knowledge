---
title: "getInsightsMetadata(ciName)"
domain: apex-reference
topic: getinsightsmetadataciname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getInsightsMetadata, ciName, Get, metadata, Calculated, Insight, object., Metadata, includes, dimensions, measures., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getInsightsMetadata(ciName)

> Get metadata for a Calculated Insight object. Metadata includes dimensions and
    measures.

### getInsightsMetadata(ciName)

Get metadata for a Calculated Insight object. Metadata includes dimensions and measures.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getInsightsMetadata(String ciName)

#### Parameters

ciName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the Calculated Insight object, for example, IndividualChildrenCount\_\_cio.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")