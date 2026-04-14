// =====================================================================
// DEEPFAKE Governance Dashboard — Council Narrative
// Authored by the 12-member DEEPFAKE expert council (discipline labels)
//   M1  IBSA Research                M7  Privacy & Data Protection
//   M2  Criminal Law / Cyber-Crime   M8  Comparative AI Governance
//   M3  Platform Governance / T&S    M9  Quantitative Methodology
//   M4  AI/ML Technical Safety       M10 Legislative Policy
//   M5  Human Rights / Dignity Law   M11 Philosophical / Applied Ethics
//   M6  Victim Advocacy (HARD-BLOCK) M12 Science Communication / Editor
//
// Process: Phase A (6 parallel discipline-routed drafters) →
//          Phase B1 (M12 synthesis merge) →
//          Phase B2 (parallel audit gauntlet: M9 methodology + M6 trauma +
//                    M1 intersectionality + M11 normative-line) →
//          Phase B6 (M12 final stitch).
//
// Editorial mandates enforced (rev2 plan, 22 cross-cutting inserts):
//   FIG-9 per-category recall blindness, gendered-harm cross-cut with
//   "women and girls" + 7:1 asymmetry verbatim, MR-1 dual-voice chips,
//   MR-2 with both-sides gloss, multi-axis gap thesis verbatim,
//   private-ordering invisibility, DPA parallel regime as standalone
//   finding, anti-hagiography Korea guard, no-winners framing, helpline
//   offramp on every victim-facing block, content notes on trauma blocks.
//
// Drift defense: dataSignature compared to live DATA fingerprint at load.
// =====================================================================

window.INTERPRETATIONS = {
  schemaVersion: 2,
  paperVersion: "v7",
  // Signature format: corpus-{matched}-{generation-date}
  // Matched against: "corpus-" + DATA.statements.length + "-" + DATA.generated.split('T')[0]
  dataSignature: "corpus-1446-2026-04-13",
  scoringFormulaVersion: "v1",
  dimensionsHash: "deepfake1",

  changeLog: [
    {
      date: "2026-04-13",
      author: "Session S10 council (12-member)",
      summary: "v3 dashboard: N=1,446 (from 1,279). S9 scan with consent-framework recall patches, plural/conjugation fixes, Belgium Criminal Code surfaced. All category means, dimension counts, and percentages recalculated. 12-expert critique council reviewed plan. Criminal-offense count tripled (3→9). Dignity-framing expanded 37x via recall-lift corpus. Category mean ordering changed: C<D<B<F<E<A. Paper version v7."
    },
    {
      date: "2026-04-11",
      author: "Session 12 council (6-member)",
      summary: "P1 jargon cleanup (15 glosses), P2 E/F category regrouping to match paper (E: 4->3, F: 2->3 dims), P3 pipeline hardening (chart_registry, Node.js parser, stale-number detection). Category means corrected to corpus-wide values. Overview contentNote added."
    },
    {
      date: "2026-04-11",
      author: "Session 11 council (12-member)",
      summary: "Initial council narrative: 23 blocks, 22 cross-cutting mandates, 6 Phase-A discipline-routed drafters merged via M12 synthesis + 4-auditor gauntlet."
    }
  ],

  tabs: {

    // ============================================================
    // LANDING — pre-Overview "How to read this dashboard" card
    // Authored: M12 + M9 + M8 (synthesis); M11 + M5 normative review
    // ============================================================
    landing: {
      _howToRead: {
        title: "How to read this dashboard",
        intro: "A governance-gap map of 1,446 matched legal instruments (from 3,008 scanned) addressing deepfake and non-consensual intimate imagery (NCII) harms across 25 scoring dimensions in six categories. Throughout this dashboard, 'thin' means scores are very low — most governance texts barely address the dimension.",
        sections: [
          {
            heading: "What you're looking at",
            body: "1,446 of 3,008 instruments matched a three-tier keyword scanner: Tier 1 (explicit deepfake/NCII), Tier 2 (contextual: synthetic media, image manipulation, consent), Tier 3 (adjacent AI ethics with relevant provisions). Each was scored on 25 governance dimensions in six categories A–F."
          },
          {
            heading: "How to read tier",
            body: "Tier 1 hits name deepfakes or NCII directly. Tier 2 uses adjacent language (synthetic media, consent). Tier 3 is broader AI-ethics framing with relevant provisions. Tier reflects how directly the text mentions deepfakes — it is a sorting method, not a quality ranking."
          },
          {
            heading: "FIG-9 recall blindness",
            body: "Scanner audit: the scanner correctly identifies 75% of what it flags (precision 0.75) but catches only 28% of what is actually there (macro recall 0.28). Per-category recall A: 0.643, B: 0.364, C/D/E: 0.000, F: 0.286. Categories C, D, and E are lower bounds — absence means the scanner cannot detect, not that nothing exists."
          },
          {
            heading: "Multi-axis gap thesis",
            body: "The multi-axis gap: governance is thin across every category. Corpus-wide category means (out of 100): Victim Empowerment (C) 0.37, Prosecution (D) 1.35, Prevention (B) 1.73, Transparency (F) 2.02, Rights & Consent (E) 2.80, Recognition (A) 3.82 — all below 4. The S9 recall-lift expanded the corpus from 1,279 to 1,446, adding focused deepfake governance texts that raised several category means (D nearly doubled, E up 60%), yet the gap persists: no category mean clears 4/100. South Korea STMT-3424/3425 is strongest-within-thinness, never the model. No jurisdiction wins; the gap is the finding."
          },
          {
            heading: "Council disagreements",
            body: "Two live tensions remain unresolved. MR-1 criminal-law debate: prosecution is too rarely used for serious harm (M2) vs. aggressive prosecution risks racial bias and may not reflect what survivors want (M6). MR-2 dignity pluralism: dignity as equal social standing (Waldron, M5) vs. pluralist alternatives — Kantian moral worth, ubuntu (communal dignity), karamah (Islamic dignity), relational autonomy (M11)."
          },
          {
            heading: "Refs vocabulary",
            body: "Reference badges: §N links to a paper section; FIG-N to a figure; Tbl-N to a table; MR-N to a minority report (unresolved council disagreement); Caveat-N to a canonical caveat. Click any tab and look for badges beneath each chart."
          }
        ],
        refs: ["§1", "§4", "§13", "FIG-9"]
      }
    },

    // ============================================================
    // OVERVIEW TAB
    // Phase-A authors: M12 + M8 (_exec), M9 + M1 (chartTierDonut),
    //                  M8 (chartOrgType, chartYearLine), M1 + M2 (top10Table)
    // ============================================================
    overview: {
      _exec: {
        whatYouSee: "Four overview panels read 1,446 matched statements (of 3,008 scanned) across 25 dimensions in six categories (A Recognition, B Prevention, C Victim Empowerment, D Prosecution, E Rights & Consent, F Transparency & Capacity). Summary cards show key numbers for the corpus; charts decompose tier, organization type, year, and the top-scoring statements.",
        whatItMeans: "The corpus exhibits a multi-axis gap: corpus-wide category means (out of 100) are thin across the board — Victim Empowerment (C) averages 0.37, Prosecution (D) 1.35, Prevention (B) 1.73, Transparency (F) 2.02, Rights & Consent (E) 2.80, and Recognition (A) 3.82. Built on AlgorithmWatch (112), OECD.AI (317), LAIP (39), WAIE (55), original discovery, and a S4–S9 recall-lift expansion (+167 focused deepfake governance statements), the scan finds 22.3% mention deepfakes; only 3.5% recognize the harm is gendered against women and girls — a 6:1 asymmetry. Top-5 jurisdictions (US, UK, International, India, EU) carry 70.8% of Category B≥50, concentrating prevention text geographically. Korea STMT-3424/3425 reads as strongest-within-thinness, never the model. Dignity in this corpus is framed primarily as equal social standing (the Waldron model, per §2.1); pluralist alternatives preserved in MR-2. The scanner measures governance text, not enforcement or operational reality.",
        takeaway: "Thinness is multi-axial, not a single failure: prosecution, empowerment, and normative framing lag together, and women and girls remain structurally under-named across 1,446 statements. Korea is strongest-within-thinness; the gap is the finding.",
        refs: ["§2.1", "§13", "FIG-9", "MR-2", "Caveat-7"],
        tensionNote: "MR-2: M5 anchors Waldronian status-dignity in UDHR/ICCPR universally; M11 holds Kantian + ubuntu (Metz) + karamah (An-Na'im) + relational autonomy resist single-frame flattening.",
        actions: {
          L: "Legislate gendered-harm recognition clauses; tie criminal-offense dimensions to NCII-specific statutes, not generic fraud or defamation.",
          P: "Publish takedown latency, appeal rates, and provenance signals disaggregated by target gender and jurisdiction.",
          C: "Track intersectional risk multipliers (race, disability, age, LGBTQ+, migration) and audit civil-society overrepresentation in recognition labor.",
          I: "Coordinate cross-border evidentiary standards; align UN, Council of Europe, and regional bodies on survivor-centered remedies."
        },
        crossRefs: ["dimensions", "anchors", "geographic"],
        contentNote: "This dashboard quantifies patterns of governance response to non-consensual deepfakes, a form of image-based sexual abuse primarily targeting women and girls. If you need support, confidential helplines are listed below.",
        helplineOfframp: [
          { name: "SWGfL Revenge Porn Helpline", url: "https://revengepornhelpline.org.uk", desc: "UK survivor support, free hash-matching" },
          { name: "CCRI Image Abuse Helpline", url: "https://cybercivilrights.org/ccri-crisis-helpline/", desc: "US 1-844-878-CCRI" },
          { name: "eSafety Commissioner", url: "https://www.esafety.gov.au/", desc: "Australia 24h takedown authority" },
          { name: "StopNCII.org", url: "https://stopncii.org", desc: "Global hash-matching for adults" }
        ]
      },

      chartTierDonut: {
        whatYouSee: "Donut splits 1,446 matched statements across Tier 1 (explicit deepfake/NCII), Tier 2 (contextual: synthetic media, image manipulation, consent), and Tier 3 (adjacent AI ethics with relevant provisions). Of the corpus, explicit deepfake mentions = 22.3% (n=322); NCII recognition = 7.2% (n=104); dignity framing = 17.9% (n=259).",
        whatItMeans: "Tiering is methodological triage. The 1,446/3,008 match ratio shows roughly 48% of scanned governance text matched at least one dimension. Inside these tiers, gendered-harm recognition appears in only 3.5% (n=50/1,446), even though 80–95% of victims are women and girls. The 6:1 asymmetry — 22.3% mention deepfakes; only 3.5% recognize the harm is gendered — emerges immediately from the very first counts a reader encounters. Section 6 catalogs intersectional risk multipliers (race, disability, age, LGBTQ+ status, migration status) that compound this structural absence: women and girls are not named, and the additional axes that shape vulnerability are even more invisible.",
        takeaway: "Tier counts look substantial until gender is overlaid: women and girls disappear from the text governing the harm that primarily targets them.",
        refs: ["§6", "FIG-9", "Caveat-8"]
      },

      chartOrgType: {
        whatYouSee: "Horizontal bars rank organization types by statement count. Government and intergovernmental bodies dominate volume, followed by civil society, religious, industry, academic, and professional associations. The bar chart counts text production, not gendered-harm recognition.",
        whatItMeans: "Organization type is the single sharpest predictor of whether a governance statement names gendered harm at all. On the 50 gendered-harm recognizers, civil society contributes 38% (19/50), government 28% (14/50), intergovernmental 24% (12/50); professional, industry, academic, and labor organizations contribute minimally. The recall-lift expansion narrowed the civil-society dominance (from 46% to 38%) as more government and intergovernmental texts entered the corpus, but the overall pattern persists: the actors closest to enforcement, standard-setting, and knowledge production still under-name women and girls relative to their share of total text output. Recognition labor remains concentrated in civil society.",
        takeaway: "Recognition is concentrated. Civil society leads the naming; industry, labor, academia, and professional bodies leave the gender of the harm largely unsaid.",
        refs: ["§3", "§6", "Tbl-1"]
      },

      chartYearLine: {
        whatYouSee: "Annual statement counts trend upward across the window, with a visibly steeper slope beginning in 2023. Earlier years carry sparse, episodic coverage; recent years concentrate most of the matched 1,446.",
        whatItMeans: "The temporal line captures a governance response compressed into a narrow window. Before 2023, deepfake-relevant text appeared intermittently, often folded into broader synthetic-media or online-harms discussions. After ChatGPT's public release the post-ChatGPT (2023+) trajectory steepens as jurisdictions draft, consult, and publish at a faster cadence. Quantity rises, but the multi-axis gap persists: later statements do not visibly redistribute toward prosecution (D, mean 1.35), victim empowerment (C, 0.37), or prevention (B, 1.73). Korea's STMT-3424/3425 sits inside this acceleration, and the EU is pursuing a parallel regime on a comparable timeline through data-protection enforcement (see Geographic and Anchors tabs). Top-5 jurisdictions absorb 70.8% of Category B≥50, so the acceleration is also a concentration.",
        takeaway: "More text, same shape. The post-2023 surge adds volume without rebalancing the thin axes or broadening the jurisdictional base beyond the top five.",
        refs: ["§3", "§13", "Tbl-2"]
      },

      top10Table: {
        whatYouSee: "Top 10 highest-scoring statements ranked by max_score across all 25 dimensions. South Korea STMT-3424 (Sexual Violence Prevention Act) and STMT-3425 (Act on Special Cases Article 14-2) anchor the top with max_score 100, a 7-year imprisonment penalty, and the National Center for Digital Sexual Crime. Most top-scorers cluster in prevention and recognition, not prosecution or victim empowerment.",
        whatItMeans: "Even at the top of the distribution, the gender of the harm is rarely named. Women and girls appear explicitly in a minority of top-ranked statements, consistent with the corpus-wide 3.5% figure: 22.3% mention deepfakes; only 3.5% recognize the harm is gendered. Section 6 intersectional risk multipliers (race, disability, age, LGBTQ+, migration status) are largely absent from top-scorers. On prosecution, df_criminal_offense reaches the substantive-engagement threshold in 9 of 1,446 statements (0.6%) — up from 3 in the pre-recall-lift corpus — spanning Netherlands, UK (CPS), EU (AI Act + Council), Korea, Georgia, Germany, and India; Caveat 7 (statutory ≠ enforcement) binds. Korea STMT-3424/3425 carries the strongest-measured criminal-offense language in the corpus, anchored institutionally by the National Center for Digital Sexual Crime, but remains strongest-within-thinness: a high score inside a category whose corpus-wide mean is 1.35/100.",
        takeaway: "The top of the table is thin at the top. Criminal-offense engagement is emerging (9 statements across 7 jurisdictions) but remains rare at 0.6%, and women and girls are under-named even among the highest-scoring texts.",
        refs: ["Caveat-5", "MR-1-prosecution", "MR-1-carceral-skepticism", "Caveat-7"],
        tensionNote: "MR-1: even among the top-scorers, criminal law is under-deployed for serious harm (M2); aggressive criminalization risks racialized over-enforcement that overrides survivor autonomy (M6). Both held."
      }
    },

    // ============================================================
    // DIMENSIONS TAB
    // Phase-A: M9 + M1 + M5 (_exec); multi-author chartHeatmap;
    //          M9 (chartDimCoverage); M9 + M5 (chartDimMean)
    // ============================================================
    dimensions: {
      _exec: {
        whatYouSee: "The dimensions tab decomposes the 25 df_* scoring dimensions into a heatmap (top 50 statements × all dimensions), a coverage bar (statements with score>0 per dimension), and a mean-score bar. Scanner P=0.75, macro R=0.28; recall by category — A: 0.643, B: 0.364, C/D/E: 0.000, F: 0.286 (FIG-9). C/D/E values shown are lower bounds, not coverage.",
        whatItMeans: "The dimensions tab confronts a field that remains thin despite expansion. Deepfake-mention leads at 22.3% (n=322); dignity framing expanded to 17.9% (n=259) and human-rights grounding to 27.2% (n=393) through the recall-lift corpus expansion, but gendered-harm recognition remains at only 3.5% (50/1,446). The 6:1 asymmetry (22.3% mention deepfakes; only 3.5% recognize the harm is gendered against women and girls) and intersectional axes per §6 (race, disability, age, LGBTQ+ status, migration) remain largely absent. Human-rights grounding now appears in 27.2% (393/1,446); of those 393, only 14 also score ≥25 on gendered harm — gendered HR vocabulary remains sparse in the governance text that most needs it. Zero mentions of Istanbul Convention, Maputo Protocol, Belém do Pará; CEDAW appearances remain minimal. Zero citations of Langton (objectification), Nussbaum (seven features), MacKinnon (silencing) — the philosophical literature most directly articulating dignity violation is absent (§11.2). FIG-10 reports uncertainty ranges (95% confidence intervals via 1,000 bootstrap resamples). Reproducibility rests on the open scanner plus FIG-9 + FIG-10; no human-agreement check applies because scoring is automated, not judged by multiple raters (Caveat-11).",
        takeaway: "The field expanded unevenly: dignity and human-rights framing grew substantially via the recall-lift corpus, but gendered harm (3.5%), victim services, and criminal categories remain thin. Korea is strongest-within-thinness. Gendered and intersectional vocabulary is structurally missing.",
        refs: ["FIG-9", "FIG-10", "§11.2", "MR-2", "Caveat-11"],
        tensionNote: "MR-2 dignity pluralism: M5 anchors Waldronian status-dignity universally; M11 holds Kantian + ubuntu + karamah + relational autonomy resist single-frame flattening."
      },

      chartHeatmap: {
        whatYouSee: "Top 50 statements × 25 dimensions, color-coded by 0–100 score. Scanner P=0.75, macro R=0.28; recall by category — A: 0.643, B: 0.364, C/D/E: 0.000, F: 0.286 (FIG-9). C/D/E values shown are lower bounds, not coverage. The scanner measures governance text; it cannot distinguish endorsement from critique or proposal from enactment.",
        whatItMeans: "The heatmap visualizes the multi-axis gap directly. A-rows: deepfake-mention dominates the heat at 22.3%; dignity framing expanded to 17.9% via the recall-lift corpus but gendered-harm (3.5%) remains sparse — 22.3% mention deepfakes; only 3.5% recognize the harm is gendered against women and girls, with intersectional axes (race, disability, migration, sexuality, age per §6) absent. C-rows: Category C is sparsest; FIG-9 recall = 0.0 means values are lower bounds — notification-right tops out at 35, never ≥50. D-rows: 9 of 1,446 reach ≥50 on criminal_offense (up from 3 pre-expansion), spanning 7 jurisdictions; Minority Report #1 holds the carceral debate live between under-deployed prosecution and racialized over-enforcement. F-rows: F is dominated by labeling/disclosure; the open-weights causal driver — Stable Diffusion, FLUX, CivitAI NSFW fine-tunes, and consumer 'nudify' apps — is invisible, appearing nowhere in governance text (§12.3).",
        takeaway: "Heat concentrates in A and F-labeling; C/D/E cells are lower bounds, not absences. The open-weights causal driver of the 2022–2026 governance wave is invisible to the corpus.",
        refs: ["FIG-9", "Caveat-6", "MR-1-prosecution", "MR-1-carceral-skepticism"],
        tensionNote: "MR-1: M2 reads D-row sparsity as prosecution under-deployed for serious harm against women and girls; M6 reads aggressive criminalization as racialized over-enforcement that overrides survivor autonomy. Both held."
      },

      chartDimCoverage: {
        whatYouSee: "Horizontal bars count statements scoring >0 per dimension. Human_rights leads (n=393); deepfake-mention 322; education 300; consent_framework 267; dignity 259; labeling/disclosure 243; intent_standard 236; cross_border 191; platform_obligations 190; penalty_structure 173; implementation 142; criminal_offense 137; age_protection 113; NCII 104; training_data 89; app_regulation 78; safeguards 73; support_services 56; gendered_harm 50; civil_remedies 50; distributor_liability 41; takedown 38; religious_dignity 26; reupload 23; notification_right 14. Scanner P=0.75, macro R=0.28; recall A: 0.643, B: 0.364, C/D/E: 0.000, F: 0.286 (FIG-9). C/D/E shown are lower bounds.",
        whatItMeans: "The bar chart reveals uneven expansion: the recall-lift corpus raised human-rights grounding (27.2%), deepfake-mention (22.3%), and dignity framing (17.9%) substantially, but gendered harm (3.5%) and victim-facing dimensions (takedown 2.6%, notification 1.0%) remain thin. Category C, D, E counts are lower bounds given zero per-category recall in the FIG-9 audit. FIG-10 reports 95% bootstrap CIs (1,000 iterations, seed=42); per-dimension uncertainty bounds in supplementary. Human-rights grounding now appears in 27.2% (393/1,446); of those 393, only 14 also score ≥25 on gendered harm — gendered HR vocabulary remains sparse in the governance text that most needs it. Zero mentions of Istanbul Convention, Maputo Protocol, Belém do Pará; CEDAW appearances remain minimal. The scanner counts mentions; it cannot distinguish endorsement from critique or proposal from enactment (§12 opening).",
        takeaway: "The corpus expanded unevenly: human-rights, dignity, and deepfake-mention now lead, but gendered harm (3.5%) and victim-facing bars remain thin. C/D/E bars are lower bounds. Treat absent gendered-treaty instruments (Istanbul, Maputo, Belém do Pará) as a structural finding.",
        refs: ["FIG-9", "FIG-10", "§11.1", "Caveat-8"]
      },

      chartDimMean: {
        whatYouSee: "Mean score per dimension on a 0–100 axis. The bars are uniformly low — no dimension mean clears 5/100. Religious_dignity mean = 0.16 with ZERO statements scoring ≥50. Scanner P=0.75, macro R=0.28; recall A: 0.643, B: 0.364, C/D/E: 0.000, F: 0.286 (FIG-9). C/D/E values are lower bounds.",
        whatItMeans: "No dimension mean clears 5/100 on a corpus-wide basis. FIG-10 reports 95% bootstrap CIs (1,000 iterations, seed=42); per-dimension uncertainty bounds in supplementary. Human-rights grounding now appears in 27.2% (393/1,446) — a substantial increase from the pre-expansion corpus — but of those 393 statements, only 14 also score ≥25 on gendered harm, so gendered HR vocabulary remains sparse. Religious_dignity mean = 0.20 with 2 statements ≥50 (up from zero): institutional dignity discourse remains near-absent from governance text, though the expansion surfaced two documents engaging substantively. Of 26 weak hits, 17 come from religious organizations; citations of Islamic karamah (An-Na'im), ubuntu (Metz), or representational-harm theorists (Langton, Nussbaum, MacKinnon) remain absent.",
        takeaway: "Corpus-wide means confirm thinness across all six categories, though the recall-lift expansion raised D (1.35) and E (2.80) substantially. Religious_dignity and victim-facing dimensions remain the sharpest lacunae. Korea reads as strongest-within-thinness, not strong in absolute terms.",
        refs: ["FIG-9", "FIG-10", "§11.2", "MR-2"],
        tensionNote: "MR-2: M5 reads the religious_dignity gap as evidence that Kantian / karamah / ubuntu vocabularies are structurally excluded from secular governance text; M11 cautions that importing thick religious dignity risks conflating doctrinal and constitutional registers. Both held."
      }
    },

    // ============================================================
    // GEOGRAPHIC TAB
    // Phase-A: M8 (_exec, chartRegionBar, chartRegionTier),
    //          M2 + M7 (chartCountryBar)
    // ============================================================
    geographic: {
      _exec: {
        whatYouSee: "Geographic coverage is concentrated. Top-5 jurisdictions (US, UK, International, India, EU) carry 70.8% of Category B≥50. Africa appears only through South Africa (1/54 states); Latin America only through Brazil (1/20). MENA, Central Asia, and Pacific island states are substantially under-covered.",
        whatItMeans: "The map reflects three overlapping, non-disentangled causes: (i) a scanner built for English with only seven Korean translation-matching rules added, yielding issuing-country conflation and website-blocking gaps (Caveats 8, 9, 5); (ii) governance silence in jurisdictions that have not yet legislated; and (iii) structural capacity asymmetry the text cannot resolve. Critically, the causal driver of the 2022–2026 wave — Stable Diffusion, FLUX, CivitAI NSFW fine-tunes, and consumer 'nudify' apps — appears nowhere in governance text (§12.3). The geography shows where statutes were written in scannable English, not where harm lands or where enforcement moves. Top-5 concentration should be read as a sampling-plus-silence artifact, never as a league table. The EU is pursuing a parallel regime through data-protection enforcement (see chartCountryBar interpretation and the dpaAnchorRow on the Anchors tab).",
        takeaway: "Read the map as a coverage diagnostic, not a ranking. Concentration, grey voids, and open-weights silence jointly constrain every downstream inference drawn from geographic aggregates.",
        refs: ["FIG-4", "Caveat-8", "Caveat-9", "Caveat-10", "§12.3"],
        actions: {
          L: "Extend scanner coverage to French, German, Spanish, Portuguese, Arabic, and Chinese before drawing any cross-region claim.",
          P: "Disaggregate platform takedown reporting by jurisdiction so platform self-regulation becomes visible to public audits.",
          C: "Treat Africa and Latin America cells as unknown, not low; fund local civil-society documentation in MENA and Pacific.",
          I: "Surface the open-weights supply chain in §12.3 companion analysis; coordinate UNESCO and OECD on multilingual policy inventory."
        },
        crossRefs: ["overview", "anchors", "orgtype"]
      },

      chartCountryBar: {
        whatYouSee: "Top-25 bar dominated by US, UK, International, India, EU — together 70.8% of Category B≥50. South Korea sits high on max_score (100) via STMT-3424 and STMT-3425. EU member states appear comparatively thin on criminal-statute axes despite the bloc's active data-protection enforcement posture.",
        whatItMeans: "Top-5 jurisdictions carry 70.8% of Category B≥50 — a concentration that conflates three instrument modes the scanner cannot separate: reactive notice-and-takedown (§230, DSA Art. 16, TAKE IT DOWN 48h), proactive duty-of-care (NetzDG 24h, Korea 7-day, Australia 24h), and private ordering. Korea is strongest-within-thinness, not strongest-proven; Session 6 KLRI recovery lifted STMT-3424/3425 to 100, but speech-suppression concerns persist; Caveats 7, 9 bind. The EU is pursuing a parallel regime: 11 EU DPA enforcement actions, 2022–2026, via GDPR Art. 17 (erasure) + Art. 9 (biometric special category) — Garante, CNIL, ICO, AEPD, Dutch AP, Hamburg, DPC, UODO. EU under-scoring on Category C is a measurement artifact, not a governance gap (§8). Platform private ordering (StopNCII.org, NCMEC/PhotoDNA, nudify-app delistings) is invisible.",
        takeaway: "Concentration is real but compound: sampling, silence, and instrument-mode conflation overlap. Korea is strongest-within-thinness; the EU is pursuing a parallel regime through DPAs.",
        refs: ["§8", "Caveat-3", "Caveat-7", "Caveat-9"]
      },

      chartRegionBar: {
        whatYouSee: "Region bars cluster in North America, Western Europe, and parts of Asia-Pacific (Korea, India, Australia). Africa and Latin America register as near-flat bars carried by single states (South Africa, Brazil). MENA, Central Asia, and Pacific island states are substantially under-covered.",
        whatItMeans: "The regional shape is produced by three overlapping, non-separable causes the paper explicitly declines to disentangle: English-language scanner reach (Caveat 8), issuing-country conflation and WAF coverage bias (Caveats 9, 5), and genuine legislative silence. Africa is represented by South Africa only; Latin America by Brazil only — these are grey voids in Figure 4, not low-governance findings. Dignity-harm framings differ across these regions in ways a single Western criminal-statute template cannot capture, which matters for how absences are interpreted: a thin bar in MENA or sub-Saharan Africa is a measurement silence, not a normative verdict.",
        takeaway: "Regional bars diagnose scanner coverage and legislative silence jointly; absence is not evidence of permissiveness.",
        refs: ["FIG-4", "Caveat-10", "MR-2"],
        tensionNote: "MR-2: M5 anchors Waldronian status-dignity universally; M11 holds Kantian + ubuntu + karamah + relational autonomy resist single-frame flattening across these regions."
      },

      chartRegionTier: {
        whatYouSee: "Stacked region × tier bars show Tier 1 (explicit) concentrated in high-income OECD regions; Tier 2 thinly populated; Tier 3 dominates Africa, Latin America, MENA, Central Asia. The stack visibly tilts with income, not with harm exposure.",
        whatItMeans: "The tilt is a structural-capacity finding, not only a scanner artifact. Category F (implementation capacity) concentrates 74.2% (46/62) of ≥50 scores in high-income OECD states; ZERO low-income countries clear the threshold. Korea STMT-3424 sits at the ceiling, but the ceiling itself is thin. FIG-9 audit constrains what this chart can claim on adjacent categories: precision 0.75, macro recall 0.28; per-category recall A=0.643, B=0.364, C/D/E=0.000, F=0.286 — so any tier reading that leans on C, D, or E claims is effectively blind, and F itself recovers fewer than one in three true positives.",
        takeaway: "The income gradient is structural, not cosmetic; combined with near-zero C/D/E recall, regional tier stacks support capacity diagnosis but not governance ranking.",
        refs: ["FIG-9", "§12", "Caveat-10"],
        thinnessWarning: "74.2% of Category F≥50 from high-income OECD; ZERO low-income countries score ≥50 on df_implementation_capacity. FIG-9 recall A=0.643, B=0.364, C/D/E=0.000, F=0.286 — tier claims touching C/D/E are blind."
      }
    },

    // ============================================================
    // STAKEHOLDER TYPES TAB
    // Phase-A: M3 + M10 (_exec, chartOrgTier);
    //          M3 + M6 + M4 (chartOrgRadar)
    // ============================================================
    orgtype: {
      _exec: {
        whatYouSee: "Across 1,446 statements, governments produce the largest share of corpus text, followed by intergovernmentals and civil society; industry, academic, professional, and multistakeholder bodies trail. On gendered-harm recognition (n=50), civil society contributes 38% (19/50), government 28% (14/50), intergovernmental 24% (12/50); professional, industry, academic, and labor contribute minimally.",
        whatItMeans: "Stakeholder-type distribution is a measurement artifact as much as a substantive finding. The scanner reads governance text, not operational reality. Platform private ordering — StopNCII.org hash-matching, NCMEC/PhotoDNA pipelines, Apple and Google 2024 nudify-app delistings, internal Trust and Safety enforcement — and data-protection authority actions are invisible here (§7, §8). The gendered-recognition pattern shifted with corpus expansion: civil society's share dropped from 46% to 38% as more government (28%) and intergovernmental (24%) texts entered, but the overall imbalance persists — professional, industry, academic, and labor bodies contribute minimally. No org type emerges as a governance leader; coverage is uneven and thin across all types. Read this tab as a view of what our scanner can measure, not a scoreboard of who is doing well.",
        takeaway: "Stakeholder text coverage is thin and uneven across all types. Civil society leads gendered-harm recognition (38%); industry's operational work is outside the instrument. No winners; read §7, §8, §12.3 before drawing inferences.",
        refs: ["§7", "§8", "§12.3", "Tbl-3"],
        actions: {
          L: "Legislate with legal enforceability in mind; do not treat non-binding policy statements as if they were law; fund survivor services.",
          P: "Publish Trust and Safety transparency data mapped to Category B dimensions so private ordering becomes legible to public scanners.",
          C: "Keep naming women and girls verbatim; civil society carries 38% of gendered recognition and should not be decentered.",
          I: "Disaggregate legal enforceability levels in UN and OECD reporting; stop treating voluntary commitments and binding law as equivalent."
        },
        tensionNote: "Industry's low text count reflects instrument mismatch, not absence of action; civil society's high gendered-recognition share reflects advocacy labor, not institutional power. Both readings are simultaneously true.",
        crossRefs: ["overview", "anchors"]
      },

      chartOrgTier: {
        whatYouSee: "Organization type crossed with statement tier. Government dominates Tier 1 and Tier 2 volumes; intergovernmentals cluster in Tier 2; civil society spans Tiers 2 and 3; industry appears mainly in Tier 3 with thin presence overall.",
        whatItMeans: "The government row is where Category D criminalization lives and where the three intermediary-liability modes sit: reactive notice-and-takedown (§230, DSA Art. 16, TAKE IT DOWN 48h), proactive duty-of-care (NetzDG 24h, Korea 7-day, Australia eSafety 24h), and private ordering. The binding hierarchy — legally_binding, soft_law, advisory, voluntary, aspirational — is conflated by the scanner and must be read off the recommendations matrix, not the bar heights. From a prosecution-needed lens, Category D (mean 1.35) is still thin relative to the severity of image-based sexual abuse against women and girls, though the recall-lift expansion nearly doubled its mean. From a carceral-skepticism lens, criminalization risks racialized over-enforcement and may not track what survivors actually want; many prefer fast takedown and support over prosecution. The industry row reads as low engagement only because the instrument is wrong: StopNCII.org, PhotoDNA, and nudify-app delistings are operational, not textual. This chart is an instrument-mismatch finding, not an indictment of industry.",
        takeaway: "Government row carries binding weight but conflates tiers; industry row understates operational reality; MR-1 is unresolved on whether more criminal law helps or harms survivors.",
        refs: ["MR-1-prosecution", "MR-1-carceral-skepticism", "Tbl-3", "§7"],
        tensionNote: "Minority Report #1 holds both positions as unresolved; the corpus measures text, not enforcement outcomes, and cannot adjudicate."
      },

      chartOrgRadar: {
        whatYouSee: "Top five org types profiled across the 25 dimensions. Scanner P=0.75, macro R=0.28; recall by category — A: 0.643, B: 0.364, C/D/E: 0.000, F: 0.286 (FIG-9). The C, D, and E rows are effectively blind across every org type; no profile is complete, and no type dominates.",
        whatItMeans: "Because FIG-9 recall is zero on Categories C, D, and E, radar shapes on those axes are artifacts of non-detection, not low salience. Category B (Prevention) corpus-wide mean is 1.73 with 85 statements crossing two or more dimensions — more than pre-expansion, but still thin relative to the 1,446-statement corpus. Stable Diffusion, FLUX, CivitAI NSFW fine-tunes, and consumer 'nudify' apps are the causal driver of the 2022–2026 governance wave against women and girls but appear nowhere in governance text (§12.3). Survivor-facing infrastructure is likewise absent from corpus scoring yet is where help actually lives: SWGfL Revenge Porn Helpline, CCRI Image Abuse Helpline, eSafety Commissioner, and StopNCII.org. No org type wins this radar; the honest reading is uneven, thin coverage everywhere, with recall blindness on three of six axes.",
        takeaway: "Radar is shape-blind on C, D, E due to zero recall; the open-weights ecosystem is invisible; survivor helplines are where operational support lives. No winners.",
        refs: ["FIG-9", "§9", "§12.3"],
        contentNote: "This section discusses image-based sexual abuse affecting women and girls; if you need support now, the helplines listed below offer confidential assistance.",
        helplineOfframp: [
          { name: "SWGfL Revenge Porn Helpline", url: "https://revengepornhelpline.org.uk", desc: "UK survivor support, free hash-matching" },
          { name: "CCRI Image Abuse Helpline", url: "https://cybercivilrights.org/ccri-crisis-helpline/", desc: "US 1-844-878-CCRI" },
          { name: "eSafety Commissioner", url: "https://www.esafety.gov.au/", desc: "Australia, 24h takedown authority" },
          { name: "StopNCII.org", url: "https://stopncii.org", desc: "Global hash-matching for adults" }
        ],
        tensionNote: "Radar visualizes text salience, not lived support; the helplines above exist regardless of where the shapes fall."
      }
    },

    // ============================================================
    // ANCHORS (BENCHMARK LEGISLATION) TAB — highest stakes
    // Phase-A: M2 + M7 (_exec, anchorTable);
    //          M7 (dpaAnchorRow, NEW);
    //          M2 + M7 + M9 + M6 (chartAnchorRadar);
    //          M6 + M1 + M5 (chartVictimGap, victim-facing)
    // ============================================================
    anchors: {
      _exec: {
        whatYouSee: "Eleven anchor jurisdictions validated across 25 dimensions. Korea scores highest-within-thinness (STMT-3424/3425, max_score=100, 7-year imprisonment penalty, National Center for Digital Sexual Crime). Criminal-offense headline: 9 of 1,446 statements (0.6%) score high enough to count as meaningfully addressing criminal offenses (score ≥50) — up from 3 pre-expansion, now spanning 7 jurisdictions. Notification-right: ZERO statements clear that threshold; highest is 35 (Korea STMT-3425). Takedown timelines exist in 4 jurisdictions (US 48h, EU 'expeditious', Korea 7d, Australia 24h).",
        whatItMeans: "The anchor set shows the multi-axis gap: corpus-wide category means (out of 100) — Victim Empowerment (C) 0.37, Prosecution (D) 1.35, Rights & Consent (E) 2.80; still thin across all categories, though D and E grew substantially through the recall-lift expansion. Criminal-offense engagement is emerging but rare — 9 of 1,446 statements score ≥50 on df_criminal_offense across Netherlands, UK (CPS), EU (AI Act + Council), Korea, Georgia (SB 78), Germany (§201b StGB), and India (IT Act §66E); Caveat 7 applies: a law on the books does not guarantee enforcement on the ground. Women and girls comprise 80–95% of victims, yet only 3.5% of statements (50/1,446) explicitly recognize gendered harm — a 6:1 asymmetry against deepfake mention. Survivor infrastructure (SWGfL, CCRI, eSafety, StopNCII) operates outside statute and provides what governance text does not. From a prosecution-needed lens, Korea's regime is the strongest-measured deterrent in the corpus (STMT-3424/3425). From a carceral-skepticism lens, criminalization risks racialized over-enforcement and may not reflect what survivors want; CCRI helpline data shows many prefer takedown and reputation recovery to prosecution. A separate DPA-enforcement regime (11 actions, 2022–2026) runs in parallel and is invisible to the criminal-statute scanner — see the dpaAnchorRow block below.",
        takeaway: "No anchor wins. Korea is strongest-within-thinness. Criminal-offense engagement is emerging (9 statements, 7 jurisdictions) but notification-right remains at zero; survivors need layered remedies, not prosecution alone.",
        refs: ["§8", "§14", "MR-1-prosecution", "MR-1-carceral-skepticism", "Caveat-7"],
        tensionNote: "Minority Report #1 holds both positions as unresolved; the corpus measures text, not enforcement outcomes, and cannot adjudicate. The paper adopts a layered approach: criminalization is one pathway, complemented by takedown, civil remedies, support, and dignity grounding (§14 Rule 6).",
        actions: {
          L: "Pair any new criminal offense with a statutory takedown timeline, notification right, and civil remedy — do not ship criminalization alone.",
          P: "Track declination and plea data by defendant race and class to surface over-enforcement; publish annually.",
          C: "Fund SWGfL/CCRI/StopNCII-style services as first-line survivor infrastructure independent of prosecution outcomes.",
          I: "Ground deepfake instruments in CEDAW, Istanbul, Maputo, Belém do Pará — currently zero citations in corpus."
        },
        crossRefs: ["overview", "dimensions", "geographic", "orgtype"],
        contentNote: "This tab discusses image-based sexual abuse and criminal-prosecution debates; survivor support links below.",
        helplineOfframp: [
          { name: "SWGfL Revenge Porn Helpline", url: "https://revengepornhelpline.org.uk", desc: "UK survivor support, free hash-matching" },
          { name: "CCRI Image Abuse Helpline", url: "https://cybercivilrights.org/ccri-crisis-helpline/", desc: "US 1-844-878-CCRI" },
          { name: "eSafety Commissioner", url: "https://www.esafety.gov.au/", desc: "Australia 24h takedown authority" },
          { name: "StopNCII.org", url: "https://stopncii.org", desc: "Global hash-matching for adults" }
        ]
      },

      anchorTable: {
        whatYouSee: "11 anchor jurisdictions (US federal + CA/VA/MN, UK, EU, South Korea, Australia, Belgium, Singapore) validated across 25 dimensions via 22 anchor documents. Korea STMT-3424/3425 max_score=100; all other anchors thinner across most dimensions. The dimension-firing column shows how many of the 25 dimensions register a non-zero score per anchor.",
        whatItMeans: "df_criminal_offense reaches the substantive-engagement threshold in 9 of 1,446 statements (0.6%) — up from 3 pre-expansion — spanning Netherlands, UK (CPS), EU (AI Act + Council), Korea, Georgia, Germany, and India; Caveat 7 (statutory ≠ enforcement) binds. df_notification_right: ZERO statements clear the threshold; highest is 35 (Korea STMT-3425). Substantive takedown timelines exist in 4 jurisdictions (US 48h TAKE IT DOWN Act, EU 'expeditious' DSA Art. 16 + Directive 2024/1385, Korea 7d SVPA, Australia 24h eSafety). Korea's regime is strongest-measured, not strongest-proven; speech-suppression and chilling-effect concerns persist; Caveat 9 (English-bias inverted for KLRI) and Caveat 11 (KLRI hseq instability) bind. Per §14 Rule 6: criminalization is one pathway among several; jurisdictions that pursue it should pair it with takedown rights, civil remedies, support services, and dignity grounding.",
        takeaway: "11 anchors, 25 dimensions, thin almost everywhere. Korea is strongest-within-thinness on criminal-offense; 9 statements now clear the threshold across 7 jurisdictions but notification-right remains zero. Read rows layered — Categories C, D, E together — not column by column.",
        refs: ["Caveat-7", "Caveat-9", "Caveat-11", "§14"]
      },

      dpaAnchorRow: {
        whatYouSee: "A virtual 12th anchor row: 11 EU DPA enforcement actions, 2022–2026, via GDPR Art. 17 (erasure) + Art. 9 (biometric). Named actors: Italian Garante, Dutch AP, French CNIL (€20M Clearview), UK ICO (£7.5M Clearview), Spanish AEPD, Hamburg DPA, Irish DPC, Polish UODO. Non-EU analogues: Korean PIPA, Brazilian ANPD.",
        whatItMeans: "This row captures a functioning enforcement regime the criminal-statute scanner cannot see. Erasure rights under Art. 17 and biometric special-category protections under Art. 9 produce concrete remedies — fines, takedowns, processing halts — without criminal prosecution. Non-EU analogues (Korean PIPA, Brazilian ANPD) operate on similar data-protection logic, so this is not a Euro-only finding. EU under-scoring on Category C is a measurement artifact of the criminal-statute scanner, not a governance gap (§8). For deepfake survivors the DPA pathway can deliver removal and accountability in weeks where criminal process takes years. Readers should not conclude that EU jurisdictions lag on deepfake governance; they are pursuing a parallel regime on a different axis the scanner does not measure.",
        takeaway: "The DPA parallel regime is real, enforceable, and invisible to criminal-statute text scans. Read EU anchor rows alongside this DPA row, not in isolation.",
        refs: ["§8", "Caveat-4", "Caveat-8"]
      },

      chartAnchorRadar: {
        whatYouSee: "Radar of top 5 anchors across active dimensions. Scanner P=0.75, macro R=0.28; recall A: 0.643, B: 0.364, C/D/E: 0.000, F: 0.286 (FIG-9) — the scanner is effectively blind on Categories C, D, E. Korea's hull is the largest; all hulls are thin; no hull is complete.",
        whatItMeans: "df_criminal_offense reaches the substantive-engagement threshold in 9 of 1,446 statements (0.6%); Caveat 7 (statutory ≠ enforcement) binds. Korea's hull is largest because Session 6 KLRI translationese keyword tuning recovered STMT-3424/3425 from a Session 5 score ≈60 to a Session 6 final 100 — not because Korean enforcement is proven superior; Caveat 9 (English-bias inverted for KLRI) binds. Criminalization is textual depth, not measured victim safety. Category C, D, E recall is zero, meaning the radar shape reflects only what jurisdictions discuss in text within dimensions the scanner can see at all. From a prosecution-needed lens the hull sizes suggest under-deployment for serious harm; the carceral-skepticism lens warns that hull size is not survivor benefit. No anchor wins; Korea is strongest-within-thinness.",
        takeaway: "Hull size is textual depth, not victim safety. Korea leads the shape, not the outcome; C/D/E recall is zero so most dimensions the survivor cares about are off-radar.",
        refs: ["FIG-9", "Caveat-7", "Caveat-9", "§8"],
        thinnessWarning: "No anchor 'wins'. The radar shows what jurisdictions discuss in text, not what they enforce in practice. All 11 anchors are thin across most of the 25 dimensions."
      },

      chartVictimGap: {
        whatYouSee: "Heatmap: region × Category C victim-empowerment dimensions. The df_notification_right column is empty across all regions — ZERO statements clear the substantive-engagement threshold; highest is 35 (Korea STMT-3425). Scanner P=0.75, macro R=0.28; recall A: 0.643, B: 0.364, C/D/E: 0.000, F: 0.286 (FIG-9) — the scanner is blind on Category C, so cell emptiness is partly instrument, partly substance.",
        whatItMeans: "Women and girls are 80–95% of deepfake IBSA victims; 22.3% of statements mention deepfakes, yet only 3.5% recognize the harm is gendered (n=50/1,446) — a 6:1 asymmetry. Intersectional axes — race, disability, age, LGBTQ+ status, migration status — are almost entirely absent. Substantive takedown timelines exist in 4 jurisdictions (US 48h TAKE IT DOWN, EU 'expeditious' DSA Art. 16, Korea 7d SVPA, Australia 24h eSafety) — the gap between zero notification-right threshold-crossers and 4 takedown-timeline regimes is itself a finding (§9.2). Zero citations of Langton (objectification), Nussbaum (seven features), MacKinnon (silencing) — the philosophical literature most directly articulating dignity violation is absent from the governance text (§11.2). Survivor infrastructure SWGfL, CCRI, eSafety, and StopNCII already delivers what statute does not.",
        takeaway: "The governance text does not see the survivor. Notification right is zero; gendered harm is 2.2%; intersectional and dignity-theoretic vocabularies are absent. Helplines fill the void that statute should occupy.",
        refs: ["FIG-9", "§9.2", "§11.2", "Caveat-7"],
        contentNote: "This chart describes patterns of image-based sexual abuse against women and girls; content may be distressing. Survivor support links below.",
        helplineOfframp: [
          { name: "SWGfL Revenge Porn Helpline", url: "https://revengepornhelpline.org.uk", desc: "UK survivor support, free hash-matching" },
          { name: "CCRI Image Abuse Helpline", url: "https://cybercivilrights.org/ccri-crisis-helpline/", desc: "US 1-844-878-CCRI" },
          { name: "eSafety Commissioner", url: "https://www.esafety.gov.au/", desc: "Australia 24h takedown authority" },
          { name: "StopNCII.org", url: "https://stopncii.org", desc: "Global hash-matching for adults" }
        ]
      }
    },

    // ============================================================
    // STATEMENT BROWSER TAB — _exec only (no charts)
    // Phase-A: M9 + M12
    // ============================================================
    browser: {
      _exec: {
        whatYouSee: "A sortable, filterable table of all 1,446 matched statements (from 3,008 scanned). Columns: Key, Title, Organization, Type, Region, Year, Tier, MaxScore. Free-text search spans title/organization/key; dropdowns filter Tier, Org Type, Region; any header toggles sort; 50 rows per page; CSV export. This is the raw corpus — no charts, no aggregation, just rows.",
        whatItMeans: "Tier 1 flags explicit deepfake or NCII language; Tier 2 captures contextual synthetic-media, image-manipulation, or consent framing; Tier 3 is adjacent AI ethics with relevant provisions. MaxScore is the single highest of 25 dimension scores (0–100), based on automated keyword matching (repeatable and deterministic) — not a ranking of quality, enforceability, or effect. Read it as detection depth, nothing more. Categories C, D, E recall = 0.0 in the FIG-9 audit. Statements scoring 0 on those categories may still discuss them in language the scanner doesn't see — interpret 0 as 'not detected', not 'not present'. Long statutes may be cut off after 50,000 characters before scanning (Caveat-1), a handful carry length-outlier flags (Caveat-2), and there is no inter-rater reliability statistic behind the scoring (Caveat-11) — reproducibility rests on the open scanner plus FIG-9 + FIG-10. Every row is a lower bound. The corpus-wide multi-axis gap (22.3% mention deepfakes / 3.5% name gendered harm / 0.6% address criminal offenses) is what survives re-scoring; individual row scores are not.",
        takeaway: "Use this browser to surface patterns — filter by region, tier, or org type, then open the actual extracts via the Anchors tab. Don't chase top scores. Read rows as starting points for verification, not verdicts.",
        refs: ["§4", "FIG-9", "Caveat-1", "Caveat-2", "Caveat-11"],
        crossRefs: ["overview", "dimensions", "anchors"]
      }
    }
  }
};
