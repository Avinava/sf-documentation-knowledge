---
title: "QuestionAndAnswers Class"
domain: apex-reference
topic: questionandanswers-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.379Z
estimatedTokens: 2385
namespace: ConnectApi
keywords: [QuestionAndAnswers, question, answers, suggestions, getSuggestions, communityId, subjectId, includeArticles, maxResults, API, Version, Requires, Chatter, Usage, setTestGetSuggestions]
---

# QuestionAndAnswers Class

> Get question and answers suggestions.

**Namespace:** `ConnectApi`

# QuestionAndAnswers Class

Access question and answers suggestions.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

-   **[QuestionAndAnswers Methods](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_methods)**
    These methods are for QuestionAndAnswers. All methods are static.

## QuestionAndAnswers Methods

These methods are for QuestionAndAnswers. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

-   **[getSuggestions(communityId, q, subjectId, includeArticles, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_getSuggestions_1)**
    Get question and answers suggestions.
-   **[setTestGetSuggestions(communityId, q, subjectId, includeArticles, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_setTestGetSuggestions_1)**
    Register a ConnectApi.QuestionAndAnswersSuggestions object to be returned when getSuggestions is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.
-   **[updateQuestionAndAnswers(communityId, feedElementId, questionAndAnswersCapability)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_updateQuestionAndAnswers_1)**
    Choose or change the best answer for a question.

### getSuggestions(communityId, q, subjectId, includeArticles, maxResults)

Get question and answers suggestions.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.QuestionAndAnswersSuggestions getSuggestions(String communityId, String q, String subjectId, Boolean includeArticles, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specify a subject ID to search only questions on that object. If the ID is a topic or a user, the ID is ignored.

includeArticles

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify true to include knowledge articles in the search results. To return only questions, specify false.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of results to return for each type of item. Possible values are 1–10. The default value is 5.

#### Return Value

Type: [ConnectApi.QuestionAndAnswersSuggestions](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_question_and_answer_suggestion_collection.htm "Question and answers suggestions.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetSuggestions(communityId, q, subjectId, includeArticles, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_setTestGetSuggestions_1 "Register a ConnectApi.QuestionAndAnswersSuggestions object to be returned when getSuggestions is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetSuggestions(communityId, q, subjectId, includeArticles, maxResults, result)

Register a ConnectApi.QuestionAndAnswersSuggestions object to be returned when getSuggestions is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

32.0

#### Signature

public static Void setTestGetSuggestions(String communityId, String q, String subjectId, Boolean includeArticles, Integer maxResults, ConnectApi.QuestionAndAnswersSuggestions result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specify a subject ID to search only questions on that object. If the ID is a topic or a user, the ID is ignored.

includeArticles

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify true to include knowledge articles in the search results. To return only questions, specify false.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of results to return for each type of item. Possible values are 1–10. The default value is 5.

result

Type: [ConnectApi.QuestionAndAnswersSuggestions](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_question_and_answer_suggestion_collection.htm "Question and answers suggestions.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getSuggestions(communityId, q, subjectId, includeArticles, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm#apex_ConnectAPI_QuestionAndAnswers_getSuggestions_1 "Get question and answers suggestions.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


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

## Code Examples

```
ConnectApi.QuestionAndAnswersCapabilityInput qaInput = new ConnectApi.QuestionAndAnswersCapabilityInput();
qaInput.bestAnswerId = '0D7D00000000lMAKAY';

ConnectApi.QuestionAndAnswersCapability qa = ConnectApi.QuestionAndAnswers.updateQuestionAndAnswers(null, '0D5D0000000XZjJ', qaInput);
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- QuestionAndAnswers Methods (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm)
- getSuggestions(communityId, q, subjectId, includeArticles, maxResults) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm)
- setTestGetSuggestions(communityId, q, subjectId, includeArticles, maxResults, result) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm)
- updateQuestionAndAnswers(communityId, feedElementId, questionAndAnswersCapability) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_QuestionAndAnswers_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.QuestionAndAnswersSuggestions (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_question_and_answer_suggestion_collection.htm)
- ConnectApi.QuestionAndAnswersCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_question_and_answers_capability.htm)
