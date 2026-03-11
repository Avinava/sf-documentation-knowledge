---
title: "EmailFileAttachment Properties"
domain: apex-reference
topic: emailfileattachment-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.210Z
keywords: [EmailFileAttachment, Properties, Gets, sets, attachment, itself., body, Signature, Property, Value, contenttype, filename, inline]
---

# EmailFileAttachment Properties

> Gets or sets the attachment itself.

## EmailFileAttachment Properties

The following are properties for EmailFileAttachment.

-   **[body](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_attachment.htm#apex_Messaging_EmailFileAttachment_body)**  
    Gets or sets the attachment itself.
-   **[contenttype](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_attachment.htm#apex_Messaging_EmailFileAttachment_contenttype)**  
    Gets or sets the attachment's Content-Type.
-   **[filename](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_attachment.htm#apex_Messaging_EmailFileAttachment_filename)**  
    Gets or sets the name of the file to attach.
-   **[id](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_attachment.htm#apex_Messaging_EmailFileAttachment_id)**  
    Read-Only. Gets the attachment ID.
-   **[inline](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_attachment.htm#apex_Messaging_EmailFileAttachment_inline)**  
    Specifies a Content-Disposition of inline (true) or attachment (false).

### body

Gets or sets the attachment itself.

#### Signature

public Blob body {get; set;}

#### Property Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

### contenttype

Gets or sets the attachment's Content-Type.

#### Signature

public String contenttype {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### filename

Gets or sets the name of the file to attach.

#### Signature

public String filename {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### id

Read-Only. Gets the attachment ID.

#### Signature

public Id id {get;}

#### Property Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### inline

Specifies a Content-Disposition of inline (true) or attachment (false).

#### Signature

public Boolean inline {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")