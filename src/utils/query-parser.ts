/**
 * QueryParser — Smart query understanding with NLP.
 *
 * Uses wink-nlp for POS tagging, lemmatization, and entity extraction
 * to improve search quality. Transforms natural language queries into
 * structured search intents.
 *
 * Examples:
 *   "how to debug batch apex errors" →
 *     { nouns: ["batch", "apex", "error"], verbs: ["debug"], original: "..." }
 *
 *   "creating REST API callouts" →
 *     { nouns: ["rest", "api", "callout"], verbs: ["create"], original: "..." }
 */
import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";

// Initialize NLP engine (singleton)
const nlp = winkNLP(model);
const its = nlp.its;

/**
 * Salesforce-specific synonym/abbreviation map.
 * Common abbreviations and alternative names that map to canonical terms.
 */
const SF_SYNONYMS: Record<string, string> = {
  // Common abbreviations
  auth: "authentication",
  config: "configuration",
  admin: "administrator",
  dev: "developer",
  org: "organization",
  soql: "soql",
  sosl: "sosl",
  dml: "dml",
  api: "api",
  sdk: "sdk",
  ui: "interface",
  lwc: "lightning web component",
  aura: "aura",
  vf: "visualforce",
  // Salesforce-specific terms
  governor: "governor",
  bulkify: "bulk",
  sobject: "sobject",
  sfdx: "salesforce dx",
  cpq: "cpq",
  fsl: "field service",
};

/**
 * Verb-to-docType intent mapping.
 * When a query contains an action verb, boost results from matching docTypes.
 */
const INTENT_MAP: Record<string, string[]> = {
  create: ["developer-guide", "concept"],
  build: ["developer-guide", "concept"],
  debug: ["developer-guide", "api-reference"],
  fix: ["developer-guide", "help-article"],
  deploy: ["developer-guide", "concept"],
  configure: ["help-article", "concept"],
  setup: ["help-article", "concept"],
  install: ["help-article", "concept"],
  query: ["api-reference", "developer-guide"],
  test: ["developer-guide", "api-reference"],
  migrate: ["developer-guide", "concept"],
  integrate: ["developer-guide", "api-reference"],
  call: ["api-reference", "developer-guide"],
  trigger: ["developer-guide", "api-reference"],
};

export interface ParsedQuery {
  /** Original query string */
  original: string;
  /** Extracted nouns (subjects/objects of the query) */
  nouns: string[];
  /** Extracted verbs (actions/intents) */
  verbs: string[];
  /** Lemmatized nouns for search */
  lemmas: string[];
  /** Expanded query with synonyms applied */
  expanded: string;
  /** Inferred docType preferences from verbs */
  preferredDocTypes: string[];
  /** Whether this looks like a "how-to" question */
  isHowTo: boolean;
}

/**
 * Parse a search query using NLP to extract structured intent.
 */
export function parseQuery(query: string): ParsedQuery {
  const doc = nlp.readDoc(query);
  const nouns: string[] = [];
  const verbs: string[] = [];
  const lemmas: string[] = [];

  // Extract POS-tagged tokens
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  doc.tokens().each((token: any) => {
    const pos = token.out(its.pos) as string;
    const word = token.out() as string;
    const lemma = token.out(its.lemma) as string;

    if (pos === "NOUN" || pos === "PROPN") {
      nouns.push(word.toLowerCase());
      lemmas.push(lemma.toLowerCase());
    } else if (pos === "VERB") {
      verbs.push(lemma.toLowerCase());
    }
  });

  // Detect how-to intent
  const isHowTo = /^(how|what|when|where|why|can)\b/i.test(query.trim());

  // Apply synonym expansion
  const expandedTerms = query.split(/\s+/).map((term) => {
    const lower = term.toLowerCase();
    return SF_SYNONYMS[lower] || term;
  });
  const expanded = expandedTerms.join(" ");

  // Infer preferred docTypes from verbs
  const preferredDocTypes = new Set<string>();
  for (const verb of verbs) {
    const types = INTENT_MAP[verb];
    if (types) {
      for (const t of types) preferredDocTypes.add(t);
    }
  }
  // How-to questions prefer guides
  if (isHowTo) {
    preferredDocTypes.add("developer-guide");
    preferredDocTypes.add("concept");
  }

  return {
    original: query,
    nouns,
    verbs,
    lemmas,
    expanded,
    preferredDocTypes: [...preferredDocTypes],
    isHowTo,
  };
}
