---
title: "ActiveCallsResult"
domain: service-connector-api-developer-guide
topic: activecallsresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.464Z
estimatedTokens: 137
keywords: [ActiveCallsResult, result, getting, active, calls, Functions]
---

# ActiveCallsResult

> Represents the result when getting a list of active
        calls.

# ActiveCallsResult

Represents the result when getting a list of active calls.

## Constructor

new ActiveCallsResult(param)

## Functions Where Used

-   [getActiveCalls()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getactivecalls.htm "Get a list of active call.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionThe hold toggle result. |
| param.activeCalls | TypeArray<PhoneCall>DescriptionA list of phone calls that are active. |

## Related Topics

- getActiveCalls() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getactivecalls.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)
