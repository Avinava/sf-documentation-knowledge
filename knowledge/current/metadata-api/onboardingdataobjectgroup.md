---
title: "OnboardingDataObjectGroup"
domain: metadata-api
topic: onboardingdataobjectgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:40.994Z
estimatedTokens: 1620
keywords: [OnboardingDataObjectGroup, configuration, groups, objects, specific, business, purpose, Customer, Contact, onboarding, data, group, includes, Email, Phone]
---

# OnboardingDataObjectGroup

> Represents a configuration that groups fields from
			one or more objects for a specific business purpose. For example, the Customer Contact
			Information onboarding data object group includes Name, Email, Phone Number, and
			Address.

# OnboardingDataObjectGroup

Represents a configuration that groups fields from one or more objects for a specific business purpose. For example, the Customer Contact Information onboarding data object group includes Name, Email, Phone Number, and Address.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

OnboardingDataObjectGroup components have the suffix .onboardingDataObjectGroup and are stored in the onboardingDataObjectGroups folder.

## Version

OnboardingDataObjectGroup components are available in API version 66.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionDescription of the onboarding data object group. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for OnboardingDataObjectGroup, which is defined when the OnboardingDataObjectGroup is created. |
| usageType | Field TypeOnboardingDataObjGrpUsageType (enumeration of type string)DescriptionRequired. Specifies the purpose of the onboarding data object group. Valid values are:DocumentValidationValidityPeriod |
| versionDetail | Field TypeOnboardingDataObjGrpVer[]DescriptionVersions of the onboarding data object group, which define the computation settings and related data objects. |

## OnboardingDataObjGrpVer

Represents a version of an onboarding data object group, containing computation settings and the related data objects.

| Field Name | Description |
| --- | --- |
| computationSource | stringDescriptionUnique name of the component that contains the computation logic to determine the group's validity, such as a Flow ID or ExpressionSet ID. |
| computationType | Field TypeOnboardingDataObjGrpCompType (enumeration of type string)DescriptionSpecifies the type of computation that's used for validity calculations of the onboarding data object group version. Valid values are:FormulaStandardMinimumValidity |
| objectDetail | Field TypeOnboardingDataObject[]DescriptionDetails of the data objects within this version. |
| onbrdDataObjGrpDocCatgMaps | Field TypeOnbrdDataObjGrpDocCatgMap[]DescriptionJunction object that maps onboarding data category version, document type, and document category. |
| status | Field TypeOnboardingDataObjVerGrpStatus (enumeration of type string)DescriptionRequired. Status of the onboarding data object group version. Valid values are:ActiveInactive |

## OnbrdDataObjGrpDocCatgMap

Represents a configuration that maps a document type and a document category to a specific onboarding data object group version.

| Field Name | Description |
| --- | --- |
| documentCategory | Field TypeDocumentCategory[]DescriptionRequired. Category that's used to group the document checklist items. |
| documentType | Field TypeDocumentType[]DescriptionType of file that's uploaded or attached in the document checklist item. |

## OnboardingDataObject

Represents a data object within an onboarding data object group, specifying the target object and its field configurations. For example, Party Profile and Party Profile Address are objects within the Customer Information onboarding object data group.

| Field Name | Description |
| --- | --- |
| businessContext | Field TypeOnboardingDataObjBusContext (enumeration of type string)DescriptionRequired. Specifies the business context or scenario in which this validity configuration is applicable. Valid values are:KYC_VALIDITYDVC |
| fieldDetail | Field TypeOnboardingDataObjectField[]DescriptionDetails of the fields within the data object. |
| name | Field TypeOnboardingDataObjGrpTgtObject (enumeration of type string)DescriptionRequired. Target sObject type for this data object. Valid values are:AccountApplicantApplicationFormApplicationFormProductApplicationFormSellerItemContactIdentityDocumentOpportunityPartyCreditProfilePartyExpensePartyFinancialAssetPartyFinancialAssetLienPartyFinancialLiabilityPartyFinclAssetAddlOwnerPartyFinclLiabAddlBrwrPartyIdentityVerificationPartyIdentityVerificationStepPartyIncomePartyProfilePartyProfileAddressPartyProfileRiskPartyScreeningSummaryPersonEmployment |
| partyProfileDataObjectValidityDefinition | Field TypestringDescriptionReference to the PartyProfileDataObjectValidityDefinition metadata type that defines validity settings for this data object. |
| pathToRoot | Field TypestringDescriptionRelationship of the path from this data object to the root object in the hierarchy. |
| relatedObjectRole | Field TypeRelatedOnboardingDataObjRole (enumeration of type string)DescriptionSpecifies the type of relationship between this record and related onboarding data object record. Valid values are Parent and Child. |
| relatedOnboardingDataObjRecord | Field TypestringDescriptionReference to a related onboarding data object record. |
| targetObjectRelationshipField | Field TypestringDescriptionAPI name of the target object's field that links this record to the related onboarding data object record. |

## OnboardingDataObjectField

Represents a field within an onboarding data object group. For example, Email Address of Party Profile is a field in the Customer Information group.

| Field Name | Description |
| --- | --- |
| name | stringDescriptionRequired. API name of the field on the target object. |

## Declarative Metadata Sample Definition

The following is an example of an OnboardingDataObjectGroup component where usageType is ValidityPeriod.

```

```

This is an example of an OnboardingDataObjectGroup component where usageType is DocumentValidation.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<OnboardingDataObjectGroup xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>description text</description>
    <masterLabel>Field Group Valid Configuration</masterLabel>
    <usageType>ValidityPeriod</usageType>
    <versionDetail>
        <computationType>StandardMinimumValidity</computationType>
        <objectDetail>
            <businessContext>KYC_VALIDITY</businessContext>
            <fieldDetail>
                <name>Status</name>
            </fieldDetail>
            <name>PartyFinancialAssetLien</name>
            <pathToRoot>PartyFinancialAsset.PartyProfile.Id</pathToRoot>
            <relatedObjectRole>Parent</relatedObjectRole>
            <targetObjectRelationshipField>PartyFinancialAsset</targetObjectRelationshipField>
        </objectDetail>
        <objectDetail>
            <businessContext>KYC_VALIDITY</businessContext>
            <fieldDetail>
                <name>ValuationAmount</name>
            </fieldDetail>
            <fieldDetail>
                <name>VerificationStatus</name>
            </fieldDetail>
            <name>PartyFinancialAsset</name>
            <pathToRoot>PartyProfile.Id</pathToRoot>
            <relatedObjectRole>Parent</relatedObjectRole>
            <targetObjectRelationshipField>PartyProfile</targetObjectRelationshipField>
        </objectDetail>
        <objectDetail>
            <businessContext>KYC_VALIDITY</businessContext>
            <fieldDetail>
                <name>IncomeAmount</name>
            </fieldDetail>
            <name>PartyIncome</name>
            <pathToRoot>Party.Id</pathToRoot>
            <relatedObjectRole>Parent</relatedObjectRole>
            <targetObjectRelationshipField>Party</targetObjectRelationshipField>
        </objectDetail>
        <objectDetail>
            <businessContext>KYC_VALIDITY</businessContext>
            <fieldDetail>
                <name>CreditScore</name>
            </fieldDetail>
            <fieldDetail>
                <name>EmploymentType</name>
            </fieldDetail>
            <name>PartyProfile</name>
            <pathToRoot>Id</pathToRoot>
        </objectDetail>
        <status>Inactive</status>
    </versionDetail>
</OnboardingDataObjectGroup>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<OnboardingDataObjectGroup xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>description text</description>
     <masterLabel>Application Form DVC Orig</masterLabel>
    <usageType>DocumentValidation</usageType>
    <versionDetail>
        <objectDetail>
            <businessContext>DVC</businessContext>
            <fieldDetail>
                <name>BureauReportedFirstName</name>
            </fieldDetail>
            <fieldDetail>
                <name>Name</name>
            </fieldDetail>
            <fieldDetail>
                <name>Id</name>
            </fieldDetail>
            <name>PartyCreditProfile</name>
            <pathToRoot>ReferenceObject.ApplicationForm.Id</pathToRoot>
            <relatedObjectRole>Parent</relatedObjectRole>
            <targetObjectRelationshipField>ReferenceObject</targetObjectRelationshipField>
        </objectDetail>
        <objectDetail>
            <businessContext>DVC</businessContext>
            <fieldDetail>
                <name>ApplicantId</name>
            </fieldDetail>
            <name>PartyFinancialAsset</name>
            <pathToRoot>Applicant.ApplicationForm.Id</pathToRoot>
            <relatedObjectRole>Parent</relatedObjectRole>
            <targetObjectRelationshipField>Applicant</targetObjectRelationshipField>
        </objectDetail>
        <objectDetail>
            <businessContext>DVC</businessContext>
            <fieldDetail>
                <name>Name</name>
            </fieldDetail>
            <fieldDetail>
                <name>ProductId</name>
            </fieldDetail>
            <fieldDetail>
                <name>RequestedAmount</name>
            </fieldDetail>
            <fieldDetail>
                <name>RequestedMonthlyPayment</name>
            </fieldDetail>
            <fieldDetail>
                <name>RequestedTerm</name>
            </fieldDetail>
            <fieldDetail>
                <name>Stage</name>
            </fieldDetail>
            <fieldDetail>
                <name>SystemModstamp</name>
            </fieldDetail>
            <fieldDetail>
                <name>TotalBrandOwnedItemAmt</name>
            </fieldDetail>
            <fieldDetail>
                <name>TotalVendorOwnedItemAmt</name>
            </fieldDetail>
            <name>ApplicationFormProduct</name>
            <pathToRoot>ApplicationForm.Id</pathToRoot>
            <relatedObjectRole>Parent</relatedObjectRole>
            <targetObjectRelationshipField>ApplicationForm</targetObjectRelationshipField>
        </objectDetail>
        <objectDetail>
            <businessContext>DVC</businessContext>
            <fieldDetail>
                <name>Name</name>
            </fieldDetail>
            <name>ApplicationForm</name>
            <pathToRoot>Id</pathToRoot>
        </objectDetail>
        <objectDetail>
            <businessContext>DVC</businessContext>
            <fieldDetail>
                <name>FirstName</name>
            </fieldDetail>
            <fieldDetail>
                <name>LastName</name>
            </fieldDetail>
            <fieldDetail>
                <name>Name</name>
            </fieldDetail>
            <name>Applicant</name>
            <pathToRoot>ApplicationForm.Id</pathToRoot>
            <relatedObjectRole>Parent</relatedObjectRole>
            <targetObjectRelationshipField>ApplicationForm</targetObjectRelationshipField>
        </objectDetail>
        <objectDetail>
            <businessContext>DVC</businessContext>
            <fieldDetail>
                <name>AccountId</name>
            </fieldDetail>
            <fieldDetail>
                <name>ApplicantId</name>
            </fieldDetail>
            <fieldDetail>
                <name>ApplicationFormId</name>
            </fieldDetail>
            <fieldDetail>
                <name>InterestRate</name>
            </fieldDetail>
            <fieldDetail>
                <name>LastReferencedDate</name>
            </fieldDetail>
            <fieldDetail>
                <name>LastViewedDate</name>
            </fieldDetail>
            <fieldDetail>
                <name>Lender</name>
            </fieldDetail>
            <fieldDetail>
                <name>Name</name>
            </fieldDetail>
            <fieldDetail>
                <name>ShareType</name>
            </fieldDetail>
            <fieldDetail>
                <name>SourceSystemIdentifier</name>
            </fieldDetail>
            <name>PartyFinancialLiability</name>
            <pathToRoot>ApplicationForm.Id</pathToRoot>
            <relatedObjectRole>Parent</relatedObjectRole>
            <targetObjectRelationshipField>ApplicationForm</targetObjectRelationshipField>
        </objectDetail>
        <onbrdDataObjGrpDocCatgMaps>
            <documentCategory>Id_Proof</documentCategory>
            <documentType>Aadhaar</documentType>
        </onbrdDataObjGrpDocCatgMaps>
        <onbrdDataObjGrpDocCatgMaps>
            <documentCategory>Address_Proof</documentCategory>
            <documentType>Passport</documentType>
        </onbrdDataObjGrpDocCatgMaps>
        <onbrdDataObjGrpDocCatgMaps>
            <documentCategory>Id_Proof</documentCategory>
            <documentType>Passport</documentType>
        </onbrdDataObjGrpDocCatgMaps>
        <onbrdDataObjGrpDocCatgMaps>
            <documentCategory>Id_Proof</documentCategory>
            <documentType>Pan_Card</documentType>
        </onbrdDataObjGrpDocCatgMaps>
        <status>Inactive</status>
    </versionDetail>
</OnboardingDataObjectGroup>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>OnboardingDataObjectGroup</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
