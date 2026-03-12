---
title: "ContentAsset"
domain: object-reference
topic: contentasset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.011Z
estimatedTokens: 834
keywords: [ContentAsset, Salesforce, file, converted, asset, custom, app, Lightning, Experience, files, org, setup, configuration, packaged, referenced]
---

# ContentAsset

> Represents a Salesforce file that has been converted to an asset file
         in a custom app in Lightning Experience. Use asset files for org setup and configuration.
         Asset files can be packaged and referenced by other components. This object is
      available in API version 38.0 and later.

# ContentAsset

Represents a Salesforce file that has been converted to an asset file in a custom app in Lightning Experience. Use asset files for org setup and configuration. Asset files can be packaged and referenced by other components. This object is available in API version 38.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   Only admin users can edit or delete ContentAssets.
-   Users with file access can create and query ContentAssets.
-   It isn’t necessary to create asset files for regular, collaborative use of Salesforce Files. “Assetize” files only when they’re used in setup and configuration situations.
-   Neither the file (ContentDocument) nor the asset settings record (ContentAssets) can be deleted if the asset file is referenced by another component.
-   ContentAsset doesn’t support search or most recently used (MRU) lists.
-   ContentAsset doesn’t support Apex triggers.

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the document.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the asset file in the API. ContentAsset.DeveloperName:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscoresIn managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| IsVisibleByExternalUsers | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether unauthenticated users can see the asset file. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language for this document. This field defaults to the user's language unless the org is multi-language enabled. Specifies the language of the labels returned. The value must be a valid user locale (language and country), such as de_DE or en_GB. For more information on locales, see the Language field on the CategoryNodeLocalization object. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the asset file. This internal label doesn’t get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |
