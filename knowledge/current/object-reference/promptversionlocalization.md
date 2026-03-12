---
title: "PromptVersionLocalization"
domain: object-reference
topic: promptversionlocalization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.710Z
estimatedTokens: 807
keywords: [PromptVersionLocalization, translated, label, for-app, guidance, Translation, Workbench, enabled, org, API, version, 48.0, later, Calls, Special]
---

# PromptVersionLocalization

> Represents the translated value of a label for-app guidance when the
         Translation Workbench is enabled for your org. Available in API version 48.0 and
      later.

# PromptVersionLocalization

Represents the translated value of a label for-app guidance when the Translation Workbench is enabled for your org. Available in API version 48.0 and later.

Use prompts and walkthroughs to display announcements, training, or news to users within the app. Choose to add an action button or link that links to a URL of your choice. Track views, action button clicks, and walkthrough completions.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To add, edit, manage, and view prompts and walkthroughs in Lightning Experience or in Experience Cloud sites, multiple permissions are required. See [Permissions for Creating and Accessing In-App Guidance](https://help.salesforce.com/s/articleView?id=sales.customhelp_lex_wt_license.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Prompts and Walkthroughs in Managed Packages

For considerations about including in-app guidance in a managed package, see [Guidelines for In-App Guidance in Managed Packages](https://help.salesforce.com/articleView?id=customhelp_iag_packages.htm&language=en_US) in Salesforce Help.

For more information about creating managed packages, see [Create a First-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/creating_packages.htm).

Unmanaged packages must contain a namespace prefix. For more information, see [Register a Namespace for a First-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/register_namespace_prefix.htm) and [What happens to my namespace prefix when I install a package?](https://help.salesforce.com/articleView?id=faq_distribution_installing_what_happens_to_my.htm&language=en_US).

## Fields

| Field | Details |
| --- | --- |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionIndicates the language used in the org where the in-app guidance was created. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren't Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the in-app guidance. |
| Value | TypetextareaPropertiesCreate, Filter, Sort, UpdateDescriptionThe actual translated label of the in-app guidance. |
