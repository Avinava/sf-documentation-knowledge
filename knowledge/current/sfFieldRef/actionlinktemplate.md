---
title: "ActionLinkTemplate"
domain: sfFieldRef
topic: actionlinktemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:46.224Z
estimatedTokens: 525
keywords: [ActionLinkTemplate, Action, link, templates, let, reuse, definitions, package, distribute, links, button, feed, element, Clicking, take]
---

# ActionLinkTemplate

> Action link templates let you reuse action link definitions and
			package and distribute action links. An action link is a button on a feed element.
			Clicking an action link can take a user to another Web page, initiate a file download,
			or invoke an API call to an external server or Salesforce. Use action links to integrate
			Salesforce and third-party services into the feed. This object is available in API
		version 33.0 and later.

# ActionLinkTemplate

Action link templates let you reuse action link definitions and package and distribute action links. An action link is a button on a feed element. Clicking an action link can take a user to another Web page, initiate a file download, or invoke an API call to an external server or Salesforce. Use action links to integrate Salesforce and third-party services into the feed. This object is available in API version 33.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActionLinkTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionlinktemplate.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionLinkGroupTemplateId | Action Link Group Template ID | reference |  | 18 |  |  |
| ActionUrl | Action URL | textarea |  | 32000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Headers | HTTP Headers | textarea |  | 32000 |  |  |
| Id | Action Link Template ID | id |  | 18 |  |  |
| IsConfirmationRequired | Confirmation Required | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsGroupDefault | Default Link in Group | boolean |  |  |  |  |
| Label | Label | string |  | 255 |  |  |
| LabelKey | Label Key | string |  | 128 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LinkType | Action Type | picklist |  | 255 |  |  |
| Method | HTTP Method | picklist |  | 255 |  |  |
| Position | Position | int | 9 |  |  |  |
| RequestBody | HTTP Request Body | textarea |  | 32000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserAlias | Custom User Alias | string |  | 128 |  |  |
| UserVisibility | User Visibility | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
