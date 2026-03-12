---
title: "Sample Contact Validation Rules"
domain: usefulValidationRules
topic: sample-contact-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.360Z
estimatedTokens: 926
keywords: [Sample, Contact, Validation, Rules, various, cases, requiring, mailing, address, street, ZIP, code, Phone, Number, International]
---

# Sample Contact Validation Rules

> Validation rules for various use cases, like requiring fields for mailing address,
    mailing street, and ZIP code.

# Sample Contact Validation Rules

Validation rules for various use cases, like requiring fields for mailing address, mailing street, and ZIP code.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Mailing Address Fields Are Required

| Field | Value |
| --- | --- |
| Description: | Validates that the contact Mailing Street, Mailing City, and Mailing Country are provided. |
| Formula: | OR(    ISBLANK( MailingStreet ),    ISBLANK( MailingCity ),    ISBLANK( MailingCountry ) ) |
| Error Message: | Mailing Street, City, and Country are required. |
| Error Location: | Top of Page |

## Mailing Street Is Required

| Field | Value |
| --- | --- |
| Description: | Validates that the contact Mailing Street is provided. |
| Formula: | ISBLANK( MailingStreet ) |
| Error Message: | Mailing Street is required. |
| Error Location: | Mailing Street |

## Mailing Zip Code

| Field | Value |
| --- | --- |
| Description: | Validates that the contact Mailing Zip/Postal Code is in 99999 or 99999-9999 format if Mailing Country is USA or blank. |
| Formula: | AND(  OR(MailingCountry = "USA", ISBLANK(MailingCountry)),   OR(     AND(LEN(MailingPostalCode) <>5,     LEN(MailingPostalCode) <> 10),    NOT(CONTAINS("0123456789",        LEFT( MailingPostalCode, 1))),    NOT(CONTAINS("0123456789",        MID( MailingPostalCode , 2, 1))),    NOT(CONTAINS("0123456789",        MID( MailingPostalCode , 3, 1))),    NOT(CONTAINS("0123456789",        MID( MailingPostalCode , 4, 1))),    NOT(CONTAINS("0123456789",        MID( MailingPostalCode , 5, 1))),    AND(     LEN(MailingPostalCode) = 10,    OR(     MID( MailingPostalCode , 6, 1) <> "-",     NOT(CONTAINS("0123456789",        MID( MailingPostalCode , 7, 1))),     NOT(CONTAINS("0123456789",        MID( MailingPostalCode , 8, 1))),     NOT(CONTAINS("0123456789",        MID( MailingPostalCode , 9, 1))),     NOT(CONTAINS("0123456789",        MID( MailingPostalCode , 10, 1)))    )   )  ) ) This example interprets a blank country as US. To use this example with other countries, remove the clause that checks the length of the country field. Also, validation rule criteria are case sensitive, so this rule is only enforced when the country is blank or “USA” in all capital letters. The rule is not enforced when the country is “usa.”You can also validate zip codes using a regular expression; for an example of a formula using a regular expression, see REGEX. |
| Error Message: | Zip code must be in 99999 or 99999-9999 format. |
| Error Location: | Mailing Zip/Postal Code |

## Phone Number Has International Format

| Field | Value |
| --- | --- |
| Description: | Validates that the Phone number begins with a plus sign (+) for country code. Note that this validation rule conflicts with the ten-digit rule. |
| Formula: | LEFT(Phone, 1) <> "+" |
| Error Message: | Phone number must begin with + (country code). |
| Error Location: | Phone |

## US Phone Number Has Ten Digits

| Field | Value |
| --- | --- |
| Description: | Validates that the Phone number is in (999) 999-9999 format. This works by using the REGEX function to check that the number has ten digits in the (999) 999-9999 format. |
| Formula: | NOT(REGEX(Phone, "\\D*?(\\d\\D*?){10}")) |
| Error Message: | US phone numbers should be in this format: (999) 999-9999. |
| Error Location: | Phone |

## Code Examples

```
OR(
   ISBLANK( MailingStreet ),
   ISBLANK( MailingCity ),
   ISBLANK( MailingCountry )
)
```

```
AND(
 OR(MailingCountry = "USA", ISBLANK(MailingCountry)),
  OR( 
   AND(LEN(MailingPostalCode) <>5, 
   LEN(MailingPostalCode) <> 10),
   NOT(CONTAINS("0123456789", 
      LEFT( MailingPostalCode, 1))),
   NOT(CONTAINS("0123456789", 
      MID( MailingPostalCode , 2, 1))),
   NOT(CONTAINS("0123456789", 
      MID( MailingPostalCode , 3, 1))),
   NOT(CONTAINS("0123456789", 
      MID( MailingPostalCode , 4, 1))),
   NOT(CONTAINS("0123456789", 
      MID( MailingPostalCode , 5, 1))),
   AND(
    LEN(MailingPostalCode) = 10,
   OR(
    MID( MailingPostalCode , 6, 1) <> "-",
    NOT(CONTAINS("0123456789", 
      MID( MailingPostalCode , 7, 1))),
    NOT(CONTAINS("0123456789", 
      MID( MailingPostalCode , 8, 1))),
    NOT(CONTAINS("0123456789", 
      MID( MailingPostalCode , 9, 1))),
    NOT(CONTAINS("0123456789", 
      MID( MailingPostalCode , 10, 1)))
   )
  )
 )
)
```
