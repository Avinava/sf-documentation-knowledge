---
title: "Sample Experience Cloud Site Validation Rules"
domain: usefulValidationRules
topic: sample-experience-cloud-site-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.353Z
estimatedTokens: 483
keywords: [Sample, Experience, Cloud, Site, Validation, Rules, rule, examples, various, cases, preventing, offensive, language, questions, replies]
---

# Sample Experience Cloud Site Validation Rules

> Validation rule examples for various use cases, like preventing offensive language in
  questions, replies, ideas, and idea comments.

# Sample Experience Cloud Site Validation Rules

Validation rule examples for various use cases, like preventing offensive language in questions, replies, ideas, and idea comments.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions by Context](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Preventing Offensive Language in Questions

| Field | Value |
| --- | --- |
| Description: | Prevents users from entering offensive language in the Title and Description fields when asking a question. |
| Formula: | OR(CONTAINS(Title, 'darn'), CONTAINS(Body, 'darn')) |
| Error Message: | Question title or description contains offensive language. |

## Preventing Offensive Language in Replies

| Field | Value |
| --- | --- |
| Description: | Prevents users from entering offensive language when replying to a question. |
| Formula: | OR(CONTAINS(Body, 'darn'), CONTAINS(Body, 'dang')) |
| Error Message: | Reply contains offensive language. |

## Preventing Offensive Language in Ideas

| Field | Value |
| --- | --- |
| Description: | Prevents users from entering offensive language in the Title and Description fields when posting an idea. |
| Formula: | OR(CONTAINS(Title, 'darn'), CONTAINS(Body, 'darn')) |
| Error Message: | Idea title or description contains offensive language. |

## Preventing Offensive Language in Idea Comments

| Field | Value |
| --- | --- |
| Description: | Prevents users from entering offensive language when posting a comment. |
| Formula: | OR(CONTAINS(CommentBody , 'darn'), CONTAINS(CommentBody, 'dang')) |
| Error Message: | Comment contains offensive language. |
