---
title: "getOneClickPost()"
domain: apex-reference
topic: getoneclickpost
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.284Z
keywords: [getOneClickPost, Optional., Returns, boolean, value, based, set, setOneClickPost, method., Default, false., Signature, Parameters, Return, Value, Usage]
---

# getOneClickPost()

> Optional. Returns a boolean value based on the value set by the setOneClickPost method. Default is false.

### getOneClickPost()

Optional. Returns a boolean value based on the value set by the setOneClickPost method. Default is false.

#### Signature

public Boolean getOneClickPost()

#### Parameters

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Invoke the setOneClickPostmethod before using getOneClickPost. The value of getOneClickPost will be false if the setOneClickPostmethod is set to true only after invoking the setUnsubscribeUrls method.