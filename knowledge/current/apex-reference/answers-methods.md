---
title: "Answers Methods"
domain: apex-reference
topic: answers-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.150Z
keywords: [Answers, Methods, Returns, list, similar, questions, based, title, specified, question., findSimilar, yourQuestion, Signature, Parameters, Return, Value, Usage, setBestReply, questionId, replyId]
---

# Answers Methods

> Returns a list of similar questions based on the title
of the specified question.

## Answers Methods

The following are methods for Answers. All methods are static.

-   **[findSimilar(yourQuestion)](atlas.en-us.apexref.meta/apexref/apex_classes_answers.htm#apex_System_Answers_findSimilar)**  
    Returns a list of similar questions based on the title of the specified question.
-   **[setBestReply(questionId, replyId)](atlas.en-us.apexref.meta/apexref/apex_classes_answers.htm#apex_System_Answers_setBestReply)**  
    Sets the specified reply for the specified question as the best reply. Because a question can have multiple replies, setting the best reply helps users quickly identify the reply that contains the most helpful information.

### findSimilar(yourQuestion)

Returns a list of similar questions based on the title of the specified question.

#### Signature

public static ID\[\] findSimilar(Question yourQuestion)

#### Parameters

yourQuestion

Type: Question

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

#### Usage

Each findSimilar call counts against the SOSL statements governor limit allowed for the process.

### setBestReply(questionId, replyId)

Sets the specified reply for the specified question as the best reply. Because a question can have multiple replies, setting the best reply helps users quickly identify the reply that contains the most helpful information.

#### Signature

public static Void setBestReply(String questionId, String replyId)

#### Parameters

questionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

replyId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void