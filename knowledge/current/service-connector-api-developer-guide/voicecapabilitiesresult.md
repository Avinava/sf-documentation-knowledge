---
title: "VoiceCapabilitiesResult"
domain: service-connector-api-developer-guide
topic: voicecapabilitiesresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.635Z
estimatedTokens: 737
keywords: [VoiceCapabilitiesResult, result, rep, capabilities, Voice, Functions]
---

# VoiceCapabilitiesResult

> Represents the result type for the rep capabilities for
        Voice.

# VoiceCapabilitiesResult

Represents the result type for the rep capabilities for Voice.

## Constructor

new VoiceCapabilitiesResult(param)

## Functions Where Used

-   [getVoiceCapabilities()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm "Get the partner telephony capabilities.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with the Voice capabilities result. |
| param.hasBlindTransfer | TypebooleanDescriptionIndicates whether the vendor supports blind transfer. The default value is false. |
| param.hasConsult | TypebooleanDescriptionIndicates whether a rep can make consult calls (true) or not (false). The default is false. |
| param.hasMerge | TypebooleanDescriptionIndicates whether merge is supported. |
| param.hasMute | TypebooleanDescriptionIndicates whether mute is supported. |
| param.hasPhoneBook | TypebooleanDescriptionIndicates whether rep-to-rep and rep-to-queue calls are enabled in the Omni-Channel widget. The default value is false. |
| param.hasRecord | TypebooleanDescriptionIndicates whether recording is supported. |
| param.hasSupervisorBargeIn | TypebooleanDescriptionIndicates whether the supervisor can barge in. The default value is false. |
| param.hasSupervisorListenIn | TypebooleanDescriptionIndicates whether the supervisor can listen in. |
| param.hasSwap | TypebooleanDescriptionIndicates whether swap is supported. |
| param.signedRecordingDuration | TypestringDescriptionThe signed recording duration. |
| param.signedRecordingUrl | TypestringDescriptionThe signed recording URL. |
| param.supportsMos | TypebooleanDescriptionIndicates whether the vendor supports MOS scores. |
| param.isDialPadDisabled | TypebooleanDescriptionIndicates whether the dial pad in the softphone is disabled (true) or enabled (false) when the rep is online and there are no active calls. By default, this value is false, meaning the dial pad remains enabled in the softphone when the rep is online and there are no active calls. If true, the dial pad is disabled in the softphone when the rep is online and there are no active calls. |
| param.isPhoneBookDisabled | TypebooleanDescriptionIndicates whether the phone book in the softphone is disabled (true) or enabled (false) when the rep is online and there are no active calls. By default, this value is false, meaning the phone book remains enabled when the rep is online and there are no active calls. If true, the phone book is disabled in the softphone when the rep is online and there are no active calls. |
| param.isHidSupported | TypebooleanDescriptionIndicates whether the Human Interface Device (HID) headset controls are enabled (true) or disabled (false). By default, this value is false, meaning the headset controls are disabled. If true, headset controls are enabled. |

## Example

```

```

## Code Examples

```
new VoiceCapabilitiesResult({
    hasMute: true,
    hasMerge: true,
    hasRecord: true,
    hasSwap:  true,
    hasSignedRecordingUrl: false,
    isDialPadDisabled: false,
    isHidSupported: false,
    isPhoneBookDisabled: false, 
    supportsMos: true,
    hasSupervisorListenIn: true,
    hasSupervisorBargeIn: false,
    hasBlindTransfer: true,
    signedRecordingUrl: null,
    signedRecordingDuration: null
});
```

## Related Topics

- getVoiceCapabilities() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm)
