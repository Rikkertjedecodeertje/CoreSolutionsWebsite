export type LegalLocale = 'en' | 'nl';
export type PolicyKind = 'privacy' | 'terms' | 'cookie';
export type PolicySection = { heading: string; paragraphs: string[]; table?: { headers: string[]; rows: string[][] }; links?: { label: string; href: string }[] };
export type PolicyContent = { title: string; description: string; sections: PolicySection[] };
export const legalContent: Record<LegalLocale, Record<PolicyKind, PolicyContent>> = {
  "en": {
    "privacy": {
      "title": "Privacy Policy",
      "description": "How Core Solutions handles personal data when you visit this website, use the store locator or contact us.",
      "sections": [
        {
          "heading": "1. Who is responsible?",
          "paragraphs": [
            "Rik van Wieren, trading as Core Solutions, is responsible for the processing described in this policy. Core Solutions is a Dutch sole proprietorship registered with the Chamber of Commerce under number 78279070. For privacy questions or requests, email contact@coresolutionsglobal.com.",
            "This policy covers coresolutionsglobal.com, including its Dutch pages, and contact arising from this website. Separate shops, marketplaces and retailers have their own privacy notices. If Core Solutions is the seller on another channel, that channel’s notice and the applicable seller information also explain the processing connected with your order."
          ]
        },
        {
          "heading": "2. What we process and why",
          "paragraphs": [
            "We only use personal data needed for the relevant purpose. The following overview identifies the data, purpose and legal basis under Article 6 GDPR."
          ],
          "table": {
            "headers": [
              "Activity",
              "Personal data",
              "Purpose and legal basis"
            ],
            "rows": [
              [
                "Contact by email",
                "Name, email address, business details you provide, message and attachments; telephone number if provided.",
                "Answering questions and handling business correspondence: legitimate interest in communicating with customers and partners. Where you request a quote or an agreement in your own name: steps before entering a contract or performing that contract."
              ],
              [
                "Website delivery and security",
                "IP address, request time, requested page, browser/device information and technical error data available to the hosting service.",
                "Displaying and protecting the website, troubleshooting and preventing abuse: legitimate interest in a reliable, secure website."
              ],
              [
                "Postcode search",
                "The Dutch postcode entered, search request and IP address received by Nominatim.",
                "Finding nearby retailers at your request: legitimate interest in providing the store locator. A postcode is optional and is not used for advertising."
              ],
              [
                "Optional browser location",
                "Latitude and longitude supplied by your browser after you choose ‘Use my location’ and permit access.",
                "Showing your position and sorting retailers by distance: your consent. You can use the website and postcode search without sharing your browser location."
              ],
              [
                "Agreements and legally required records, where relevant",
                "Contact details, agreed terms and necessary transaction or invoice data.",
                "Performing an agreement and complying with legal, including tax, obligations."
              ]
            ]
          }
        },
        {
          "heading": "3. The store locator and external links",
          "paragraphs": [
            "The map loads tiles from OpenStreetMap. The OpenStreetMap Foundation receives technical request data, including your IP address and requested map tiles. Those tiles can reveal the approximate area displayed on your screen. When you submit a postcode, your browser sends it directly to Nominatim, an OpenStreetMap Foundation service.",
            "Browser coordinates and postcode results are used in the current page’s memory. This website does not save them to a Core Solutions database, cookies or local storage. Refreshing or leaving the page clears that page state. The ‘Clear’ button clears the entered postcode and position. Clearing does not erase requests already received by an external provider. You can also revoke location permission in your browser settings.",
            "A route button opens Google Maps with the selected retailer’s destination. Core Solutions does not add your current coordinates to that route link. Google may obtain location data separately if you allow it. Shop, media and LinkedIn buttons are ordinary links; their services are contacted when you follow them."
          ]
        },
        {
          "heading": "4. Who receives personal data?",
          "paragraphs": [
            "Website hosting and delivery use GitHub Pages. Our business email uses Google Workspace. These providers may receive the data needed to deliver their services. The OpenStreetMap Foundation receives the map and postcode requests described above. Their own privacy notices explain processing for which they are independently responsible.",
            "Data may also be shared with an adviser, service provider or competent authority when necessary for handling an agreement, a legal obligation or a legal claim. We do not sell your personal data. Where a provider processes personal data on our behalf, the GDPR requires appropriate processor terms and safeguards."
          ]
        },
        {
          "heading": "5. Processing outside the EEA",
          "paragraphs": [
            "Some providers operate internationally, so personal data may be processed outside the European Economic Area. Transfers must meet GDPR requirements: for example, an applicable European Commission adequacy decision, or standard contractual clauses together with any necessary additional safeguards. You can contact us for information about the safeguards applicable to your data and how to obtain a copy. Provider notices linked below explain their international processing."
          ]
        },
        {
          "heading": "6. How long data is kept",
          "paragraphs": [
            "Routine enquiries and correspondence are kept while they are being handled and for up to 12 months after completion, then deleted unless the following exceptions apply. Correspondence forming part of an ongoing agreement is kept for the duration of that agreement. Relevant evidence for an actual or reasonably anticipated legal dispute is kept until the claim is resolved or the applicable limitation period has expired; unrelated data is not retained for that purpose.",
            "Tax records that must be retained are kept for the statutory period, generally seven years. Where the One Stop Shop VAT scheme applies, the relevant records are kept for ten years. These periods apply only to records covered by the relevant legal duty, not to all correspondence.",
            "The website itself does not retain postcode or browser-location history beyond the current page state. Hosting, email and map providers may keep their own technical logs according to their service, security and statutory retention rules; their privacy notices explain the criteria. Core Solutions does not set those providers’ independent log-retention periods."
          ]
        },
        {
          "heading": "7. Security and information you provide",
          "paragraphs": [
            "We use appropriate technical and organisational measures for the risks involved, including HTTPS for the website and restricting access to business correspondence to people who need it. No online system is completely risk-free.",
            "Providing a postcode, browser location or contacting us is optional. We need an email address and enough information about your request to reply. Without the relevant data, we may be unable to answer a question or provide the requested location feature. Please do not send medical records, passwords or other sensitive information that is unnecessary for your enquiry.",
            "This website has no customer accounts, checkout, newsletter registration, advertising trackers or analytics scripts. We do not use the data described here for profiling or solely automated decisions with legal or similarly significant effects."
          ]
        },
        {
          "heading": "8. Your privacy rights",
          "paragraphs": [
            "Subject to the GDPR conditions, you may request access, correction, deletion or restriction of your personal data. You may object to processing based on legitimate interests, explaining your particular situation. Where processing is automated and based on consent or a contract, you may also have a right to data portability.",
            "You may withdraw consent at any time. For browser location, use ‘Clear’ and revoke the site’s location permission in your browser. Withdrawal does not affect the lawfulness of processing before withdrawal. Email us to withdraw any other consent or exercise your rights.",
            "Send a request to contact@coresolutionsglobal.com. Requests are normally free. We respond within one month; if a request is complex or there are many requests, the GDPR permits an extension of up to two further months, which we explain within the first month. If identity verification is necessary, we request only proportionate information. Do not send a copy of your ID unsolicited.",
            "You can complain to the Dutch Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl, or to the competent supervisory authority in the EEA country where you live or work. You do not have to contact us first."
          ]
        },
        {
          "heading": "9. Updates and further information",
          "paragraphs": [
            "This version takes effect on 7 October 2026. We update this policy when relevant processing changes and show the revision date on this page. Where the law requires additional information or consent, we provide it before the new processing begins. For cookies and similar technologies, also read our Cookie Policy."
          ],
          "links": [
            {
              "label": "GitHub Privacy Statement",
              "href": "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            },
            {
              "label": "OpenStreetMap Foundation Privacy Policy",
              "href": "https://osmfoundation.org/wiki/Privacy_Policy"
            },
            {
              "label": "Google Workspace privacy",
              "href": "https://workspace.google.com/security/"
            },
            {
              "label": "Autoriteit Persoonsgegevens",
              "href": "https://www.autoriteitpersoonsgegevens.nl/"
            }
          ]
        }
      ]
    },
    "terms": {
      "title": "Terms and Conditions",
      "description": "Terms for using the Core Solutions portfolio website and its product and retailer information.",
      "sections": [
        {
          "heading": "1. Website operator and scope",
          "paragraphs": [
            "This website is operated by Rik van Wieren, trading as Core Solutions, a Dutch sole proprietorship registered with the Chamber of Commerce under number 78279070. Contact: contact@coresolutionsglobal.com.",
            "These terms concern coresolutionsglobal.com, including the Dutch pages, and the information and features offered here. The website presents product brands and directs visitors to sales channels. It does not contain a checkout and does not accept orders or payments. These terms do not replace the sales terms of a shop, marketplace or retailer.",
            "Visiting the website does not by itself create a purchase agreement or a paid service agreement with Core Solutions. Terms for any separate collaboration, wholesale supply or other assignment must be provided and agreed before that agreement is concluded."
          ]
        },
        {
          "heading": "2. Product information and availability",
          "paragraphs": [
            "We aim to provide clear, accurate and current information. Product images, specifications and descriptions explain the portfolio. Availability, prices and specifications may change. Information about a product in development does not constitute a promise that it will launch on a particular date.",
            "Before purchasing, check the actual offer, product information and instructions supplied by the seller. Statements made by Core Solutions retain any legal significance they have under applicable law, including statutory conformity and rules against misleading commercial practices. These terms do not exclude those responsibilities.",
            "Information on this website is general product information, not personalised medical advice. Follow the instructions and warnings supplied with a product. For questions about medication or whether a tablet may be split, consult a pharmacist or healthcare professional."
          ]
        },
        {
          "heading": "3. Purchasing through a sales channel",
          "paragraphs": [
            "Following a link takes you to a separate sales channel, such as iHeelpads.com, Bol, Amazon, Kaufland or a physical retailer. The actual seller is identified in the offer and order confirmation. That seller may be Core Solutions or another business. A marketplace is not necessarily the seller.",
            "The conditions and pre-contractual information provided at that sales channel govern the purchase where they have been validly incorporated. Check the total price, delivery, returns, warranty and seller contact details before ordering. These website terms do not reduce consumer rights, including statutory conformity remedies and any applicable withdrawal right for distance purchases.",
            "For an order question or complaint, contact the seller named on your order. If Core Solutions is the seller, you can also contact us at contact@coresolutionsglobal.com. We do not disclaim our own obligations as a seller or producer."
          ]
        },
        {
          "heading": "4. Store locator",
          "paragraphs": [
            "Retailer listings, opening hours and availability are provided to help you find a sales outlet. Check opening hours and product stock with the retailer before travelling. Distances are straight-line estimates, not route distances.",
            "Postcode search and map display depend on OpenStreetMap services; route links open Google Maps. Results may be incomplete, inaccurate or temporarily unavailable. Sharing browser location is optional. Our Privacy Policy and Cookie Policy explain how these features handle data."
          ]
        },
        {
          "heading": "5. Intellectual property and permitted use",
          "paragraphs": [
            "Website text, designs, photographs, logos and product materials are protected by intellectual property rights belonging to Core Solutions or their respective owners. You may read the website and save or print information for your own lawful use.",
            "Commercial reproduction, modification or distribution of protected materials requires permission from the relevant rights holder, unless a statutory exception permits it. Linking to publicly accessible pages and uses permitted by law, including lawful quotation, remain allowed. Product and platform names do not imply that Core Solutions owns third-party rights or that a third party endorses every statement on this website."
          ]
        },
        {
          "heading": "6. Responsible use and external websites",
          "paragraphs": [
            "Do not use the website to act unlawfully, attempt unauthorised access, introduce harmful code, disrupt availability or infringe others’ rights. You remain entitled to use the site in ways permitted by applicable law.",
            "External websites are managed by their own operators and have their own privacy and contractual terms. We do not control their content or availability. If a link or retailer detail is incorrect, please let us know."
          ]
        },
        {
          "heading": "7. Liability and mandatory rights",
          "paragraphs": [
            "Core Solutions remains responsible to the extent required by applicable law. We do not guarantee uninterrupted access or that all external information is error-free, but these statements do not exclude liability where exclusion is unlawful or unreasonably prejudicial.",
            "Nothing in these terms excludes liability for intent or deliberate recklessness, statutory product liability, or mandatory consumer protections. Your legal rights regarding a product, an agreement or misleading information remain unaffected."
          ]
        },
        {
          "heading": "8. Questions and complaints",
          "paragraphs": [
            "Email contact@coresolutionsglobal.com with the relevant page or product and a description of your question or complaint. We will consider it and respond within a reasonable period. This does not impose a shorter statutory complaint or limitation period.",
            "You may also use the competent consumer authority or court. You are not required to waive legal remedies or accept arbitration under these website terms."
          ]
        },
        {
          "heading": "9. Applicable law, language and updates",
          "paragraphs": [
            "Dutch law applies insofar as a choice of law is legally effective. For consumers, this does not remove the protection of mandatory rules of their country of habitual residence where those rules apply. The competent court is determined by applicable jurisdiction rules; these terms do not impose an exclusive Dutch forum on consumers.",
            "The Dutch and English versions are intended to have the same meaning. Mandatory law and the rules protecting consumers against unclear terms prevail if there is any ambiguity. If a provision is invalid or unenforceable, the remaining provisions continue to apply insofar as the law allows.",
            "This version takes effect on 7 October 2026. Changes apply prospectively and do not alter existing purchase or other agreements merely because this page is updated. You can save or print this page using your browser."
          ]
        }
      ]
    },
    "cookie": {
      "title": "Cookie Policy",
      "description": "Cookies, browser storage and external map services on the Core Solutions website.",
      "sections": [
        {
          "heading": "1. About this policy",
          "paragraphs": [
            "This policy applies to coresolutionsglobal.com, including its Dutch pages. The website is operated by Rik van Wieren, trading as Core Solutions, Chamber of Commerce number 78279070. Questions: contact@coresolutionsglobal.com.",
            "Cookies are small files saved on your device. Similar technologies include local storage and tools that read information from your device. Dutch cookie rules, including Article 11.7a of the Telecommunications Act, and the GDPR govern their use."
          ]
        },
        {
          "heading": "2. What this website uses",
          "paragraphs": [
            "The current website does not deliberately place first-party cookies and does not use analytics, advertising pixels, tracking cookies or persistent browser storage. The language is selected through the page URL, not a stored language cookie. There is no customer login or shopping basket on this site.",
            "Choices in the store locator are kept only in the current page’s memory. This is temporary application state, not a cookie or local-storage profile. It is cleared when you refresh or leave that page."
          ],
          "table": {
            "headers": [
              "Technology",
              "Purpose",
              "Storage / duration"
            ],
            "rows": [
              [
                "First-party analytics or advertising cookies",
                "Not used.",
                "None."
              ],
              [
                "First-party cookies or local/session storage for preferences",
                "Not used.",
                "None; language is determined by the URL."
              ],
              [
                "Temporary store-locator page state",
                "Product/country filters, selected retailer and optional postcode/location result.",
                "Memory on the current page; cleared on refresh or leaving the page."
              ],
              [
                "OpenStreetMap map requests",
                "Displaying map tiles.",
                "Requests to an external service and normal browser caching; no analytics or advertising cookies are integrated by Core Solutions."
              ]
            ]
          }
        },
        {
          "heading": "3. Maps, postcodes and location",
          "paragraphs": [
            "Displaying the retailer map makes requests to OpenStreetMap. The provider receives your IP address and technical request data, including the requested map area. Postcode lookup sends the postcode you submit directly to Nominatim. These requests are data processing even though they are not our tracking cookies.",
            "We only request browser location after you choose ‘Use my location’. Your browser asks for permission where necessary. Your coordinates are used to display your position and sort retailers; map requests can indicate the area you are viewing. This site does not save a location history. Read our Privacy Policy and the OpenStreetMap Foundation policy for details.",
            "You can clear the position with ‘Clear’ and revoke location permission through your browser’s site settings. You can use the website without granting location permission."
          ]
        },
        {
          "heading": "4. External links and hosting",
          "paragraphs": [
            "The LinkedIn icon, media mentions, shops and route buttons are links, not embedded social widgets or video players. When you open an external website, that operator’s cookies and privacy rules apply. Its services may place cookies on their own domain, subject to applicable law.",
            "GitHub Pages delivers the website and processes technical requests. Technical logs and normal browser caching are not the same as advertising cookies. The hosting provider’s own privacy notice explains its processing. Cookies that a provider uses on its own website are not automatically cookies placed by this Core Solutions website."
          ],
          "links": [
            {
              "label": "GitHub Privacy Statement",
              "href": "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            },
            {
              "label": "OpenStreetMap Foundation Privacy Policy",
              "href": "https://osmfoundation.org/wiki/Privacy_Policy"
            }
          ]
        },
        {
          "heading": "5. Consent and your controls",
          "paragraphs": [
            "Because this website currently has no optional cookie-based analytics or advertising, there is no ‘accept all cookies’ banner. Optional tracking will not be enabled merely because you keep browsing or read this policy.",
            "If optional cookies or comparable tracking are introduced, we will describe their provider, purpose and duration and ask for prior consent where required. Refusing and withdrawing consent must be as easy as giving it. Necessary functionality and analytics with no or minimal privacy impact can fall within a statutory exemption; that is assessed before use.",
            "You can inspect, delete or block cookies and website data in your browser’s privacy settings. Browser settings also control location permissions. Blocking technical storage or cache may affect how websites work. Deleting browser data does not remove information already received by a provider."
          ]
        },
        {
          "heading": "6. Updates and contact",
          "paragraphs": [
            "This version takes effect on 7 October 2026. We update the policy when the website’s technologies change. For personal-data purposes, legal bases, retention and your GDPR rights, read our Privacy Policy. Contact contact@coresolutionsglobal.com with questions."
          ]
        }
      ]
    }
  },
  "nl": {
    "privacy": {
      "title": "Privacybeleid",
      "description": "Hoe Core Solutions persoonsgegevens verwerkt wanneer je deze website bezoekt, de winkelzoeker gebruikt of contact opneemt.",
      "sections": [
        {
          "heading": "1. Wie is verantwoordelijk?",
          "paragraphs": [
            "Rik van Wieren, handelend onder de naam Core Solutions, is verantwoordelijk voor de verwerkingen in dit beleid. Core Solutions is een Nederlandse eenmanszaak, ingeschreven bij de Kamer van Koophandel onder nummer 78279070. Voor privacyvragen of verzoeken kun je mailen naar contact@coresolutionsglobal.com.",
            "Dit beleid geldt voor coresolutionsglobal.com, inclusief de Nederlandse pagina’s, en contact dat uit deze website voortkomt. Andere webshops, marketplaces en winkels hebben eigen privacyverklaringen. Als Core Solutions op een ander kanaal de verkoper is, geven de privacyverklaring van dat kanaal en de toepasselijke verkopersinformatie ook uitleg over de verwerking rond je bestelling."
          ]
        },
        {
          "heading": "2. Welke gegevens verwerken we en waarom?",
          "paragraphs": [
            "We gebruiken alleen persoonsgegevens die nodig zijn voor het betreffende doel. Hieronder staan de gegevens, doeleinden en grondslagen uit artikel 6 AVG."
          ],
          "table": {
            "headers": [
              "Activiteit",
              "Persoonsgegevens",
              "Doel en grondslag"
            ],
            "rows": [
              [
                "Contact per e-mail",
                "Naam, e-mailadres, opgegeven bedrijfsgegevens, bericht en bijlagen; telefoonnummer als je dat verstrekt.",
                "Vragen beantwoorden en zakelijke correspondentie afhandelen: gerechtvaardigd belang om met klanten en partners te communiceren. Vraag je op eigen naam een offerte of overeenkomst aan, dan kan de grondslag voorbereiding of uitvoering van die overeenkomst zijn."
              ],
              [
                "Website aanbieden en beveiligen",
                "IP-adres, tijdstip, opgevraagde pagina, browser-/apparaatinformatie en technische foutgegevens die bij de hostingdienst beschikbaar zijn.",
                "Website tonen en beschermen, storingen oplossen en misbruik voorkomen: gerechtvaardigd belang bij een betrouwbare en veilige website."
              ],
              [
                "Zoeken op postcode",
                "De ingevoerde Nederlandse postcode, zoekopdracht en het IP-adres dat Nominatim ontvangt.",
                "Op jouw verzoek winkels in de buurt vinden: gerechtvaardigd belang bij het aanbieden van de winkelzoeker. Een postcode invoeren is vrijwillig en wordt niet voor reclame gebruikt."
              ],
              [
                "Optionele browserlocatie",
                "Breedte- en lengtegraad die je browser doorgeeft nadat je ‘Gebruik mijn locatie’ kiest en toegang toestaat.",
                "Je positie tonen en winkels op afstand sorteren: jouw toestemming. Je kunt de website en postcodezoeker gebruiken zonder je browserlocatie te delen."
              ],
              [
                "Overeenkomsten en wettelijk verplichte administratie, indien van toepassing",
                "Contactgegevens, gemaakte afspraken en noodzakelijke transactie- of factuurgegevens.",
                "Een overeenkomst uitvoeren en voldoen aan wettelijke verplichtingen, waaronder fiscale verplichtingen."
              ]
            ]
          }
        },
        {
          "heading": "3. Winkelzoeker en externe links",
          "paragraphs": [
            "De kaart laadt kaarttegels van OpenStreetMap. De OpenStreetMap Foundation ontvangt technische aanvraaggegevens, waaronder je IP-adres en de opgevraagde kaarttegels. Daaruit kan de globale omgeving blijken die je bekijkt. Als je een postcode opzoekt, stuurt je browser deze rechtstreeks naar Nominatim, een dienst van de OpenStreetMap Foundation.",
            "Browsercoördinaten en postcoderesultaten worden gebruikt in het geheugen van de huidige pagina. Deze website slaat ze niet op in een Core Solutions-database, cookies of lokale opslag. Vernieuwen of verlaten van de pagina wist deze paginastaat. Met ‘Wissen’ verwijder je de ingevoerde postcode en positie. Daarmee worden eerdere aanvragen bij een externe aanbieder niet verwijderd. Je kunt locatietoestemming ook intrekken via je browserinstellingen.",
            "Een routeknop opent Google Maps met de bestemming van de geselecteerde winkel. Core Solutions voegt je huidige coördinaten niet toe aan die routelink. Google kan afzonderlijk locatiegegevens ontvangen als je dat toestaat. Knoppen naar webshops, media en LinkedIn zijn gewone links; die diensten worden benaderd wanneer je de link volgt."
          ]
        },
        {
          "heading": "4. Wie ontvangt persoonsgegevens?",
          "paragraphs": [
            "De website wordt gehost en geleverd via GitHub Pages. Voor zakelijke e-mail gebruiken we Google Workspace. Deze aanbieders kunnen gegevens ontvangen die nodig zijn om hun diensten te leveren. De OpenStreetMap Foundation ontvangt de hierboven beschreven kaart- en postcodeaanvragen. Hun eigen privacyverklaringen beschrijven verwerkingen waarvoor zij zelf verantwoordelijk zijn.",
            "Gegevens kunnen daarnaast worden gedeeld met een adviseur, dienstverlener of bevoegde instantie als dit noodzakelijk is voor een overeenkomst, wettelijke verplichting of juridische aanspraak. We verkopen je persoonsgegevens niet. Wanneer een aanbieder persoonsgegevens namens ons verwerkt, vereist de AVG passende verwerkersafspraken en waarborgen."
          ]
        },
        {
          "heading": "5. Verwerking buiten de EER",
          "paragraphs": [
            "Sommige dienstverleners werken internationaal, waardoor gegevens buiten de Europese Economische Ruimte kunnen worden verwerkt. Doorgiften moeten voldoen aan de AVG, bijvoorbeeld op basis van een toepasselijk adequaatheidsbesluit van de Europese Commissie of standaardcontractbepalingen met eventuele noodzakelijke aanvullende waarborgen. Je kunt ons vragen welke waarborgen voor jouw gegevens gelden en hoe je daarvan een kopie kunt krijgen. De hieronder gelinkte verklaringen beschrijven de internationale verwerking door de aanbieders."
          ]
        },
        {
          "heading": "6. Hoe lang bewaren we gegevens?",
          "paragraphs": [
            "Gewone vragen en correspondentie bewaren we tijdens de behandeling en maximaal 12 maanden na afronding. Daarna verwijderen we deze, tenzij een van de volgende uitzonderingen geldt. Correspondentie die onderdeel is van een lopende overeenkomst bewaren we gedurende die overeenkomst. Relevant bewijsmateriaal voor een daadwerkelijk of redelijkerwijs te verwachten juridisch geschil bewaren we totdat de aanspraak is afgewikkeld of de toepasselijke verjaringstermijn is verstreken; niet-relevante gegevens bewaren we hiervoor niet.",
            "Fiscaal verplichte administratie bewaren we gedurende de wettelijke termijn, doorgaans zeven jaar. Voor administratie waarop de One Stop Shop-btw-regeling van toepassing is, geldt tien jaar. Deze termijnen gelden alleen voor de gegevens waarop de betreffende bewaarplicht rust, niet voor alle correspondentie.",
            "De website bewaart geen postcode- of browserlocatiegeschiedenis buiten de huidige paginastaat. Hosting-, e-mail- en kaartaanbieders kunnen eigen technische logbestanden bewaren volgens hun dienstverlenings-, beveiligings- en wettelijke bewaaregels. Hun privacyverklaringen beschrijven de criteria. Core Solutions bepaalt niet de zelfstandige bewaartermijnen van die aanbieders."
          ]
        },
        {
          "heading": "7. Beveiliging en wat je zelf verstrekt",
          "paragraphs": [
            "We nemen technische en organisatorische maatregelen die passen bij de risico’s, waaronder HTTPS voor de website en beperking van toegang tot zakelijke correspondentie tot personen die deze nodig hebben. Geen enkel online systeem is volledig zonder risico.",
            "Een postcode invoeren, je browserlocatie delen of contact opnemen is vrijwillig. Om je te antwoorden hebben we een e-mailadres en voldoende informatie over je verzoek nodig. Zonder relevante gegevens kunnen we een vraag of locatieverzoek mogelijk niet afhandelen. Stuur geen medische dossiers, wachtwoorden of andere gevoelige informatie die niet nodig is voor je vraag.",
            "Deze website heeft geen klantaccounts, betaalpagina, nieuwsbriefinschrijving, advertentietrackers of analyticsscripts. We gebruiken de hier beschreven gegevens niet voor profilering of uitsluitend geautomatiseerde besluiten met rechtsgevolgen of vergelijkbare aanzienlijke gevolgen."
          ]
        },
        {
          "heading": "8. Jouw privacyrechten",
          "paragraphs": [
            "Onder de voorwaarden van de AVG kun je inzage, correctie, verwijdering of beperking van je persoonsgegevens vragen. Je kunt vanwege jouw specifieke situatie bezwaar maken tegen verwerking op basis van een gerechtvaardigd belang. Bij geautomatiseerde verwerking op basis van toestemming of een overeenkomst kun je ook recht hebben op overdraagbaarheid van gegevens.",
            "Je kunt toestemming altijd intrekken. Voor browserlocatie gebruik je ‘Wissen’ en trek je de locatietoestemming voor deze site in via je browser. Intrekken maakt eerdere rechtmatige verwerking niet onrechtmatig. Mail ons voor het intrekken van andere toestemming of het uitoefenen van je rechten.",
            "Stuur je verzoek naar contact@coresolutionsglobal.com. Verzoeken zijn normaal gesproken gratis. We reageren binnen één maand. Bij complexe of meerdere verzoeken mag deze termijn volgens de AVG met maximaal twee maanden worden verlengd; dat lichten we binnen de eerste maand toe. Als controle van je identiteit nodig is, vragen we alleen proportionele informatie. Stuur niet ongevraagd een kopie van je identiteitsbewijs.",
            "Je kunt een klacht indienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl, of bij de bevoegde toezichthouder in het EER-land waar je woont of werkt. Je hoeft niet eerst contact met ons op te nemen."
          ]
        },
        {
          "heading": "9. Wijzigingen en meer informatie",
          "paragraphs": [
            "Deze versie geldt vanaf 7 oktober 2026. We werken dit beleid bij als relevante verwerkingen veranderen en tonen de wijzigingsdatum op deze pagina. Waar extra informatie of toestemming wettelijk nodig is, regelen we dit voordat de nieuwe verwerking begint. Lees voor cookies en vergelijkbare technieken ook ons Cookiebeleid."
          ],
          "links": [
            {
              "label": "GitHub Privacy Statement",
              "href": "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            },
            {
              "label": "OpenStreetMap Foundation Privacy Policy",
              "href": "https://osmfoundation.org/wiki/Privacy_Policy"
            },
            {
              "label": "Google Workspace privacy",
              "href": "https://workspace.google.com/security/"
            },
            {
              "label": "Autoriteit Persoonsgegevens",
              "href": "https://www.autoriteitpersoonsgegevens.nl/"
            }
          ]
        }
      ]
    },
    "terms": {
      "title": "Algemene voorwaarden",
      "description": "Voorwaarden voor het gebruik van de Core Solutions-portfoliosite en de product- en winkelinformatie.",
      "sections": [
        {
          "heading": "1. Websitebeheerder en toepassingsgebied",
          "paragraphs": [
            "Deze website wordt beheerd door Rik van Wieren, handelend onder de naam Core Solutions, een Nederlandse eenmanszaak ingeschreven bij de Kamer van Koophandel onder nummer 78279070. Contact: contact@coresolutionsglobal.com.",
            "Deze voorwaarden gaan over coresolutionsglobal.com, inclusief de Nederlandse pagina’s, en de hier aangeboden informatie en functies. De website presenteert productmerken en verwijst naar verkoopkanalen. De website heeft geen betaalpagina en neemt geen bestellingen of betalingen aan. Deze voorwaarden vervangen niet de verkoopvoorwaarden van een webshop, marketplace of winkel.",
            "Alleen het bezoeken van deze website brengt geen koopovereenkomst of betaalde dienstverlening met Core Solutions tot stand. Voor een afzonderlijke samenwerking, groothandelslevering of andere opdracht moeten de voorwaarden vooraf worden verstrekt en overeengekomen."
          ]
        },
        {
          "heading": "2. Productinformatie en beschikbaarheid",
          "paragraphs": [
            "We streven naar duidelijke, juiste en actuele informatie. Productafbeeldingen, specificaties en beschrijvingen geven uitleg over het portfolio. Beschikbaarheid, prijzen en specificaties kunnen veranderen. Informatie over een product in ontwikkeling is geen toezegging dat het op een bepaalde datum wordt gelanceerd.",
            "Controleer vóór aankoop het daadwerkelijke aanbod, de productinformatie en de instructies van de verkoper. Uitlatingen van Core Solutions behouden de betekenis die zij volgens het toepasselijke recht hebben, waaronder de regels over wettelijke conformiteit en misleidende handelspraktijken. Deze voorwaarden sluiten die verantwoordelijkheid niet uit.",
            "De website bevat algemene productinformatie en geen persoonlijk medisch advies. Volg de meegeleverde instructies en waarschuwingen. Overleg met een apotheker of zorgverlener bij vragen over medicatie of over de geschiktheid van een tablet om te worden gesplitst."
          ]
        },
        {
          "heading": "3. Kopen via een verkoopkanaal",
          "paragraphs": [
            "Een verkooplink brengt je naar een afzonderlijk kanaal, bijvoorbeeld iHeelpads.com, Bol, Amazon, Kaufland of een fysieke winkel. De daadwerkelijke verkoper staat vermeld in het aanbod en de orderbevestiging. Dat kan Core Solutions of een ander bedrijf zijn. Een marketplace is niet automatisch de verkoper.",
            "De voorwaarden en informatie die dat verkoopkanaal vóór aankoop verstrekt, gelden voor de koop voor zover zij rechtsgeldig van toepassing zijn. Controleer vooraf de totaalprijs, levering, retouren, garantie en contactgegevens van de verkoper. Deze websitevoorwaarden beperken geen consumentenrechten, zoals wettelijke conformiteitsrechten en een toepasselijk herroepingsrecht bij koop op afstand.",
            "Neem voor een vraag of klacht over een bestelling contact op met de verkoper op je order. Is Core Solutions de verkoper, dan kun je ons ook bereiken via contact@coresolutionsglobal.com. Onze eigen wettelijke verplichtingen als verkoper of producent blijven gelden."
          ]
        },
        {
          "heading": "4. Winkelzoeker",
          "paragraphs": [
            "Winkelgegevens, openingstijden en beschikbaarheid helpen je een verkooppunt te vinden. Controleer openingstijden en voorraad bij de winkel voordat je op pad gaat. Afstanden zijn hemelsbrede schattingen en geen routeafstanden.",
            "Postcodezoeken en de kaart zijn afhankelijk van OpenStreetMap-diensten; routelinks openen Google Maps. Resultaten kunnen onvolledig, onjuist of tijdelijk niet beschikbaar zijn. Het delen van je browserlocatie is vrijwillig. Ons Privacybeleid en Cookiebeleid beschrijven de gegevensverwerking bij deze functies."
          ]
        },
        {
          "heading": "5. Intellectuele eigendom en toegestaan gebruik",
          "paragraphs": [
            "Teksten, ontwerpen, foto’s, logo’s en productmateriaal op de website zijn beschermd door intellectuele-eigendomsrechten van Core Solutions of de betreffende rechthebbenden. Je mag de website bekijken en informatie voor eigen rechtmatig gebruik opslaan of afdrukken.",
            "Commerciële reproductie, aanpassing of verspreiding van beschermd materiaal vereist toestemming van de rechthebbende, tenzij een wettelijke uitzondering dit toestaat. Links naar openbaar toegankelijke pagina’s en wettelijk toegestaan gebruik, waaronder rechtmatig citeren, blijven toegestaan. Product- en platformnamen betekenen niet dat Core Solutions rechten van derden bezit of dat derden alle informatie op deze website onderschrijven."
          ]
        },
        {
          "heading": "6. Zorgvuldig gebruik en externe websites",
          "paragraphs": [
            "Gebruik de website niet voor onrechtmatige handelingen, onbevoegde toegang, schadelijke code, verstoring van de bereikbaarheid of inbreuk op rechten van anderen. Gebruik dat de wet toestaat blijft mogelijk.",
            "Externe websites worden door hun eigen beheerders aangeboden en hebben eigen privacyregels en voorwaarden. We bepalen hun inhoud en beschikbaarheid niet. Laat het ons weten als een link of winkelgegeven onjuist is."
          ]
        },
        {
          "heading": "7. Aansprakelijkheid en dwingende rechten",
          "paragraphs": [
            "Core Solutions blijft verantwoordelijk voor zover het toepasselijke recht dat bepaalt. We garanderen geen ononderbroken bereikbaarheid of foutloosheid van alle externe informatie. Deze opmerkingen sluiten geen aansprakelijkheid uit wanneer dat wettelijk niet mag of onredelijk bezwarend is.",
            "Deze voorwaarden sluiten geen aansprakelijkheid uit voor opzet of bewuste roekeloosheid, wettelijke productaansprakelijkheid of dwingende consumentenbescherming. Je wettelijke rechten rond een product, overeenkomst of misleidende informatie blijven bestaan."
          ]
        },
        {
          "heading": "8. Vragen en klachten",
          "paragraphs": [
            "Mail contact@coresolutionsglobal.com met de betreffende pagina of het product en een toelichting op je vraag of klacht. We beoordelen deze en antwoorden binnen een redelijke termijn. Hiermee wordt geen wettelijke klacht- of verjaringstermijn verkort.",
            "Je kunt ook terecht bij de bevoegde consumentenautoriteit of rechter. Deze websitevoorwaarden verplichten je niet om rechtsmiddelen prijs te geven of arbitrage te accepteren."
          ]
        },
        {
          "heading": "9. Toepasselijk recht, taal en wijzigingen",
          "paragraphs": [
            "Nederlands recht is van toepassing voor zover een rechtskeuze rechtsgeldig is. Voor consumenten vervalt daarmee niet de bescherming van dwingende regels van het land waar zij gewoonlijk wonen, wanneer die regels van toepassing zijn. Welke rechter bevoegd is, volgt uit de toepasselijke bevoegdheidsregels. Deze voorwaarden leggen consumenten geen exclusieve Nederlandse rechter op.",
            "De Nederlandse en Engelse versie zijn bedoeld om dezelfde betekenis te hebben. Bij onduidelijkheid gaan dwingend recht en de regels die consumenten beschermen tegen onduidelijke voorwaarden voor. Als een bepaling ongeldig of niet afdwingbaar is, blijven de overige bepalingen gelden voor zover de wet dat toestaat.",
            "Deze versie geldt vanaf 7 oktober 2026. Wijzigingen gelden voor de toekomst en wijzigen bestaande koop- of andere overeenkomsten niet alleen doordat deze pagina wordt bijgewerkt. Je kunt de pagina via je browser opslaan of afdrukken."
          ]
        }
      ]
    },
    "cookie": {
      "title": "Cookiebeleid",
      "description": "Cookies, browseropslag en externe kaartdiensten op de Core Solutions-website.",
      "sections": [
        {
          "heading": "1. Over dit beleid",
          "paragraphs": [
            "Dit beleid geldt voor coresolutionsglobal.com, inclusief de Nederlandse pagina’s. De website wordt beheerd door Rik van Wieren, handelend onder de naam Core Solutions, KvK-nummer 78279070. Vragen: contact@coresolutionsglobal.com.",
            "Cookies zijn kleine bestanden die op je apparaat worden opgeslagen. Vergelijkbare technieken zijn bijvoorbeeld lokale opslag en technieken die informatie op je apparaat uitlezen. De Nederlandse cookieregels, waaronder artikel 11.7a Telecommunicatiewet, en de AVG bepalen hoe deze technieken mogen worden gebruikt."
          ]
        },
        {
          "heading": "2. Wat gebruikt deze website?",
          "paragraphs": [
            "De huidige website plaatst zelf geen first-party cookies en gebruikt geen analytics, advertentiepixels, trackingcookies of blijvende browseropslag. De taal wordt gekozen via het pagina-adres, niet via een opgeslagen taalcookie. Er is geen klantlogin of winkelmandje op deze site.",
            "Keuzes in de winkelzoeker staan alleen in het geheugen van de huidige pagina. Dit is tijdelijke paginastaat en geen cookie of profiel in lokale opslag. Deze staat wordt gewist als je de pagina vernieuwt of verlaat."
          ],
          "table": {
            "headers": [
              "Techniek",
              "Doel",
              "Opslag / duur"
            ],
            "rows": [
              [
                "Eigen analytics- of advertentiecookies",
                "Niet gebruikt.",
                "Geen."
              ],
              [
                "Eigen cookies of local/session storage voor voorkeuren",
                "Niet gebruikt.",
                "Geen; de taal volgt uit het pagina-adres."
              ],
              [
                "Tijdelijke paginastaat van de winkelzoeker",
                "Merk-/landfilters, gekozen winkel en optioneel postcode-/locatieresultaat.",
                "Geheugen van de huidige pagina; gewist bij vernieuwen of verlaten."
              ],
              [
                "OpenStreetMap-kaartaanvragen",
                "Kaarttegels tonen.",
                "Aanvragen bij een externe dienst en normale browsercache; Core Solutions integreert hiervoor geen analytics- of advertentiecookies."
              ]
            ]
          }
        },
        {
          "heading": "3. Kaart, postcode en locatie",
          "paragraphs": [
            "Bij het tonen van de winkelkaart worden aanvragen naar OpenStreetMap gestuurd. De aanbieder ontvangt je IP-adres en technische aanvraaggegevens, waaronder de opgevraagde kaartomgeving. Postcodezoeken stuurt de postcode die je invoert rechtstreeks naar Nominatim. Ook zonder eigen trackingcookies is dit gegevensverwerking.",
            "We vragen alleen om browserlocatie nadat je ‘Gebruik mijn locatie’ kiest. Je browser vraagt waar nodig om toestemming. Je coördinaten worden gebruikt om je positie te tonen en winkels te sorteren; kaartaanvragen kunnen laten zien welke omgeving je bekijkt. Deze site slaat geen locatiegeschiedenis op. Lees ons Privacybeleid en het beleid van de OpenStreetMap Foundation voor meer informatie.",
            "Met ‘Wissen’ verwijder je de positie. Je kunt locatietoestemming intrekken via de website-instellingen van je browser. De website blijft bruikbaar zonder locatietoestemming."
          ]
        },
        {
          "heading": "4. Externe links en hosting",
          "paragraphs": [
            "Het LinkedIn-icoon, mediavermeldingen, webshops en routeknoppen zijn links en geen ingesloten sociale widgets of videospelers. Als je een externe website opent, gelden de cookies en privacyregels van die aanbieder. Deze kan op het eigen domein cookies plaatsen, met inachtneming van het toepasselijke recht.",
            "GitHub Pages levert de website en verwerkt technische aanvragen. Technische logbestanden en normale browsercache zijn iets anders dan advertentiecookies. De privacyverklaring van de hostingaanbieder geeft uitleg over zijn verwerking. Cookies die een aanbieder op de eigen website gebruikt, worden niet automatisch op deze Core Solutions-website geplaatst."
          ],
          "links": [
            {
              "label": "GitHub Privacy Statement",
              "href": "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            },
            {
              "label": "OpenStreetMap Foundation Privacy Policy",
              "href": "https://osmfoundation.org/wiki/Privacy_Policy"
            }
          ]
        },
        {
          "heading": "5. Toestemming en jouw instellingen",
          "paragraphs": [
            "Omdat deze website nu geen optionele cookiegebaseerde analytics of advertenties gebruikt, is er geen cookiebanner met ‘alles accepteren’. Optionele tracking wordt niet ingeschakeld alleen omdat je verder surft of dit beleid leest.",
            "Als we later optionele cookies of vergelijkbare tracking invoeren, vermelden we de aanbieder, het doel en de duur en vragen we vooraf toestemming waar dat verplicht is. Weigeren en intrekken moeten even eenvoudig zijn als toestemming geven. Noodzakelijke functionaliteit en analytics met geen of geringe privacygevolgen kunnen onder een wettelijke uitzondering vallen; dit wordt vóór gebruik beoordeeld.",
            "Je kunt cookies en websitegegevens bekijken, verwijderen of blokkeren via de privacyinstellingen van je browser. Daar kun je ook locatietoestemming beheren. Het blokkeren van technische opslag of cache kan de werking van websites beïnvloeden. Browsergegevens verwijderen wist geen gegevens die een aanbieder al heeft ontvangen."
          ]
        },
        {
          "heading": "6. Wijzigingen en contact",
          "paragraphs": [
            "Deze versie geldt vanaf 7 oktober 2026. We werken dit beleid bij als de gebruikte technieken veranderen. Lees ons Privacybeleid voor de verwerkingsdoelen, grondslagen, bewaartermijnen en je AVG-rechten. Mail contact@coresolutionsglobal.com voor vragen."
          ]
        }
      ]
    }
  }
};
