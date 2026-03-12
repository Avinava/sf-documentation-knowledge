---
title: "LoyaltyProgramSetup"
domain: loyalty
topic: loyaltyprogramsetup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.512Z
estimatedTokens: 4166
keywords: [LoyaltyProgramSetup, configuration, loyalty, program, process, including, rules, processes, determine, how, new, transaction, journals, processed, meet]
---

# LoyaltyProgramSetup

> Represents the configuration of a loyalty program process
			including its parameters and rules. Program processes determine how new transaction
		journals are processed. When new transaction journals meet the criteria and conditions for a
		program process, actions that are set up in the process are triggered for the transaction
		journals.

# LoyaltyProgramSetup

Represents the configuration of a loyalty program process including its parameters and rules. Program processes determine how new transaction journals are processed. When new transaction journals meet the criteria and conditions for a program process, actions that are set up in the process are triggered for the transaction journals.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=loyalty)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

LoyaltyProgramSetup components have the suffix loyaltyProgramSetup and are stored in the loyaltyProgramSetups folder.

## Version

LoyaltyProgramSetup components are available in API version 54.0 and later for Loyalty Management and in API version 59.0 and later for Referral Marketing.

## Special Access Rules

To use this metadata type, your org must have either B2C - Loyalty, B2C - Loyalty Plus, Loyalty Management - Growth, Loyalty Management - Advanced, or Referral Marketing license enabled.

## Fields

| Field Name | Description |
| --- | --- |
| label | Field TypestringDescriptionName of the loyalty program that the program process is associated with. If a loyalty program or referral program with the specified name doesn't exist, a new LoyaltyProgram record is created. The name of a program must contain at least one alphanumeric character. |
| programProcesses | Field TypeLoyaltyProgramProcess[]DescriptionCollection of loyalty program processes associated with a loyalty program or a referral program. |

## LoyaltyProgramProcess

Represents a collection of fields relating to a loyalty program process.

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description of the loyalty program process. |
| executionType | Field TypeLoyaltyPgmProcExecutionType (enumeration of type string)DescriptionThe mode of processing transaction journals by the loyalty program process.Possible values are:BatchBatchAndRealTimeRealTime |
| journalSubType | Field TypestringDescriptionThe subtype of transaction journals processed by the loyalty program process. |
| journalType | Field TypestringDescriptionThe type of transaction journal processed by the loyalty program process.Possible values for loyalty program:AccrualRedemptionPossible value for referral program:Referral |
| loyaltyTierGroup | Field TypestringDescriptionThe tier group of a loyalty program. This field is available in API version 56.0 and later. This field isn’t applicable for referral programs. |
| parameters | Field TypeLoyaltyProgramProcessParameter[]DescriptionThe parameters associated with the loyalty program process. |
| processName | Field TypestringDescriptionRequired.The name of the loyalty program process. |
| processType | Field TypestringDescriptionRequired.The type of records processed by the loyalty program process. For referral programs, the process type is TransactionJournal. |
| rules | Field TypeLoyaltyProgramProcessRule[]DescriptionThe rules associated with the loyalty program process. |
| status | Field TypeLoyaltyPgmProcStatus (enumeration of type string)DescriptionThe status of the loyalty program process.Possible values are:ActiveDraftInactiveNoteOnly active program processes can process transaction journals. |

## LoyaltyProgramProcessParameter

Represents a collection of fields relating to a parameter that's associated with the program process. Parameters are dynamic or fixed values that are used in rule. You can define the value of a parameter based on its type and data type.

| Field Name | Description |
| --- | --- |
| condition | Field TypeLoyaltyProgramProcessConditionDescriptionThe filter condition that decides which records are stored in the parameter. |
| dataType | Field TypeLoyaltyPgmProcParmDataType (enumeration of type string)DescriptionThe data type of the parameter. Determines the type of value that can be stored in the parameter.Possible values are:BooleanDateDateTimeNumericSobjectText |
| decimalPlaces | Field TypeintDescriptionThe number of decimal places supported by the parameter when it is of the type Variable and data type Numeric. |
| description | Field TypestringDescriptionThe description of the parameter. |
| isCollection | Field TypebooleanDescriptionIndicates whether the parameter can store multiple values when it is of the type Variable. |
| isInput | Field TypebooleanDescriptionIndicates whether a parameter can be used as an input outside the loyalty program process. |
| isOutput | Field TypebooleanDescriptionIndicates whether a parameter can be used as an output outside the loyalty program process. |
| objectName | Field TypestringDescriptionName of the object whose records are stored by the parameter when it is of the type Variable and data type sObject. |
| parameterName | Field TypestringDescriptionRequired.The name of the parameter. |
| parameterType | Field TypeLoyaltyPgmProcParmType (enumeration of type string)DescriptionThe type of value the parameter can store.Possible values are:ConstantFormulaVariable |
| value | Field TypestringDescriptionThe value of the parameter when it is of the type Variable or Formula and isn't of the data type sObject. |

## LoyaltyProgramProcessCondition

Represents a collection of fields relating to a condition. Conditions filter records that parameters store or check whether child actions must be triggered for a transaction journal.

| Field Name | Description |
| --- | --- |
| conditionCriteria | Field TypestringDescriptionRequired.The criteria that determine when the condition is met by a record or by a transaction journal. |
| conditionFilterCriteria | Field TypeLoyaltyProgramProcessConditionFilterCriteria[]DescriptionThe filter criteria that determines which records or transaction journals are filtered. |
| conditionName | Field TypestringDescriptionRequired.The name of the condition. |

## LoyaltyProgramProcessConditionFilterCriteria

Represents a collection of fields relating to a filter criteria that's part of a condition. Multiple filter criteria can be added for a condition. Filter criteria determine which records are filtered by related condition.

| Field Name | Description |
| --- | --- |
| operator | Field TypeLoyaltyPgmProcCondOperator (enumeration of type string)DescriptionRequired.The operator of the filter criteria.Possible values are:ContainsDoesNotContainEndsWithEqualsGreaterThanGreaterThanOrEqualsIsNotNullIsNullLessThanLessThanOrEqualsNotEqualsStartsWith |
| sequence | Field TypeintDescriptionRequired.The sequence number of the filter criteria within a condition. |
| sourceFieldName | Field TypestringDescriptionRequired.The name of the field used in the filter criteria. |
| value | Field TypestringDescriptionThe value of the filter criteria. |
| valueType | Field TypeLoyaltyPgmProcCondType (enumeration of type string)DescriptionRequired.The type of value specified in the filter criteria.Possible values are:FormulaLiteralLookupParameter |

## LoyaltyProgramProcessRule

Represents a collection of fields relating to a rule. A rule consists of a set of conditions and actions.

| Field Name | Description |
| --- | --- |
| actions | Field TypeLoyaltyProgramProcessAction[]DescriptionThe actions associated with the rule. |
| conditions | Field TypeLoyaltyProgramProcessCondition[]DescriptionThe conditions associated with the rule. |
| description | Field TypestringDescriptionThe description of the rule. |
| endDate | Field TypedateDescriptionThe date until which the rule processes transaction journals. |
| previousRule | Field TypestringDescriptionThe rule that processes new transaction journals before the current rule. The current rule is triggered when the previous rule completes processing transaction journals. |
| promotion | Field TypestringDescriptionThe promotion associated with the rule. When a promotion is associated with a rule, the start date, end date, and status of the promotion determines the corresponding fields of the rule. |
| ruleName | Field TypestringDescriptionRequired.The name of the rule. |
| startDate | Field TypedateDescriptionThe date from which the rule starts processing transaction journals. |
| status | Field TypeLoyaltyPgmProcRuleStatus (enumeration of type string)DescriptionThe status of the rule.Possible values are:ActiveDraftInactive |
| stepMappings | Field TypeLoyaltyProgramProcessRuleStepMapping[]DescriptionThe list of step mappings associated with rule. |

## LoyaltyProgramProcessAction

Represents a collection of fields relating to an action.

| Field Name | Description |
| --- | --- |
| actionName | Field TypestringDescriptionRequired.The name of the action. |
| actionParameters | Field TypeLoyaltyProgramProcessActionParameter[]DescriptionThe parameters of the action. |
| actionType | Field TypeLoyaltyPgmProcActionType (enumeration of type string)DescriptionRequired.The type of action.Possible values are:These values are used in Loyalty Management:AssignParameterValues—Assigns values to parameters.AssignBadgeToMember—Assigns a badge to a loyalty program member. This value is available in API version 56.0 and later.Crud—Creates or updates records in the target object. This value is available in API version 56.0 and later.CheckMemberBadgeAssignment—Checks whether a badge is assigned to a loyalty program member. This value is available in API version 56.0 and later.ChangeMemberTier—Changes the tier of a loyalty program member. This value is available in API version 56.0 and later.CreditPoints—Credits points to the loyalty program member associated with the transaction journal that's processed by the rule.DebitPoints—Debits points from the points balance of the loyalty program member associated with the transaction journal that's processed by the rule.GetMemberAttributesValues—Gets the details of a loyalty program member’s attribute value for the selected engagement attribute. This value is available in API version 55.0 and later.GetMemberPointBalance—Gets the points balance of a loyalty program member.GetMemberPromotions—Get promotions of a loyalty program member. This value is available in API version 56.0 and later.GetMemberTier—Gets the tier details of a loyalty program member.GetOutputsFromDecisionTable—Gets outputs provided by a decision table. This value is available in API version 56.0 and later.IncreaseUsageForCumulativePromotion—Increases a loyalty program member’s usage for a cumulative promotion.IssueVoucher—Issues a voucher to the loyalty program member associated with the transaction journal that's processed by the rule.RedeemVoucher—Redeems a voucher for the loyalty program member associated with the transaction journal that's processed by the rule. This value is available in API version 58.0 and later.—Updates the loyalty program member's usage towards achieving a cumulative promotion by a specified value.RunFlow—Runs a flow.RunProgramProcess—Runs an active loyalty program process as a subprocess. This value is available in API version 56.0 and later.SendMail—Sends emails to the loyalty program member for whom the process is run. This value is available in API version 59.0 and later.UpdateCurrentValueForMemberAttribute—Updates the loyalty program member's current attribute value for the selected engagement attribute. This value is available in API version 55.0 and later.UpdatePointBalance—Updates the points balance of the loyalty program member associated with the transaction journal that's processed by the rule.UpdateUsageForCumulativePromotion—Updates a loyalty program member’s usage for a cumulative promotion.These values are used in Referral Marketing:AssignParameterValues—Assigns values to parameters.Crud—Creates or updates records in the target object.GetMemberAttributesValues—Gets the details of an advocate's attribute value for the selected engagement attribute.GetMemberPromotions—Gets the promotions of an advocate.GetOutputsFromDecisionTable—Gets outputs provided by a decision table.IssueExtendedReward—Issues an extended reward to an advocate or a referred friend. This value is available in API version 64.0 and later.IssueVoucher—Issues a voucher to an advocate or a referred friend.RedeemVoucher—Redeems a voucher for an advocate or a friend.SendMail—Sends emails to a referral program’s advocates and referrals.UpdateCurrentValueForMemberAttribute—Updates an advocate’s current attribute value for the selected engagement attribute.These values are reserved for internal use:GetCustomerPromotionAttrValue—This value is available in API version 64.0 and later.UpdateCustomerPromotionAttrValue—This value is available in API version 64.0 and later. |
| crudActionType | Field TypeLoyaltyPgmProcCrudActType (enumeration of type string)DescriptionThe type of operation to perform on target object records by the action. This field is available from API version 56.0 and later.NoteThis field is required when the actionType field value is CRUD.Possible values are:createupdate |
| decisionTable | Field TypestringDescriptionThe decision that's invoked by the action for the transaction journal that's processed by the rule. |
| decisionTableDatasetLink | Field TypestringDescriptionThe dataset link associated with the selected decision table. |
| entityApiName | Field TypestringDescriptionThe API name of the target object. This field is available from API version 56.0 and later.NoteThis field is required when the actionType field value is CRUD. |
| flowDefinition | Field TypestringDescriptionThe flow that's run by the action for the transaction journal that's processed by the rule. The selected flow must be of the type LoyaltyManagementFlow. |
| loyaltyProgramProcess | Field TypestringDescriptionThe subprogram processes that’s run by the action. This field is available from API version 56.0 and later.NoteThis field is required when the actionType field value is RunProgramProcess. |

## LoyaltyProgramProcessActionParameter

Represents a collection of fields relating to an action parameter. A parameter is either an input or an output for the action. Input parameters store the values used by the action. Output parameters store the result of the action.

| Field Name | Description |
| --- | --- |
| operator | Field TypeLoyaltyPgmProcActParamOper (enumeration of type string)DescriptionThe type of operator used in the action. This field is available in API version 56.0 and later.Possible value is:Equals |
| parameterName | Field TypestringDescriptionRequired.The name of parameter. The parameter name must be the same as the input or the output field that's supported depending on the associated action's type. |
| sequenceNumber | Field TypeintDescriptionThe sequence number of the parameter in the action. This field is available in API version 56.0 and later. |
| value | Field TypestringDescriptionRequired.The value of the parameter. |
| valueType | Field TypeLoyaltyPgmProcActParamType (enumeration of type string)DescriptionThe type of value to provide in the parameter. This field is available in API version 56.0 and later.Possible values are:Literal—A constant value.Parameter—A runtime value passed using a parameter. |

## LoyaltyProgramProcessRuleStepMapping

Represents a collection of fields relating to a step mapping. Map conditions with child actions or map an action without a parent step.

| Field Name | Description |
| --- | --- |
| associatedStep | Field TypestringDescriptionRequired.The action that's associated with the mapping. |
| parentStep | Field TypestringDescriptionThe condition that contains one or more child actions. |
| sequence | Field TypeintDescriptionRequired.The sequence number of the mapping within a rule. |

## Declarative Metadata Sample Definition

The following is an example of a LoyaltyProgramSetup component.

```

```

The following is an example package.xml that references the previous definition.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

To retrieve metadata specific to any loyalty program, mention the loyalty program name in the <members> tag. The generated file contains all the information regarding that loyalty program.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LoyaltyProgramSetup xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>Cloud Kicks Inner Circle</label>
    <programProcesses>
        <executionType>RealTime</executionType>
        <parameters>
            <dataType>Numeric</dataType>
            <decimalPlaces>0</decimalPlaces>
            <isCollection>false</isCollection>
            <isInput>false</isInput>
            <isOutput>false</isOutput>
            <parameterName>VoucherValue</parameterName>
            <parameterType>Constant</parameterType>
            <value>50</value>
        </parameters>
        <processName>Issue Vouchers</processName>
        <processType>Transaction Journal</processType>
        <rules>
            <actions>
                <actionName>Issue High Transaction Value Voucher</actionName>
                <actionParameters>
                    <operator>Equals</operator>
                    <parameterName>VoucherDefinitionName</parameterName>
                    <sequenceNumber>1</sequenceNumber>
                    <value>Voucher for High Value Transactions</value>
                    <valueType>Literal</valueType>
                </actionParameters>
                <actionParameters>
                    <operator>Equals</operator>
                    <parameterName>VoucherCode</parameterName>
                    <sequenceNumber>2</sequenceNumber>
                    <value>{!TransactionJournal.Order.Id}</value>
                </actionParameters>
                <actionParameters>
                    <operator>Equals</operator>
                    <parameterName>VoucherEffectiveDate</parameterName>
                    <sequenceNumber>3</sequenceNumber>
                    <value>DATEVALUE(&quot;2021-11-21 00:00:00&quot;)</value>
                </actionParameters>
                <actionParameters>
                    <operator>Equals</operator>
                    <parameterName>VoucherExpirationDate</parameterName>
                    <sequenceNumber>4</sequenceNumber>
                    <value>DATEVALUE(&quot;2022-01-01 00:00:00&quot;)</value>
                </actionParameters>
                <actionParameters>
                    <operator>Equals</operator>
                    <parameterName>VoucherFaceValue</parameterName>
                    <sequenceNumber>5</sequenceNumber>
                    <value>{!VoucherValue}</value>
                </actionParameters>
                <actionType>IssueVoucher</actionType>
            </actions>
            <conditions>
                <conditionCriteria>1</conditionCriteria>
                <conditionFilterCriteria>
                    <operator>GreaterThanOrEquals</operator>
                    <sequence>1</sequence>
                    <sourceFieldName>TransactionJournal.TransactionAmount</sourceFieldName>
                    <value>100</value>
                    <valueType>Literal</valueType>
                </conditionFilterCriteria>
                <conditionName>New Condition</conditionName>
                <conditionType>Condition</conditionType>
            </conditions>
            <endDate>2022-01-01</endDate>
            <ruleName>Issue Voucher for Transactions Above $100</ruleName>
            <startDate>2021-11-21</startDate>
            <status>Draft</status>
            <stepMappings>
                <associatedStep>New Condition</associatedStep>
                <sequence>1</sequence>
            </stepMappings>
            <stepMappings>
                <associatedStep>Issue High Transaction Value Voucher</associatedStep>
                <parentStep>New Condition</parentStep>
                <sequence>1</sequence>
            </stepMappings>
        </rules>
        <status>Draft</status>
    </programProcesses>
</LoyaltyProgramSetup>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<!--
   ~ Copyright 2020 Salesforce, Inc.
   ~ All Rights Reserved
   ~ Company Confidential
-->
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>*</members>
      <name>LoyaltyProgramSetup</name>
   </types>
   <version>54.0</version>
</Package>
```
