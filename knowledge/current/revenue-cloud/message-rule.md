---
title: "Message Rule"
domain: revenue-cloud
topic: message-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:37.021Z
estimatedTokens: 416
keywords: [Message, Rule, displays, users, conditions]
---

> The message rule displays a message to users based on specified conditions.

# Message Rule

The message rule displays a message to users based on specified conditions.

Message rules have this syntax:

```

```

A message rule can take optional arguments to generate the message and indicate the severity of the message as the last argument. Message severity can be Info, Warning, or Error. Without an explicit message severity argument, the message will be treated as Info.

Understand the behaviour of each message severity type at runtime.

-   The Info message type doesn't require the user to take any action in order to continue with the current task. Info messages display a gray banner.
-   The Warning message type allows the user to continue working on the current task, but blocks them from taking the next step until they take action to address the issue described in the message. Warning messages display a yellow banner.
-   The Error message type blocks the user from continuing with the current task until they fix the error described in the message. Error messages display a red banner. Note: An Error message doesn't block a user working in the Transaction Line Editor (Transaction Line Table, or TLT). In that component, the user can still make changes and save the quote, even when the quote contains conditions that trigger an Error message.

Message format can be a Java string, or a string with {} as a placeholder. The constraint solver replaces each {} with arguments specified after the string, in the order they are written.

## Example

In this example, if requiredKW is greater than 2500, a message is displayed that the specified required kW is larger than the supported options and must be changed.

```

```

## Code Examples

```
message(logical expression, string literal | string variable, argument, .., argument, severity);
message(logical expression, string literal | string variable, severity);
message(logical expression, string literal | string variable);
```

```
type GeneratorSet {
int requiredKW = [101..10000];
message(requiredKW > 2500, "The required kW is above what the current options can support. Please adjust to 2500 kW or select a new generator set that meets your requirements.");
}
```
