---
title: "Miscellaneous Sample Validation Rules"
domain: usefulValidationRules
topic: miscellaneous-sample-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.416Z
estimatedTokens: 1321
keywords: [Miscellaneous, Sample, Validation, Rules, Examples, how, validate, certain, number, formats, credit, card, numbers, drivers, licences]
---

# Miscellaneous Sample Validation Rules

> Examples for how to validate certain number formats for credit card numbers or drivers
    licences.

# Miscellaneous Sample Validation Rules

Examples for how to validate certain number formats for credit card numbers or drivers licences.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions by Context](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Allow Number to Be Increased but Not Decreased

| Field | Value |
| --- | --- |
| Description: | Allows a custom field called Commit Amount to be increased but not decreased after initial creation. This rule uses the PRIORVALUE() function to compare the updated value of the field to its value prior to update. |
| Formula: | PRIORVALUE(Commit_Amount__c) > Commit_Amount__c |
| Error Message: | Commit Amount cannot be decreased. |
| Error Location: | Commit Amount |

## California Driver's License

| Field | Value |
| --- | --- |
| Description: | Ensures that a custom field called Drivers License is in the correct A9999999 format when the Mailing State is “CA”. |
| Formula: | AND( MailingState = "CA", NOT(REGEX(Drivers_License__c, "([A-Z]\\d{7})?")) ) |
| Error Message: | Invalid California driver's license format. |
| Error Location: | Drivers License |

## Force Users to Check “I Accept Terms” to Enter Certain Values

| Field | Value |
| --- | --- |
| Description: | Uses a checkbox labeled “I accept terms” to force the user to select a checkbox in order to enter a value called Number of Days that exceeds their Paid Time Off (PTO) balance available. |
| Formula: | AND(     NOT( I_accept_terms__c  ),     Number_of_Days__c > $User.PTO_Balance__c ) |
| Error Message: | Request will cause a negative PTO balance. You must accept Negative PTO Balance terms. |
| Error Location: | I accept terms |

## Prohibit Changes to a Field After It Has Been Saved

| Field | Value |
| --- | --- |
| Description: | Prevents users from changing a custom field called Guaranteed Rate after it has been saved initially. |
| Formula: | AND(    NOT( ISNEW() ),    ISCHANGED( Guaranteed_Rate__c ) ) |
| Error Message: | Guaranteed Rate cannot be changed. |
| Error Location: | Guaranteed Rate |

## Social Security Number Format

| Field | Value |
| --- | --- |
| Description: | Validates that a custom text field called SSN is formatted in 999-99-9999 number format (if it is not blank). The pattern specifies:Three single digits (0-9):\\d{3}A dashTwo single digits (0-9):\\d{2}A dashFour single digits (0-9):\\d{4} |
| Formula: | NOT( OR( ISBLANK(Social_Security_Number__c), REGEX( Social_Security_Number__c , "[0-9]{3}-[0-9]{2}-[0-9]{4}") ) ) |
| Error Message: | SSN must be in this format: 999-99-9999. |
| Error Location: | SSN |

## Valid Currency

| Field | Value |
| --- | --- |
| Description: | Validates selected currency against an explicit subset of active currencies in your organization using the Currency picklist. Use this example if you only allow some of the active currencies in your organization to be applied to certain types of records. |
| Formula: | CASE(CurrencyIsoCode,   "USD", 1,   "EUR", 1,   "GBP", 1,   "JPY", 1,    0) = 0 |
| Error Message: | Currency must be USD, EUR, GBP, or JPY. |
| Error Location: | Currency |

## Valid Credit Card Number

| Field | Value |
| --- | --- |
| Description: | Validates that a custom text field called Credit_Card_Number is formatted in 9999-9999-9999-9999 or 9999999999999999 number format when it is not blank. The pattern specifies:Four digits (0-9) followed by a dash: \\d{4}-The aforementioned pattern is repeated three times by wrapping it in () {3}Four digits (0-9)The OR character (\|) allows an alternative pattern of 16 digits of zero through nine with no dashes: \\d{16} |
| Formula: | NOT( REGEX( Credit_Card_Number__c , "(((\\d{4}-){3}\\d{4})\|\\d{16})?")) |
| Error Message: | Credit Card Number must be in this format: 9999-9999-9999-9999 or 9999999999999999. |
| Error Location: | Credit Card Number |

## Valid IP Address

| Field | Value |
| --- | --- |
| Description: | Ensures that a custom field called IP Address is in the correct format, four 3-digit numbers (0-255) separated by periods. |
| Formula: | NOT( REGEX( IP_Address__c, "^((25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\\.) {3}(25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$" )) |
| Error Message: | Error: IP Address must be in form 999.999.999.999 where each part is between 0 and 255. |
| Error Location: | IP Address |

## Website Extension

| Field | Value |
| --- | --- |
| Description: | Validates a custom field called Web Site to ensure its last four characters are in an explicit set of valid website extensions. |
| Formula: | AND(    RIGHT( Web_Site__c, 4) <> ".COM",    RIGHT( Web_Site__c, 4) <> ".com",    RIGHT( Web_Site__c, 4) <> ".ORG",    RIGHT( Web_Site__c, 4) <> ".org",    RIGHT( Web_Site__c, 4) <> ".NET",    RIGHT( Web_Site__c, 4) <> ".net",    RIGHT( Web_Site__c, 6) <> ".CO.UK",    RIGHT( Web_Site__c, 6) <> ".co.uk" ) |
| Error Message: | Web Site must have an extension of .com, .org, .net, or .co.uk. |
| Error Location: | Web Site |

## Code Examples

```
AND(
MailingState = "CA",
NOT(REGEX(Drivers_License__c, "([A-Z]\\d{7})?"))
)
```

```
AND(
    NOT( I_accept_terms__c  ),
    Number_of_Days__c > $User.PTO_Balance__c
)
```

```
AND(
   NOT( ISNEW() ),
   ISCHANGED( Guaranteed_Rate__c )
)
```

```
NOT(
OR(
ISBLANK(Social_Security_Number__c),
REGEX( Social_Security_Number__c , "[0-9]{3}-[0-9]{2}-[0-9]{4}")
)
)
```

```
CASE(CurrencyIsoCode,
  "USD", 1,
  "EUR", 1,
  "GBP", 1,
  "JPY", 1,
   0) = 0
```
