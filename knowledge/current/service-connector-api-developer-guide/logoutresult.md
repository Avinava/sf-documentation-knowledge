---
title: "LogoutResult"
domain: service-connector-api-developer-guide
topic: logoutresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.563Z
estimatedTokens: 192
keywords: [LogoutResult, logout, result, Functions]
---

# LogoutResult

> Represents a logout result type.

# LogoutResult

Represents a logout result type.

## Constructor

new LogoutResult(param)

## Functions Where Used

-   [logout()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_logout.htm "Log out from the telephony system. You must implement this method, which is called when a rep logs out of the phone system from Omni-Channel.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with the result. |
| param.success | TypebooleanDescriptionIndicates whether the function succeeded. |
| param.loginFrameHeight | TypenumberDescriptionOptional. The height of the login/logout frame. If no value is provided, a default value of 350 is used. |

## Related Topics

- logout() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_logout.htm)
