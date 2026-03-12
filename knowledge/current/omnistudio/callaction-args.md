---
title: "call(action, args)"
domain: omnistudio
topic: callaction-args
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.837Z
estimatedTokens: 700
keywords: [call, action, args, invokes, DigitalLendingIntakeRecordsWrapper, actions, passes, arguments, Usage, calls, DigitalLendingPostIntakeRecordsWrapper, DigitalLendingProductsApi, PricingExecutionWrapper]
---

# call(action, args)

> This method calls one of the available DigitalLendingPostIntakeRecordsWrapper actions and passes arguments to the
        action.

# call(action, args)

This method calls one of the available DigitalLendingPostIntakeRecordsWrapper actions and passes arguments to the action.

## Signature

public Object call(String action, Map<String, Object\> args)

## Parameters

action

Type: String

Action to call. Valid values are:

-   getApplicantDetails— Accepts an applicationFormProductId property and retrieves applicant details of all the applicants associated to the application form.
-   getApplicantProfile— Accepts an applicationFormProductId property and retrieves applicant profile information of all the applicants associated to the application form.
-   getOffersForApplicant— Accepts an applicationFormProductId property and retrieves offer details.
-   getSellerItem—Accepts an applicationFormProductId property and retrieves seller item information.
-   saveOfferForApplicant— Accepts an applicationFormProductId property and an offer ID to create a new offer. The new offer is set to final and selected by the lender, with the rest of the offer details matching the offer passed as an argument. Returns a success boolean variable.
-   callGetLoanDocumentsApi—Accepts an applicationFormProductId property and retrieves loan documents related to it.
-   callCreateOfferApi— Accepts an applicationFormProductId property, term, amount, and rate, and creates a new offer. Returns a boolean value indicating if the operation was successful.
-   canUserEditReadOnlyRecords—Returns a boolean value indicating whether the current user has permission to edit read-only records (true) or not (false).

args

Type: Map<String, Object>

First three keys must be input, output, and options. The required keys under input depend on the method the action invokes. All actions require input, output, and options arguments, but these can be empty if the action doesn’t use them.

-   getApplicantDetails
    -   recordId — The applicationFormProductId argument of the action that’s called.
-   getApplicantProfile
    -   recordId — The applicationFormProductId argument of the action that’s called.
-   getOffersForApplicant
    -   recordId — The applicationFormProductId argument of the action that’s called.
-   getSellerItem
    -   recordId — The applicationFormProductId argument of the action that’s called.
-   saveOfferForApplicant
    -   recordId — The applicationFormProductId argument of the action that’s called.
    -   offerId — The applicationFormProductProposalId argument of the action that’s called.
-   callGetLoanDocumentsApi
    -   recordId — The applicationFormProductId argument of the action that’s called.
-   callCreateOfferApi
    -   recordId — The applicationFormProductId argument of the action that’s called.
    -   term — The loan term argument of the action that’s called.
    -   recommendedAmount — The loan amount argument of the action that’s called.
    -   rate — The loan interest rate argument of the action that’s called.

## Return Value

Type: Map<String, Object>

Returns values of the corresponding action as described in the Parameters section above.

## Usage

To use this method in an integration procedure, specify the class in the Remote Class property, the action in the Remote Method property, and the arguments in the Additional Input property.
