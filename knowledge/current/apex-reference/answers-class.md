---
title: "Answers Class"
domain: apex-reference
topic: answers-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.373Z
estimatedTokens: 660
namespace: System
keywords: [Answers, Represents, zone, answers., Usage, Example, findSimilar, yourQuestion, setBestReply, questionId, replyId]
---

# Answers Class

> Represents zone answers.

**Namespace:** `System`

# Answers Class

Represents zone answers.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Answers is a feature that enables users to ask questions and have zone members post replies. Members can then vote on the helpfulness of each reply, and the person who asked the question can mark one reply as the best answer.

For more information on answers, see “Answers Overview” in the Salesforce online help.

## Example

The following example finds questions in an internal zone that have similar titles as a new question:

```

```

The following example marks a reply as the best reply:

```

```

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

## Code Examples

```apex
public class FindSimilarQuestionController {

   public static void test() {
   // Instantiate a new question 
   Question question = new Question ();

   // Specify a title for the new question
   question.title = 'How much vacation time do full-time employees get?';

   // Specify the communityID (INTERNAL_COMMUNITY) in which to find similar questions. 
   Community community = [ SELECT Id FROM Community WHERE Name = 'INTERNAL_COMMUNITY' ];

   question.communityId = community.id;

   ID[] results = Answers.findSimilar(question);
   }
}
```

```
ID questionId = [SELECT Id FROM Question WHERE Title = 'Testing setBestReplyId' LIMIT 1].Id;
ID replyID = [SELECT Id FROM Reply WHERE QuestionId = :questionId LIMIT 1].Id;
Answers.setBestReply(questionId,replyId);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- findSimilar(yourQuestion) (atlas.en-us.apexref.meta/apexref/apex_classes_answers.htm)
- setBestReply(questionId, replyId) (atlas.en-us.apexref.meta/apexref/apex_classes_answers.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
