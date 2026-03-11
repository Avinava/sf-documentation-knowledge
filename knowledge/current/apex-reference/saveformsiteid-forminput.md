---
title: "saveForm(siteId, formInput)"
domain: apex-reference
topic: saveformsiteid-forminput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.334Z
keywords: [saveForm, siteId, formInput, Save, marketing, integration, form, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# saveForm(siteId, formInput)

> Save a marketing integration form for an Experience Cloud
    site.

### saveForm(siteId, formInput)

Save a marketing integration form for an Experience Cloud site.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Form saveForm(String siteId, ConnectApi.FormInput formInput)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

formInput

Type: [ConnectApi.FormInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_form.htm "Marketing integration form.")

A ConnectApi.FormInput object to save.

#### Return Value

Type: [ConnectApi.Form](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_form.htm "Marketing integration form.")

#### Usage

This method attempts to create a read-only data extension in Marketing Cloud Engagement. A Marketing Cloud Engagement admin can change the read-only setting. We recommend keeping the data extension as read-only to maintain schema consistency with the form.