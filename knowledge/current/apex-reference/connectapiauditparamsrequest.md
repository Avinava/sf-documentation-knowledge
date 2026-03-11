---
title: "ConnectApi.AuditParamsRequest"
domain: apex-reference
topic: connectapiauditparamsrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.797Z
keywords: [ConnectApi.AuditParamsRequest]
---

# ConnectApi.AuditParamsRequest

# ConnectApi.AuditParamsRequest

Audit Parameters input.

This class is abstract.

Superclass of [ConnectApi.BaseRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm "Base parameters for making a request to the payment gateway.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| email | String | Email of the client that made the request. | Optional | 50.0 |
| ipAddress | String | IP address of the client that made the request. | Optional | 50.0 |
| macAddress | String | Mac address of the client that made the request. | Optional | 50.0 |
| phone | String | Phone number of the client that made the request. | Optional | 50.0 |