---
title: "ExpressionSetDefinition"
domain: omnistudio
topic: expressionsetdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:52.265Z
estimatedTokens: 5615
keywords: [ExpressionSetDefinition, Represents, expression, set, definition., Note, Parent, File, Suffix, Directory, Location, Version, Fields, ExpressionSetDefinitionVersion​​, ExpressionSet​​Step, ExpressionSetAdvancedCondition, ExpressionSetConditionCriteria, ExpressionSetAggregation, ExpressionSetAssignment, ExpressionSetConditionExpression]
---

# ExpressionSetDefinition

> Represents an expression set definition.

# ExpressionSetDefinition

Represents an expression set definition.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

Before deploying an expression set or an expression set version to a target org, review these [Expression Set Migration Considerations](https://help.salesforce.com/s/articleView?id=ind.considerations_for_migrating_expression_sets.htm&type=5&language=en_US "HTML (New Window)").

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExpressionSetDefinition components have the suffix .expressionSetDefinition and are stored in the expressionSetDefinition folder.

## Version

ExpressionSetDefinition components are available in API version 55.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
|  |  |
| description | Field TypestringDescriptionThe description of an expression set definition. |
| executionScale | Field TypeExpsSetExecutionScale (enumeration of type string)DescriptionSpecifies the scale of the inputs that an expression set processes. The scale determines where the expression set is executed.Valid values are:HighLowAvailable in API version 61.0 and later. |
| interfaceSourceType | Field TypeExpsSetInterfaceSourceType (enumeration of type string)DescriptionThe interface source type designed by the consuming cloud that's making a customized expression set builder available to its users.Valid values are:Constraint (Available in API version 62.0 and later).DiscoveryProcedure (Available in API version 61.0 and later).EventOrchestration (Available in API version 61.0 and later).ItServiceManagement (Available in API version 65.0 and later).PricingProcedureQualificationProcedureRatingDiscoveryProcedure (Available in API version 61.0 and later).SampleAvailable in API version 59.0 and later. |
| label | Field TypestringDescriptionRequired.The UI label of an expression set definition. |
| processType | Field TypeExpsSetProcessType (enumeration of type string)DescriptionThe process type that uses the expression set rule.Valid values are:BreGpaCalculationInsuranceClaimProcessing—Available in API version 65.0 and later.ItServiceManagement—Available in API version 65.0 and later.PlanCostCalculationRatingDiscoveryStudentInformationSystem—Available in API version 65.0 and later.StudentSuccessWhen Business Rules Engine is enabled for a Salesforce instance, the default value is 'Bre’. Other process types are available to you depending on your industry solution and permission sets. |
| resourceInitializationType | Field TypeResourceInitializationType (enumeration of type string)DescriptionIndicates whether the initial value of expression set variables and context tags is null or a default value.Valid values are:DefaultOffAvailable in API version 64.0 and later. |
| template | Field TypebooleanDescriptionDefines whether an expression set is a template or not. |
| usageSubType | Field TypeExpsSetUsageSubType (enumeration of type string)DescriptionThe subtype of the industry that's using the expression set definition. If no value is specified, the field defaults to null. |
| versions | Field TypeExpressionSetDefinitionVersion[]DescriptionRepresents an array of expression set version definitions in an expression set.This array must contain at least one version. |

## ExpressionSetDefinitionVersion​​

Represents a definition of an expression set version.

| Field Name | Description |
| --- | --- |
| decimalScale | Field TypeintegerDescriptionNumber of decimal places to be used in the results of calculation steps that involve context variables. |
| description | Field TypestringDescriptionDescribes the version of an expression set definition. |
| endDate | Field TypedateTimeDescriptionThe date until which the expression set definition is available for use. |
| expressionSetDefinition | Field TypestringDescriptionThe full name of an expression set definition. |
| label | Field TypestringDescriptionRequired.The UI label of an expression set definition. |
| rank | Field TypeintDescriptionThe rank of the Expression Set Definition Version. When more than one enabled version matches an expression set call, and the start date time to end date time spans overlap, the version with the highest rank is chosen. Available in API version 62.0 and later. |
| shouldShowExplExternally | Field TypebooleanDescriptionIndicates whether the decision explanation is exposed to external users (true) or not (false). The default value is false. Available in API version 56.0 and later. |
| startDate | Field TypedateTimeDescriptionRequired.The date from when the expression set definition is available for use. |
| status | Field TypeExpsSetStatus (enumeration of type string)DescriptionRequired.The status of an expression set definition.Possible values are:ActiveDraftInactiveInvalidDraftObsolete |
| steps | Field TypeExpressionSetStep[]DescriptionRepresents an array of steps created in an expression set version. |
| uiTier | Field TypebooleanDescriptionIndicates whether the API call originated from the design time builder or a package.NoteThis field is for internal use only. |
| variables | Field TypeExpressionSet​​Variable[]DescriptionRepresents an array of variables in an expression set version. |
| versionNumber | Field TypeintDescriptionRequired.The version number of an expression set definition. |

## ExpressionSet​​Step

Represents a step in an expression set version.

| Field Name | Description |
| --- | --- |
| actionType | Field TypeBusinessKnowledgeModel (enumeration of type string)DescriptionSpecifies the type of action this step executes.Valid values are:AiAcceleratorSubscriberChurnPredictionApexActionApexListAction (Available in API version 64.0 and later.)AssetDiscoveryAssignBadgeToMemberAssignParameterValuesAssignmentElementAssignmentRuleCustomUser (Available in API version 65.0 and later.)AssignmentRuleCustomQueue (Available in API version 65.0 and later.)AteprlRecordCreator (Available in API version 65.0 and later.)BaseRateBindingObjectRateAdjustmentResolution (Available in API version 64.0 and later.)BindingObjectRateCardEntryResolution (Available in API version 64.0 and later.)BreAggregatorBreAggregatorAssignmentBreakdownLineMapping (Available in API version 64.0 and later.)CalculateQuantity (Available in API version 64.0 and later.)ChangeMemberTierCheckMemberBadgeAssignmentCommercePricing (Available in API version 62.0 and later.)CommitmentAdjustment (Available in API version 65.0 and later.)ComplianceCheckComplianceControlLog (Available in API version 62.0 and later.)Constraint (Available in API version 64.0 and later.)CreditPointsCrudDebitPointsDerivedPricingDiscountDistributionServiceDiscoverySettings (Available in API version 64.0 and later.)DynamicRulesExecutor (Available in API version 65.0 and later.)EvaluateCategoryDisqualification (Available in API version 62.0 and later.)EvaluateCategoryQualification (Available in API version 62.0 and later.)FormulaBasedRating (Available in API version 62.0 and later.)FormulaBasedPricingGetCustomerPromotionAttrValue (Available in API version 64.0 and later.)GetMemberAttributesValuesGetMemberPointBalanceGetMemberPromotionsGetMemberTierGetOutputsFromDecisionMatrixGetOutputsFromDecisionTableGroupingAndAggregateRating (Available in API version 62.0 and later.)IncreaseUsageForCumulativePromotionIntegrationOrchestrationIssueExtendedReward (Available in API version 64.0 and later.)IssueVoucherManualRatingDiscount (Available in API version 62.0 and later.)MapProductMinimumPrice (Available in API version 62.0 and later.)MultiRecipientProductQualification (Available in API version 64.0 and later.)NegotiatedBaseRate (Available in API version 64.0 and later.)NegotiatedRateCardEntryResolution (Available in API version 64.0 and later.)NegotiatedTierAdjustment (Available in API version 64.0 and later.)NegotiatedVolumeAdjustment (Available in API version 64.0 and later.)PriceGuidance (Available in API version 64.0 and later.)PriceRevision (Available in API version 65.0 and later.)PricingPropagation (Available in API version 65.0 and later.)PricingSettingsPromotionsDiscountPromotionExecution (Available in API version 65.0 and later.)RateAdjustmentByAttributeResolution (Available in API version 62.0 and later.)RateAdjustmentByTierResolution (Available in API version 62.0 and later.)RateAdjustmentMatrix (Available in API version 62.0 and later.)RateAssignment (Available in API version 62.0 and later.)RateCardEntryResolution (Available in API version 62.0 and later.)RateCardResolution (Available in API version 62.0 and later.)RatingAttributeDiscountRatingBreakdownLineMapping (Available in API version 65.0 and later.)RatingRoundingValues (Available in API version 62.0 and later.)RatingSettingRatingTierDiscountRatingVolumeDiscountRecordActionRoundingValuesRuleFetchRunFlowRunProgramProcessSampleCustomElementWithExpressionAndListFilterStopPricingStopRating (Available in API version 62.0 and later.)TermGpaCalculation (Available in API version 64.0 and later.)TermGpaReporting (Available in API version 64.0 and later.)TestCustomElementUpdateCurrentValueForMemberAttributeUpdateCustomerPromotionAttrValue (Available in API version 64.0 and later.)UpdatePointBalanceUpdateUsageForCumulativePromotionUpsertRecord (Available in API version 64.0 and later.)VolumeTierDiscount |
| advancedCondition | Field TypeExpressionSetAdvancedConditionDescriptionRepresents an advanced condition step. |
| aggregation | Field TypeExpressionSetAggregationDescriptionRepresents an aggregation step. |
| assignment | Field TypeExpressionSetAssignmentDescriptionRepresents an assignment step. |
| conditionExpression | Field TypeExpressionSetConditionExpressionDescriptionRepresents a condition step. |
| customElement | Field TypeExpressionSetCustomElementDescriptionRepresents a custom element step that contains the input and output mappings. Available in API version 56.0 and later. |
| decisionTable | Field TypeExpressionSetDecisionTableDescriptionRepresents a decision matrix or decision table step. |
| description | Field TypestringDescriptionDescribes an expression set definition version step. |
| failedExplainerTemplate | Field TypestringDescriptionThe explainability message template that’s used when the result type of a condition step in an expression set is Failed. |
| failedMessageTokenMappings | Field TypeExplainabilityMessageTemplateTokenMapping (enumeration of type string)DescriptionList of the token resource mappings of the failed explainability message template. Valid values are:expressionSetMessageTokenresourceReferenceAvailable in API version 59.0 and later. |
| label | Field TypestringDescriptionRequired.The UI label of an expression set definition version step. |
| name | Field TypestringDescriptionRequired.The full name of an expression set definition version step. |
| noResultExplainerTemplate | Field TypestringDescriptionThe explainability message template that’s used when the result type of a condition step in an expression set is No Result. Available in API version 59.0 and later. |
| noResultMessageTokenMappings | Field TypeExplainabilityMessageTemplateTokenMapping (enumeration of type string)DescriptionList of the token resource mappings of the no result explainability message template. Valid values are:expressionSetMessageTokenresourceReferenceAvailable in API version 59.0 and later. |
| parentStep | Field TypestringDescriptionThe name of the parent step in an expression set definition version that’s associated with a step. |
| passedExplainerTemplate | Field TypestringDescriptionThe explainability message template that’s used when the result type of a condition step in an expression set is Passed. |
| passedMessageTokenMappings | Field TypeExplainabilityMessageTemplateTokenMapping (enumeration of type string)DescriptionList of the token resource mappings of the passed explainability message template. Valid values are:expressionSetMessageTokenresourceReferenceAvailable in API version 59.0 and later. |
| resultIncluded | Field TypebooleanDescriptionIndicates whether the step output must be included in the expression result (true) or not (false). |
| sequenceNumber | Field TypeintDescriptionRequired.The sequence number of a step in an expression set definition version. |
| shouldExposExecPathMsgOnly | Field TypebooleanDescriptionIndicates whether the message in the explainability message template is exposed for only the branch path that was run. |
| shouldExposeConditionDetails | Field TypebooleanDescriptionIndicates whether the details of the condition are shown in the decision explanation. |
| shouldShowExplExternally | Field TypebooleanDescriptionIndicates whether the decision explanations are shown to external users. |
| stepType | Field TypeExpsSetStepType (enumeration of type string)DescriptionRequired.Specifies the type of step in an expression set definition version.Valid values are:AdvancedConditionBranchBusinessKnowledgeModelConditionDefaultPathSubExpression |
| subExpression | Field TypeExpressionSetSubExpressionDescriptionRepresents a sub expression step. |

## ExpressionSetAdvancedCondition

Represents an advanced condition step.

| Field Name | Description |
| --- | --- |
| conditionLogic | Field TypestringDescriptionRequired.The condition that’s defined for an advanced condition. |
| criteria | Field TypeExpressionSetConditionCriteria []DescriptionRepresents an array of criteria defined in the advanced condition. |
| errorMessage | Field TypestringDescriptionAn error message for a failed advanced condition. |
| resultParameter | Field TypestringDescriptionAn expression set definition version variable associated with the result of a step. |
| successMessage | Field TypestringDescriptionA success message for a successful advanced condition. |

## ExpressionSetConditionCriteria

Represents a criterion defined in an advanced condition.

| Field Name | Description |
| --- | --- |
| operator | Field TypeExpsSetConditionOperator (enumeration of type string)DescriptionRequired.Specifies the operator for evaluating an expression.Valid values are:ContainsDoesNotContainEqualsGreaterThanGreaterThanOrEqualsIsNullIsNotNullLessThanLessThanOrEqualsNoEquals |
| sequenceNumber | Field TypeintDescriptionRequired.The position of the condition in a step that contains multiple conditions. |
| sourceFieldName | Field TypestringDescriptionRequired.The expression set definition version variable associated with the result of a condition criterion. |
| value | Field TypestringDescriptionSpecifies the condition of a criterion. |
| valueType | Field TypeExpsSetValueType (enumeration of type string)DescriptionSpecifies the type of value.Valid values are:FormulaLiteralLookupParameterPicklist |

## ExpressionSetAggregation

Represents an aggregation step.

| Field Name | Description |
| --- | --- |
| aggregatedParameter | Field TypestringDescriptionRequired.The expression set definition version variable associated with the result of a condition criterion. |
| aggregateFunction | Field TypeExpsSetAggregationFunction (enumeration of type string)DescriptionRequired.Specifies the aggregation function used in a step.Valid values are:AvgMaxMinSum |
| expression | Field TypestringDescriptionRequired.Specifies the expression of an aggregation. |

## ExpressionSetAssignment

Represents an assignment step.

| Field Name | Description |
| --- | --- |
| aggregatedParameter | Field TypestringDescriptionRequired.The expression set definition version variable associated with a step detail. |
| expression | Field TypestringDescriptionRequired.The expression that’s defined for a step. |

## ExpressionSetConditionExpression

Represents a condition in a condition step.

| Field Name | Description |
| --- | --- |
| errorMessage | Field TypestringDescriptionAn error message for a failed condition. |
| expression | Field TypestringDescriptionRequired.The expression that’s defined for a step. |
| resultParameter | Field TypestringDescriptionThe expression set definition version variable associated with the result of a step. |
| successMessage | Field TypestringDescriptionA success message for a successful condition. |

## ExpressionSetCustomElement

Represents a custom element in an expression set. Available in API version 56.0 and later.

| Field Name | Description |
| --- | --- |
| parameters | Field TypeExpressionSetElementParameter[]DescriptionRepresents the list of parameters in the custom element. |

## ExpressionSetElementParameter

Represents a parameter within a custom element of an expression set. Available in API version 56.0 and later.

| Field Name | Description |
| --- | --- |
| input | Field TypebooleanDescriptionRequired.Indicates whether the custom element parameter is input (true) or not (false).The default value is true. |
| name | Field TypestringDescriptionRequired.The name of the custom element parameter. |
| output | Field TypebooleanDescriptionRequired.Indicates whether the custom element parameter is output (true) or not (false).The default value is true. |
| type | Field TypeExpsSetValueType (enumeration of type string)DescriptionThe type of custom element parameter.Values are:FormulaLiteralLookupParameterPickListThe default value is Parameter. |
| value | Field TypestringDescriptionRequired.The name of the expression set variable. |

## ExpressionSetDecisionTable

Represents a decision table or decision matrix in a step.

| Field Name | Description |
| --- | --- |
| decisionTableName | Field TypestringDescriptionRequired.The decision matrix or decision table name used in a step. |
| mappings | Field TypeExpressionSetElementParameter[]DescriptionThe mapping information between various parameters in an ExpressionSetDecisionTable.Available in API version 59.0 and later. |
| type | Field TypestringDescriptionRequired.The type in a step. It can be a decision table or decision matrix. |

## ExpressionSetSubExpression

Represents a sub expression in a step.

| Field Name | Description |
| --- | --- |
| expressionSet | Field TypestringDescriptionRequired.The sub expression name used in a step. |
| mappings | Field TypeExpressionSetElementParameter[]DescriptionThe mapping information between various parameters in an ExpressionSetDecisionTable.Available in API version 61.0 and later. |

## ExpressionSet​​Variable

Represents a definition of an expression set variable.

| Field Name | Description |
| --- | --- |
| collection | Field TypebooleanDescriptionIndicates whether a variable stores a collection of values (true) or not (false). |
| dataType | Field TypeExpsSetDataType (enumeration of type string)DescriptionRequired.The data type of an expression set variable.Valid values are:ActionOutputBooleanCurrencyDateDateTimeDecisionMatrixDecisionTableNumericPercentSobjectSubExpressionText |
| decimalPlaces | Field TypeintDescriptionThe decimal digits in the currency, number, or percent data type for an expression set variable. |
| description | Field TypestringDescriptionThe description of the variable used in an expression set. |
| fields | Field TypeExpressionSetVariableField []DescriptionRepresents an array of fields in an object that is used as a variable in an expression set. |
| input | Field TypebooleanDescriptionIndicates whether an expression set variable is used as an input (true) in an expression or not (false). |
| lookupName | Field TypestringDescriptionThe API name of a decision matrix, a decision table, or a sub expression. |
| lookupType | Field TypeExpsSetVariableLookupType (enumeration of type string)DescriptionThe type of the lookup used in an expression set definition.Valid values are:DecisionMatrixDecisionTableSubExpression |
| name | Field TypestringDescriptionRequired.The full name of the variable used in an expression set definition. |
| objectName | Field TypestringDescriptionThe name of the sObject. |
| output | Field TypebooleanDescriptionIndicates whether an expression set variable is used as an output in an expression(true) or not (false). |
| resultStep | Field TypestringDescriptionThe step that produces the expression set variable. |
| type | Field TypeExpsSetVariableType (enumeration of type string)DescriptionRequired.The type of variable in an expression set definition.Valid values are:ConstantContextDynamicAttributeTag (Available in API version 62.0 and later.)ExecutableContextDefinitionTag (Available in API version 62.0 and later.)FormulaVariable |
| value | Field TypestringDescriptionRepresents a constant value or a formula.NoteIt stores the default value of a variable. |

## ExpressionSetVariableField

Represents a definition of a field in an object that is used as a variable in an expression set.

| Field Name | Description |
| --- | --- |
| dataType | Field TypeExpsSetDataType (enumeration of type string)DescriptionRequired.Specifies the type of data stored in an expression set variable.Valid values are:ActionOutputBooleanCurrencyDateDateTimeDecisionMatrixDecisionTableNumericPercentSobjectSubExpressionText |
| decimalPlaces | Field TypeintDescriptionThe decimal digits in the currency, number, or percent data type for an expression set variable. |
| fields | Field TypeExpressionSetVariableField []DescriptionRepresents an array of fields in an object that is used as a variable in an expression set. |
| lookupName | Field TypestringDescriptionThe API name of a decision matrix, a decision table, or a sub expression. |
| lookupType | Field TypeExpsSetVariableLookupType (enumeration of type string)DescriptionRequired.The type of lookup used in an expression set definition.Valid values are:DecisionMatrixDecisionTableSubExpression |
| name | Field TypestringDescriptionRequired.The full name of the field used in an expression set variable. |
| objectName | Field TypestringDescriptionThe name of the sObject. |

## Declarative Metadata Sample Definition

The following is an example of an ExpressionSetDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExpressionSetDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>ExpSetWithAllSteps</label>
    <processType>Bre</processType>
    <template>false</template>
    <description></description>
    <interfaceSourceType>Sample</interfaceSourceType>
    <executionScale>Low</executionScale>
    <versions>
        <fullName>ExpSetWithAllSteps_V1</fullName>
        <expressionSetDefinition>ExpSetWithAllSteps</expressionSetDefinition>
        <label>ExpSetWithAllSteps V1</label>
        <shouldShowExplExternally>false</shouldShowExplExternally>
        <startDate>2022-08-09T22:04:56.000Z</startDate>
        <endDate>2023-08-09T22:04:56.000Z</endDate>
        <status>Draft</status>
        <uiTier>false</uiTier>
        <rank>1</rank>
        <description>ExpSetWithAllSteps_V1</description>
        <steps>
            <description>Aggregate</description>
            <actionType>BreAggregator</actionType>
            <aggregation>
                <aggergatedParameter>result</aggergatedParameter>
                <aggregateFunction>Avg</aggregateFunction>
                <expression>AVG ( result )</expression>
            </aggregation>
            <label>Aggregate</label>
            <name>Aggregate</name>
            <resultIncluded>true</resultIncluded>
            <sequenceNumber>5</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>BusinessKnowledgeModel</stepType>
        </steps>
        <steps>
            <label>Branch</label>
            <name>Branch</name>
            <resultIncluded>false</resultIncluded>
            <sequenceNumber>4</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>Branch</stepType>
        </steps>
        <steps>
            <actionType>AssignParameterValues</actionType>
            <assignment>
                <assignedParameter>b</assignedParameter>
                <expression>SUM ( a , 10 )</expression>
            </assignment>
            <label>Calculation</label>
            <name>Calculation</name>
            <resultIncluded>true</resultIncluded>
            <sequenceNumber>1</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>BusinessKnowledgeModel</stepType>
        </steps>
        <steps>
            <actionType>AssignParameterValues</actionType>
            <assignment>
                <assignedParameter>result</assignedParameter>
                <expression>b * 100</expression>
            </assignment>
            <label>Calculation</label>
            <name>Calculation10</name>
            <parentStep>DefaultLane</parentStep>
            <resultIncluded>false</resultIncluded>
            <sequenceNumber>1</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>BusinessKnowledgeModel</stepType>
        </steps>
        <steps>
            <actionType>AssignParameterValues</actionType>
            <assignment>
                <assignedParameter>result</assignedParameter>
                <expression>b * 1</expression>
            </assignment>
            <label>Calculation</label>
            <name>Calculation3</name>
            <parentStep>Condition</parentStep>
            <resultIncluded>false</resultIncluded>
            <sequenceNumber>1</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>BusinessKnowledgeModel</stepType>
        </steps>
        <steps>
            <actionType>AssignParameterValues</actionType>
            <assignment>
                <assignedParameter>result</assignedParameter>
                <expression>SUM ( b , 10 )</expression>
            </assignment>
            <label>Calculation</label>
            <name>Calculation5</name>
            <parentStep>Condition4</parentStep>
            <resultIncluded>false</resultIncluded>
            <sequenceNumber>1</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>BusinessKnowledgeModel</stepType>
        </steps>
        <steps>
            <actionType>AssignParameterValues</actionType>
            <assignment>
                <assignedParameter>result</assignedParameter>
                <expression>b * 10</expression>
            </assignment>
            <label>Calculation</label>
            <name>Calculation8</name>
            <parentStep>Condition7</parentStep>
            <resultIncluded>false</resultIncluded>
            <sequenceNumber>1</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>BusinessKnowledgeModel</stepType>
        </steps>
        <steps>
            <conditionExpression>
                <successMessage>success</successMessage>
                <errorMessage>error</errorMessage>
                <expression>IS10 == b</expression>
                <resultParameter>condition_output__1</resultParameter>
            </conditionExpression>
            <label>Condition</label>
            <name>Condition</name>
            <resultIncluded>false</resultIncluded>
            <sequenceNumber>2</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>Condition</stepType>
        </steps>
        <steps>
            <advancedCondition>
                <successMessage>success</successMessage>
                <errorMessage>error</errorMessage>
                <conditionLogic>1</conditionLogic>
                <criteria>
                    <operator>Equals</operator>
                    <sequenceNumber>1</sequenceNumber>
                    <sourceFieldName>condition_output__1</sourceFieldName>
                    <value>true</value>
                    <valueType>Literal</valueType>
                </criteria>
                <resultParameter>condition_output__3</resultParameter>
            </advancedCondition>
            <label>Condition</label>
            <name>Condition4</name>
            <resultIncluded>false</resultIncluded>
            <sequenceNumber>3</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>AdvancedCondition</stepType>
        </steps>
        <steps>
            <conditionExpression>
                <expression>IS10 == b</expression>
                <resultParameter>condition_output__2</resultParameter>
            </conditionExpression>
            <label>Condition</label>
            <name>Condition7</name>
            <parentStep>Branch</parentStep>
            <resultIncluded>false</resultIncluded>
            <sequenceNumber>1</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>Condition</stepType>
        </steps>
        <steps>
            <label>Default Lane</label>
            <name>DefaultLane</name>
            <parentStep>Branch</parentStep>
            <resultIncluded>false</resultIncluded>
            <sequenceNumber>2</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>false</shouldShowExplExternally>
            <stepType>DefaultPath</stepType>
        </steps>
        <steps>
            <actionType>AssignParameterValues</actionType>
            <assignment>
                <assignedParameter>a</assignedParameter>
                <expression>3</expression>
            </assignment>
            <failedExplainerTemplate>CalculationFailure</failedExplainerTemplate>
            <failedMessageTokenMappings>
                <expressionSetMessageToken>y2</expressionSetMessageToken>
                <resourceReference>a</resourceReference>
            </failedMessageTokenMappings>
            <label>CalculationStepWithTokensAndMappings</label>
            <name>CalculationStepWithTokensAndMappings</name>
            <passedExplainerTemplate>CalculationSuccess</passedExplainerTemplate>
            <passedMessageTokenMappings>
                <expressionSetMessageToken>y1</expressionSetMessageToken>
                <resourceReference>a</resourceReference>
            </passedMessageTokenMappings>
            <resultIncluded>false</resultIncluded>
            <sequenceNumber>1</sequenceNumber>
            <shouldExposExecPathMsgOnly>true</shouldExposExecPathMsgOnly>
            <shouldExposeConditionDetails>false</shouldExposeConditionDetails>
            <shouldShowExplExternally>true</shouldShowExplExternally>
            <stepType>BusinessKnowledgeModel</stepType>
        </steps>
        <variables>
            <collection>false</collection>
            <dataType>Boolean</dataType>
            <description>condition_output__3</description>
            <input>false</input>
            <name>condition_output__3</name>
            <output>false</output>
            <resultStep>Condition4</resultStep>
            <type>Variable</type>
            <value>False</value>
        </variables>
        <variables>
            <collection>false</collection>
            <dataType>Numeric</dataType>
            <decimalPlaces>2</decimalPlaces>
            <description>a</description>
            <input>true</input>
            <name>a</name>
            <output>false</output>
            <type>Variable</type>
            <value>10</value>
        </variables>
        <variables>
            <collection>false</collection>
            <dataType>Boolean</dataType>
            <description>condition_output__1</description>
            <input>false</input>
            <name>condition_output__1</name>
            <output>false</output>
            <resultStep>Condition</resultStep>
            <type>Variable</type>
            <value>False</value>
        </variables>
        <variables>
            <collection>false</collection>
            <dataType>Boolean</dataType>
            <description>condition_output__2</description>
            <input>false</input>
            <name>condition_output__2</name>
            <output>false</output>
            <resultStep>Condition7</resultStep>
            <type>Variable</type>
            <value>False</value>
        </variables>
        <variables>
            <collection>false</collection>
            <dataType>Numeric</dataType>
            <decimalPlaces>2</decimalPlaces>
            <description>IS10</description>
            <input>false</input>
            <name>IS10</name>
            <output>false</output>
            <type>Constant</type>
            <value>10</value>
        </variables>
        <variables>
            <collection>false</collection>
            <dataType>Numeric</dataType>
            <decimalPlaces>2</decimalPlaces>
            <description>b</description>
            <input>false</input>
            <name>b</name>
            <output>true</output>
            <type>Variable</type>
        </variables>
        <variables>
            <collection>false</collection>
            <dataType>Numeric</dataType>
            <decimalPlaces>2</decimalPlaces>
            <description>result</description>
            <input>false</input>
            <name>result</name>
            <output>true</output>
            <type>Variable</type>
        </variables>
        <versionNumber>1</versionNumber>
    </versions>
</ExpressionSetDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>*</members>
		<name>ExpressionSetDefinition</name>
	</types>
	<version>66.0</version>
</Package>
```
