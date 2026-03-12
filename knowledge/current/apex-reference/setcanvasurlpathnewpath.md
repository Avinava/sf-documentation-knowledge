---
title: "setCanvasUrlPath(newPath)"
domain: apex-reference
topic: setcanvasurlpathnewpath
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.322Z
estimatedTokens: 305
keywords: [setCanvasUrlPath, newPath, Overrides, URL, canvas, app, current, request., Usage]
---

# setCanvasUrlPath(newPath)

> Overrides the URL of the canvas app for the current
  request.

# setCanvasUrlPath(newPath)

Overrides the URL of the canvas app for the current request.

## Signature

public void setCanvasUrlPath(String newPath)

## Parameters

newPath

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The URL (not including domain) that you need to use to override the canvas app URL.

## Return Value

Type: Void

## Usage

Use this method to override the URL path and query string of the canvas app. Do not provide a fully qualified URL, because the provided URL string will be appended to the original canvas URL domain.

For example, if the current canvas app URL is https://myserver.com:6000/myAppPath and you call setCanvasUrlPath('/alternatePath/args?arg1=1&arg2=2'), the adjusted canvas app URL will be https://myserver.com:6000/alternatePath/args?arg1=1&arg2=2.

If the provided path results in a malformed URL, or a URL that exceeds 2,048 characters, a System.CanvasException will be thrown.

This method overrides the canvas app URL for the current request and does not permanently change the canvas app URL as configured in the UI for the Salesforce canvas app settings.

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
