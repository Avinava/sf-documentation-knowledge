---
title: "ConnectApi.LeadInput"
domain: apex-reference
topic: connectapileadinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.031Z
estimatedTokens: 168
keywords: [ConnectApi.LeadInput, Contains, information, lead, guest, user.]
---

# ConnectApi.LeadInput

> Contains information about a lead or guest user.

# ConnectApi.LeadInput

Contains information about a lead or guest user.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| company | String | The company of the lead. | Optional | 53.0 |
| email | String | The email address of the lead. | Optional | 53.0 |
| extendedFields | List<ConnectApi.ExtendedFieldInput> | Use to add values to any of the fields, including custom fields. | Optional | 53.0 |
| firstName | String | The first name of the lead. | Optional | 53.0 |
| lastName | String | The last name of the lead. | Optional | 53.0 |
| phone | String | The phone number of the lead. | Optional | 53.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ExtendedFieldInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_extended_field.htm)
