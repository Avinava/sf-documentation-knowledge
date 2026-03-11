---
title: "getLocationUrl()"
domain: apex-reference
topic: getlocationurl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.120Z
keywords: [getLocationUrl, Signature, Return, Value, Usage]
---

# getLocationUrl()

# getLocationUrl()

Retrieves the location URL of the canvas app.

## Signature

public String getLocationUrl()

## Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Usage

Use this method to obtain the URL of the page where the user accessed the canvas app. For example, if the user accessed your app by clicking a link on the Chatter tab, this method returns the URL of the Chatter tab, which would be similar to ‘https://MyDomainName.my.salesforce.com/\_ui/core/chatter/ui/ChatterPage’.