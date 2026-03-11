---
title: "LoadFormData(data)"
domain: apex-reference
topic: loadformdatadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.617Z
keywords: [LoadFormData, data, Creates, instance, class, running, tests, any, custom, Apex, classes, create, Preference, Manager., Signature, Parameters, Usage]
---

# LoadFormData(data)

> Creates an instance of the LoadFormData class for running tests on any custom Apex classes you create for
      Preference Manager.

### LoadFormData(data)

Creates an instance of the LoadFormData class for running tests on any custom Apex classes you create for Preference Manager.

#### Signature

public LoadFormData(Map<String,pref\_center.FieldProperties> data)

#### Parameters

data

Type: Map<String,pref\_center.FieldProperties>[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")

Maps preference form data from the field ID to the field properties.

#### Usage

This constructor is available in API version 56.0 and later.