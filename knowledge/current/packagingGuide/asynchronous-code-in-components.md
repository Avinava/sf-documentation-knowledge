---
title: "Asynchronous Code in Components"
domain: packagingGuide
topic: asynchronous-code-in-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.141Z
estimatedTokens: 768
keywords: [Asynchronous, Code, Components, Hackers, manipulate, timing, produce, malicious, results, preserve, current, execution, context, wrap, function]
---

# Asynchronous Code in Components

> Hackers can manipulate the timing of asynchronous code to produce malicious results. To
    preserve current execution context, wrap asynchronous function calls or batch actions into a
    single request.

# Asynchronous Code in Components

Hackers can manipulate the timing of asynchronous code to produce malicious results. To preserve current execution context, wrap asynchronous function calls or batch actions into a single request.

When you use an asynchronous function such as setTimeout() and setInterval() to reference a component, you exit the framework’s lifecycle. If you navigate elsewhere in the user interface while asynchronous code is executing, the framework unrenders and destroys the component that made the asynchronous request. You can still have a reference to that component, but it’s no longer valid. Hackers exploit this vulnerability in harmful ways, for example, crash an app.

To reenter the framework safely, wrap the code in the $A.getCallback() function. Then, to ensure that the component is still valid, use the component.isValid() function before executing anything in the callback. Alternatively, batch multiple actions into one request by using enqueueAction().

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

This vulnerability doesn’t apply to components created against the Summer ’17 release (API v40.0) or later.

These examples depict the security violation and how to fix it.

## Aura Example

The setInterval() function gives you access to the document object model (DOM). However, accessing the DOM with setInterval() occurs in a context outside of the Lightning framework. There are no guarantees about the parent component’s state—it’s possible the function doesn’t have a parent component at all. If the state changes, the callback function can act on data that it doesn’t own, or it can wait for data that never shows up. In these scenarios, the app throws an error message that halts the entire Salesforce page, and the component stops responding.

```

```

## Revised Code Using getCallback() Example

To reenter the framework safely, wrap the code in the $A.getCallback() function. Then, to ensure that the component is still valid, use the component.isValid() function before executing anything in the callback.

Use $A.getCallback() to wrap any code that accesses a component outside the normal re rendering lifecycle, such as in a setTimeout() or setInterval() call. $A.getCallback() preserves the current execution context and grants the correct access level to the asynchronous code. Otherwise, the framework loses context and only allows access to global resources.

```

```

## Revised Code Using enqueueAction() Example

Alternatively, use enqueueAction(), which adds the server-side controller action to the queue of actions to be executed. Rather than sending a separate request for each individual action, the framework processes the event chain and batches the actions in the queue into one request. The actions are asynchronous and have callbacks.

```

```

To learn more, check out our [Secure Client-Side Development module](https://trailhead.salesforce.com/en/content/learn/modules/secure-clientside-development "HTML (New Window)") on Trailhead.

## Code Examples

```
vars.Timer = setInterval(function(){ helper.action(component); },1);
```

```
window.setTimeout(
   $A.getCallback(function() {
      if(cmp.isValid()){ 
         cmp.set("v.visible", true); 
      }
   }), 5000
);
```

```
var action = component.get(“c.usually_a_server_side_controller”);
action.setCallback(this, function()(response) {...});
$A.enqueueAction(action2);
```
