---
title: "start()"
domain: apex-reference
topic: start
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.462Z
keywords: [start, Starts, instance, interview, autolaunched, user, provisioning, flow., Signature, Return, Value, Usage]
---

# start()

> Starts an instance (interview) for an autolaunched or user
            provisioning flow.

### start()

Starts an instance (interview) for an autolaunched or user provisioning flow.

#### Signature

public Void start()

#### Return Value

Type: Void

#### Usage

This method can be used only with flows that have one of these types.

-   Autolaunched Flow
-   User Provisioning Flow

For details, see “[Flow Types](https://help.salesforce.com/articleView?id=flow_concepts_type.htm&language=en_US "HTML (New Window)")” in Salesforce Help.

When a flow user invokes an autolaunched flow, the active flow version runs. If there’s no active version, the latest version runs. When a flow admin invokes a flow, the latest version always runs.