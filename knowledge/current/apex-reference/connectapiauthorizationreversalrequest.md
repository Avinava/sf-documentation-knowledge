---
title: "ConnectApi.AuthorizationReversalRequest"
domain: apex-reference
topic: connectapiauthorizationreversalrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.351Z
estimatedTokens: 216
keywords: [ConnectApi.AuthorizationReversalRequest, Authorization, reversal, input, consumed, authorization, service.]
---

# ConnectApi.AuthorizationReversalRequest

> Authorization reversal input consumed by authorization reversal service.

# ConnectApi.AuthorizationReversalRequest

Authorization reversal input consumed by authorization reversal service.

Subclass of [ConnectApi.BaseRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm "Base parameters for making a request to the payment gateway.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account for the payment authorization reversal. Must match the payment authorization's account. |  | 51.0 |
| amount | Double | Amount of adjustment applied to the payment authorization. |  | 51.0 |
| comments | String | Users can add comments to provide additional details about a record. Maximum of 1,000 characters. |  | 51.0 |
| effectiveDate | Datetime | Date that the adjustment takes effect on the authorization. |  | 51.0 |

## Related Topics

- ConnectApi.BaseRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
