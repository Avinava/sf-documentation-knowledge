---
title: "Classic Encryption for Custom Fields"
domain: securityImplGuide
topic: classic-encryption-for-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.778Z
estimatedTokens: 1167
keywords: [Classic, Encryption, Custom, Restrict, Salesforce, users, seeing, text, want, keep, View, Encrypted, Data, permission, Implementation]
---

# Classic Encryption for Custom Fields

> Restrict other Salesforce users from seeing custom text fields that you want to keep
        private. Only users with the View Encrypted Data permission can see data in encrypted custom
        text fields.

# Classic Encryption for Custom Fields

Restrict other Salesforce users from seeing custom text fields that you want to keep private. Only users with the View Encrypted Data permission can see data in encrypted custom text fields.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Developer, Enterprise, Performance, Unlimited, and Database.com Editions |


Before you begin working with encrypted custom fields, review these implementation notes, restrictions, and best practices.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Implementation Notes

-   Encrypted fields are encrypted with a 128-bit data encryption key and use the Advanced Encryption Standard (AES) algorithm. You can archive, delete, and import your data encryption key. To enable encryption key management, contact Salesforce.
-   You can use encrypted fields in email templates but the value is always masked regardless of whether you have the View Encrypted Data permission.
-   If you have the View Encrypted Data permission and you grant login access to another user, the user can see encrypted fields in plain text.
-   Only users with the View Encrypted Data permission can clone the value of an encrypted field when cloning that record.
-   Only the <apex:outputField\> component supports presenting encrypted fields in Visualforce pages.
-   When you use Visualforce email templates or call Visualforce pages with getContent or getContentAsPDF requests, encrypted field values are always masked regardless of whether you have the View Encrypted Data permission. Masking is present during Apex execution and on the resulting Visualforce markup.

## Restrictions

Encrypted Text Fields:

-   Can’t be unique, have an external ID, or have default values.
-   Aren’t available for mapping leads to other objects.
-   Are limited to 175 characters because of the encryption algorithm.
-   Aren’t available for use in filters such as list views, reports, roll-up summary fields, and rule filters.
-   Can’t be used to define report criteria, but they can be included in report results.
-   Aren’t searchable, but they can be included in search results.
-   Aren’t available for Connect Offline, Salesforce for Outlook, lead conversion, workflow rule criteria or formulas, formula fields, outbound messages, default values, and Web-to-Lead and Web-to-Case forms.

Encrypted Data Files:

-   Aren’t available for date and time fields.

## Best Practices

-   Encrypted fields are editable regardless of whether the user has the View Encrypted Data permission. Use validation rules, field-level security settings, or page layout settings to prevent users from editing encrypted fields.
-   You can still validate the values of encrypted fields using validation rules or Apex. Both work regardless of whether the user has the View Encrypted Data permission.
-   To view encrypted data unmasked in the debug log, the user must also have the View Encrypted Data in the service that Apex requests originate from. These requests can include Apex Web services, triggers, workflows, inline Visualforce pages (a page embedded in a page layout), and Visualforce email templates.
-   Existing custom fields can’t be converted into encrypted fields nor can encrypted fields be converted into another data type. To encrypt the values of an existing (unencrypted) field, export the data, create an encrypted custom field to store that data, and import that data into the new encrypted field.
-   Mask Type isn’t an input mask that ensures the data matches the Mask Type. Use validation rules to ensure that the data entered matches the mask type selected.
-   Use encrypted custom fields only when government regulations require it because they involve more processing and have search-related limitations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

This page is about Classic Encryption, not Shield Platform Encryption. [What's the difference?](https://help.salesforce.com/s/articleView?id=sf.security_pe_vs_classic_encryption.htm&language=en_US)

-   **[Create Custom Fields](atlas.en-us.securityImplGuide.meta/securityImplGuide/adding_fields.htm)**
    Capture your unique business data by storing it in custom fields. When you create a custom field, you configure where you want it to appear and optionally control security at the field level.

## Related Topics

- Create Custom Fields (atlas.en-us.securityImplGuide.meta/securityImplGuide/adding_fields.htm)
