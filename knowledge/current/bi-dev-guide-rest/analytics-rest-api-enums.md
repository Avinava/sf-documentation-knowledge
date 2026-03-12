---
title: "Analytics REST API Enums"
domain: bi-dev-guide-rest
topic: analytics-rest-api-enums
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.587Z
estimatedTokens: 4498
keywords: [Analytics, REST, API, Enums, specific, wave]
---

# Analytics REST API Enums

> Enums specific to the /wave namespace

# Analytics REST API Enums

Enums specific to the /wave namespace

Enums are not versioned. Enum Values are returned in all API versions. Clients should handle values they don't understand gracefully.

| Enum | Description |
| --- | --- |
| Auto​Install​Request​Failed​Reason​Enum | The reason that the auto-install request failed, where applicable. Valid values are:App​Construction​FailureApp​Create​FailureApp​Installation​SkippedApp​Update​FailureCancel​FailedDelete​FailedDependency​CancelledDependency​FailureFailed​OtherFailed​To​EnqueueOrganization​IncompatibleRequest​CancelledRetriesE​xhaustedWave​Disabled |
| Auto​Install​Request​Search​Option​Enum | Filters the results to include only the contents with specific search options. Valid values include:Exclude​Non​Existing​AppsMost​Recent​Only​By​Template​And​FolderNon​Existing​Apps​Only |
| Auto​Install​Request​Sort​Option​Enum | Sorts the results according to the given sort option. Valid values include:Created​Date​AscendingCreated​Date​DescendingFolder​Id​AscendingFolder​Id​DescendingFolder​Label​AscendingFolder​Label​DescendingLast​Modified​Date​AscendingLast​Modified​DateD​escendingRequest​Name​AscendingRequest​Name​DescendingRequest​Status​AscendingRequest​Status​DescendingRequest​Type​AscendingRequest​Type​DescendingTemplate​Api​Name​AscendingTemplate​Api​Name​Descending |
| Auto​Install​Request​Status​Enum | The auto-install request status. Valid values include:App​In​ProgressCancelledEnqueuedFailedIn​ProgressNewSkippedSuccess |
| Auto​Install​Request​Type​Enum | The type of the auto-install request. Valid values include:Org​Compatibility​CheckStart​DataflowWave​App​Auto​UpdateWave​App​CreateWave​App​DeleteWave​App​UpdateWave​Enable |
| Collection​Created​By​Type​Enum | The type of user who created the pin. Valid values are:AdminNoneUser |
| Collection​Type​Enum | The collection type. Valid values are: Static |
| Connect​Wave​Access​Type​Enum | The access type. Valid values are:EditManageView |
| Collection​Item​Asset​Type​Enum | Filters the results by the collection item asset type. Valid values are:ComponentDashboardDashboard​Saved​ViewLensLightning​DashboardReportTableau​DashboardTableau​Workbook |
| Collection​Pin​Type​Enum | The type of pinning. Valid values are:AllDesktopMobileNone |
| Connect​Analytics​License​Type​Enum | The Analytics license types. Valid values are:Cdp (Data 360)Data​Pipeline​Query (Data Pipeline Query)Einstein​Analytics (CRM Analytics)Intelligent​Apps (Intelligent Apps)Sonic (Salesforce Data Pipeline) |
| Connect​Analytics​Limit​Type​Enum | The types of limits used in Analytics. Valid values are:Batch​Transformation​Hours (Maximum dataflow runtime per month)Dataset​Queries (Maximum queries on datasets for all users)Dataset​Row​Count (Maximum row of all datasets combined)Max​Daily​Rows​Data​Cloud​Output​Con (Maximum rows for Data 360 output per rolling 24-hour period)Max​Daily​Rows​High​Output​Con (Maximum rows for all high volume tier output connectors per rolling 24-hour period)Max​Daily​Rows​Low​Output​Con (Maximum rows for all low volume tier output connectors per rolling 24-hour period)Max​Daily​Rows​Med​Output​Con (Maximum rows for all medium volume tier output connectors per rolling 24-hour period)Max​Daily​Size​High​Output​Con (Maximum data size for all high volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Low​Output​Con (Maximum data size for all low volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Med​Output​Con (Maximum data size for all medium volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Virtual​Private​Cloud​Con (Maximum cumulative bytes of data sent through connections using a virtual private cloud in a rolling 24-hour period)Max​Daily​Upload​Volume (Maximum cumulative bytes of data files uploaded to Salesforce in a rolling 24-hour period)Max​Daily​Workflow​Executions (Maximum number of dataflow and recipe runs in a rolling 24-hour period)Max​Recipe​Out​Rows​Per​Month (Maximum number of rows output by all recipes to all datasets in a month)Max​Replicated​Objects (Maximum number of connected objects)Output​Local​Connector​Volume (Maximum cumulative bytes of data files written to Salesforce in a rolling 24-hour period)Staged​Dataset​Row​Count (Maximum rows for staged datasets) |
| Connect​Dashboard​Snapshot​Drift​State | The drift state of the watchlist item. Valid values are:Clean (Indicates the snapshot is clean)Dirty (Indicates the snapshot has drifted and is dirty)Ignore​Query​Drift (Indicates the snapshot is dirty, but user has ignored it) |
| Connect​Dashboard​Snapshot​Item​Last​Run​Status​Enum | The status of the dashboard snapshot item run. Valid values are:Dashboard​Bundle​Failed​To​LoadFailed​To​Parse​ValueFailed​To​Persist​DataGeneric​ExceptionQuery​Execution​FailedSuccess |
| Connect​Eclair​Map​Projection​Type​Enum | The map projection. Valid values are:AlbersUSAEquirectangularMercator |
| Connect​Email​Notification​Level​Enum | Valid types of email notification levels you can set. Valid values are:AlwaysFailuresNeverWarnings |
| Connect​Job​Type​Enum | The type of job. Valid values are:Data​Cloud​RecipeData​SyncFile​UploadInternalOrchestratedRecipeRecipe_V3ReportRestoreUser |
| Connect​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)Weekly (Run on one or more days each week) |
| Connect​Subscription​Source​Type​Enum | The type of subscription notification. Valid values are:CollectionDashboardWidget |
| Connect​Wave​Application​Status​Enum | The creation status of application. Valid values are:Cancelled​StatusCompleted​StatusDataflow​In​Progress​StatusExtension​Asset​Type​In​Progress​StatusFailed​StatusIn​Progress​StatusNew​Status |
| Connect​Wave​Asset​Type​Enum | The asset type. The default type is Dashboard. Valid types are:CollectionComponentContextual​DashboardDashboardDashboard​Saved​ViewDashboard​SnapshotData​Cloud​ReportData​ConnectorDataflowDataflow​JobDataflow​Job​NodeDatasetDataset​ShardDataset​VersionExternal​DataFolderLensLightning​ComponentLightning​DashboardLightning​Dashboard​FolderRecipeRecipe​ConfigurationRecipe​ModelReplicated​DatasetReportReport​FolderStoryTableau​DashboardTableau​WorkbookTemplateWidgetWorkflow |
| Connect​Wave​Asset​Visibility​Type | Indicates whether the asset is hidden from users with view access or not. Valid values are:All (Show all assets)Limited (Hide assets from viewers with view access) |
| Connect​Wave​Border​Edge​Type​Enum | The edges of the border to be drawn. Valid values are:AllBottomLeftRightTop |
| Connect​Wave​Compact​Form​Cogroup​Type​Enum | The compact form source cogroup type. Valid values are:AntiInnerLeftOuterRightSemi |
| Connect​Wave​Compact​Form​Join​Type​Enum | The compact form join type. Valid values are:InnerLeftOuterRight |
| Connect​Wave​Conditional​Formatting​Type​Enum | The conditional formatting type. Valid values are:CategoriesGradientMultipleRawSingleStatic |
| Connect​Wave​Connection​Mode​Enum | The connection mode for data sync. For faster extracts, use Incremental or PeriodicFull. Valid values are:FullIncrementalPeriodic​Full |
| Connect​Wave​Dashboard​Saved​View​Type | The type of saved view.﻿SharedUser |
| Connect​Wave​Dashboard​Saved​View​Dataset​State​Type | The type of dataset state. Valid values are:Global |
| Connect​Wave​Data​Connector​Bundle​Enum | The bundle type that the data connector belongs to. Valid values are:AmazonRedshiftAmazonS3AzureCdpSalesforceSnowflakeTableau |
| Connect​Wave​Connector​Category​Enum | The categories that the data connector belongs to. Valid values are:Advanced​Properties​SupportBatch​ReadDirectFile​BasedFilter​SupportOutputPrivate |
| Connect​Wave​Dashboard​Step​Type​Enum | The type of dashboard step. Valid values are:AggregateAggregate​FlexApexCdpDirect​ReportDiscoveryForecastingGrainHierarchyLensMultiSaqlSoqlSqlStaticStatic​FlexWatchlist |
| Connect​Wave​Data​Connector​Handler​Enum | The connector handler associated with the Analytics connector. Valid values are:BaseLegacy |
| Connect​Wave​Data​Connector​Type​Enum | The type of Analytics connector. The valid values are:Amazon​AthenaAmazon​Redshift​OutputAmazon​S3Amazon​S3​OutputAmazon​S3​PrivateAws​Rds​Aurora​My​SQLAws​Rds​Aurora​PostgresAws​Rds​Maria​DBAws​Rds​My​SQLAws​Rds​PostgresAws​Rds​Sql​ServerAzure​Data​Lake​Gen2​OutputAzure​Sql​DatabaseAzure​Sql​DatawarehouseDatabricks (Beta)Google​Analytics​4Google​Big​QueryGoogle​Big​Query​DirectGoogle​Big​Query​Standard​SQLGoogle​SpannerHeroku​PostgresHub​SpotMarketoV2Net​SuiteOracle​EloquaRedshiftRedshift​PrivateSalesforce​ExternalSalesforce​Marketing​Cloud​OAuth2Sap​Hana​CloudSfdc​LocalSnowflake​ComputingSnowflake​DirectSnowflake​OutputSnowflake​PrivateSnowflake​Private​OutputTableau​OnlineTableau​Hyper​OutputZendesk |
| Connect​Wave​Dataflow​Job​Status​Enum | The status of the dataflow job. Valid values are:CancelledFailurePreprocessingQueuedRunningSuccessWarning |
| Connect​Wave​Dataset​Type​Enum | The type of the dataset. Valid values are:DefaultLiveStaged​DataTrended |
| Connect​Wave​Data​Source​Type​Enum | The type of datasource. Valid values are:ApexCdpDatasetHierarchyReport​TypeSaqlSobjectStatic |
| Connect​Wave​Date​Type | The Date type. Valid values are:DateDateOnlyDateTime |
| Connect​Wave​Horizontal​Alignment​Enum | The horizontal alignment types. Valid values are:CenterLeftRight |
| Connect​Wave​Image​Fit​Type​Enum | The image alignment types. Valid values are:FitHeightFitWidthOriginalStretchTile |
| Connect​Wave​Input​Widget​Display​Format​Enum | The display format of the input value. Valid values are:CurrencyNonePercent |
| Connect​Wave​Input​Widget​Input​Type​Enum | The input type of the widget. Valid values are:SliderTypein |
| Connect​Wave​Input​Widget​Value​Format​Enum | The value type of the step. Valid values are:DateNumberText |
| Connect​Wave​Interaction​Action​Type​Enum | The action type for the interaction. Valid values are:ClearFlowNavigateResetSort |
| Connect​Wave​Interaction​Clear​Type​Enum | The type for the clear interaction. Valid values are:Clear​AllClear​ExcludeClear​Include |
| Connect​Wave​Interaction​Destination​Type​Enum | The destination type for the interaction. Valid values are:ComponentDashboardExploreLensPageUrl |
| Connect​Wave​Interaction​Event​Type​Enum | The event type for the interaction. Valid values are:ClickSelect |
| Connect​Wave​Interaction​Reset​Type​Enum | The reset type for the interaction. Valid values are:Reset​Filters |
| Connect​Wave​Language​Enum | The language in which this Xmd is localized. Valid values are:bg: Bulgarianzh_CN: Chinese ​Simplifiedzh_TW: Chinese ​Traditionalhr: Croatiancs: Czechda: Danishnl_NL: Dutchen: Englishen_GB: English ​(United Kingdom)fi: Finnishfr: Frenchde: Germanel: Greekhu: Hungarianin: Indonesianit: Italianja: Japaneseko: Koreanno: Norwegianpl: Polishpt_PT: Portuguese ​(Portugal)pt_BR: Portuguese ​(Brazil)ro: Romanianru: Russiansk: Slovaksl: Slovenianes: Spanishes_MX: Spanish ​(Mexico)sv: Swedishth: Thaitr: Turkishuk: Ukrainianvi: Vietnamese |
| Connect​Wave​Select​Mode​Enum | The select mode types. Valid values are:MultiMultiRequiredNoneSingleSingleRequired |
| Connect​Wave​Vertical​Alignment​Enum | The vertical alignment types. Valid values are:BottomCenterTop |
| Connect​Wave​Visualization​Type​Enum | The visualization type for a lens. Valid values are:BulletCalendar​Heat​MapComboComparison​TableFlatgaugeGaugeHeat​MapHorizontal​BarHorizontal​DotLineMatrixParallel​CoordinatesPiePivot​TablePolargaugePyramidRatingScatterStack​WaterfallStacked​Horizontal​BarStacked​Vertical​BarTimeTime​BarTime​ComboValues​TableVertical​BarVertical​DotWaterfall |
| Connect​Wave​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) |
| Connect​Wave​Day​Of​Week​Enum | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday |
| Connect​Wave​Selector​Display​Mode​Enum | The display mode type. Valid values are:ComboFilter |
| Connect​Wave​Relative​Week​Enum | Week within a month. Values values are:FirstSecondThirdFourthLast |
| Connect​Wave​Share​Type​Enum | The share type. Valid values are:All​Csp​UsersAll​Prm​UsersCustomer​Portal​UserGroupOrganizationPartner​UserPortalRolePortal​Role​And​SubordinatesRoleRole​And​SubordinatesRole​And​Subordinates​InternalUser |
| Connect​Wave​Template​App​Action​Enum | The last template action performed on the templated application. Valid values are:Auto​UpgradeCreateDecouple​AppOverlayRefresh​DataUpgrade |
| Connect​Wave​Template​Type​Enum | The template type. Valid values are:AppDashboardDataEmbeddedLens |
| Connect​Wave​Template​Visibility​Options​Enum | The template visibility options. Valid values are:Create​AppManageable​OnlyOrg​Can​View​OnlyView​Only |
| Connect​Wave​Text​Overflow​Enum | The overflow of the text. Valid values are:TruncateWrap |
| Connect​Wave​Widget​Type​Enum | The type of widget. Values are:BoxChartCompare​TableComponent"ContainerDate​SelectorFilter​PanelGlobal​FiltersImageInheritInputLinkList​SelectorNavigationNumberPill​BoxRange​SelectorRepeaterTableTextUrlValues​Table |
| Connect​Wave​Xmd​Type​Enum | The type of Xmd. Values are:assetmainsystemuser |
| Custom​Filter​Preset​Type​Enum | The custom preset filter types. Valid values are:All​TimeCurrent​Fiscal​QuarterCurrent​Fiscal​Quarter​To​DateCurrent​Fiscal​YearCurrent​Fiscal​Year​To​DateCurrent​MonthCurrent​Month​To​DateCurrent​QuarterCurrent​Quarter​To​DateCurrent​WeekCurrent​YearCurrent​Year​To​DateLast​180​DaysLast​30​DaysLast​7​DaysLast​90​DaysNext​180​DaysNext​30​DaysNext​7​DaysNext​90​DaysNext​Fiscal​QuarterNext​Fiscal​YearNext​MonthNext​QuarterNext​WeekNext​YearPrevious​Fiscal​QuarterPrevious​Fiscal​Quarter​To​DatePrevious​Fiscal​YearPrevious​Fiscal​Year​To​DatePrevious​Fiscal​MonthPrevious​Fiscal​Month​To​DatePrevious​QuarterPrevious​Quarter​To​DatePrevious​WeekPrevious​YearPrevious​Year​To​Date |
| Data​Platform​Audit​Type​Enum | The type of audit event. Valid values are:Job​Cancelled (Job was canceled by a user)Job​Run​Event​Based (Job was run on an event-based schedule)Job​Run​Manual (Job was run manually)Job​Run​Time​Based (Job was run on an time-based schedule)Job​Schedule​Modified (Job schedule was modified)Job​Scheduled (Job was scheduled)Job​Unscheduled (Job was unscheduled) |
| Dataset​Dmo​Mapping​App​Status​Enum | The app status the mappings are associated with. Values are:IdleIn​ProgressUndefined |
| Map<Object,Object> | The map of dynamic options for Analytics apps. Valid options are:production​Type: valid values includeATF_3_0Classicruntime​Log​Entry​Level: valid values includeFineFinerFinestInfoSevereWarning |
| Hierarchy​Type​Enum | The type of hierarchy used to facet. Valid values are:Forecast​HierarchyRole​Hierarchy |
| Layout​Type​Enum | The layout type. Valid values are:ComponentSingle​ColumnTwo​Column |
| Notification​Action​Type | The notification action type. Valid values are:Post​To​SlackSend​Email |
| Number​Type​Format​Enum | The format for a template variable number type. Valid values are:CurrencyDecimalPercentPercent​Fixed |
| Page​Type​Enum | The template wizard page type. Values are:ConfigurationValidation |
| Panel​Item​Type​Enum | The template wizard panel item type. Valid values are:Group​BoxImageLink​BoxTextVariable |
| Recipe​Data​Type | The recipe data type. Valid values are:Date​OnlyDate​TimeMultivalueNumberText |
| Subscription​Schedule​Day​Of​Week | The days of the week for schedule frequency. Valid values are:FriMonSatSunThuTueWed |
| Tooltip​Mode​Enum | The tooltip mode. Valid values are:CustomDefaultNone |
| Template​Readiness​Status​Enum | The status of the readiness task. Valid values are:CompleteFailedWarning |
| Variable​Type​Enum | The type of the template variable. Valid values are:Array​TypeBoolean​TypeCalculated​Insight​Field​TypeCalculated​Insight​TypeConnector​TypeData​Lake​Object​Field​TypeData​Lake​Object​TypeData​Model​Object​Field​TypeData​Model​Object​TypeDataset​Any​Field​TypeDataset​Date​TypeDataset​Dimension​TypeDataset​Measure​TypeDataset​TypeDate​Time​TypeNumber​TypeObject​TypeSobject​Field​TypeSobject​TypeString​Type |

| Property Name | Enum | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sort | Connect​Wave​Dataset​Sort​Order​Type​Enum | The type of sort order to be applied to the returned dataset collection. Valid values are:Connection​Name (only valid if the dataset is a Live Dataset)Created​ByCreated​DateLast​ModifiedLast​QueriedLast​RefreshedMru (Most Recently Used, last viewed date)NameTotal​Rows | Optional | 38.0 |
| scope | Connect​Wave​Scope​Type​Enum | The type of scope to be applied to the returned collection. Valid values are:BrowseCreated​By​MeInsights​Applications​Is​Cans​EditMru (Most Recently Used)Shared​With​Me | Optional | 38.0 |
| sort | Connect​Wave​Sort​Order​Type​Enum | The type of sort order to be applied to the returned collection. Valid values are:AppCreated​ByCreated​By​IdCreated​DateFolder​NameLast​ModifiedLast​Modified​ByLast​Modified​By​IdLast​Modified​DateLocationMru (Most Recently Used, last viewed date)NameOutcomeOwnerRefresh​Date (for assets like datasets)Run​Date (for assets like reports)StatusTitleType | Optional | 38.0 |
| template​Filters | Connect​Wave​Template​Search​Filters​Enum | The filter templates to apply to the returned collection. Valid values are:Apps​Constructed​By​TemplateApps​With​Install​History | Optional | 57.0 |
