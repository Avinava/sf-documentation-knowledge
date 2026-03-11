---
title: "updateQuestionAndAnswers(communityId, feedElementId,
      questionAndAnswersCapability)"
domain: apex-reference
topic: updatequestionandanswerscommunityid-feedelementid-questionandanswerscapability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.560Z
keywords: [updateQuestionAndAnswers, communityId, feedElementId, questionAndAnswersCapability, Choose, change, best, answer, question., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# updateQuestionAndAnswers(communityId, feedElementId,
      questionAndAnswersCapability)

> Choose or change the best answer for a question.

### updateQuestionAndAnswers(communityId, feedElementId, questionAndAnswersCapability)

Choose or change the best answer for a question.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.QuestionAndAnswersCapability updateQuestionAndAnswers(String communityId, String feedElementId, ConnectApi.QuestionAndAnswersCapabilityInput questionAndAnswersCapability)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

questionAndAnswersCapability

Type: [ConnectApi.QuestionAndAnswersCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_question_and_answers_capability.htm#apex_connectapi_input_question_and_answers_capability "Create or edit a question feed element or set the best answer of the existing question feed element.")

Specify the best answer (comment ID) for the question.

#### Return Value

Type: [ConnectApi.QuestionAndAnswersCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_question_and_answers_capability.htm#apex_connectapi_output_question_and_answers_capability "If a feed element has this capability, it has a question and comments on the feed element are answers to the question.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example

```

```