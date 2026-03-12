---
title: "Use the SOQL Operator in Scoping Rule Record Criteria"
domain: scoping-rules
topic: use-the-soql-operator-in-scoping-rule-record-criteria
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.354Z
estimatedTokens: 1038
keywords: [SOQL, Operator, Scoping, Rule, Record, Criteria, rule’s, refer, target, junction, edit, rules, Tooling, Metadata, API]
---

# Use the SOQL Operator in Scoping Rule Record Criteria

> When a rule’s record criteria must refer to a field on an object other than the target
  object, such as a junction object, use the SOQL operator in record criteria. To create or edit
  scoping rules with the SOQL operator in the record criteria, use the Tooling or Metadata
  API.

# Use the SOQL Operator in Scoping Rule Record Criteria

When a rule’s record criteria must refer to a field on an object other than the target object, such as a junction object, use the SOQL operator in record criteria. To create or edit scoping rules with the SOQL operator in the record criteria, use the Tooling or Metadata API.

| Available in: Lightning Experience in Performance and Unlimited Editions |
| --- |


| User Permissions Needed |
| --- |
| To create and manage scoping rules: | Manage Sharing |
| To view scoping rules: | View Setup & Configuration AND View Restriction and Scoping Rules |

This scoping rule scopes the account records that a banker sees by filtering according to the branch where the banker is working.

![Code sample shows a callout labeled 1 above 'SOQL' in the right hand side of the recordFilter expression. It shows a a callout labeled 2 beside the recordFilter expression. It shows a callout labeled 3 beside the targetEntity expression.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fscoping_rules_SOQL_operator_callouts.png&folder=scoping_rules)

| 1 | SOQL Operator | The operator that tells Salesforce to run a SELECT statement on the junction object. |
| --- | --- | --- |
| 2 | Record Filter | The record criteria in this expression is used to filter records when the users specified by the user criteria use a list view, report, or SOQL query. |
| 3 | Target Entity | The standard or custom object whose records are scoped by the scoping rule. Scoping rules support custom objects and the account, case, contact, event, lead, opportunity, and task standard objects only. |

**Detail of Record Filter:**

<recordFilter>SOQL(Id, SELECT AccountId FROM BranchUnitCustomer USING SCOPE EVERYTHING WHERE BranchUnitId IN(SELECT CurrentBranchId From Banker WHERE UserOrContactId = $User.Id))</recordFilter>

1.  In your rule’s recordFilter, start a query between double quotes: "SOQL()".
2.  In the query, specify a left operand that is an ID or reference field from the target entity object that you want to retrieve. The left operand must query a single ID (primary key) or reference (foreign key) field.
3.  Write a SELECT statement that specifies the field and the object that stores the field.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=scoping_rules)

    #### Important

    The SELECT statement, including nested SELECT statements, must include USING SCOPE EVERYTHING. USING SCOPE EVERYTHING is the only valid scope clause syntax for scoping rules.


**Performance Considerations**

Before you activate a scoping rule that includes the SOQL operator, test the record filter’s performance impact by running the SELECT statement separately in your API client of choice.

-   Take the SELECT statement and run it.
-   Evaluate whether the results that are returned make sense. Does the SELECT statement return the expected results rapidly? If it’s fast for a given user, the rule is likely to run efficiently.
-   If the SELECT statement isn’t performant, isolate the field that is slowing performance. Work with Salesforce customer support to find out if the field can be indexed.

**Other Considerations**

-   In a SOQL operator’s SELECT statement, the query’s junction object and the scoping rule’s targetEntity can’t be the same object.
-   The SOQL operator doesn't support $User syntax except for $User.Id. Dynamic queries within the SOQL operator aren't supported, including on other user object fields.
-   Don’t use objects that aren’t supported in subqueries in your record filter’s SELECT statement. See [Comparison Operators](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm) for a list of valid operators that you can use in the field expression of a WHERE clause, which you use in a SELECT statement.

#### See Also

-   [*Knowledge Article*: Improve Performance of SOQL Queries using a Custom Index](https://help.salesforce.com/apex/HTViewSolution?urlname=Custom-indexes-for-an-organization-to-help-improve-performance&language=en_US)
