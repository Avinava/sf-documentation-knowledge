---
title: "call(action, args)"
domain: omnistudio
topic: callaction-args
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.887Z
keywords: [call, action, args, Signature, Parameters, Return, Value, Usage]
---

# call(action, args)

# call(action, args)

This method calls one of the available PricingExecutionWrapper class actions and passes arguments to the action.

## Signature

public Object call(String action, Map<String, Object\> args)

## Parameters

action

Type: String

Action to call. Valid values are:

-   executePricingWithDynamicProposals— Accepts contextDefinitionName, contextMappingName, CreditScore, InterestRateType, Stage, pricingProcedureName, Amount, ApplicationFormProductId, and Term fields to execute pricing and create dynamic proposals.

args

Type: Map<String, Object>

First three keys must be input, output, and options. The required keys under input depend on the method the action invokes. All actions require input, output, and options arguments, but these can be empty if the action doesn’t use them.

-   executePricingWithDynamicProposals
    -   contextDefinitionName—Developer defined context definition that’s used for pricing.
    -   contextMappingName—Name of the context mapping that’s used for pricing.
    -   CreditScore— Credit score of the applicant.
    -   InterestRateType—Type of interest rate such as fixed or variable.
    -   Stage—Current stage of the offer.
    -   pricingProcedureName—Name of the pricing procedure.
    -   Amount— Loan amount of the offer.
    -   ApplicationFormProductId—Unique identifier of the application form product.
    -   Term—Loan term of the offer.

## Return Value

Type: Map<String, Object>

Returns values of the corresponding action as described in the Parameters section above.

## Usage

To use this method in an Integration Procedure, specify the class in theRemote Class property, the action in the Remote Method property, and the arguments in the Additional Input property.