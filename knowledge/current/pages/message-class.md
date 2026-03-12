---
title: "Message Class"
domain: pages
topic: message-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.763Z
estimatedTokens: 475
namespace: ApexPages
keywords: [Message, validation, errors, occur, user, saves, uses, standard, controller, Usage, Instantiation, ApexPages.Severity]
---

# Message Class

> Contains validation errors that occur when the user saves the page that uses a standard
  controller.

**Namespace:** `ApexPages`

# Message Class

Contains validation errors that occur when the user saves the page that uses a standard controller.

## Namespace

ApexPages

## Usage

When using a standard controller, all validation errors, both custom and standard, that occur when the user saves the page are automatically added to the page error collections. If an inputField component is bound to the field with an error, the message is added to the component’s error collection. All messages are added to the page’s error collection. For more information, see [Validation Rules and Standard Controllers](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_std.htm#validation_rules_and_standard_controllers "HTML (New Window)") in the Visualforce Developer's Guide.

If your application uses a custom controller or extension, you must use the message class for collecting errors.

## Instantiation

In a custom controller or controller extension, you can instantiate a Message in one of these ways:

-   ```

    ```

    where ApexPages.severity is the enum that determines how severe a message is, and summary is the String used to summarize the message. For example:

    ```

    ```

-   ```

    ```

    where ApexPages. severity is the enum that determines how severe a message is, summary is the String used to summarize the message, and detail is the String used to provide more detailed information about the error.


## ApexPages.Severity Enum

To specify the severity of the message, use the ApexPages.Severity enum values. The following are the valid values:

-   CONFIRM
-   ERROR
-   FATAL
-   INFO
-   WARNING

All enums have access to standard methods, such as name and value.

-   **[Message Constructors](atlas.en-us.pages.meta/pages/apex_ApexPages_Message_constructors.htm)**

-   **[Message Methods](atlas.en-us.pages.meta/pages/apex_ApexPages_Message_methods.htm)**

## Code Examples

```
ApexPages.Message myMsg = new ApexPages.Message(ApexPages.severity, summary);
```

```
ApexPages.Message myMsg = new ApexPages.Message(ApexPages.Severity.FATAL, 'my error msg');
```

```
ApexPages.Message myMsg = new ApexPages.Message(ApexPages.severity, summary, detail);
```

## Related Topics

- Message Constructors (atlas.en-us.pages.meta/pages/apex_ApexPages_Message_constructors.htm)
- Message Methods (atlas.en-us.pages.meta/pages/apex_ApexPages_Message_methods.htm)
