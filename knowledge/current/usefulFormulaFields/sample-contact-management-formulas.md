---
title: "Sample Contact Management Formulas"
domain: usefulFormulaFields
topic: sample-contact-management-formulas
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.266Z
estimatedTokens: 937
keywords: [Sample, Contact, Management, Formulas, manage, Contact's, Account, Discount, Percent, Phone, Rating, Website, LinkedIn™, Profile, Identification]
---

# Sample Contact Management Formulas

> Use these formulas to manage contact details.

# Sample Contact Management Formulas

Use these formulas to manage contact details.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Contact's Account Discount Percent

This percent formula displays the account's Discount Percent field on the contacts page.

```

```

## Contact's Account Name

This formula displays the standard Account Name field on the contacts page.

```

```

## Contact's Account Phone

This formula displays the standard Account Phone field on the contacts page.

```

```

## Contact's Account Rating

Use this formula to display the Account Rating field on the contacts page.

```

```

## Contact's Account Website

This formula displays the standard Account Website field on the contacts page.

```

```

If the account website URL is long, use the HYPERLINK function to display a label such as “Click Here” instead of the URL. For example:

```

```

This formula also adds the necessary "https://" before a URL if “http://” or “https://” wasn’t previously included in the URL field.

## Contact's LinkedIn™ Profile

You can configure a link that appears on your contacts' profile page that sends you to their LinkedIn profile. To do so:

1.  From the object management settings for contacts, go to Buttons, Links, and Actions.
2.  Click **New Button or Link**.
3.  Enter a Label for this link, like LinkedInLink.
4.  Enter this formula in the content box:

    ```

    ```

5.  Click **Save**.

Remember to add this link to the Contact page layout in order for it to show up.

## Contact Identification Numbering

This formula displays the first five characters of a name and the last four characters of a social security number separated by a dash. This example uses a text custom field called SSN.

```

```

## Contact Preferred Phone

This formula displays the contact’s preferred contact method in a contact related list—work phone, home phone, or mobile phone—based on a selected option in a Preferred Phone custom picklist.

```

```

## Contact Priority

This formula assesses the importance of a contact based on the account rating and the contact's title. If the account rating is Hot or the title starts with Executive, then the priority is high (P1). If the account rating is Warm or the title starts with VP then the priority is medium (P2), and if the account rating is Cold then the priority is low (P3).

```

```

## Contact Yahoo! ID

This formula displays a clickable Yahoo! Messenger icon indicating if the person is logged on to the service. Users can click the icon to launch a Yahoo! Messenger conversation with the person. This example uses a custom text field called Yahoo Name on contacts where you can store the contact's Yahoo! Messenger ID.

```

```

## Dynamic Address Formatting

This formula field displays a formatted mailing address for a contact in standard format, including spaces and line breaks where appropriate depending on the country.

```

```

## Phone Country Code

This formula determines the phone country code of a contact based on the Mailing Country of the mailing address.

```

```

## Unformatted Phone Number

This formula removes the parentheses and dash characters from North American phone numbers. This formula is necessary for some auto-dialer software.

```

```

## Code Examples

```
Account.Discount_Percent__c
```

```
Account.Name
```

```
Account.Phone
```

```
CASE(Account.Rating, "Hot", "Hot", "Warm", "Warm", "Cold", "Cold", "Not Rated")
```

```
Account.Website
```

## Related Topics

- Formula Operators and Functions (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
