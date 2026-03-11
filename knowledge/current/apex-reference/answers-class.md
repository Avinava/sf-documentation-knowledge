---
title: "Answers Class"
domain: apex-reference
topic: answers-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.150Z
keywords: [Answers, Class, Sets, specified, reply, question, best, reply., Because, multiple, replies, setting, helps, users, quickly, identify, contains, most, helpful, information.]
---

# Answers Class

> Sets the specified reply for the specified question as
the best reply. Because a question can have multiple replies, setting
the best reply helps users quickly identify the reply that contains
the most helpful information.

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