---
title: "getSuggestions(communityId, q, subjectId, includeArticles,
   maxResults)"
domain: apex-reference
topic: getsuggestionscommunityid-q-subjectid-includearticles-maxresults
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.560Z
keywords: [getSuggestions, communityId, subjectId, includeArticles, maxResults, Get, question, answers, suggestions., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, See]
---

# getSuggestions(communityId, q, subjectId, includeArticles,
   maxResults)

> Get question and answers suggestions.

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