---
title: "SupervisorHangupResult"
domain: service-connector-api-developer-guide
topic: supervisorhangupresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.661Z
estimatedTokens: 145
keywords: [SupervisorHangupResult, result, ended, supervisor, call, Functions]
---

# SupervisorHangupResult

> Represents a result type for an ended supervisor
        call.

# SupervisorHangupResult

Represents a result type for an ended supervisor call.

## Constructor

new SupervisorHangupResult(param)

## Functions Where Used

-   [supervisorDisconnect()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisordisconnect.htm "Disconnect a supervised call.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with the result. |
| param.calls | TypeArray<PhoneCall>DescriptionOne or more phone calls that ended. |

## Related Topics

- supervisorDisconnect() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisordisconnect.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)
