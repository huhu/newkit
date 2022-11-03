const shortcuts = [
    [
        "ar.new",
        "Aircards",
        "Easily create and deploy WebAR activation codes to use on your next augmented reality project."
    ],
    [
        "io.new",
        "Bit.io",
        "Upload data to your Bit.io cloud database."
    ],
    [
        "query.new",
        "bit.io",
        "Easily query bit.io data repositories."
    ],
    [
        "pack.new",
        "Coda",
        "Customize your Coda docs by making your own Pack."
    ],
    [
        "pen.new",
        "CodePen",
        "Prototype your frontend code in CodePen's online development sandbox."
    ],
    [
        "vue.new",
        "CodeSandbox",
        "Create a new vue.js project online with CodeSandbox."
    ],
    [
        "ts.new",
        "CodeSandbox",
        "Create a new Typescript project online with CodeSandbox."
    ],
    [
        "js.new",
        "CodeSandbox",
        "Create a new Javascript project online with CodeSandbox."
    ],
    [
        "react.new",
        "CodeSandbox",
        "Create a new React project online with CodeSandbox."
    ],
    [
        "ng.new",
        "CodeSandbox",
        "Create a new Angular project online CodeSandbox."
    ],
    [
        "csb.new",
        "CodeSandbox",
        "Create a new project online with CodeSandbox."
    ],
    [
        "svelte.new",
        "CodeSandbox",
        "Create a new Svelte project using CodeSandbox."
    ],
    [
        "nodejs.new",
        "Codesandbox.io",
        "Open up a sandbox for your next development project with Node.js."
    ],
    [
        "snippet.new",
        "Codespace",
        "Create a new snippet on Codespace."
    ],
    [
        "kafka.new",
        "Confluent cluster",
        "Design the optimal Confluence cluster for your Apache Kafka deployment."
    ],
    [
        "datacatalog.new",
        "Data World",
        "Create a new Data Catalog file."
    ],
    [
        "cassandra.new",
        "DataStax Astra",
        "Set up your Cassandra database on the cloud with DataStax Astra."
    ],
    [
        "db.new",
        "DataStax Astra",
        "Set up your Cassandra database on the cloud with DataStax Astra."
    ],
    [
        "graphql.new",
        "DataStax Astra",
        "Set up your Cassandra database on the cloud with DataStax Astra."
    ],
    [
        "keyspace.new",
        "DataStax Astra",
        "Set up your Cassandra database on the cloud with DataStax Astra."
    ],
    [
        "rest.new",
        "DataStax Astra",
        "Set up your Cassandra database on the cloud with DataStax Astra."
    ],
    [
        "webapp.new",
        "Dynaboard",
        "Build a new webapp using Dynaboard."
    ],
    [
        "editorx.new",
        "Editor X",
        "Build your website using Editor X's online tool."
    ],
    [
        "age.new",
        "Flatpack",
        "Create a website using Flatpack's HTML builder."
    ],
    [
        "flutter.new",
        "Flutter",
        "Prototype your app using Flutter's online editor."
    ],
    [
        "auth.new",
        "Frontegg",
        "Design a login page for your SaaS application."
    ],
    [
        "gist.new",
        "GitHub",
        "Open new GitHub gists."
    ],
    [
        "github.new",
        "GitHub",
        "Open new GitHub repositories."
    ],
    [
        "repo.new",
        "GitHub",
        "Open new GitHub repositories."
    ],
    [
        "streamlit.new",
        "GitHub",
        "Turn your data scripts into shareable web apps within minutes on GitHub."
    ],
    [
        "glitch.new",
        "Glitch",
        "Code full-stack apps in your browser and collaborate live."
    ],
    [
        "model.new",
        "Google",
        "Train custom machine learning models with minimal experience and effort using Google's ML tools."
    ],
    [
        "script.new",
        "Google AppScript",
        "Create and share new editor functions using Google App Script."
    ],
    [
        "issue.new",
        "Instantish",
        "Create a new ticket issue and quickly share it."
    ],
    [
        "ide.new",
        "InterviewBit",
        "Prepare for coding interview questions with InterviewBit."
    ],
    [
        "ionic.new",
        "Ionic",
        "Building high quality, cross-platform native and web app experiences with Ionic."
    ],
    [
        "apps.new",
        "Kodular",
        "Start building an app using Kodular's drag and drop development suite."
    ],
    [
        "makerpad.new",
        "Makerpad",
        "Share your workflows and help users build software without coding."
    ],
    [
        "nocode.new",
        "Makerpad",
        "Share your workflows and help users build software without coding."
    ],
    [
        "mathworks.new",
        "MathWorks",
        "Use MATLAB and Simulink through your web browser."
    ],
    [
        "matlab.new",
        "MathWorks",
        "Use MATLAB and Simulink through your web browser."
    ],
    [
        "simulink.new",
        "MathWorks",
        "Use MATLAB and Simulink through your web browser."
    ],
    [
        "dotnet.new",
        "Microsoft",
        "Test a .NET application in Microsoft's Try .NET environment."
    ],
    [
        "env.new",
        "Microsoft Visual Studio",
        "Create a new Visual Studio codespace for your project."
    ],
    [
        "vso.new",
        "Microsoft Visual Studio",
        "Create a new Visual Studio codespace for your project."
    ],
    [
        "vsonline.new",
        "Microsoft Visual Studio",
        "Create a new Visual Studio codespace for your project."
    ],
    [
        "wireframe.new",
        "Miro",
        "Build wireframes for your project using Miro."
    ],
    [
        "pwa.new",
        "Pwabbit",
        "Code a new website using Pwabbit's simple editor."
    ],
    [
        "dev.new",
        "Railway",
        "Create a new Railway deployment in the cloud."
    ],
    [
        "repl.new",
        "REPL",
        "Create and complie a bash script with REPL."
    ],
    [
        "api.new",
        "RunKit",
        "Prototype and launch your APIs using RunKit."
    ],
    [
        "playground.new",
        "RunKit",
        "Prototype and launch your APIs using RunKit."
    ],
    [
        "folder.new",
        "Runkit",
        "Create a new notebook for your API on RunKit."
    ],
    [
        "css.new",
        "Scrimba",
        "Create a new HTML/CSS/JS page in Scrimba."
    ],
    [
        "html.new",
        "Scrimba",
        "Create a new HTML/CSS/JS page in Scrimba."
    ],
    [
        "scrimba.new",
        "Scrimba",
        "Create a new HTML/CSS/JS page in Scrimba."
    ],
    [
        "typescript.new",
        "Scrimba",
        "Create an HTML and Typescript page with Scrimba."
    ],
    [
        "sql.new",
        "SeekWell",
        "Write SQL queries for your data in other applications."
    ],
    [
        "jamstack.new",
        "Stackbit",
        "Create a new Jamstack site."
    ],
    [
        "next.new",
        "StackBlitz",
        "Build and deploy scalable apps using Node.js."
    ],
    [
        "node.new%20vite.new",
        "StackBlitz",
        "Build and deploy scalable apps using Node.js."
    ],
    [
        "stack.new",
        "Stackery",
        "Audit project templates and visualize results using Stackery."
    ],
    [
        "tailwind.new",
        "Tailwindcss.com",
        "Build responsive designs right in your browser with Tailwind."
    ],
    [
        "saas.new",
        "Tesserai",
        "Charge users who use your APIs with Tesserai."
    ],
    [
        "deploy.new",
        "Vercel",
        "Import your front-end projects to Vercel for preview and deployment."
    ],
    [
        "zeit.new",
        "Vercel",
        "Import your front-end projects to Vercel for preview and deployment."
    ],
    [
        "module.new",
        "Vercel",
        "Instantly deploy your Next.js site to a public URL with Vercel."
    ],
    [
        "write.new",
        "Zoho",
        "Start a new document using Zoho."
    ],
    [
        "sign.new",
        "Adobe",
        "Fill and sign PDF documents and forms with Adobe Acrobat."
    ],
    [
        "compresspdf.new",
        "Adobe",
        "Compress PDF documents with simple drag and drop with Adobe Acrobat."
    ],
    [
        "mergepdf.new",
        "Adobe",
        "Combine PDFs into one file with Adobe."
    ],
    [
        "pdftoword.new",
        "Adobe",
        "Convert PDFs to Word documents with Adobe."
    ],
    [
        "rotatepdf.new",
        "Adobe",
        "Rotate your PDF pages using Adobe."
    ],
    [
        "protectpdf.new",
        "Adobe Inc.",
        "Secure your PDFs with Adobe."
    ],
    [
        "ad.new",
        "AdPlugg",
        "Create a fully managed ad with impression and click tracking with AdPlugg."
    ],
    [
        "track.new",
        "Aftership",
        "Track your shipments across various couriers."
    ],
    [
        "smarthome.new",
        "Alarm.com",
        "Equip your home with smart security with Alarm.com."
    ],
    [
        "alt.new",
        "Alt",
        "Invest in alternative assets with Alt."
    ],
    [
        "onlyalt.new",
        "Alt",
        "Invest in alternative assets with Alt."
    ],
    [
        "vault.new",
        "Alt",
        "Trade alternative asset starting with trading cards using Alt app."
    ],
    [
        "erp.new",
        "Altisuite",
        "Create customer information for one e-commerce platform using Altisuite."
    ],
    [
        "crm.new",
        "Altisuite",
        "Use Altisuite's CRM."
    ],
    [
        "afclaim.new",
        "American Fidelity",
        "File a claim towards your American Fidelity insurance."
    ],
    [
        "afreimburse.new",
        "American Fidelity",
        "Submit a reimbursement request from your American Fidelity account."
    ],
    [
        "avalon.new",
        "Avalon Technologies",
        "Create a deposit for investment with Avalon Technologies."
    ],
    [
        "branch.new",
        "Avo",
        "Track your data with Avo."
    ],
    [
        "tracking.new",
        "Avo",
        "Track your data with Avo."
    ],
    [
        "hq.new",
        "Axios HQ logo",
        "Creates newsletter/edition using hq.new workspace."
    ],
    [
        "businessloan.new",
        "Bankwest",
        "Get started on a business loan application with Bankwest."
    ],
    [
        "bill.new",
        "bill.com",
        "Create and send bills to your clients using bill.com."
    ],
    [
        "inv.new",
        "bill.com",
        "Create an invoice for your business using bill.com."
    ],
    [
        "inbox.new",
        "Bill.com",
        "Easily pay international and domestic vendors the same way with Bill.com."
    ],
    [
        "connect.new",
        "Bill.com",
        "Create and pay bills, send invoices on Bill.com"
    ],
    [
        "buffer.new",
        "Buffer",
        "Schedule and manage your social media posts."
    ],
    [
        "burner.new",
        "Burner",
        "Create a second phone number with Burner."
    ],
    [
        "number.new",
        "Burner",
        "Create a second phone number with Burner."
    ],
    [
        "phonenumber.new",
        "Burner",
        "Create a second phone number with Burner."
    ],
    [
        "bpmn.new",
        "Business Modeler Preview",
        "Create BPMN and DMN files online for your business."
    ],
    [
        "dmn.new",
        "Business Modeler Preview",
        "Create BPMN and DMN files online for your business."
    ],
    [
        "newsletter.new",
        "Buttondown",
        "Create a new email newsletter using Buttondown."
    ],
    [
        "menu.new",
        "Canva",
        "Design an appetizing menu using customizable templates from Canva."
    ],
    [
        "resumes.new",
        "Canva",
        "Create a professional-looking resume using templates from Canva."
    ],
    [
        "designs.new",
        "Canva",
        "Create a new design using beautiful, customizable templates from Canva."
    ],
    [
        "flyer.new",
        "Canva",
        "Create a flyer using beautiful, customizable templates from Canva."
    ],
    [
        "invitations.new",
        "Canva",
        "Create an invitation using beautiful, customizable templates from Canva."
    ],
    [
        "finance.new",
        "Capchase",
        "Apply for a business loan using finance.new."
    ],
    [
        "draw.new",
        "Capchase",
        "Quickly withdraw money from your bank account using draw.new."
    ],
    [
        "landingpage.new",
        "ConvertKit",
        "Design a landing page for your project using ConvertKit."
    ],
    [
        "security.new",
        "Core",
        "Allows users to easily manage their smart security system at home."
    ],
    [
        "dao.new",
        "DAO",
        "Create your own NFT DAO."
    ],
    [
        "graph.new",
        "Datadog",
        "Create a new notebook for live collaboration on Datadog."
    ],
    [
        "cassandra.new",
        "DataStax",
        "Get started on building a database using DataStax."
    ],
    [
        "rest.new",
        "DataStax, Inc",
        "Create a database with DataStax."
    ],
    [
        "creditcard.new",
        "Discover Card",
        "Design a new credit card with Discover Card."
    ],
    [
        "notary.new",
        "DocuSign, Inc.",
        "Prepare, manage, and sign agreements using DocuSign."
    ],
    [
        "agreements.new",
        "DocuSign, Inc.",
        "Prepare, manage, and sign agreements using DocuSign."
    ],
    [
        "notarize.new",
        "DocuSign, Inc.",
        "Notarize documents with DocuSign."
    ],
    [
        "developer.new",
        "DocuSign, Inc.",
        "E-sign documents using DocuSign."
    ],
    [
        "esignature.new",
        "DocuSign, Inc.",
        "E-sign documents using DocuSign."
    ],
    [
        "signature.new",
        "DocuSign, Inc.",
        "E-sign documents using DocuSign."
    ],
    [
        "duda.new",
        "Duda",
        "Create your website and manage your business online."
    ],
    [
        "emix.new",
        "e.Mix",
        "Track your shipments using mantranet"
    ],
    [
        "sell.new",
        "eBay",
        "Sell products on eBay."
    ],
    [
        "cdn.new",
        "Edge",
        "Create your first Edge Content Delivery deployment."
    ],
    [
        "websites.new",
        "Emaze",
        "Create a website using Emaze."
    ],
    [
        "copytrader.new",
        "eToro Group LTD",
        "Purchase cryptocurrency eToro."
    ],
    [
        "etoro.new",
        "eToro Group LTD",
        "Buy, sell, and trade Ripple on eToro."
    ],
    [
        "vpn.new",
        "eVenture Ltd",
        "Use a proxy server without having to connect to a VPN with eVenture."
    ],
    [
        "geophy.new",
        "EVRA",
        "Get helpful property and real estate information using EVRA."
    ],
    [
        "prd.new",
        "Fable",
        "Create a new PRD using Fable."
    ],
    [
        "fellow.new",
        "Fellow",
        "Create your own event using fellow.new"
    ],
    [
        "fp.new",
        "Fiberplane",
        "Create an online notebook using Fiberplane."
    ],
    [
        "job.new",
        "Find Jobs",
        "Post a new job listing with Find Jobs."
    ],
    [
        "segment.new",
        "Flywheel Software",
        "Segment your business' customers with Flywheel Software."
    ],
    [
        "camping.new",
        "Freeway Camper",
        "Book your next camping adventure with Freeway Camper."
    ],
    [
        "codespaces.new",
        "GitHub, Inc.",
        "Create a new code space on GitHub."
    ],
    [
        "websitebuilder.new",
        "GoDaddy",
        "Build a website for your business with GoDaddy."
    ],
    [
        "securityreview.new",
        "Google LLC",
        "Kick off Google's security review process for your project."
    ],
    [
        "letter.new",
        "gotomaxx software GmbH",
        "Create a new invoice using gotomaxx."
    ],
    [
        "pdfmailer.new",
        "gotomaxx software GmbH",
        "Create a new invoice using gotomaxx."
    ],
    [
        "xrechnung.new",
        "gotomaxx software GmbH",
        "Create a new invoice using gotomaxx."
    ],
    [
        "e-invoice.new",
        "gotomaxx software GmbH",
        "Create an e-invoice using gotomaxx Software."
    ],
    [
        "harbor.new",
        "Harbour Enterprises, Inc.",
        "Upload your contract to Harbour."
    ],
    [
        "agree.new",
        "Harbour Enterprises, Inc.",
        "Upload your contract to Harbour."
    ],
    [
        "harbour.new",
        "Harbour Enterprises, Inc.",
        "Manage your contracts with Harbour."
    ],
    [
        "funnel.new",
        "Heyflow",
        "Create an interactive flow using Heyflow."
    ],
    [
        "trip.new",
        "Hipherd",
        "Create a travel inspiration board using Hipherd."
    ],
    [
        "emailsignature.new",
        "HoneyBook",
        "Create a professional email signature in 30 seconds HoneyBook."
    ],
    [
        "host.new",
        "Hosterion",
        "Manage your web hosting with Hosterion."
    ],
    [
        "hosting.new",
        "Hosterion",
        "Manage your web hosting with Hosterion."
    ],
    [
        "webhosting.new",
        "Hosttech",
        "Get webhosting with hosttech."
    ],
    [
        "job.new",
        "HRBlaster",
        "Post your startup job on Startup Jobs."
    ],
    [
        "profile.new",
        "Indeed, Inc",
        "Create your online resume with Indeed."
    ],
    [
        "ip.new",
        "Inspirational People",
        "Submit content to InspirationalPeople.org using their markdown editor."
    ],
    [
        "edo.new",
        "Internet Bank",
        "Checking of counterparty using Tochka"
    ],
    [
        "recruit.new",
        "JobVector",
        "Find a new job with JobVector."
    ],
    [
        "jobvector.new",
        "Jobvector GmbH",
        "Find your next job opportunity with Jobvector."
    ],
    [
        "career.new",
        "Jobvector GmbH",
        "Find your next career opportunity with Jobvector."
    ],
    [
        "digiposte.new",
        "La Poste",
        "Upload documents to your Digiposte account."
    ],
    [
        "lnk.new",
        "LNK",
        "Create a lnk.bio page to manage all your links and social media."
    ],
    [
        "insure.new",
        "Marble",
        "Choose your insurance policy on Marble."
    ],
    [
        "marble.new",
        "Marble Pay Inc.",
        "Create and add insurance policy using MarblePay."
    ],
    [
        "points.new",
        "Marble Pay Inc.",
        "Centralizes all your insurance policies in MarblePay."
    ],
    [
        "mibo.new",
        "Mibo",
        "Create a team-bonding meeting with Mibo."
    ],
    [
        "teams.new",
        "Microsoft Teams",
        "Chat with your team using Microsoft Teams."
    ],
    [
        "server.new",
        "Mobilistics",
        "Set up a custom server for your business or project."
    ],
    [
        "vps.new",
        "ModernSolutions",
        "Configure your VPS using Modern Solutions."
    ],
    [
        "my.new",
        "My",
        "Create shortened URLs for common tasks with my.new."
    ],
    [
        "coach.new",
        "MyCoachReady",
        "Get personal online coaching with MyCoachReady."
    ],
    [
        "businesscard.new",
        "Namecheap",
        "Design personalized business cards with Namecheap."
    ],
    [
        "review.new",
        "Nicejob",
        "Review a local business with NiceJob."
    ],
    [
        "nova.new",
        "novahq.com",
        "Create a new business transaction with Nova."
    ],
    [
        "listing.new",
        "OneShp",
        "Create a new listing on OneShop to quickly sell items."
    ],
    [
        "expense.new",
        "Open",
        "Add an expense to your Open account."
    ],
    [
        "gst.new",
        "Open",
        "Create a bill in your Open account."
    ],
    [
        "banking.new",
        "Open",
        "Create a new banking account for your business, using Open."
    ],
    [
        "payout.new",
        "Open",
        "Transfer payments and funds using Open."
    ],
    [
        "payroll.new",
        "Open",
        "Run payroll using Open."
    ],
    [
        "collect.new",
        "Open",
        "Collect payments using Open."
    ],
    [
        "loan.new",
        "Open",
        "Apply for a loan using Open."
    ],
    [
        "open.new",
        "Open",
        "Open an online banking account with Open."
    ],
    [
        "accounting.new",
        "Open",
        "Manage your accounting with Open."
    ],
    [
        "absence.new",
        "Personio GmbH",
        "Track employee absence using Personio."
    ],
    [
        "candidate.new",
        "Personio GmbH",
        "Track your candidate pipeline using Personio."
    ],
    [
        "absence.new",
        "Personio GmbH",
        "Track employee absences using Peronio."
    ],
    [
        "pitch.new",
        "Pitch Software GmbH",
        "Collaborate on presentations using Pitch Software."
    ],
    [
        "pix.new",
        "Pix",
        "Receive and manage payments with Pix."
    ],
    [
        "vis.new",
        "Polymer",
        "Add file or create app using VIS system"
    ],
    [
        "csv.new",
        "Polymer",
        "Converts CSV file into interactive data."
    ],
    [
        "xls.new",
        "Polymer",
        "Turn your XLS into an interactive data app using Polymer."
    ],
    [
        "ignition.new",
        "Practice",
        "Create and send online proposal for your business using Ignition."
    ],
    [
        "okr.new",
        "Profit.co",
        "Create new objectives and key results for your business."
    ],
    [
        "button.new",
        "Razorpay",
        "Receive quick payments with a button from Razorpay."
    ],
    [
        "pl.new",
        "Razorpay",
        "Create a new payment link with Razorpay."
    ],
    [
        "upi.new",
        "Razorpay",
        "Allow others to make payments using Razorpay."
    ],
    [
        "recurring.new",
        "Razorpay",
        "Create a subscription plan using Razorpay."
    ],
    [
        "payouts.new",
        "RazorpayX",
        "Create and send a payout using RazorpayX."
    ],
    [
        "re.new",
        "Re:new",
        "Generate friendlier email responses with Re:new."
    ],
    [
        "scorecard.new",
        "Red Hat Inc",
        "Generate scorecards online for your business with KIE Sandbox."
    ],
    [
        "pmml.new",
        "Red Hat Inc",
        "Create PMML files for your business using Red Hat."
    ],
    [
        "rem.new",
        "Remnote",
        "Create an online document with Remnote."
    ],
    [
        "me.new",
        "Ringpin",
        "Create a mobile optimized landing page with Ringpin."
    ],
    [
        "me.new",
        "Ringpin",
        "Create a mobile optimized landing page with Ringpin"
    ],
    [
        "space.new",
        "Rock",
        "Collaborate in a new workspace with Rock."
    ],
    [
        "charts.new",
        "Sanbase",
        "Creating charts for online crypto analysis."
    ],
    [
        "clar.new",
        "Sandbox",
        "Create and deploy a new smart contract to the Stacks blockchain."
    ],
    [
        "contact.new",
        "ScanBuddy.ai",
        "Create contacts by scanning your business cards."
    ],
    [
        "leads.new",
        "ScanBuddy.ai",
        "Create contacts by scanning your business cards."
    ],
    [
        "cdp.new",
        "Segment",
        "Create a new workspace on Segment's customer data platform."
    ],
    [
        "shipment.new",
        "Shipmondo",
        "Create and track shipments across carriers using Shipmondo."
    ],
    [
        "shopify.new",
        "Shopify",
        "Start a new online shop on Shopify."
    ],
    [
        "businessname.new",
        "Shopify",
        "Designate your business name on Shopify."
    ],
    [
        "start.new",
        "Shopify Compass",
        "Start learning from a list of global entrepreneurs with Shopify Compass."
    ],
    [
        "store.new",
        "Shopify Inc.",
        "Create an online store on Shopify."
    ],
    [
        "business.new",
        "Shopify Inc.",
        "Create an online business using Shopify."
    ],
    [
        "onlinestore.new",
        "Shopify Inc.",
        "Create an online store using Shopify."
    ],
    [
        "inc.new",
        "Slack",
        "Declare, manage and communicate incidents directly in Slack."
    ],
    [
        "agreement.new",
        "Sopimustieto",
        "Create business agreements using common templates."
    ],
    [
        "cryptojobs.new",
        "Soul Machine Pvt. Ltd",
        "Find a job within the crypto industry using Crypto Jobs."
    ],
    [
        "flight.new",
        "Star Alliance Services GmbH",
        "Search available flights with Star Alliance."
    ],
    [
        "flights.new",
        "Star Alliance Services GmbH",
        "Search available flights with Star Alliance."
    ],
    [
        "invoice.new",
        "Stripe",
        "Create an invoice for your business using Stripe."
    ],
    [
        "invoices.new",
        "Stripe",
        "Create an invoice for your business using Stripe."
    ],
    [
        "payment.new",
        "Stripe",
        "Send and accept payments using Stripe."
    ],
    [
        "payments.new",
        "Stripe",
        "Send and accept payments using Stripe."
    ],
    [
        "product.new",
        "Stripe",
        "Add a new offering to your Stripe product catalog."
    ],
    [
        "subscription.new",
        "Stripe",
        "Create new subscription accounts for your customers using Stripe."
    ],
    [
        "subscriptions.new",
        "Stripe",
        "Create new subscription accounts for your customers using Stripe."
    ],
    [
        "money.new",
        "Stripe",
        "Send and accept payments using Stripe."
    ],
    [
        "deposit.new",
        "Stripe Inc.",
        "Receive and transfer payments with Stripe."
    ],
    [
        "paymentlinks.new",
        "Stripe, Inc.",
        "Create payment links using Stripe."
    ],
    [
        "func.new",
        "Suborbital",
        "Deploy serverless functions for your developer project using Suborbital."
    ],
    [
        "surveymonkey.new",
        "SurveyMonkey",
        "Create a new survey using SurveyMonkey."
    ],
    [
        "survey.new",
        "SurveyMonkey",
        "Create on-brand feedback surveys in minutes with SurveyMonkey."
    ],
    [
        "surveymonkey.new",
        "SurveyMonkey",
        "Create on-brand feedback surveys in minutes with SurveyMonkey."
    ],
    [
        "surveymonkey.new",
        "SurveyMonkey",
        "Create a new survey using SurveyMonkey."
    ],
    [
        "field.new",
        "Syngenta",
        "Allow user to create fields online mapping"
    ],
    [
        "fax.new",
        "Topaz",
        "Send a fax using Topaz."
    ],
    [
        "tochka.new",
        "Toyka",
        "Create and payment online using Tochka."
    ],
    [
        "workout.new",
        "Trainstation Inc",
        "Create a new workout on Trainstation."
    ],
    [
        "trm.new",
        "TRM labs",
        "Create a new Graph for crypto analysis using TRM labs."
    ],
    [
        "car.new",
        "UENI",
        "Build a website for your business with UENI."
    ],
    [
        "shopping.new",
        "UENI",
        "Build a shopping website for your business using UENI."
    ],
    [
        "online.new",
        "UENI",
        "Build a website for your business using UENI."
    ],
    [
        "local.new",
        "UENI",
        "Build a website for your business using UENI."
    ],
    [
        "ghs.new",
        "UL LLC",
        "Build an OSHA SDS document with UL's builder."
    ],
    [
        "sds.new",
        "UL LLC",
        "Build an OSHA SDS document with UL's builder."
    ],
    [
        "usertest.new",
        "Userlytics",
        "Design and launch a user test with Userlytics."
    ],
    [
        "fund.new",
        "Vauban",
        "Design your investment fund using Vauban."
    ],
    [
        "vibe.new",
        "Vibe.us",
        "Collaborate visually with your team using Vibe's smartboard."
    ],
    [
        "vista.new",
        "Vistaprint",
        "Design and print business cards using Vistaprint."
    ],
    [
        "wix.new",
        "Wix",
        "Build a new website using Wix."
    ],
    [
        "proof.new",
        "Wrike, Inc.",
        "Upload files to the cloud using Wrike."
    ],
    [
        "schedule.new",
        "x.ai",
        "Create a calendar event online using Magical."
    ],
    [
        "ship.new",
        "XPO Logistics, Inc",
        "Manage shipping logistics with XPO Logistics."
    ],
    [
        "yac.new",
        "Yac Media Inc.",
        "Start a group discussion using voice messages with Yac."
    ],
    [
        "hire.new",
        "ZipRecruiter",
        "Create a job posting with ZipRecruiter."
    ],
    [
        "hires.new",
        "ZipRecruiter",
        "Create a job posting with ZipRecruiter."
    ],
    [
        "projects.new",
        "Zoho",
        "Create new Manage Engine projects."
    ],
    [
        "change.new",
        "Zoho",
        "E-sign business documents using Zoho."
    ],
    [
        "esign.new",
        "Zoho",
        "E-sign business documents using Zoho."
    ],
    [
        "purchase.new",
        "Zoho",
        "E-sign business documents using Zoho."
    ],
    [
        "record.new",
        "Zoho",
        "E-sign business documents using Zoho."
    ],
    [
        "asset.new",
        "Zoho Corporation Private Limited",
        "Share and e-sign documents using Zoho."
    ],
    [
        "create.new",
        "Adobe",
        "Design beautiful social media posts and more with Adobe Spark."
    ],
    [
        "spark.new",
        "Adobe",
        "Design beautiful social media posts and more with Adobe Spark."
    ],
    [
        "stories.new",
        "Adobe",
        "Design beautiful social media posts and more with Adobe Spark."
    ],
    [
        "jpgtopdf.new",
        "Adobe",
        "Convert JPG images to PDF with Adobe Acrobat."
    ],
    [
        "logo.new",
        "Adobe",
        "Create a new logo for your business with Adobe Spark."
    ],
    [
        "convertpdf.new",
        "Adobe",
        "Drag and drop a Microsoft Word, Excel, PowerPoint, or image file to convert to PDF."
    ],
    [
        "pdf.new",
        "Adobe",
        "Drag and drop a Microsoft Word, Excel, PowerPoint, or image file to convert to PDF."
    ],
    [
        "wordtopdf.new",
        "Adobe",
        "Convert Microsoft Word documents to PDF."
    ],
    [
        "photo.new",
        "Adobe",
        "Edit an image using Adobe Photoshop online."
    ],
    [
        "photoshop.new",
        "Adobe",
        "Edit an image using Adobe Photoshop online."
    ],
    [
        "acrobat.new",
        "Adobe Inc.",
        "Work with PDFs in your browser using Adobe Acrobat online services."
    ],
    [
        "express.new",
        "Adobe Inc.",
        "Design beautiful social media posts and more with Adobe Spark."
    ],
    [
        "pdftojpg.new",
        "Adobe Inc.",
        "Convert your PDFs to JPGs with Adobe."
    ],
    [
        "alarm.new",
        "Alarm.com Inc",
        "Set an alarm."
    ],
    [
        "episode.new",
        "Anchor",
        "Record a new episode for your podcast using Anchor by Spotify."
    ],
    [
        "podcast.new",
        "Anchor",
        "Record a new episode for your podcast using Anchor by Spotify."
    ],
    [
        "caption.new",
        "Api.video",
        "Upload videos of any size to api.video to get a shareable link for streaming."
    ],
    [
        "ingest.new",
        "Api.video",
        "Upload videos of any size to api.video to get a shareable link for streaming."
    ],
    [
        "mp4.new",
        "Api.video",
        "Convert videos of any size to mp4 files using api.video."
    ],
    [
        "hls.new",
        "api.video",
        "Upload videos of any size to api.video to get a shareable link for HTTP live streaming (HLS)."
    ],
    [
        "embed.new",
        "api.video",
        "Upload videos of any size to api.video to get an embeddable iframe."
    ],
    [
        "building.new",
        "Archilogic",
        "Design a building floorplan using Archilogic."
    ],
    [
        "interiorspace.new",
        "Archilogic",
        "Design an interior floorplan using Archilogic."
    ],
    [
        "post.new",
        "Automattic",
        "Create a new blog post on your Wordpress blog."
    ],
    [
        "blog.new",
        "Automattic",
        "Create a new blog on wordpress.com."
    ],
    [
        "metric.new",
        "Avo",
        "Add and create metric using avo app."
    ],
    [
        "befunky.new",
        "BeFunky",
        "Quickly edit, filter, and enhance your photos with BeFunky."
    ],
    [
        "collage.new",
        "BeFunky",
        "Arrange multiple photos into a ready-to-share collage with BeFunky."
    ],
    [
        "canva.new",
        "Canva",
        "Create a new Canva design with your team."
    ],
    [
        "design.new",
        "Canva",
        "Create a new Canva design with your team."
    ],
    [
        "poster.new",
        "Canva",
        "Create a new Canva poster with your team."
    ],
    [
        "brochure.new",
        "Canva",
        "Create a beautiful brochure using Canva's customizable brochure templates."
    ],
    [
        "brochures.new",
        "Canva",
        "Create a beautiful brochure using Canva's customizable brochure templates."
    ],
    [
        "businesscards.new",
        "Canva",
        "Create professional-looking business cards using Canva's customizable templates."
    ],
    [
        "cards.new",
        "Canva",
        "Create a card for any occasion using Canva's customizable card templates."
    ],
    [
        "socialpost.new",
        "Canva",
        "Design your next social media post using templates from Canva."
    ],
    [
        "mug.new",
        "Canva",
        "Design a mug using customizable templates from Canva."
    ],
    [
        "photocollage.new",
        "Canva",
        "Create a mood board or any type of photo collage using templates from Canva."
    ],
    [
        "postcard.new",
        "Canva",
        "Design a post card using one of Canva's many templates."
    ],
    [
        "postcards.new",
        "Canva",
        "Design a post card using one of Canva's many templates."
    ],
    [
        "posters.new",
        "Canva",
        "Design a poster using one of Canva's many templates."
    ],
    [
        "prints.new",
        "Canva",
        "Create a flyer using customizable templates from Canva."
    ],
    [
        "social.new",
        "Canva",
        "Design a social media post using templates from Canva."
    ],
    [
        "socialmedia.new",
        "Canva",
        "Design a social media post using templates from Canva."
    ],
    [
        "wallpaper.new",
        "Canva",
        "Design your own wallpaper using customizable templates from Canva."
    ],
    [
        "webpage.new",
        "Canva",
        "Design a webpage using templates from Canva."
    ],
    [
        "wedding.new",
        "Canva",
        "Design your wedding invitation using one of Canva's many templates."
    ],
    [
        "yearbook.new",
        "Canva",
        "Create a yearbook using a beautiful template from Canva."
    ],
    [
        "decks.new",
        "Canva",
        "Create online presentations using templates from Canva."
    ],
    [
        "emails.new",
        "Canva",
        "Create HTML emails using templates from Canva."
    ],
    [
        "infographic.new",
        "Canva",
        "Create an infographic using templates from Canva."
    ],
    [
        "invitation.new",
        "Canva",
        "Create an invitation using templates from Canva."
    ],
    [
        "label.new",
        "Canva",
        "Create labels using templates from Canva."
    ],
    [
        "flyers.new",
        "Canva",
        "Create flyers using templates from Canva."
    ],
    [
        "sticker.new",
        "Cloudfront",
        "Create and design stickers using Cloudfront."
    ],
    [
        "stickers.new",
        "Cloudfront",
        "Create and design stickers using Cloudfront."
    ],
    [
        "creative.new",
        "Confect",
        "Design a new product feed with Confect."
    ],
    [
        "content.new",
        "Confect",
        "Create and customize your design for your product with Confect."
    ],
    [
        "contract.new",
        "Contractbook",
        "Create a contract using helpful templates from Contractbook."
    ],
    [
        "game.new",
        "ControlZee",
        "Launch a new dot big bang game."
    ],
    [
        "copy.new",
        "CopyAI",
        "Generate marketing copy in seconds using CopyAI."
    ],
    [
        "creatives.new",
        "Creative Hub",
        "Create and store files for your creative projects using Creative Hub."
    ],
    [
        "developers.new",
        "DocuSign, Inc.",
        "Upload and process document using Docusign"
    ],
    [
        "integrate.new",
        "DocuSign, Inc.",
        "Upload and process document using Docusign"
    ],
    [
        "integrations.new",
        "DocuSign, Inc.",
        "Upload and process document using Docusign"
    ],
    [
        "analyze.new",
        "DocuSign, Inc.",
        "Upload and process document using Docusign"
    ],
    [
        "template.new",
        "DocuSign, Inc.",
        "Upload and process document using Docusign."
    ],
    [
        "slidedeck.new",
        "Dropdeck",
        "Create an online presentation using Dropdeck."
    ],
    [
        "ecard.new",
        "Emaze",
        "Create an e-card using Emaze."
    ],
    [
        "emaze.new",
        "Emaze",
        "Create an online presentation using Emaze."
    ],
    [
        "photos.new",
        "Emaze",
        "Touch up photos online using Emaze's image editing tools."
    ],
    [
        "facet.new",
        "Facet",
        "Edit images using Facet's smart editor."
    ],
    [
        "favicon.new",
        "Favicon",
        "Generate a favicon for your website."
    ],
    [
        "figma.new",
        "Figma",
        "Design and prototype using Figma's collaborative interface."
    ],
    [
        "figjam.new",
        "Figma",
        "Design and prototype using Figma's collaborative interface."
    ],
    [
        "file.new",
        "File.new",
        "Write a quick note and share it with your friends."
    ],
    [
        "score.new",
        "flat.io",
        "Write music online with this collaborative score editor."
    ],
    [
        "flipbook.new",
        "FlippingBook",
        "Convert PDFs into digital flipbooks you can share."
    ],
    [
        "flip.new",
        "Flipsnack",
        "Create an interactive online flipbook for your brand using Flipsnack."
    ],
    [
        "flipsnack.new",
        "Flipsnack",
        "Create an interactive online flipbook for your brand using Flipsnack."
    ],
    [
        "publication.new",
        "FlowPaper",
        "Convert PDFs into interactive publications."
    ],
    [
        "glide.new",
        "Glide",
        "Create apps and websites without using code, with Glide."
    ],
    [
        "jam.new",
        "Google",
        "Start a new Jamboard with Google."
    ],
    [
        "tables.new",
        "Google",
        "Track your work and projects using Tables."
    ],
    [
        "drawing.new",
        "Google LLC",
        "Create a new drawing using Google Drawings."
    ],
    [
        "drawings.new",
        "Google LLC",
        "Create a new drawing using Google Drawings."
    ],
    [
        "license.new",
        "Harbour",
        "License content with Creative Commons."
    ],
    [
        "logos.new",
        "Hatchful",
        "Create a custom logo in seconds with Hatchful."
    ],
    [
        "entry.new",
        "Hatena",
        "Post to your blog using Hatena."
    ],
    [
        "travel.new",
        "hipherd",
        "Build a travel inspiration board with hipherd."
    ],
    [
        "collaborate.new",
        "Hippo Video",
        "Record or upload a new video."
    ],
    [
        "videos.new",
        "Hippo Video",
        "Create a personalized video using Hippo Video."
    ],
    [
        "image.new",
        "Image Editor",
        "Edit images and photos online with Image Editor."
    ],
    [
        "policy.new",
        "InfluenceKit, Inc.",
        "Create a new policy report using InfluenceKit."
    ],
    [
        "knit.new%20wear.new",
        "Kniterate",
        "Create a custom design for your next knitwear project."
    ],
    [
        "lucidchart.new",
        "Lucid",
        "Create diagrams and flow charts using Lucid."
    ],
    [
        "lucidscale.new",
        "Lucid",
        "Get web hosting with Lucid."
    ],
    [
        "luma.new",
        "Luma",
        "Create an event page for your Zoom event with Luma."
    ],
    [
        "webstory.new",
        "makestories.io",
        "Create a new web story with MakeStories."
    ],
    [
        "medium.new",
        "Medium",
        "Create a new story on Medium."
    ],
    [
        "story.new",
        "Medium",
        "Create a new story on Medium."
    ],
    [
        "canvas.new",
        "Miri",
        "Create a new design using Miri."
    ],
    [
        "whiteboard.new",
        "MiroLite",
        "Use MiroLite's digital whiteboard to collaborate with your team."
    ],
    [
        "mural.new",
        "MURAL",
        "Start using MURAL's digital whiteboard for team collaboration."
    ],
    [
        "broadcast.new",
        "Mux",
        "Upload a video and make it streamable with Mux."
    ],
    [
        "encode.new",
        "Mux",
        "Upload a video and make it streamable with Mux."
    ],
    [
        "stream.new",
        "Mux",
        "Upload a video and make it streamable with Mux."
    ],
    [
        "mybrand.new",
        "My Brand New Logo",
        "Create a new logo for your business and brand."
    ],
    [
        "logomaker.new",
        "Namecheap",
        "Design a new business logo with Namecheap."
    ],
    [
        "album.new",
        "Novecore Ltd.",
        "Upload your music album details to Novecore."
    ],
    [
        "cacoo.new",
        "Nulab",
        "Create a new diagram online using Nulab."
    ],
    [
        "cad.new",
        "Onshape",
        "Create a new CAD design online."
    ],
    [
        "member.new",
        "Orbit",
        "Creates workspace per community to connect online in member.new"
    ],
    [
        "match.new",
        "Pally",
        "Initiate spontaneous video chats with strangers using Pally."
    ],
    [
        "patch.new",
        "Patch Media",
        "Creates posts online using patch.com"
    ],
    [
        "claims.new",
        "PicPocket-Labs, Inc.",
        "File an insurance claim using PicPocket-Labs."
    ],
    [
        "picture.new",
        "Pictapic",
        "Get high-quality photo prints delivered right to your door using Pictapic."
    ],
    [
        "sketch.new",
        "sketch.io",
        "Create a new sketch with sketch.io."
    ],
    [
        "internet.new",
        "Skynet",
        "Start a new blog."
    ],
    [
        "playlist.new",
        "Spotify",
        "Create a new Spotify playlist."
    ],
    [
        "stacker.new",
        "Stacker",
        "Add a new category and data using studio airportal app."
    ],
    [
        "fiberplane.new",
        "Studio",
        "Write in an online notebook using Fiberplane."
    ],
    [
        "recording.new",
        "Tella",
        "Start a new screen and camera recording."
    ],
    [
        "tothe.new",
        "TO THE NEW",
        "Get started on a new blog post on TO THE NEW."
    ],
    [
        "top.new",
        "Top",
        "Get started on a new blog post with Top."
    ],
    [
        "score.new",
        "Tutteo Limited",
        "Write a musical score with others using Tutteo's collaborative music app."
    ],
    [
        "thread.new",
        "Twist",
        "Create a discussion or new email thread using twist."
    ],
    [
        "chord.new",
        "Ultimate Guitar",
        "Add a new tab to the Ultimate Guitar archive."
    ],
    [
        "chords.new",
        "Ultimate Guitar",
        "Add a new tab to the Ultimate Guitar archive."
    ],
    [
        "tab.new",
        "Ultimate Guitar",
        "Add a new tab to the Ultimate Guitar archive."
    ],
    [
        "tabs.new",
        "Ultimate Guitar",
        "Add a new tab to the Ultimate Guitar archive."
    ],
    [
        "vocal.new",
        "Vocal",
        "Create and share stories on Vocal."
    ],
    [
        "velo.new",
        "Wix",
        "Create a website using Wix."
    ],
    [
        "wiki.new",
        "YNAW",
        "Create a new wiki page with YNAW (You Need a Wiki)."
    ],
    [
        "zap.new",
        "Zapier Inc.",
        "Create a new zap to automate repetitive tasks using Zapier."
    ],
    [
        "agenda.new",
        "Agenda Hero",
        "Create a new agenda with Agenda Hero."
    ],
    [
        "asana.new",
        "Asana",
        "Add a new task to your Asana project."
    ],
    [
        "task.new",
        "Asana",
        "Add a new task to your Asana project."
    ],
    [
        "io.new",
        "bit.io",
        "Create a new data repository on bit.io."
    ],
    [
        "bitly.new",
        "Bitly",
        "Create memorable, short links to your website with Bitly."
    ],
    [
        "link.new",
        "Bitly",
        "Create memorable, short links to your website with Bitly."
    ],
    [
        "board.new",
        "Board",
        "Collaborate remotely on an online whiteboard."
    ],
    [
        "background.new",
        "Canva",
        "Design the perfect Zoom background for your virtual meetings using Canva's customizable background templates."
    ],
    [
        "brainstorm.new",
        "Canva",
        "Create a new business presentation at brainstorm.new."
    ],
    [
        "matters.new",
        "Canyon",
        "Create legal matters using Canyon."
    ],
    [
        "go.new",
        "Carotrip",
        "Book car, van, bus, SUV and limos in advance with Carotrip."
    ],
    [
        "coda.new",
        "Coda",
        "Create a new doc for teams that combines documents, spreadsheets, and building blocks."
    ],
    [
        "league.new",
        "CompuSport",
        "Manage your leagues using CompuSport."
    ],
    [
        "cs.new",
        "CoScreen",
        "Share your screen with your coworkers using CoScreen."
    ],
    [
        "version.new",
        "creativehub",
        "Share and comment on large files and chat live."
    ],
    [
        "resume.new",
        "CV2You",
        "Build a new resume with one of CV2You's customizable templates."
    ],
    [
        "dataproject.new",
        "Data World",
        "Create a new project in data.world's data catalog."
    ],
    [
        "dataprojects.new",
        "Data World",
        "Create a new project in data.world's data catalog."
    ],
    [
        "dataset.new",
        "Data World",
        "Add a new data set to your data.world data catalog."
    ],
    [
        "datasets.new",
        "Data World",
        "Add a new data set to your data.world data catalog."
    ],
    [
        "demo.new",
        "Demodesk",
        "Launch an instant meeting with Demodesk."
    ],
    [
        "diagram.new",
        "Diagrams.net",
        "Create a flowchart diagram to map processes."
    ],
    [
        "diagrams.new",
        "Diagrams.net",
        "Create a flowchart diagram to map processes."
    ],
    [
        "paper.new",
        "Dropbox",
        "Start a new workspace with Dropbox."
    ],
    [
        "chart.new",
        "Everviz",
        "Create interactive charts, maps, and tables using Everviz."
    ],
    [
        "calendar.new",
        "FreeBusy",
        "Send a calendar invite with FreeBusy."
    ],
    [
        "freetrade.new",
        "Freetrade",
        "Create a new discussion within the Freetrade community."
    ],
    [
        "gamma.new",
        "Gamma Tech, Inc.",
        "Create a new memo in Gamma."
    ],
    [
        "glean.new",
        "Glean",
        "Create a new multimedia note document using Glean."
    ],
    [
        "cal.new",
        "Google Calendar",
        "Create and send a new Google Calendar invite."
    ],
    [
        "meeting.new",
        "Google Calendar",
        "Create and send a new Google Calendar invite."
    ],
    [
        "docs.new",
        "Google Docs",
        "Create a new document using Google Docs."
    ],
    [
        "document.new",
        "Google Docs",
        "Create a new document using Google Docs."
    ],
    [
        "documents.new",
        "Google Docs",
        "Create a new document using Google Docs."
    ],
    [
        "form.new",
        "Google Forms",
        "Create a new form using Google Forms."
    ],
    [
        "forms.new",
        "Google Forms",
        "Create a new form using Google Forms."
    ],
    [
        "keep.new",
        "Google Keep",
        "Create a new note using Google Keep."
    ],
    [
        "note.new",
        "Google Keep",
        "Create a new note using Google Keep."
    ],
    [
        "notes.new",
        "Google Keep",
        "Create a new note using Google Keep."
    ],
    [
        "meet.new",
        "Google Meet",
        "Launch a real-time meeting from your browser using Google Meet."
    ],
    [
        "sheets.new",
        "Google Sheet",
        "Create a new spreadsheet using Google Sheets."
    ],
    [
        "spreadsheet.new",
        "Google Sheet",
        "Create a new spreadsheet using Google Sheets."
    ],
    [
        "spreadsheets.new",
        "Google Sheet",
        "Create a new spreadsheet using Google Sheets."
    ],
    [
        "site.new",
        "Google Sites",
        "Build and publish a website using Google Sites."
    ],
    [
        "sites.new",
        "Google Sites",
        "Build and publish a website using Google Sites."
    ],
    [
        "website.new",
        "Google Sites",
        "Build and publish a website using Google Sites."
    ],
    [
        "deck.new",
        "Google Slides",
        "Create an online presentation using Google Slides."
    ],
    [
        "presentation.new",
        "Google Slides",
        "Create an online presentation using Google Slides."
    ],
    [
        "slide.new",
        "Google Slides",
        "Create an online presentation using Google Slides."
    ],
    [
        "slides.new",
        "Google Slides",
        "Create an online presentation using Google Slides."
    ],
    [
        "hn.new",
        "hashnode",
        "Create a new developer blog post using hashnode."
    ],
    [
        "topic.new",
        "Higher",
        "Create a new topic to chat, call and collaborate."
    ],
    [
        "icq.new",
        "ICQ",
        "Chat with friends on ICQ."
    ],
    [
        "id.new",
        "id.new",
        "Generate test identities for testing purposes."
    ],
    [
        "if.new",
        "Ideaflow",
        "Create a new note with Ideaflow."
    ],
    [
        "freehand.new",
        "InVision",
        "Collaborate on an online whiteboard using InVision's Freehand."
    ],
    [
        "cv.new",
        "KickResume",
        "Create a standout resume with KickResume."
    ],
    [
        "linear.new",
        "Linear.app",
        "FIle a new issue in Linear's project management interface."
    ],
    [
        "list.new",
        "Liner",
        "Create a new list on Liner."
    ],
    [
        "lucidspark.new",
        "Lucid",
        "Use Lucidspark's online whiteboard."
    ],
    [
        "excel.new",
        "Microsoft Excel",
        "Create a spreadsheet using Excel."
    ],
    [
        "powerpoint.new",
        "Microsoft PowerPoint",
        "Create a new presentation using PowerPoint."
    ],
    [
        "ppt.new",
        "Microsoft PowerPoint",
        "Create a new presentation using PowerPoint."
    ],
    [
        "pptx.new",
        "Microsoft PowerPoint",
        "Create a new presentation using PowerPoint."
    ],
    [
        "sway.new",
        "Microsoft Sway",
        "Create beautiful designs using Microsoft Sway."
    ],
    [
        "docx.new",
        "Microsoft Word",
        "Create a new document using Word."
    ],
    [
        "word.new",
        "Microsoft Word",
        "Create a new document using Word."
    ],
    [
        "mindmap.new",
        "MindMeister",
        "Create a new mindmap and share your ideas on MindMeister."
    ],
    [
        "workshop.new",
        "Miro",
        "Design a workshop using Miro."
    ],
    [
        "automation.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "checklist.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "integration.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "monday.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "myweek.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "notification.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "process.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "pulse.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "status.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "update.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "view.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "widget.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "work.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "workspace.new",
        "Monday.com",
        "Create a new Monday.com board to manage tasks, projects, and team work."
    ],
    [
        "notion.new",
        "Notion",
        "Collaborate with your team using Notion's all-in-one online workspace."
    ],
    [
        "layout.new",
        "Oryx",
        "Configure your ergonomic keyboard using Oryx."
    ],
    [
        "webhook.new",
        "Pipedream",
        "Create bins and inspect events right from your browser."
    ],
    [
        "prezi.new",
        "Prezi",
        "Design beautiful presentations using Prezi."
    ],
    [
        "checkin.new",
        "Range",
        "Create check-ins with Range to stay connected with your team."
    ],
    [
        "scan.new",
        "Scan.new",
        "Scan a QR code on scan.new."
    ],
    [
        "slab.new",
        "Slab",
        "Publish a new topic on Slab."
    ],
    [
        "poll.new",
        "Slido",
        "Create a poll for your Slido meeting."
    ],
    [
        "slido.new",
        "Slido",
        "Start a new Slido meeting."
    ],
    [
        "sprout.new",
        "Sprout",
        "Create a new note on Sprout."
    ],
    [
        "move.new",
        "Supermove",
        "Move your home with Supermove."
    ],
    [
        "comments.new",
        "Tanadium Pte. Ltd.",
        "Quickly comment on any website with Tanadium."
    ],
    [
        "page.new",
        "Tettra",
        "Create a new page in your Tettra knowledge base."
    ],
    [
        "tettra.new",
        "Tettra",
        "Create a new page in your Tettra knowledge base."
    ],
    [
        "suggest.new",
        "Tettra",
        "Suggest new content for your Tettra knowledge base."
    ],
    [
        "text.new",
        "Text Editor",
        "Quickly write a note in this online text editor."
    ],
    [
        "todoist.new",
        "Todoist",
        "Create a new project plan and collaborate on tasks using Todoist."
    ],
    [
        "token.new",
        "Token",
        "Write a message that you can easily share as a link with anyone."
    ],
    [
        "venncal.new",
        "Venncal",
        "Schedule a new event."
    ],
    [
        "chat.new",
        "Vieta",
        "Start a new chatroom on Vieta."
    ],
    [
        "wall.new",
        "Walling",
        "Create a new wall with Walling or all your ideas, notes, bookmarks, inspiration, and more."
    ],
    [
        "letsmeet.new",
        "Webex",
        "Initiate a Webex meeting."
    ],
    [
        "mymeet.new",
        "Webex",
        "Initiate a Webex meeting."
    ],
    [
        "webex.new",
        "Webex",
        "Initiate a Webex meeting."
    ],
    [
        "todo.new",
        "WIP",
        "Add a new task to your WIP todo list."
    ],
    [
        "action.new",
        "Workona",
        "Set up a new workspace to manage your Chrome tabs."
    ],
    [
        "zip.new",
        "Zip Extractor",
        "Create new zip archive to easily store and share files."
    ],
    [
        "citation.new",
        "BibGuru",
        "Add a citation to your bibliography with BibGuru."
    ],
    [
        "lessonplan.new",
        "Canva",
        "Create simple lesson plans for kids using templates from Canva."
    ],
    [
        "lessonplans.new",
        "Canva",
        "Create simple lesson plans for kids using templates from Canva."
    ],
    [
        "worksheet.new",
        "Canva",
        "Create a worksheet for a classroom lesson or assignment using a template from Canva."
    ],
    [
        "code.new",
        "Code.in",
        "Learn to code with real-time interactive coding sessions."
    ],
    [
        "course.new",
        "Eduflow",
        "Design your course outline with templates from Eduflow."
    ],
    [
        "kahoot.new",
        "Kahoot",
        "Create an online quiz using Kahoot."
    ],
    [
        "quiz.new",
        "Kahoot",
        "Create an online quiz using Kahoot."
    ],
    [
        "climate.new",
        "Project drawdown",
        "Develop climate change solutions using Project drawdown."
    ],
    [
        "presenter.new",
        "Prowise",
        "Design classes and presentations with Prowise Presenter."
    ],
    [
        "quizlet.new",
        "Quizlet",
        "Create a new study set and test your knowledge using Quizlet."
    ],
    [
        "class.new",
        "Tabletwise",
        "Create a new online course on Tabletwise."
    ],
    [
        "assign.new",
        "Teacher Centric Ltd",
        "Create new assignments and homework for your students with TeacherCentric."
    ],
    [
        "notice.new",
        "TeacherCentric Ltd",
        "Add a new notice on your school calendar with TeacherCentric."
    ],
    [
        "tuition.new",
        "University of Maryland",
        "Estimate tuition for the University of Maryland."
    ],
    [
        "fundraiser.new",
        "Bonfire",
        "Design custom products to sell online with Bonfire."
    ],
    [
        "merch.new",
        "Bonfire",
        "Design custom products to sell online with Bonfire."
    ],
    [
        "shirt.new",
        "Bonfire",
        "Design custom products to sell online with Bonfire."
    ],
    [
        "shirts.new",
        "Bonfire",
        "Design custom products to sell online with Bonfire."
    ],
    [
        "tshirts.new",
        "Bonfire",
        "Design custom products to sell online with Bonfire."
    ],
    [
        "customink.new",
        "Custom Ink",
        "Create a custom t-shirt with your own art, text, and more with Custom Ink."
    ],
    [
        "tshirt.new",
        "Custom Ink",
        "Create a custom t-shirt with your own art, text, and more with Custom Ink."
    ],
    [
        "shop.new",
        "eBay",
        "Create an online shop on eBay."
    ],
    [
        "officephonebooth.new",
        "Framery",
        "Customise and order your own Framery office Phone Booth."
    ],
    [
        "catalog.new",
        "GoDigi",
        "Create a digital catalog of your products using Godigi."
    ],
    [
        "grail.new",
        "Grailed",
        "Buy and sell clothing on Grailed."
    ],
    [
        "grailed.new",
        "Grailed",
        "Buy and sell clothing on Grailed."
    ],
    [
        "mobile.new",
        "Green Panda",
        "Purchase and sell smartphones on Green Panda."
    ],
    [
        "personalloan.new",
        "ING",
        "Apply for a personal loan with ING."
    ],
    [
        "mcmaster-carr.new",
        "McMASTER-CARR",
        "Start a new industrial product order using McMASTER-CARR."
    ],
    [
        "mcmaster.new",
        "McMASTER-CARR",
        "Start a new industrial product order using McMASTER-CARR."
    ],
    [
        "mcmastercarr.new",
        "McMASTER-CARR",
        "Start a new industrial product order using McMASTER-CARR."
    ],
    [
        "mercari.new",
        "Mercari",
        "Sell your used stuff on Mercari."
    ],
    [
        "merpay.new",
        "MiroLite",
        "Create and share ideas using MicroLite's whiteboard."
    ],
    [
        "neighbor.new",
        "Neighbor",
        "List your available storage space on Neighbor."
    ],
    [
        "storage.new",
        "Neighbor",
        "List your available storage space on Neighbor."
    ],
    [
        "box.new",
        "Packlane",
        "Design custom decorated boxes for your business with Packlane."
    ],
    [
        "art.new",
        "Point101",
        "Order framed prints of your favorite photos with Point101."
    ],
    [
        "authenticate.new",
        "TheRealReal",
        "Consign luxury items with TheRealReal."
    ],
    [
        "consign.new",
        "TheRealReal",
        "Consign luxury items with TheRealReal."
    ],
    [
        "resell.new",
        "TheRealReal",
        "Consign luxury items with TheRealReal."
    ],
    [
        "sustain.new",
        "TheRealReal",
        "Consign luxury items with TheRealReal."
    ],
    [
        "drink.new",
        "Absolut Drinks",
        "Choose your favorite drink recipes and share them with your friends."
    ],
    [
        "room.new",
        "Airtime Media",
        "Start a new group hangout to watch content and video chat."
    ],
    [
        "anime.new",
        "AnimeDotNew",
        "Create a list of your favorite Anime at anime.new."
    ],
    [
        "add.new",
        "ClassCalc",
        "Explore math using ClassCalc's cheat-free calculator app."
    ],
    [
        "golf.new",
        "Compekun",
        "Create and record a new golf competition with Compekun."
    ],
    [
        "care.new",
        "Crossover Health",
        "Schedule a consultation with Crossover Health."
    ],
    [
        "crossover.new",
        "Crossover Health",
        "Schedule a consultation with Crossover Health."
    ],
    [
        "crossoverhealth.new",
        "Crossover Health",
        "Schedule a consultation with Crossover Health."
    ],
    [
        "dashlane.new",
        "Dashlane",
        "Keep your online accounts secure with Dashlane's password generator."
    ],
    [
        "password.new",
        "Dashlane",
        "Keep your online accounts secure with Dashlane's password generator."
    ],
    [
        "discord.new",
        "Discord",
        "Start a new Discord community where you can hang out and chat with friends."
    ],
    [
        "bitcoin.new",
        "eToro",
        "Buy, sell, and trade Bitcoin on eToro."
    ],
    [
        "btc.new",
        "eToro",
        "Buy, sell, and trade Bitcoin on eToro."
    ],
    [
        "eth.new",
        "eToro",
        "Buy, sell, and trade Ethereum on eToro."
    ],
    [
        "ethereum.new",
        "eToro",
        "Buy, sell, and trade Ethereum on eToro."
    ],
    [
        "tsla.new",
        "eToro",
        "Buy, sell, and trade TSLA on eToro."
    ],
    [
        "twtr.new",
        "eToro",
        "Buy, sell, and trade TWTR on eToro."
    ],
    [
        "xrp.new",
        "eToro",
        "Buy, sell, and trade Ripple on eToro."
    ],
    [
        "stocks.new",
        "ETORO GROUP LTD",
        "Open a free stock investing account on eToro."
    ],
    [
        "trade.new%20twtr.new",
        "ETORO GROUP LTD",
        "Buy and Trade stocks on eToro."
    ],
    [
        "give.new",
        "Every.org",
        "Explore, donate, and share over one million nonprofits on Every.org."
    ],
    [
        "perfume.new",
        "EveryHuman",
        "Create a unique scent based on your personality using an algorithmic perfumery."
    ],
    [
        "fairtiq.new",
        "FAIRTIQ",
        "Activate your Fairtiq ticket for Swiss public transport."
    ],
    [
        "user.new",
        "FakePersonGenerator",
        "Create a fake profile to protect your identity using FakePersonGenerator."
    ],
    [
        "brief.new",
        "gotomaxx software",
        "Generate a new invoice."
    ],
    [
        "love.new",
        "love.new Pick-Up Lines",
        "Get new pickup lines on love.new."
    ],
    [
        "reservation.new",
        "OpenTable",
        "Make a restaurant reservation with OpenTable."
    ],
    [
        "restaurant.new",
        "OpenTable",
        "Make a restaurant reservation with OpenTable."
    ],
    [
        "park.new",
        "ParkMobile",
        "List or reserve parking spots in your nearby area."
    ],
    [
        "parking.new",
        "ParkMobile",
        "List or reserve parking spots in your nearby area."
    ],
    [
        "aed.new",
        "PulsePoint",
        "Add your automated external defibrillator to the PulsePoint AED registry to help improve cardiac arrest survival."
    ],
    [
        "event.new",
        "Purpl",
        "Create and share event listings on Purpl."
    ],
    [
        "preprint.new",
        "Research Square",
        "Share your research as a preprint through Research Square."
    ],
    [
        "recipe.new",
        "Smartrecipes",
        "Add your recipe to your Smartrecipes collection."
    ],
    [
        "sms.new%20sms.new",
        "sms-now",
        "Send a SMS message to anyone in the United States."
    ],
    [
        "donation.new",
        "The Human Utility, Inc.",
        "Donate to help pay the water bill of someone at risk of having their water shut off."
    ]
];