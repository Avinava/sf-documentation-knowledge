---
title: "callApex()"
domain: lightning
topic: callapex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.539Z
estimatedTokens: 144
keywords: [callApex, Apex, call, Sample, Arguments]
---

# callApex()

> Makes an Apex call.

# callApex()

Makes an Apex call.

## Sample

Used within a JavaScript app uploaded as a static resource and referenced by lightning:container, this example calls the Apex method getAccount.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| fullyQualifiedApexMethodName | string | The name of the Apex method. |
| apexMethodParameters | array | A JSON array of arguments for the Apex method. |
| callbackFunction | function | A callback function. |
| apexCallConfiguration | array | Configuration parameters for the Apex call. |

## Response

None.

## Code Examples

```
callApex() {
    LCC.callApex("lcc1.ApexController.getAccount",
                 this.state.name,
                 this.handleAccountQueryResponse,
                 {escape: true});
  }
```
