---
title: "Agent Availability Check Always Fails"
domain: service-sdk-ios
topic: agent-availability-check-always-fails
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.904Z
estimatedTokens: 138
keywords: [Agent, Availability, Check, Always, Fails, look]
---

> What to look into when agent availability fails.

# Agent Availability Check Always Fails

What to look into when agent availability fails.

If you use the [Permitted Domains setting in your Chat deployment](https://help.salesforce.com/articleView?id=live_agent_deployment_settings.htm&type=0&language=en_US), you’ll get unreliable information from the chat availability check in the SDK. For instance, the agent availability status may always return false. If you want to use Permitted Domains for your web chat deployment, we strongly advise that you create a separate deployment for the Service SDK.
