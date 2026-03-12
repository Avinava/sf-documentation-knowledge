---
title: "PromptActionShare"
domain: object-reference
topic: promptactionshare
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.668Z
estimatedTokens: 730
keywords: [PromptActionShare, sharing, entry, prompt, action, record, API, version, 46.0, later, Calls, Special, Access, Rules]
---

# PromptActionShare

> Represents a sharing entry on a prompt action record. Available
      in API version 46.0 and later.

# PromptActionShare

Represents a sharing entry on a prompt action record. Available in API version 46.0 and later.

Prompts and walkthroughs help users discover your products and services, adopt your processes, or learn how to use a new feature. Add prompts and walkthroughs in Lightning Experience pages or apps or in supported Experience Cloud site pages. Add an optional action button or link that goes to a URL. Track views, action button clicks, and walkthrough completions.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To add, edit, manage, and view prompts and walkthroughs in Lightning Experience or in Experience Cloud sites, multiple permissions are required. See [Permissions for Creating and Accessing In-App Guidance](https://help.salesforce.com/s/articleView?id=sales.customhelp_lex_wt_license.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the access level of users for in-app guidance. Valid values are Read, Edit, and All. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent. |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited. Valid values include:Rule—The User or Group has access via a sharing rule.GuestRule—The User or Group has access via a guest user sharing rule.Manual—The User or Group has access because a User with “All” access manually shared the prompt action with them.Owner—The User is the owner of the prompt action. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the User or Group. |
