---
title: "customError"
domain: service-connector-api-developer-guide
topic: customerror
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.539Z
estimatedTokens: 1042
keywords: [customError, custom, error, Functions]
---

# customError

> Represents a custom error.

# customError

Represents a custom error.

## Constructor

new CustomError(param)

## Functions Where Used

-   [acceptCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [addParticipant](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [conference](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [declineCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [dial](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [endCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [getAgentStatus](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [getPhoneContacts](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [hold](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [mute](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [pauseRecording](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [resume](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [resumeRecording](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [setAgentConfig](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [setAgentStatus](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [superviseCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [supervisorBargeIn](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [supervisorDisconnect](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")
-   [unmute](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm "Accept a call.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionContains the parameters associated with the custom error message. |
| param.labelName | TypestringDescriptionThe name of the custom label in your org. This name is defined when you create the custom label for the error message. |
| param.namespace | TypeCallAttributesDescriptionThe alphanumeric identifier of your Salesforce org’s namespace prefix. The namespace is a part of the label that makes up the required full name used for managed packages. The full name is <namespace.labelName>. If you don’t have a namespace prefix, set this value to C . |
| param.message | TypeCallInfoDescriptionOptional. Additional details about the message for logging purposes. This field is optional and is not exposed. |

## Related Topics

- acceptCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- addParticipant (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- conference (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- declineCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- dial (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- endCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- getAgentStatus (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- getPhoneContacts (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- hold (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- mute (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
