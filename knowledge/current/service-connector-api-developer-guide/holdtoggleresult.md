---
title: "HoldToggleResult"
domain: service-connector-api-developer-guide
topic: holdtoggleresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.554Z
estimatedTokens: 515
keywords: [HoldToggleResult, result, toggling, hold, state, call, Functions]
---

# HoldToggleResult

> Represents the result when toggling the hold state for a
        call.

# HoldToggleResult

Represents the result when toggling the hold state for a call.

## Constructor

new HoldToggleResult(param)

## Functions Where Used

-   [conference()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_conference.htm "Create a conference call from multiple calls. If Multiparty Calls is enabled, this method removes a rep from a consult call and adds them to a multiparty call.")
-   [hold()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_holdcall.htm "Put a call on hold.")
-   [resume()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_resume.htm "Resume a call that is on hold.")
-   [swap()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_swap.htm "Swap one call with another. When a call swap occurs, the participant on hold is resumed and the resumed participant is placed on hold.")
-   [publishEvent()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionThe hold toggle result. |
| param.isThirdPartyOnHold | TypebooleanDescriptionIndicates whether a transferred call is on hold. |
| param.isCallMerged | TypebooleanDescriptionIndicates whether a consult call has been merged with a multiparty call. |
| param.isCustomerOnHold | TypebooleanDescriptionIndicates whether the customer call is on hold. |
| param.calls | TypeArray<PhoneCall>DescriptionOptional. A list of phone calls associated with this result. Required if Multiparty Calls are enabled. |

## Related Topics

- conference() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_conference.htm)
- hold() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_holdcall.htm)
- resume() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_resume.htm)
- swap() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_swap.htm)
- publishEvent() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)
