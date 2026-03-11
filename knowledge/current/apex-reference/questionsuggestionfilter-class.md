---
title: "QuestionSuggestionFilter Class"
domain: apex-reference
topic: questionsuggestionfilter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.274Z
keywords: [QuestionSuggestionFilter, Class, Sets, new, list, users, replace, current, where, IDs, passed, argument., filter, optional., setUserIds, userIds, Signature, Parameters, Return, Value]
---

# QuestionSuggestionFilter Class

> Sets a new list of users to replace the current list of users where
            the users IDs are passed in as an argument. This filter is optional.

### setUserIds(userIds)

Sets a new list of users to replace the current list of users where the users IDs are passed in as an argument. This filter is optional.

#### Signature

public void setUserIds(List<String\> userIds)

#### Parameters

userIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of user IDs.

#### Return Value

Type: void