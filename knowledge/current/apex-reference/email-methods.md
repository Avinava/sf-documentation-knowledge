---
title: "Email Methods"
domain: apex-reference
topic: email-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.218Z
keywords: [Email, Methods, Indicates, whether, email, sender, receives, copy, sent., mass, mail, only, copied, first, setBccSender, bcc, Signature, Parameters, Return, Value]
---

# Email Methods

> Indicates whether the email sender receives a copy of the email that is sent. For a mass
  mail, the sender is only copied on the first email sent.

## Email Methods

The following are methods for Email. All are instance methods.

-   **[setBccSender(bcc)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_Messaging_Email_setBccSender)**  
    Indicates whether the email sender receives a copy of the email that is sent. For a mass mail, the sender is only copied on the first email sent.
-   **[setReplyTo(replyAddress)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_Messaging_Email_setReplyTo)**  
    Optional. The email address that receives the message when a recipient replies.
-   **[setTemplateID(templateId)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_Messaging_Email_setTemplateID)**  
    The ID of the template to be merged to create this email. Specify a value for setTemplateId, setHtmlBody, or setPlainTextBody. Or, you can define both setHtmlBody and setPlainTextBody.
-   **[setSaveAsActivity(saveAsActivity)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_Messaging_Email_setSaveAsActivity)**  
    Optional. The default value is true, meaning the email is saved as an activity. This argument only applies if the recipient list is based on targetObjectId or targetObjectIds. If HTML email tracking is enabled for the organization, you will be able to track open rates.
-   **[setSenderDisplayName(displayName)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_Messaging_Email_setSenderDisplayName)**  
    Optional. The name that appears on the From line of the email. This cannot be set if the object associated with a setOrgWideEmailAddressId for a SingleEmailMessage has defined its DisplayName field.
-   **[setUseSignature(useSignature)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_Messaging_Email_setUseSignature)**  
    Indicates whether the email includes an email signature if the user has one configured. The default is true, meaning if the user has a signature it is included in the email unless you specify false.

### setBccSender(bcc)

Indicates whether the email sender receives a copy of the email that is sent. For a mass mail, the sender is only copied on the first email sent.

#### Signature

public Void setBccSender(Boolean bcc)

#### Parameters

bcc

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the BCC compliance option is set at the organization ​level, the user cannot add BCC addresses on standard messages. The following error code is returned: BCC\_NOT\_ALLOWED\_IF\_BCC\_ COMPLIANCE\_​ENABLED. ​Contact your Salesforce representative for information on BCC compliance.

### setReplyTo(replyAddress)

Optional. The email address that receives the message when a recipient replies.

#### Signature

public Void setReplyTo(String replyAddress)

#### Parameters

replyAddress

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setTemplateID(templateId)

The ID of the template to be merged to create this email. Specify a value for setTemplateId, setHtmlBody, or setPlainTextBody. Or, you can define both setHtmlBody and setPlainTextBody.

#### Signature

public Void setTemplateID(ID templateId)

#### Parameters

templateId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

setHtmlBody and setPlainTextBody apply only to single email methods, not to mass email methods.

### setSaveAsActivity(saveAsActivity)

Optional. The default value is true, meaning the email is saved as an activity. This argument only applies if the recipient list is based on targetObjectId or targetObjectIds. If HTML email tracking is enabled for the organization, you will be able to track open rates.

#### Signature

public Void setSaveAsActivity(Boolean saveAsActivity)

#### Parameters

saveAsActivity

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

### setSenderDisplayName(displayName)

Optional. The name that appears on the From line of the email. This cannot be set if the object associated with a setOrgWideEmailAddressId for a SingleEmailMessage has defined its DisplayName field.

#### Signature

public Void setSenderDisplayName(String displayName)

#### Parameters

displayName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setUseSignature(useSignature)

Indicates whether the email includes an email signature if the user has one configured. The default is true, meaning if the user has a signature it is included in the email unless you specify false.

#### Signature

public Void setUseSignature(Boolean useSignature)

#### Parameters

useSignature

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void