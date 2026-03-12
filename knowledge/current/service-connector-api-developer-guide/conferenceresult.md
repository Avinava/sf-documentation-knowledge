---
title: "ConferenceResult"
domain: service-connector-api-developer-guide
topic: conferenceresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.519Z
estimatedTokens: 187
keywords: [ConferenceResult, result, conference, function, Functions]
---

# ConferenceResult

> Represents the result for the conference() function.

# ConferenceResult

Represents the result for the conference() function.

## Constructor

new ConferenceResult(isThirdPartyOnHold, isCustomerOnHold)

## Functions Where Used

-   [conference()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_conference.htm "Create a conference call from multiple calls. If Multiparty Calls is enabled, this method removes a rep from a consult call and adds them to a multiparty call.")

## Parameters

| Field | Details |
| --- | --- |
| isThirdPartyOnHold | TypebooleanDescriptionIndicates whether the third-party participant of the call is on hold. |
| isCustomerOnHold | TypebooleanDescriptionIndicates whether the customer is on hold. |

## Related Topics

- conference() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_conference.htm)
