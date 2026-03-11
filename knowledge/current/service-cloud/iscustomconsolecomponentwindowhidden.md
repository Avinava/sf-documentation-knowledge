---
title: "isCustomConsoleComponentWindowHidden()"
domain: service-cloud
topic: iscustomconsolecomponentwindowhidden
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.078Z
keywords: [isCustomConsoleComponentWindowHidden, Note, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# isCustomConsoleComponentWindowHidden()

# isCustomConsoleComponentWindowHidden()

Determines if the application-level custom console component window is hidden. This method is available in API versions 25.0 through 31.0.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

If this method is called from a popped out component in a Salesforce console where multi-montior components is turned on, nothing will happen. Starting in API version 32.0, this method is no longer available and has been replaced by isCustomConsoleComponentHidden(). For more information, see “[isCustomConsoleComponentHidden()](atlas.en-us.api_console.meta/api_console/sforce_api_console_iscustomconsolecomponenthidden.htm "Determines if the application-level custom console component window is hidden. This method is available in API version 32.0 and later. In API version 31.0 and earlier, this method was called isCustomConsoleComponentWindowHidden().").”

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| hidden | boolean | true if the custom console component window is hidden; false if the custom console component window is visible. |
| success | boolean | true if returning the custom console component window visibility was successful; false if returning the custom console component window visibility wasn't successful. |