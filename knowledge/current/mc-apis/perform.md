---
title: "Perform"
domain: mc-apis
topic: perform
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.098Z
estimatedTokens: 566
keywords: [Perform, manage, asynchronous, processes, sending, email, importing, subscribers, starting, import, definition, Actions, Items]
---

> Use the Perform method to manage asynchronous processes, like sending email, importing subscribers, or starting an import definition.

# Perform

Use the Perform method to manage asynchronous processes, like sending email, importing subscribers, or starting an import definition.

> When using the Perform method as part of an email send definition, you can override certain aspects of the SenderProfile object.

## C# Syntax

```
PerformResult[] perform = Perform(Options, Action, Definitions, OverallStatus, OverallStatusMessage, RequestID)
```

## Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| Action | String | Specifies an action to perform on one or many objects. See the table below for supported perform actions. |
| Definitions | APIObject[] | Specifies a collection of interactions to act upon. |
| Options | PerformOptions | Optionally specifies more processing options. |
| OverallStatus | String | Specifies the overall status of the request. |
| OverallStatusMessage | String | Specifies the overall status message of the request. |
| RequestID | String | Marketing Cloud's unique identifier for every request. |

### Supported Perform Actions

-   AudienceDefinition
    -   build
    -   clone
    -   totalcount
    -   count
-   AudienceSegmentDefinition
    -   Count
-   Campaign
    -   start
    -   stop
    -   cancel (reserved for future use)
    -   pause (reserved for future use)
-   ContentValidation
    -   validate
-   DataExtractActivity
    -   start
-   EmailSendDefinition
    -   start
    -   test
    -   GetMaxCount
    -   stop (reserved for future use)
    -   pause (reserved for future use)
    -   restart (reserved for future use)
-   ExtractDefinition
    -   start
-   FileTransferActivity
    -   start
-   FileTrigger
    -   start
-   FilterActivity
    -   start
-   GroupDefinition
    -   start
-   ImportDefinition
    -   start
-   MessageSendActivity
    -   start
-   PlatformApplication
    -   publish
    -   deploy
-   ProgramManifestTemplate
    -   start
-   Send
    -   If ID property is specified
        -   pause
        -   resume
        -   cancel
    -   If no ID property is specified, the API ignores the Action parameter.
-   SMSSendActivity
    -   start
-   SystemEntityOperation
    -   start

## Related Items

[SenderProfile Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/senderprofile.htm)

## Related Topics

- SenderProfile Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/senderprofile.htm)
