---
title: "InboundEmail.BinaryAttachment Properties"
domain: apex-reference
topic: inboundemailbinaryattachment-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.173Z
keywords: [InboundEmail.BinaryAttachment, Properties, body, attachment., Signature, Property, Value, fileName, headers, mimeTypeSubType]
---

# InboundEmail.BinaryAttachment Properties

> The body of the attachment.

## InboundEmail.BinaryAttachment Properties

The following are properties for InboundEmail.BinaryAttachment.

-   **[body](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_BinaryAttachment_body)**  
    The body of the attachment.
-   **[fileName](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_BinaryAttachment_fileName)**  
    The name of the attached file.
-   **[headers](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_BinaryAttachment_headers)**  
    Any header values associated with the attachment. Examples of header names include Content-Type, Content-Transfer-Encoding, and Content-ID.
-   **[mimeTypeSubType](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_Messaging_BinaryAttachment_mimeTypeSubType)**  
    The primary and sub MIME-type.

### body

The body of the attachment.

#### Signature

public Blob body {get; set;}

#### Property Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

### fileName

The name of the attached file.

#### Signature

public String fileName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### headers

Any header values associated with the attachment. Examples of header names include Content-Type, Content-Transfer-Encoding, and Content-ID.

#### Signature

public List<Messaging.InboundEmail.Header> headers {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Messaging.InboundEmail.Header](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_header.htm#apex_classes_email_inbound_header "An InboundEmail object stores RFC 2822 email header information in an InboundEmail.Header object with the following properties.")\>

### mimeTypeSubType

The primary and sub MIME-type.

#### Signature

public String mimeTypeSubType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")