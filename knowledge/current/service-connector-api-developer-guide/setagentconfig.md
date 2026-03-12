---
title: "setAgentConfig"
domain: service-connector-api-developer-guide
topic: setagentconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.449Z
estimatedTokens: 365
keywords: [setAgentConfig, configuration, rep, Examples, include, Omni-Channel, widget, loads, user, saves, their, settings]
---

# setAgentConfig

> Set configuration information for the rep. Examples of when
        this method is called include when the Omni-Channel widget loads and when the user saves
        their Omni-Channel widget settings.

# setAgentConfig

Set configuration information for the rep. Examples of when this method is called include when the Omni-Channel widget loads and when the user saves their Omni-Channel widget settings.

## Signature

setAgentConfig(config) → Promise.<[SetAgentConfigResult>](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_setagentconfigresult.htm "Represents the result for the setAgentConfig() function.")

## Parameters

Parameter values can be undefined or null.

| Field | Details |
| --- | --- |
| config | TypeobjectDescriptionRep configuration info. |
| config.hasMute | TypebooleanDescriptionIndicates whether mute is supported. |
| config.hasRecord | TypebooleanDescriptionIndicates whether recording is supported. |
| config.hasMerge | TypebooleanDescriptionIndicates whether merge is supported. |
| config.hasSwap | TypebooleanDescriptionIndicates whether swap is supported. |
| config.phones | TypeArray<string>DescriptionOptional. Supported phone types. Phone type value can be "SOFT_PHONE" or "DESK_PHONE". |
| config.selectedPhone | TypestringDescriptionSelected phone type. Phone type value can be "SOFT_PHONE" or "DESK_PHONE". |
| config.supportsMos | TypebooleanDescriptionIndicates whether Mean Opinion Score (MOS) is supported. |
| config.hidDeviceInfo | TypeHidDeviceDescriptionInformation about the selected HID device (such as headset) for the user.RequiredNo |

## Related Topics

- SetAgentConfigResult> (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_setagentconfigresult.htm)
- HidDevice (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_hiddevice.htm)
