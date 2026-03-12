---
title: "CapabilitiesResult"
domain: service-connector-api-developer-guide
topic: capabilitiesresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.516Z
estimatedTokens: 873
keywords: [CapabilitiesResult, result, rep, capabilities, Availability, Functions]
---

# CapabilitiesResult

> Represents the result type for the rep
        capabilities.

# CapabilitiesResult

Represents the result type for the rep capabilities.

## Availability

This object is available in API version 61.0 and earlier. In API version 62.0 and later, use [SharedCapabilitiesResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_sharedcapabilitiesresult.htm "Represents the result type for the rep capabilities that are shared across partner telephony and Messaging.") or [VoiceCapabilitiesResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_voicecapabilitiesresult.htm "Represents the result type for the rep capabilities for Voice.") instead.

## Constructor

new CapabilitiesResult(param)

## Functions Where Used

-   [getCapabilities()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getcapabilities.htm "Get the partner telephony capabilities.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with the capabilities result. |
| param.debugEnabled | TypebooleanDescriptionIndicates whether the rep can download logs. |
| param.hasAgentAvailability | TypebooleanDescriptionIndicates whether the connector provides rep availability for phone book contacts or reps in the Messaging transfer rep list. If this parameter is false, Salesforce tries to calculate availability for contacts of type Agent and the value specified in Contact.availability is ignored. |
| param.hasBlindTransfer | TypebooleanDescriptionIndicates whether the vendor supports blind transfer. The default value is false. |
| param.hasContactSearch | TypebooleanDescriptionIndicates whether the vendor supports contact search. |
| param.hasMerge | TypebooleanDescriptionIndicates whether merge is supported. |
| param.hasMute | TypebooleanDescriptionIndicates whether mute is supported. |
| param.hasPendingStatusChange | TypebooleanDescriptionIndicates whether the pending status change behavior is enabled. |
| param.hasPhoneBook | TypebooleanDescriptionIndicates whether rep-to-rep and rep-to-queue calls are enabled in the Omni-Channel widget. The default value is false. |
| param.hasQueueWaitTime | TypebooleanDescriptionIndicates whether Salesforce or the partner provider for telephony, Messaging, or Contact Center as a Service (CCaaS) calculates estimated wait time values. If this parameter is false, Salesforce calculates the estimated wait times. If this parameter is true, the partner provider calculates the estimated wait times. The default value is false. |
| param.hasRecord | TypebooleanDescriptionIndicates whether recording is supported. |
| param.hasSupervisorBargeIn | TypebooleanDescriptionIndicates whether the supervisor can barge in. The default value is false. |
| param.hasSupervisorListenIn | TypebooleanDescriptionIndicates whether the supervisor can listen in. |
| param.hasSwap | TypebooleanDescriptionIndicates whether swap is supported. |
| param.hasTransferToOmniFlow | TypebooleanDescriptionIndicates whether the call can be transferred to an Omni-Channel flow. The default value is false. |
| param.signedRecordingDuration | TypestringDescriptionThe signed recording duration. |
| param.signedRecordingUrl | TypestringDescriptionThe signed recording URL. |
| param.supportsMos | TypebooleanDescriptionIndicates whether the vendor supports MOS scores. |

## Example

```

```

## Code Examples

```
new CapabilitiesResult({
    hasMute: true,
    hasMerge: true,
    hasRecord: true,
    hasSwap:  true,
    hasSignedRecordingUrl: false,
    hasContactSearch: true,
    supportsMos: true,
    hasAgentAvailability: true,
    hasQueueWaitTime: true,
    hasSupervisorListenIn: true,
    hasSupervisorBargeIn: false,
    debugEnabled: true,
    hasBlindTransfer: true,
    hasTransferToOmniFlow: true,
    signedRecordingUrl: null,
    signedRecordingDuration: null
});
```

## Related Topics

- SharedCapabilitiesResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_sharedcapabilitiesresult.htm)
- VoiceCapabilitiesResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_voicecapabilitiesresult.htm)
- getCapabilities() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getcapabilities.htm)
