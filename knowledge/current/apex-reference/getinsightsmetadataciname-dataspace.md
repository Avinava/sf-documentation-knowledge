---
title: "getInsightsMetadata(ciName, dataspace)"
domain: apex-reference
topic: getinsightsmetadataciname-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getInsightsMetadata, ciName, dataspace, Get, metadata, Calculated, Insight, object, specify, data, space., Metadata, includes, dimensions, measures., API, Version, Requires, Chatter, Signature]
---

# getInsightsMetadata(ciName, dataspace)

> Get metadata for a Calculated Insight object and specify the data space. Metadata
        includes dimensions and measures.

### getInsightsMetadata(ciName, dataspace)

Get metadata for a Calculated Insight object and specify the data space. Metadata includes dimensions and measures.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getInsightsMetadata(String ciName, String dataspace)

#### Parameters

ciName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the Calculated Insight object, for example, IndividualChildrenCount\_\_cio.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")