---
title: "SendEmailQuickActionDefaults Methods"
domain: apex-reference
topic: sendemailquickactiondefaults-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.115Z
keywords: [SendEmailQuickActionDefaults, Methods, Returns, list, email, addresses, available, address, drop-down, menu, standard, Email, Action., getFromAddressList, Signature, Return, Value, getInReplyToId, setIgnoreTemplateSubject, useOriginalSubject]
---

# SendEmailQuickActionDefaults Methods

> Returns a list of email addresses that are available in the From:
      address drop-down menu for the standard Email Action.

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