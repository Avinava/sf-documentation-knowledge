---
title: "ConversationMessageDefinitionTranslation"
domain: metadata-api
topic: conversationmessagedefinitiontranslation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.365Z
keywords: [ConversationMessageDefinitionTranslation, Note, Parent, Type, Version, Fields, ConversationMessageConstantValueTranslation, Usage, Example]
---

# ConversationMessageDefinitionTranslation

# ConversationMessageDefinitionTranslation

Represents translated labels and constant values for conversation message definitions in Enhanced Messaging and Messaging for In-App and Web.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

This complex type is used as a nested element within the ConversationMessageDefinition metadata type and is not deployed as a standalone metadata component. It enables multilingual support by allowing constant values and labels to be translated into different languages for customer-facing messaging.

## Parent Type

This type is used as a nested complex type within the [ConversationMessageDefinition](atlas.en-us.api_meta.meta/api_meta/meta_conversationmessagedefinition.htm "Represents a messaging component in an Enhanced Messaging channel or Messaging for In-App and Web session.") metadata type.

## Version

ConversationMessageDefinitionTranslation is available in API version 61.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| constantValueTranslations | Field TypeConversationMessageConstantValueTranslation[]DescriptionOptional. An array of constant value translations that define translated versions of constants within the messaging component. Each element provides translations for specific constant values that customers see in the messaging interface. Available in API version 61.0 and later. |
| label | Field TypestringDescriptionRequired. The translated label or display name for the conversation message definition. This represents the name that agents see when selecting messaging components in their preferred language. Available in API version 61.0 and later. |
| name | Field TypestringDescriptionRequired. The unique identifier or name of the conversation message definition being translated. This must match the name of the base ConversationMessageDefinition for which this translation is created. Available in API version 61.0 and later. |

## ConversationMessageConstantValueTranslation

Represents a translated constant value for conversation message definitions. Available in API version 61.0 and later.

| Field Name | Description |
| --- | --- |
| name | Field TypestringDescriptionRequired. The name of the constant value being translated. |
| value | Field TypestringDescriptionRequired. The translated value for this constant. |

## Usage Example

This complex type is used within ConversationMessageDefinition to provide translations. Here's an example context:

```

```