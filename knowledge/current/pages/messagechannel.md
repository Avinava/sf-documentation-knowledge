---
title: "$MessageChannel"
domain: pages
topic: messagechannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.385Z
estimatedTokens: 66
keywords: [$MessageChannel, merge, provide, access, message, channel, defined, organization, Usage, Examples]
---

# $MessageChannel

> A global merge field type to provide access to a message channel defined in your
  organization.

# $MessageChannel

A global merge field type to provide access to a message channel defined in your organization.

## Usage

Use this expression in your Visualforce page to access a message channel and use the Lightning Message Service APIs.

## Examples

```

```

## Code Examples

```
<apex:page>
    <script>
        // Load the MessageChannel token in a variable
        var SAMPLEMC = "{!$MessageChannel.SampleMessageChannel__c}";
        function handleClick() {
            const payload = {
                recordId: "some string",
                recordData: {value: "some value"}
            }
            sforce.one.publish(SAMPLEMC, payload);
        }
    </script>
    <div>
        <p>Publish SampleMessageChannel</p>
        <button onclick="handleClick()">Publish</button>
    </div>
</apex:page>
```
