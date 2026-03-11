---
title: "getVersion()"
domain: apex-reference
topic: getversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.097Z
keywords: [getVersion, Signature, Return, Value, Usage]
---

# getVersion()

# getVersion()

Retrieves the current version of the canvas app.

## Signature

public String getVersion()

## Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Usage

Use this method to get the current version of the canvas app. This value changes after you update and republish a canvas app in an organization. If you are in a Developer Edition organization, using this method always returns the latest version.