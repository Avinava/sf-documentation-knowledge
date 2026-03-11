---
title: "Custom Settings Methods"
domain: apex-reference
topic: custom-settings-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.955Z
keywords: [Custom, Settings, Methods, Returns, custom, setting, data, set, specified, profile, ID., getValues, profileId, Signature, Parameters, Return, Value, Usage]
---

# Custom Settings Methods

> Returns the custom setting data set for the specified profile
ID.

### getValues(profileId)

Returns the custom setting data set for the specified profile ID.

#### Signature

public CustomSetting\_\_c getValues(ID profileId)

#### Parameters

profileId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: CustomSetting\_\_c

#### Usage

Use this if you only want the subset of custom setting data that has been defined at the profile level. For example, suppose you have a custom setting field that has been assigned a value of "alpha" at the organizational level, but has no value assigned at the user or profile level. Using getValues(ProfileId) returns null for this custom setting field.