---
title: "Sample Account Address Validation Rules"
domain: usefulValidationRules
topic: sample-account-address-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.339Z
estimatedTokens: 2042
keywords: [Sample, Account, Address, Validation, Rules, maintain, addresses, Canadian, Billing, Postal, Code, Zip, State, Shipping, Province]
---

# Sample Account Address Validation Rules

> Rules to maintain valid account addresses.

# Sample Account Address Validation Rules

Rules to maintain valid account addresses.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


For more information on any of the formula functions used in these examples, see [Formula Operators and Functions by Context](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_functions.htm&language=en_US#customize_functions).

## Canadian Billing Postal Code

| Field | Value |
| --- | --- |
| Description: | Validates that the account Billing Zip/Postal Code is in the correct format if Billing Country is Canada. |
| Formula: | AND( OR(BillingCountry = "CAN", BillingCountry = "CA", BillingCountry = "Canada"), NOT(REGEX(BillingPostalCode, "((?i)[ABCEGHJKLMNPRSTVXY]\\d[A-Z]?\\s?\\d[A-Z]\\d)?")) ) |
| Error Message: | Canadian postal code must be in A9A 9A9 format. |
| Error Location: | Billing Zip/Postal Code |

## Billing Zip Code Is in Billing State

| Field | Value |
| --- | --- |
| Description: | Validates that the account Billing Zip/Postal Code is valid by looking up the first five characters of the value in a custom object called Zip_Code__c that contains a record for every valid ZIP code in the US. If the ZIP code isn’t found in the Zip_Code__c object, or the Billing State doesn’t match the corresponding State_Code__c in the Zip_Code__c object, an error is displayed. |
| Formula: | VLOOKUP( $ObjectType.Zip_Code__c.Fields.City__c , $ObjectType.Zip_Code__c.Fields.Name , LEFT(BillingPostalCode,5)) <> BillingCity |
| Error Message: | Billing Zip Code doesn’t exist in specified Billing State. |
| Error Location: | Billing Zip/Postal Code |

## US Billing Zip Code

| Field | Value |
| --- | --- |
| Description: | Validates that the account Billing Zip/Postal Code is in 99999 or 99999-9999 format if Billing Country is USA or US. |
| Formula: | AND( OR(BillingCountry = "USA", BillingCountry = "US"), NOT(REGEX(BillingPostalCode, "\\d{5}(-\\d{4})?")) )This example uses the REGEX function; see Shipping Zip Code if you aren’t familiar with regular expressions. |
| Error Message: | ZIP code must be in 99999 or 99999-9999 format. |
| Error Location: | Billing Zip/Postal Code |

## Shipping Zip Code

| Field | Value |
| --- | --- |
| Description: | Validates that the account Shipping Zip/Postal Code is in 99999 or 99999-9999 format if Shipping Country is USA or blank. |
| Formula: | AND(  OR(ShippingCountry = "USA", ISBLANK(ShippingCountry)),   OR(    AND(LEN(ShippingPostalCode) <>5,        LEN(ShippingPostalCode) <> 10),    NOT(CONTAINS("0123456789",        LEFT( ShippingPostalCode, 1))),    NOT(CONTAINS("0123456789",        MID( ShippingPostalCode , 2, 1))),    NOT(CONTAINS("0123456789",        MID( ShippingPostalCode , 3, 1))),    NOT(CONTAINS("0123456789",        MID( ShippingPostalCode , 4, 1))),    NOT(CONTAINS("0123456789",        MID( ShippingPostalCode , 5, 1))),    AND(     LEN(ShippingPostalCode) = 10,    OR(     MID( ShippingPostalCode , 6, 1) <> "-",     NOT(CONTAINS("0123456789",        MID( ShippingPostalCode , 7, 1))),     NOT(CONTAINS("0123456789",        MID( ShippingPostalCode , 8, 1))),     NOT(CONTAINS("0123456789",        MID( ShippingPostalCode , 9, 1))),     NOT(CONTAINS("0123456789",        MID( ShippingPostalCode , 10, 1)))    )   )  ) ) This example interprets a blank country as the US. To use this example with other countries, remove the clause that checks the length of the country field. Also, validation rule criteria are case-sensitive, so this rule is only enforced when the country is blank or “USA” in all capital letters. The rule isn’t enforced when the country is “usa.”You can also validate ZIP codes using a regular expression; for an example of a formula using a regular expression, see REGEX. |
| Error Message: | ZIP code must be in 99999 or 99999-9999 format. |
| Error Location: | Shipping Zip/Postal Code |

## Valid Billing State (US)

| Field | Value |
| --- | --- |
| Description: | Validates that the account Billing State/Province is a valid two-character abbreviation if Billing Country is US, USA, or blank. |
| Formula: | AND ( OR(BillingCountry = "US", BillingCountry="USA", ISBLANK(BillingCountry)), OR( LEN(BillingState) < 2, NOT( CONTAINS("AL:AK:AZ:AR:CA:CO:CT:DE:DC:FL:GA:HI:ID:" & "IL:IN:IA:KS:KY:LA:ME:MD:MA:MI:MN:MS:MO:MT:NE:NV:NH:" & "NJ:NM:NY:NC:ND:OH:OK:OR:PA:RI:SC:SD:TN:TX:UT:VT:VA:" & "WA:WV:WI:WY", BillingState) )))This example interprets a blank country as the US. To use this example with other countries, remove the clause that checks the length of the country field. Also, validation rule criteria are case-sensitive, so this rule is only enforced when the country is blank or “USA” in all capital letters. The rule isn’t enforced when the country is “usa.” |
| Error Message: | A valid two-letter state code is required. |
| Error Location: | Billing State/Province |

## Valid Billing Province (Canada)

| Field | Value |
| --- | --- |
| Description: | Validates that the account Billing State/Province is a valid two-character abbreviation if Billing Country is CA or CAN. |
| Formula: | AND (    OR(BillingCountry = "CA", BillingCountry="CAN"),    OR(    LEN(BillingState) < 2,    NOT(       CONTAINS("AB:BC:MB:NB:NL:NT:NS:NU:ON:PC:QC:SK:YT", BillingState) ))) |
| Error Message: | A valid two-letter province code is required. |
| Error Location: | Billing State/Province |

## Valid Shipping State

| Field | Value |
| --- | --- |
| Description: | Validates that the account Shipping State/Province is a valid two-character abbreviation if Shipping Country is US, USA, or blank. |
| Formula: | AND ( OR(ShippingCountry = "US", ShippingCountry="USA", ISBLANK(ShippingCountry)), OR( LEN(ShippingState) < 2, NOT( CONTAINS("AL:AK:AZ:AR:CA:CO:CT:DE:DC:FL:GA:HI:ID:" & "IL:IN:IA:KS:KY:LA:ME:MD:MA:MI:MN:MS:MO:MT:NE:NV:NH:" & "NJ:NM:NY:NC:ND:OH:OK:OR:PA:RI:SC:SD:TN:TX:UT:VT:VA:" & "WA:WV:WI:WY", ShippingState) )))This example interprets a blank country as the US. To use this example with other countries, remove the clause that checks the length of the country field. Also, validation rule criteria are case-sensitive, so this rule is only enforced when the country is blank or “USA” in all capital letters. The rule isn’t enforced when the country is “usa.” |
| Error Message: | A valid two-letter state abbreviation is required. |
| Error Location: | Shipping State/Province |

## Valid Shipping Province (Canada)

| Field | Value |
| --- | --- |
| Description: | Validates that the account Shipping State/Province is a valid two-character abbreviation, if Billing Country is CA or CAN. |
| Formula: | AND ( OR(ShippingCountry = "CA", ShippingCountry="CAN"), OR( LEN(ShippingState) < 2, NOT( CONTAINS("AB:BC:MB:NB:NL:NT:NS:NU:ON:PC:QC:SK:YT", ShippingState) ))) |
| Error Message: | A valid two-letter province abbreviation is required. |
| Error Location: | Shipping State/Province |

## Valid Billing Country

| Field | Value |
| --- | --- |
| Description: | Validates that the account Billing Country is a valid ISO 3166 two-letter code. |
| Formula: | OR( LEN(BillingCountry) = 1, NOT( CONTAINS( "AF:AX:AL:DZ:AS:AD:AO:AI:AQ:AG:AR:AM:" & "AW:AU:AZ:BS:BH:BD:BB:BY:BE:BZ:BJ:BM:BT:BO:" & "BA:BW:BV:BR:IO:BN:BG:BF:BI:KH:CM:CA:CV:KY:" & "CF:TD:CL:CN:CX:CC:CO:KM:CG:CD:CK:CR:CI:HR:" & "CU:CY:CZ:DK:DJ:DM:DO:EC:EG:SV:GQ:ER:EE:ET:FK:" & "FO:FJ:FI:FR:GF:PF:TF:GA:GM:GE:DE:GH:GI:GR:GL:" & "GD:GP:GU:GT:GG:GN:GW:GY:HT:HM:VA:HN:HK:HU:" & "IS:IN:ID:IR:IQ:IE:IM:IL:IT:JM:JP:JE:JO:KZ:KE:KI:" & "KP:KR:KW:KG:LA:LV:LB:LS:LR:LY:LI:LT:LU:MO:MK:" & "MG:MW:MY:MV:ML:MT:MH:MQ:MR:MU:YT:MX:FM:MD:MC:" & "MC:MN:ME:MS:MA:MZ:MM:MA:NR:NP:NL:AN:NC:NZ:NI:" & "NE:NG:NU:NF:MP:NO:OM:PK:PW:PS:PA:PG:PY:PE:PH:" & "PN:PL:PT:PR:QA:RE:RO:RU:RW:SH:KN:LC:PM:VC:WS:" & "SM:ST:SA:SN:RS:SC:SL:SG:SK:SI:SB:SO:ZA:GS:ES:" & "LK:SD:SR:SJ:SZ:SE:CH:SY:TW:TJ:TZ:TH:TL:TG:TK:" & "TO:TT:TN:TR:TM:TC:TV:UG:UA:AE:GB:US:UM:UY:UZ:" & "VU:VE:VN:VG:VI:WF:EH:YE:ZM:ZW", BillingCountry))) |
| Error Message: | A valid two-letter country code is required. |
| Error Location: | Billing Country |

## Code Examples

```
AND(
OR(BillingCountry = "CAN", BillingCountry = "CA", BillingCountry = "Canada"),
NOT(REGEX(BillingPostalCode, "((?i)[ABCEGHJKLMNPRSTVXY]\\d[A-Z]?\\s?\\d[A-Z]\\d)?"))
)
```

```
VLOOKUP(
$ObjectType.Zip_Code__c.Fields.City__c ,
$ObjectType.Zip_Code__c.Fields.Name ,
LEFT(BillingPostalCode,5)) <> BillingCity
```

```
AND(
OR(BillingCountry = "USA", BillingCountry = "US"),
NOT(REGEX(BillingPostalCode, "\\d{5}(-\\d{4})?"))
)
```

```
AND(
 OR(ShippingCountry = "USA", ISBLANK(ShippingCountry)),
  OR(
   AND(LEN(ShippingPostalCode) <>5, 
      LEN(ShippingPostalCode) <> 10),
   NOT(CONTAINS("0123456789", 
      LEFT( ShippingPostalCode, 1))),
   NOT(CONTAINS("0123456789", 
      MID( ShippingPostalCode , 2, 1))),
   NOT(CONTAINS("0123456789", 
      MID( ShippingPostalCode , 3, 1))),
   NOT(CONTAINS("0123456789", 
      MID( ShippingPostalCode , 4, 1))),
   NOT(CONTAINS("0123456789", 
      MID( ShippingPostalCode , 5, 1))),
   AND(
    LEN(ShippingPostalCode) = 10,
   OR(
    MID( ShippingPostalCode , 6, 1) <> "-",
    NOT(CONTAINS("0123456789", 
      MID( ShippingPostalCode , 7, 1))),
    NOT(CONTAINS("0123456789", 
      MID( ShippingPostalCode , 8, 1))),
    NOT(CONTAINS("0123456789", 
      MID( ShippingPostalCode , 9, 1))),
    NOT(CONTAINS("0123456789", 
      MID( ShippingPostalCode , 10, 1)))
   )
  )
 )
)
```

```
AND (
OR(BillingCountry = "US", BillingCountry="USA", ISBLANK(BillingCountry)),
OR(
LEN(BillingState) < 2,
NOT(
CONTAINS("AL:AK:AZ:AR:CA:CO:CT:DE:DC:FL:GA:HI:ID:" &
"IL:IN:IA:KS:KY:LA:ME:MD:MA:MI:MN:MS:MO:MT:NE:NV:NH:" &
"NJ:NM:NY:NC:ND:OH:OK:OR:PA:RI:SC:SD:TN:TX:UT:VT:VA:" &
"WA:WV:WI:WY", BillingState)
)))
```
