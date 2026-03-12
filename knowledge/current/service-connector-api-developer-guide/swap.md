---
title: "swap"
domain: service-connector-api-developer-guide
topic: swap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.457Z
estimatedTokens: 147
keywords: [swap, call, another, occurs, participant, hold, resumed, placed]
---

# swap

> Swap one call with another. When a call swap occurs,
            the participant on hold is resumed and the resumed participant is placed on
        hold.

# swap

Swap one call with another. When a call swap occurs, the participant on hold is resumed and the resumed participant is placed on hold.

## Signature

swap(call1, call2) → Promise.<[HoldToggleResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_holdtoggleresult.htm "Represents the result when toggling the hold state for a call.")\>

## Parameters

| Field | Details |
| --- | --- |
| call1 | TypePhoneCallDescriptionThe first call to swap. |
| call2 | TypePhoneCallDescriptionThe second call to swap. |

## Related Topics

- HoldToggleResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_holdtoggleresult.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)
