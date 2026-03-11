---
title: "PublishingService Class"
domain: apex-reference
topic: publishingservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.330Z
keywords: [PublishingService, Class, Submits, article, translation, specified, language., assigns, user, due, date, submittal, returns, new, draft, translation., submitForTranslation, articleId, language, assigneeId]
---

# PublishingService Class

> Submits an article for translation to the specified language.
Also assigns the specified user and due date to the submittal and
returns new ID of the draft translation.

### submitForTranslation(articleId, language, assigneeId, dueDate)

Submits an article for translation to the specified language. Also assigns the specified user and due date to the submittal and returns new ID of the draft translation.

#### Signature

public static String submitForTranslation(String articleId, String language, String assigneeId, Datetime dueDate)

#### Parameters

articleId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

assigneeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

dueDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```