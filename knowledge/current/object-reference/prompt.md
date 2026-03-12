---
title: "Prompt"
domain: object-reference
topic: prompt
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.648Z
estimatedTokens: 1073
keywords: [Prompt, record, in-app, guidance, walkthrough, API, version, 46.0, later, Calls, Special, Access, Rules, Prompts, Walkthroughs]
---

# Prompt

> Represents record details about an in-app guidance prompt or
         walkthrough. Available in API version 46.0 and later.

# Prompt

Represents record details about an in-app guidance prompt or walkthrough. Available in API version 46.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

Prompts and walkthroughs help users discover your products and services, adopt your processes, or learn how to use a new feature. Add prompts and walkthroughs in Lightning Experience pages or apps or in supported Experience Cloud site pages. Add an optional action button or link that goes to a URL. Track views, action button clicks, and walkthrough completions.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To add, edit, manage, and view prompts and walkthroughs in Lightning Experience or in Experience Cloud sites, multiple permissions are required. See [Permissions for Creating and Accessing In-App Guidance](https://help.salesforce.com/s/articleView?id=sales.customhelp_lex_wt_license.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Prompts and Walkthroughs in Managed Packages

For considerations about including in-app guidance in a managed package, see [Guidelines for In-App Guidance in Managed Packages](https://help.salesforce.com/articleView?id=customhelp_iag_packages.htm&language=en_US) in Salesforce Help.

For more information about creating managed packages, see [Create a First-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/creating_packages.htm).

Unmanaged packages must contain a namespace prefix. For more information, see [Register a Namespace for a First-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/register_namespace_prefix.htm) and [What happens to my namespace prefix when I install a package?](https://help.salesforce.com/articleView?id=faq_distribution_installing_what_happens_to_my.htm&language=en_US).

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the language used in the org where the in-app guidance was created. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label. Maximum of 80 characters. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren't Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
