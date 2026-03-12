---
title: "Supported Validations for DBT Segments"
domain: apex-guide
topic: supported-validations-for-dbt-segments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.489Z
estimatedTokens: 284
keywords: [Supported, Validations, DBT, Segments, creating, updating, segment, ConnectApi.CdpSegmentInput, subject, SQL, validations.]
---

# Supported Validations for DBT Segments

> When creating or updating a segment, the ConnectApi.CdpSegmentInput class is subject to
    some SQL validations.

# Supported Validations for DBT Segments

When creating or updating a segment, the ConnectApi.CdpSegmentInput class is subject to some SQL validations.

You can create a segment using the [createSegment(input)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_createSegment_4 "HTML (New Window)") method with the ConnectApi.CdpSegmentInput class. Similarly, you can update a segment using the [updateSegment(segmentApiName, input)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_updateSegment_4 "HTML (New Window)") method with the same input class. The [ConnectApi.CdpSegmentDbtModelInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_cdp_segment_dbt_model.htm "HTML (New Window)") input class, which is nested in the ConnectApi.CdpSegmentInput class, provides validation for the SQL.

The sql property of the ConnectApi.CdpSegmentDbtModelInput is subject to these validations.
