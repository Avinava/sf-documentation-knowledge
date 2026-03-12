---
title: "Disable Dynamic Boxcar Optimization for Aura Actions"
domain: lightning
topic: disable-dynamic-boxcar-optimization-for-aura-actions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.587Z
estimatedTokens: 311
keywords: [Disable, Dynamic, Boxcar, Optimization, Aura, Actions, improves, performance, Lightning, components, apps, including, Experience, itself, org]
---

# Disable Dynamic Boxcar Optimization for Aura Actions

> Dynamic boxcar optimization improves performance for most Lightning components and apps,
  including Lightning Experience itself. If your org has components that are adversely affected by
  dynamic boxcar optimization, you can disable it for your org in Setup.

# Disable Dynamic Boxcar Optimization for Aura Actions

Dynamic boxcar optimization improves performance for most Lightning components and apps, including Lightning Experience itself. If your org has components that are adversely affected by dynamic boxcar optimization, you can disable it for your org in Setup.

Dynamic boxcar optimization was introduced in Winter ’26, and improves the performance of the Lightning Components Framework for all orgs. You should only disable it if your component code contains timing dependencies that depend on standard boxcar grouping. Treat such dependencies as software defects that need to be corrected.

1.  From Setup, in the Quick Find box, enter Session Settings, and then select **Security** | **Session Settings**.
2.  In the **Aura action Settings** section, check the **Disable new Aura boxcar mechanism that efficiently batches Aura actions across available XHR slots for optimal performance** option.
3.  Click **Save**.

We strongly recommend that you only disable dynamic boxcar optimization as a temporary measure while you correct your component code. Sequential or synchronous timing dependencies in your code are to be avoided, no matter which boxcar’ing strategy is enabled for your org.
