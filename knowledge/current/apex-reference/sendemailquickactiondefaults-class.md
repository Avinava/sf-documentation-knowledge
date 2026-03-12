---
title: "SendEmailQuickActionDefaults Class"
domain: apex-reference
topic: sendemailquickactiondefaults-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.668Z
estimatedTokens: 1180
namespace: QuickAction
keywords: [SendEmailQuickActionDefaults, Represents, Apex, provides, address, list, original, email’s, email, message, provided, reply, action, invoked, feed, item, specify, related, settings, templates.]
---

# SendEmailQuickActionDefaults Class

> Represents an Apex class that provides: the From address list; the
      original email’s email message ID, provided that the reply action was invoked on the email
      message feed item; and methods to specify related settings on templates. You can override
      these fields before the standard Email Action is rendered.

**Namespace:** `QuickAction`

# SendEmailQuickActionDefaults Class

Represents an Apex class that provides: the From address list; the original email’s email message ID, provided that the reply action was invoked on the email message feed item; and methods to specify related settings on templates. You can override these fields before the standard Email Action is rendered.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

You cannot instantiate this class. One can use the getters/setters when using it in the context of QuickAction.QuickActionDefaultsHandler.

-   **[SendEmailQuickActionDefaults Methods](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm#apex_QuickAction_SendEmailQuickActionDefaults_methods)**


## SendEmailQuickActionDefaults Methods

The following are methods for SendEmailQuickActionDefaults.

-   **[getFromAddressList()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm#apex_QuickAction_SendEmailQuickActionDefaults_getFromAddressList)**
    Returns a list of email addresses that are available in the From: address drop-down menu for the standard Email Action.
-   **[getInReplyToId()](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm#apex_QuickAction_SendEmailQuickActionDefaults_getInReplyToId)**
    Returns the email message ID of the email to which the reply/reply all action has been invoked.
-   **[setIgnoreTemplateSubject(useOriginalSubject)](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm#apex_QuickAction_SendEmailQuickActionDefaults_setIgnoreTemplateSubject)**
    Specifies whether the template subject should be ignored (true), thus using the original subject, or whether the template subject should replace the original subject (false).
-   **[setInsertTemplateBody(keepOriginalBodyContent)](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm#apex_QuickAction_SendEmailQuickActionDefaults_setInsertTemplateBody)**
    Specifies whether the template body should be inserted above the original body content (true) or whether it should replace the entire content with the template body (false).
-   **[setTemplateId(templateId)](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm#apex_QuickAction_SendEmailQuickActionDefaults_setTemplateId)**
    Sets the email template ID to load into the email body.

### getFromAddressList()

Returns a list of email addresses that are available in the From: address drop-down menu for the standard Email Action.

#### Signature

public List<String\> getFromAddressList()

#### Return Value

Type: List<String>

### getInReplyToId()

Returns the email message ID of the email to which the reply/reply all action has been invoked.

#### Signature

public Id getInReplyToId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### setIgnoreTemplateSubject(useOriginalSubject)

Specifies whether the template subject should be ignored (true), thus using the original subject, or whether the template subject should replace the original subject (false).

#### Signature

public void setIgnoreTemplateSubject(Boolean useOriginalSubject)

#### Parameters

useOriginalSubject

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

### setInsertTemplateBody(keepOriginalBodyContent)

Specifies whether the template body should be inserted above the original body content (true) or whether it should replace the entire content with the template body (false).

#### Signature

public void setInsertTemplateBody(Boolean keepOriginalBodyContent)

#### Parameters

keepOriginalBodyContent

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

### setTemplateId(templateId)

Sets the email template ID to load into the email body.

#### Signature

public void setTemplateId(Id templateId)

#### Parameters

templateId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The template ID.

#### Return Value

Type: void

## Related Topics

- QuickAction (atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)
- SendEmailQuickActionDefaults Methods (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm)
- getFromAddressList() (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm)
- getInReplyToId() (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm)
- setIgnoreTemplateSubject(useOriginalSubject) (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm)
- setInsertTemplateBody(keepOriginalBodyContent) (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm)
- setTemplateId(templateId) (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
