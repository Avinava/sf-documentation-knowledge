---
title: "SoqlWhereCondition"
domain: api
topic: soqlwherecondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.218Z
estimatedTokens: 1010
keywords: [SoqlWhereCondition, SOQL, filter, conditions, view, Evaluating, SoqlWhereConditions]
---

# SoqlWhereCondition

> Contains information about SOQL filter conditions for a list view.

# SoqlWhereCondition

Contains information about SOQL filter conditions for a list view.

Each condition listed in SoqlWhereCondition represents a condition expression in a SOQL WHERE clause that compares a field value to a comparison value using a condition operator. Each condition contains the following properties.

| Name | Type | Description |
| --- | --- | --- |
| field | string | The object field used by the filter condition. |
| operator | soqlOperator | The filter operation. Operations include:equals—Condition is true if the field value equals the specified value. String comparisons using the equals operator are case sensitive for unique case-sensitive fields and case insensitive for all other fields.excludes—Condition is true for multi-select picklist fields if the selected field values are not in the list of condition values.greaterThan—Condition is true if the field value is greater than the specified value.greaterThenOrEqualTo—Condition is true if the field value is greater than or equal to the specified value.in—Condition is true if the field value equals any specified value in the values list.includes—Condition is true for multi-select picklist fields if the selected field values are in the list of condition values.lessThan—Condition is true if the field value is less than the specified value.lessThanOrEqualTo—Condition is true if the field value is less than or equal to the specified value.like—Condition is true if the field value matches the specified value, using character matching logic described in Comparison Operators in the SOQL and SOSL Reference.notEquals—Condition is true if the field value doesn’t equal the specified value.notIn—Condition is true if the field value doesn’t equal any specified value in the values list.notLike—Condition is true if the field value doesn’t match the specified value using the character matching logic described in Comparison Operators in the SOQL and SOSL Reference. Available in API version 41.0 and later.within—Condition is true if the field value location is within the value distance using a location-based comparison. For more information, see Location-Based SOQL Queries in the SOQL and SOSL Reference. |
| values | string[] | A list of one or more values used to compare with the field value using the operator comparison logic. |

## Evaluating SoqlWhereConditions

In the SOAP API, Salesforce uses subclasses of SoqlWhereCondition to represent different categories of conditions. Use your development language’s type comparison functionality (such as Java’s instanceof operator) to determine which subclass is used for a particular instance of SoqlWhereCondition.

The SoqlConditionGroup subclass represents a group of SOQL WHERE clause conditions and uses the following properties.

| Name | Type | Description |
| --- | --- | --- |
| conditions | condition[] | List of filter conditions. If the list view uses filter logic, each logical filter group is represented with a conditions list. |
| conjunction | soqlConjunction | A conjunction operation that describes the filter logic to use for multiple conditions in a logical filter group. Values include:and—All conditions must be true for the overall SoqlWhereCondition.or—One of the conditions must be true for the overall SoqlWhereCondition. |

The SoqlNotCondition subclass represents a special use of the like operator. In API version 40.0 and earlier, when evaluating a SoqlWhereCondition that was created using a not like operator (displayed as **does not contain** in the UI), the operator value in the condition is like. Salesforce also uses the SoqlNotCondition subclass of SoqlWhereCondition to represent the complete condition. The following example uses Java’s instanceof operator to determine whether a not like operation is specified.

```

```

In API version 41.0 and later, the notLike operator is used instead of SoqlNotCondition and a like operator. The notLike operator is available only for list views. You can’t use it in SOQL queries used in other Salesforce features.

## Code Examples

```
if (resultSoqlWhereCondition instanceof SoqlNotCondition) {
  // condition is really NOT condition
  // if operator is "like", this condition really means "not like"
  ...
}
```
