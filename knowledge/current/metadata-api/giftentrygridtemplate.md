---
title: "GiftEntryGridTemplate"
domain: metadata-api
topic: giftentrygridtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.823Z
estimatedTokens: 475
keywords: [GiftEntryGridTemplate, templates, customize, gift, entry, grid, Fundraising, Parent, File, Suffix, Directory, Location, Version, Special, Access]
---

# GiftEntryGridTemplate

> Represents templates that customize the gift entry grid in Fundraising.

# GiftEntryGridTemplate

Represents templates that customize the gift entry grid in Fundraising.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

GiftEntryGridTemplate components have the suffix .giftEntryGridTempate and are stored in the giftEntryGridTemplate folder.

## Version

GiftEntryGridTemplate components are available in API version 66.0 and later.

## Special Access Rules

This object is available only if the Fundraising Access license is enabled, the Fundraising User system permission is assigned to users, and the Gift Entry Grid is enabled.

## Fields

| Field Name | Description |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the gift entry grid template. |
| IsSingleGiftDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the template is the default template for single gift entry (true) or not (false, the default). |
| TemplateConfiguration | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe template configuration that includes the data for fields, columns, and components. |

## Declarative Metadata Sample Definition

The following is an example of a GiftEntryGridTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<GiftEntryGridTemplate xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Demo of Default Template</description>
    <developerName>Demo_of_Default_Template</developerName>
    <isSingleGiftDefault>false</isSingleGiftDefault>
    <masterLabel>Demo of Default Template</masterLabel>
    <templateConfiguration>templateName: Demo of Default Template
apiVersion: 66.0
columns:
 -
  columnId: Donor
  columnType: Component
  columnField:
    sourceField: DonorId
    isFieldRequired: true
    isFieldHidden: false
  columnComponent:
    componentNameDisplay: runtime_industries_frops/giftEntryGridColumnDisplay
    componentNameEdit: runtime_industries_frops/giftEntryGridLookup
  columnModal:
    modalTitleLabel: $Label.GiftEntryGrid.AddDonorDetailsModalTitle
    modalComponent:
      componentName: runtime_industries_frops/giftEntryGridFieldsModal
    modalIcon:
      expandIcon: utility:expand_alt
      expandIconAltText: $Label.GiftEntryGrid.DonorExpandIconAltText
      lockIcon: utility:lock
      lockIconAltText: $Label.GiftEntryGrid.LockIconAltText
      noIconAltText: &quot;&quot;
    isModalReadOnly: false
    modalAltTitleLabel: $Label.GiftEntryGrid.EditDonorDetailsModalTitle
    modalAltTitleLabelVisibilityRule:
     -
      field: DonorId
      values:
       - null
      operator: NOT_EQUALS
      multipleRulesEvaluationOperator: AND
    modalFields:
     -
      sourceField: GiftType
      fieldLabel: $Label.GiftEntryGrid.DonorType
      isFieldRequired: true
      isFieldHidden: false
      defaultValue: Individual
      fieldReadOnlyRule:
       -
        field: DonorId
        values:
         - null
        operator: NOT_EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: OrganizationName
      isFieldRequired: true
      isFieldHidden: false
      visibilityRules:
       -
        field: GiftType
        values:
         - Organizational
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: Salutation
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: GiftType
        values:
         - Individual
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: FirstName
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: GiftType
        values:
         - Individual
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: LastName
      isFieldRequired: true
      isFieldHidden: false
      visibilityRules:
       -
        field: GiftType
        values:
         - Individual
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: Email
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: GiftType
        values:
         - Individual
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: HomePhone
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: GiftType
        values:
         - Individual
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: MobilePhone
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: GiftType
        values:
         - Individual
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: MobilePhone
      fieldLabel: $Label.GiftEntryGrid.OrganizationPhone
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: GiftType
        values:
         - Organizational
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: Street
      isFieldRequired: false
      isFieldHidden: false
     -
      sourceField: City
      isFieldRequired: false
      isFieldHidden: false
     -
      sourceField: State
      isFieldRequired: false
      isFieldHidden: false
     -
      sourceField: PostalCode
      isFieldRequired: false
      isFieldHidden: false
     -
      sourceField: Country
      isFieldRequired: false
      isFieldHidden: false
  isColumnHidden: false
  isColumnReadOnly: false
  columnWidth: 240
  columnLabel: $Label.GiftEntryGrid.DonorLookup
 -
  columnId: GiftReceivedDate
  columnType: Field
  columnField:
    sourceField: GiftReceivedDate
    isFieldRequired: true
    isFieldHidden: false
  isColumnHidden: false
  isColumnReadOnly: false
  columnWidth: 180
  columnLabel: GiftReceivedDate
 -
  columnId: Commitments
  columnType: Component
  columnField:
    sourceField: GiftCommitmentId
    isFieldRequired: false
    isFieldHidden: false
  columnComponent:
    componentNameDisplay: runtime_industries_frops/giftEntryGridColumnDisplay
    componentNameEdit: runtime_industries_frops/giftEntryGridCommitmentColEdit
  columnModal:
    modalTitleLabel: $Label.GiftEntryGrid.NewCommitmentModalTitle
    modalComponent:
      componentName: runtime_industries_frops/giftEntryGridFieldsModal
    modalIcon:
      expandIcon: utility:expand_alt
      expandIconAltText: $Label.GiftEntryGrid.CommitmentExpandIconAltText
      lockIcon: utility:lock
      lockIconAltText: $Label.GiftEntryGrid.LockIconAltText
      noIconAltText: &quot;&quot;
    isModalReadOnly: false
    modalAltTitleLabel: $Label.GiftEntryGrid.ViewCommitmentModalTitle
    modalAltTitleLabelVisibilityRule:
     -
      field: GiftCommitmentId
      values:
       - null
      operator: NOT_EQUALS
      multipleRulesEvaluationOperator: AND
    modalFields:
     -
      sourceField: EffectiveStartDate
      fieldLabel: $Label.GiftEntryGrid.CommitmentEffectiveStartDateLabel
      isFieldRequired: true
      isFieldHidden: false
      fieldReadOnlyRule:
       -
        field: GiftCommitmentId
        values:
         - null
        operator: NOT_EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: ExpectedEndDate
      fieldLabel: $Label.GiftEntryGrid.CommitmentExpectedEndDateLabel
      isFieldRequired: false
      isFieldHidden: false
      fieldReadOnlyRule:
       -
        field: GiftCommitmentId
        values:
         - null
        operator: NOT_EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: TransactionPeriod
      isFieldRequired: true
      isFieldHidden: false
      fieldReadOnlyRule:
       -
        field: GiftCommitmentId
        values:
         - null
        operator: NOT_EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: TransactionInterval
      isFieldRequired: true
      isFieldHidden: false
      fieldReadOnlyRule:
       -
        field: GiftCommitmentId
        values:
         - null
        operator: NOT_EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: TransactionDay
      isFieldRequired: true
      isFieldHidden: false
      visibilityRules:
       -
        field: TransactionPeriod
        values:
         - Monthly
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
      fieldReadOnlyRule:
       -
        field: GiftCommitmentId
        values:
         - null
        operator: NOT_EQUALS
        multipleRulesEvaluationOperator: AND
  isColumnHidden: false
  isColumnReadOnly: false
  columnWidth: 240
  columnLabel: $Label.GiftEntryGrid.CommitmentColumnLabel
 -
  columnId: GiftAmount
  columnType: Field
  columnField:
    sourceField: GiftAmount
    isFieldRequired: false
    isFieldHidden: false
  isColumnHidden: false
  isColumnReadOnly: false
  columnWidth: 160
  columnLabel: GiftAmount
 -
  columnId: PaymentMethod
  columnType: Field
  columnField:
    sourceField: PaymentMethod
    isFieldRequired: true
    isFieldHidden: false
  columnModal:
    modalTitleLabel: $Label.GiftEntryGrid.PaymentInformationModalTitle
    modalComponent:
      componentName: runtime_industries_frops/giftEntryGridFieldsModal
    modalIcon:
      expandIcon: utility:expand_alt
      expandIconAltText: $Label.GiftEntryGrid.PaymentMethodIconAltText
      lockIcon: utility:lock
      lockIconAltText: $Label.GiftEntryGrid.LockIconAltText
      noIconAltText: &quot;&quot;
    isModalReadOnly: false
    modalFields:
     -
      sourceField: PaymentMethod
      isFieldRequired: true
      isFieldHidden: false
     -
      sourceField: Last4
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: PaymentMethod
        values:
         - Credit Card
         - ACH
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: ExpiryMonth
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: PaymentMethod
        values:
         - Credit Card
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: ExpiryYear
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: PaymentMethod
        values:
         - Credit Card
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: CheckDate
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: PaymentMethod
        values:
         - Check
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
     -
      sourceField: PaymentIdentifier
      isFieldRequired: false
      isFieldHidden: false
      visibilityRules:
       -
        field: PaymentMethod
        values:
         - Check
        operator: EQUALS
        multipleRulesEvaluationOperator: AND
  isColumnHidden: false
  isColumnReadOnly: false
  columnWidth: 180
  columnLabel: PaymentMethod
 -
  columnId: OutreachSourceCode
  columnType: Field
  columnField:
    sourceField: OutreachSourceCodeId
    isFieldRequired: false
    isFieldHidden: false
  isColumnHidden: false
  isColumnReadOnly: false
  columnWidth: 200
  columnLabel: $Label.GiftEntryGrid.OutreachSourceCodeLookup
 -
  columnId: Campaign
  columnType: Field
  columnField:
    sourceField: CampaignId
    isFieldRequired: false
    isFieldHidden: false
  isColumnHidden: false
  isColumnReadOnly: false
  columnWidth: 200
  columnLabel: $Label.GiftEntryGrid.CampaignLookup
 -
  columnId: Designations
  columnType: Component
  columnField:
    sourceField: GiftDesignation1Id
    isFieldRequired: false
    isFieldHidden: false
  columnComponent:
    componentNameDisplay: runtime_industries_frops/giftEntryGridColumnDisplay
    componentNameEdit: runtime_industries_frops/giftEntryGridLookup
  columnModal:
    modalTitleLabel: $Label.GiftEntryGrid.DesignationsModalTitle
    modalComponent:
      componentName: runtime_industries_frops/giftEntryGridDesignation
    modalIcon:
      expandIcon: utility:expand_alt
      expandIconAltText: $Label.GiftEntryGrid.DesignationExpandIconAltText
      lockIcon: utility:lock
      lockIconAltText: $Label.GiftEntryGrid.LockIconAltText
      noIconAltText: &quot;&quot;
    isModalReadOnly: false
  isColumnHidden: false
  isColumnReadOnly: false
  columnWidth: 240
  columnLabel: $Label.GiftEntryGrid.DesignationsLookup
 -
  columnId: SoftCredits
  columnType: Component
  columnField:
    sourceField: RecipientId
    isFieldRequired: false
    isFieldHidden: false
  columnComponent:
    componentNameDisplay: runtime_industries_frops/giftEntryGridColumnDisplay
    componentNameEdit: runtime_industries_frops/giftEntryGridLookup
  columnModal:
    modalTitleLabel: $Label.GiftEntryGrid.SoftCreditsModalTitle
    modalComponent:
      componentName: runtime_industries_frops/giftEntryGridSoftCredit
    modalIcon:
      expandIcon: utility:expand_alt
      expandIconAltText: $Label.GiftEntryGrid.SoftCreditsExpandIconAltText
      lockIcon: utility:lock
      lockIconAltText: $Label.GiftEntryGrid.LockIconAltText
      noIconAltText: &quot;&quot;
    isModalReadOnly: false
  isColumnHidden: false
  isColumnReadOnly: false
  columnWidth: 240
  columnLabel: $Label.GiftEntryGrid.SoftCreditsLookup</templateConfiguration>
</GiftEntryGridTemplate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>GiftEntryGridTemplate</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
