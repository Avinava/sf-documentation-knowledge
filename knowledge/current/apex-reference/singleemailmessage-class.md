---
title: "SingleEmailMessage Class"
domain: apex-reference
topic: singleemailmessage-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.541Z
estimatedTokens: 7996
namespace: Messaging
keywords: [SingleEmailMessage, Optional., Array, IDs, Document, ContentVersion, Attachment, items, attach, email., Usage, getOneClickPost, getTemplateName, setBccAddresses, bccAddresses, setCcAddresses, ccAddresses, setCharset, characterSet, setDocumentAttachments]
---

# SingleEmailMessage Class

> Optional. Array of IDs of 
				Document, 
				ContentVersion, or 
				Attachment items to attach to the
    email.

**Namespace:** `Messaging`

# SingleEmailMessage Class

Contains methods for sending single email messages.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce outbound and inbound email functionality.")

## Usage

SingleEmailMessage extends Email and inherits all of its methods. All base email (Email class) methods are also available to the SingleEmailMessage objects. Emails sent via SingleEmailMessage count against the sending organization's daily single email limit.

Email properties are readable and writable. Each property has corresponding setter and getter methods. For example, the toAddresses() property is equivalent to the setToAddresses() and getToAddresses() methods. Only the setter methods are documented. However, the getTemplateName() method doesn’t have an equivalent setter method; use setTemplateId() to specify a template name.

-   **[SingleEmailMessage Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_constructors)**

-   **[SingleEmailMessage Methods](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_methods)**


#### See Also

-   [Email Class (Base Email Methods)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_classes_email_outbound_base "Contains base email methods common to both single and mass email.")


## SingleEmailMessage Constructors

The following are constructors for SingleEmailMessage.

-   **[SingleEmailMessage()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_ctor)**
    Creates a new instance of the Messaging.SingleEmailMessage class.

### SingleEmailMessage()

Creates a new instance of the Messaging.SingleEmailMessage class.

#### Signature

public SingleEmailMessage()

## SingleEmailMessage Methods

The following are methods for SingleEmailMessage. All are instance methods. All base email (Email class) methods are also available to the SingleEmailMessage objects. These methods are described in [Email Class (Base Email Methods)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_classes_email_outbound_base "Contains base email methods common to both single and mass email.").

-   **[getOneClickPost()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_getOneClickPost)**
    Optional. Returns a boolean value based on the value set by the setOneClickPost method. Default is false.
-   **[getTemplateName()](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_getTemplateName)**
    The name of the template used to create the email.
-   **[setBccAddresses(bccAddresses)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setBccAddresses)**
    Optional. A list of blind carbon copy (BCC) addresses or object IDs of the contacts, leads, and users you’re sending the email to. The maximum size for this field is 4,000 bytes. The maximum total of toAddresses, ccAddresses, and bccAddresses per email is 150. All recipients in these three fields count against the limit for email sent using Apex or the API.
-   **[setCcAddresses(ccAddresses)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setCcAddresses)**
    Optional. A list of carbon copy (CC) addresses or object IDs of the contacts, leads, and users you’re sending the email to. The maximum size for this field is 4,000 bytes. The maximum total of toAddresses, ccAddresses, and bccAddresses per email is 150. All recipients in these three fields count against the limit for email sent using Apex or the API.
-   **[setCharset(characterSet)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setCharset)**
    Optional. The character set for the email. If this value is null, the user's default value is used.
-   **[setDocumentAttachments(documentIds)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setDocumentAttachments)**
    **(Deprecated. Use setEntityAttachments() instead.)** Optional. A list containing the ID of each document object you want to attach to the email.
-   **[setEntityAttachments(ids)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setEntityAttachments)**
    Optional. Array of IDs of [Document](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_document.htm "HTML (New Window)"), [ContentVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm "HTML (New Window)"), or [Attachment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_attachment.htm "HTML (New Window)") items to attach to the email.
-   **[setFileAttachments(fileNames)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setFileAttachments)**
    Optional. A list containing the file names of the binary and text files you want to attach to the email.
-   **[setHtmlBody(htmlBody)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setHtmlBody)**
    Optional. The HTML version of the email, specified by the sender. The value is encoded according to the specification associated with the organization. Specify a value for setTemplateId, setHtmlBody, or setPlainTextBody. Or, you can define both setHtmlBody and setPlainTextBody.
-   **[setInReplyTo(parentMessageIds)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setInReplyTo)**
    Sets the optional In-Reply-To field of the outgoing email. This field identifies the email or emails to which this email is a reply (parent emails).
-   **[setOneClickPost(oneClickPost)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setOneClickPost)**
    Optional. If set to true, a List-Unsubscribe-Post header is added to an email with List-Unsubscribe=One-Click. Use this method to support unsubscribe functionality in email sent via Salesforce. You can provide additional instructions on how to send unsubscribe requests by using the header. This includes specifying the HTTP method and content type to use and provides a secure way to add more info to unsubscribe requests. Default is false.
-   **[setOptOutPolicy(emailOptOutPolicy)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setOptOutPolicy)**
    Optional. If you added recipients by ID instead of email address and the Email Opt Out option is set, this method determines the behavior of the sendEmail() call. If you add recipients by their email addresses, the opt-out settings for those recipients aren’t checked and those recipients always receive the email.
-   **[setPlainTextBody(plainTextBody)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setPlainTextBody)**
    Optional. The text version of the email, specified by the sender. Specify a value for setTemplateId, setHtmlBody, or setPlainTextBody. Or, you can define both setHtmlBody and setPlainTextBody.
-   **[setOrgWideEmailAddressId(emailAddressId)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setOrgWideEmailAddressId)**
    Optional. The ID of the organization-wide email address associated with the outgoing email. If you’re using Apex to send emails from the guest user, set the sender to the verified org-wide email address or the emails are blocked. The object's DisplayName field cannot be set if the setSenderDisplayName field is already set.
-   **[setReferences(references)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setReferences)**
    Optional. The References field of the outgoing email. Identifies an email thread. Contains the parent emails' References and message IDs, and possibly the In-Reply-To fields.
-   **[setSubject(subject)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setSubject)**
    Optional. The email subject line. If you are using an email template, the subject line of the template overrides this value.
-   **[setTargetObjectId(targetObjectId)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setTargetObjectId)**
    Required if using a template, optional otherwise. The ID of the contact, lead, or user to which the email will be sent. The ID you specify sets the context and ensures that merge fields in the template contain the correct data.
-   **[setTemplateId(templateId)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setTemplateId)**
    Required if using a template, optional otherwise. The ID of the template used to create the email.
-   **[setToAddresses(toAddresses)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setToAddresses)**
    Optional. A list of email addresses or object IDs of the contacts, leads, and users you’re sending the email to. The maximum size for this field is 4,000 bytes. The maximum total of toAddresses, ccAddresses, and bccAddresses per email is 150. All recipients in these three fields count against the limit for email sent using Apex or the API.
-   **[setTreatBodiesAsTemplate(treatAsTemplate)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setTreatBodiesAsTemplate)**
    Optional. If set to true, the subject, plain text, and HTML text bodies of the email are treated as template data. The merge fields are resolved using the renderEmailTemplate method. Default is false.
-   **[setTreatTargetObjectAsRecipient(treatAsRecipient)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setTreatTargetObjectAsRecipient)**
    Optional. If set to true, the targetObjectId (a contact, lead, or user) is the recipient of the email. If set to false, the targetObjectId is supplied as the WhoId field for template rendering but isn’t a recipient of the email. The default is true.
-   **[setUnsubscribeComment(unsubscribeComment)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setUnsubscribeComment)**
    Optional. Sets a comment in the List-Unsubscribe email header. This comment is ignored by email clients and systems that parse the header. The comments contain human-readable notes or context for developers, administrators, or other stakeholders managing the email system.
-   **[setUnsubscribeUrls(UnsubscribeUrls)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setUnsubscribeUrls)**
    Optional. Sets a mailto URI and HTTP URL of a mechanism for unsubscribing a recipient from an email list. A list of all unsubscribe URLs passed through setUnsubscribeUrls is added to the List-Unsubscribe header. A minimum of one URL is required to use this method.
-   **[setWhatId(whatId)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_Messaging_SingleEmailMessage_setWhatId)**
    If you specify a contact for the targetObjectId field, you can specify an optional whatId as well. This helps to further ensure that merge fields in the template contain the correct data.

### getOneClickPost()

Optional. Returns a boolean value based on the value set by the setOneClickPost method. Default is false.

#### Signature

public Boolean getOneClickPost()

#### Parameters

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Invoke the setOneClickPostmethod before using getOneClickPost. The value of getOneClickPost will be false if the setOneClickPostmethod is set to true only after invoking the setUnsubscribeUrls method.

### getTemplateName()

The name of the template used to create the email.

#### Signature

public STRING getTemplateName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

There is no equivalent setter method for getTemplateName(). If the email didn’t use a template, getTemplateName() returns nothing. If you use setTemplateId(), and then call getTemplateName(), the template name associated to the template ID is returned.

### setBccAddresses(bccAddresses)

Optional. A list of blind carbon copy (BCC) addresses or object IDs of the contacts, leads, and users you’re sending the email to. The maximum size for this field is 4,000 bytes. The maximum total of toAddresses, ccAddresses, and bccAddresses per email is 150. All recipients in these three fields count against the limit for email sent using Apex or the API.

#### Signature

public Void setBccAddresses(String\[\] bccAddresses)

#### Parameters

bccAddresses

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

#### Return Value

Type: Void

#### Usage

All emails must have a recipient value in at least one of the following fields:

-   toAddresses
-   ccAddresses
-   bccAddresses
-   targetObjectId

If the BCC compliance option is set at the organization ​level, the user cannot add BCC addresses on standard messages. The following error code is returned: BCC\_NOT\_ALLOWED\_IF\_BCC\_ COMPLIANCE\_​ENABLED. ​Contact your Salesforce representative for information on BCC compliance.

### setCcAddresses(ccAddresses)

Optional. A list of carbon copy (CC) addresses or object IDs of the contacts, leads, and users you’re sending the email to. The maximum size for this field is 4,000 bytes. The maximum total of toAddresses, ccAddresses, and bccAddresses per email is 150. All recipients in these three fields count against the limit for email sent using Apex or the API.

#### Signature

public Void setCcAddresses(String\[\] ccAddresses)

#### Parameters

ccAddresses

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

#### Return Value

Type: Void

#### Usage

All emails must have a recipient value in at least one of the following fields:

-   toAddresses
-   ccAddresses
-   bccAddresses
-   targetObjectId

### setCharset(characterSet)

Optional. The character set for the email. If this value is null, the user's default value is used.

#### Signature

public Void setCharset(String characterSet)

#### Parameters

characterSet

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setDocumentAttachments(documentIds)

**(Deprecated. Use setEntityAttachments() instead.)** Optional. A list containing the ID of each document object you want to attach to the email.

#### Signature

public Void setDocumentAttachments(ID\[\] documentIds)

#### Parameters

documentIds

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

#### Return Value

Type: Void

#### Usage

You can attach multiple documents as long as the total size of all attachments does not exceed 10 MB.

### setEntityAttachments(ids)

Optional. Array of IDs of [Document](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_document.htm "HTML (New Window)"), [ContentVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm "HTML (New Window)"), or [Attachment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_attachment.htm "HTML (New Window)") items to attach to the email.

#### Signature

public void setEntityAttachments(List<String\> ids)

#### Parameters

ids

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Return Value

Type: void

### setFileAttachments(fileNames)

Optional. A list containing the file names of the binary and text files you want to attach to the email.

#### Signature

public Void setFileAttachments(EmailFileAttachment\[\] fileNames)

#### Parameters

fileNames

Type: [Messaging.EmailFileAttachment](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_attachment.htm#apex_classes_email_outbound_attachment "EmailFileAttachment is used in SingleEmailMessage to specify attachments passed in as part of the request, as opposed to existing documents in Salesforce.")\[\]

#### Return Value

Type: Void

#### Usage

You can attach multiple files as long as the total size of all attachments does not exceed 10 MB.

### setHtmlBody(htmlBody)

Optional. The HTML version of the email, specified by the sender. The value is encoded according to the specification associated with the organization. Specify a value for setTemplateId, setHtmlBody, or setPlainTextBody. Or, you can define both setHtmlBody and setPlainTextBody.

#### Signature

public Void setHtmlBody(String htmlBody)

#### Parameters

htmlBody

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setInReplyTo(parentMessageIds)

Sets the optional In-Reply-To field of the outgoing email. This field identifies the email or emails to which this email is a reply (parent emails).

#### Signature

public Void setInReplyTo(String parentMessageIds)

#### Parameters

parentMessageIds

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Contains one or more parent email message IDs.

#### Return Value

Type: Void

### setOneClickPost(oneClickPost)

Optional. If set to true, a List-Unsubscribe-Post header is added to an email with List-Unsubscribe=One-Click. Use this method to support unsubscribe functionality in email sent via Salesforce. You can provide additional instructions on how to send unsubscribe requests by using the header. This includes specifying the HTTP method and content type to use and provides a secure way to add more info to unsubscribe requests. Default is false.

#### Signature

public void setOneClickPost(Boolean oneClickPost)

#### Parameters

oneClickPost

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

#### Usage

You can set the oneClickPost method to true only after invoking the setUnsubscribeUrls method. If set to true, pass at least one HTTPS unsubscribe URL to unsubscribe.

#### Example

This example demonstrates how to send an email using Salesforce's Messaging.SingleEmailMessage class with enhanced unsubscribe functionality. It creates an email message with a recipient, subject, and body, and includes an unsubscribe URL. It also enables the oneClickPost feature, allowing for a simplified unsubscribe process. The email message is added to a list and sent using the Messaging.sendEmail method.

```

```

### setOptOutPolicy(emailOptOutPolicy)

Optional. If you added recipients by ID instead of email address and the Email Opt Out option is set, this method determines the behavior of the sendEmail() call. If you add recipients by their email addresses, the opt-out settings for those recipients aren’t checked and those recipients always receive the email.

#### Signature

public void setOptOutPolicy(String emailOptOutPolicy)

#### Parameters

emailOptOutPolicy

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Possible values of the emailOptOutPolicy parameter are:

-   SEND (default)—The email is sent to all recipients. The recipients’ Email Opt Out setting is ignored. The setting Enforce email privacy settings is ignored.
-   FILTER—No email is sent to recipients that have the Email Opt Out option set. Emails are sent to the other recipients. The setting Enforce email privacy settings is ignored.
-   REJECT—If any of the recipients have the Email Opt Out option set, sendEmail() throws an error and no email is sent. The setting Enforce email privacy settings is respected, as are the selections in the data privacy record based on the Individual object. If any of the recipients have Don’t Market, Don’t Process, or Forget This Individual selected, sendEmail() throws an error and no email is sent.

#### Return Value

Type: void

#### Example

This example shows how to send an email with the opt-out setting enforced. Recipients are specified by their IDs. The FILTER option causes the email to be sent only to recipients that haven’t opted out from email. This example uses dot notation of the email properties, which is equivalent to using the set methods.

```

```

### setPlainTextBody(plainTextBody)

Optional. The text version of the email, specified by the sender. Specify a value for setTemplateId, setHtmlBody, or setPlainTextBody. Or, you can define both setHtmlBody and setPlainTextBody.

#### Signature

public Void setPlainTextBody(String plainTextBody)

#### Parameters

plainTextBody

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setOrgWideEmailAddressId(emailAddressId)

Optional. The ID of the organization-wide email address associated with the outgoing email. If you’re using Apex to send emails from the guest user, set the sender to the verified org-wide email address or the emails are blocked. The object's DisplayName field cannot be set if the setSenderDisplayName field is already set.

#### Signature

public Void setOrgWideEmailAddressId(ID emailAddressId)

#### Parameters

emailAddressId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Usage

After you create an org-wide email address, you’re sent a confirmation email to verify it. Copy the Id from the URL and use the setOrgWideEmailAddressId(Id) method on your instance of Messaging.SingleEmailMessage.

To avoid hard-coding an ID, after creating your org-wide email address, you can query them.

```

```

#### Return Value

Type: Void

### setReferences(references)

Optional. The References field of the outgoing email. Identifies an email thread. Contains the parent emails' References and message IDs, and possibly the In-Reply-To fields.

#### Signature

public Void setReferences(String references)

#### Parameters

references

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setSubject(subject)

Optional. The email subject line. If you are using an email template, the subject line of the template overrides this value.

#### Signature

public Void setSubject(String subject)

#### Parameters

subject

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setTargetObjectId(targetObjectId)

Required if using a template, optional otherwise. The ID of the contact, lead, or user to which the email will be sent. The ID you specify sets the context and ensures that merge fields in the template contain the correct data.

#### Signature

public Void setTargetObjectId(ID targetObjectId)

#### Parameters

targetObjectId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

#### Usage

Do not specify the IDs of records that have the Email Opt Out option selected.

All emails must have a recipient value in at least one of the following fields:

-   toAddresses
-   ccAddresses
-   bccAddresses
-   targetObjectId

### setTemplateId(templateId)

Required if using a template, optional otherwise. The ID of the template used to create the email.

#### Signature

public Void setTemplateId(ID templateId)

#### Parameters

templateId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

### setToAddresses(toAddresses)

Optional. A list of email addresses or object IDs of the contacts, leads, and users you’re sending the email to. The maximum size for this field is 4,000 bytes. The maximum total of toAddresses, ccAddresses, and bccAddresses per email is 150. All recipients in these three fields count against the limit for email sent using Apex or the API.

#### Signature

public Void setToAddresses(String\[\] toAddresses)

#### Parameters

toAddresses

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

#### Return Value

Type: Void

#### Usage

All emails must have a recipient value in at least one of the following fields:

-   toAddresses
-   ccAddresses
-   bccAddresses
-   targetObjectId

### setTreatBodiesAsTemplate(treatAsTemplate)

Optional. If set to true, the subject, plain text, and HTML text bodies of the email are treated as template data. The merge fields are resolved using the renderEmailTemplate method. Default is false.

#### Signature

public void setTreatBodiesAsTemplate(Boolean treatAsTemplate)

#### Parameters

treatAsTemplate

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

### setTreatTargetObjectAsRecipient(treatAsRecipient)

Optional. If set to true, the targetObjectId (a contact, lead, or user) is the recipient of the email. If set to false, the targetObjectId is supplied as the WhoId field for template rendering but isn’t a recipient of the email. The default is true.

#### Signature

public void setTreatTargetObjectAsRecipient(Boolean treatAsRecipient)

#### Parameters

treatAsRecipient

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

You can set TO, CC, and BCC addresses using the email messaging methods regardless of whether a template is used for the email or the target object is a recipient.

### setUnsubscribeComment(unsubscribeComment)

Optional. Sets a comment in the List-Unsubscribe email header. This comment is ignored by email clients and systems that parse the header. The comments contain human-readable notes or context for developers, administrators, or other stakeholders managing the email system.

#### Signature

public void setUnsubscribeComment(String unsubscribeComment)

#### Parameters

unsubscribeComment

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

#### Usage

Invoke the setUnsubscribeUrls method before using setUnsubscribeComment.

#### Example

This example demonstrates how to send an email using Salesforce's Messaging.SingleEmailMessage class with an option to include an unsubscribe link. It creates an email message with a recipient, subject, and body, and includes an unsubscribe URL that directs the recipient to send an unsubscribe request via email. Additionally, it sets an unsubscribeComment to provide context for the unsubscribe action.

```

```

### setUnsubscribeUrls(UnsubscribeUrls)

Optional. Sets a mailto URI and HTTP URL of a mechanism for unsubscribing a recipient from an email list. A list of all unsubscribe URLs passed through setUnsubscribeUrls is added to the List-Unsubscribe header. A minimum of one URL is required to use this method.

#### Signature

public void setUnsubscribeUrls(List<String> unsubscribeUrls)

#### Parameters

UnsubscribeUrls

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Return Value

Type: void

#### Usage

Provide a list of URLs that support unsubscribe functionality by offering recipients multiple ways to opt-out of future communications. Each provided URL can use different protocols to allow for technical capacities of the recipient.

All setUnsubscribeUrls must have a value of one of these types:

-   Mailto: Allows recipients to send an unsubscribe request via email.
    -   Example: mailto:listrequest@example.com?subject=unsubscribe

-   HTTP: Directs recipients to a web page where they can unsubscribe.
    -   Example: http://example.com/unsubscribe.html?opaque=123456789

-   HTTPS: Directs recipients to a secure web page to unsubscribe.
    -   Example: https://example.com/unsubscribe.html?opaque=123456789

#### Example

This example demonstrates how to send an email using Salesforce's Messaging.SingleEmailMessage class that includes an option to include an unsubscribe link for a user to click. It creates an email message, sets the recipient's email address, subject, and body, and includes an unsubscribe URL. The email message is added to a list and sent using the Messaging.sendEmail method.

```

```

### setWhatId(whatId)

If you specify a contact for the targetObjectId field, you can specify an optional whatId as well. This helps to further ensure that merge fields in the template contain the correct data.

#### Signature

public Void setWhatId(ID whatId)

#### Parameters

whatId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: Void

#### Usage

The value must be one of the following types:

-   Account
-   Asset
-   Campaign
-   Case
-   Contract
-   Opportunity
-   Order
-   Product
-   Solution
-   Custom

## Code Examples

```apex
Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
// Set the recipient's email address
// Replace IDs with valid record IDs in your org. 
message.toAddresses = new String[] { '003D000000QDexS' };
message.subject = 'Test Message';
message.plainTextBody = 'This is the message body.';


// Create a list to hold unsubscribe URLs
List<String> unsubscribeUrls = new List<String>();
unsubscribeUrls.add('https://example.com/unsubscribe.html?opaque=123456789');


// Assign the unsubscribe URLs to the email message
message.unsubscribeUrls = unsubscribeUrls;


// Enable the one-click unsubscribe feature
message.oneClickPost = true;  
   
Messaging.SingleEmailMessage[] messages = 
    new List<Messaging.SingleEmailMessage> {message};
Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);


if (results[0].success) {
    System.debug('The email was sent successfully.');
} else {
    System.debug('The email failed to send: '
          + results[0].errors[0].message);
}
```

```apex
Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
// Set recipients to two contact IDs.
// Replace IDs with valid record IDs in your org.
message.toAddresses = new String[] { '003D000000QDexS', '003D000000QDfW5' };
message.optOutPolicy = 'FILTER';
message.subject = 'Opt Out Test Message';
message.plainTextBody = 'This is the message body.';
Messaging.SingleEmailMessage[] messages = 
    new List<Messaging.SingleEmailMessage> {message};
         Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);
if (results[0].success) {
    System.debug('The email was sent successfully.');
} else {
    System.debug('The email failed to send: '
          + results[0].errors[0].message);
}
```

```
OrgWideEmailAddress[] owea = [select Id from OrgWideEmailAddress where Address = 'doNotReply@<somedomain>.com'];
Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
if ( owea.size() > 0 ) {
    mail.setOrgWideEmailAddressId(owea.get(0).Id);
}
```

```apex
Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
// Set the recipient's email address
// Replace IDs with valid record IDs in your org 
message.toAddresses = new String[] { '003D000000QDexS' };
message.subject = 'Test Message';
message.plainTextBody = 'This is the message body.';


// Create a list to hold unsubscribe URLs
List<String> unsubscribeUrls = new List<String>();
unsubscribeUrls.add('mailto:listrequest@example.com?subject=unsubscribe');


// Assign the unsubscribe URLs to the email message
message.unsubscribeUrls = unsubscribeUrls;


// Set an unsubscribe comment to provide context for the unsubscribe action
message.unsubscribeComment = 'email unsubscribe support';   
  
Messaging.SingleEmailMessage[] messages = 
    new List<Messaging.SingleEmailMessage> {message};
Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);


if (results[0].success) {
    System.debug('The email was sent successfully.');
} else {
    System.debug('The email failed to send: '
          + results[0].errors[0].message);
}
```

```apex
Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage(); 
// Set the recipient's email address
// Replace IDs with valid record IDs in your org.
message.toAddresses = new String[] { '003D000000QDexS' };
message.subject = 'Test Message';
message.plainTextBody = 'This is the message body.';


// Create a list to hold unsubscribe URLs
List<String> unsubscribeUrls = new List<String>();
unsubscribeUrls.add('https://example.com/unsubscribe.html?opaque=123456789');


// Assign the unsubscribe URLs to the email message
message.unsubscribeUrls = unsubscribeUrls;
   
Messaging.SingleEmailMessage[] messages = 
    new List<Messaging.SingleEmailMessage> {message};
Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);


if (results[0].success) {
    System.debug('The email was sent successfully.');
} else {
    System.debug('The email failed to send: '
          + results[0].errors[0].message);
}
```

## Related Topics

- Messaging (atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- SingleEmailMessage Constructors (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm)
- SingleEmailMessage Methods (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm)
- Email Class (Base Email Methods) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm)
- SingleEmailMessage() (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm)
- getOneClickPost() (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm)
- getTemplateName() (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm)
- setBccAddresses(bccAddresses) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm)
- setCcAddresses(ccAddresses) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm)
- setCharset(characterSet) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm)
