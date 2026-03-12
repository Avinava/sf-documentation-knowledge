---
title: "Declaring a Remote Method in Apex"
domain: pages
topic: declaring-a-remote-method-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.755Z
estimatedTokens: 300
keywords: [Declaring, Remote, Apex, call, almost, any, JavaScript, remoting, action, needs, conform, simple, rules]
---

# Declaring a Remote Method in Apex

> You can call almost any Apex method as a JavaScript remoting remote action. To do so, the
  method needs to conform to some simple rules.

# Declaring a Remote Method in Apex

You can call almost any Apex method as a JavaScript remoting remote action. To do so, the method needs to conform to some simple rules.

In your controller, your Apex method declaration is preceded with the @RemoteAction annotation like this:

```

```

Apex @RemoteAction methods must be static and either global or public.

Your method can take Apex primitives, collections, typed and generic sObjects, and user-defined Apex classes and interfaces as arguments. Generic sObjects must have an ID or sobjectType value to identify actual type. Interface parameters must have an apexType to identify actual type.

Your method can return Apex primitives, sObjects, collections, user-defined Apex classes and enums, SaveResult, UpsertResult, DeleteResult, SelectOption, or PageReference.

Methods used for JavaScript remoting must be uniquely identified by name and number of parameters; overloading isn’t possible. For instance, with the method above, you can’t also have a getItemId(Integer productNumber) method. Instead, declare multiple methods with different names:

-   getItemIdFromName(String objectName)
-   getItemIdFromProductNumber(Integer productNumber)

## Code Examples

```apex
@RemoteAction
global static String getItemId(String objectName) { ... }
```
