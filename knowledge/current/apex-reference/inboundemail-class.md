---
title: "InboundEmail Class"
domain: apex-reference
topic: inboundemail-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.798Z
estimatedTokens: 2862
namespace: Messaging
keywords: [InboundEmail, inbound, email, authenticationResults, Usage, binaryAttachments, ccAddresses, fromAddress, fromName, htmlBody, htmlBodyIsTruncated, inReplyTo, messageId, plainTextBody, plainTextBodyIsTruncated]
---

# InboundEmail Class

> Represents an inbound email object.

**Namespace:** `Messaging`

# InboundEmail Class

Represents an inbound email object.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce outbound and inbound email functionality.")

-   **[InboundEmail Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_constructors)**

-   **[InboundEmail Properties](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_Properties)**


## InboundEmail Constructors

The following are constructors for InboundEmail.

-   **[InboundEmail()](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_ctor)**
    Creates a new instance of the Messaging.InboundEmail class.

### InboundEmail()

Creates a new instance of the Messaging.InboundEmail class.

#### Signature

public InboundEmail()

## InboundEmail Properties

The following are properties for InboundEmail.

-   **[authenticationResults](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_authenticationResults)**
    A list of authentication results received with the email, if any.
-   **[binaryAttachments](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_binaryAttachments)**
    A list of binary attachments received with the email, if any.
-   **[ccAddresses](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_ccAddresses)**
    A list of carbon copy (CC) addresses, if any.
-   **[fromAddress](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_fromAddress)**
    The email address that appears in the From field.
-   **[fromName](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_fromName)**
    The name that appears in the From field, if any.
-   **[headers](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_headers)**
    A list of the RFC 2822 headers in the email.
-   **[htmlBody](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_htmlBody)**
    The HTML version of the email, if specified by the sender.
-   **[htmlBodyIsTruncated](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_htmlBodyIsTruncated)**
    Indicates whether the HTML body text is truncated (true) or not (false.)
-   **[inReplyTo](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_inReplyTo)**
    The In-Reply-To field of the incoming email. Identifies the email or emails to which this one is a reply (parent emails). Contains the parent email or emails' message-IDs.
-   **[messageId](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_messageId)**
    The Message-ID—the incoming email's unique identifier.
-   **[plainTextBody](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_plainTextBody)**
    The plain text version of the email, if specified by the sender.
-   **[plainTextBodyIsTruncated](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_plainTextBodyIsTruncated)**
    Indicates whether the plain body text is truncated (true) or not (false.)
-   **[references](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_references)**
    The References field of the incoming email. Identifies an email thread. Contains a list of the parent emails' References and message IDs, and possibly the In-Reply-To fields.
-   **[replyTo](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_replyTo)**
    The email address that appears in the reply-to header.
-   **[subject](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_subject)**
    The subject line of the email, if any.
-   **[textAttachments](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_textAttachments)**
    A list of text attachments received with the email, if any.
-   **[toAddresses](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_Messaging_InboundEmail_toAddresses)**
    The email address that appears in the To field.

### authenticationResults

A list of authentication results received with the email, if any.

#### Signature

public InboundEmail.AuthenticationResult\[\] authenticationResults {get; set;}

#### Property Value

Type: [InboundEmail.AuthenticationResult](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_class_Messaging_InboundEmail_AuthenticationResult "Contains the authentication type and response for inbound emails.")\[\]

#### Usage

Examples of authentication results include dkim, dmarc, and spf.

### binaryAttachments

A list of binary attachments received with the email, if any.

#### Signature

public InboundEmail.BinaryAttachment\[\] binaryAttachments {get; set;}

#### Property Value

Type: [InboundEmail.BinaryAttachment](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_classes_email_inbound_binary "An InboundEmail object stores binary attachments in an InboundEmail.BinaryAttachment object.")\[\]

#### Usage

Examples of binary attachments include image, audio, application, and video files.

### ccAddresses

A list of carbon copy (CC) addresses, if any.

#### Signature

public String\[\] ccAddresses {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

### fromAddress

The email address that appears in the From field.

#### Signature

public String fromAddress {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### fromName

The name that appears in the From field, if any.

#### Signature

public String fromName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### headers

A list of the RFC 2822 headers in the email.

#### Signature

public InboundEmail.Header\[\] headers {get; set;}

#### Property Value

Type: [InboundEmail.Header](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_header.htm#apex_classes_email_inbound_header "An InboundEmail object stores RFC 2822 email header information in an InboundEmail.Header object with the following properties.")\[\]

#### Usage

The list of the RFC 2822 headers includes:

-   Recieved from
-   Custom headers
-   Message-ID
-   Date

### htmlBody

The HTML version of the email, if specified by the sender.

#### Signature

public String htmlBody {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### htmlBodyIsTruncated

Indicates whether the HTML body text is truncated (true) or not (false.)

#### Signature

public Boolean htmlBodyIsTruncated {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### inReplyTo

The In-Reply-To field of the incoming email. Identifies the email or emails to which this one is a reply (parent emails). Contains the parent email or emails' message-IDs.

#### Signature

public String inReplyTo {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### messageId

The Message-ID—the incoming email's unique identifier.

#### Signature

public String messageId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### plainTextBody

The plain text version of the email, if specified by the sender.

#### Signature

public String plainTextBody {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### plainTextBodyIsTruncated

Indicates whether the plain body text is truncated (true) or not (false.)

#### Signature

public Boolean plainTextBodyIsTruncated {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### references

The References field of the incoming email. Identifies an email thread. Contains a list of the parent emails' References and message IDs, and possibly the In-Reply-To fields.

#### Signature

public String\[\] references {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

### replyTo

The email address that appears in the reply-to header.

#### Signature

public String replyTo {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If there is no reply-to header, this field is identical to the fromAddress field.

### subject

The subject line of the email, if any.

#### Signature

public String subject {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### textAttachments

A list of text attachments received with the email, if any.

#### Signature

public InboundEmail.TextAttachment\[\] textAttachments {get; set;}

#### Property Value

Type: [InboundEmail.TextAttachment](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_text.htm#apex_classes_inbound_text "An InboundEmail object stores text attachments in an InboundEmail.TextAttachment object.")\[\]

#### Usage

The text attachments can be any of the following:

-   Attachments with a Multipurpose Internet Mail Extension (MIME) type of text
-   Attachments with a MIME type of application/octet-stream and a file name that ends with either a .vcf or .vcs extension. These are saved as text/x-vcard and text/calendar MIME types, respectively.

### toAddresses

The email address that appears in the To field.

#### Signature

public String\[\] toAddresses {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

## Related Topics

- Messaging (atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- InboundEmail Constructors (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
- InboundEmail Properties (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
- InboundEmail() (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
- authenticationResults (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
- binaryAttachments (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
- ccAddresses (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
- fromAddress (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
- fromName (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
- headers (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
