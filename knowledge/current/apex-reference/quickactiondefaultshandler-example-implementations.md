---
title: "QuickActionDefaultsHandler Example Implementations"
domain: apex-reference
topic: quickactiondefaultshandler-example-implementations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.666Z
keywords: [QuickActionDefaultsHandler, Example, Implementations, These, examples, implementations, QuickAction.QuickActionDefaultsHandler, interface.]
---

# QuickActionDefaultsHandler Example Implementations

> These examples are implementations of the QuickAction.QuickActionDefaultsHandler interface.

## QuickActionDefaultsHandler Example Implementations

These examples are implementations of the QuickAction.QuickActionDefaultsHandler interface.

In this example, the onInitDefaults method checks whether the element passed in the array is for the standard Email action in the case feed. Then, it performs a query to retrieve the case that corresponds to the context ID. Next, it sets the value of the BCC address of the corresponding email message to a default value. The default value is based on the case reason. Finally, it sets the default values of the email template properties. The onInitDefaults method determines the default values based on two criteria: first, whether a reply action on an email message initiated the call to the method, and second, whether any previous emails attached to the case are associated with the call.

```

```

In this example, the onInitDefaults method checks whether the element passed in the array is for the standard Email action in the case feed. Then it performs a query to determine if the case Priority is set to High. If the Priority is set to High, the email address managers@acme.com is appended to the BCC field.

```

```

In this example, the onInitDefaults method checks whether the element passed in the array is for the standard Email action in the case feed. Then it performs a query to determine if the case Type is set to Problem. If the type is set to Problem, the First Response email template is inserted into the body of the email.

```

```

In this example, the onInitDefaults method checks whether the element passed in the array is for the standard Email action in the case feed. Then it performs a query to determine if the email is a Reply or Reply All email. If the email is a Reply or Reply All email, the corresponding email templates for these emails are inserted into the body of the email.

```

```