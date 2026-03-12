---
title: "Salesforce CRM: Contact Mappings"
domain: data-cloud
topic: salesforce-crm-contact-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.522Z
estimatedTokens: 1926
keywords: [Salesforce, CRM, Contact, Mappings, After, data, stream, deployed, starter, bundle, automatically, maps, Sales, Cloud, Service, model, objects, DMO, Data, Cloud.]
---

# Salesforce CRM: Contact Mappings

> After a data stream is deployed, the Salesforce CRM starter data
         bundle automatically maps data from Sales Cloud or Service Cloud to data model objects
         (DMO)s in Data Cloud. The Sales Cloud and Service Cloud
      bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which
      link multiple records into a unified customer profile.

# Salesforce CRM: Contact Mappings

After a data stream is deployed, the Salesforce CRM starter data bundle automatically maps data from Sales Cloud or Service Cloud to data model objects (DMO)s in Data Cloud. The Sales Cloud and Service Cloud bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which link multiple records into a unified customer profile.

## Usage and Data Bundles

These mappings are used for various purposes within these bundles. For Loyalty Management, information about the contact is associated with an Individual type loyalty program member. For Service Cloud, they’re used to power Service Intelligence visualizations of contact center performance metrics.

Bundles:

-   Financial Services
-   Loyalty Management
-   Sales Cloud
-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Contact object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Account Id | AccountId__c | text | Account Contact | Account |  |
| Annual Income | FinServ__AnnualIncome_c | currency | Individual | Yearly Income | Used in Financial Services Cloud. |
| Assistant Name | AssistantName__c | text | Account Contact | Assistant Name |  |
| AsstantPhone | AssistantPhone__c | text | Account Contact | Assistant Phone | Foreign Key |
| Birthdate | Birthdate__c | dateTime | Individual | Birth Date |  |
| Business Phone | Phone__c | text | Contact Point Address | Telephone Number |  |
| Contact Point Phone | For Business Use | Used with Financial Services |
| Account Contact | Business Phone | Used within the Loyalty Management bundle. |
| Contact ID | Id__c | text | Account Contact | Account Contact ID | Primary Key |
| Business Phone | Foreign Key |
| Contact Email | Foreign Key |
| Individual | Foreign Key |
| Mailing Address | Foreign Key |
| Contact Point Address | Contact Point Address ID | Primary Key |
| Party | Foreign Key |
| Contact Point Email | Contact Point Email ID | Primary Key |
| Party | Foreign Key |
| Contact Point Phone | Contact Point Phone ID | Primary Key |
| Party | Foreign Key |
| Individual | Individual ID | Primary Key |
| CountryOfBirth | FinServ__CountryOfBirth_c | picklist | Individual | Birth Place | Used with Financial Services Cloud. |
| CountryOfResidence | FinServ__CountryOfResidence_c | string | Individual | Residence Country Name |  |
| Created Date | CreatedDate__c | dateTime | Account Contact | Created Date |  |
| Individual | Created Date |  |
| Current Employer | FinServ__CurrentEmployer_c | string | Individual | Current Employer Name | Used in Financial Services Cloud. |
| Department | Department__c | text | Account Contact | Department Name |  |
| Email | Email__c | text | Contact Point Email | Email Address |  |
| email | Account Contact | Contact Email | Used within the Loyalty Management bundle. |
| Email Bounced Date | EmailBouncedDate__c | dateTime | Contact Point Email | Email Latest Bounce Date Time |  |
| Email Bounced Reason | EmailBouncedReason__c | text | Contact Point Email | Email Latest Bounce Reason Text |  |
| Email Verified | FinServ__EmailVerified_c | boolean | Contact Point Email | Verified | Used with Financial Services Cloud. |
| Employed Since | FinServ__EmployedSince_c | date | Individual | Employed Since Date | Used with Financial Services Cloud. |
| First Name | FirstName__c | text | Individual | First Name |  |
| Full Name | Name__c | text | Individual | Person Name |  |
| Gender | FinServ__Gender_c | picklist | Individual | Gender Identity | Used with Financial Services Cloud. |
| HomePhone |  | phone | Contact Point Phone | Telephone Number | Used with Financial Services Cloud. |
| HomePhoneVerified | FinServ__HomePhoneVerified_c | boolean | Contact Point Phone | Verified |  |
| HomeOwnership | FinServ__HomeOwnership_c | picklist | Individual | Is Home Owner | Used with Financial Services Cloud. |
| Id |  | string | Account Contact | Business Phone | Used in Financial Services Cloud. |
| Contact Email |
| Individual |
| Account Contact Id |
| Mailing Address |
| id | Contact Point Address | Contact Point Address Id |
| Party |
| id | Contact Point Email | Contact Point Email Id |  |
| string | Party |  |
| string | Contact Point Phone | Contact Point Phone Id |  |
| Party |  |
| id | Individual | Individual Id |  |
| Last Activity | LastActivityDate__c | dateTime | Account Contact | Last Activity Date |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Account Contact | Last Modified Date |  |
| Individual | Last Modified Date |  |
| Last Name | LastName__c | text | Individual | Last Name |  |
| Mailing Address |  | address | Account Contact | Mailing Address | Used within the Loyalty Management bundle. |
| Mailing City | MailingCity__c | text | Contact Point Address | City Name |  |
| Mailing Country | MailingCountry__c | text | Contact Point Address | Country Name |  |
| Mailing Latitude | MailingLatitude__c | number | Contact Point Address | Geo Latitude |  |
| Mailing Longitude | MailingLongitude__c | number | Contact Point Address | Geo Latitude |  |
| MailingPostalCode |  | text | Contact Point Address | Postal Code text | Used in Financial Services Cloud. |
| Mailing State/Province | MailingState__c | text | Contact Point Address | State Province |  |
| Mailing Street | MailingStreet__c | text | Contact Point Address | Address Line 1 |  |
| Mailing Zip/Postal Code | MailingPostalCode__c | text | Contact Point Address | Postal Code |  |
| MaritalStatus | FinServ__MaritalStatus__c | picklist | Individual | Marital Status | Used with Financial Services Cloud. |
| MobilePhone |  | string | Contact Point Phone | For Personal Use |  |
| Mother Maiden Name | FinServ__MotherMaidenName_c | text | Individual | Mothers Maiden Name | Used with Financial Services Cloud. |
| Number Of Children | NumberOfChildren_c | double | Individual | Children Count | Used with Financial Services Cloud. |
| Number Of Dependents | NumberOfDependents_c | double | Individual | Dependent Count |  |
| Occupation | FinServ__Occupation_c | string | Individual | Occupation | Used with Financial Services Cloud. |
| Phone |  | text | Contact Point Phone | Telephone Number |  |
| Photo URL | PhotoUrl__c | text | Individual | Photo URL |  |
| Preferred Name | FinServ__PreferredName_c | String | Individual | Preferred Name | Used with Financial Services Cloud. |
| Primary Address Billing | FinServ__PrimaryAddressIsBilling_c | boolean | Contact Point Address | Is Used for Billing | Used in Financial Services Cloud. |
| Primary Address Mailing | FinServ__PrimaryAddressIsMailing_c | boolean | Contact Point Address | Is Used for Mailing | Used in Financial Services Cloud. |
| Primary Address Shipping | FinServ__PrimaryAddressIsShipping__c | boolean | Contact Point Address | Is Used for Shipping | Used in Financial Services Cloud. |
| Primary Citizenship | FinServ__PrimaryCitizenship__c | picklist | Individual | Primary Citizenship Country | Used in Financial Services Cloud. |
| Primary Language | FinServ__PrimaryLanguage__c | picklist | Individual | Primary Language | Used in Financial Services Cloud. |
| Salutation | Salutation__c | text | Individual | Salutation |  |
| SecondaryCitizenship | FinServ__SecondaryCitizenship__c | text | Individual | Secondary Citizenship Country Id | Used in Financial Services Cloud. |
| Title | Title__c | text | Account Contact | Title |  |
| Wedding Anniversary | FinServ__WeddingAnniversary_c | date | Individual | Wedding Anniversary Date | Used in Financial Services Cloud. |
