---
title: "ConnectApi.ContactPointConfig"
domain: apex-reference
topic: connectapicontactpointconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.415Z
keywords: [ConnectApi.ContactPointConfig]
---

# ConnectApi.ContactPointConfig

# ConnectApi.ContactPointConfig

Represents an activation contact point configuration output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activationContactPointFieldConfig | ConnectApi.ActivationContactPointsFieldConfig | Contact point field configurations. | 60.0 |
| activationContactPointSourcesConfig | ConnectApi.ActivationContactPointsSourceConfig | Contact point source configurations. | 60.0 |
| contactPointFilterExpression | ConnectApi.ContactPointFilterExpression | Contact point filter expression. | 60.0 |
| contactPointPath | String | Contact point path. | 60.0 |
| contactPointType | ContactPointTypeRepresentationEnum | Type of contact point.EmailMaidOttPhonePushSubscriber_Key_EmailSubscriber_Key_PhoneWhatsApp | 60.0 |
| entityId | String | ID of the entity. | 60.0 |
| entityName | String | Name of the entity. | 60.0 |
| queryPathConfigList | List<ConnectApi.​QueryPathConfigList> | List of query path configurations. | 60.0 |