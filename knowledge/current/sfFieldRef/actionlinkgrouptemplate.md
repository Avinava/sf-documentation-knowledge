---
title: "ActionLinkGroupTemplate"
domain: sfFieldRef
topic: actionlinkgrouptemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.217Z
estimatedTokens: 484
namespace: NamespacePrefix
keywords: [ActionLinkGroupTemplate, Action, link, templates, let, reuse, definitions, package, distribute, links, button, feed, element, Clicking, take]
---

# ActionLinkGroupTemplate

> Action link templates let you reuse action link definitions and
			package and distribute action links. An action link is a button on a feed element.
			Clicking on an action link can take a user to another Web page, initiate a file
			download, or invoke an API call to an external server or Salesforce. Use action links to
			integrate Salesforce and third-party services into the feed. Every action link belongs
			to an action link group and action links within the group are mutually exclusive.
		This object is available in API version 33.0 and later.

**Namespace:** `NamespacePrefix`

# ActionLinkGroupTemplate

Action link templates let you reuse action link definitions and package and distribute action links. An action link is a button on a feed element. Clicking on an action link can take a user to another Web page, initiate a file download, or invoke an API call to an external server or Salesforce. Use action links to integrate Salesforce and third-party services into the feed. Every action link belongs to an action link group and action links within the group are mutually exclusive. This object is available in API version 33.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActionLinkGroupTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionlinkgrouptemplate.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| ExecutionsAllowed | Executions Allowed | picklist |  | 255 |  |  |
| HoursUntilExpiration | Hours until Expiration | int | 9 |  |  |  |
| Id | Action Link Group Template ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPublished | Published | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Name | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
