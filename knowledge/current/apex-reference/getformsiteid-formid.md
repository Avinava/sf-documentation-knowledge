---
title: "getForm(siteId, formId)"
domain: apex-reference
topic: getformsiteid-formid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.334Z
keywords: [getForm, siteId, formId, Get, marketing, integration, form, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getForm(siteId, formId)

> Get a marketing integration form for an Experience Cloud
    site.

### getForm(siteId, formId)

Get a marketing integration form for an Experience Cloud site.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Form getForm(String siteId, String formId)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

formId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the form.

#### Return Value

Type: [ConnectApi.Form](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_form.htm "Marketing integration form.")