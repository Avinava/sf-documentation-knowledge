---
title: "ConnectApi.ContactPointSourceInput"
domain: apex-reference
topic: connectapicontactpointsourceinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.675Z
estimatedTokens: 158
keywords: [ConnectApi.ContactPointSourceInput, Represents, configuration, input, contact, point, sources.]
---

# ConnectApi.ContactPointSourceInput

> Represents the configuration input for contact point sources.

# ConnectApi.ContactPointSourceInput

Represents the configuration input for contact point sources.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataSourceId | String | Record ID of the data source. |  | 60.0 |
| dataSourcePreference | ContactPointPrefEnum | Type of contact point.ContactPointPrefAnyContactPointPrefBusinessContactPointPrefPersonalContactPointPrefPrimary |  | 60.0 |
| dataSourcePriority | Integer | Priority of the data source. |  | 60.0 |
| id | String | ID of the data source. |  | 60.0 |
| name | String | Name of the data source. |  | 60.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ContactPointPrefEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
