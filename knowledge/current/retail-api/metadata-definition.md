---
title: "Metadata Definition"
domain: retail-api
topic: metadata-definition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.111Z
estimatedTokens: 702
keywords: [Metadata, Definition, topic, structure, wizard, components, build, wizards, Configuration, WizardComponentMetadata, WizardButtonMetadata]
---

# Metadata Definition

> This topic describes the metadata structure and the available
      wizard components that can be used to build wizards.

# Metadata Definition

This topic describes the metadata structure and the available wizard components that can be used to build wizards.

## Wizard Configuration

Wizards are generated from a metadata JSON structure defining the list of components that are part of a wizard along with some additional properties to define the available actions and the general layout.

| Property | Type | Required? | Default Value | Description |
| --- | --- | --- | --- | --- |
| footerLeftButtons | Array<String \| WizardButtonMetadata> | false | [] | List of button actions that appears on the footer. The actions cancel and submit have default button styles and can be specified as strings. For custom actions, use the WizardButtonMetadata structure to define proper styling for the buttons. |
| footerRightButtons | Array<String \| WizardButtonMetadata> | false | [] | List of button actions that appears on the footer. The actions cancel and submit have default button styles and can be specified as strings. For custom actions, use the WizardButtonMetadata structure to define proper styling for the buttons. |
| components | Array<WizardComponentMetadata> | true |  | List of metadata definitions for the components in the wizard. |
| columns | Number | false | 2 | Number of columns the WizardComponent displays. |
| title | String | true |  | Title for the wizard that is displayed on the header of the modal. |
| size | String | true |  | Wizard modal size.Possible values:smalllarge |

## WizardComponentMetadata

This metadata type describes the components that are inside the wizard. Components render in same order they’re placed in the list.

Each component has its own specific attributes, however, all components share a common set of attributes that must be specified:

```

```

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| id | String | true | Case-sensitive unique identifier of the component instance. This identifier must be unique between all components in the wizard metadata configuration |
| type | String | true | Type of the component to render. this attribute indicates the component that is rendered on UI. Also, this attribute defines the additional attributes required for the component. |

## WizardButtonMetadata

This metadata structure defines the buttons that appear at the bottom of the wizard.

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | true | The action that will be performed after clicking the button. Button type is a free text, which is returned along with the output object when the user clicks a button. |
| brand | String | true | UI Type of the button. Possible values are:baseneutralbrandbrand-outlinedestructivedestructive-textinversesuccess |
| label | String | true | Label for the button. |

## Code Examples

```
{
    "id": "mySlogan"
    "type": "Text",
    "outputProperty": "Slogan",
    "required": true,
    "label": "Slogan",
    "maxLength": 80,
    "minLength": 1,
    "defaultValue": ""
}
```
