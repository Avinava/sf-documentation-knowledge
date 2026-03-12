---
title: "What to Test in Apex"
domain: apex-guide
topic: what-to-test-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.119Z
estimatedTokens: 351
keywords: [Test, Apex, Conditional, ternary, operators, considered, executed, unless, both, positive, negative, branches, executed., Note]
---

# What to Test in Apex

> Conditional and ternary operators are not considered executed unless both the positive
    and negative branches are executed.

# What to Test in Apex

Salesforce recommends that you write tests for the following:

Single action

Test to verify that a single record produces the correct, expected result.

Bulk actions

Any Apex code, whether a trigger, a class or an extension, may be invoked for 1 to 200 records. You must test not only the single record case, but the bulk cases as well.

Positive behavior

Test to verify that the expected behavior occurs through every expected permutation, that is, that the user filled out everything correctly and did not go past the limits.

Negative behavior

There are likely limits to your applications, such as not being able to add a future date, not being able to specify a negative amount, and so on. You must test for the negative case and verify that the error messages are correctly produced as well as for the positive, within the limits cases.

Restricted user

Test whether a user with restricted access to the sObjects used in your code sees the expected behavior. That is, whether they can run the code or receive error messages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Conditional and ternary operators are not considered executed unless both the positive and negative branches are executed.

For examples of these types of tests, see [Testing Example](atlas.en-us.apexcode.meta/apexcode/apex_testing_example.htm).

## Related Topics

- Testing
    Example (atlas.en-us.apexcode.meta/apexcode/apex_testing_example.htm)
