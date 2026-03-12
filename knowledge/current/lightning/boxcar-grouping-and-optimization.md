---
title: "Boxcar Grouping and Optimization"
domain: lightning
topic: boxcar-grouping-and-optimization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.577Z
estimatedTokens: 1186
keywords: [Boxcar, Grouping, Optimization, client, Aura, Framework, uses, process, boxcar’ing, group, together, multiple, server-side, controller, actions]
---

# Boxcar Grouping and Optimization

> On the client, the Aura Framework uses a process called boxcar’ing to group
  together multiple server-side controller actions into one network request. Boxcar’ing requests
  uses network resources more efficiently than sending each action separately.

# Boxcar Grouping and Optimization

On the client, the Aura Framework uses a process called *boxcar’ing* to group together multiple server-side controller actions into one network request. Boxcar’ing requests uses network resources more efficiently than sending each action separately.

Boxcar’ing of requests is handled automatically by the framework. Likewise, the framework determines when a boxcar is ready to be sent to the server, automatically managing network resources ([XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), or XHR).

Beginning in Winter ’26, there are two boxcar optimization strategies.

-   Dynamic (new in Winter ’26)
-   Standard

## Dynamic Boxcar Optimization

Dynamic boxcar optimization is the new default way of grouping Aura actions into boxcars. It’s designed to improve the performance of all Aura applications, and is especially effective with highly customized pages and heavy action loads.

Dynamic boxcar optimization limits the number of actions per boxcar based on the number of available XHR slots. It distributes actions more evenly across available resources, allowing more parallel execution and improving overall responsiveness.

Although more actions from different components can execute in parallel, dynamic boxcar optimization ensures that actions from the same component are kept together to preserve functional dependencies. The overall result is more efficient use of network resources, faster response times, and a better user experience for Aura applications.

## Standard Boxcar Optimization

With standard boxcar optimization, all queued actions could be combined into a single network request (XHR), with no upper limit on the number of Aura actions in a single boxcar. This could lead to performance bottlenecks, especially if one slow action delayed the response for all others.

Standard boxcar’ing works fine for most Aura applications. However, for some complex customization patterns, or in cases where it’s impossible to separate long-running requests from shorter requests due to dependencies, standard boxcar’ing can be overwhelmed by the number of requests added to a single boxcar. This bottleneck can lead to components and pages that behave poorly, with undesirable lag times between loading a page, taking an action, and seeing results.

## Choose a Boxcar Optimization Strategy

Recall that the framework doesn’t guarantee the order of execution of action callbacks. XHR responses can return in a different order than the order in which the XHR requests were sent due to server processing time. This behavior is intentional and not new.

However, the improved performance of dynamic boxcar optimization can create greater variance in the order in which Aura actions are sent to and returned from Salesforce. These timing changes have the potential to expose logic errors in your component code, where calls that depend on synchronous execution no longer run in the same, specific order.

That is, standard boxcar optimization very often produced sequential behavior, even though the framework doesn’t *guarantee* it. Your code can have logic errors that depend on this sequential behavior, which you’ve never had a problem with previously. Dynamic boxcar optimization, while performing better, can expose those software defects in real world use.

If you discover that you have implicit sequential dependencies in your component code, you have two options.

-   **Fix the problem.** [Manage Synchronous Action Dependencies](atlas.en-us.lightning.meta/lightning/controllers_server_actions_manage_dependencies.htm "When your code has dependencies that require a prior action to complete, don’t call the dependent actions until the earlier action completes. For example, render a dependent element conditionally, based on the result of the earlier action being available. Or call the dependent action from the earlier action’s callback function. This ensures that the dependent call isn’t made until after the earlier call completes.") explains the issue in more detail, and provides code-based solutions.
-   **Disable dynamic boxcar optimization.** This resolution is quick to implement in Setup, but you lose the benefits of dynamic boxcar optimization on **all** of your components, not just the components with problems. See [Disable Dynamic Boxcar Optimization for Aura Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_disable_boxcar_optimization.htm "Dynamic boxcar optimization improves performance for most Lightning components and apps, including Lightning Experience itself. If your org has components that are adversely affected by dynamic boxcar optimization, you can disable it for your org in Setup.").

## Related Topics

- Manage Synchronous Action Dependencies (atlas.en-us.lightning.meta/lightning/controllers_server_actions_manage_dependencies.htm)
- Disable Dynamic Boxcar Optimization for Aura Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_disable_boxcar_optimization.htm)
