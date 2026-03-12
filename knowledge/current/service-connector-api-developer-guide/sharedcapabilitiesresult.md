---
title: "SharedCapabilitiesResult"
domain: service-connector-api-developer-guide
topic: sharedcapabilitiesresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.612Z
estimatedTokens: 541
keywords: [SharedCapabilitiesResult, result, rep, capabilities, shared, across, partner, telephony, Messaging, Functions]
---

# SharedCapabilitiesResult

> Represents the result type for the rep capabilities that
        are shared across partner telephony and Messaging.

# SharedCapabilitiesResult

Represents the result type for the rep capabilities that are shared across partner telephony and Messaging.

## Constructor

new SharedCapabilitiesResult(param)

## Functions Where Used

-   [getSharedCapabilities()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getsharedcapabilities.htm "Get the capabilities that are shared across partner telephony and Messaging channels for Bring Your Own Channel and Bring Your Own Channel for CCaaS.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with the shared capabilities result. |
| param.debugEnabled | TypebooleanDescriptionIndicates whether the rep can download logs. |
| param.hasAgentAvailability | TypebooleanDescriptionIndicates whether the connector provides rep availability for phone book contacts or reps in the Messaging transfer rep list. If this parameter is false, Salesforce tries to calculate availability for contacts of type Agent and the value specified in Contact.availability is ignored. |
| param.hasAutoAcceptEnabled | TypebooleanDescriptionIndicates whether the rep has auto accept enabled. |
| param.hasContactSearch | TypebooleanDescriptionIndicates whether the vendor supports contact search. |
| param.hasPendingStatusChange | TypebooleanDescriptionIndicates whether the pending status change behavior is enabled. |
| param.hasQueueWaitTime | TypebooleanDescriptionIndicates whether Salesforce or the partner provider for telephony, Messaging, or Contact Center as a Service (CCaaS) calculates estimated wait time values. If this parameter is false, Salesforce calculates the estimated wait times. If this parameter is true, the partner provider calculates the estimated wait times. The default value is false. |
| param.hasSFDCPendingState | TypebooleanDescriptionIndicates whether Amazon Connect has sfdc_pending state. |
| param.hasTransferToOmniFlow | TypebooleanDescriptionIndicates whether the voice call or Messaging session can be transferred to an Omni-Channel flow. The default value is false. |

## Example

```

```

## Code Examples

```
new SharedCapabilitiesResult({
    hasContactSearch: true,
    hasAgentAvailability: true,
    hasQueueWaitTime: true,
    debugEnabled: true,
    hasTransferToOmniFlow: true
});
```

## Related Topics

- getSharedCapabilities() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getsharedcapabilities.htm)
