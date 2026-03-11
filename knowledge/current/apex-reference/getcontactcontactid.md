---
title: "getContact(contactId)"
domain: apex-reference
topic: getcontactcontactid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.070Z
keywords: [getContact, contactId, Get, contact., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getContact(contactId)

> Get a contact.

### getContact(contactId)

Get a contact.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudContact getContact(String contactId)

#### Parameters

contactId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a contact in the Data.com database.

#### Return Value

Type: [ConnectApi.DatacloudContact](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_contact.htm#apex_connectapi_output_datacloud_contact "Information about a Data.com contact.")