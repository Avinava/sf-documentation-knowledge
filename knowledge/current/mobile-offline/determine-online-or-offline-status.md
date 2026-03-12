---
title: "Determine Online or Offline Status"
domain: mobile-offline
topic: determine-online-or-offline-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.702Z
estimatedTokens: 259
keywords: [Determine, Online, Offline, Status, Salesforce, Mobile, app, Service, Lightning, Web, Components, generally, don’t, mechanism, detecting]
---

# Determine Online or Offline Status

> The Salesforce Mobile app, Field Service Mobile app, and Lightning Web Components
  generally, don’t have a supported mechanism for detecting whether a device is online or not.
   This is by design.

# Determine Online or Offline Status

The Salesforce Mobile app, Field Service Mobile app, and Lightning Web Components generally, don’t have a supported mechanism for detecting whether a device is online or not. **This is by design.**

Online vs. offline connectivity is dynamic, and the signal given to the app from the mobile operating system is notoriously unreliable. This lack of a clear signal is because the state of connectivity changes frequently. Connectivity isn’t a simple on/off switch. There’s a range, from totally offline, to spotty, to slow-but-solid, and all the way up to faster than wired speed in the best circumstances. There’s no good way to know if an action that requires a network connection will succeed or fail, except by attempting it.

In general, our design goal is that LWCs work offline first, and treat being offline as a normal condition, not a failure. When a network request doesn’t succeed, the condition is handled as gracefully as possible. We recommend your components adhere to this practice.
