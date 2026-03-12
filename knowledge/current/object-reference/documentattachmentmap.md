---
title: "DocumentAttachmentMap"
domain: object-reference
topic: documentattachmentmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.212Z
estimatedTokens: 359
keywords: [DocumentAttachmentMap, Maps, relationship, EmailTemplate, attachment, stored, Document, Calls, Special, Access, Rules, Usage]
---

# DocumentAttachmentMap

> Maps the relationship between an EmailTemplate and its attachment,
      which is stored as a Document.

# DocumentAttachmentMap

Maps the relationship between an EmailTemplate and its attachment, which is stored as a Document.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| DocumentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the document that this object tracks. |
| DocumentSequence | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents the order that the attachments will be included in the email defined by the EmailTemplate specified by the DocumentId. Label is Attachment Sequence. The first attachment is given a value of 0, and each subsequent attachment is given a value incremented by 1. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the EmailTemplate parent. The attachment identified by DocumentId is attached to the EmailTemplate specified in this field. |

## Usage

Use this object to map the relationship of an EmailTemplate to its attachments, and to specify the order of the attachments.

#### See Also

-   [EmailTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailtemplate.htm "Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.")

## Related Topics

- EmailTemplate (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailtemplate.htm)
