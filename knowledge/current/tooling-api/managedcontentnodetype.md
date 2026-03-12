---
title: "ManagedContentNodeType"
domain: tooling-api
topic: managedcontentnodetype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.114Z
estimatedTokens: 726
keywords: [ManagedContentNodeType, standard, custom, content, node, created, org, API, version, 47.0, later, SOAP, Calls, REST, HTTP]
---

# ManagedContentNodeType

> Represents
        standard and custom content node types created for use with your org. Available in API
        version 47.0 and later.

# ManagedContentNodeType

Represents standard and custom content node types created for use with your org. Available in API version 47.0 and later.

## Supported SOAP Calls

query(), retrieve()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| HelpText | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionProvides assistive text in the UI, displayed as an info bubble for the field. If this field is empty, no info bubble icon or text is displayed. |
| NodeLabel | TypestringPropertiesFilter, Group, SortDescriptionDeclares the label for the field as it appears in the UI. |
| NodeName | TypestringPropertiesFilter, Group, SortDescriptionUnique name of the NodeType within the content type.NodeName is a simple text field that allows up to 100 alphanumeric characters and underscores. The name must begin with a letter, not include spaces, can’t have two consecutive underscores, and can’t end with an underscore. |
| NodeOptionsIsLocalizable | TypebooleanPropertiesFilterDescriptionDeclares a field as localizable so it’s exported (true) or not (false) by the content translation service in the Digital Experiences app. Default is false. |
| NodeOptionsIsRequired | TypebooleanPropertiesFilterDescriptionDeclares a field as required (true) or not (false). Fields declared as a required are indicated by a red asterisk. If a value isn’t added to the field, the form can't be saved and a standard error is displayed. Default is false. |
| NodeType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIdentifies the supported type of content in the node. Passed as a string. There’s a maximum of 15 node types per content type. Valid values are:TEXT—Simple text node (maximum length 255 characters)MTEXT—Multi-line text node (maximum length 2000 characters)RTE—Rich text node (maximum length 65536 characters)IMG—Image nodeURL—URL node (maximum length 255 characters)URL accepts protocol string values starting with http://, https://, mailto:, tel:, and /.DATE—Date nodeDATE accepts dates only in the format yyyy-MM-dd.DATETIME—Datetime nodeDATETIME accepts date and time in the format: yyyy-MM-dd'T'HH:mm:ss.SSS'Z' (UTC datetime in ISO 8601 format).NAMEFIELD—Declares the field as the name that represents the content when referenced in the UI. For example, in a list of available content in the Digital Experiences app or as available for inclusion in a collection in Experience Cloud sites.Declare only one NodeType in your managed content type as NAMEFIELD.NAMEFIELD is a string type of 200 characters or less.When NAMEFIELD is used, isRequired must also be set to True for the field. |
| PlaceholderText | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionProvides assistive text in the UI, displayed as placeholder, or ghost text, in a field before any entry is made. For example, Enter a title for your article... |
