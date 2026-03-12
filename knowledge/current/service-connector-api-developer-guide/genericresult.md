---
title: "GenericResult"
domain: service-connector-api-developer-guide
topic: genericresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.543Z
estimatedTokens: 465
keywords: [GenericResult, generic, result, Connector, API, function, Functions]
---

# GenericResult

> Represents a generic result type for a Connector API
        function.

# GenericResult

Represents a generic result type for a Connector API function.

## Constructor

new GenericResult(param)

## Functions Where Used

-   [dial()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_dial.htm "Dial a contact.")
-   [logout()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_logout.htm "Log out from the telephony system. You must implement this method, which is called when a rep logs out of the phone system from Omni-Channel.")
-   [setAgentConfig()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentconfig.htm "Set configuration information for the rep. Examples of when this method is called include when the Omni-Channel widget loads and when the user saves their Omni-Channel widget settings.")
-   [setAgentStatus()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentstatus.htm "Set status information for the rep.")
-   [publishEvent()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with the logout result. |
| param.success | TypebooleanDescriptionIndicates whether the function succeeded. |
| param.loginFrameHeight | TypenumberDescriptionOptional. Custom login page iframe height. |

## Example

```

```

## Code Examples

```
new GenericResult({
  success: true
})
```

## Related Topics

- dial() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_dial.htm)
- logout() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_logout.htm)
- setAgentConfig() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentconfig.htm)
- setAgentStatus() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentstatus.htm)
- publishEvent() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
