---
title: "ConnectApi.ActivationContactPointInput"
domain: apex-reference
topic: connectapiactivationcontactpointinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.732Z
keywords: [ConnectApi.ActivationContactPointInput]
---

# ConnectApi.ActivationContactPointInput

# ConnectApi.ActivationContactPointInput

Represents the activation contact point input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributesConfig | List< ConnectApi.ContactPointAttributeInput> | Attributes for the contact point. |  | 60.0 |
| entityName | String | Entity name for the contact point. |  | 60.0 |
| externalPlatformHashMethod | String | External platform hash method for the contact point. |  | 60.0 |
| filterExpression | List< ConnectApi.DMOFilterInput> | Filter expression for the contact point. |  | 60.0 |
| queryPathConfig | List< ConnectApi.QueryPathInputConfig> | Query path configuration list. |  | 60.0 |
| sourcesConfig | List< ConnectApi.ContactPointSourceInput> | Source configurations for the contact point. |  | 60.0 |
| type | ContactPointTypeRepresentationEnum | Type of contact point.EmailMaidOttPhonePushSubscriber_Key_EmailSubscriber_Key_PhoneWhatsApp |  | 60.0 |