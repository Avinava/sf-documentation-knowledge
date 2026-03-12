---
title: "ContentDocumentLink"
domain: sfFieldRef
topic: contentdocumentlink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.091Z
estimatedTokens: 309
keywords: [ContentDocumentLink, link, Salesforce, CRM, Content, document, file, ContentNote, it's, shared, users, groups, records, libraries, versions]
---

# ContentDocumentLink

> Represents the link between a Salesforce CRM Content document, Salesforce file, or ContentNote and where it's shared. A file can be shared with other users, groups,
			records, and Salesforce CRM Content libraries. This object is available in versions 21.0 and later for Salesforce CRM Content documents and Salesforce Files.

# ContentDocumentLink

Represents the link between a Salesforce CRM Content document, Salesforce file, or ContentNote and where it's shared. A file can be shared with other users, groups, records, and Salesforce CRM Content libraries. This object is available in versions 21.0 and later for Salesforce CRM Content documents and Salesforce Files.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContentDocumentLink](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlink.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContentDocumentId | Content Document ID | reference |  | 18 |  |  |
| Id | ContentDocumentLink ID | id |  | 18 |  |  |
| IsDeleted | Is Deleted | boolean |  |  |  |  |
| LinkedEntityId | Linked Entity ID | reference |  | 18 |  |  |
| ShareType | Share Type | picklist |  | 40 |  |  |
| SystemModstamp | Last Modified Date | datetime |  |  |  |  |
| Visibility | Visibility | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
