const { useState, useEffect, useRef } = React;

// --- Translations ---
const translations = {
    en: {
        // Sidebar
        systemOnline: "System Online",
        dashboard: "Dashboard",
        production: "Production",
        inventory: "Inventory",
        settings: "Settings",
        dataEntry: "Data Entry",
        rawWood: "Raw Wood Treatment",
        efficiency: "Employee Efficiency",
        // Header
        headerTitle: "Production Overview",
        adminUser: "Admin User",
        // Dashboard Stats
        totalProduction: "Total Production",
        efficiency: "Efficiency",
        activeErrors: "Active Errors",
        annualAlerts: "Annual Alerts",
        vsLastYear: "vs last year",
        revenue: "Revenue",
        vsLastMonth: "vs last month",
        productionTrend: "Daily Production Evolution",
        recentAlerts: "Recent Alerts",
        alertBaker: "Calibration Required",
        descBaker: "Station 1 - Precision deviation > 0.5mm",
        alertMoulding: "Material Low",
        descMoulding: "Station 3 - Input hopper < 10%",
        alertFinishing: "Ventilation Error",
        descFinishing: "Station 4 - Filter obstruction",
        minsAgo: "mins ago",
        chartPlaceholder: "[Chart Visualization Output Placeholder]",
        // Production View
        activeLines: "Active Production Lines",
        newBatch: "New Batch",
        colBatchId: "Prod No",
        colClient: "Client", // New
        colTxnId: "Transaction ID",
        colProduct: "Wood Species",
        colProcess: "Process",
        colTreatment: "Treatment",
        colQty: "Quantity", // New
        colQtySqFt: "Area (sq ft)", // New
        colDate: "Date Req.", // New
        colDateTreatment: "Treatment Date",
        colSupplier: "Supplier",
        colQtyPMP: "Qty (BF)",
        colOrderNo: "Order No",
        colStockNo: "Stock No",
        colStatus: "Status",
        colProgress: "Progress",
        colEstCompletion: "Est. Completion",
        colTally: "Tally",
        colStateRaw: "State",
        colThickness: "Thickness",
        colStation: "Station Assignment",
        stationPlaceholder: "Assign Station",
        station1: "Station 1",
        station2: "Station 2",
        subcontractor: "Subcontractor / External",
        station3: "Station 3",
        station4: "Station 4",
        station5: "Station 5",
        statusRunning: "RUNNING",
        statusPaused: "PAUSED",
        statusError: "ALERT IN PROGRESS",
        statusPlanning: "PLANNING", 
        statusCompleted: "COMPLETED",
        procBaker: "Baker",
        procMoulding: "Moulding",
        procSanding1: "Sanding 1 Side",
        procSanding2: "Sanding 2 Sides",
        procStaining: "Staining",
        procBrushing: "Brushing",
        procPolishing: "Polishing",
        procOiling: "Oiling",
        procPainting: "Painting",
        // Data Entry View
        enterDataTitle: "Enter Production Data",
        labelClient: "Client Name",
        labelTxn: "Transaction No.",
        labelQty: "Quantity (pc)",
        labelProcess: "Process",
        labelWood: "Wood Species",
        labelDate: "Required Date",
        btnAddData: "Add Production Order",
        // Raw Wood Data Entry
        titleRawWood: "Raw Wood Data",
        labelOrderNo: "Order Number",
        labelSupplier: "Supplier",
        labelSpecies: "Species",
        labelQtyPMP: "Qty (BF)",
        labelState: "State / Process",
        btnAddRawWood: "Add Raw Wood Batch",
        // Misc
        settingsLoading: "Settings Module Loading...",
        // Worker View
        jobQueue: "Job Queue",
        currentJob: "Current Job",
        startJob: "START JOB",
        pauseJob: "ADD PRODUCTION",
        pauseTimerJob: "PAUSE",
        finishJob: "FINISH JOB",
        reportIssue: "Report Issue",
        issueType: "Issue Type",
        notes: "Notes",
        confirm: "Confirm",
        cancel: "Cancel",
        qtyProducedPrompt: "Enter quantity produced in this session:",
        noDate: "No Active Job",
        waitingForJob: "Waiting for assignment...",
        elapsedTime: "Elapsed Time",
        timeStarted: "Started at",
        closePallet: "Close Pallet",
        reclassifyWood: "Reclassify Wood",
        palletQty: "Pallet Quantity (PL)",
        selectGrade: "Select Grade/Classification",
        grade1: "Grade 1 - Premium",
        grade2: "Grade 2 - Select",
        grade3: "Grade 3 - Standard",
        grade4: "Grade 4 - Economy",
        gradeReject: "Reject/Waste",
        palletClosed: "Pallet Closed",
        woodReclassified: "Wood Reclassified",
        settingsMode: "Interface Mode",
        modeAdmin: "Administrator View",
        modeStation1: "Station 1 View",
        modeStation2: "Station 2 View",
        modeStation3: "Station 3 View",
        modeStation4: "Station 4 View",
        modeStation5: "Station 5 View",
        autoAssign: "Automatic Station Assignment",
        configDesc: "Map production processes to specific stations for auto-assignment.",
        processLabel: "Process Type",
        stationLabel: "Default Station",
        saveConfig: "Save Configuration",
        deleteLabel: "Delete",
        confirmDelete: "Are you sure you want to delete this item?",
        selectOption: "-- Select --",
        navDashboard: "Dashboard",
        navProduction: "Production",
        navRawWood: "Raw Wood",
        navDataEntry: "Data Entry",
        navSettings: "Settings",
        printLabel: "Print Label",
        labelRecipe: "Recipe / Process",
        labelSubOrder: "Subcontract Order",
        labelStain: "Stain Color",
        labelPaint: "Paint Color",
        acknowledge: "ACKNOWLEDGE",
        colNotes: "Notes",
        viewNotes: "View Production Notes",
        copyNotes: "Copy",
        close: "Close",
        notesCopied: "Notes copied to clipboard",
        // Inventory
        inventoryTitle: "Inventory Management",
        addStock: "Add Stock",
        colLocation: "Location",
        colGrade: "Grade",
        colState: "State",
        colDateAdded: "Date Added",
        editStock: "Edit",
        deleteStock: "Delete",
        stockDetails: "Stock Details",
        enterStockNo: "Stock Number",
        enterWood: "Wood Species",
        enterGrade: "Grade",
        enterProductCode: "Product Code",
        enterQty: "Quantity (pc)",
        enterLocation: "Location",
        enterState: "State",
        colProductCode: "Product Code",
        save: "Save",
        stockAdded: "Stock added successfully",
        stockUpdated: "Stock updated successfully",
        stockDeleted: "Stock deleted successfully",
    },
    fr: {
        // Sidebar
        systemOnline: "Système En Ligne",
        dashboard: "Tableau de Bord",
        production: "Production",
        inventory: "Inventaire",
        settings: "Paramètre",
        dataEntry: "Facturation",
        horaire: "Horaire",
        rawWood: "Traitement bois brut",
        employeeEfficiency: "Efficacité Employés",
        // Header
        headerTitle: "Tableau de production",
        adminUser: "Administrateur",
        // Dashboard Stats
        totalProduction: "Production Totale",
        efficiency: "Efficacité",
        activeErrors: "Alerte Mensuel",
        annualAlerts: "Alertes Annuelles",
        vsLastYear: "vs année précédente",
        revenue: "Revenu mensuel",
        vsLastMonth: "vs mois dernier",
        productionTrend: "Évolution de la production journalière",
        recentAlerts: "Alertes Récentes",
        alertBaker: "Requis Calibration",
        descBaker: "Poste 1 - Écart précision > 0.5mm",
        alertMoulding: "Matière Faible",
        descMoulding: "Poste 3 - Trémie entrée < 10%",
        alertFinishing: "Erreur Ventilation",
        descFinishing: "Poste 4 - Obstruction filtre",
        minsAgo: "il y a 2 min",
        chartPlaceholder: "[Espace réservé pour graphique]",
        // Production View
        activeLines: "Lignes de Production Actives",
        newBatch: "Nouveau Lot",
        colBatchId: "No Prod",
        colClient: "Client", // New
        colTxnId: "ID Transaction",
        colProduct: "Essence",
        colProcess: "Procédé",
        colTreatment: "Traitement",
        colQty: "Quantité", // New
        colQtySqFt: "Surface (pi²)", // New
        colDate: "Date Req.", // New
        colDateTreatment: "Date Traitement",
        colSupplier: "Fournisseur",
        colQtyPMP: "Qte (PMP)",
        colOrderNo: "No Commande",
        colStockNo: "No Stock",
        colStatus: "Statut",
        colProgress: "Progression",
        colEstCompletion: "Fin Estimée",
        colTally: "Tally",
        colStateRaw: "État",
        colThickness: "Épaisseur",
        colStation: "Assignation Poste",
        stationPlaceholder: "Assigner Poste",
        station1: "Poste 1",
        station2: "Poste 2",
        subcontractor: "Sous-traitant / Externe",
        station3: "Poste 3",
        station4: "Poste 4",
        station5: "Poste 5",
        statusRunning: "En Production",
        statusPaused: "En Pause",
        statusError: "Alerte en cours",
        statusPlanning: "En Planification",
        statusCompleted: "Terminé",
        procBaker: "Baker",
        procMoulding: "Moulurage",
        procSanding1: "Sablage 1 Côté",
        procSanding2: "Sablage 2 Côtés",
        procStaining: "Teinture",
        procBrushing: "Brossage",
        procPolishing: "Polissage",
        procOiling: "Huilage",
        procPainting: "Peinture",
        // Data Entry View
        enterDataTitle: "Saisir des Données de Production",
        labelClient: "Nom du Client",
        labelTxn: "No Transaction",
        labelQty: "Quantité (pc)",
        labelProcess: "Procédé",
        labelWood: "Essence de Bois",
        labelDate: "Date Requise",
        btnAddData: "Ajouter Commande",
        // Raw Wood Data Entry
        titleRawWood: "Données de bois brut",
        labelOrderNo: "Numéro de commande",
        labelSupplier: "Fournisseur",
        labelSpecies: "Essences",
        labelQtyPMP: "Qté (PMP)",
        labelState: "État",
        btnAddRawWood: "Ajouter Lot Bois Brut",
        // Misc
        settingsLoading: "Module Paramètres en chargement...",
        // Worker View
        jobQueue: "File d'Attente",
        currentJob: "Tâche Actuelle",
        startJob: "DÉMARRER",
        pauseJob: "AJOUTER DE LA PRODUCTION",
        pauseTimerJob: "PAUSE",
        finishJob: "TERMINER",
        reportIssue: "Signaler Problème",
        issueType: "Type de Problème",
        deleteLabel: "Supprimer",
        confirmDelete: "Êtes-vous sûr de vouloir supprimer cet élément ?",
        selectOption: "-- Sélectionner --",
        notes: "Notes",
        confirm: "Confirmer",
        cancel: "Annuler",
        qtyProducedPrompt: "Entrez la quantité produite dans cette session:",
        noDate: "Pas de tâche active",
        waitingForJob: "En attente d'assignation...",
        elapsedTime: "Temps Écoulé",
        timeStarted: "Commencé à",
        closePallet: "Fermer Palette",
        reclassifyWood: "Reclasser Bois",
        palletQty: "Quantité Palette (PL)",
        selectGrade: "Sélectionnez le Classement",
        grade1: "Classe 1 - Premium",
        grade2: "Classe 2 - Sélect",
        grade3: "Classe 3 - Standard",
        grade4: "Classe 4 - Économique",
        gradeReject: "Rebut/Déchet",
        palletClosed: "Palette Fermée",
        woodReclassified: "Bois Reclassé",
        settingsMode: "Mode Interface",
        modeAdmin: "Vue Administrateur",
        modeStation1: "Vue Poste 1",
        modeStation2: "Vue Poste 2",
        modeStation3: "Vue Poste 3",
        modeStation4: "Vue Poste 4",
        modeStation5: "Vue Poste 5",
        autoAssign: "Assignation Automatique",
        configDesc: "Associez les procédés de fabrication à des postes spécifiques.",
        processLabel: "Type Procédé",
        stationLabel: "Poste par Défaut",
        saveConfig: "Sauvegarder Configuration",
        subcontractor: "Sous-traitant / Externe",
        navDashboard: "Tableau de Bord",
        navProduction: "Production",
        navRawWood: "Traitement bois brut",
        navDataEntry: "Facturation",
        navSettings: "Paramètres",
        printLabel: "Imprimer Étiquette",
        labelRecipe: "Recette / Procédé",
        labelSubOrder: "Commande Sous-traitance",
        labelStain: "Couleur Teinture",
        labelPaint: "Couleur Peinture",
        acknowledge: "ACCEPTER / RECONNAÎTRE",
        colNotes: "Notes",
        viewNotes: "Voir les notes de production",
        copyNotes: "Copier",
        close: "Fermer",
        notesCopied: "Notes copiées dans le presse-papier",
        // Inventory
        inventoryTitle: "Gestion d'Inventaire",
        addStock: "Ajouter Stock",
        colLocation: "Localisation",
        colGrade: "Grade",
        colState: "État",
        colDateAdded: "Date Ajout",
        editStock: "Modifier",
        deleteStock: "Supprimer",
        stockDetails: "Détails du Stock",
        enterStockNo: "Numéro de Stock",
        enterWood: "Essence de Bois",
        enterGrade: "Grade",
        enterProductCode: "Code Produit",
        enterQty: "Quantité (pc)",
        enterLocation: "Localisation",
        enterState: "État",
        colProductCode: "Code de produit",
        save: "Enregistrer",
        stockAdded: "Stock ajouté avec succès",
        stockUpdated: "Stock mis à jour avec succès",
        stockDeleted: "Stock supprimé avec succès",
    }
};

// --- Components ---

// Simple Code 39 Barcode Generator (SVG)
const Barcode = ({ value }) => {
    const code39 = {
        '0': '101001101101', '1': '110100101011', '2': '101100101011', '3': '110110010101',
        '4': '101001101011', '5': '110100110101', '6': '101100110101', '7': '101001011011',
        '8': '110100101101', '9': '101100101101', '-': '100101011011', '*': '100101101101'
    };

    const encoded = `*${value}*`.split('').map(c => code39[c] || '101010101').join('0');

    return (
        <svg viewBox={`0 0 ${encoded.length} 100`} className="w-full h-full" preserveAspectRatio="none">
            {encoded.split('').map((bit, i) => (
                bit === '1' && <rect key={i} x={i} y="0" width="1" height="100" fill="black" />
            ))}
        </svg>
    );
};

// Fonction pour générer un code-barres SVG en Code128
const generateBarcodeSVG = (text) => {
    // Code128 simple mapping (version simplifiée)
    const width = 2; // Largeur de chaque barre
    const height = 50; // Hauteur du code-barres
    const patterns = {
        '0': '11011001100', '1': '11001101100', '2': '11001100110', '3': '10010011000',
        '4': '10010001100', '5': '10001001100', '6': '10011001000', '7': '10011000100',
        '8': '10001100100', '9': '11001001000', 'A': '11001000100', 'B': '11000100100',
        'C': '10110011100', 'D': '10011011100', 'E': '10011001110', 'F': '10111001000',
        '-': '10111000100', 'START': '11010010000', 'STOP': '11000111010'
    };
    
    // Convertir le texte en pattern de barres
    let pattern = patterns['START'];
    for (let char of text) {
        if (patterns[char]) {
            pattern += patterns[char];
        }
    }
    pattern += patterns['STOP'];
    
    // Générer le SVG
    let x = 0;
    let bars = '';
    for (let bit of pattern) {
        if (bit === '1') {
            bars += `<rect x="${x}" y="0" width="${width}" height="${height}" fill="black"/>`;
        }
        x += width;
    }
    
    const totalWidth = x;
    return `
        <svg width="${totalWidth}" height="${height + 25}" style="display: block; margin: 0 auto;">
            ${bars}
            <text x="${totalWidth/2}" y="${height + 18}" text-anchor="middle" font-family="monospace" font-size="14">${text}</text>
        </svg>
    `;
};

const SubcontractLabelModal = ({ job, t, onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4 print:p-0 print:bg-white print:static">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full print:shadow-none print:w-full">
                <div className="flex justify-between items-start mb-6 print:hidden">
                    <h3 className="text-xl font-bold text-gray-800">{t.printLabel}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-red-500">
                        <i className="fa-solid fa-times text-xl"></i>
                    </button>
                </div>

                {/* Status Badge */}
                <div className="border-4 border-black p-4 mb-4 text-center print:border-black">
                    <h1 className="text-4xl font-black uppercase mb-2">
                        {job.station === 'subcontractor' ? "SOUS-TRAITANCE" : (t[job.process] || job.process).toUpperCase()}
                    </h1>
                    {job.station === 'subcontractor' && (
                        <p className="text-xl font-bold">{t[job.process] || job.process}</p>
                    )}
                </div>

                {/* Order Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                        <span className="block font-bold uppercase text-xs">{t.colClient}</span>
                        <span className="text-lg font-bold">{job.client}</span>
                    </div>
                    <div className="text-right">
                        <span className="block font-bold uppercase text-xs">{t.labelDate}</span>
                        <span className="text-lg font-bold">{job.date || "ASAP"}</span>
                    </div>
                     <div>
                        <span className="block font-bold uppercase text-xs">{t.labelWood}</span>
                        <span className="text-lg">{job.wood}</span>
                    </div>
                    <div className="text-right">
                        <span className="block font-bold uppercase text-xs">{t.colQty}</span>
                        <span className="text-lg font-bold">{job.qty} PC</span>
                    </div>
                </div>

                {/* Barcode Area */}
                <div className="mt-8 pt-4 border-t-2 border-dashed border-gray-300">
                    <div className="text-center mb-2">
                        <span className="font-bold text-xs uppercase tracking-widest">{t.colBatchId}</span>
                        <div className="text-2xl font-black font-mono mt-1">{job.id}</div>
                    </div>
                    <div className="h-24 w-full px-8">
                        <Barcode value={job.id.toString()} />
                    </div>
                </div>

                {/* Footer instructions */}
                <div className="mt-6 text-center text-xs text-gray-500 print:hidden">
                    <p>Click Print to print this label for the subcontractor package.</p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-4 print:hidden">
                    <button 
                        onClick={() => window.print()}
                        className="flex-1 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-black transition"
                    >
                        <i className="fa-solid fa-print mr-2"></i>
                        Print Label
                    </button>
                </div>
            </div>
             <style>{`
                @media print {
                    @page { size: 4in 6in; margin: 0; }
                    body { margin: 0; }
                    body * { visibility: hidden; }
                    .absolute.inset-0.z-50, .fixed.inset-0.z-\\[100\\] { 
                        visibility: visible !important; 
                        position: absolute !important; 
                        left: 0 !important; 
                        top: 0 !important; 
                        width: 4in !important; 
                        height: 6in !important; 
                        display: flex !important; 
                        align-items: flex-start !important; 
                        justify-content: center !important; 
                        background: white !important;
                        padding: 0 !important;
                    }
                    .fixed.inset-0.z-\\[100\\] > div { 
                        visibility: visible !important; 
                        width: 3.8in !important; 
                        height: 5.8in !important; 
                        box-shadow: none !important; 
                        padding: 0.1in !important;
                        margin: 0.1in !important;
                        border-radius: 0 !important;
                    }
                    .fixed.inset-0.z-\\[100\\] * { visibility: visible !important; }
                    
                    h1 { font-size: 1.8rem !important; }
                    .text-lg { font-size: 0.8rem !important; }
                    .text-2xl { font-size: 1.2rem !important; }
                    .text-4xl { font-size: 2rem !important; }
                }
            `}</style>
        </div>
    );
};

const ProductionLabelModal = ({ job, t, onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4 print:p-0 print:bg-white print:static">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full print:shadow-none print:w-full">
                <div className="flex justify-between items-start mb-6 print:hidden">
                    <h3 className="text-xl font-bold text-gray-800">Étiquette de Production</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-red-500">
                        <i className="fa-solid fa-times text-xl"></i>
                    </button>
                </div>

                {/* Status Badge */}
                <div className="border-4 border-black p-4 mb-4 text-center print:border-black">
                    <h1 className="text-4xl font-black uppercase mb-2">TERMINÉ</h1>
                    <p className="text-xl font-bold">{t[job.process] || job.process}</p>
                </div>

                {/* Order Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                        <span className="block font-bold uppercase text-xs">Client</span>
                        <span className="text-lg font-bold">{job.client}</span>
                    </div>
                    <div className="text-right">
                        <span className="block font-bold uppercase text-xs">{t.labelDate}</span>
                        <span className="text-lg font-bold">{job.date || "ASAP"}</span>
                    </div>
                    <div>
                        <span className="block font-bold uppercase text-xs">{t.labelWood}</span>
                        <span className="text-lg">{job.wood}</span>
                    </div>
                    <div className="text-right">
                        <span className="block font-bold uppercase text-xs">Total Produit</span>
                        <span className="text-lg font-bold">{job.producedQty} / {job.qty}</span>
                    </div>
                </div>

                {/* Specific Recipe Details */}
                {(job.stainColor || job.paintColor) && (
                    <div className="mb-6 p-3 bg-gray-100 border border-gray-300 rounded text-center print:bg-white print:border-black">
                        <span className="block font-bold uppercase text-xs mb-1">
                            {job.stainColor ? t.labelStain : t.labelPaint}
                        </span>
                        <span className="text-2xl font-black">{job.stainColor || job.paintColor}</span>
                    </div>
                )}

                {/* Barcode Area */}
                <div className="mt-8 pt-4 border-t-2 border-dashed border-gray-300">
                    <div className="text-center mb-2">
                        <span className="font-bold text-xs uppercase tracking-widest">{t.labelTxn}</span>
                        <div className="text-2xl font-black font-mono mt-1">{job.txn || job.id}</div>
                    </div>

                    <div className="h-24 w-full px-8">
                        <Barcode value={job.txn || job.id.toString()} />
                    </div>
                </div>

                <div className="mt-6 flex gap-4 print:hidden">
                    <button 
                        onClick={() => window.print()}
                        className="flex-1 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-black transition"
                    >
                        <i className="fa-solid fa-print mr-2"></i>
                        Imprimer
                    </button>
                    <button 
                        onClick={onClose}
                        className="px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-lg hover:bg-gray-200 transition"
                    >
                        Fermer
                    </button>
                </div>
            </div>
             <style>{`
                @media print {
                    @page { size: 4in 6in; margin: 0; }
                    body { margin: 0; }
                    body * { visibility: hidden; }
                    .absolute.inset-0.z-50, .fixed.inset-0.z-\\[100\\] { 
                        visibility: visible !important; 
                        position: absolute !important; 
                        left: 0 !important; 
                        top: 0 !important; 
                        width: 4in !important; 
                        height: 6in !important; 
                        display: flex !important; 
                        align-items: flex-start !important; 
                        justify-content: center !important; 
                        background: white !important;
                        padding: 0 !important;
                    }
                    .fixed.inset-0.z-\\[100\\] > div { 
                        visibility: visible !important; 
                        width: 3.8in !important; 
                        height: 5.8in !important; 
                        box-shadow: none !important; 
                        padding: 0.1in !important;
                        margin: 0.1in !important;
                        border-radius: 0 !important;
                    }
                    .fixed.inset-0.z-\\[100\\] * { visibility: visible !important; }
                }
            `}</style>
        </div>
    );
};

const SubcontractPOModal = ({ job, t, onClose, onConfirm, productionData, woodTreatments, updateJobStatus }) => {
    const today = new Date().toLocaleDateString();
    
    // Vérification de sécurité
    if (!job) return null;
    
    // Générer le numéro de bon d'achat dès l'ouverture du modal
    const [poNumber] = useState(() => job.poNumber || 'PO-' + Date.now().toString().slice(-8));
    
    // State for editable fields
    const [vendor, setVendor] = useState({
        name: "SOUS-TRAITANT GÉNÉRAL",
        attention: "Département de production",
        address: "123 Rue Industriel, QC"
    });

    const [destination, setDestination] = useState({
        name: "SURFAGEST PRODUCTION", 
        address: "123 Rue de l'Industrie, Saint-Georges, QC G5Y 5C3",
        contact: "Réception Marchandise"
    });

    const [notes, setNotes] = useState(
        "Veuillez svp inclure ce bon de commande avec la facture.\nRespecter les standards de qualité Surfagest.\nEmballage sécuritaire requis pour le transport de retour."
    );

    // Mock list of vendors
    const vendors = [
        { name: "SOUS-TRAITANT GÉNÉRAL", attention: "Production", address: "123 Rue Industriel, QC", email: "production@soustraitant.com" },
        { name: "ATELIER BOIS PRO", attention: "Jean-Pierre", address: "456 Av du Bois, QC", email: "jp@atelierboispro.com" },
        { name: "PEINTURE EXPERT INC", attention: "Service commande", address: "789 Boul. Couleur, QC", email: "commandes@peintureexpert.com" }
    ];

    // Mock list of destinations
    const destinations = [
        { name: "SURFAGEST PRODUCTION", address: "123 Rue de l'Industrie, Saint-Georges, QC G5Y 5C3", contact: "Réception Marchandise" },
        { name: job?.client || "Client", address: "Adresse Client (Sur dossier)", contact: "Expédition Directe" }
    ];

    return (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4 print:p-0 print:bg-white print:static">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl w-full print:shadow-none print:w-full print:max-w-none h-[90vh] overflow-y-auto print:h-auto print:overflow-visible relative">
                <div className="flex justify-between items-start mb-6 print:hidden">
                    <h3 className="text-xl font-bold text-gray-800">Bon de Commande</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-red-500">
                        <i className="fa-solid fa-times text-xl"></i>
                    </button>
                </div>
                
                <div id="purchase-order" className="p-8 border border-gray-200 print:border-none">
                    {/* Header */}
                    <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
                        <div>
                             <h1 className="text-lg font-bold">Surfagest</h1>
                             <div className="text-sm text-gray-600">
                                <p>123 Rue de l'Industrie</p>
                                <p>Saint-Georges, QC G5Y 5C3</p>
                                <p>Tél: (418) 555-0123</p>
                             </div>
                        </div>
                        <div className="text-right">
                            <h1 className="text-4xl font-black text-gray-800 uppercase mb-2">Bon de Commande</h1>
                            <p className="text-xl font-bold text-gray-600">#{job.txn || job.id}</p>
                            <p className="text-lg font-bold text-blue-600 mt-1">PO: {poNumber}</p>
                            <p className="text-gray-500 mt-2">Date: {today}</p>
                            {/* Code-barres du numéro d'achat (PO) */}
                            <div className="mt-4" dangerouslySetInnerHTML={{ __html: generateBarcodeSVG(poNumber.toString()) }} />
                        </div>
                    </div>

                    {/* Vendor / Ship To */}
                     <div className="flex justify-between gap-12 mb-8">
                        <div className="w-1/2">
                            <h3 className="font-bold uppercase text-gray-500 text-xs tracking-wider mb-2">Fournisseur (Sous-traitant)</h3>
                            <select 
                                className="w-full mb-2 p-2 border rounded text-sm print:hidden"
                                value={vendor.name}
                                onChange={(e) => {
                                    const v = vendors.find(v => v.name === e.target.value);
                                    if(v) setVendor(v);
                                }}
                            >
                                {vendors.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
                            </select>

                            <div className="p-4 bg-gray-50 rounded border border-gray-200 h-32">
                                <p className="font-bold text-lg">{vendor.name}</p>
                                <p className="text-gray-600">{vendor.address}</p>
                                <p className="text-gray-500 text-sm mt-1">Attn: {vendor.attention}</p>
                            </div>
                        </div>
                         <div className="w-1/2">
                            <h3 className="font-bold uppercase text-gray-500 text-xs tracking-wider mb-2">Destination / Client</h3>
                             <select 
                                className="w-full mb-2 p-2 border rounded text-sm print:hidden"
                                value={destination.name}
                                onChange={(e) => {
                                    const d = destinations.find(d => d.name === e.target.value);
                                    if(d) setDestination(d);
                                }}
                            >
                                {destinations.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                            </select>

                            <div className="p-4 bg-gray-50 rounded border border-gray-200 h-32">
                                <p className="font-bold text-lg">{destination.name}</p>
                                <p className="text-gray-600">{destination.address}</p>
                                <p className="text-gray-500 text-sm mt-1">Attn: {destination.contact}</p>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <table className="w-full mb-8">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="p-3 text-left">Description</th>
                                <th className="p-3 text-left">Procédé</th>
                                <th className="p-3 text-right">Quantité</th>
                                <th className="p-3 text-right">Date Requise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3">
                                    <p className="font-bold">Lot de production #{job.id}</p>
                                    <p className="text-sm text-gray-600">Référence Transaction: {job.txn}</p>
                                    <p className="text-sm text-gray-600">Client: {job.client}</p>
                                    <p className="text-sm text-gray-600">Produit: {job.wood}</p>
                                    {(job.stainColor || job.paintColor) && (
                                        <p className="text-sm font-bold mt-1">
                                            Spécification: {job.stainColor || job.paintColor}
                                        </p>
                                    )}
                                </td>
                                <td className="p-3">
                                    {t[job.process] || job.process || 'N/A'}
                                </td>
                                <td className="p-3 text-right font-bold">{job.qty} PC</td>
                                <td className="p-3 text-right">{job.date || "ASAP"}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Notes */}
                    <div className="mb-12">
                         <h3 className="font-bold uppercase text-gray-500 text-xs tracking-wider mb-2">Notes & Instructions</h3>
                         <textarea
                            className="w-full p-4 border border-gray-200 rounded min-h-[100px] text-sm text-gray-600 print:border-none print:resize-none"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Entrez les notes et instructions..."
                         />
                    </div>

                    {/* Signature */}
                    <div className="flex justify-end mt-12 pt-12">
                        <div className="w-1/3 text-center border-t border-gray-400 pt-2">
                             <p className="font-bold text-gray-800">Autorisé par</p>
                             <p className="text-sm text-gray-500">Surfagest Production</p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-6 grid grid-cols-4 gap-4 print:hidden">
                     <button 
                        onClick={onClose}
                        className="py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition"
                    >
                        <i className="fa-solid fa-times mr-2"></i>
                        Annuler
                    </button>
                    
                    <button 
                        onClick={() => {
                            if (onConfirm) {
                                // Utiliser le numéro de bon de commande déjà généré
                                onConfirm(vendor, poNumber);
                            }
                        }}
                        className="col-span-1 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
                    >
                        <i className="fa-solid fa-check mr-2"></i>
                        Confirmer
                    </button>
                    
                    <button 
                        onClick={() => {
                            const emailSubject = `Bon de Commande #${job.txn || job.id} - Surfagest`;
                            const emailBody = `Bonjour,\n\nVeuillez trouver ci-joint le bon de commande pour:\n\nProduction: #${job.id}\nClient: ${job.client}\nProduit: ${job.wood}\nQuantité: ${job.qty} PC\nProcédé: ${t[job.process] || job.process}\n\nCordialement,\nSurfagest Production`;
                            const mailtoLink = `mailto:${vendor.email || ''}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                            window.location.href = mailtoLink;
                        }}
                        className="col-span-1 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
                    >
                        <i className="fa-solid fa-envelope mr-2"></i>
                        Envoyer Email
                    </button>
                    
                    <button 
                        onClick={() => {
                            const oldTitle = document.title;
                            document.title = `BonCommande_${job.id}.pdf`;
                            window.print();
                            setTimeout(() => document.title = oldTitle, 1000);
                        }}
                        className="col-span-1 py-3 bg-[#51aff7] text-white font-bold rounded-lg hover:bg-blue-600 transition"
                    >
                        <i className="fa-solid fa-print mr-2"></i>
                        Imprimer / PDF
                    </button>
                </div>
            </div>
             <style>{`
                @media print {
                    @page { size: auto; margin: 0; }
                    body * { visibility: hidden; }
                    .absolute.inset-0.z-50, .fixed.inset-0.z-\\[100\\] { 
                        visibility: visible !important;
                        position: absolute !important;
                        left: 0 !important;
                        top: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                        background: white !important;
                    }
                    .fixed.inset-0.z-\\[100\\] > div {
                        visibility: visible !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        padding: 0.5in !important;
                        box-shadow: none !important;
                        border: none !important;
                    }
                    .fixed.inset-0.z-\\[100\\] * { visibility: visible !important; }
                    .print\\:hidden { display: none !important; }
                }
            `}</style>
        </div>
    );
};

// Employee Efficiency View
const EmployeeEfficiencyView = ({ t, productionData }) => {
    const [employees, setEmployees] = useState(() => {
        const saved = localStorage.getItem('employees');
        if (saved) return JSON.parse(saved);
        return [];
    });
    const [editingTime, setEditingTime] = useState({});

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    const handleHoursBlur = (employeeId, timeString) => {
        // Si vide, on met à 0
        if (!timeString || timeString.trim() === '') {
            setEmployees(prev => prev.map(emp => 
                emp.id === employeeId ? { ...emp, totalClockedHours: 0 } : emp
            ));
            setEditingTime(prev => ({ ...prev, [employeeId]: undefined }));
            return;
        }
        
        let hours = 0;
        let minutes = 0;
        
        // Gérer format décimal (ex: 5.45 = 5h45)
        if (timeString.includes('.')) {
            const parts = timeString.split('.');
            hours = parseInt(parts[0]) || 0;
            minutes = parseInt(parts[1]) || 0;
        }
        // Gérer format HH:MM
        else if (timeString.includes(':')) {
            const parts = timeString.split(':');
            if (parts.length !== 2) {
                alert('Format invalide. Utilisez HH:MM (ex: 08:30) ou H.MM (ex: 5.45)');
                setEditingTime(prev => ({ ...prev, [employeeId]: undefined }));
                return;
            }
            hours = parseInt(parts[0]) || 0;
            minutes = parseInt(parts[1]) || 0;
        }
        // Si seulement des chiffres, considérer comme des heures
        else {
            hours = parseInt(timeString) || 0;
        }
        
        // Arrondir les minutes par tranches de 5 À LA HAUSSE
        if (minutes > 0) {
            minutes = Math.ceil(minutes / 5) * 5;
        }
        if (minutes >= 60) {
            hours += Math.floor(minutes / 60);
            minutes = minutes % 60;
        }
        
        // Convertir en heures décimales
        const totalHours = hours + (minutes / 60);
        
        setEmployees(prev => prev.map(emp => 
            emp.id === employeeId ? { ...emp, totalClockedHours: totalHours } : emp
        ));
        
        setEditingTime(prev => ({ ...prev, [employeeId]: undefined }));
    };

    const formatHoursToHHMM = (decimalHours) => {
        if (!decimalHours || decimalHours === 0) return '';
        const hours = Math.floor(decimalHours);
        const minutes = Math.round((decimalHours - hours) * 60);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    };

    const calculateProductionTime = (employee) => {
        // Calculer le temps passé sur les postes basé sur les logs de production
        let totalMinutes = 0;
        productionData.forEach(job => {
            if (job.logs && Array.isArray(job.logs)) {
                let lastActionTime = null;
                let isWorking = false;
                
                job.logs.forEach(log => {
                    // Vérifier si ce log appartient à cet employé
                    if (log.user === employee.name) {
                        if (log.action === 'START' || log.action === 'RESUME') {
                            lastActionTime = log.timestamp;
                            isWorking = true;
                        } else if ((log.action === 'PAUSE' || log.action === 'COMPLETE') && lastActionTime && isWorking) {
                            // Calculer le temps entre START/RESUME et PAUSE/COMPLETE
                            const duration = (log.timestamp - lastActionTime) / (1000 * 60); // Convertir ms en minutes
                            totalMinutes += duration;
                            isWorking = false;
                        }
                    }
                });
            }
        });
        return totalMinutes / 60; // Convertir minutes en heures
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Efficacité des Employés</h2>
                <button
                    onClick={() => {
                        const name = prompt("Nom de l'employé:");
                        if (!name) return;
                        const nip = prompt("NIP (4 chiffres):");
                        if (!nip || nip.length !== 4) {
                            alert("Le NIP doit contenir exactement 4 chiffres");
                            return;
                        }
                        
                        // Vérifier si le NIP existe déjà
                        if (employees.find(e => e.nip === nip)) {
                            alert("Ce NIP existe déjà");
                            return;
                        }
                        
                        const maxId = Math.max(...employees.map(e => e.id), 0);
                        const newEmployee = {
                            id: maxId + 1,
                            name: name,
                            nip: nip,
                            totalClockedHours: 0
                        };
                        setEmployees(prev => [...prev, newEmployee]);
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-bold"
                >
                    <i className="fa fa-plus mr-2"></i>
                    Ajouter un employé
                </button>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="p-4 text-left">Employé</th>
                            <th className="p-4 text-center">Heures Pointées</th>
                            <th className="p-4 text-center">Heures Production</th>
                            <th className="p-4 text-center">Efficacité</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp => {
                            const productionHours = calculateProductionTime(emp);
                            const efficiency = emp.totalClockedHours > 0 
                                ? ((productionHours / emp.totalClockedHours) * 100).toFixed(1)
                                : 0;
                            
                            return (
                                <tr key={emp.id} className="border-b hover:bg-gray-50">
                                    <td className="p-4 font-semibold">{emp.name}</td>
                                    <td className="p-4 text-center">
                                        <input
                                            type="text"
                                            placeholder="HH:MM"
                                            value={editingTime[emp.id] !== undefined ? editingTime[emp.id] : formatHoursToHHMM(emp.totalClockedHours)}
                                            onChange={(e) => setEditingTime(prev => ({ ...prev, [emp.id]: e.target.value }))}
                                            onBlur={(e) => handleHoursBlur(emp.id, e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.target.blur();
                                                    handleHoursBlur(emp.id, e.target.value);
                                                }
                                            }}
                                            className="w-24 px-3 py-2 border border-gray-300 rounded text-center font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <span className="ml-2 text-gray-600 text-xs">(5 min)</span>
                                    </td>
                                    <td className="p-4 text-center font-mono text-gray-700">
                                        {productionHours.toFixed(2)} h
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                                            efficiency >= 80 ? 'bg-green-100 text-green-800' :
                                            efficiency >= 60 ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {efficiency}%
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <button
                                            onClick={() => {
                                                const newName = prompt("Nouveau nom:", emp.name);
                                                if (newName && newName !== emp.name) {
                                                    setEmployees(prev => prev.map(e => 
                                                        e.id === emp.id ? { ...e, name: newName } : e
                                                    ));
                                                }
                                            }}
                                            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition mr-2"
                                            title="Modifier"
                                        >
                                            <i className="fa fa-edit"></i>
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (confirm(`Supprimer ${emp.name} ?`)) {
                                                    setEmployees(prev => prev.filter(e => e.id !== emp.id));
                                                }
                                            }}
                                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                            title="Supprimer"
                                        >
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                    <i className="fa fa-info-circle mr-2"></i>
                    Comment fonctionne le calcul d'efficacité ?
                </h3>
                <p className="text-blue-800">
                    <strong>Heures Pointées :</strong> Entrer le temps au format HH:MM (ex: 08:30) ou H.MM (ex: 5.45). Les minutes sont arrondies par tranches de 5 min.<br/>
                    <strong>Heures Production :</strong> Temps actif passé sur les postes de travail (calculé automatiquement).<br/>
                    <strong>Efficacité :</strong> (Heures Production / Heures Pointées) × 100
                </p>
            </div>
        </div>
    );
};

// --- Horaire View (standalone page with dxScheduler) ---
const HoraireView = ({ t }) => {
    const categories = [
        { id: 1, text: 'Installation', color: '#4CAF50' },
        { id: 2, text: 'Livraison', color: '#2196F3' },
        { id: 3, text: 'Cueillette', color: '#FF9800' },
        { id: 4, text: 'RDV', color: '#9C27B0' }
    ];
    const [events, setEvents] = useState(() => {
        try { return JSON.parse(localStorage.getItem('schedulerEvents') || '[]'); } catch { return []; }
    });
    const [filterCats, setFilterCats] = useState([1, 2, 3, 4]);
    const schedulerContainerRef = useRef(null);
    const schedulerInstanceRef = useRef(null);

    // Refresh from localStorage periodically
    useEffect(() => {
        const interval = setInterval(() => {
            try {
                const fresh = JSON.parse(localStorage.getItem('schedulerEvents') || '[]');
                setEvents(fresh);
            } catch {}
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const now = new Date();
    const totalToday = events.filter(ev => new Date(ev.startDate).toDateString() === now.toDateString()).length;
    const totalThisWeek = events.filter(ev => {
        const d = new Date(ev.startDate);
        const weekEnd = new Date(now); weekEnd.setDate(weekEnd.getDate() + 7);
        return d >= now && d <= weekEnd;
    }).length;
    const totalUpcoming = events.filter(ev => new Date(ev.startDate) >= now).length;

    // Build / update scheduler
    useEffect(() => {
        if (!schedulerContainerRef.current) return;
        const el = schedulerContainerRef.current;

        if (schedulerInstanceRef.current) {
            // Just update the data source
            try {
                const dsItems = events
                    .filter(ev => filterCats.includes(ev.categoryId))
                    .map(ev => ({ ...ev, id: ev.id || Date.now() + Math.random(), startDate: new Date(ev.startDate), endDate: new Date(ev.endDate) }));
                schedulerInstanceRef.current.option('dataSource', new DevExpress.data.DataSource({
                    store: new DevExpress.data.ArrayStore({ data: dsItems, key: 'id' })
                }));
            } catch {}
            return;
        }

        const dsItems = events
            .filter(ev => filterCats.includes(ev.categoryId))
            .map(ev => ({ ...ev, id: ev.id || Date.now() + Math.random(), startDate: new Date(ev.startDate), endDate: new Date(ev.endDate) }));

        try {
            const scheduler = new DevExpress.ui.dxScheduler(el, {
                dataSource: new DevExpress.data.DataSource({
                    store: new DevExpress.data.ArrayStore({ data: dsItems, key: 'id' })
                }),
                views: [
                    { type: 'day', name: 'Jour' },
                    { type: 'week', name: 'Semaine' },
                    { type: 'month', name: 'Mois' },
                    { type: 'agenda', name: 'Agenda', agendaDuration: 30 }
                ],
                currentView: 'week',
                currentDate: new Date(),
                startDayHour: 6,
                endDayHour: 20,
                height: 'calc(100vh - 280px)',
                editing: { allowAdding: false, allowUpdating: false, allowDeleting: false },
                resources: [{
                    fieldExpr: 'categoryId',
                    dataSource: categories,
                    label: 'Catégorie'
                }],
                appointmentTooltipTemplate: (data, container) => {
                    const ev = data.appointmentData || data;
                    const cat = categories.find(c => c.id === ev.categoryId);
                    const startD = ev.startDate ? new Date(ev.startDate) : null;
                    const endD = ev.endDate ? new Date(ev.endDate) : null;
                    const fmt = (d) => d ? d.toLocaleDateString('fr-CA') + ' ' + d.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit' }) : '—';
                    const html = `
                        <div style="padding:12px;min-width:280px;">
                            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                                ${cat ? `<span style="background:${cat.color}20;color:${cat.color};font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;">${cat.text}</span>` : ''}
                                <span style="font-weight:700;font-size:14px;color:#1f2937;">${ev.text || '—'}</span>
                            </div>
                            <div style="font-size:12px;color:#6b7280;line-height:1.8;">
                                <div><i class="fa fa-clock" style="width:16px;color:#9ca3af;"></i> ${fmt(startD)} → ${fmt(endD)}</div>
                                ${ev.noTransaction ? `<div><i class="fa fa-hashtag" style="width:16px;color:#9ca3af;"></i> Transaction: <strong>${ev.noTransaction}</strong></div>` : ''}
                                ${ev.vendeur ? `<div><i class="fa fa-user" style="width:16px;color:#9ca3af;"></i> ${ev.vendeur}</div>` : ''}
                                ${ev.adresseLivraison ? `<div><i class="fa fa-map-marker-alt" style="width:16px;color:#9ca3af;"></i> ${ev.adresseLivraison}</div>` : ''}
                            </div>
                        </div>`;
                    $(container).html(html);
                }
            });
            schedulerInstanceRef.current = scheduler;
        } catch (err) {
            console.error('HoraireView scheduler error:', err);
        }

        return () => {
            if (schedulerInstanceRef.current) {
                try { schedulerInstanceRef.current.dispose(); } catch {}
                schedulerInstanceRef.current = null;
            }
        };
    }, []);

    // Update data when events or filters change (after mount)
    useEffect(() => {
        if (!schedulerInstanceRef.current) return;
        try {
            const dsItems = events
                .filter(ev => filterCats.includes(ev.categoryId))
                .map(ev => ({ ...ev, id: ev.id || Date.now() + Math.random(), startDate: new Date(ev.startDate), endDate: new Date(ev.endDate) }));
            schedulerInstanceRef.current.option('dataSource', new DevExpress.data.DataSource({
                store: new DevExpress.data.ArrayStore({ data: dsItems, key: 'id' })
            }));
        } catch {}
    }, [events, filterCats]);

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    <i className="fa fa-calendar-alt mr-2 text-[#51aff7]"></i>Horaire
                </h2>
                <span className="text-sm text-gray-400">{events.length} entrée(s) au total</span>
            </div>

            {/* Stats + filters row */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex gap-3">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-2 flex items-center gap-2">
                        <i className="fa fa-calendar-day text-blue-500"></i>
                        <span className="text-lg font-bold text-gray-800">{totalToday}</span>
                        <span className="text-[10px] text-gray-400 uppercase">Aujourd'hui</span>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-2 flex items-center gap-2">
                        <i className="fa fa-calendar-week text-green-500"></i>
                        <span className="text-lg font-bold text-gray-800">{totalThisWeek}</span>
                        <span className="text-[10px] text-gray-400 uppercase">7 jours</span>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-2 flex items-center gap-2">
                        <i className="fa fa-clock text-purple-500"></i>
                        <span className="text-lg font-bold text-gray-800">{totalUpcoming}</span>
                        <span className="text-[10px] text-gray-400 uppercase">À venir</span>
                    </div>
                </div>
                <div className="h-6 border-l border-gray-200"></div>
                <div className="flex gap-2">
                    {categories.map(cat => {
                        const active = filterCats.includes(cat.id);
                        const count = events.filter(ev => ev.categoryId === cat.id).length;
                        return (
                            <button key={cat.id} onClick={() => setFilterCats(prev => active ? prev.filter(c => c !== cat.id) : [...prev, cat.id])}
                                className={`px-3 py-1.5 rounded-full text-xs font-bold transition border ${active ? 'text-white border-transparent' : 'bg-gray-100 text-gray-400 border-gray-200'}`}
                                style={active ? { backgroundColor: cat.color } : {}}
                            >
                                {cat.text} ({count})
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* DevExtreme Scheduler */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div ref={schedulerContainerRef} style={{ minHeight: '500px' }}></div>
            </div>
        </div>
    );
};

// Sidebar, Header, StatCard implementation (Simplified for size, assuming user has copy)
const Sidebar = ({ activeTab, setActiveTab, t }) => (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 p-4">
        <h1 className="text-xl font-bold mb-8">Dashboard</h1>
        {['dashboard', 'production', 'inventory', 'dataEntry', 'horaire', 'employeeEfficiency', 'settings'].map(id => (
            <button key={id} onClick={() => setActiveTab(id)} className={`block w-full text-left p-3 rounded mb-2 ${activeTab === id ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
                {t[id]}
            </button>
        ))}
    </aside>
);

const Header = ({ t, lang, setLang }) => (
    <header className="h-16 bg-white shadow flex items-center justify-between px-8 fixed left-64 right-0 top-0 z-10">
        <h2 className="font-bold text-xl">{t.headerTitle}</h2>
    </header>
);

const StatCard = ({ title, value, change, icon, colorClass, t }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            {icon && <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass || 'bg-gray-100 text-gray-400'}`}><i className={`fa-solid ${icon}`}></i></div>}
        </div>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        {change && <p className={`text-xs font-semibold mt-1 ${change.startsWith('+') ? 'text-green-500' : change.startsWith('-') ? 'text-red-500' : 'text-gray-400'}`}>{change} {t.vsLastMonth || ''}</p>}
    </div>
);


const DashboardView = ({ t, productionData, customProcesses = [], woodTreatments = [] }) => {
    // Process Colors Configuration
    const processColors = {
        'procBaker': 'bg-blue-500',
        'procSanding1': 'bg-yellow-400', 
        'procSanding2': 'bg-orange-500', 
        'procMoulding': 'bg-purple-500', 
        'procStaining': 'bg-red-500', 
        'procBrushing': 'bg-amber-700',
        'procPolishing': 'bg-teal-400',
        'procOiling': 'bg-lime-500',
        'procPainting': 'bg-green-500' 
    };

    const allProcessKeys = [
        ...Object.keys(processColors),
        ...customProcesses.map(p => p.id),
        ...woodTreatments.map(p => p.id)
    ];

    const getProcColor = (id) => processColors[id] || 'bg-indigo-500';

    // Live Clock State
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Date Logic Shared across stats
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const prevDate = new Date();
    prevDate.setMonth(currentMonth - 1);
    const prevMonth = prevDate.getMonth();
    const prevYear = prevDate.getFullYear();

    // Calculate Monthly Stats for Comparison Chart
    const getMonthlyStats = () => {
        const currentStats = {};
        const prevStats = {};
        
        allProcessKeys.forEach(k => { currentStats[k] = 0; prevStats[k] = 0; });

        productionData.forEach(item => {
            const proc = item.process;
            if (!proc || !allProcessKeys.includes(proc)) return;

            let loggedQty = 0;
            // Strategy 1: Accumulate from Logs
            if (item.logs && Array.isArray(item.logs)) {
                item.logs.forEach(log => {
                    if (log.timestamp && log.qty != null) {
                        const q = parseInt(log.qty);
                        if (!isNaN(q)) {
                            loggedQty += q;
                            const d = new Date(log.timestamp);
                            if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) currentStats[proc] += q;
                            else if (d.getMonth() === prevMonth && d.getFullYear() === prevYear) prevStats[proc] += q;
                        }
                    }
                });
            }

            // Strategy 2: Handle Legacy/Unlogged Quantity
            const totalProduced = parseInt(item.producedQty || 0);
            const remainder = totalProduced - loggedQty;

            if (remainder > 0) {
                let dateObj = new Date(); 
                if (item.assignedAt) {
                     const parts = item.assignedAt.split(/[\s/:]+/); 
                     if (parts.length >= 3) {
                         const p0 = parseInt(parts[0]);
                         if (p0 > 12) dateObj = new Date(parts[2], parts[1] - 1, parts[0]); 
                         else dateObj = new Date(parts[2], parts[0] - 1, parts[1]); 
                     }
                }

                if (dateObj.getMonth() === currentMonth && dateObj.getFullYear() === currentYear) currentStats[proc] += remainder;
                else if (dateObj.getMonth() === prevMonth && dateObj.getFullYear() === prevYear) prevStats[proc] += remainder;
            }
        });

        return { currentStats, prevStats };
    };

    const { currentStats, prevStats } = getMonthlyStats();

    // Calculate Totals for Top Cards
    const totalQtyCurrentMonth = Object.values(currentStats).reduce((a, b) => a + b, 0);
    const totalQtyPrevMonth = Object.values(prevStats).reduce((a, b) => a + b, 0);
    const prodDiff = totalQtyCurrentMonth - totalQtyPrevMonth;

    const efficiencyPct = totalQtyPrevMonth > 0 
        ? ((totalQtyCurrentMonth - totalQtyPrevMonth) / totalQtyPrevMonth * 100)
        : (totalQtyCurrentMonth > 0 ? 100 : 0);
    const efficiencyLabel = (efficiencyPct >= 0 ? "+" : "") + efficiencyPct.toFixed(1) + "%";
    
    const maxMonthlyVal = Math.max(...Object.values(currentStats), ...Object.values(prevStats), 10);

    const errorsCurrentMonth = productionData.filter(item => {
        if (!item.issueTimestamp) return false;
        const d = new Date(item.issueTimestamp);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    }).length;

    const errorsPrevMonth = productionData.filter(item => {
        if (!item.issueTimestamp) return false;
        const d = new Date(item.issueTimestamp);
        return d.getMonth() === prevMonth && d.getFullYear() === prevYear;
    }).length;

    const errorsDiff = errorsCurrentMonth - errorsPrevMonth;
    const errorsChange = errorsPrevMonth > 0 
        ? ((errorsDiff / errorsPrevMonth) * 100).toFixed(1) + "%" 
        : (errorsCurrentMonth > 0 ? "+100%" : "0%");
    const errorsChangeLabel = errorsDiff >= 0 ? "+" + errorsDiff : errorsDiff.toString();

    // Calcul des alertes annuelles vs année précédente
    const alertsCurrentYear = productionData.filter(item => {
        if (!item.issueTimestamp) return false;
        const d = new Date(item.issueTimestamp);
        return d.getFullYear() === currentYear;
    }).length;

    const alertsPrevYear = productionData.filter(item => {
        if (!item.issueTimestamp) return false;
        const d = new Date(item.issueTimestamp);
        return d.getFullYear() === currentYear - 1;
    }).length;

    const alertsYearDiff = alertsCurrentYear - alertsPrevYear;
    const alertsYearChangeLabel = alertsYearDiff >= 0 ? "+" + alertsYearDiff : alertsYearDiff.toString();

    // Calcul du revenu basé sur la production (1.60$ par PC)
    const pricePerPC = 1.60;
    const revenueCurrentMonth = totalQtyCurrentMonth * pricePerPC;
    const revenuePrevMonth = totalQtyPrevMonth * pricePerPC;
    const revenueDiff = revenueCurrentMonth - revenuePrevMonth;
    const revenueChange = revenuePrevMonth > 0 
        ? ((revenueDiff / revenuePrevMonth) * 100).toFixed(1) + "%" 
        : (revenueCurrentMonth > 0 ? "+100%" : "0%");
    const revenueLabel = revenueCurrentMonth >= 1000 
        ? "$" + (revenueCurrentMonth / 1000).toFixed(1) + "k"
        : "$" + revenueCurrentMonth.toFixed(0);
    const revenueChangeLabel = (revenueDiff >= 0 ? "+" : "") + revenueChange;

    const allAlerts = productionData
        .filter(item => item.issueDescription)
        .sort((a, b) => (b.issueTimestamp || 0) - (a.issueTimestamp || 0));
        
    const recentAlertsDisplay = allAlerts.map(alert => ({
        title: `Problème Lot #${alert.id}`,
        desc: alert.issueDescription,
        time: alert.issueTimestamp ? new Date(alert.issueTimestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) + ' ' + new Date(alert.issueTimestamp).toLocaleDateString() : "À l'instant",
        color: (!alert.issueResolved) ? "text-red-500" : "text-green-500",
        icon: (!alert.issueResolved) ? "fa-circle-exclamation" : "fa-circle-check",
        resolved: alert.issueResolved
    }));

    return (
    <div className="space-y-6">
        {/* Dashboard Header Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
             <div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <i className="fa-solid fa-chart-line text-[#51aff7]"></i>
                    {t.dashboard}
                </h2>
                <p className="text-sm text-gray-400 font-medium mt-1">Vue d'ensemble de la production</p>
             </div>
             
             <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border border-gray-200 mt-4 md:mt-0 shadow-inner">
                <div className="flex items-center gap-2 text-gray-600 font-bold px-2 text-sm border-r border-gray-300">
                    <i className="fa-regular fa-calendar text-[#51aff7]"></i>
                    <span className="capitalize">{currentTime.toLocaleDateString(undefined, {weekday: 'long', day: 'numeric', month: 'long'})}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-mono font-bold px-2 text-sm">
                    <i className="fa-regular fa-clock text-[#51aff7]"></i>
                    {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <StatCard t={t} title={t.totalProduction} value={totalQtyCurrentMonth.toString() + " PC"} change={(prodDiff >= 0 ? "+" : "") + prodDiff + " PC"} icon="fa-box" colorClass="bg-[#51aff7]/10 text-[#51aff7]" />
            <StatCard t={t} title={t.efficiency} value={efficiencyLabel} change="" icon="fa-tachometer-alt" colorClass={efficiencyPct >= 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"} />
            <StatCard t={t} title={t.activeErrors} value={errorsCurrentMonth.toString()} change={errorsChangeLabel} icon="fa-exclamation-triangle" colorClass={errorsCurrentMonth > 0 ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-400"} />
            <StatCard t={t} title={t.annualAlerts || "Alertes Annuelles"} value={alertsCurrentYear.toString()} change={alertsYearChangeLabel} icon="fa-calendar-xmark" colorClass={alertsCurrentYear > alertsPrevYear ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"} />
            <StatCard t={t} title={t.revenue} value={revenueLabel} change={revenueChangeLabel} icon="fa-dollar-sign" colorClass="bg-purple-100 text-purple-600" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">{t.productionTrend}</h3>
                <div className="flex gap-4 mb-4 text-xs font-medium flex-wrap">
                     <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-500"></span><span className="text-gray-600 font-bold">{t.currentMonth || "Ce mois"}</span></div>
                     <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-gray-300"></span><span className="text-gray-600 font-bold">{t.prevMonth || "Mois passé"}</span></div>
                </div>

                <div className="h-64 bg-gray-50 rounded p-4 flex items-end justify-around gap-2 overflow-x-auto">
                    {allProcessKeys.map(procKey => {
                        const curVal = currentStats[procKey] || 0;
                        const prevVal = prevStats[procKey] || 0;
                        const curHeight = maxMonthlyVal > 0 ? (curVal / maxMonthlyVal) * 100 : 0;
                        const prevHeight = maxMonthlyVal > 0 ? (prevVal / maxMonthlyVal) * 100 : 0;

                        return (
                             <div key={procKey} className="flex-1 flex flex-col items-center gap-2 group min-w-[60px] h-full">
                                <div className="flex items-end justify-center w-full gap-1 flex-1 relative">
                                    <div className="w-1/3 bg-gray-300 rounded-t transition-all duration-1000 relative group-hover:bg-gray-400" style={{height: `${prevHeight}%`}}></div>
                                    <div className={`w-1/3 ${getProcColor(procKey)} rounded-t transition-all duration-1000 relative hover:brightness-110`} style={{height: `${curHeight}%`}}>
                                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-gray-800 font-bold">{curVal}</span>
                                    </div>
                                </div>
                                <span className="text-[10px] uppercase font-bold text-gray-500 truncate w-full text-center" title={t[procKey] || procKey}>
                                    {t[procKey] ? (t[procKey].length > 10 ? t[procKey].substring(0,8)+'...' : t[procKey]) : procKey}
                                </span>
                             </div>
                        );
                    })}
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">{t.recentAlerts}</h3>
                <div className="space-y-4">
                    {recentAlertsDisplay.map((alert, i) => (
                        <div key={i} className={`flex gap-4 items-start p-3 rounded-lg transition ${!alert.resolved ? 'bg-red-50 border-l-4 border-red-500' : 'hover:bg-gray-50'}`}>
                            <i className={`fa-solid ${alert.icon} ${alert.color} mt-1`}></i>
                            <div>
                                <h4 className={`text-sm font-bold ${!alert.resolved ? 'text-red-800' : 'text-gray-800'}`}>{alert.title}</h4>
                                <p className={`text-xs ${!alert.resolved ? 'text-red-600' : 'text-gray-500'}`}>{alert.desc}</p>
                                <span className="text-[10px] text-gray-400">{alert.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};


const processOrder = [
    { id: 'procBaker', label: 'Baker' },
    { id: 'procSanding1', label: 'Sablage (1)' },
    { id: 'procSanding2', label: 'Sablage (2)' },
    { id: 'procMoulding', label: "Moulurage" },
    { id: 'procStaining', label: 'Teinture' },
    { id: 'procBrushing', label: 'Brossage' },
    { id: 'procPolishing', label: 'Polissage' },
    { id: 'procOiling', label: 'Huilage' },
    { id: 'procPainting', label: 'Peinture' },
];

const stationDefinitions = [
    { id: 'station1', labelKey: 'station1', icon: 'fa-scissors' },
    { id: 'station2', labelKey: 'station2', icon: 'fa-layer-group' },
    { id: 'station3', labelKey: 'station3', icon: 'fa-shapes' },
    { id: 'station4', labelKey: 'station4', icon: 'fa-paint-roller' },
    { id: 'station5', labelKey: 'station5', icon: 'fa-wrench' },
];

// --- Production View with DevExtreme ---
const ProductionView = ({ t, productionData, assignStation, updateJobStatus, deleteBatch, customProcesses = [], isRawWood = false, woodTreatments = [], stationConfig = {}, inventory = [], deductFromInventory = () => {}, inventoryStates = [] }) => {
    const [printingJob, setPrintingJob] = useState(null);
    const [printingPO, setPrintingPO] = useState(null);
    const [activeStatuses, setActiveStatuses] = useState(['planning', 'running', 'paused', 'error', 'completed']);
    const [filterProcess, setFilterProcess] = useState('all');
    const [showAddStock, setShowAddStock] = useState(false);
    const dateInputRef = useRef(null);
    const wantedQtyRef = useRef(null);
    const [editingProductionId, setEditingProductionId] = useState(null);
    const [newStock, setNewStock] = useState({ client: 'Prod. Inventaire', isInventoryProd: true, wood: '', grade: '', qty: '', processes: [], date: '', location: '', state: '' });
    const [selectedStocks, setSelectedStocks] = useState([]);  // Liste des stocks sélectionnés
    // Liste des produits/essences uniques déjà présents
    const existingWoods = Array.from(new Set(productionData.map(item => item.wood).filter(Boolean)));
    const [isCustomWood, setIsCustomWood] = useState(false);
    const [stockSearch, setStockSearch] = useState('');
    const [stockStateFilter, setStockStateFilter] = useState('');
    const [productCodeFilter, setProductCodeFilter] = useState('');
    const [productCodeStateFilter, setProductCodeStateFilter] = useState('');
    const [showProductCodeSuggestions, setShowProductCodeSuggestions] = useState(false);
    const [productCodeSearch, setProductCodeSearch] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [refreshTick, setRefreshTick] = useState(0);
    
    // Charger l'ordre des processus depuis localStorage
    const processOrder = React.useMemo(() => {
        const saved = localStorage.getItem('processOrder');
        return saved ? JSON.parse(saved) : [];
    }, []);

    // Liste de base des processus standards
    const standardProcesses = [
        { id: 'procBaker', label: t.procBaker },
        { id: 'procMoulding', label: t.procMoulding },
        { id: 'procSanding1', label: t.procSanding1 },
        { id: 'procSanding2', label: t.procSanding2 },
        { id: 'procStaining', label: t.procStaining },
        { id: 'procBrushing', label: t.procBrushing },
        { id: 'procPolishing', label: t.procPolishing },
        { id: 'procOiling', label: t.procOiling },
        { id: 'procPainting', label: t.procPainting },
        ...customProcesses
    ];

    // Trier les processus selon l'ordre sauvegardé
    const sortedProcesses = processOrder.length > 0
        ? processOrder.map(id => standardProcesses.find(p => p.id === id)).filter(Boolean)
        : standardProcesses;

    // Combine standard and custom processes for dropdown
    const allProcesses = isRawWood ? woodTreatments : sortedProcesses;

    // Assurer l'exposition des fonctions globales pour les cellTemplates DevExtreme
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.deleteBatch = deleteBatch;
            window.updateJobStatus = updateJobStatus;
            window.stationConfig = stationConfig;
        }
    }, [deleteBatch, updateJobStatus, stationConfig]);

    // Alerts
    const alerts = productionData.filter(item => item.hasIssue || (item.status === 'error' && item.issueDescription));

    // Listen to global data update events to force a local refresh cycle
    useEffect(() => {
        const handler = () => {
            setRefreshTick((v) => v + 1);
            try {
                if (gridInstanceRef && gridInstanceRef.current && typeof gridInstanceRef.current.refresh === 'function') {
                    gridInstanceRef.current.refresh();
                }
            } catch (_) {}
        };
        try { window.addEventListener('productionDataUpdated', handler); } catch (_) {}
        return () => { try { window.removeEventListener('productionDataUpdated', handler); } catch (_) {} };
    }, []);

    // Filter Logic
        const filteredData = productionData.filter(item => {
           let visualStatus = 'planning';
           if (item.status === 'completed' || (item.progress === 100)) visualStatus = 'completed';
           else if (item.status === 'running' || (item.steps && item.steps.length > 1 && item.stepIndex > 0)) visualStatus = 'running';
           else if (item.status === 'paused') visualStatus = 'paused';
           else if (item.status === 'error' && !item.issueResolved) visualStatus = 'error';

           if (!activeStatuses.includes(visualStatus)) return false;
           if (filterProcess !== 'all' && item.process !== filterProcess) return false;

           // Strict Separation Logic
           const isWoodTreat = woodTreatments.some(wt => wt.id === item.process);

           if (isRawWood) {
               // If this is Raw Wood View, ONLY show wood treatments
               if(!isWoodTreat) return false;
           } else {
               // If this is Standard Production View, HIDE wood treatments
               if(isWoodTreat) return false;
           }

           return true;
        }).sort((a, b) => {
            // Trier: les productions terminées à la fin
            const aCompleted = a.status === 'completed' ? 1 : 0;
            const bCompleted = b.status === 'completed' ? 1 : 0;
            return aCompleted - bCompleted;
        });

    
    const gridContainerRef = useRef(null);
    const gridInstanceRef = useRef(null);


    // Initial Grid Setup
    useEffect(() => {
        if (!gridContainerRef.current) return;

        // Helper to render React components in DevExtreme cells
        const renderInCell = (container, component) => {
             // Clear any existing content
             container.innerHTML = '';
             // Create a dedicated root element
             const rootSpan = document.createElement('div');
             rootSpan.style.height = "100%";
             container.appendChild(rootSpan);
             
             try {
                 const root = ReactDOM.createRoot(rootSpan);
                 root.render(component);
                 // Store root for potential cleanup (though grid disposes containers)
                 container._reactRoot = root;
             } catch (e) {
                 console.error("React Render Error:", e);
                 container.innerText = "Error";
             }
        };

        // Fixer les valeurs pour éviter les bugs de closure DevExtreme
        const WT = Array.isArray(woodTreatments) ? woodTreatments.slice() : [];
        const TT = { ...t };
        // Pour affichage du label process (Assignation Automatique)
        const allProc = isRawWood ? WT : [...processOrder, ...customProcesses];
        const columns = [
            {
                caption: t.colStockNo || 'No. Stock',
                dataField: 'stockNo',
                allowSorting: true
            },
            {
                caption: 'Trans/Prod',
                dataField: 'txn',
                allowSorting: true
            },
            {
                dataField: 'client',
                caption: t.colClient,
                allowSorting: true,
                // Removed template to force data show
            },
            {
                dataField: 'wood',
                caption: t.colProduct,
                // Removed template to force data show
            },
            {
                dataField: 'qty',
                caption: 'Qte voulu',
                dataType: 'number',
                width: 120
            },
            {
                dataField: 'inventoryAllocated',
                caption: 'Inventaire alloué',
                width: 140,
                dataType: 'number',
                allowEditing: false,
                allowFiltering: true,
                allowSearch: true,
                calculateCellValue: (rowData) => {
                    if (rowData.inventoryAllocated !== undefined) return rowData.inventoryAllocated;
                    const stockDetails = rowData.stockDetails || [];
                    if (stockDetails.length > 0) {
                        return stockDetails.reduce((sum, s) => sum + (Number(s.qty) || 0), 0);
                    }
                    return rowData.qty || 0;
                }
            },
            {
                dataField: 'unit',
                caption: 'Unité',
                width: 80,
                allowEditing: false,
                calculateCellValue: (rowData) => {
                    // Afficher l'unité du produit voulu si disponible
                    if (rowData.targetProductInfo && rowData.targetProductInfo.unite) {
                        return rowData.targetProductInfo.unite;
                    }
                    return 'PC';
                }
            },
            {
                dataField: 'date',
                caption: t.labelDate,
                dataType: 'date',
                width: 120
            },
            {
                dataField: 'width',
                caption: 'Largeur',
                dataType: 'number',
                width: 90
            },
            {
                dataField: 'thickness',
                caption: 'Épaisseur',
                dataType: 'number',
                width: 90
            },
            {
                dataField: 'process',
                caption: t.colProcess,
                width: 250,
                allowEditing: false,
                cellTemplate: (container, options) => {
                    const item = options.data;
                    // Helper to get real DOM element
                    const getDomContainer = (c) => {
                        if (c instanceof Element) return c;
                        if (c && c.get && typeof c.get === 'function') return c.get(0);
                        if (Array.isArray(c) && c[0] instanceof Element) return c[0];
                        return null;
                    };
                    const domContainer = getDomContainer(container);
                    if (!domContainer) return;
                    domContainer.innerHTML = '';
                    
                    // Si le job est terminé, afficher "Terminé"
                    if (item.status === 'completed') {
                        const completedDiv = document.createElement('div');
                        completedDiv.className = 'text-sm font-bold text-green-700 bg-green-100 px-3 py-2 rounded text-center';
                        completedDiv.textContent = 'Terminé';
                        domContainer.appendChild(completedDiv);
                        return;
                    }
                    
                    // Check if this item has multiple processes (steps array)
                    const hasMultipleSteps = item.steps && Array.isArray(item.steps) && item.steps.length > 1;
                    const currentStepIndex = (item.stepIndex || 0) + 1; // Convert to 1-based
                    const totalSteps = hasMultipleSteps ? item.steps.length : 1;
                    
                    // If multiple steps, show indicator before select
                    if (hasMultipleSteps) {
                        const stepIndicator = document.createElement('div');
                        stepIndicator.className = 'text-xs font-bold text-blue-600 mb-1';
                        stepIndicator.textContent = `${currentStepIndex} de ${totalSteps}`;
                        domContainer.appendChild(stepIndicator);
                    }
                    
                    // Select
                    const select = document.createElement('select');
                    select.className = 'text-xs border rounded p-1 w-full';
                    
                    // Si la ligne a des steps définis, filtrer pour n'afficher que ces processus
                    let processes = allProcesses;
                    if (item.steps && Array.isArray(item.steps) && item.steps.length > 0) {
                        processes = allProcesses.filter(proc => item.steps.includes(proc.id));
                    }
                    
                    // Option vide
                    const optEmpty = document.createElement('option');
                    optEmpty.value = '';
                    optEmpty.textContent = '-- Procédé --';
                    optEmpty.disabled = true;
                    select.appendChild(optEmpty);
                    processes.forEach(proc => {
                        const opt = document.createElement('option');
                        opt.value = proc.id;
                        opt.textContent = t[proc.id] || proc.label;
                        if (item.process === proc.id) opt.selected = true;
                        select.appendChild(opt);
                    });
                    select.value = item.process || '';
                    select.onchange = (e) => {
                        // Update process for this row using current handler
                        try {
                            updateJobStatus(item.id, item.status, item.producedQty, null, null, { process: e.target.value });
                        } catch (err) {
                            try { console.warn('updateJobStatus failed:', err); } catch (_) {}
                        }
                    };
                    domContainer.appendChild(select);
                }
            },
            {
                dataField: 'progress',
                caption: "% d'avancement",
                width: 120,
                calculateCellValue: (rowData) => {
                    const qtyPC = parseFloat(rowData.qty) || 0; // Quantité demandée en PC
                    if (qtyPC === 0) return "0%";
                    
                    const producedPL = parseFloat(rowData.producedQty) || 0; // Quantité produite en PL
                    const width = parseFloat(rowData.width) || 0;
                    
                    // Convertir PL en PC pour la comparaison: PC = PL * (width/12)
                    const producedPC = width > 0 ? producedPL * (width / 12) : producedPL;
                    
                    const percent = Math.round((producedPC / qtyPC) * 100);
                    return percent + "%";
                }
            },
            {
                dataField: 'stationStatus',
                caption: 'État Poste',
                width: 120,
                allowEditing: false,
                calculateCellValue: (rowData) => {
                    if (!rowData.station || rowData.station === '') return 'Non assigné';
                    if (rowData.status === 'planning') return 'Libre';
                    if (rowData.status === 'running') return 'En production';
                    if (rowData.status === 'paused') return 'Pause';
                    if (rowData.status === 'error') return 'Alerte';
                    if (rowData.status === 'completed') return 'Terminé';
                    return 'Libre';
                },
                cellTemplate: (container, options) => {
                    const item = options.data;
                    const getDomContainer = (c) => {
                        if (c instanceof Element) return c;
                        if (c && c.get && typeof c.get === 'function') return c.get(0);
                        if (Array.isArray(c) && c[0] instanceof Element) return c[0];
                        return null;
                    };
                    const domContainer = getDomContainer(container);
                    if (!domContainer) return;
                    domContainer.innerHTML = '';
                    
                    let statusText = 'Non assigné';
                    let className = 'bg-gray-100 text-gray-700';
                    
                    if (!item.station || item.station === '') {
                        statusText = 'Non assigné';
                        className = 'bg-gray-100 text-gray-700';
                    } else if (item.status === 'planning') {
                        statusText = 'Libre';
                        className = 'bg-blue-100 text-blue-700';
                    } else if (item.status === 'running') {
                        statusText = 'En production';
                        className = 'bg-green-100 text-green-700';
                    } else if (item.status === 'paused') {
                        statusText = 'Pause';
                        className = 'bg-yellow-100 text-yellow-700';
                    } else if (item.status === 'error') {
                        statusText = 'Alerte';
                        className = 'bg-red-100 text-red-700';
                    } else if (item.status === 'completed') {
                        statusText = 'Terminé';
                        className = 'bg-green-200 text-green-800';
                    }
                    
                    const span = document.createElement('span');
                    span.className = `px-2 py-1 rounded text-xs font-bold ${className}`;
                    span.textContent = statusText;
                    domContainer.appendChild(span);
                }
            },
            {
                dataField: 'station',
                caption: t.colStation,
                width: 350,
                allowEditing: false,
                cellTemplate: (container, options) => {
                    const item = options.data;
                    // Helper to get real DOM element
                    const getDomContainer = (c) => {
                        if (c instanceof Element) return c;
                        if (c && c.get && typeof c.get === 'function') return c.get(0);
                        if (Array.isArray(c) && c[0] instanceof Element) return c[0];
                        return null;
                    };
                    const domContainer = getDomContainer(container);
                    if (!domContainer) return;
                    domContainer.innerHTML = '';
                    
                    // Layout
                    const div = document.createElement('div');
                    div.className = 'flex flex-row gap-2 items-center';
                    div.style.width = '100%';
                    
                    // Affichage ALERTE en rouge si présente
                    if (item && item.issueDescription && !item.issueResolved) {
                        const alertSpan = document.createElement('span');
                        alertSpan.style.color = '#dc2626';
                        alertSpan.style.fontWeight = 'bold';
                        alertSpan.style.fontSize = '14px';
                        alertSpan.style.marginRight = '8px';
                        alertSpan.style.padding = '2px 8px';
                        alertSpan.style.backgroundColor = '#fee2e2';
                        alertSpan.style.borderRadius = '4px';
                        alertSpan.style.border = '1px solid #dc2626';
                        alertSpan.textContent = 'ALERTE';
                        div.appendChild(alertSpan);
                    }
                    
                    // Select
                    const select = document.createElement('select');
                    select.className = 'text-xs border rounded p-1';
                    select.style.minWidth = '120px';
                    // Désactiver le changement de poste si la production a débuté
                    if (item.status !== 'planning') {
                        select.disabled = true;
                        select.style.opacity = '0.6';
                        select.style.cursor = 'not-allowed';
                    }
                    // Get allowed stations for this process from stationConfig
                    let allowedStations = [
                        { value: '', label: 'POSTE...', disabled: true },
                        { value: 'station1', label: t.station1 },
                        { value: 'station2', label: t.station2 },
                        { value: 'station3', label: t.station3 },
                        { value: 'station4', label: t.station4 },
                        { value: 'station5', label: t.station5 },
                        { value: 'subcontractor', label: t.subcontractor }
                    ];
                    if (typeof window !== 'undefined' && window.stationConfig) {
                        const config = window.stationConfig;
                        const procId = item.process;
                        const configuredStation = config[procId];
                        if (configuredStation) {
                            allowedStations = allowedStations.filter(st => st.value === '' || st.value === configuredStation || st.value === 'subcontractor');
                        }
                    }
                    allowedStations.forEach(st => {
                        const opt = document.createElement('option');
                        opt.value = st.value;
                        opt.textContent = st.label;
                        if (st.disabled) opt.disabled = true;
                        if (item.station === st.value) opt.selected = true;
                        select.appendChild(opt);
                    });
                    
                    // Gestionnaire de changement de station
                    select.addEventListener('change', (e) => {
                        const newStation = e.target.value;
                        if (newStation === 'subcontractor') {
                            // Ouvrir modal de sélection de sous-traitant
                            if (typeof window !== 'undefined' && window.openSubcontractModal) {
                                window.openSubcontractModal(item);
                            }
                        } else {
                            // Assignation normale
                            if (typeof window !== 'undefined' && window.assignStation) {
                                window.assignStation(item.id, newStation);
                            }
                        }
                    });
                    
                    div.appendChild(select);
                    
                    // Afficher le numéro PO et bouton pour visualiser le bon de commande si sous-traitant
                    if (item.station === 'subcontractor' && item.poNumber) {
                        const poInfo = document.createElement('div');
                        poInfo.className = 'flex items-center gap-2 mt-1';
                        
                        const poText = document.createElement('span');
                        poText.className = 'text-xs text-blue-600 font-bold';
                        poText.textContent = item.poNumber;
                        poInfo.appendChild(poText);
                        
                        const btnViewPO = document.createElement('button');
                        btnViewPO.className = 'text-xs text-blue-600 hover:text-blue-800 underline';
                        btnViewPO.innerHTML = '<i class="fa fa-eye"></i> Voir';
                        btnViewPO.title = 'Voir le bon de commande';
                        btnViewPO.onclick = (e) => {
                            e.stopPropagation();
                            if (typeof window !== 'undefined' && window.openSubcontractModal) {
                                window.openSubcontractModal(item);
                            }
                        };
                        poInfo.appendChild(btnViewPO);
                        
                        div.appendChild(poInfo);
                    }
                    
                    // Ajout bouton pour résoudre l'alerte si présente
                    if (item && item.issueDescription && !item.issueResolved) {
                        const btnResolve = document.createElement('button');
                        btnResolve.className = 'ml-2 text-green-600 hover:text-white hover:bg-green-600 border border-green-200 rounded px-2 py-1 text-xs font-bold transition';
                        btnResolve.innerHTML = '<i class="fa fa-check"></i>';
                        btnResolve.title = 'Marquer comme résolu';
                        btnResolve.onclick = (e) => {
                            e.stopPropagation();
                            
                            // Demander une description de la résolution
                            DevExpress.ui.dialog.custom({
                                title: "Résoudre l'alerte",
                                messageHtml: `<div style="margin: 20px 0;">
                                    <p style="margin-bottom: 12px;"><strong>Problème signalé:</strong></p>
                                    <p style="margin-bottom: 16px; padding: 8px; background: #fee; border-left: 3px solid #f00;">${item.issueDescription}</p>
                                    <label style="display: block; margin-bottom: 8px; font-weight: bold;">Description de la résolution:</label>
                                    <textarea id="resolutionDescription" rows="4" 
                                              style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; resize: vertical;"
                                              placeholder="Décrivez comment le problème a été résolu..."></textarea>
                                </div>`,
                                buttons: [
                                    {
                                        text: "Annuler",
                                        onClick: () => false
                                    },
                                    {
                                        text: "Résoudre",
                                        onClick: () => {
                                            const resolution = document.getElementById('resolutionDescription').value.trim();
                                            if (!resolution) {
                                                alert("Veuillez entrer une description de la résolution.");
                                                return false;
                                            }
                                            
                                            try {
                                                if (typeof updateJobStatus === 'function') {
                                                    // Ajouter la résolution à la description existante
                                                    const updatedDescription = `${item.issueDescription}\n\n[RÉSOLUTION] ${resolution}`;
                                                    // Remettre le statut à "running" quand l'alerte est résolue
                                                    const newStatus = item.status === 'error' ? 'running' : item.status;
                                                    updateJobStatus(item.id, newStatus, item.producedQty, null, null, { 
                                                        issueResolved: true,
                                                        issueDescription: updatedDescription,
                                                        resolutionTimestamp: Date.now()
                                                    });
                                                    DevExpress.ui.notify("Alerte résolue avec succès", "success", 2000);
                                                }
                                            } catch (err) {
                                                console.warn('Failed to resolve issue:', err);
                                            }
                                            return true;
                                        }
                                    }
                                ]
                            }).show();
                        };
                        div.appendChild(btnResolve);
                    }
                    
                    // Bouton étiquette d'inventaire si terminé
                    if (item.status === 'completed') {
                        const btnLabel = document.createElement('button');
                        btnLabel.className = 'ml-2 text-green-600 hover:text-white hover:bg-green-600 border border-green-200 rounded px-2 py-1 text-xs font-bold transition';
                        btnLabel.innerHTML = '<i class="fa fa-tag"></i> Étiquette';
                        btnLabel.title = 'Imprimer étiquette d\'inventaire';
                        btnLabel.onclick = (e) => {
                            e.stopPropagation();
                            // Demander le tally et la localisation avant d'imprimer
                            DevExpress.ui.dialog.custom({
                                title: "Détails de l'étiquette",
                                messageHtml: `<div style="margin: 20px 0;">
                                    <label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Liste de Tally:</label>
                                    <textarea id="tableTallyInput" rows="3" 
                                        style="width: 100%; padding: 6px; border: 1px solid #93c5fd; border-radius: 4px; font-size: 13px; font-family: monospace; resize: vertical; margin-bottom: 12px;" 
                                        placeholder="Ex: 8x4, 10x6, 12x8..."></textarea>
                                    <label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Localisation:</label>
                                    <input type="text" id="storageLocationPrint" placeholder="Ex: A-12, B-5, C-23..."
                                           style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px;" />
                                </div>`,
                                buttons: [
                                    {
                                        text: "Annuler",
                                        onClick: () => false
                                    },
                                    {
                                        text: "Imprimer",
                                        onClick: () => {
                                            const location = document.getElementById('storageLocationPrint').value.trim();
                                            const tally = document.getElementById('tableTallyInput').value.trim();
                                            if (typeof window.generateProductionTagFromTable === 'function') {
                                                window.generateProductionTagFromTable(item, location, tally);
                                            }
                                            return true;
                                        }
                                    }
                                ]
                            }).show();
                        };
                        div.appendChild(btnLabel);
                    }
                    
                    // Ajout bouton corbeille à droite
                    if (item.status === 'planning') {
                        // Bouton modifier
                        const btnEdit = document.createElement('button');
                        btnEdit.className = 'ml-2 text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-200 rounded px-2 py-1 text-xs font-bold transition';
                        btnEdit.innerHTML = '<i class="fa fa-pen"></i>';
                        btnEdit.title = 'Modifier la production';
                        btnEdit.onclick = (e) => {
                            e.stopPropagation();
                            // Pré-remplir le formulaire avec les données existantes
                            const processes = item.steps && item.steps.length > 0 ? item.steps : (item.process ? [item.process] : []);
                            setNewStock({
                                client: item.client || 'Prod. Inventaire',
                                isInventoryProd: true,
                                wood: item.wood || '',
                                grade: item.grade || '',
                                qty: item.qty || '',
                                wantedQty: item.qty || '',
                                processes: processes,
                                date: item.date || '',
                                location: '',
                                state: '',
                                txn: item.txn || '',
                                stockNo: ''
                            });
                            setSelectedStocks(item.stockDetails || (item.stockNo ? item.stockNo.split(', ').map(sn => {
                                const inv = inventory.find(i => i.stockNo === sn.trim());
                                return inv ? { stockNo: inv.stockNo, wood: inv.wood, grade: inv.grade || '', qty: 0, location: inv.location, state: inv.state } : { stockNo: sn.trim(), wood: item.wood, grade: '', qty: 0, location: '', state: '' };
                            }) : []));
                            setProductCodeFilter(item.targetProductCode || '');
                            if (item.targetProductCode) {
                                const pItems = inventory.filter(s => s.productCode === item.targetProductCode);
                                const pDesc = pItems[0]?.description || '';
                                setProductCodeSearch(pDesc ? pDesc + ' (' + item.targetProductCode + ')' : item.targetProductCode);
                            } else {
                                setProductCodeSearch('');
                            }
                            setEditingProductionId(item.id);
                            setShowAddStock(true);
                        };
                        div.appendChild(btnEdit);

                        const btn = document.createElement('button');
                        btn.className = 'ml-2 text-red-600 hover:text-white hover:bg-red-600 border border-red-200 rounded px-2 py-1 text-xs font-bold transition';
                        btn.innerHTML = '<i class="fa fa-trash"></i>';
                        btn.title = 'Supprimer la ligne';
                        btn.onclick = (e) => {
                            e.stopPropagation();
                            try { console.log('Delete click (assignation):', { id: item.id }); } catch (_) {}
                            if (confirm('Voulez-vous vraiment supprimer cette ligne ?')) {
                                // Persister via handler React
                                try { deleteBatch(item.id); } catch (err) { try { console.warn('deleteBatch failed:', err); } catch (_) {} }
                                // Suppression immédiate du dataSource pour feedback visuel
                                try {
                                    if (gridInstanceRef && gridInstanceRef.current) {
                                        const currentDS = gridInstanceRef.current.option('dataSource') || [];
                                        const newDS = (Array.isArray(currentDS) ? currentDS : []).filter(r => Number(r.id) !== Number(item.id));
                                        gridInstanceRef.current.option('dataSource', newDS);
                                        const dsObj = gridInstanceRef.current.getDataSource && gridInstanceRef.current.getDataSource();
                                        if (dsObj && dsObj.reload) dsObj.reload();
                                        gridInstanceRef.current.repaint();
                                    }
                                } catch (_) {}
                            }
                        };
                        div.appendChild(btn);
                    }
                    domContainer.appendChild(div);
                }
            },
            {
                caption: 'Notes',
                width: 80,
                alignment: 'center',
                allowEditing: false,
                allowSorting: false,
                cellTemplate: (container, options) => {
                    const item = options.data;
                    const getDomContainer = (c) => {
                        if (c instanceof Element) return c;
                        if (c && c.get && typeof c.get === 'function') return c.get(0);
                        if (Array.isArray(c) && c[0] instanceof Element) return c[0];
                        return null;
                    };
                    const domContainer = getDomContainer(container);
                    if (!domContainer) return;
                    domContainer.innerHTML = '';
                    
                    // Afficher l'icône seulement si la production est terminée et qu'il y a des notes
                    if (item.status === 'completed' && item.notes && item.notes.trim() !== '') {
                        const btn = document.createElement('button');
                        btn.className = 'text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full p-2 transition';
                        btn.innerHTML = '<i class="fa-solid fa-file-lines text-lg"></i>';
                        btn.title = 'Voir les notes de production';
                        btn.onclick = (e) => {
                            e.stopPropagation();
                            // Afficher une modal avec les notes
                            DevExpress.ui.dialog.custom({
                                title: 'Notes de Production - #' + item.id,
                                messageHtml: '<div style="margin: 20px 0;">' +
                                    '<div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">' +
                                    '<p style="margin-bottom: 8px;"><strong>Client:</strong> ' + (item.client || 'N/A') + '</p>' +
                                    '<p style="margin-bottom: 8px;"><strong>Produit:</strong> ' + (item.wood || 'N/A') + '</p>' +
                                    '<p style="margin-bottom: 12px;"><strong>Procédé:</strong> ' + (t[item.process] || item.process || 'N/A') + '</p>' +
                                    '<hr style="margin: 12px 0; border-top: 1px solid #d1d5db;" />' +
                                    '<div style="max-height: 400px; overflow-y: auto; white-space: pre-wrap; font-family: monospace; font-size: 12px; line-height: 1.6;">' + 
                                    (item.notes || 'Aucune note disponible') + 
                                    '</div>' +
                                    '</div>' +
                                    '</div>',
                                buttons: [
                                    {
                                        text: 'Fermer',
                                        onClick: () => true
                                    },
                                    {
                                        text: 'Copier',
                                        onClick: () => {
                                            if (navigator.clipboard && navigator.clipboard.writeText) {
                                                navigator.clipboard.writeText(item.notes).then(() => {
                                                    DevExpress.ui.notify('Notes copiées dans le presse-papier', 'success', 2000);
                                                }).catch(err => {
                                                    console.error('Erreur copie:', err);
                                                });
                                            }
                                            return false; // Keep dialog open
                                        }
                                    }
                                ]
                            }).show();
                        };
                        domContainer.appendChild(btn);
                    }
                }
            }
        ];

        // Create unique copy of array to ensure DevExtreme detects change
        const ds = [...filteredData];
        console.log('filteredData for DataGrid:', ds);

        gridInstanceRef.current = new DevExpress.ui.dxDataGrid(gridContainerRef.current, {
            dataSource: ds,
            keyExpr: "id", // Critical: Allows DevExtreme to track rows correctly
            columns: columns,
            showBorders: true,
            columnAutoWidth: true,
            rowAlternationEnabled: true,
            filterRow: { visible: true },
            searchPanel: { visible: true },
            paging: { pageSize: 15 },
            pager: { showPageSizeSelector: true, allowedPageSizes: [15, 30, 50], showInfo: true },
            editing: {
                mode: 'cell',
                allowUpdating: true
            },
            onRowUpdating: (e) => {
                // Mettre à jour les données dans productionData
                const updatedData = productionData.map(item => 
                    item.id === e.key ? { ...item, ...e.newData } : item
                );
                setProductionData(updatedData);
                
                // Sauvegarder dans localStorage
                try {
                    localStorage.setItem('productionData', JSON.stringify(updatedData));
                } catch (err) {
                    console.error('Erreur lors de la sauvegarde:', err);
                }
            },
            onRowPrepared: (e) => {
                try {
                    if (e && e.rowType === 'data' && e.data && e.rowElement) {
                        if (e.data.issueDescription && !e.data.issueResolved) {
                            e.rowElement.style.backgroundColor = '#fee2e2';
                            e.rowElement.style.borderLeft = '4px solid #dc2626';
                        }
                    }
                } catch (err) {
                    console.error('Row preparation error:', err);
                }
            },
            onCellPrepared: (e) => {
                try {
                    if (e && e.rowType === 'data' && e.data && e.cellElement && e.data.issueDescription && !e.data.issueResolved) {
                        e.cellElement.style.fontWeight = 'bold';
                    }
                } catch (err) {
                    console.error('Cell preparation error:', err);
                }
            }
        });

        return () => {
             // Cleanup prevent memory leaks
            if (gridInstanceRef.current) {
                gridInstanceRef.current.dispose();
                gridInstanceRef.current = null;
            }
        };
    }, [isRawWood, woodTreatments, t, refreshTick]); 

    // Update data when filteredData changes
    useEffect(() => {
        if (gridInstanceRef.current) {
             // Clone to force update detection
             const ds = [...filteredData];
             gridInstanceRef.current.option("dataSource", ds);
             // Use reload() to ensure data is fetched for the view
             if(gridInstanceRef.current.getDataSource()) {
                 gridInstanceRef.current.getDataSource().reload();
             }
             gridInstanceRef.current.repaint();
             try {
                 if (typeof gridInstanceRef.current.refresh === 'function') {
                     gridInstanceRef.current.refresh();
                 }
             } catch (_) {}
        }
    }, [filteredData, activeStatuses, filterProcess, refreshTick]); // Add dependencies to ensure update runs

    const toggleStatus = (status) => {
        if (activeStatuses.includes(status)) {
             setActiveStatuses(activeStatuses.filter(s => s !== status));
        } else {
            setActiveStatuses([...activeStatuses, status]);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-4">
            {/* Modal/Formulaire d'ajout de stock */}
            {showAddStock && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <h3 className="font-bold text-xl mb-4 sticky top-0 bg-white pb-2 border-b">{editingProductionId ? 'Modifier la production' : 'Créer une production'}</h3>
                        <div className="space-y-3 mt-4">
                            {/* Sélection multiple de traitements - EN PREMIER */}
                            <div className="border-2 border-blue-200 bg-blue-50 p-3 rounded">
                                <label className="block text-base font-semibold mb-2">1. Choisir le(s) traitement(s)</label>
                                <div className="space-y-2 max-h-40 overflow-y-auto bg-white rounded p-2">
                                    {allProcesses.map(p => (
                                        <label key={p.id} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                            <input
                                                type="checkbox"
                                                checked={newStock.processes.includes(p.id)}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        setNewStock({ ...newStock, processes: [...newStock.processes, p.id] });
                                                    } else {
                                                        setNewStock({ ...newStock, processes: newStock.processes.filter(id => id !== p.id) });
                                                    }
                                                }}
                                            />
                                            <span className="text-base">{t[p.id] || p.label}</span>
                                        </label>
                                    ))}
                                </div>
                                {newStock.processes.length > 0 && (
                                    <div className="mt-2 text-sm text-blue-700">
                                        <i className="fa fa-check-circle mr-1"></i>
                                        {newStock.processes.length} traitement(s) sélectionné(s)
                                    </div>
                                )}
                            </div>
                            
                            {/* Sélection du code produit */}
                            <div className="border-2 border-purple-200 bg-purple-50 p-3 rounded relative">
                                <label className="block text-base font-semibold mb-2">2. Code produit du produit voulu</label>
                                <div className="relative">
                                    <div className="flex gap-2">
                                        <input
                                            className="flex-1 border p-3 rounded text-base"
                                            placeholder="Rechercher un code produit..."
                                            value={productCodeSearch}
                                            onChange={e => {
                                                setProductCodeSearch(e.target.value);
                                                setShowProductCodeSuggestions(true);
                                            }}
                                            onFocus={() => setShowProductCodeSuggestions(true)}
                                            autoComplete="off"
                                        />
                                        <select
                                            className="border p-3 rounded text-base min-w-[150px]"
                                            value={productCodeStateFilter}
                                            onChange={e => {
                                                setProductCodeStateFilter(e.target.value);
                                                setShowProductCodeSuggestions(true);
                                            }}
                                        >
                                            <option value="">Tous les états</option>
                                            {[...new Set(inventory.map(s => s.state).filter(Boolean))].sort().map(state => (
                                                <option key={state} value={state}>{state}</option>
                                            ))}
                                        </select>
                                        {productCodeFilter && (
                                            <button
                                                className="px-3 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 text-sm font-bold"
                                                title="Retirer le filtre"
                                                onClick={() => {
                                                    setProductCodeFilter('');
                                                    setProductCodeSearch('');
                                                }}
                                            >
                                                <i className="fa fa-times"></i>
                                            </button>
                                        )}
                                    </div>
                                    {showProductCodeSuggestions && (
                                        <div className="absolute left-0 right-0 bg-white border rounded shadow z-20 max-h-60 overflow-y-auto mt-1">
                                            {(() => {
                                                const searchLower = (productCodeSearch || '').toLowerCase();
                                                const uniqueCodes = [...new Set(inventory.filter(s => {
                                                    if (productCodeStateFilter && s.state !== productCodeStateFilter) return false;
                                                    return Boolean(s.productCode);
                                                }).map(s => s.productCode))]
                                                    .filter(code => {
                                                        if (!searchLower) return true;
                                                        // Recherche par mot-clé dans tous les champs des items de ce code
                                                        if (code.toLowerCase().includes(searchLower)) return true;
                                                        const items = inventory.filter(s => s.productCode === code);
                                                        return items.some(s => {
                                                            try {
                                                                return String(s.wood || '').toLowerCase().includes(searchLower) ||
                                                                    String(s.description || '').toLowerCase().includes(searchLower) ||
                                                                    String(s.grade || '').toLowerCase().includes(searchLower) ||
                                                                    String(s.stockNo || '').toLowerCase().includes(searchLower) ||
                                                                    String(s.state || '').toLowerCase().includes(searchLower) ||
                                                                    String(s.location || '').toLowerCase().includes(searchLower) ||
                                                                    String(s.unite || '').toLowerCase().includes(searchLower) ||
                                                                    String(s.epaisseur || '').toLowerCase().includes(searchLower) ||
                                                                    String(s.largeur || '').toLowerCase().includes(searchLower);
                                                            } catch(e) { return false; }
                                                        });
                                                    })
                                                    .sort();
                                                if (uniqueCodes.length === 0) {
                                                    return <div className="p-3 text-gray-400 text-sm">Aucun code produit trouvé</div>;
                                                }
                                                return uniqueCodes.slice(0, 30).map(code => {
                                                    const items = inventory.filter(s => s.productCode === code);
                                                    const totalQty = items.reduce((sum, s) => sum + (parseFloat(s.qty) || 0), 0);
                                                    const wood = items[0]?.wood || '';
                                                    const desc = items[0]?.description || '';
                                                    return (
                                                        <div
                                                            key={code}
                                                            className={`p-3 hover:bg-purple-50 cursor-pointer border-b last:border-b-0 ${productCodeFilter === code ? 'bg-purple-100' : ''}`}
                                                            onClick={() => {
                                                                setProductCodeFilter(code);
                                                                const displayText = desc ? `${desc} (${code})` : code;
                                                                setProductCodeSearch(displayText);
                                                                setShowProductCodeSuggestions(false);
                                                                // Focus sur la quantité voulue
                                                                setTimeout(() => {
                                                                    if (wantedQtyRef.current) wantedQtyRef.current.focus();
                                                                }, 100);
                                                            }}
                                                        >
                                                            <div className="flex justify-between items-center">
                                                                <span className="font-bold text-purple-700">{code}</span>
                                                                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{items.length} stock(s) — {totalQty} PC</span>
                                                            </div>
                                                            {desc && <div className="text-sm text-gray-600 mt-0.5">{desc}</div>}
                                                            {wood && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded mt-1 inline-block">{wood}</span>}
                                                        </div>
                                                    );
                                                });
                                            })()}
                                        </div>
                                    )}
                                </div>
                                {productCodeFilter && (
                                    <div className="mt-2 text-sm text-purple-700 font-semibold">
                                        <i className="fa fa-filter mr-1"></i>
                                        Produit sélectionné: <span className="bg-purple-200 px-2 py-0.5 rounded">{(() => {
                                            const items = inventory.filter(s => s.productCode === productCodeFilter);
                                            const desc = items[0]?.description || '';
                                            return desc ? `${desc} (${productCodeFilter})` : productCodeFilter;
                                        })()}</span>
                                        {(() => {
                                            const items = inventory.filter(s => s.productCode === productCodeFilter);
                                            const unite = items[0]?.unite || '';
                                            return unite ? <span className="ml-2 bg-purple-300 text-purple-900 px-2 py-0.5 rounded">Unité: {unite}</span> : null;
                                        })()}
                                    </div>
                                )}
                            </div>

                            {/* Quantité voulue */}
                            {productCodeFilter && (
                                <div className="border-2 border-orange-200 bg-orange-50 p-3 rounded">
                                    <label className="block text-base font-semibold mb-1">Quantité voulue {(() => {
                                        const items = inventory.filter(s => s.productCode === productCodeFilter);
                                        const unite = items[0]?.unite || '';
                                        return unite ? <span className="text-orange-600 font-bold">({unite})</span> : null;
                                    })()}</label>
                                    <input 
                                        ref={wantedQtyRef}
                                        className="w-full border p-3 rounded text-base" 
                                        type="number" 
                                        placeholder={(() => {
                                            const items = inventory.filter(s => s.productCode === productCodeFilter);
                                            const unite = items[0]?.unite || '';
                                            return unite ? `Quantité à produire en ${unite}...` : 'Quantité à produire...';
                                        })()}
                                        value={newStock.wantedQty || ''} 
                                        onChange={e => setNewStock({ ...newStock, wantedQty: e.target.value })} 
                                    />
                                </div>
                            )}

                            {/* Date requise */}
                            <div>
                                <label className="block text-base font-semibold mb-1">3. Date requise <span className="text-red-500">*</span></label>
                                <input ref={dateInputRef} className={`w-full border p-3 rounded text-base ${!newStock.date ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'}`} type="date" value={newStock.date} onChange={e => setNewStock({ ...newStock, date: e.target.value })} />
                                {!newStock.date && <div className="text-xs text-red-500 mt-1"><i className="fa fa-exclamation-circle mr-1"></i>La date requise est obligatoire</div>}
                            </div>
                            
                            {/* Recherche de stock */}
                            <div className="border-2 border-green-200 bg-green-50 p-3 rounded">
                                <label className="block text-base font-semibold mb-2">4. Sélectionner le(s) stock(s)</label>
                            {/* Champ No. stock avec recherche par mot-clé */}
                            <div className="relative">
                                <div className="flex gap-2 mb-2">
                                    <input
                                        className="flex-1 border p-3 rounded text-base"
                                        placeholder="Rechercher (No. stock, description, essence, code produit...)"
                                        value={stockSearch || ''}
                                        onChange={e => {
                                            const search = e.target.value;
                                            setStockSearch(search);
                                            setShowSuggestions(true);
                                        }}
                                        onFocus={() => setShowSuggestions(true)}
                                        autoComplete="off"
                                    />
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        title="Afficher les résultats"
                                        onClick={() => setShowSuggestions(s => !s)}
                                    >
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                                {/* Suggestions d'inventaire avec recherche par mot-clé */}
                                {showSuggestions && (
                                    <div className="absolute left-0 right-0 bg-white border rounded shadow z-10 max-h-80 overflow-y-auto mt-1">
                                        {(() => {
                                            const searchLower = (stockSearch || '').toLowerCase();
                                            const filtered = inventory.filter(s => {
                                                // Exclure les stocks avec le même code produit que celui voulu (option 2)
                                                if (productCodeFilter && s.productCode === productCodeFilter) return false;
                                                // Filtre par mot-clé
                                                if (!searchLower) return true;
                                                return (
                                                    (s.stockNo || '').toLowerCase().includes(searchLower) ||
                                                    (s.productCode || '').toLowerCase().includes(searchLower) ||
                                                    (s.wood || '').toLowerCase().includes(searchLower) ||
                                                    (s.description || '').toLowerCase().includes(searchLower) ||
                                                    (s.grade || '').toLowerCase().includes(searchLower) ||
                                                    (s.state || '').toLowerCase().includes(searchLower) ||
                                                    (s.location || '').toLowerCase().includes(searchLower) ||
                                                    (s.unite || '').toLowerCase().includes(searchLower)
                                                );
                                            });
                                            
                                            if (filtered.length === 0) {
                                                return <div className="p-3 text-gray-400 text-base">Aucun stock trouvé</div>;
                                            }
                                            
                                            return filtered.slice(0, 50).map(s => (
                                                <div
                                                    key={s.stockNo}
                                                    className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0"
                                                    onClick={() => {
                                                        setNewStock({
                                                            ...newStock,
                                                            stockNo: s.stockNo,
                                                            wood: s.wood,
                                                            grade: s.grade || '',
                                                            qty: s.qty,
                                                            location: s.location,
                                                            state: s.state || '',
                                                            description: s.description || '',
                                                            largeur: s.largeur || '',
                                                            epaisseur: s.epaisseur || '',
                                                            unite: s.unite || ''
                                                        });
                                                        setStockSearch(s.stockNo);
                                                        setShowSuggestions(false);
                                                    }}
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <span className="font-bold text-base text-blue-700">{s.stockNo}</span>
                                                        <span className="text-sm bg-gray-100 px-2 py-0.5 rounded">{s.qty} {s.unite || 'PC'}</span>
                                                    </div>
                                                    {s.productCode && <div className="text-xs text-gray-500 mt-0.5">Code: {s.productCode}</div>}
                                                    {s.description && <div className="text-sm text-gray-700 mt-1">{s.description}</div>}
                                                    <div className="flex flex-wrap gap-2 mt-1">
                                                        {s.wood && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">{s.wood}</span>}
                                                        {s.grade && <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">{s.grade}</span>}
                                                        {s.state && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{s.state}</span>}
                                                        {s.epaisseur && <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Ép: {s.epaisseur}</span>}
                                                        {s.largeur && <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">Larg: {s.largeur}</span>}
                                                    </div>
                                                    {s.location && <div className="text-xs text-gray-500 mt-1"><i className="fa fa-map-marker-alt mr-1"></i>{s.location}</div>}
                                                </div>
                                            ));
                                        })()}
                                    </div>
                                )}
                            </div>
                            {/* Champ Quantité modifiable */}
                            {newStock.description && (
                                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                                    <div className="text-sm font-semibold text-blue-700 mb-1"><i className="fa fa-info-circle mr-1"></i>Description</div>
                                    <div className="text-base text-gray-800">{newStock.description}</div>
                                </div>
                            )}
                            <div>
                                <label className="block text-base mb-1 font-medium">Inventaire alloué {newStock.unite ? <span className="text-blue-600 font-bold">({newStock.unite})</span> : '(PC)'}</label>
                                <input 
                                    className="w-full border p-3 rounded text-base" 
                                    placeholder={newStock.unite ? `Quantité en ${newStock.unite}` : 'Quantité'} 
                                    type="number" 
                                    value={newStock.qty} 
                                    onChange={e => setNewStock({ ...newStock, qty: e.target.value })} 
                                />
                                {/* Avertissement si quantité insuffisante pour état avec qtyRequired */}
                                {(() => {
                                    const stateConfig = inventoryStates.find(s => (typeof s === 'object' ? s.name : s) === newStock.state);
                                    const isQtyRequired = stateConfig && typeof stateConfig === 'object' && stateConfig.qtyRequired;
                                    const inventoryItem = inventory.find(s => s.stockNo === newStock.stockNo);
                                    const availableQty = inventoryItem ? inventoryItem.qty : 0;
                                    const requestedQty = Number(newStock.qty) || 0;
                                    
                                    if (isQtyRequired && requestedQty > availableQty) {
                                        return (
                                            <div className="mt-2 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
                                                <i className="fa fa-exclamation-triangle mr-2"></i>
                                                Quantité insuffisante! Disponible: {availableQty}, Demandée: {requestedQty}
                                            </div>
                                        );
                                    }
                                    return null;
                                })()}
                            </div>
                            {/* Bouton pour ajouter le stock à la liste */}
                            <button 
                                className="w-full py-2 bg-green-500 text-white rounded font-bold hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={(() => {
                                    if (!newStock.stockNo || !newStock.wood || !newStock.qty || newStock.qty <= 0) return true;
                                    
                                    // Vérifier si l'état a qtyRequired et si la quantité est suffisante
                                    const stateConfig = inventoryStates.find(s => (typeof s === 'object' ? s.name : s) === newStock.state);
                                    const isQtyRequired = stateConfig && typeof stateConfig === 'object' && stateConfig.qtyRequired;
                                    
                                    if (isQtyRequired) {
                                        const inventoryItem = inventory.find(s => s.stockNo === newStock.stockNo);
                                        const availableQty = inventoryItem ? inventoryItem.qty : 0;
                                        const requestedQty = Number(newStock.qty) || 0;
                                        if (requestedQty > availableQty) return true;
                                    }
                                    
                                    return false;
                                })()}
                                onClick={() => {
                                    if (newStock.stockNo && newStock.wood && newStock.qty && newStock.qty > 0) {
                                        const stockToAdd = {
                                            stockNo: newStock.stockNo,
                                            wood: newStock.wood,
                                            grade: newStock.grade || '',
                                            qty: Number(newStock.qty),
                                            location: newStock.location,
                                            state: newStock.state,
                                            largeur: newStock.largeur || '',
                                            epaisseur: newStock.epaisseur || ''
                                        };
                                        setSelectedStocks([...selectedStocks, stockToAdd]);
                                        // Réinitialiser le formulaire
                                        setNewStock({ 
                                            client: 'Prod. Inventaire', 
                                            isInventoryProd: true, 
                                            wood: '', 
                                            grade: '',
                                            qty: '', 
                                            stockNo: '',
                                            processes: newStock.processes, // Garder les processus sélectionnés
                                            date: newStock.date,
                                            txn: newStock.txn,
                                            location: '',
                                            state: '' 
                                        });
                                    }
                                }}
                            >
                                <i className="fa fa-plus mr-2"></i>Ajouter ce stock à la sélection
                            </button>
                            
                            {/* Liste des stocks sélectionnés */}
                            {selectedStocks.length > 0 && (
                                <div className="border-2 border-green-200 bg-green-50 p-3 rounded">
                                    <label className="block text-base font-semibold mb-2">Stocks sélectionnés ({selectedStocks.length})</label>
                                    <div className="space-y-2 max-h-60 overflow-y-auto">
                                        {selectedStocks.map((stock, index) => (
                                            <div key={index} className="flex items-center justify-between gap-2 bg-white p-2 rounded border">
                                                <div className="flex-1">
                                                    <span className="font-bold text-sm block">{stock.stockNo}</span>
                                                    <span className="text-xs text-gray-600">{stock.wood}{stock.grade ? ' (' + stock.grade + ')' : ''} — {stock.qty} PC</span>
                                                    {stock.state && <span className="text-xs text-blue-600 ml-2">({stock.state})</span>}
                                                </div>
                                                <button
                                                    onClick={() => setSelectedStocks(selectedStocks.filter((_, i) => i !== index))}
                                                    className="text-red-500 hover:text-red-700 p-1"
                                                    title="Retirer"
                                                >
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {/* Total des stocks sélectionnés */}
                            {selectedStocks.length > 0 && (
                                <div>
                                    <label className="block text-base mb-1 font-medium">Quantité totale sélectionnée</label>
                                    <input 
                                        className="w-full border p-3 rounded text-base bg-gray-100" 
                                        type="number" 
                                        value={selectedStocks.reduce((sum, stock) => sum + Number(stock.qty || 0), 0)} 
                                        readOnly 
                                    />
                                </div>
                            )}
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 mt-5">
                            <button className="px-6 py-3 bg-gray-200 rounded text-base font-medium hover:bg-gray-300" onClick={() => {
                                setShowAddStock(false);
                                setSelectedStocks([]);
                                setStockSearch('');
                                setStockStateFilter('');
                                setProductCodeFilter('');
                                setProductCodeSearch('');
                                setProductCodeStateFilter('');
                                setEditingProductionId(null);
                                setNewStock({ client: 'Prod. Inventaire', isInventoryProd: true, wood: '', grade: '', qty: '', processes: [], date: '', location: '', state: '', txn: '', stockNo: '' });
                            }}>Annuler</button>
                            <button 
                                className="px-6 py-3 bg-[#51aff7] text-white rounded text-base font-medium hover:bg-blue-600 disabled:opacity-50"
                                disabled={(selectedStocks.length === 0 && !newStock.stockNo) || newStock.processes.length === 0 || !newStock.date}
                                onClick={() => {
                                    // MODE MODIFICATION: mettre à jour la production existante
                                    if (editingProductionId) {
                                        const stocksToProcess = [...selectedStocks];
                                        if (newStock.stockNo && newStock.wood && newStock.qty) {
                                            stocksToProcess.push({
                                                stockNo: newStock.stockNo,
                                                wood: newStock.wood,
                                                grade: newStock.grade || '',
                                                qty: Number(newStock.qty),
                                                location: newStock.location,
                                                state: newStock.state
                                            });
                                        }
                                        
                                        const totalQty = stocksToProcess.reduce((sum, s) => sum + Number(s.qty), 0);
                                        const stockNumbers = stocksToProcess.map(s => s.stockNo).join(', ');
                                        const woodType = stocksToProcess[0]?.wood || newStock.wood || '';
                                        const grade = stocksToProcess[0]?.grade || '';
                                        
                                        const extras = {
                                            wood: woodType,
                                            grade: grade,
                                            qty: newStock.wantedQty ? Number(newStock.wantedQty) : totalQty,
                                            inventoryAllocated: totalQty,
                                            process: newStock.processes.length > 0 ? newStock.processes[0] : '',
                                            date: newStock.date || '',
                                            stockNo: stockNumbers,
                                            stockDetails: stocksToProcess,
                                            width: stocksToProcess[0]?.largeur || '',
                                            thickness: stocksToProcess[0]?.epaisseur || '',
                                            targetProductCode: productCodeFilter || '',
                                            targetProductInfo: (() => {
                                                if (!productCodeFilter) return null;
                                                const items = inventory.filter(s => s.productCode === productCodeFilter);
                                                if (items.length === 0) return null;
                                                const item = items[0];
                                                return {
                                                    description: item.description || '',
                                                    wood: item.wood || '',
                                                    epaisseur: item.epaisseur || '',
                                                    largeur: item.largeur || '',
                                                    grade: item.grade || '',
                                                    unite: item.unite || ''
                                                };
                                            })(),
                                            steps: newStock.processes.length > 1 ? newStock.processes : (newStock.processes.length === 1 ? newStock.processes : undefined),
                                            stepIndex: newStock.processes.length > 1 ? 0 : undefined
                                        };
                                        
                                        updateJobStatus(editingProductionId, 'planning', 0, null, null, extras);
                                        
                                        setShowAddStock(false);
                                        setSelectedStocks([]);
                                        setStockSearch('');
                                        setStockStateFilter('');
                                        setProductCodeFilter('');
                                        setProductCodeSearch('');
                                        setProductCodeStateFilter('');
                                        setEditingProductionId(null);
                                        setNewStock({ client: 'Prod. Inventaire', isInventoryProd: true, wood: '', qty: '', processes: [], date: '', location: '', state: '', txn: '', stockNo: '' });
                                        return;
                                    }
                                    
                                    // MODE CRÉATION: créer une nouvelle production
                                    // Ajouter le stock en cours s'il n'est pas vide
                                    const stocksToProcess = [...selectedStocks];
                                    if (newStock.stockNo && newStock.wood && newStock.qty) {
                                        stocksToProcess.push({
                                            stockNo: newStock.stockNo,
                                            wood: newStock.wood,
                                            grade: newStock.grade || '',
                                            qty: Number(newStock.qty),
                                            location: newStock.location,
                                            state: newStock.state
                                        });
                                    }
                                    
                                    if (stocksToProcess.length === 0) return;
                                    
                                    // Grouper les stocks par produit (wood)
                                    const groupedByProduct = stocksToProcess.reduce((acc, stock) => {
                                        const key = stock.wood;
                                        if (!acc[key]) {
                                            acc[key] = [];
                                        }
                                        acc[key].push(stock);
                                        return acc;
                                    }, {});
                                    
                                    // Créer une ligne de production par produit
                                    Object.entries(groupedByProduct).forEach(([woodType, stocks], groupIndex) => {
                                        let txn = newStock.txn;
                                        if (!txn || groupIndex > 0) {
                                            // Générer un numéro de production auto-incrémenté (commence à 10000)
                                            let nextNum = 10000;
                                            try {
                                                const data = JSON.parse(localStorage.getItem('productionData')) || [];
                                                const prodNums = data
                                                    .map(item => (item.txn || '').match(/^PROD-(\d{4,})$/))
                                                    .filter(Boolean)
                                                    .map(match => parseInt(match[1], 10));
                                                if (prodNums.length > 0) {
                                                    const maxNum = Math.max(...prodNums);
                                                    nextNum = (maxNum < 10000 ? 10000 : maxNum + 1) + groupIndex;
                                                }
                                            } catch (e) {}
                                            txn = `PROD-${nextNum.toString().padStart(5, '0')}`;
                                        }
                                        
                                        // Calculer la quantité totale pour ce produit
                                        const totalQty = stocks.reduce((sum, s) => sum + Number(s.qty), 0);
                                        
                                        // Créer la liste des numéros de stock
                                        const stockNumbers = stocks.map(s => s.stockNo).join(', ');
                                        
                                        // Récupérer le grade du premier stock (ils ont tous le même wood donc probablement le même grade)
                                        const grade = stocks[0]?.grade || '';
                                        
                                        const batch = {
                                            client: 'Prod. Inventaire',
                                            txn,
                                            wood: woodType,
                                            grade: grade,
                                            qty: newStock.wantedQty ? Number(newStock.wantedQty) : totalQty,
                                            inventoryAllocated: totalQty,
                                            process: newStock.processes.length > 0 ? newStock.processes[0] : '',
                                            date: newStock.date || '',
                                            stockNo: stockNumbers, // Liste des numéros de stock
                                            stockDetails: stocks, // Détails complets des stocks
                                            width: stocks[0]?.largeur || '',
                                            thickness: stocks[0]?.epaisseur || '',
                                            targetProductCode: productCodeFilter || '', // Code produit voulu (option 2)
                                            targetProductInfo: (() => {
                                                if (!productCodeFilter) return null;
                                                const items = (typeof inventory !== 'undefined' ? inventory : []).filter(s => s.productCode === productCodeFilter);
                                                if (items.length === 0) return null;
                                                const item = items[0];
                                                return {
                                                    description: item.description || '',
                                                    wood: item.wood || '',
                                                    epaisseur: item.epaisseur || '',
                                                    largeur: item.largeur || '',
                                                    grade: item.grade || '',
                                                    unite: item.unite || ''
                                                };
                                            })(),
                                            status: 'planning',
                                            progress: 0
                                        };
                                        
                                        // Si plusieurs procédés sont sélectionnés, les ajouter dans steps
                                        if (newStock.processes.length > 1) {
                                            batch.steps = newStock.processes;
                                            batch.stepIndex = 0;
                                        } else if (newStock.processes.length === 1) {
                                            batch.steps = newStock.processes;
                                        }
                                        
                                        if (typeof window !== 'undefined' && window.addBatch) {
                                            window.addBatch(batch);
                                        }
                                        
                                        // Déduire la quantité de l'inventaire pour chaque stock
                                        stocks.forEach(stock => {
                                            if (stock.stockNo && stock.qty) {
                                                deductFromInventory(stock.stockNo, Number(stock.qty));
                                            }
                                        });
                                    });
                                    
                                    setShowAddStock(false);
                                    setSelectedStocks([]);
                                    setStockSearch('');
                                    setStockStateFilter('');
                                    setProductCodeFilter('');
                                    setProductCodeSearch('');
                                    setProductCodeStateFilter('');
                                    setEditingProductionId(null);
                                    setNewStock({ client: 'Prod. Inventaire', isInventoryProd: true, wood: '', qty: '', processes: [], date: '', location: '', state: '', txn: '', stockNo: '' });
                                }}
                            >
                                {editingProductionId ? 'Modifier la production' : 'Créer les productions'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                    <h2 className="font-bold text-lg">{isRawWood ? t.rawWood.toUpperCase() : t.activeLines}</h2>
                    {!isRawWood && (
                        <select 
                            value={filterProcess}
                            onChange={(e) => setFilterProcess(e.target.value)}
                            className="text-sm border border-gray-300 rounded-lg p-2 bg-gray-50 focus:ring-2 focus:ring-[#51aff7] outline-none"
                        >
                            <option value="all">-- {t.allProcesses || "Tous les procédés"} --</option>
                            {allProcesses.map(p => (
                                <option key={p.id} value={p.id}>{t[p.id] || p.label}</option>
                            ))}
                        </select>
                    )}
                    {/* Bouton Ajouter un stock */}
                    {!isRawWood && (
                        <button className="ml-4 px-4 py-2 bg-[#51aff7] text-white rounded shadow hover:bg-blue-600 transition" onClick={() => setShowAddStock(true)}>
                            <i className="fa-solid fa-plus mr-2"></i> Créer une production
                        </button>
                    )}
                </div>
                <div className="flex gap-2">
                    {['planning', 'running', 'paused', 'error', 'completed'].map(status => (
                        <button key={status} onClick={() => toggleStatus(status)} className={`px-3 py-1 text-xs rounded ${activeStatuses.includes(status) ? 'bg-black text-white' : 'bg-gray-100'}`}>
                            {t['status' + status.charAt(0).toUpperCase() + status.slice(1)] || status}
                        </button>
                    ))}
                </div>
            </div>
            {/* Boutons des postes de travail */}
            <div className="flex gap-3 mb-4">
                {stationDefinitions.map(station => (
                    <button 
                        key={station.id}
                        className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition flex items-center gap-2"
                        onClick={() => {
                            // Ouvrir le poste dans un nouvel onglet avec le mode poste
                            const url = new URL(window.location.href);
                            url.searchParams.set('mode', station.id);
                            window.open(url.toString(), '_blank');
                        }}
                    >
                        <i className={`fa-solid ${station.icon}`}></i>
                        {t[station.labelKey] || station.id}
                    </button>
                ))}
            </div>
            {/* DevExtreme Grid Container */}
            <div ref={gridContainerRef}></div>
        </div>
    );
};


// --- Invoice Grid Component (DevExtreme DataGrid with search/filter) ---
const InvoiceGrid = ({ savedInvoices, setSavedInvoices, setInvoiceNo, setInvoiceDate, setClientInfo, setDocType, setDocConfirmed, setTransactionNo, setOrderStatus, setVendeur, setLines, setInvoiceNotes, setTxHistory, setEditingInvoiceNo, emptyLine, onLoadInvoice }) => {
    const gridRef = useRef(null);
    const gridInstance = useRef(null);

    // Flatten invoices for DataGrid: add searchable fields at top level
    const dataSource = React.useMemo(() => {
        return savedInvoices.map((inv, idx) => ({
            ...inv,
            _idx: idx,
            clientName: inv.client?.name || 'N/A',
            clientPhone: inv.client?.phone || '',
            clientEmail: inv.client?.email || '',
            clientCity: inv.client?.city || '',
            deliveryAddress: inv.client?.deliveryAddress || '',
            lineCount: inv.lines?.length || 0,
            totalNum: parseFloat(inv.total) || 0,
            lineDescriptions: (inv.lines || []).map(l => l.description || '').filter(Boolean).join(', '),
            lineStockNos: (inv.lines || []).map(l => l.stockNo || '').filter(Boolean).join(', '),
            allText: [
                inv.invoiceNo, inv.transactionNo, inv.docType, inv.date,
                inv.client?.name, inv.client?.phone, inv.client?.email, inv.client?.city,
                inv.notes,
                ...(inv.lines || []).map(l => [l.stockNo, l.description, l.productCode].join(' '))
            ].filter(Boolean).join(' ').toLowerCase()
        }));
    }, [savedInvoices]);

    useEffect(() => {
        if (!gridRef.current) return;

        if (gridInstance.current) {
            gridInstance.current.option('dataSource', dataSource);
            return;
        }

        gridInstance.current = new DevExpress.ui.dxDataGrid(gridRef.current, {
            dataSource: dataSource,
            keyExpr: 'invoiceNo',
            showBorders: true,
            columnAutoWidth: true,
            rowAlternationEnabled: true,
            hoverStateEnabled: true,
            wordWrapEnabled: false,
            height: 500,
            filterRow: { visible: true },
            searchPanel: { visible: true, width: 300, placeholder: 'Rechercher par nom, no., mot-clé...' },
            headerFilter: { visible: true },
            filterPanel: { visible: true },
            paging: { pageSize: 15 },
            pager: {
                visible: true,
                showPageSizeSelector: true,
                allowedPageSizes: [10, 15, 30, 50],
                showInfo: true
            },
            sorting: { mode: 'multiple' },
            columns: [
                {
                    dataField: 'invoiceNo',
                    caption: 'No. Facture',
                    width: 120,
                    sortOrder: 'desc',
                    cellTemplate: (container, options) => {
                        const el = document.createElement('span');
                        el.style.fontWeight = 'bold';
                        el.style.color = '#51aff7';
                        el.textContent = options.value || '';
                        container.append(el);
                    }
                },
                {
                    dataField: 'transactionNo',
                    caption: 'No. Transaction',
                    width: 130
                },
                {
                    dataField: 'docType',
                    caption: 'Type',
                    width: 130,
                    headerFilter: {
                        dataSource: [
                            { text: 'Soumission', value: 'Soumission' },
                            { text: 'Bon de vente', value: 'Bon de vente' },
                            { text: 'Facture', value: 'Facture' }
                        ]
                    },
                    cellTemplate: (container, options) => {
                        const val = options.value || 'Facture';
                        const el = document.createElement('span');
                        let cls = 'bg-gray-100 text-gray-700';
                        if (val === 'Soumission') cls = 'bg-yellow-100 text-yellow-700';
                        else if (val === 'Bon de vente') cls = 'bg-blue-100 text-blue-700';
                        else if (val === 'Facture') cls = 'bg-green-100 text-green-700';
                        el.className = `px-2 py-1 rounded text-xs font-bold ${cls}`;
                        el.textContent = val;
                        container.append(el);
                    }
                },
                {
                    dataField: 'date',
                    caption: 'Date',
                    dataType: 'date',
                    width: 110
                },
                {
                    dataField: 'clientName',
                    caption: 'Client',
                    width: 200
                },
                {
                    dataField: 'clientPhone',
                    caption: 'Téléphone',
                    width: 130,
                    visible: false
                },
                {
                    dataField: 'clientEmail',
                    caption: 'Courriel',
                    width: 180,
                    visible: false
                },
                {
                    dataField: 'clientCity',
                    caption: 'Ville',
                    width: 120,
                    visible: false
                },
                {
                    dataField: 'deliveryAddress',
                    caption: 'Adresse de livraison',
                    width: 200
                },
                {
                    dataField: 'docStatut',
                    caption: 'Statut',
                    width: 120,
                    calculateCellValue: (rowData) => {
                        const type = rowData.docType || '';
                        if (type === 'Bon de vente') return 'En cours';
                        if (type === 'Soumission') return 'En attente';
                        if (type === 'Facture') return 'Facturé';
                        return '';
                    },
                    headerFilter: {
                        dataSource: [
                            { text: 'En cours', value: 'En cours' },
                            { text: 'En attente', value: 'En attente' },
                            { text: 'Facturé', value: 'Facturé' }
                        ]
                    },
                    cellTemplate: (container, options) => {
                        const val = options.value || '';
                        const el = document.createElement('span');
                        let cls = 'bg-gray-100 text-gray-700';
                        if (val === 'En cours') cls = 'bg-yellow-100 text-yellow-700';
                        else if (val === 'En attente') cls = 'bg-green-100 text-green-700';
                        else if (val === 'Facturé') cls = 'bg-red-100 text-red-700';
                        el.className = `px-2 py-1 rounded text-xs font-bold ${cls}`;
                        el.textContent = val;
                        container.append(el);
                    }
                },
                {
                    dataField: 'lineCount',
                    caption: 'Lignes',
                    dataType: 'number',
                    width: 80,
                    alignment: 'center'
                },
                {
                    dataField: 'lineDescriptions',
                    caption: 'Produits',
                    width: 250,
                    visible: false
                },
                {
                    dataField: 'lineStockNos',
                    caption: 'No. Stocks',
                    width: 150,
                    visible: false
                },
                {
                    dataField: 'totalNum',
                    caption: 'Total',
                    dataType: 'number',
                    format: { type: 'currency', precision: 2 },
                    width: 120,
                    alignment: 'right'
                },
                {
                    caption: 'Actions',
                    width: 160,
                    alignment: 'center',
                    allowFiltering: false,
                    allowSorting: false,
                    cellTemplate: (container, options) => {
                        const inv = options.data;
                        const wrapper = document.createElement('div');
                        wrapper.className = 'flex gap-1 justify-center';

                        const btnLoad = document.createElement('button');
                        btnLoad.className = 'px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-xs font-bold';
                        btnLoad.innerHTML = '<i class="fa fa-eye mr-1"></i>Charger';
                        btnLoad.title = 'Charger cette facture';
                        btnLoad.onclick = (e) => {
                            e.stopPropagation();
                            setInvoiceNo(inv.invoiceNo);
                            setInvoiceDate(inv.date);
                            setClientInfo(inv.client || {});
                            setDocType(inv.docType || 'Facture');
                            setDocConfirmed(true);
                            setTransactionNo(inv.transactionNo || '');
                            setOrderStatus(inv.orderStatus || '');
                            setVendeur(inv.vendeur || '');
                            setLines(inv.lines && inv.lines.length > 0 ? inv.lines : Array.from({ length: 1 }, () => ({ ...emptyLine })));
                            setInvoiceNotes(inv.notes || '');
                            setTxHistory(inv.txHistory || []);
                            setEditingInvoiceNo(inv.invoiceNo);
                            if (onLoadInvoice) onLoadInvoice();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        };
                        wrapper.appendChild(btnLoad);

                        const btnPrint = document.createElement('button');
                        btnPrint.className = 'px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-xs font-bold';
                        btnPrint.innerHTML = '<i class="fa fa-print"></i>';
                        btnPrint.title = 'Imprimer';
                        btnPrint.onclick = (e) => {
                            e.stopPropagation();
                            setInvoiceNo(inv.invoiceNo);
                            setInvoiceDate(inv.date);
                            setClientInfo(inv.client || {});
                            setDocType(inv.docType || 'Facture');
                            setDocConfirmed(true);
                            setTransactionNo(inv.transactionNo || '');
                            setOrderStatus(inv.orderStatus || '');
                            setVendeur(inv.vendeur || '');
                            setLines(inv.lines && inv.lines.length > 0 ? inv.lines : Array.from({ length: 1 }, () => ({ ...emptyLine })));
                            setInvoiceNotes(inv.notes || '');
                            setTxHistory(inv.txHistory || []);
                            setEditingInvoiceNo(inv.invoiceNo);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setTimeout(() => {
                                const oldTitle = document.title;
                                document.title = inv.invoiceNo + '.pdf';
                                window.print();
                                setTimeout(() => document.title = oldTitle, 1000);
                            }, 300);
                        };
                        wrapper.appendChild(btnPrint);

                        const btnDelete = document.createElement('button');
                        btnDelete.className = 'px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 text-xs font-bold';
                        btnDelete.innerHTML = '<i class="fa fa-trash"></i>';
                        btnDelete.title = 'Supprimer';
                        btnDelete.onclick = (e) => {
                            e.stopPropagation();
                            if (confirm('Supprimer la facture ' + inv.invoiceNo + ' ?')) {
                                setSavedInvoices(prev => prev.filter(i => i.invoiceNo !== inv.invoiceNo));
                            }
                        };
                        wrapper.appendChild(btnDelete);

                        container.append(wrapper);
                    }
                }
            ],
            columnChooser: { enabled: true, mode: 'select', title: 'Colonnes visibles' },
            export: { enabled: true, fileName: 'factures' },
            summary: {
                totalItems: [
                    { column: 'totalNum', summaryType: 'sum', valueFormat: { type: 'currency', precision: 2 }, displayFormat: 'Total: {0}' },
                    { column: 'invoiceNo', summaryType: 'count', displayFormat: '{0} facture(s)' }
                ]
            }
        });

        return () => {
            if (gridInstance.current) {
                gridInstance.current.dispose();
                gridInstance.current = null;
            }
        };
    }, []);

    // Update data source when invoices change (after initial mount)
    useEffect(() => {
        if (gridInstance.current) {
            gridInstance.current.option('dataSource', dataSource);
        }
    }, [dataSource]);

    return <div ref={gridRef}></div>;
};

const DataEntryView = ({ t, addBatch, setActiveTab, customProcesses = [], woodTreatments = [], processParameters = {}, inventory = [], setInventory = () => {}, onDirtyChange = () => {}, onSaveRef = () => {} }) => {
    // Saved invoices
    const [savedInvoices, setSavedInvoices] = useState(() => {
        const saved = localStorage.getItem('invoices');
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => { localStorage.setItem('invoices', JSON.stringify(savedInvoices)); }, [savedInvoices]);

    // Invoice number auto-generated
    const generateInvoiceNo = () => {
        const existing = savedInvoices.map(inv => {
            const m = (inv.invoiceNo || '').match(/^(\d+)$/);
            return m ? parseInt(m[1], 10) : 0;
        });
        const max = existing.length > 0 ? Math.max(...existing) : 0;
        return String(Math.max(max + 1, 100)).padStart(6, '0');
    };

    // Transaction number auto-generated
    const generateTransactionNo = () => {
        const existing = savedInvoices.map(inv => {
            const m = (inv.transactionNo || '').match(/^(\d+)$/);
            return m ? parseInt(m[1], 10) : 0;
        });
        const max = existing.length > 0 ? Math.max(...existing) : 0;
        return String(Math.max(max + 1, 100)).padStart(6, '0');
    };

    const [transactionNo, setTransactionNo] = useState('');
    const [docConfirmed, setDocConfirmed] = useState(false);

    // Client info
    const [clientInfo, setClientInfo] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        phone: '',
        email: '',
        deliveryAddress: '',
        deliveryCity: '',
        deliveryPostalCode: '',
        deliveryNotes: ''
    });

    const [clientDeliveryExpanded, setClientDeliveryExpanded] = useState(true);

    const isClientFilled = clientInfo.name.trim() !== '';
    const isDeliveryFilled = clientInfo.deliveryAddress.trim() !== '';

    const [invoiceNo, setInvoiceNo] = useState('');
    const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
    const [invoiceNotes, setInvoiceNotes] = useState('');
    const [editingInvoiceNo, setEditingInvoiceNo] = useState(null);

    // Invoice lines
    const emptyLine = { stockNo: '', productCode: '', description: '', qtyVendu: '', qtyExp: '', um: 'PC', prix: '', escompte: '', statut: '', procedes: [] };
    const [lines, setLines] = useState(() => Array.from({ length: 1 }, () => ({ ...emptyLine })));

    // Document type (Soumission, Bon de vente, Facture)
    const docTypeOptions = ['Soumission', 'Bon de vente', 'Facture'];
    const [docType, setDocType] = useState('');

    // Order status
    const orderStatusOptions = ['Commander', 'Production', 'Procédé', 'Préparer', 'Expédier'];
    const [orderStatus, setOrderStatus] = useState('');

    // Vendeur (salesperson)
    const [vendeur, setVendeur] = useState('');

    // Procédé selection modal state
    const [procedeLineIndex, setProcedeLineIndex] = useState(null);
    const [procedeSelection, setProcedeSelection] = useState([]);

    // Transfer soumission to bon de vente
    const [showTransferModal, setShowTransferModal] = useState(false);

    // Horaire / Scheduler state
    const [showScheduler, setShowScheduler] = useState(false);
    const [schedulerViewTab, setSchedulerViewTab] = useState('liste'); // 'liste' or 'calendrier'
    const [editingEvent, setEditingEvent] = useState(null); // event being edited inline
    const [schedulerFilterCats, setSchedulerFilterCats] = useState([1, 2, 3, 4]); // all categories active by default
    const [schedulerEvents, setSchedulerEvents] = useState(() => {
        try {
            const raw = JSON.parse(localStorage.getItem('schedulerEvents') || '[]');
            return raw.map((ev, i) => ({ ...ev, id: ev.id || (Date.now() + i) }));
        } catch { return []; }
    });
    const schedulerRef = useRef(null);
    const schedulerContainerRef = useRef(null);

    const schedulerCategories = [
        { id: 1, text: 'Installation', color: '#4CAF50' },
        { id: 2, text: 'Livraison', color: '#2196F3' },
        { id: 3, text: 'Cueillette', color: '#FF9800' },
        { id: 4, text: 'RDV', color: '#9C27B0' }
    ];

    useEffect(() => {
        if (schedulerEvents.length > 0) {
            localStorage.setItem('schedulerEvents', JSON.stringify(schedulerEvents));
        }
    }, [schedulerEvents]);

    // --- Transaction History / Audit Trail ---
    const [txHistory, setTxHistory] = useState([]);
    const [showHistorique, setShowHistorique] = useState(false);

    const logAction = (action, detail) => {
        setTxHistory(prev => [...prev, {
            date: new Date().toLocaleDateString('fr-CA'),
            heure: new Date().toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            usager: vendeur || 'Système',
            action,
            detail: detail || ''
        }]);
    };

    useEffect(() => {
        if (!showScheduler || schedulerViewTab !== 'calendrier' || !schedulerContainerRef.current) return;
        // Destroy previous instance
        if (schedulerRef.current) {
            try { schedulerRef.current.dispose(); } catch (_) {}
            schedulerRef.current = null;
        }
        const el = schedulerContainerRef.current;
        const txLabel = (transactionNo || invoiceNo || 'Sans num\u00e9ro');
        const clientLabel = clientInfo.name || 'Client non sp\u00e9cifi\u00e9';
        const deliveryAddr = [clientInfo.deliveryAddress, clientInfo.deliveryCity, clientInfo.deliveryPostalCode].filter(Boolean).join(', ') || [clientInfo.address, clientInfo.city, clientInfo.postalCode].filter(Boolean).join(', ') || '';
        const vendeurLabel = vendeur || '';

        try {
        const dsItems = schedulerEvents
            .filter(ev => schedulerFilterCats.includes(ev.categoryId))
            .map(ev => ({
                ...ev,
                id: ev.id || Date.now() + Math.random(),
                startDate: new Date(ev.startDate),
                endDate: new Date(ev.endDate)
            }));
        const scheduler = new DevExpress.ui.dxScheduler(el, {
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.ArrayStore({
                    data: dsItems,
                    key: 'id'
                })
            }),
            views: ['day', 'week', 'month', 'agenda'],
            currentView: 'week',
            currentDate: new Date(),
            startDayHour: 6,
            endDayHour: 20,
            height: '100%',
            editing: { allowAdding: true, allowUpdating: true, allowDeleting: true },
            resources: [{
                fieldExpr: 'categoryId',
                dataSource: schedulerCategories,
                label: 'Cat\u00e9gorie'
            }],
            onAppointmentFormOpening: (e) => {
                var form = e.form;
                var apptData = e.appointmentData;
                var isNew = !apptData.text;

                // Pre-fill appointment data for new appointments
                if (isNew) {
                    apptData.text = clientLabel + ' - ' + txLabel;
                    apptData.noTransaction = txLabel;
                    apptData.adresseLivraison = deliveryAddr;
                    apptData.vendeur = vendeurLabel;
                    apptData.description = 'Transaction: ' + txLabel + '\nClient: ' + clientLabel + (deliveryAddr ? '\nAdresse: ' + deliveryAddr : '') + (vendeurLabel ? '\nVendeur: ' + vendeurLabel : '');
                }

                // Also set on the form's own formData reference
                var formData = form.option('formData');
                if (isNew && formData) {
                    formData.text = apptData.text;
                    formData.description = apptData.description;
                    formData.noTransaction = apptData.noTransaction;
                    formData.adresseLivraison = apptData.adresseLivraison;
                    formData.vendeur = apptData.vendeur;
                }

                // Add custom fields to the form
                var items = form.option('items');
                var alreadyAdded = false;
                for (var gi = 0; gi < items.length; gi++) {
                    if (items[gi] && items[gi].items) {
                        for (var ii = 0; ii < items[gi].items.length; ii++) {
                            if (items[gi].items[ii].dataField === 'categoryId') {
                                alreadyAdded = true;
                                break;
                            }
                        }
                    }
                    if (alreadyAdded) break;
                }
                if (!alreadyAdded) {
                    for (var g = 0; g < items.length; g++) {
                        if (items[g] && items[g].items) {
                            items[g].items.push(
                                {
                                    dataField: 'categoryId',
                                    editorType: 'dxSelectBox',
                                    editorOptions: {
                                        dataSource: schedulerCategories,
                                        valueExpr: 'id',
                                        displayExpr: 'text'
                                    },
                                    label: { text: 'Cat\u00e9gorie' }
                                },
                                {
                                    dataField: 'noTransaction',
                                    editorType: 'dxTextBox',
                                    editorOptions: { placeholder: 'No de transaction' },
                                    label: { text: 'No Transaction' }
                                },
                                {
                                    dataField: 'adresseLivraison',
                                    editorType: 'dxTextBox',
                                    editorOptions: { placeholder: 'Adresse de livraison' },
                                    label: { text: 'Adresse livraison' }
                                },
                                {
                                    dataField: 'vendeur',
                                    editorType: 'dxTextBox',
                                    editorOptions: { placeholder: 'Nom du vendeur / repr\u00e9sentant' },
                                    label: { text: 'Vendeur' }
                                }
                            );
                            form.option('items', items);
                            break;
                        }
                    }
                }

                // Force update all editors with the correct values after form rebuild
                setTimeout(function() {
                    try {
                        var textEd = form.getEditor('text');
                        if (textEd) textEd.option('value', apptData.text || '');
                        var descEd = form.getEditor('description');
                        if (descEd) descEd.option('value', apptData.description || '');
                        var txEd = form.getEditor('noTransaction');
                        if (txEd) txEd.option('value', apptData.noTransaction || '');
                        var addrEd = form.getEditor('adresseLivraison');
                        if (addrEd) addrEd.option('value', apptData.adresseLivraison || '');
                        var vendEd = form.getEditor('vendeur');
                        if (vendEd) vendEd.option('value', apptData.vendeur || '');
                    } catch(err) { console.error('Scheduler form update error:', err); }
                }, 300);
            },
            onAppointmentAdded: (e) => {
                setSchedulerEvents(prev => {
                    const updated = [...prev, { ...e.appointmentData, id: Date.now() }];
                    localStorage.setItem('schedulerEvents', JSON.stringify(updated));
                    return updated;
                });
            },
            onAppointmentUpdated: (e) => {
                setSchedulerEvents(prev => {
                    const updated = prev.map(ev => {
                        if (ev.id === e.appointmentData.id ||
                            (ev.startDate === e.appointmentData.startDate && ev.text === e.appointmentData.text)) {
                            return { ...e.appointmentData };
                        }
                        return ev;
                    });
                    localStorage.setItem('schedulerEvents', JSON.stringify(updated));
                    return updated;
                });
            },
            onAppointmentDeleted: (e) => {
                setSchedulerEvents(prev => {
                    const updated = prev.filter(ev => ev.id !== e.appointmentData.id);
                    localStorage.setItem('schedulerEvents', JSON.stringify(updated));
                    return updated;
                });
            }
        });
        schedulerRef.current = scheduler;
        } catch (err) {
            console.error('Scheduler init error:', err);
        }
        return () => {
            if (schedulerRef.current) {
                try { schedulerRef.current.dispose(); } catch (_) {}
                schedulerRef.current = null;
            }
        };
    }, [showScheduler, schedulerViewTab, schedulerFilterCats]);

    // Facturation tab state
    const [facturationTab, setFacturationTab] = useState('factures');

    // Inventory detail modal
    const [viewInventoryItem, setViewInventoryItem] = useState(null);

    // Bon de préparation (expedition) modal state
    const [showBonPrep, setShowBonPrep] = useState(false);
    const [bonPrepDate, setBonPrepDate] = useState(new Date().toISOString().split('T')[0]);
    const [bonPrepLines, setBonPrepLines] = useState([]);
    const [bonPrepUser, setBonPrepUser] = useState('');

    // --- Commandes d'achat (purchase orders) ---
    const [commandes, setCommandes] = useState(() => {
        const saved = localStorage.getItem('commandesAchat');
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => { localStorage.setItem('commandesAchat', JSON.stringify(commandes)); }, [commandes]);

    // Bon de commande modal state
    const [showBonCommande, setShowBonCommande] = useState(false);
    const [bonCommandeLines, setBonCommandeLines] = useState([]);
    const [bonCommandeVendor, setBonCommandeVendor] = useState('');
    const [bonCommandeUser, setBonCommandeUser] = useState('');
    const [bonCommandeNotes, setBonCommandeNotes] = useState("Veuillez svp inclure ce bon de commande avec la facture.\nRespecter les standards de qualité Surfagest.\nEmballage sécuritaire requis pour le transport de retour.");

    // Fournisseurs disponibles
    const fournisseurs = [
        { name: "SOUS-TRAITANT GÉNÉRAL", attention: "Production", address: "123 Rue Industriel, QC", email: "production@soustraitant.com" },
        { name: "ATELIER BOIS PRO", attention: "Jean-Pierre", address: "456 Av du Bois, QC", email: "jp@atelierboispro.com" },
        { name: "PEINTURE EXPERT INC", attention: "Service commande", address: "789 Boul. Couleur, QC", email: "commandes@peintureexpert.com" },
        { name: "QUINCAILLERIE INDUSTRIELLE", attention: "Département vente", address: "321 Rue Commerce, QC", email: "ventes@quincaillerie.com" },
        { name: "BOIS FRANC SÉLECT", attention: "Service des ventes", address: "555 Boul. du Bois, QC", email: "ventes@boisfranc.com" }
    ];

    // Saved invoices grid ref
    const invoiceGridRef = useRef(null);
    const docTypeSelectRef = useRef(null);
    const invoiceGridInstance = useRef(null);

    // Track dirty state — notify parent when invoice has unsaved changes
    useEffect(() => {
        const hasData = clientInfo.name.trim() !== '' || 
                        lines.some(l => l.stockNo || l.description) || 
                        invoiceNotes.trim() !== '' ||
                        docType !== '';
        onDirtyChange(hasData);
    }, [clientInfo, lines, invoiceNotes, docType]);

    // Expose save function to parent via ref callback
    useEffect(() => {
        onSaveRef(handleSaveInvoice);
    });

    // Recalculate inventory reservations
    useEffect(() => {
        const reserveMap = {};
        // Sum from saved invoices (Bon de vente or Facture only)
        savedInvoices.forEach(inv => {
            if (inv.docType === 'Bon de vente' || inv.docType === 'Facture') {
                (inv.lines || []).forEach(l => {
                    if (l.stockNo && (l.lineStatut === 'Réservé' || l.lineStatut === 'En Commande' || l.lineStatut === 'Commandé')) {
                        const qty = parseFloat(l.qtyVendu) || 0;
                        reserveMap[l.stockNo] = (reserveMap[l.stockNo] || 0) + qty;
                    }
                });
            }
        });
        // Sum from current working lines (if Bon de vente or Facture)
        if (docType === 'Bon de vente' || docType === 'Facture') {
            lines.forEach(l => {
                if (l.stockNo && (l.lineStatut === 'Réservé' || l.lineStatut === 'En Commande' || l.lineStatut === 'Commandé')) {
                    const qty = parseFloat(l.qtyVendu) || 0;
                    reserveMap[l.stockNo] = (reserveMap[l.stockNo] || 0) + qty;
                }
            });
        }
        // Compute qtyComm from commandes (pending/ordered, subtract already received)
        const commandeMap = {};
        commandes.forEach(cmd => {
            if (cmd.stockNo && cmd.statut !== 'Reçu') {
                const remaining = Math.max(0, (parseFloat(cmd.qtyCommande) || 0) - (parseFloat(cmd.qtyRecue) || 0));
                commandeMap[cmd.stockNo] = (commandeMap[cmd.stockNo] || 0) + remaining;
            }
        });

        // Update inventory with reservations and commandes
        setInventory(prev => {
            const updated = prev.map(item => ({
                ...item,
                qtyReserve: reserveMap[item.stockNo] || 0,
                qtyComm: commandeMap[item.stockNo] || 0
            }));
            localStorage.setItem('inventory', JSON.stringify(updated));
            return updated;
        });
    }, [lines, savedInvoices, docType, commandes]);

    // Inventory search state per line
    const [activeLineSearch, setActiveLineSearch] = useState(null);
    const [lineSearch, setLineSearch] = useState('');
    const [lineSearchFilter, setLineSearchFilter] = useState('');
    const [selectedInventoryItems, setSelectedInventoryItems] = useState([]);

    const toggleInventorySelection = (item) => {
        setSelectedInventoryItems(prev => {
            const exists = prev.find(i => i.stockNo === item.stockNo);
            if (exists) return prev.filter(i => i.stockNo !== item.stockNo);
            return [...prev, item];
        });
    };

    const importSelectedItems = () => {
        if (selectedInventoryItems.length === 0) return;
        setLines(prev => {
            // Remove empty lines at the end
            let cleaned = [...prev];
            while (cleaned.length > 1 && !cleaned[cleaned.length - 1].stockNo && !cleaned[cleaned.length - 1].description) {
                cleaned.pop();
            }
            // If only one empty line exists, replace it with the first selected item
            const newLines = selectedInventoryItems.map(item => {
                const invItem = inventory.find(i => i.stockNo === item.stockNo);
                return {
                    ...emptyLine,
                    stockNo: item.stockNo,
                    productCode: item.productCode || '',
                    description: (item.description || item.wood || '') + (item.grade ? ' (' + item.grade + ')' : ''),
                    um: item.unite || 'PC',
                    prix: '',
                    qtyVendu: '',
                    lineStatut: 'En attente'
                };
            });
            if (cleaned.length === 1 && !cleaned[0].stockNo && !cleaned[0].description) {
                return newLines;
            }
            return [...cleaned, ...newLines];
        });
        setSelectedInventoryItems([]);
        setActiveLineSearch(null);
        setLineSearch('');
        setLineSearchFilter('');
        DevExpress.ui.notify(selectedInventoryItems.length + ' produit(s) importé(s)', 'success', 2000);
    };

    // --- Enter key navigation: move to next input/select in the invoice form ---
    const handleInvoiceKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const form = e.target.closest('.invoice-form-container');
            if (!form) return;
            const focusable = Array.from(form.querySelectorAll('input:not([type=checkbox]):not([type=hidden]):not([readonly]):not(:disabled), select:not(:disabled), textarea:not(:disabled)'));
            const currentIndex = focusable.indexOf(e.target);
            if (currentIndex >= 0 && currentIndex < focusable.length - 1) {
                focusable[currentIndex + 1].focus();
                if (focusable[currentIndex + 1].select) focusable[currentIndex + 1].select();
            }
        }
    };

    const inputClass = "w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#51aff7] focus:border-transparent transition text-sm";
    const labelClass = "block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide";
    const thClass = "px-2 py-2 text-left text-xs font-bold text-gray-600 uppercase tracking-wider bg-gray-100 border-b-2 border-gray-300";

    const updateLine = (index, field, value) => {
        let updatedLine = null;
        setLines(prev => prev.map((line, i) => {
            if (i !== index) return line;
            const updated = { ...line, [field]: value };
            // Auto-calc Qté restante (only if available in inventory)
            const vendu = parseFloat(updated.qtyVendu) || 0;
            const exp = parseFloat(updated.qtyExp) || 0;
            const invItem = inventory.find(item => item.stockNo === updated.stockNo);
            const qtyEnMain = invItem ? (invItem.qty || 0) : 0;
            const qtyEnComm = invItem ? (invItem.qtyComm || 0) : 0;
            const qtyDejaRes = invItem ? (invItem.qtyReserve || 0) : 0;
            const qtyDisponible = Math.max(0, qtyEnMain + qtyEnComm - qtyDejaRes);
            updated.qtyRes = qtyDisponible >= vendu ? Math.max(0, vendu - exp) : 0;
            // Auto-calc Prix vente
            const prix = parseFloat(updated.prix) || 0;
            const esc = parseFloat(updated.escompte) || 0;
            updated.prixVente = (prix * (1 - esc / 100) * vendu).toFixed(2);
            // Auto-calc line status
            if (updated.lineStatut === 'Commandé' || updated.lineStatut === 'Exp. (Commandé)' || updated.lineStatut === 'Expédié') {
                // Preserve confirmed/expedited statuses — don't recalculate
                updated.qtyRes = Math.max(0, vendu - exp);
            } else if (updated.statut === 'Commander') {
                updated.lineStatut = 'En Commande';
                // En Commande: la qté reste réservée car couverte par la commande
                updated.qtyRes = Math.max(0, vendu - exp);
            } else if (updated.stockNo && vendu > 0) {
                if (qtyDisponible >= vendu) {
                    updated.lineStatut = 'R\u00e9serv\u00e9';
                } else {
                    // Qté insuffisante: retirer le numéro de stock pour ne pas le sauvegarder
                    updated.qtyRes = 0;
                    updated.lineStatut = 'Insuffisant';
                    updated.stockNo = '';
                    DevExpress.ui.notify('Quantit\u00e9 insuffisante en inventaire (' + qtyDisponible + ' disponible, en main: ' + qtyEnMain + ', en comm.: ' + qtyEnComm + ', r\u00e9s.: ' + qtyDejaRes + ')', 'warning', 3000);
                }
            } else {
                updated.lineStatut = 'En attente';
            }
            updatedLine = updated;
            return updated;
        }));

        // Auto-create production when "Production" is selected as action
        if (field === 'statut' && value === 'Production') {
            // Use setTimeout to ensure setLines has completed and updatedLine is captured
            setTimeout(() => {
                const line = updatedLine || lines[index];
                if (!line || (!line.stockNo && !line.description)) {
                    console.warn('Production non créée: ligne sans stock ni description');
                    return;
                }
                const invItem = inventory.find(item => item.stockNo === line.stockNo);
                const batch = {
                    client: clientInfo.name || 'Facturation',
                    txn: transactionNo || invoiceNo || '',
                    wood: invItem ? (invItem.wood || '') : '',
                    grade: invItem ? (invItem.grade || '') : '',
                    qty: parseFloat(line.qtyVendu) || 0,
                    process: (line.procedes && line.procedes.length > 0) ? line.procedes[0].id : '',
                    date: invoiceDate || '',
                    stockNo: line.stockNo || '',
                    width: invItem ? (invItem.largeur || '') : '',
                    thickness: invItem ? (invItem.epaisseur || '') : '',
                    targetProductCode: line.productCode || '',
                    targetProductInfo: invItem ? {
                        description: invItem.description || '',
                        wood: invItem.wood || '',
                        epaisseur: invItem.epaisseur || '',
                        largeur: invItem.largeur || '',
                        grade: invItem.grade || '',
                        unite: invItem.unite || ''
                    } : null,
                    status: 'planning',
                    progress: 0,
                    sourceDoc: docType,
                    sourceInvoiceNo: invoiceNo,
                    sourceTransactionNo: transactionNo
                };
                // Include procédés as production steps
                if (line.procedes && line.procedes.length > 0) {
                    batch.steps = line.procedes.map(p => p.id);
                    if (line.procedes.length > 1) {
                        batch.stepIndex = 0;
                    }
                }
                addBatch(batch);
                DevExpress.ui.notify('Production cr\u00e9\u00e9e pour ' + (line.description || line.stockNo), 'success', 3000);
            }, 0);
        }
    };

    const addLine = () => {
        setLines(prev => [...prev, { ...emptyLine }]);
        logAction('Ajout ligne', `Ligne ${lines.length + 1} ajoutée`);
    };

    const removeLine = (index) => {
        if (lines.length <= 1) return;
        const line = lines[index];
        const desc = line.description || line.stockNo || `Ligne ${index + 1}`;
        DevExpress.ui.dialog.confirm(
            `<div style="text-align:center;padding:10px 0;">
                <i class="fa fa-exclamation-triangle" style="font-size:32px;color:#ef4444;margin-bottom:10px;display:block;"></i>
                <span style="font-size:15px;">Voulez-vous vraiment supprimer cette ligne?</span><br/>
                <strong style="color:#374151;">${desc}</strong>
            </div>`,
            'Confirmation de suppression'
        ).then((confirmed) => {
            if (confirmed) {
                setLines(prev => prev.filter((_, i) => i !== index));
                logAction('Suppression ligne', `Ligne ${index + 1} supprimée — ${desc}`);
                DevExpress.ui.notify('Ligne supprimée', 'info', 2000);
            }
        });
    };

    const selectInventoryForLine = (index, item) => {
        setLines(prev => prev.map((line, i) => {
            if (i !== index) return line;
            const updated = {
                ...line,
                stockNo: item.stockNo,
                productCode: item.productCode || '',
                description: (item.description || item.wood || '') + (item.grade ? ' (' + item.grade + ')' : ''),
                um: item.unite || 'PC',
                prix: ''
            };
            const vendu = parseFloat(updated.qtyVendu) || 0;
            const exp = parseFloat(updated.qtyExp) || 0;
            const qtyDisponible = Math.max(0, (item.qty || 0) + (item.qtyComm || 0) - (item.qtyReserve || 0));
            updated.qtyRes = qtyDisponible >= vendu ? Math.max(0, vendu - exp) : 0;
            if (updated.stockNo && vendu > 0) {
                if (qtyDisponible >= vendu) {
                    updated.lineStatut = 'R\u00e9serv\u00e9';
                } else {
                    updated.lineStatut = 'Insuffisant';
                    updated.qtyRes = 0;
                    updated.stockNo = '';
                    DevExpress.ui.notify('Quantit\u00e9 insuffisante en inventaire (' + qtyDisponible + ' disponible)', 'warning', 3000);
                }
            } else {
                updated.lineStatut = 'En attente';
            }
            return updated;
        }));
        logAction('Sélection produit', `Ligne ${index + 1} — Stock: ${item.stockNo}, ${(item.description || item.wood || '')}`);
        setActiveLineSearch(null);
        setLineSearch('');
        setLineSearchFilter('');
    };

    const lookupInventoryForLine = (index, searchValue) => {
        if (!searchValue.trim()) return;
        const val = searchValue.trim().toLowerCase();
        const found = inventory.find(item =>
            (item.stockNo || '').toLowerCase() === val ||
            (item.productCode || '').toLowerCase() === val
        );
        if (found) {
            setLines(prev => prev.map((line, i) => {
                if (i !== index) return line;
                const updated = {
                    ...line,
                    stockNo: found.stockNo || searchValue,
                    productCode: found.productCode || '',
                    description: (found.description || found.wood || '') + (found.grade ? ' (' + found.grade + ')' : ''),
                    um: found.unite || 'PC',
                    prix: ''
                };
                const vendu = parseFloat(updated.qtyVendu) || 0;
                const exp = parseFloat(updated.qtyExp) || 0;
                const qtyDisponible = Math.max(0, (found.qty || 0) + (found.qtyComm || 0) - (found.qtyReserve || 0));
                updated.qtyRes = qtyDisponible >= vendu ? Math.max(0, vendu - exp) : 0;
                if (updated.stockNo && vendu > 0) {
                    if (qtyDisponible >= vendu) {
                        updated.lineStatut = 'R\u00e9serv\u00e9';
                    } else {
                        updated.lineStatut = 'Insuffisant';
                        updated.qtyRes = 0;
                        updated.stockNo = '';
                        DevExpress.ui.notify('Quantit\u00e9 insuffisante en inventaire (' + qtyDisponible + ' disponible)', 'warning', 3000);
                    }
                } else {
                    updated.lineStatut = 'En attente';
                }
                return updated;
            }));
        }
    };

    // Totals
    const sousTotal = lines.reduce((sum, l) => sum + (parseFloat(l.prixVente) || 0), 0);
    const tps = sousTotal * 0.05;
    const tvq = sousTotal * 0.09975;
    const total = sousTotal + tps + tvq;

    // Auto-save: save automatically when form has data
    const autoSaveTimerRef = useRef(null);
    useEffect(() => {
        // Only auto-save when document is confirmed and has minimum data
        if (!docConfirmed || !docType || !clientInfo.name.trim()) return;
        if (lines.every(l => !l.stockNo && !l.description)) return;

        if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
        autoSaveTimerRef.current = setTimeout(() => {
            // Auto-generate numbers if not set
            let currentInvoiceNo = invoiceNo;
            let currentTransactionNo = transactionNo;
            if (!currentInvoiceNo && docType === 'Facture') {
                currentInvoiceNo = generateInvoiceNo();
                setInvoiceNo(currentInvoiceNo);
            }
            if (!currentTransactionNo) {
                currentTransactionNo = generateTransactionNo();
                setTransactionNo(currentTransactionNo);
            }

            const st = lines.reduce((sum, l) => sum + (parseFloat(l.prixVente) || 0), 0);
            const t1 = st * 0.05;
            const t2 = st * 0.09975;
            const tot = st + t1 + t2;

            const invoice = {
                invoiceNo: currentInvoiceNo,
                transactionNo: currentTransactionNo,
                docType,
                orderStatus,
                vendeur,
                date: invoiceDate,
                client: { ...clientInfo },
                lines: lines.filter(l => l.stockNo || l.description),
                notes: invoiceNotes,
                txHistory: txHistory,
                sousTotal: st.toFixed(2),
                tps: t1.toFixed(2),
                tvq: t2.toFixed(2),
                total: tot.toFixed(2),
                createdAt: new Date().toISOString()
            };

            if (editingInvoiceNo) {
                setSavedInvoices(prev => prev.map(inv => {
                    if (inv.invoiceNo === editingInvoiceNo || (editingInvoiceNo === currentTransactionNo && inv.transactionNo === currentTransactionNo)) {
                        return { ...invoice, createdAt: inv.createdAt, updatedAt: new Date().toISOString() };
                    }
                    return inv;
                }));
            } else {
                // Check if already saved with same transactionNo (avoid duplicates)
                setSavedInvoices(prev => {
                    const existing = prev.find(inv => inv.transactionNo === currentTransactionNo);
                    if (existing) {
                        return prev.map(inv => inv.transactionNo === currentTransactionNo
                            ? { ...invoice, createdAt: inv.createdAt, updatedAt: new Date().toISOString() }
                            : inv
                        );
                    }
                    return [invoice, ...prev];
                });
                setEditingInvoiceNo(currentInvoiceNo || currentTransactionNo);
            }
        }, 1500);

        return () => { if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current); };
    }, [lines, clientInfo, invoiceNotes, docType, orderStatus, invoiceDate, docConfirmed]);

    const handleSaveInvoice = () => {
        if (!docType) {
            alert('Veuillez sélectionner un type de document.');
            return;
        }
        if (!docConfirmed) {
            alert('Veuillez confirmer le type de document avant de sauvegarder.');
            return;
        }
        if (!clientInfo.name) {
            alert('Veuillez entrer le nom du client.');
            return;
        }
        if (lines.every(l => !l.stockNo && !l.description)) {
            alert('Veuillez ajouter au moins une ligne à la facture.');
            return;
        }
        const invoice = {
            invoiceNo,
            transactionNo,
            docType,
            orderStatus,
            vendeur,
            date: invoiceDate,
            client: { ...clientInfo },
            lines: lines.filter(l => l.stockNo || l.description),
            notes: invoiceNotes,
            txHistory: txHistory,
            sousTotal: sousTotal.toFixed(2),
            tps: tps.toFixed(2),
            tvq: tvq.toFixed(2),
            total: total.toFixed(2),
            createdAt: new Date().toISOString()
        };
        logAction('Sauvegarde', `${docType} ${invoiceNo || transactionNo} sauvegardée`);
        if (editingInvoiceNo) {
            // Update existing invoice — preserve original createdAt
            setSavedInvoices(prev => prev.map(inv => {
                if (inv.invoiceNo === editingInvoiceNo || (editingInvoiceNo === transactionNo && inv.transactionNo === transactionNo)) {
                    return { ...invoice, createdAt: inv.createdAt, updatedAt: new Date().toISOString() };
                }
                return inv;
            }));
            DevExpress.ui.notify(docType + ' ' + (invoiceNo || transactionNo) + ' mise \u00e0 jour avec succ\u00e8s', 'success', 3000);
        } else {
            // New invoice — check for duplicates by transactionNo
            setSavedInvoices(prev => {
                const existing = prev.find(inv => inv.transactionNo === transactionNo);
                if (existing) {
                    return prev.map(inv => inv.transactionNo === transactionNo
                        ? { ...invoice, createdAt: inv.createdAt, updatedAt: new Date().toISOString() }
                        : inv
                    );
                }
                return [invoice, ...prev];
            });
            DevExpress.ui.notify(docType + ' ' + (invoiceNo || transactionNo) + ' sauvegard\u00e9e avec succ\u00e8s', 'success', 3000);
        }
        // Reset (useEffect will automatically recalc reservations)
        setClientInfo({ name: '', address: '', city: '', postalCode: '', phone: '', email: '', deliveryAddress: '', deliveryCity: '', deliveryPostalCode: '', deliveryNotes: '' });
        setLines(Array.from({ length: 1 }, () => ({ ...emptyLine })));
        setInvoiceNotes('');
        setInvoiceNo('');
        setInvoiceDate(new Date().toISOString().split('T')[0]);
        setDocType('');
        setTransactionNo('');
        setDocConfirmed(false);
        setOrderStatus('');
        setVendeur('');
        setEditingInvoiceNo(null);
        setTxHistory([]);
        onDirtyChange(false);
    };

    const handlePrintInvoice = () => {
        const oldTitle = document.title;
        document.title = invoiceNo + '.pdf';
        window.print();
        setTimeout(() => document.title = oldTitle, 1000);
    };

    // --- Expédier: open bon de préparation modal ---
    const handleExpedier = (lineIndexes) => {
        const expedLines = lineIndexes.map(i => ({ ...lines[i], _idx: i })).filter(l => l.stockNo || l.description);
        if (expedLines.length === 0) {
            DevExpress.ui.notify('Aucune ligne avec produit à expédier', 'warning', 2000);
            return;
        }
        setBonPrepLines(expedLines);
        setBonPrepDate(new Date().toISOString().split('T')[0]);
        setBonPrepUser('');
        setShowBonPrep(true);
    };

    const confirmBonPreparation = () => {
        if (!bonPrepUser.trim()) {
            DevExpress.ui.notify('Veuillez entrer le nom de l\'usager', 'warning', 2000);
            return;
        }
        // Update line statuses to Expédier, set qtyExp, calc qtyRes, uncheck
        // Si la ligne était "Commander", marquer comme "Expédié (En Commande)" pour suivi
        const idxSet = new Set(bonPrepLines.map(l => l._idx));
        const commanderLines = [];
        const stockLines = [];
        setLines(prev => prev.map((line, i) => {
            if (!idxSet.has(i)) return line;
            const vendu = parseFloat(line.qtyVendu) || 0;
            const exp = vendu;
            const wasCommander = line.statut === 'Commander' || line.lineStatut === 'En Commande' || line.lineStatut === 'Commandé';
            if (wasCommander) {
                commanderLines.push(line);
            } else {
                stockLines.push(line);
            }
            return {
                ...line,
                statut: 'Expédier',
                lineStatut: wasCommander ? 'Exp. (Commandé)' : 'Expédié',
                qtyExp: exp,
                qtyRes: 0,
                checked: false,
                expedieDate: bonPrepDate,
                expedieUser: bonPrepUser
            };
        }));

        // Déduire les quantités expédiées de l'inventaire
        // Sauf si la ligne était "Commander" (En Commande) — la réception couvrira le rebalancement
        setInventory(prev => {
            const updated = [...prev];
            bonPrepLines.forEach(bLine => {
                if (!bLine.stockNo) return;
                // Ne pas déduire si la ligne était en commande (la réception rééquilibrera)
                if (bLine.statut === 'Commander' || bLine.lineStatut === 'En Commande' || bLine.lineStatut === 'Commandé') return;
                const qtyToDeduct = parseFloat(bLine.qtyVendu) || 0;
                if (qtyToDeduct <= 0) return;
                const idx = updated.findIndex(item => item.stockNo === bLine.stockNo);
                if (idx >= 0) {
                    updated[idx] = { ...updated[idx], qty: Math.max(0, (updated[idx].qty || 0) - qtyToDeduct) };
                }
            });
            return updated;
        });

        // Notifier si des lignes en commande
        if (commanderLines.length > 0) {
            DevExpress.ui.notify(`${commanderLines.length} ligne(s) en commande — inventaire non déduit, sera ajusté à la réception`, 'info', 4000);
        }

        // Print the bon de préparation
        printBonPreparation();
    };

    const printBonPreparation = () => {
        const now = new Date();
        const heure = now.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit' });
        const dateFormatted = new Date(bonPrepDate).toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });

        const linesHtml = bonPrepLines.map((l, i) => `
            <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="padding:8px 12px;text-align:center;font-weight:bold;">${i + 1}</td>
                <td style="padding:8px 12px;font-weight:600;">${l.stockNo || ''}</td>
                <td style="padding:8px 12px;">${l.description || ''}</td>
                <td style="padding:8px 12px;text-align:center;font-weight:bold;">${l.qtyVendu || 0}</td>
                <td style="padding:8px 12px;text-align:center;">${l.um || 'PC'}</td>
                <td style="padding:8px 12px;text-align:center;font-weight:bold;color:#2563eb;">${l.qtyExp || l.qtyVendu || 0}</td>
            </tr>
        `).join('');

        const html = `
            <html>
            <head>
                <title>Bon de Préparation - ${invoiceNo || transactionNo}</title>
                <style>
                    @page { size: letter; margin: 15mm; }
                    body { font-family: 'Segoe UI', Arial, sans-serif; color: #1f2937; margin: 0; padding: 20px; }
                    .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #51aff7; padding-bottom: 16px; margin-bottom: 20px; }
                    .header-left h1 { margin: 0; font-size: 24px; color: #1f2937; }
                    .header-left p { margin: 2px 0; font-size: 12px; color: #6b7280; }
                    .header-right { text-align: right; }
                    .header-right h2 { margin: 0; font-size: 28px; font-weight: 900; color: #51aff7; text-transform: uppercase; }
                    .meta { display: flex; gap: 40px; margin-bottom: 20px; }
                    .meta-box { background: #f3f4f6; border-radius: 8px; padding: 12px 16px; flex: 1; }
                    .meta-box label { display: block; font-size: 10px; text-transform: uppercase; color: #6b7280; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 4px; }
                    .meta-box span { font-size: 15px; font-weight: 700; color: #111827; }
                    .client-box { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px; }
                    .client-box h3 { margin: 0 0 6px; font-size: 11px; text-transform: uppercase; color: #1d4ed8; font-weight: 700; letter-spacing: 0.5px; }
                    .client-box p { margin: 2px 0; font-size: 13px; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                    th { background: #51aff7; color: #fff; font-size: 11px; text-transform: uppercase; padding: 10px 12px; text-align: left; font-weight: 700; letter-spacing: 0.5px; }
                    td { font-size: 13px; }
                    tr:nth-child(even) { background: #f9fafb; }
                    .footer { display: flex; justify-content: space-between; border-top: 2px solid #e5e7eb; padding-top: 16px; margin-top: 20px; }
                    .footer-box { border: 1px solid #d1d5db; border-radius: 8px; padding: 12px 16px; width: 45%; }
                    .footer-box label { display: block; font-size: 10px; text-transform: uppercase; color: #6b7280; font-weight: 700; margin-bottom: 8px; }
                    .signature-line { border-bottom: 1px solid #9ca3af; height: 40px; }
                    .stamp { text-align: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px; margin-top: 20px; }
                    .stamp p { margin: 2px 0; font-size: 12px; color: #15803d; font-weight: 600; }
                </style>
            </head>
            <body>
                <div class="header">
                    <div class="header-left">
                        <h1>Surfagest</h1>
                        <p>123 Rue de l'Industrie</p>
                        <p>Saint-Georges, QC G5Y 5C3</p>
                        <p>Tél: (418) 555-0123</p>
                    </div>
                    <div class="header-right">
                        <h2>Bon de Préparation</h2>
                        <p style="font-size:13px;color:#374151;margin:4px 0;">
                            ${docType || 'Document'} #<strong>${invoiceNo || '—'}</strong>
                        </p>
                        <p style="font-size:12px;color:#6b7280;">Transaction: ${transactionNo || '—'}</p>
                    </div>
                </div>

                <div class="meta">
                    <div class="meta-box">
                        <label>Date d'expédition</label>
                        <span>${dateFormatted}</span>
                    </div>
                    <div class="meta-box">
                        <label>Heure d'impression</label>
                        <span>${heure}</span>
                    </div>
                    <div class="meta-box">
                        <label>Préparé par</label>
                        <span>${bonPrepUser}</span>
                    </div>
                </div>

                <div class="client-box">
                    <h3><i class="fa-solid fa-user"></i> Client</h3>
                    <p style="font-weight:700;font-size:15px;">${clientInfo.name || '—'}</p>
                    ${clientInfo.address ? `<p>${clientInfo.address}</p>` : ''}
                    ${clientInfo.city || clientInfo.postalCode ? `<p>${clientInfo.city || ''} ${clientInfo.postalCode || ''}</p>` : ''}
                    ${clientInfo.phone ? `<p>Tél: ${clientInfo.phone}</p>` : ''}
                </div>

                ${clientInfo.deliveryAddress ? `
                <div class="client-box" style="background:#f0fdf4;border-color:#bbf7d0;">
                    <h3 style="color:#15803d;">Adresse de livraison</h3>
                    <p style="font-weight:700;">${clientInfo.deliveryAddress}</p>
                    ${clientInfo.deliveryCity || clientInfo.deliveryPostalCode ? `<p>${clientInfo.deliveryCity || ''} ${clientInfo.deliveryPostalCode || ''}</p>` : ''}
                    ${clientInfo.deliveryNotes ? `<p style="font-style:italic;color:#6b7280;">${clientInfo.deliveryNotes}</p>` : ''}
                </div>
                ` : ''}

                <table>
                    <thead>
                        <tr>
                            <th style="width:40px;text-align:center;">#</th>
                            <th style="width:140px;">Code / Stock</th>
                            <th>Description</th>
                            <th style="width:80px;text-align:center;">Qté vendu</th>
                            <th style="width:60px;text-align:center;">UM</th>
                            <th style="width:80px;text-align:center;">Qté à exp.</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${linesHtml}
                    </tbody>
                </table>

                ${invoiceNotes ? `<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px 16px;margin-bottom:16px;"><p style="font-size:11px;text-transform:uppercase;color:#92400e;font-weight:700;margin:0 0 4px;">Notes</p><p style="font-size:13px;margin:0;color:#78350f;">${invoiceNotes}</p></div>` : ''}

                <div class="footer">
                    <div class="footer-box">
                        <label>Vérifié par</label>
                        <div class="signature-line"></div>
                    </div>
                    <div class="footer-box">
                        <label>Reçu par (client)</label>
                        <div class="signature-line"></div>
                    </div>
                </div>

                <div class="stamp">
                    <p>Imprimé le ${now.toLocaleDateString('fr-CA')} à ${heure} par ${bonPrepUser}</p>
                </div>
            </body>
            </html>
        `;

        const printWindow = window.open('', '_blank', 'width=900,height=700');
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.onload = () => {
            printWindow.print();
        };

        setShowBonPrep(false);
        bonPrepLines.forEach(bl => logAction('Expédition', `${bl.description} — Qté: ${bl.qtyVendu}, Stock: ${bl.stockNo || 'N/A'}, Préparé par: ${bonPrepUser}`));
        DevExpress.ui.notify('Bon de préparation généré — statut mis à jour', 'success', 3000);
    };

    // --- Annuler commande: remettre la ligne en état modifiable ---
    const handleAnnulerCommander = (lineIndex) => {
        const line = lines[lineIndex];
        if (!line) return;

        // Check if bon de commande already confirmed for this line
        const relatedCmd = commandes.find(c =>
            c.stockNo === line.stockNo &&
            c.sourceTransaction === (transactionNo || '') &&
            (c.statut === 'Confirmé' || c.statut === 'Reçu')
        );
        if (relatedCmd) {
            DevExpress.ui.notify('Impossible d\'annuler: le bon de commande a d\u00e9j\u00e0 \u00e9t\u00e9 confirm\u00e9', 'error', 3000);
            return;
        }

        // Remove related commande records (En attente or Envoyé au bureau)
        setCommandes(prev => prev.filter(c => {
            if (c.sourceTransaction !== (transactionNo || '')) return true;
            if (c.stockNo !== line.stockNo && c.description !== line.description) return true;
            if (c.statut === 'Confirmé' || c.statut === 'Reçu') return true;
            return false;
        }));

        // Reset line status
        setLines(prev => prev.map((l, i) => {
            if (i !== lineIndex) return l;
            const updated = { ...l, statut: '', lineStatut: 'En attente', qtyRes: 0, stockNo: '' };
            return updated;
        }));
        logAction('Annulation commande', `Ligne ${lineIndex + 1} — ${line.description || line.stockNo || 'N/A'} — commande annulée`);
        DevExpress.ui.notify('Commande annulée — ligne remise en édition', 'info', 3000);
    };

    // --- Commandes d'achat: import lines marked "Commander" ---
    const handleCommander = (lineIndexes) => {
        const cmdLines = lineIndexes.map(i => ({ ...lines[i], _idx: i })).filter(l => l.stockNo || l.description);
        if (cmdLines.length === 0) {
            DevExpress.ui.notify('Aucune ligne avec produit à commander', 'warning', 2000);
            return;
        }

        // Update statut on lines
        setLines(prev => prev.map((line, i) => {
            if (!lineIndexes.includes(i)) return line;
            return {
                ...line,
                statut: 'Commander',
                lineStatut: 'En Commande',
                checked: false
            };
        }));
        // Add to commandes queue (no stock creation yet — happens at bon de commande confirmation)
        const newCommandes = cmdLines.map(l => {
            const invItem = l.stockNo ? inventory.find(item => item.stockNo === l.stockNo) : null;
            return {
                id: 'CMD-' + Date.now().toString().slice(-6) + '-' + Math.random().toString(36).slice(2, 5),
                stockNo: l.stockNo || '',
                productCode: l.productCode || '',
                description: l.description || '',
                qtyCommande: parseFloat(l.qtyVendu) || 0,
                qtyRecue: 0,
                um: l.um || invItem?.unite || 'PC',
                prix: l.prix || '',
                coutant: invItem?.coutant || '',
                fournisseur: invItem?.fournisseur || '',
                // Carry over all inventory fields
                wood: invItem?.wood || '',
                grade: invItem?.grade || '',
                largeur: invItem?.largeur || '',
                epaisseur: invItem?.epaisseur || '',
                location: invItem?.location || '',
                state: invItem?.state || '',
                categorie: invItem?.categorie || '',
                prixDetail: invItem?.prixDetail || '',
                specs: invItem?.specs || '',
                sourceInvoice: invoiceNo || '',
                sourceTransaction: transactionNo || '',
                sourceClient: clientInfo.name || '',
                dateCreation: new Date().toISOString(),
                dateReceptionPrevue: '',
                dateReceptionReelle: '',
                noteSuivi: '',
                statut: 'En attente',
                poNumber: '',
                sentToBureau: false
            };
        });
        setCommandes(prev => [...prev, ...newCommandes]);
        newCommandes.forEach(c => logAction('Commander', `${c.description} — Qté: ${c.qtyCommande}, Stock: ${c.stockNo || 'N/A'}`));
        DevExpress.ui.notify(`${newCommandes.length} ligne(s) ajoutée(s) aux commandes d'achat`, 'success', 3000);
    };

    // Create bon de commande from selected commande lines
    const handleCreateBonCommande = (selectedIds, vendor, mode) => {
        const selectedLines = commandes.filter(c => selectedIds.includes(c.id));
        if (selectedLines.length === 0) return;

        const poNum = 'PO-' + Date.now().toString().slice(-8);

        if (mode === 'bureau') {
            // Send to bureau de commande — mark as pending
            setCommandes(prev => prev.map(c => {
                if (!selectedIds.includes(c.id)) return c;
                return { ...c, statut: 'Envoyé au bureau', fournisseur: vendor, poNumber: poNum, sentToBureau: true };
            }));
            DevExpress.ui.notify(`${selectedLines.length} ligne(s) envoyée(s) au bureau de commande`, 'info', 3000);
            return;
        }

        // Direct: open bon de commande modal for print
        setBonCommandeLines(selectedLines.map(l => ({ ...l, fournisseur: vendor })));
        setBonCommandeVendor(vendor);
        setBonCommandeUser('');
        setShowBonCommande(true);
    };

    const confirmBonCommande = () => {
        if (!bonCommandeUser.trim()) {
            DevExpress.ui.notify("Veuillez entrer le nom de l'usager", 'warning', 2000);
            return;
        }
        const poNum = 'PO-' + Date.now().toString().slice(-8);
        const ids = bonCommandeLines.map(l => l.id);
        // Build map of updated fields from modal lines (coûtant, date réception, note suivi)
        const lineUpdates = {};
        bonCommandeLines.forEach(l => {
            lineUpdates[l.id] = {
                coutant: l.coutant || '',
                dateReceptionPrevue: l.dateReceptionPrevue || '',
                noteSuivi: l.noteSuivi || ''
            };
        });
        // Update commandes status
        setCommandes(prev => prev.map(c => {
            if (!ids.includes(c.id)) return c;
            return {
                ...c,
                statut: 'Commandé',
                fournisseur: bonCommandeVendor,
                poNumber: poNum,
                commandePar: bonCommandeUser,
                dateCommande: new Date().toISOString(),
                ...(lineUpdates[c.id] || {})
            };
        }));
        // --- Create inventory items for lines without existing stock (on confirmation) ---
        let nextNum = 10000;
        const existingNums = inventory.map(item => parseInt(item.stockNo, 10)).filter(n => !isNaN(n));
        if (existingNums.length > 0) {
            nextNum = Math.max(...existingNums) + 1;
            if (nextNum < 10000) nextNum = 10000;
        }
        const newInventoryItems = [];
        const stockNoMap = {}; // maps commande id -> new stockNo
        const coutantUpdates = {};

        bonCommandeLines.forEach(l => {
            const existsInInventory = l.stockNo && inventory.find(item => item.stockNo === l.stockNo);
            if (!existsInInventory) {
                // No existing inventory item — create one with next available number
                const newStockNo = String(nextNum++);
                newInventoryItems.push({
                    stockNo: newStockNo,
                    productCode: l.productCode || '',
                    description: l.description || '',
                    wood: l.wood || '',
                    grade: l.grade || '',
                    unite: l.um || 'PC',
                    largeur: l.largeur || '',
                    epaisseur: l.epaisseur || '',
                    qty: 0,
                    location: l.location || '',
                    state: l.state || '',
                    categorie: l.categorie || '',
                    prixDetail: l.prixDetail || '',
                    specs: l.specs || '',
                    coutant: l.coutant || '',
                    fournisseur: bonCommandeVendor || l.fournisseur || '',
                    dateAdded: new Date().toISOString()
                });
                stockNoMap[l.id] = newStockNo;
            }
            // Propagate coûtant to existing or new inventory items
            if (l.coutant) {
                const sNo = stockNoMap[l.id] || l.stockNo;
                if (sNo) coutantUpdates[sNo] = l.coutant;
            }
        });

        // Add new inventory items & update coûtant on existing ones
        if (newInventoryItems.length > 0 || Object.keys(coutantUpdates).length > 0) {
            setInventory(prev => {
                let updated = [...prev, ...newInventoryItems];
                if (Object.keys(coutantUpdates).length > 0) {
                    updated = updated.map(item => {
                        if (coutantUpdates[item.stockNo] !== undefined) {
                            return { ...item, coutant: coutantUpdates[item.stockNo] };
                        }
                        return item;
                    });
                }
                localStorage.setItem('inventory', JSON.stringify(updated));
                return updated;
            });
        }

        // Update commande records with newly assigned stockNo
        if (Object.keys(stockNoMap).length > 0) {
            setCommandes(prev => prev.map(c => {
                if (stockNoMap[c.id]) {
                    return { ...c, stockNo: stockNoMap[c.id] };
                }
                return c;
            }));
        }
        // Update invoice lines: assign new stockNo + set lineStatut to 'Commandé' + reset dropdown
        setLines(prev => prev.map(line => {
            const matchingCmd = bonCommandeLines.find(bl =>
                bl.sourceInvoice === invoiceNo &&
                bl.description === line.description &&
                (line.statut === 'Commander' || line.lineStatut === 'En Commande')
            );
            if (matchingCmd) {
                return {
                    ...line,
                    stockNo: stockNoMap[matchingCmd.id] || line.stockNo,
                    lineStatut: 'Commandé',
                    statut: ''
                };
            }
            return line;
        }));
        bonCommandeLines.forEach(bl => logAction('Bon de commande confirmé', `PO: ${poNum} — ${bl.description} — Qté: ${bl.qtyCommande}, Fournisseur: ${bonCommandeVendor}`));
        // Print bon de commande
        printBonCommande(poNum);
    };

    const printBonCommande = (poNum) => {
        const now = new Date();
        const heure = now.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit' });
        const dateFormatted = now.toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });
        const vendorObj = fournisseurs.find(f => f.name === bonCommandeVendor) || { name: bonCommandeVendor, address: '', attention: '', email: '' };

        const linesHtml = bonCommandeLines.map((l, i) => `
            <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="padding:8px 12px;text-align:center;font-weight:bold;">${i + 1}</td>
                <td style="padding:8px 12px;font-weight:600;">${l.stockNo || ''}</td>
                <td style="padding:8px 12px;">${l.description || ''}</td>
                <td style="padding:8px 12px;text-align:center;font-weight:bold;">${l.qtyCommande || 0}</td>
                <td style="padding:8px 12px;text-align:center;">${l.um || 'PC'}</td>
                <td style="padding:8px 12px;text-align:right;">${l.coutant ? '$' + parseFloat(l.coutant).toFixed(2) : '—'}</td>
                <td style="padding:8px 12px;text-align:right;">${l.prix ? '$' + parseFloat(l.prix).toFixed(2) : '—'}</td>
                <td style="padding:8px 12px;text-align:center;">${l.dateReceptionPrevue || '—'}</td>
            </tr>
        `).join('');

        const totalCoutant = bonCommandeLines.reduce((s, l) => s + ((parseFloat(l.coutant) || 0) * (l.qtyCommande || 0)), 0);
        const total = bonCommandeLines.reduce((s, l) => s + ((parseFloat(l.prix) || 0) * (l.qtyCommande || 0)), 0);

        const html = `
            <html>
            <head>
                <title>Bon de Commande - ${poNum}</title>
                <style>
                    @page { size: letter; margin: 15mm; }
                    body { font-family: 'Segoe UI', Arial, sans-serif; color: #1f2937; margin: 0; padding: 20px; }
                    .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #51aff7; padding-bottom: 16px; margin-bottom: 20px; }
                    .header-left h1 { margin: 0; font-size: 24px; color: #1f2937; }
                    .header-left p { margin: 2px 0; font-size: 12px; color: #6b7280; }
                    .header-right { text-align: right; }
                    .header-right h2 { margin: 0; font-size: 28px; font-weight: 900; color: #51aff7; text-transform: uppercase; }
                    .meta { display: flex; gap: 30px; margin-bottom: 20px; }
                    .meta-box { background: #f3f4f6; border-radius: 8px; padding: 12px 16px; flex: 1; }
                    .meta-box label { display: block; font-size: 10px; text-transform: uppercase; color: #6b7280; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 4px; }
                    .meta-box span { font-size: 15px; font-weight: 700; color: #111827; }
                    .vendor-box { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px; }
                    .vendor-box h3 { margin: 0 0 6px; font-size: 11px; text-transform: uppercase; color: #1d4ed8; font-weight: 700; letter-spacing: 0.5px; }
                    .vendor-box p { margin: 2px 0; font-size: 13px; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                    th { background: #51aff7; color: #fff; font-size: 11px; text-transform: uppercase; padding: 10px 12px; text-align: left; font-weight: 700; }
                    td { font-size: 13px; }
                    tr:nth-child(even) { background: #f9fafb; }
                    .footer { display: flex; justify-content: space-between; border-top: 2px solid #e5e7eb; padding-top: 16px; margin-top: 20px; }
                    .footer-box { border: 1px solid #d1d5db; border-radius: 8px; padding: 12px 16px; width: 45%; }
                    .footer-box label { display: block; font-size: 10px; text-transform: uppercase; color: #6b7280; font-weight: 700; margin-bottom: 8px; }
                    .signature-line { border-bottom: 1px solid #9ca3af; height: 40px; }
                    .totals { text-align: right; margin-bottom: 16px; }
                    .totals span { font-size: 16px; font-weight: 900; }
                    .stamp { text-align: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px; margin-top: 20px; }
                    .stamp p { margin: 2px 0; font-size: 12px; color: #15803d; font-weight: 600; }
                </style>
            </head>
            <body>
                <div class="header">
                    <div class="header-left">
                        <h1>Surfagest</h1>
                        <p>123 Rue de l'Industrie</p>
                        <p>Saint-Georges, QC G5Y 5C3</p>
                        <p>Tél: (418) 555-0123</p>
                    </div>
                    <div class="header-right">
                        <h2>Bon de Commande</h2>
                        <p style="font-size:14px;font-weight:700;color:#374151;margin:4px 0;">${poNum}</p>
                    </div>
                </div>

                <div class="meta">
                    <div class="meta-box">
                        <label>Date</label>
                        <span>${dateFormatted}</span>
                    </div>
                    <div class="meta-box">
                        <label>Heure</label>
                        <span>${heure}</span>
                    </div>
                    <div class="meta-box">
                        <label>Émis par</label>
                        <span>${bonCommandeUser}</span>
                    </div>
                </div>

                <div class="vendor-box">
                    <h3>Fournisseur</h3>
                    <p style="font-weight:700;font-size:15px;">${vendorObj.name}</p>
                    ${vendorObj.address ? `<p>${vendorObj.address}</p>` : ''}
                    ${vendorObj.attention ? `<p>Attn: ${vendorObj.attention}</p>` : ''}
                    ${vendorObj.email ? `<p>Email: ${vendorObj.email}</p>` : ''}
                </div>

                <table>
                    <thead>
                        <tr>
                            <th style="width:40px;text-align:center;">#</th>
                            <th style="width:120px;">Code / Stock</th>
                            <th>Description</th>
                            <th style="width:70px;text-align:center;">Quantité</th>
                            <th style="width:50px;text-align:center;">UM</th>
                            <th style="width:90px;text-align:right;">Coûtant</th>
                            <th style="width:90px;text-align:right;">Prix vente</th>
                            <th style="width:100px;text-align:center;">Réception</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${linesHtml}
                    </tbody>
                </table>

                ${totalCoutant > 0 ? `<div class="totals"><span>Total coûtant: $${totalCoutant.toFixed(2)}</span>${total > 0 ? ` &nbsp;|&nbsp; <span style="color:#6b7280;font-size:14px;">Total vente: $${total.toFixed(2)}</span>` : ''}</div>` : (total > 0 ? `<div class="totals"><span>Total estimé: $${total.toFixed(2)}</span></div>` : '')}

                ${bonCommandeLines[0]?.noteSuivi ? `<div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;padding:12px 16px;margin-bottom:12px;"><p style="font-size:11px;text-transform:uppercase;color:#0369a1;font-weight:700;margin:0 0 4px;"><i class="fa fa-clipboard-list" style="margin-right:4px;"></i>Suivi CRM</p><p style="font-size:13px;margin:0;color:#0c4a6e;white-space:pre-line;">${bonCommandeLines[0].noteSuivi}</p></div>` : ''}

                ${bonCommandeNotes ? `<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px 16px;margin-bottom:16px;"><p style="font-size:11px;text-transform:uppercase;color:#92400e;font-weight:700;margin:0 0 4px;">Notes / Conditions</p><p style="font-size:13px;margin:0;color:#78350f;white-space:pre-line;">${bonCommandeNotes}</p></div>` : ''}

                <div class="footer">
                    <div class="footer-box">
                        <label>Autorisé par</label>
                        <div class="signature-line"></div>
                    </div>
                    <div class="footer-box">
                        <label>Confirmé par le fournisseur</label>
                        <div class="signature-line"></div>
                    </div>
                </div>

                <div class="stamp">
                    <p>Imprimé le ${now.toLocaleDateString('fr-CA')} à ${heure} par ${bonCommandeUser}</p>
                </div>
            </body>
            </html>
        `;

        const printWindow = window.open('', '_blank', 'width=900,height=700');
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.onload = () => { printWindow.print(); };

        setShowBonCommande(false);
        DevExpress.ui.notify('Bon de commande ' + poNum + ' généré avec succès', 'success', 3000);
    };

    // Receive commande (réception de marchandise) — supports partial (backorder)
    const handleReceiveCommande = (commandeId, qtyToReceive) => {
        const cmd = commandes.find(c => c.id === commandeId);
        if (!cmd) return;
        const qtyOrdered = parseFloat(cmd.qtyCommande) || 0;
        const alreadyReceived = parseFloat(cmd.qtyRecue) || 0;
        const remaining = qtyOrdered - alreadyReceived;
        const qtyRecv = qtyToReceive !== undefined ? parseFloat(qtyToReceive) : remaining;
        if (isNaN(qtyRecv) || qtyRecv <= 0) {
            DevExpress.ui.notify('La quantité reçue doit être supérieure à 0', 'warning', 2000);
            return;
        }
        const newQtyRecue = alreadyReceived + qtyRecv;
        const isComplete = newQtyRecue >= qtyOrdered;
        setCommandes(prev => prev.map(c => {
            if (c.id !== commandeId) return c;
            return {
                ...c,
                qtyRecue: newQtyRecue,
                statut: isComplete ? 'Reçu' : 'Backorder',
                dateReceptionReelle: new Date().toISOString()
            };
        }));
        // Add received quantity to inventory
        if (cmd.stockNo) {
            setInventory(prev => {
                const idx = prev.findIndex(item => item.stockNo === cmd.stockNo);
                if (idx >= 0) {
                    const updated = [...prev];
                    updated[idx] = { ...updated[idx], qty: (updated[idx].qty || 0) + qtyRecv };
                    localStorage.setItem('inventory', JSON.stringify(updated));
                    return updated;
                }
                return prev;
            });
        }
        if (isComplete) {
            DevExpress.ui.notify(`${qtyRecv} ${cmd.um} reçu — commande ${cmd.stockNo} complétée`, 'success', 3000);
        } else {
            DevExpress.ui.notify(`${qtyRecv} ${cmd.um} reçu — backorder: ${qtyOrdered - newQtyRecue} restant(s) pour ${cmd.stockNo}`, 'info', 4000);
        }
    };

    return (
        <div className="max-w-full mx-auto space-y-6 print:space-y-2 print:max-w-none">
            {/* Bon de Préparation Modal */}
            {showBonPrep && (
                <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-lg font-bold text-gray-800">
                                <i className="fa-solid fa-truck-fast mr-2 text-[#51aff7]"></i>Bon de Préparation
                            </h3>
                            <button onClick={() => setShowBonPrep(false)} className="text-gray-400 hover:text-red-500">
                                <i className="fa-solid fa-times text-xl"></i>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-sm text-blue-800 font-semibold mb-1">
                                    <i className="fa fa-box mr-1"></i>{bonPrepLines.length} ligne(s) à expédier
                                </p>
                                <div className="max-h-32 overflow-y-auto text-xs text-blue-700 space-y-1">
                                    {bonPrepLines.map((l, i) => (
                                        <div key={i} className="flex justify-between">
                                            <span>{l.stockNo || '—'} — {l.description || '—'}</span>
                                            <span className="font-bold">{l.qtyVendu || 0} {l.um || 'PC'}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                                    Date d'expédition
                                </label>
                                <input
                                    type="date"
                                    value={bonPrepDate}
                                    onChange={e => setBonPrepDate(e.target.value)}
                                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#51aff7] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                                    Préparé par (usager) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={bonPrepUser}
                                    onChange={e => setBonPrepUser(e.target.value)}
                                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); confirmBonPreparation(); } }}
                                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#51aff7] focus:outline-none"
                                    placeholder="Nom de l'employé..."
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                type="button"
                                onClick={() => setShowBonPrep(false)}
                                className="flex-1 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-100 transition"
                            >
                                Annuler
                            </button>
                            <button
                                type="button"
                                onClick={confirmBonPreparation}
                                className="flex-1 py-2.5 bg-[#51aff7] text-white font-bold rounded-lg hover:bg-blue-600 transition"
                            >
                                <i className="fa fa-print mr-2"></i>Confirmer et Imprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bon de Commande Modal */}
            {showBonCommande && (
                <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-lg font-bold text-gray-800">
                                <i className="fa-solid fa-file-invoice mr-2 text-[#51aff7]"></i>Créer un Bon de Commande
                            </h3>
                            <button onClick={() => setShowBonCommande(false)} className="text-gray-400 hover:text-red-500">
                                <i className="fa-solid fa-times text-xl"></i>
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Fournisseur */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-sm font-bold text-blue-800 mb-1">
                                    <i className="fa fa-building mr-1"></i>Fournisseur: {bonCommandeVendor}
                                </p>
                                {fournisseurs.find(f => f.name === bonCommandeVendor) && (
                                    <p className="text-xs text-blue-600">
                                        {fournisseurs.find(f => f.name === bonCommandeVendor).address} — Attn: {fournisseurs.find(f => f.name === bonCommandeVendor).attention}
                                    </p>
                                )}
                            </div>

                            {/* Lines summary with editable coûtant, date réception, note suivi */}
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600 uppercase">Code</th>
                                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600 uppercase">Description</th>
                                            <th className="px-3 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'65px'}}>Qté</th>
                                            <th className="px-3 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'50px'}}>UM</th>
                                            <th className="px-3 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'90px'}}>Coûtant</th>
                                            <th className="px-3 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'120px'}}>Date réception</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bonCommandeLines.map((l, i) => (
                                            <tr key={i} className="border-b border-gray-100">
                                                <td className="px-3 py-2 font-semibold">{l.stockNo || '—'}</td>
                                                <td className="px-3 py-2">{l.description || '—'}</td>
                                                <td className="px-3 py-2 text-center font-bold">{l.qtyCommande || 0}</td>
                                                <td className="px-3 py-2 text-center">{l.um || 'PC'}</td>
                                                <td className="px-2 py-1">
                                                    <input
                                                        type="number"
                                                        step="0.01"
                                                        value={l.coutant || ''}
                                                        onChange={e => {
                                                            const val = e.target.value;
                                                            setBonCommandeLines(prev => prev.map((x, j) => j === i ? { ...x, coutant: val } : x));
                                                        }}
                                                        className="w-full p-1 border border-gray-300 rounded text-xs text-right focus:ring-1 focus:ring-[#51aff7] focus:outline-none"
                                                        placeholder="0.00"
                                                    />
                                                </td>
                                                <td className="px-2 py-1">
                                                    <input
                                                        type="date"
                                                        value={l.dateReceptionPrevue || ''}
                                                        onChange={e => {
                                                            const val = e.target.value;
                                                            setBonCommandeLines(prev => prev.map((x, j) => j === i ? { ...x, dateReceptionPrevue: val } : x));
                                                        }}
                                                        className="w-full p-1 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-[#51aff7] focus:outline-none"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Note de suivi CRM */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                                    <i className="fa fa-clipboard-list mr-1"></i>Note de suivi CRM
                                </label>
                                <textarea
                                    value={bonCommandeLines[0]?.noteSuivi || ''}
                                    onChange={e => {
                                        const val = e.target.value;
                                        setBonCommandeLines(prev => prev.map(x => ({ ...x, noteSuivi: val })));
                                    }}
                                    rows={2}
                                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#51aff7] focus:outline-none resize-vertical"
                                    placeholder="Conditions spéciales, suivi requis, relance prévue..."
                                />
                            </div>

                            {/* Notes */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Notes / Conditions</label>
                                <textarea
                                    value={bonCommandeNotes}
                                    onChange={e => setBonCommandeNotes(e.target.value)}
                                    rows={3}
                                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#51aff7] focus:outline-none resize-vertical"
                                />
                            </div>

                            {/* Usager */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                                    Émis par (usager) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={bonCommandeUser}
                                    onChange={e => setBonCommandeUser(e.target.value)}
                                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); confirmBonCommande(); } }}
                                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#51aff7] focus:outline-none"
                                    placeholder="Nom de l'employé..."
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                type="button"
                                onClick={() => setShowBonCommande(false)}
                                className="flex-1 py-2.5 border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-100 transition"
                            >
                                Annuler
                            </button>
                            <button
                                type="button"
                                onClick={confirmBonCommande}
                                className="flex-1 py-2.5 bg-[#51aff7] text-white font-bold rounded-lg hover:bg-blue-600 transition"
                            >
                                <i className="fa fa-print mr-2"></i>Confirmer et Imprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Proc\u00e9d\u00e9 Selection Modal */}
            {procedeLineIndex !== null && (() => {
                const allProcs = [
                    { id: 'procBaker', label: t.procBaker },
                    { id: 'procMoulding', label: t.procMoulding },
                    { id: 'procSanding1', label: t.procSanding1 },
                    { id: 'procSanding2', label: t.procSanding2 },
                    { id: 'procStaining', label: t.procStaining },
                    { id: 'procBrushing', label: t.procBrushing },
                    { id: 'procPolishing', label: t.procPolishing },
                    { id: 'procOiling', label: t.procOiling },
                    { id: 'procPainting', label: t.procPainting },
                    ...customProcesses
                ];
                return (
                    <div className="fixed inset-0 z-[90] bg-black/50 flex items-center justify-center print:hidden" onClick={(e) => { if (e.target === e.currentTarget) setProcedeLineIndex(null); }}>
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg m-4 overflow-hidden">
                            <div className="p-5 border-b bg-gray-50 flex justify-between items-center rounded-t-2xl">
                                <h2 className="text-lg font-bold text-gray-800">
                                    <i className="fa-solid fa-gears mr-2 text-indigo-500"></i>
                                    S\u00e9lectionner les proc\u00e9d\u00e9s
                                    <span className="ml-2 text-sm font-normal text-gray-500">(Ligne {procedeLineIndex + 1})</span>
                                </h2>
                                <button onClick={() => setProcedeLineIndex(null)} className="text-gray-400 hover:text-red-500 text-xl transition">
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                            <div className="p-5 max-h-[60vh] overflow-y-auto">
                                <div className="space-y-2">
                                    {allProcs.map(proc => {
                                        const isChecked = procedeSelection.some(s => s.id === proc.id);
                                        return (
                                            <label key={proc.id} className={"flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition " + (isChecked ? 'border-indigo-400 bg-indigo-50' : 'border-gray-200 hover:bg-gray-50')}>
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={() => {
                                                        setProcedeSelection(prev =>
                                                            isChecked
                                                                ? prev.filter(s => s.id !== proc.id)
                                                                : [...prev, { id: proc.id, label: proc.label }]
                                                        );
                                                    }}
                                                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                                                />
                                                <span className="font-semibold text-gray-700">{proc.label}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="p-4 border-t bg-gray-50 flex justify-end gap-3">
                                <button onClick={() => setProcedeLineIndex(null)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-bold text-sm">
                                    Annuler
                                </button>
                                <button
                                    onClick={() => {
                                        setLines(prev => prev.map((line, i) => {
                                            if (i !== procedeLineIndex) return line;
                                            return { ...line, statut: 'Proc\u00e9d\u00e9', procedes: procedeSelection };
                                        }));
                                        setProcedeLineIndex(null);
                                    }}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-bold text-sm"
                                    disabled={procedeSelection.length === 0}
                                >
                                    <i className="fa fa-check mr-2"></i>Confirmer ({procedeSelection.length})
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })()}
            {/* Inventory Detail Modal */}
            {viewInventoryItem && (() => {
                const item = viewInventoryItem;
                const qtyDisp = Math.max(0, (item.qty || 0) + (item.qtyComm || 0) - (item.qtyReserve || 0));
                return (
                    <div className="fixed inset-0 z-[90] bg-black/50 flex items-center justify-center print:hidden" onClick={(e) => { if (e.target === e.currentTarget) setViewInventoryItem(null); }}>
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg m-4 overflow-hidden">
                            <div className="p-5 border-b bg-gray-50 flex justify-between items-center rounded-t-2xl">
                                <h2 className="text-lg font-bold text-gray-800">
                                    <i className="fa-solid fa-box mr-2 text-[#51aff7]"></i>
                                    Fiche inventaire
                                </h2>
                                <button onClick={() => setViewInventoryItem(null)} className="text-gray-400 hover:text-red-500 text-xl transition">
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-black text-[#51aff7]">{item.stockNo}</span>
                                    {item.productCode && <span className="text-sm font-mono bg-gray-100 px-3 py-1 rounded">{item.productCode}</span>}
                                </div>
                                {item.description && <p className="text-gray-700 font-medium">{item.description}</p>}
                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    {item.wood && <div><span className="text-xs text-gray-400 uppercase block">Essence</span><span className="font-semibold text-gray-800">{item.wood}</span></div>}
                                    {item.grade && <div><span className="text-xs text-gray-400 uppercase block">Grade</span><span className="font-semibold text-gray-800">{item.grade}</span></div>}
                                    {item.epaisseur && <div><span className="text-xs text-gray-400 uppercase block">Épaisseur</span><span className="font-semibold text-gray-800">{item.epaisseur}</span></div>}
                                    {item.largeur && <div><span className="text-xs text-gray-400 uppercase block">Largeur</span><span className="font-semibold text-gray-800">{item.largeur}</span></div>}
                                    {item.unite && <div><span className="text-xs text-gray-400 uppercase block">Unité</span><span className="font-semibold text-gray-800">{item.unite}</span></div>}
                                    {item.categorie && <div><span className="text-xs text-gray-400 uppercase block">Catégorie</span><span className="font-semibold text-gray-800">{item.categorie}</span></div>}
                                    {item.state && <div><span className="text-xs text-gray-400 uppercase block">État</span><span className="font-semibold text-gray-800">{item.state}</span></div>}
                                    {item.location && <div><span className="text-xs text-gray-400 uppercase block">Emplacement</span><span className="font-semibold text-gray-800">{item.location}</span></div>}
                                </div>
                                <div className="grid grid-cols-3 gap-3 pt-3 border-t">
                                    <div className="text-center p-3 bg-green-50 rounded-lg">
                                        <span className="text-xs text-gray-400 uppercase block">Quantité</span>
                                        <span className="text-xl font-black text-green-700">{item.qty || 0}</span>
                                    </div>
                                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                                        <span className="text-xs text-gray-400 uppercase block">Réservé</span>
                                        <span className="text-xl font-black text-orange-700">{item.qtyReserve || 0}</span>
                                    </div>
                                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                                        <span className="text-xs text-gray-400 uppercase block">Disponible</span>
                                        <span className="text-xl font-black text-blue-700">{qtyDisp}</span>
                                    </div>
                                </div>
                                {item.prixDetail != null && (
                                    <div className="pt-2 border-t">
                                        <span className="text-xs text-gray-400 uppercase block">Prix détail</span>
                                        <span className="text-lg font-black text-gray-800">${parseFloat(item.prixDetail).toFixed(2)}</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 border-t bg-gray-50 flex justify-end rounded-b-2xl">
                                <button onClick={() => setViewInventoryItem(null)} className="px-5 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition">
                                    <i className="fa fa-times mr-2"></i>Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })()}
            {/* Inventory Search Modal */}
            {activeLineSearch !== null && (
                <div className="fixed inset-0 z-[80] bg-black/50 flex items-start justify-center pt-12 print:hidden" onClick={(e) => { if (e.target === e.currentTarget) setActiveLineSearch(null); }}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col m-4 overflow-hidden">
                        {/* Modal Header */}
                        <div className="p-5 border-b bg-gray-50 flex justify-between items-center rounded-t-2xl">
                            <h2 className="text-lg font-bold text-gray-800">
                                <i className="fa-solid fa-boxes-stacked mr-2 text-[#51aff7]"></i>
                                Rechercher dans l'inventaire
                                <span className="ml-2 text-sm font-normal text-gray-500">(Ligne {activeLineSearch + 1})</span>
                            </h2>
                            <button onClick={() => setActiveLineSearch(null)} className="text-gray-400 hover:text-red-500 text-xl transition">
                                <i className="fa fa-times"></i>
                            </button>
                        </div>

                        {/* Search & Filters */}
                        <div className="p-4 border-b bg-white flex gap-3 items-center">
                            <div className="relative flex-1">
                                <i className="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    value={lineSearch}
                                    onChange={e => setLineSearch(e.target.value)}
                                    placeholder="Rechercher par stock, produit, description, code produit, grade..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#51aff7] focus:outline-none"
                                    autoFocus
                                    autoComplete="off"
                                />
                            </div>
                            <select
                                value={lineSearchFilter}
                                onChange={e => setLineSearchFilter(e.target.value)}
                                className="border border-gray-300 rounded-lg p-3 text-sm min-w-[160px] focus:ring-2 focus:ring-[#51aff7] focus:outline-none"
                            >
                                <option value="">Tous les états</option>
                                {[...new Set(inventory.map(s => s.state).filter(Boolean))].sort().map(st => (
                                    <option key={st} value={st}>{st}</option>
                                ))}
                            </select>
                        </div>

                        {/* Results Count */}
                        <div className="px-4 py-2 bg-gray-50 border-b text-xs text-gray-500 font-semibold">
                            {(() => {
                                const searchLower = (lineSearch || '').toLowerCase();
                                const count = inventory.filter(s => {
                                    if (lineSearchFilter && s.state !== lineSearchFilter) return false;
                                    if (!searchLower) return true;
                                    return (
                                        (s.stockNo || '').toLowerCase().includes(searchLower) ||
                                        (s.productCode || '').toLowerCase().includes(searchLower) ||
                                        (s.wood || '').toLowerCase().includes(searchLower) ||
                                        (s.description || '').toLowerCase().includes(searchLower) ||
                                        (s.grade || '').toLowerCase().includes(searchLower) ||
                                        (s.location || '').toLowerCase().includes(searchLower)
                                    );
                                }).length;
                                return count + ' produit(s) trouvé(s)';
                            })()}
                        </div>

                        {/* Results List */}
                        <div className="flex-1 overflow-y-auto">
                            {(() => {
                                const searchLower = (lineSearch || '').toLowerCase();
                                const filtered = inventory.filter(s => {
                                    if (lineSearchFilter && s.state !== lineSearchFilter) return false;
                                    if (!searchLower) return true;
                                    return (
                                        (s.stockNo || '').toLowerCase().includes(searchLower) ||
                                        (s.productCode || '').toLowerCase().includes(searchLower) ||
                                        (s.wood || '').toLowerCase().includes(searchLower) ||
                                        (s.description || '').toLowerCase().includes(searchLower) ||
                                        (s.grade || '').toLowerCase().includes(searchLower) ||
                                        (s.location || '').toLowerCase().includes(searchLower)
                                    );
                                });
                                if (filtered.length === 0) {
                                    return (
                                        <div className="p-12 text-center">
                                            <i className="fa-solid fa-box-open text-5xl text-gray-300 mb-4"></i>
                                            <p className="text-gray-400 font-semibold">Aucun produit trouvé</p>
                                            <p className="text-gray-300 text-sm mt-1">Modifiez votre recherche ou vos filtres</p>
                                        </div>
                                    );
                                }
                                return filtered.slice(0, 100).map(s => {
                                    const isSelected = selectedInventoryItems.some(i => i.stockNo === s.stockNo);
                                    return (
                                    <div
                                        key={s.stockNo}
                                        className={`p-4 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 transition group ${isSelected ? 'bg-blue-50 ring-1 ring-blue-300' : ''}`}
                                        onClick={() => selectInventoryForLine(activeLineSearch, s)}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-start gap-3 flex-1">
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={(e) => { e.stopPropagation(); toggleInventorySelection(s); }}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="mt-1.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                                />
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-[#51aff7] text-base">{s.stockNo}</span>
                                                    {s.productCode && <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded">{s.productCode}</span>}
                                                </div>
                                                {s.description && <div className="text-sm text-gray-700 mt-1">{s.description}</div>}
                                                <div className="flex gap-2 mt-2 flex-wrap">
                                                    {s.wood && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">{s.wood}</span>}
                                                    {s.grade && <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-medium">{s.grade}</span>}
                                                    {s.state && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">{s.state}</span>}
                                                    {s.epaisseur && <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Ép: {s.epaisseur}</span>}
                                                    {s.largeur && <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">Larg: {s.largeur}</span>}
                                                    {s.location && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"><i className="fa fa-map-marker-alt mr-1"></i>{s.location}</span>}
                                                </div>
                                            </div>
                                            </div>
                                            <div className="text-right ml-4 flex flex-col items-end gap-2">
                                                <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                                                    <span className="text-gray-500 text-right">En main:</span>
                                                    <span className="font-bold text-green-700">{s.qty || 0}</span>
                                                    <span className="text-gray-500 text-right">Réservé:</span>
                                                    <span className="font-bold text-orange-600">{s.qtyReserve || 0}</span>
                                                    <span className="text-gray-500 text-right">En comm.:</span>
                                                    <span className="font-bold text-blue-600">{s.qtyComm || 0}</span>
                                                    <span className="text-gray-500 text-right">Disp.:</span>
                                                    <span className="font-bold text-emerald-600">{Math.max(0, (s.qty || 0) + (s.qtyComm || 0) - (s.qtyReserve || 0))}</span>
                                                </div>
                                                <span className="text-xs text-blue-500 font-semibold opacity-0 group-hover:opacity-100 transition">
                                                    <i className="fa fa-arrow-right mr-1"></i>Sélectionner
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                });
                            })()}
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 border-t bg-gray-50 flex justify-between items-center rounded-b-2xl">
                            <div className="text-sm text-gray-600 font-semibold">
                                {selectedInventoryItems.length > 0 && (
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg">
                                        <i className="fa fa-check-square mr-1"></i>{selectedInventoryItems.length} sélectionné(s)
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {selectedInventoryItems.length > 0 && (
                                    <button
                                        onClick={importSelectedItems}
                                        className="px-5 py-2.5 bg-[#51aff7] text-white font-bold rounded-lg hover:bg-[#3a9de6] transition"
                                    >
                                        <i className="fa fa-file-import mr-2"></i>Importer ({selectedInventoryItems.length})
                                    </button>
                                )}
                                <button
                                    onClick={() => { setActiveLineSearch(null); setSelectedInventoryItems([]); }}
                                    className="px-5 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition"
                                >
                                    <i className="fa fa-times mr-2"></i>Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Tab Bar */}
            <div className="flex border-b border-gray-200 mb-4 print:hidden">
                <button
                    onClick={() => setFacturationTab('factures')}
                    className={`px-6 py-3 font-bold text-sm transition border-b-2 ${facturationTab === 'factures' ? 'border-[#51aff7] text-[#51aff7]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                    <i className="fa-solid fa-folder-open mr-2"></i>Transactions
                </button>
                <button
                    onClick={() => setFacturationTab('formulaire')}
                    className={`px-6 py-3 font-bold text-sm transition border-b-2 ${facturationTab === 'formulaire' ? 'border-[#51aff7] text-[#51aff7]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                    <i className="fa-solid fa-file-invoice mr-2"></i>Formulaire
                </button>
                <button
                    onClick={() => setFacturationTab('commandes')}
                    className={`px-6 py-3 font-bold text-sm transition border-b-2 ${facturationTab === 'commandes' ? 'border-[#51aff7] text-[#51aff7]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                    <i className="fa-solid fa-cart-shopping mr-2"></i>Commandes d'achat
                    {commandes.filter(c => c.statut === 'En attente').length > 0 && (
                        <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">{commandes.filter(c => c.statut === 'En attente').length}</span>
                    )}
                </button>
            </div>

            {facturationTab === 'formulaire' && (
            <div className="invoice-form-container bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print:shadow-none print:border-none" onKeyDown={handleInvoiceKeyDown}>
                {/* Invoice Header */}
                <div className="bg-[#51aff7] text-white px-6 py-3 flex flex-wrap items-center justify-between gap-3 print:bg-white print:text-black print:border-b-2 print:border-[#51aff7] print:pb-4">
                    <div className="flex items-center gap-3">
                        <select
                            ref={docTypeSelectRef}
                            value={docType}
                            onChange={(e) => {
                                const newType = e.target.value;
                                if (newType && newType !== docType) {
                                    if (!docType || !docConfirmed || confirm(`Êtes-vous certain de vouloir changer le type de document à "${newType}" ?`)) {
                                        setDocType(newType);
                                        setDocConfirmed(false);
                                        // Generate invoice number only when switching directly to Facture
                                        if (newType === 'Facture' && !invoiceNo) {
                                            setInvoiceNo(generateInvoiceNo());
                                        }
                                        if (newType === 'Soumission') {
                                            setInvoiceNo('');
                                        }
                                    } else {
                                        e.target.value = docType;
                                    }
                                }
                            }}
                            disabled={docConfirmed}
                            className="text-2xl font-black tracking-tight bg-[#3a9be0] text-white rounded px-3 py-1 border-none cursor-pointer focus:ring-2 focus:ring-white focus:outline-none print:bg-white print:text-black print:border print:border-gray-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            <option value="" disabled>— SÉLECTIONNER —</option>
                            {docTypeOptions.map(opt => (
                                <option key={opt} value={opt}>{opt.toUpperCase()}</option>
                            ))}
                        </select>
                        {docType && !docConfirmed && (
                            <button
                                type="button"
                                onClick={() => {
                                    setDocConfirmed(true);
                                    const newTxn = generateTransactionNo();
                                    setTransactionNo(newTxn);
                                    logAction('Création', `Transaction ${newTxn} créée — Type: ${docType}`);
                                }}
                                className="px-4 py-1.5 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition text-sm print:hidden"
                            >
                                <i className="fa fa-check mr-1"></i>Confirmer
                            </button>
                        )}
                        <span className="text-white/70 text-sm hidden md:inline">Surfagest Production</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/70 uppercase print:text-gray-600">Transaction</span>
                            <span className="text-lg font-bold font-mono text-white print:text-gray-500">{transactionNo || '—'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/70 uppercase print:text-gray-600">Facture</span>
                            <input
                                type="text"
                                value={invoiceNo}
                                onChange={(e) => setInvoiceNo(e.target.value)}
                                className="bg-[#3a9be0] text-white text-lg font-bold text-right rounded px-2 py-1 w-32 print:bg-white print:text-black print:border print:border-gray-300"
                                placeholder="—"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/70 uppercase print:text-gray-600">Date</span>
                            <input
                                type="date"
                                value={invoiceDate}
                                onChange={(e) => setInvoiceDate(e.target.value)}
                                className="bg-[#3a9be0] text-white rounded px-2 py-1 print:bg-white print:text-black print:border print:border-gray-300"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/70 uppercase print:text-gray-600">Vendeur</span>
                            <input
                                type="text"
                                value={vendeur}
                                onChange={(e) => setVendeur(e.target.value)}
                                className="bg-[#3a9be0] text-white rounded px-2 py-1 w-36 print:bg-white print:text-black print:border print:border-gray-300"
                                placeholder="Nom vendeur"
                                list="vendeursList"
                            />
                            <datalist id="vendeursList">
                                <option value="" />
                            </datalist>
                        </div>
                        <div className="flex items-center gap-2 print:hidden">
                            <button
                                type="button"
                                onClick={() => {
                                    setClientInfo({ name: '', address: '', city: '', postalCode: '', phone: '', email: '', deliveryAddress: '', deliveryCity: '', deliveryPostalCode: '', deliveryNotes: '' });
                                    setLines(Array.from({ length: 1 }, () => ({ ...emptyLine })));
                                    setInvoiceNotes('');
                                    setInvoiceNo('');
                                    setDocType('');
                                    setTransactionNo('');
                                    setDocConfirmed(false);
                                    setOrderStatus('');
                                    setClientDeliveryExpanded(true);
                                    setEditingInvoiceNo(null);
                                    setTimeout(() => {
                                        if (docTypeSelectRef.current) {
                                            docTypeSelectRef.current.focus();
                                            docTypeSelectRef.current.click();
                                        }
                                    }, 100);
                                }}
                                className="px-3 py-1.5 bg-gray-600 text-gray-200 font-bold rounded hover:bg-gray-500 transition text-xs"
                            >
                                <i className="fa fa-plus mr-1"></i>Nouveau
                            </button>
                            <button
                                type="button"
                                onClick={handlePrintInvoice}
                                className="px-3 py-1.5 bg-gray-600 text-gray-200 font-bold rounded hover:bg-gray-500 transition text-xs"
                            >
                                <i className="fa fa-print mr-1"></i>Imprimer / PDF
                            </button>
                            {docType === 'Soumission' && docConfirmed && (
                                <button
                                    type="button"
                                    onClick={() => setShowTransferModal(true)}
                                    className="px-3 py-1.5 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition text-xs shadow"
                                >
                                    <i className="fa fa-exchange-alt mr-1"></i>Transférer en Bon de vente
                                </button>
                            )}
                            {docType === 'Bon de vente' && docConfirmed && (
                                <button
                                    type="button"
                                    onClick={() => setShowTransferModal(true)}
                                    className="px-3 py-1.5 bg-orange-600 text-white font-bold rounded hover:bg-orange-700 transition text-xs shadow"
                                >
                                    <i className="fa fa-file-invoice-dollar mr-1"></i>Transférer en Facture
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={handleSaveInvoice}
                                className="px-3 py-1.5 bg-[#51aff7] text-white font-bold rounded hover:bg-blue-600 transition text-xs shadow"
                            >
                                <i className="fa fa-save mr-1"></i>Enregistrement
                            </button>
                        </div>
                    </div>
                </div>

                {/* Transfer Modal (Soumission → Bon de vente / Bon de vente → Facture) */}
                {showTransferModal && (
                    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center print:hidden" onClick={(e) => { if (e.target === e.currentTarget) setShowTransferModal(false); }}>
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md m-4 overflow-hidden">
                            <div className="p-6 border-b bg-gray-50 text-center">
                                <i className={`fa-solid ${docType === 'Soumission' ? 'fa-exchange-alt' : 'fa-file-invoice-dollar'} text-4xl text-[#51aff7] mb-3`}></i>
                                <h2 className="text-lg font-bold text-gray-800">
                                    {docType === 'Soumission' ? 'Transférer en Bon de vente' : 'Transférer en Facture'}
                                </h2>
                            </div>
                            <div className="p-6 text-center">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {docType === 'Soumission'
                                        ? <>Êtes-vous bien certain de vouloir transférer cette soumission en <strong>Bon de vente</strong> ?</>
                                        : <>Êtes-vous bien certain de vouloir transférer ce bon de vente en <strong>Facture</strong> ?</>
                                    }
                                </p>
                                <p className="text-gray-400 text-xs mt-2">
                                    {docType === 'Soumission'
                                        ? 'Cette action changera le type de document.'
                                        : 'Cette action changera le type de document et attribuera un numéro de facture.'
                                    }
                                </p>
                            </div>
                            <div className="p-4 border-t bg-gray-50 flex justify-center gap-3">
                                <button
                                    onClick={() => setShowTransferModal(false)}
                                    className="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition text-sm"
                                >
                                    <i className="fa fa-times mr-2"></i>Non
                                </button>
                                <button
                                    onClick={() => {
                                        if (docType === 'Soumission') {
                                            setDocType('Bon de vente');
                                            setShowTransferModal(false);
                                            DevExpress.ui.notify('Soumission transférée en Bon de vente', 'success', 3000);
                                        } else {
                                            setDocType('Facture');
                                            if (!invoiceNo) setInvoiceNo(generateInvoiceNo());
                                            setShowTransferModal(false);
                                            DevExpress.ui.notify('Bon de vente transféré en Facture', 'success', 3000);
                                        }
                                    }}
                                    className={`px-6 py-2.5 ${docType === 'Soumission' ? 'bg-green-600 hover:bg-green-700' : 'bg-orange-600 hover:bg-orange-700'} text-white font-bold rounded-lg transition text-sm shadow`}
                                >
                                    <i className="fa fa-check mr-2"></i>Oui, transférer
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Historique / Audit Trail Modal */}
                {showHistorique && (
                    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center print:hidden" onClick={(e) => { if (e.target === e.currentTarget) setShowHistorique(false); }}>
                        <div className="bg-white rounded-2xl shadow-2xl w-[750px] max-h-[85vh] flex flex-col overflow-hidden">
                            <div className="p-4 border-b bg-gray-50 flex justify-between items-center rounded-t-2xl">
                                <h2 className="text-lg font-bold text-gray-800">
                                    <i className="fa fa-history mr-2 text-[#51aff7]"></i>
                                    Historique de la transaction {transactionNo || ''}
                                </h2>
                                <button onClick={() => setShowHistorique(false)} className="text-gray-400 hover:text-red-500">
                                    <i className="fa fa-times text-xl"></i>
                                </button>
                            </div>
                            <div className="flex-1 overflow-auto p-4">
                                {txHistory.length === 0 ? (
                                    <div className="text-center py-12 text-gray-400">
                                        <i className="fa fa-inbox text-4xl mb-3 block"></i>
                                        <p className="text-sm">Aucun historique pour cette transaction</p>
                                    </div>
                                ) : (
                                    <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                        <thead>
                                            <tr className="bg-gray-100 text-gray-600 uppercase text-[11px]">
                                                <th className="px-3 py-2 text-left w-[90px]">Date</th>
                                                <th className="px-3 py-2 text-left w-[70px]">Heure</th>
                                                <th className="px-3 py-2 text-left w-[100px]">Usager</th>
                                                <th className="px-3 py-2 text-left w-[150px]">Action</th>
                                                <th className="px-3 py-2 text-left">Détail</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {txHistory.map((h, i) => (
                                                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition`}>
                                                    <td className="px-3 py-2 text-gray-700 font-mono text-xs">{h.date}</td>
                                                    <td className="px-3 py-2 text-gray-700 font-mono text-xs">{h.heure}</td>
                                                    <td className="px-3 py-2 font-semibold text-gray-800 text-xs">{h.usager}</td>
                                                    <td className="px-3 py-2">
                                                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                                                            h.action === 'Création' ? 'bg-green-100 text-green-700' :
                                                            h.action === 'Sauvegarde' ? 'bg-blue-100 text-blue-700' :
                                                            h.action === 'Commander' ? 'bg-orange-100 text-orange-700' :
                                                            h.action === 'Bon de commande confirmé' ? 'bg-cyan-100 text-cyan-700' :
                                                            h.action === 'Annulation commande' ? 'bg-red-100 text-red-700' :
                                                            h.action === 'Expédition' ? 'bg-green-100 text-green-700' :
                                                            h.action === 'Suppression ligne' ? 'bg-red-100 text-red-700' :
                                                            'bg-gray-100 text-gray-600'
                                                        }`}>{h.action}</span>
                                                    </td>
                                                    <td className="px-3 py-2 text-gray-600 text-xs">{h.detail}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                            <div className="p-3 border-t bg-gray-50 flex justify-between items-center rounded-b-2xl">
                                <span className="text-xs text-gray-400">{txHistory.length} entrée(s)</span>
                                <button onClick={() => setShowHistorique(false)} className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded font-bold text-sm hover:bg-gray-300 transition">
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Scheduler / Horaire Modal */}
                {showScheduler && (
                    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center print:hidden" onClick={(e) => { if (e.target === e.currentTarget) setShowScheduler(false); }}>
                        <div className="bg-white rounded-2xl shadow-2xl w-[95vw] h-[92vh] flex flex-col overflow-hidden">
                            {/* Header */}
                            <div className="p-4 border-b bg-gray-50 flex justify-between items-center rounded-t-2xl">
                                <h2 className="text-lg font-bold text-gray-800">
                                    <i className="fa fa-calendar-alt mr-2 text-[#51aff7]"></i>
                                    Horaire
                                    {(transactionNo || invoiceNo) && <span className="ml-2 text-sm font-normal text-gray-500">({transactionNo || invoiceNo})</span>}
                                    {clientInfo.name && <span className="ml-2 text-sm font-normal text-blue-500">&mdash; {clientInfo.name}</span>}
                                </h2>
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        {schedulerCategories.map(cat => {
                                            const isActive = schedulerFilterCats.includes(cat.id);
                                            return (
                                                <button
                                                    key={cat.id}
                                                    onClick={() => {
                                                        setSchedulerFilterCats(prev => {
                                                            if (prev.includes(cat.id)) {
                                                                const next = prev.filter(id => id !== cat.id);
                                                                return next.length > 0 ? next : prev;
                                                            }
                                                            return [...prev, cat.id];
                                                        });
                                                    }}
                                                    className={`text-xs font-bold px-3 py-1.5 rounded-full transition cursor-pointer border-2 ${isActive ? '' : 'opacity-30'}`}
                                                    style={{
                                                        backgroundColor: isActive ? cat.color : 'transparent',
                                                        color: isActive ? 'white' : cat.color,
                                                        borderColor: cat.color
                                                    }}
                                                    title={isActive ? 'Cliquer pour masquer ' + cat.text : 'Cliquer pour afficher ' + cat.text}
                                                >
                                                    {isActive && <i className="fa fa-check mr-1" style={{fontSize:'9px'}}></i>}
                                                    {cat.text}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <button onClick={() => setShowScheduler(false)} className="text-gray-400 hover:text-red-500 text-xl transition ml-2">
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            {/* Tabs: Liste / Calendrier */}
                            <div className="flex border-b bg-white px-4 pt-2 gap-1">
                                <button
                                    onClick={() => setSchedulerViewTab('liste')}
                                    className={`px-5 py-2 font-bold text-sm rounded-t-lg transition border-b-2 ${schedulerViewTab === 'liste' ? 'border-[#51aff7] text-[#51aff7] bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                                >
                                    <i className="fa fa-list mr-1"></i>Liste des assignations
                                </button>
                                <button
                                    onClick={() => setSchedulerViewTab('calendrier')}
                                    className={`px-5 py-2 font-bold text-sm rounded-t-lg transition border-b-2 ${schedulerViewTab === 'calendrier' ? 'border-[#51aff7] text-[#51aff7] bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                                >
                                    <i className="fa fa-calendar mr-1"></i>Calendrier
                                </button>
                                {schedulerViewTab === 'liste' && (
                                    <div className="ml-auto flex items-center pb-1">
                                        <button
                                            onClick={() => {
                                                const now = new Date();
                                                const end = new Date(now.getTime() + 60 * 60 * 1000);
                                                const txLabel = transactionNo || invoiceNo || 'Sans num\u00e9ro';
                                                const clientLabel = clientInfo.name || 'Client non sp\u00e9cifi\u00e9';
                                                const deliveryAddr = [clientInfo.deliveryAddress, clientInfo.deliveryCity, clientInfo.deliveryPostalCode].filter(Boolean).join(', ') || [clientInfo.address, clientInfo.city, clientInfo.postalCode].filter(Boolean).join(', ') || '';
                                                setEditingEvent({
                                                    id: Date.now(),
                                                    text: clientLabel + ' - ' + txLabel,
                                                    noTransaction: txLabel,
                                                    adresseLivraison: deliveryAddr,
                                                    vendeur: vendeur || '',
                                                    description: 'Transaction: ' + txLabel + '\nClient: ' + clientLabel + (deliveryAddr ? '\nAdresse: ' + deliveryAddr : '') + (vendeur ? '\nVendeur: ' + vendeur : ''),
                                                    startDate: now.toISOString().slice(0, 16),
                                                    endDate: end.toISOString().slice(0, 16),
                                                    categoryId: 1,
                                                    _isNew: true
                                                });
                                            }}
                                            className="px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded hover:bg-green-600 transition"
                                        >
                                            <i className="fa fa-plus mr-1"></i>Nouvelle assignation
                                        </button>
                                    </div>
                                )}
                            </div>
                            {/* Content */}
                            <div className="flex-1 overflow-auto">
                                {schedulerViewTab === 'liste' ? (
                                    <div className="p-4">
                                        {/* Edit Event Form */}
                                        {editingEvent && (
                                            <div className="mb-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                                                <h3 className="text-sm font-bold text-blue-800 mb-3">
                                                    <i className={`fa ${editingEvent._isNew ? 'fa-plus' : 'fa-edit'} mr-2`}></i>
                                                    {editingEvent._isNew ? 'Nouvelle assignation' : 'Modifier l\'assignation'}
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                    <div>
                                                        <label className="text-xs font-semibold text-gray-600 block mb-1">Titre</label>
                                                        <input type="text" value={editingEvent.text || ''} onChange={(e) => setEditingEvent({...editingEvent, text: e.target.value})} className="w-full border rounded px-2 py-1.5 text-sm" />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-semibold text-gray-600 block mb-1">Cat&eacute;gorie</label>
                                                        <select value={editingEvent.categoryId || ''} onChange={(e) => setEditingEvent({...editingEvent, categoryId: parseInt(e.target.value)})} className="w-full border rounded px-2 py-1.5 text-sm">
                                                            {schedulerCategories.map(cat => (
                                                                <option key={cat.id} value={cat.id}>{cat.text}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-semibold text-gray-600 block mb-1">No Transaction</label>
                                                        <input type="text" value={editingEvent.noTransaction || ''} onChange={(e) => setEditingEvent({...editingEvent, noTransaction: e.target.value})} className="w-full border rounded px-2 py-1.5 text-sm" />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-semibold text-gray-600 block mb-1">D&eacute;but</label>
                                                        <input type="datetime-local" value={editingEvent.startDate ? (typeof editingEvent.startDate === 'string' ? editingEvent.startDate.slice(0,16) : new Date(editingEvent.startDate).toISOString().slice(0,16)) : ''} onChange={(e) => setEditingEvent({...editingEvent, startDate: e.target.value})} className="w-full border rounded px-2 py-1.5 text-sm" />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-semibold text-gray-600 block mb-1">Fin</label>
                                                        <input type="datetime-local" value={editingEvent.endDate ? (typeof editingEvent.endDate === 'string' ? editingEvent.endDate.slice(0,16) : new Date(editingEvent.endDate).toISOString().slice(0,16)) : ''} onChange={(e) => setEditingEvent({...editingEvent, endDate: e.target.value})} className="w-full border rounded px-2 py-1.5 text-sm" />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-semibold text-gray-600 block mb-1">Vendeur</label>
                                                        <input type="text" value={editingEvent.vendeur || ''} onChange={(e) => setEditingEvent({...editingEvent, vendeur: e.target.value})} className="w-full border rounded px-2 py-1.5 text-sm" />
                                                    </div>
                                                    <div className="md:col-span-2">
                                                        <label className="text-xs font-semibold text-gray-600 block mb-1">Adresse livraison</label>
                                                        <input type="text" value={editingEvent.adresseLivraison || ''} onChange={(e) => setEditingEvent({...editingEvent, adresseLivraison: e.target.value})} className="w-full border rounded px-2 py-1.5 text-sm" />
                                                    </div>
                                                    <div className="lg:col-span-3">
                                                        <label className="text-xs font-semibold text-gray-600 block mb-1">Description / Notes</label>
                                                        <textarea value={editingEvent.description || ''} onChange={(e) => setEditingEvent({...editingEvent, description: e.target.value})} className="w-full border rounded px-2 py-1.5 text-sm" rows={2}></textarea>
                                                    </div>
                                                </div>
                                                <div className="mt-3 flex gap-2 justify-end">
                                                    <button onClick={() => setEditingEvent(null)} className="px-4 py-1.5 bg-gray-200 text-gray-700 text-xs font-bold rounded hover:bg-gray-300 transition">
                                                        Annuler
                                                    </button>
                                                    <button onClick={() => {
                                                        const evToSave = { ...editingEvent, startDate: new Date(editingEvent.startDate).toISOString(), endDate: new Date(editingEvent.endDate).toISOString() };
                                                        delete evToSave._isNew;
                                                        if (editingEvent._isNew) {
                                                            setSchedulerEvents(prev => {
                                                                const updated = [...prev, evToSave];
                                                                localStorage.setItem('schedulerEvents', JSON.stringify(updated));
                                                                return updated;
                                                            });
                                                        } else {
                                                            setSchedulerEvents(prev => {
                                                                const updated = prev.map(ev => ev.id === evToSave.id ? evToSave : ev);
                                                                localStorage.setItem('schedulerEvents', JSON.stringify(updated));
                                                                return updated;
                                                            });
                                                        }
                                                        setEditingEvent(null);
                                                        DevExpress.ui.notify('Assignation sauvegard\u00e9e', 'success', 2000);
                                                    }} className="px-4 py-1.5 bg-[#51aff7] text-white text-xs font-bold rounded hover:bg-blue-600 transition">
                                                        <i className="fa fa-save mr-1"></i>Sauvegarder
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        {/* Events Table */}
                                        {schedulerEvents.filter(ev => schedulerFilterCats.includes(ev.categoryId)).length === 0 ? (
                                            <div className="text-center py-12">
                                                <i className="fa fa-calendar-xmark text-5xl text-gray-300 mb-4 block"></i>
                                                <p className="text-gray-400 font-semibold">Aucune assignation</p>
                                                <p className="text-gray-300 text-sm mt-1">Cliquez &laquo; Nouvelle assignation &raquo; pour en cr&eacute;er une</p>
                                            </div>
                                        ) : (
                                            <div className="overflow-x-auto border rounded-lg">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="bg-[#51aff7] text-white">
                                                            <th className="px-3 py-2 text-left font-bold">Cat&eacute;gorie</th>
                                                            <th className="px-3 py-2 text-left font-bold">Titre</th>
                                                            <th className="px-3 py-2 text-left font-bold">Transaction</th>
                                                            <th className="px-3 py-2 text-left font-bold">D&eacute;but</th>
                                                            <th className="px-3 py-2 text-left font-bold">Fin</th>
                                                            <th className="px-3 py-2 text-left font-bold">Vendeur</th>
                                                            <th className="px-3 py-2 text-left font-bold">Adresse</th>
                                                            <th className="px-3 py-2 text-center font-bold">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {schedulerEvents
                                                            .filter(ev => schedulerFilterCats.includes(ev.categoryId))
                                                            .slice()
                                                            .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
                                                            .map((ev) => {
                                                                const cat = schedulerCategories.find(c => c.id === ev.categoryId);
                                                                const startD = ev.startDate ? new Date(ev.startDate) : null;
                                                                const endD = ev.endDate ? new Date(ev.endDate) : null;
                                                                const formatDT = (d) => d ? d.toLocaleDateString('fr-CA') + ' ' + d.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit' }) : '—';
                                                                const isPast = startD && startD < new Date();
                                                                return (
                                                                    <tr key={ev.id} className={`border-t hover:bg-blue-50 transition ${isPast ? 'opacity-50' : ''}`}>
                                                                        <td className="px-3 py-2">
                                                                            {cat ? (
                                                                                <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: cat.color + '20', color: cat.color }}>
                                                                                    {cat.text}
                                                                                </span>
                                                                            ) : '—'}
                                                                        </td>
                                                                        <td className="px-3 py-2 font-semibold text-gray-800">{ev.text || '—'}</td>
                                                                        <td className="px-3 py-2 text-gray-600 font-mono text-xs">{ev.noTransaction || '—'}</td>
                                                                        <td className="px-3 py-2 text-gray-600 whitespace-nowrap">{formatDT(startD)}</td>
                                                                        <td className="px-3 py-2 text-gray-600 whitespace-nowrap">{formatDT(endD)}</td>
                                                                        <td className="px-3 py-2 text-gray-600">{ev.vendeur || '—'}</td>
                                                                        <td className="px-3 py-2 text-gray-600 text-xs max-w-[200px] truncate" title={ev.adresseLivraison || ''}>{ev.adresseLivraison || '—'}</td>
                                                                        <td className="px-3 py-2 text-center">
                                                                            <div className="flex gap-1 justify-center">
                                                                                <button onClick={() => {
                                                                                    setEditingEvent({
                                                                                        ...ev,
                                                                                        startDate: ev.startDate ? new Date(ev.startDate).toISOString().slice(0,16) : '',
                                                                                        endDate: ev.endDate ? new Date(ev.endDate).toISOString().slice(0,16) : ''
                                                                                    });
                                                                                }} className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-xs font-bold" title="Modifier">
                                                                                    <i className="fa fa-edit"></i>
                                                                                </button>
                                                                                <button onClick={() => {
                                                                                    if (confirm('Supprimer cette assignation?')) {
                                                                                        setSchedulerEvents(prev => {
                                                                                            const updated = prev.filter(e => e.id !== ev.id);
                                                                                            localStorage.setItem('schedulerEvents', JSON.stringify(updated));
                                                                                            return updated;
                                                                                        });
                                                                                        DevExpress.ui.notify('Assignation supprim\u00e9e', 'warning', 2000);
                                                                                    }
                                                                                }} className="px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 text-xs font-bold" title="Supprimer">
                                                                                    <i className="fa fa-trash"></i>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex-1 p-4" style={{ overflow: 'hidden', minHeight: 0, height: '100%' }}>
                                        <div ref={schedulerContainerRef} style={{ height: '100%', width: '100%' }}></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Client + Delivery Info */}
                <div className={`p-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-200 print:p-4 ${!docConfirmed ? 'opacity-40 pointer-events-none' : ''}`}>
                    {/* Client Info */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex justify-between items-center mb-3 cursor-pointer" onClick={() => setClientDeliveryExpanded(!clientDeliveryExpanded)}>
                            <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider">
                                <i className="fa-solid fa-user mr-2"></i>Information Client
                                {isClientFilled && !clientDeliveryExpanded && <span className="ml-2 text-xs font-normal normal-case text-blue-600">— {clientInfo.name}</span>}
                            </h3>
                            <i className={`fa-solid ${clientDeliveryExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-blue-400 text-xs`}></i>
                        </div>
                        {clientDeliveryExpanded ? (
                        <div className="space-y-2">
                            <div>
                                <label className={labelClass}>Nom / Entreprise <span className="text-red-500">*</span></label>
                                <input type="text" value={clientInfo.name} onChange={e => setClientInfo({...clientInfo, name: e.target.value})} className={inputClass} placeholder="Ex: Constructions ABC Inc." />
                            </div>
                            <div>
                                <label className={labelClass}>Adresse</label>
                                <input type="text" value={clientInfo.address} onChange={e => setClientInfo({...clientInfo, address: e.target.value})} className={inputClass} placeholder="123 Rue Principale" />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className={labelClass}>Ville</label>
                                    <input type="text" value={clientInfo.city} onChange={e => setClientInfo({...clientInfo, city: e.target.value})} className={inputClass} placeholder="Saint-Georges" />
                                </div>
                                <div>
                                    <label className={labelClass}>Code Postal</label>
                                    <input type="text" value={clientInfo.postalCode} onChange={e => setClientInfo({...clientInfo, postalCode: e.target.value})} className={inputClass} placeholder="G5Y 5C3" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className={labelClass}>Téléphone</label>
                                    <input type="tel" value={clientInfo.phone} onChange={e => setClientInfo({...clientInfo, phone: e.target.value})} className={inputClass} placeholder="(418) 555-0123" />
                                </div>
                                <div>
                                    <label className={labelClass}>Courriel</label>
                                    <input type="email" value={clientInfo.email} onChange={e => setClientInfo({...clientInfo, email: e.target.value})} className={inputClass} placeholder="client@email.com" />
                                </div>
                            </div>
                        </div>
                        ) : (
                        <div>
                            <div>
                                <label className={labelClass}>Nom / Entreprise</label>
                                <input type="text" value={clientInfo.name} onChange={e => setClientInfo({...clientInfo, name: e.target.value})} className={inputClass} placeholder="Ex: Constructions ABC Inc." readOnly />
                            </div>
                        </div>
                        )}
                    </div>

                    {/* Delivery Info */}
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div className="flex justify-between items-center mb-3 cursor-pointer" onClick={() => setClientDeliveryExpanded(!clientDeliveryExpanded)}>
                            <h3 className="text-sm font-bold text-green-800 uppercase tracking-wider">
                                <i className="fa-solid fa-truck mr-2"></i>Adresse de Livraison
                                {isDeliveryFilled && !clientDeliveryExpanded && <span className="ml-2 text-xs font-normal normal-case text-green-600">— {clientInfo.deliveryAddress}</span>}
                            </h3>
                            <div className="flex items-center gap-2">
                                {clientDeliveryExpanded && (
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); setClientInfo(prev => ({
                                        ...prev,
                                        deliveryAddress: prev.address,
                                        deliveryCity: prev.city,
                                        deliveryPostalCode: prev.postalCode
                                    })); }}
                                    className="text-xs text-green-600 hover:text-green-800 font-bold underline"
                                >
                                    <i className="fa fa-copy mr-1"></i>Même que client
                                </button>
                                )}
                                <i className={`fa-solid ${clientDeliveryExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-green-400 text-xs`}></i>
                            </div>
                        </div>
                        {clientDeliveryExpanded ? (
                        <div className="space-y-2">
                            <div>
                                <label className={labelClass}>Adresse de livraison</label>
                                <input type="text" value={clientInfo.deliveryAddress} onChange={e => setClientInfo({...clientInfo, deliveryAddress: e.target.value})} className={inputClass} placeholder="456 Boulevard Industriel" />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className={labelClass}>Ville</label>
                                    <input type="text" value={clientInfo.deliveryCity} onChange={e => setClientInfo({...clientInfo, deliveryCity: e.target.value})} className={inputClass} placeholder="Saint-Georges" />
                                </div>
                                <div>
                                    <label className={labelClass}>Code Postal</label>
                                    <input type="text" value={clientInfo.deliveryPostalCode} onChange={e => setClientInfo({...clientInfo, deliveryPostalCode: e.target.value})} className={inputClass} placeholder="G5Y 5C3" />
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Notes de livraison</label>
                                <input type="text" value={clientInfo.deliveryNotes} onChange={e => setClientInfo({...clientInfo, deliveryNotes: e.target.value})} className={inputClass} placeholder="Ex: Quai #3, livrer avant 14h..." />
                            </div>
                        </div>
                        ) : (
                        <div>
                            <div>
                                <label className={labelClass}>Adresse de livraison</label>
                                <input type="text" value={clientInfo.deliveryAddress} onChange={e => setClientInfo({...clientInfo, deliveryAddress: e.target.value})} className={inputClass} placeholder="456 Boulevard Industriel" readOnly />
                            </div>
                        </div>
                        )}
                    </div>
                </div>

                {/* Invoice Lines Table */}
                <div className={`p-6 print:p-4 ${!docConfirmed ? 'opacity-40 pointer-events-none' : ''}`}>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                            <i className="fa-solid fa-list mr-2"></i>Lignes de Facture
                        </h3>
                        <div className="flex items-center gap-2 print:hidden">
                            {/* Bulk Action for checked lines */}
                            <select
                                value=""
                                onChange={e => {
                                    const val = e.target.value;
                                    if (!val) return;
                                    const checkedIndexes = lines.map((l, i) => l.checked ? i : -1).filter(i => i >= 0);
                                    if (checkedIndexes.length === 0) {
                                        DevExpress.ui.notify('Aucune ligne sélectionnée', 'warning', 2000);
                                        e.target.value = '';
                                        return;
                                    }
                                    if (val === 'Expédier') {
                                        handleExpedier(checkedIndexes);
                                    } else if (val === 'Commander') {
                                        handleCommander(checkedIndexes);
                                    } else if (val === 'Procédé') {
                                        setProcedeLineIndex(checkedIndexes[0]);
                                        setProcedeSelection(lines[checkedIndexes[0]].procedes || []);
                                    } else {
                                        setLines(prev => prev.map((line, i) => {
                                            if (!line.checked) return line;
                                            return { ...line, statut: val };
                                        }));
                                        DevExpress.ui.notify(`Action "${val}" appliquée à ${checkedIndexes.length} ligne(s)`, 'success', 2000);
                                    }
                                    e.target.value = '';
                                }}
                                className="px-2 py-1 border border-gray-300 rounded text-sm font-bold text-gray-600 focus:ring-1 focus:ring-[#51aff7] focus:outline-none cursor-pointer bg-white"
                                title="Appliquer une action aux lignes cochées"
                            >
                                <option value="">Action groupée</option>
                                {orderStatusOptions.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                            <button
                                type="button"
                                onClick={addLine}
                                className="px-3 py-1 bg-[#51aff7] text-white text-sm font-bold rounded hover:bg-blue-600 transition"
                            >
                                <i className="fa fa-plus mr-1"></i>Ajouter une ligne
                            </button>
                            <div className="h-4 border-l border-gray-300 mx-1"></div>
                            <button type="button" onClick={() => setShowScheduler(true)} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded hover:bg-gray-200 transition border border-gray-300">
                                <i className="fa fa-calendar-alt mr-1"></i>Horaire
                            </button>
                            <button type="button" onClick={() => DevExpress.ui.notify('Module Profitabilité à venir', 'info', 2000)} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded hover:bg-gray-200 transition border border-gray-300">
                                <i className="fa fa-chart-line mr-1"></i>Profitabilité
                            </button>
                            <button type="button" onClick={() => DevExpress.ui.notify('Module Gestion main-d\'oeuvre à venir', 'info', 2000)} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded hover:bg-gray-200 transition border border-gray-300">
                                <i className="fa fa-users-cog mr-1"></i>Gestion main-d'oeuvre
                            </button>
                            <button type="button" onClick={() => DevExpress.ui.notify('Module Opération Spécial à venir', 'info', 2000)} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded hover:bg-gray-200 transition border border-gray-300">
                                <i className="fa fa-cogs mr-1"></i>Opération Spécial
                            </button>
                            <button type="button" onClick={() => setShowHistorique(true)} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded hover:bg-gray-200 transition border border-gray-300">
                                <i className="fa fa-history mr-1"></i>Historique
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto border border-gray-200 rounded-lg" style={{minHeight: '555px'}}>
                        <table className="w-full text-sm">
                            <thead>
                                <tr>
                                    <th className={`${thClass} print:hidden`} style={{width: '30px'}}></th>
                                    <th className={thClass} style={{width: '160px'}}>Code / Stock</th>
                                    <th className={thClass}>Description</th>
                                    <th className={thClass} style={{width: '90px'}}>Qté vendu</th>
                                    <th className={thClass} style={{width: '90px'}}>Qté exp</th>
                                    <th className={thClass} style={{width: '80px'}}>Qté res</th>
                                    <th className={thClass} style={{width: '65px'}}>UM</th>
                                    <th className={thClass} style={{width: '90px'}}>Prix</th>
                                    <th className={thClass} style={{width: '70px'}}>Esc %</th>
                                    <th className={thClass} style={{width: '100px'}}>Prix vente</th>
                                    <th className={thClass} style={{width: '120px'}}>Action</th>
                                    <th className={thClass} style={{width: '120px'}}>Statut</th>
                                    <th className={`${thClass} print:hidden`} style={{width: '40px'}}></th>
                                </tr>
                            </thead>
                            <tbody onFocus={() => { if (clientDeliveryExpanded) setClientDeliveryExpanded(false); }}>
                                {lines.map((line, idx) => (
                                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition">
                                        {/* Checkbox */}
                                        <td className="px-1 py-1 text-center print:hidden">
                                            <input
                                                type="checkbox"
                                                checked={!!line.checked}
                                                onChange={e => updateLine(idx, 'checked', e.target.checked)}
                                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                            />
                                        </td>
                                        {/* Code / Stock with inventory search */}
                                        <td className="px-2 py-1">
                                            <div className="flex gap-1">
                                                {line.stockNo && line.lineStatut && line.lineStatut !== 'En attente' ? (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            const invItem = inventory.find(i => i.stockNo === line.stockNo);
                                                            if (invItem) setViewInventoryItem(invItem);
                                                        }}
                                                        className="w-full p-1.5 border border-gray-300 rounded text-sm text-left bg-gray-50 hover:bg-blue-50 hover:border-blue-300 text-blue-600 font-semibold cursor-pointer transition"
                                                        title="Voir la fiche inventaire"
                                                    >
                                                        <i className="fa fa-eye mr-1 text-xs"></i>{line.lineStatut === 'Insuffisant' ? (line.productCode || line.stockNo) : line.stockNo}
                                                    </button>
                                                ) : (
                                                <input
                                                    type="text"
                                                    value={line.stockNo}
                                                    onChange={e => updateLine(idx, 'stockNo', e.target.value)}
                                                    onBlur={e => lookupInventoryForLine(idx, e.target.value)}
                                                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); lookupInventoryForLine(idx, e.target.value); handleInvoiceKeyDown(e); } }}
                                                    placeholder="Code ou stock..."
                                                    maxLength={40}
                                                    size={20}
                                                    className="w-full p-1.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                                                    autoComplete="off"
                                                />
                                                )}
                                                <button
                                                    type="button"
                                                    onClick={() => { setActiveLineSearch(idx); setLineSearch(''); setLineSearchFilter(''); }}
                                                    className={`px-1.5 rounded text-xs print:hidden ${line.lineStatut && line.lineStatut !== 'En attente' ? 'hidden' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                                                    title="Rechercher dans l'inventaire"
                                                    disabled={!!(line.lineStatut && line.lineStatut !== 'En attente')}
                                                >
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </td>
                                        {/* Description */}
                                        <td className="px-2 py-1">
                                            <input type="text" value={line.description} onChange={e => updateLine(idx, 'description', e.target.value)} className="w-full p-1.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none" placeholder="Description du produit" />
                                        </td>
                                        {/* Qté vendu */}
                                        <td className="px-2 py-1">
                                            <input type="number" value={line.qtyVendu} onChange={e => updateLine(idx, 'qtyVendu', e.target.value)} className={`w-full p-1.5 border rounded text-sm text-right focus:ring-1 focus:ring-blue-400 focus:outline-none ${line.stockNo && !line.qtyVendu ? 'border-yellow-400 bg-yellow-50' : 'border-gray-300'}`} placeholder="0" min="0" />
                                        </td>
                                        {/* Qté exp */}
                                        <td className="px-2 py-1">
                                            <input type="number" value={line.qtyExp} onChange={e => updateLine(idx, 'qtyExp', e.target.value)} className="w-full p-1.5 border border-gray-300 rounded text-sm text-right focus:ring-1 focus:ring-blue-400 focus:outline-none" placeholder="0" min="0" />
                                        </td>
                                        {/* Qté res (calculated) */}
                                        <td className="px-2 py-1 text-center">
                                            <span className={`font-bold text-sm ${(line.qtyRes || 0) > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                                                {line.qtyRes || 0}
                                            </span>
                                        </td>
                                        {/* UM */}
                                        <td className="px-2 py-1">
                                            <input type="text" value={line.um} onChange={e => updateLine(idx, 'um', e.target.value)} className="w-full p-1.5 border border-gray-300 rounded text-sm text-center focus:ring-1 focus:ring-blue-400 focus:outline-none" placeholder="PC" />
                                        </td>
                                        {/* Prix */}
                                        <td className="px-2 py-1">
                                            <input type="number" value={line.prix} onChange={e => updateLine(idx, 'prix', e.target.value)} step="0.01" className="w-full p-1.5 border border-gray-300 rounded text-sm text-right focus:ring-1 focus:ring-blue-400 focus:outline-none" placeholder="0.00" min="0" />
                                        </td>
                                        {/* Escompte */}
                                        <td className="px-2 py-1">
                                            <input type="number" value={line.escompte} onChange={e => updateLine(idx, 'escompte', e.target.value)} step="0.1" className="w-full p-1.5 border border-gray-300 rounded text-sm text-right focus:ring-1 focus:ring-blue-400 focus:outline-none" placeholder="0" min="0" max="100" />
                                        </td>
                                        {/* Prix vente (calculated) */}
                                        <td className="px-2 py-1 text-right">
                                            <span className="font-bold text-sm text-gray-800">{line.prixVente ? '$' + line.prixVente : '—'}</span>
                                        </td>
                                        {/* Action */}
                                        <td className="px-2 py-1">
                                            <select value={line.statut === 'Proc\u00e9d\u00e9' ? 'Proc\u00e9d\u00e9' : line.statut} onChange={e => {
                                                const val = e.target.value;
                                                if (val === 'Expédier') {
                                                    handleExpedier([idx]);
                                                } else if (val === 'Commander') {
                                                    handleCommander([idx]);
                                                } else if (val === 'Proc\u00e9d\u00e9') {
                                                    setProcedeLineIndex(idx);
                                                    setProcedeSelection(line.procedes || []);
                                                } else {
                                                    updateLine(idx, 'statut', val);
                                                }
                                            }} className="w-full p-1.5 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-blue-400 focus:outline-none">
                                                <option value="">-- Action --</option>
                                                {orderStatusOptions.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                            {line.statut === 'Proc\u00e9d\u00e9' && line.procedes && line.procedes.length > 0 && (
                                                <div className="mt-1 flex flex-wrap gap-1 items-center">
                                                    {line.procedes.map((p, pi) => (
                                                        <span key={pi} className="inline-block px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded text-[10px] font-semibold">{p.label || p.id}</span>
                                                    ))}
                                                    <button type="button" onClick={() => { setProcedeLineIndex(idx); setProcedeSelection(line.procedes || []); }} className="text-indigo-500 hover:text-indigo-700 text-xs ml-1" title="Modifier les proc\u00e9d\u00e9s">
                                                        <i className="fa fa-pen-to-square"></i>
                                                    </button>
                                                </div>
                                            )}
                                            {line.statut === 'Commander' && line.lineStatut === 'En Commande' && (() => {
                                                const hasConfirmedPO = commandes.some(c =>
                                                    (c.stockNo === line.stockNo || c.description === line.description) &&
                                                    c.sourceTransaction === (transactionNo || '') &&
                                                    (c.statut === 'Confirm\u00e9' || c.statut === 'Re\u00e7u')
                                                );
                                                return !hasConfirmedPO ? (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            if (confirm('Annuler la commande pour cette ligne? La ligne redeviendra modifiable.')) {
                                                                handleAnnulerCommander(idx);
                                                            }
                                                        }}
                                                        className="mt-1 w-full px-2 py-1 bg-red-50 text-red-600 border border-red-200 rounded text-[10px] font-bold hover:bg-red-100 transition"
                                                        title="Annuler la commande et remettre la ligne en \u00e9dition"
                                                    >
                                                        <i className="fa fa-undo mr-1"></i>Annuler commande
                                                    </button>
                                                ) : null;
                                            })()}
                                        </td>
                                        {/* Statut */}
                                        <td className="px-2 py-1 text-center">
                                            <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                                                line.lineStatut === 'Expédié' ? 'bg-green-100 text-green-700' :
                                                line.lineStatut === 'Commandé' ? 'bg-cyan-100 text-cyan-700' :
                                                line.lineStatut === 'Exp. (Commandé)' ? 'bg-teal-100 text-teal-700' :
                                                line.lineStatut === 'R\u00e9serv\u00e9' ? 'bg-purple-100 text-purple-700' :
                                                line.lineStatut === 'Insuffisant' ? 'bg-red-100 text-red-700' :
                                                line.statut === 'Commander' ? 'bg-blue-100 text-blue-700' :
                                                line.statut === 'Production' ? 'bg-yellow-100 text-yellow-700' :
                                                line.statut === 'Proc\u00e9d\u00e9' ? 'bg-indigo-100 text-indigo-700' :
                                                line.statut === 'Pr\u00e9parer' ? 'bg-orange-100 text-orange-700' :
                                                line.statut === 'Exp\u00e9dier' ? 'bg-green-100 text-green-700' :
                                                'bg-gray-100 text-gray-500'
                                            }`}>{line.lineStatut || 'En attente'}</span>
                                        </td>
                                        {/* Delete */}
                                        <td className="px-1 py-1 text-center print:hidden">
                                            <button type="button" onClick={() => removeLine(idx)} className="text-red-400 hover:text-red-600 transition" title="Supprimer la ligne" disabled={lines.length <= 1}>
                                                <i className="fa fa-trash-can text-xs"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer: Totals + Notes + Actions */}
                <div className="p-6 bg-gray-50 border-t border-gray-200 print:bg-white print:p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Notes */}
                        <div>
                            <label className={labelClass}>Notes / Conditions</label>
                            <textarea
                                value={invoiceNotes}
                                onChange={e => setInvoiceNotes(e.target.value)}
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none resize-vertical"
                                placeholder="Conditions de paiement, notes spéciales..."
                            />
                        </div>

                        {/* Totals */}
                        <div className="flex flex-col justify-end">
                            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Sous-total</span>
                                    <span className="font-bold">${sousTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">TPS (5%)</span>
                                    <span>${tps.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">TVQ (9.975%)</span>
                                    <span>${tvq.toFixed(2)}</span>
                                </div>
                                <div className="border-t border-gray-300 pt-2 flex justify-between">
                                    <span className="text-lg font-black text-gray-800">TOTAL</span>
                                    <span className="text-lg font-black text-[#51aff7]">${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}

            {/* Saved Invoices Tab */}
            {facturationTab === 'factures' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 print:hidden">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        <i className="fa-solid fa-folder-open mr-2 text-[#51aff7]"></i>
                        Transactions
                    </h3>
                    {savedInvoices.length > 0 ? (
                    <InvoiceGrid
                        savedInvoices={savedInvoices}
                        setSavedInvoices={setSavedInvoices}
                        setInvoiceNo={setInvoiceNo}
                        setInvoiceDate={setInvoiceDate}
                        setClientInfo={setClientInfo}
                        setDocType={setDocType}
                        setDocConfirmed={setDocConfirmed}
                        setTransactionNo={setTransactionNo}
                        setOrderStatus={setOrderStatus}
                        setVendeur={setVendeur}
                        setLines={setLines}
                        setInvoiceNotes={setInvoiceNotes}
                        setTxHistory={setTxHistory}
                        setEditingInvoiceNo={setEditingInvoiceNo}
                        emptyLine={emptyLine}
                        onLoadInvoice={() => setFacturationTab('formulaire')}
                    />
                    ) : (
                        <div className="text-center py-12">
                            <i className="fa-solid fa-file-circle-xmark text-5xl text-gray-300 mb-4 block"></i>
                            <p className="text-gray-400 font-semibold">Aucune facture sauvegardée</p>
                            <p className="text-gray-300 text-sm mt-1">Les factures créées apparaîtront ici</p>
                        </div>
                    )}
                </div>
            )}

            {/* Commandes d'achat Tab */}
            {facturationTab === 'commandes' && (() => {
                // Group commandes by fournisseur
                const grouped = {};
                commandes.forEach(c => {
                    const key = c.fournisseur || 'Non assigné';
                    if (!grouped[key]) grouped[key] = [];
                    grouped[key].push(c);
                });
                const groupKeys = Object.keys(grouped).sort((a, b) => a === 'Non assigné' ? 1 : b === 'Non assigné' ? -1 : a.localeCompare(b));

                return (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 print:hidden">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-800">
                            <i className="fa-solid fa-cart-shopping mr-2 text-[#51aff7]"></i>
                            Commandes d'achat
                            <span className="ml-2 text-sm font-normal text-gray-500">({commandes.length} ligne{commandes.length > 1 ? 's' : ''})</span>
                        </h3>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    const selected = commandes.filter(c => c._checked);
                                    if (selected.length === 0) { DevExpress.ui.notify('Sélectionnez des lignes', 'warning', 2000); return; }
                                    // Check if lines have a vendor assigned
                                    const vendorsUsed = [...new Set(selected.map(c => c.fournisseur).filter(Boolean))];
                                    if (vendorsUsed.length > 1) {
                                        DevExpress.ui.notify('Sélectionnez des lignes d\'un seul fournisseur', 'warning', 2000);
                                        return;
                                    }
                                    const vendor = vendorsUsed[0] || '';
                                    if (!vendor) {
                                        DevExpress.ui.notify('Assignez un fournisseur aux lignes sélectionnées', 'warning', 2000);
                                        return;
                                    }
                                    handleCreateBonCommande(selected.map(c => c.id), vendor, 'direct');
                                }}
                                className="px-3 py-1.5 bg-[#51aff7] text-white text-sm font-bold rounded hover:bg-blue-600 transition"
                            >
                                <i className="fa fa-print mr-1"></i>Créer Bon de Commande
                            </button>
                            <button
                                onClick={() => {
                                    const selected = commandes.filter(c => c._checked);
                                    if (selected.length === 0) { DevExpress.ui.notify('Sélectionnez des lignes', 'warning', 2000); return; }
                                    const vendorsUsed = [...new Set(selected.map(c => c.fournisseur).filter(Boolean))];
                                    if (vendorsUsed.length > 1) {
                                        DevExpress.ui.notify('Sélectionnez des lignes d\'un seul fournisseur', 'warning', 2000);
                                        return;
                                    }
                                    const vendor = vendorsUsed[0] || '';
                                    if (!vendor) {
                                        DevExpress.ui.notify('Assignez un fournisseur aux lignes sélectionnées', 'warning', 2000);
                                        return;
                                    }
                                    handleCreateBonCommande(selected.map(c => c.id), vendor, 'bureau');
                                }}
                                className="px-3 py-1.5 bg-orange-500 text-white text-sm font-bold rounded hover:bg-orange-600 transition"
                                title="Envoyer au bureau de commande pour traitement"
                            >
                                <i className="fa fa-paper-plane mr-1"></i>Envoyer au Bureau
                            </button>
                            <button
                                onClick={() => {
                                    const toRemove = commandes.filter(c => c._checked && c.statut === 'Reçu').map(c => c.id);
                                    if (toRemove.length === 0) { DevExpress.ui.notify('Seules les commandes reçues peuvent être supprimées', 'warning', 2000); return; }
                                    setCommandes(prev => prev.filter(c => !toRemove.includes(c.id)));
                                    DevExpress.ui.notify(`${toRemove.length} commande(s) supprimée(s)`, 'success', 2000);
                                }}
                                className="px-3 py-1.5 bg-red-100 text-red-600 text-sm font-bold rounded hover:bg-red-200 transition"
                            >
                                <i className="fa fa-trash mr-1"></i>Supprimer
                            </button>
                        </div>
                    </div>

                    {commandes.length === 0 ? (
                        <div className="text-center py-12">
                            <i className="fa-solid fa-cart-plus text-5xl text-gray-300 mb-4 block"></i>
                            <p className="text-gray-400 font-semibold">Aucune commande d'achat</p>
                            <p className="text-gray-300 text-sm mt-1">Utilisez l'action "Commander" dans le formulaire de facture pour ajouter des lignes ici</p>
                        </div>
                    ) : (
                    <div className="space-y-4">
                        {groupKeys.map(groupName => {
                            const groupLines = grouped[groupName];
                            const allChecked = groupLines.every(c => c._checked);
                            return (
                                <div key={groupName} className="border border-gray-200 rounded-lg overflow-hidden">
                                    <div className="bg-gray-50 px-4 py-2 flex justify-between items-center border-b border-gray-200">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                checked={allChecked}
                                                onChange={e => {
                                                    const ids = groupLines.map(c => c.id);
                                                    setCommandes(prev => prev.map(c => ids.includes(c.id) ? { ...c, _checked: e.target.checked } : c));
                                                }}
                                                className="h-4 w-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                                            />
                                            <h4 className="font-bold text-sm text-gray-800 uppercase tracking-wider">
                                                <i className="fa fa-building mr-1 text-[#51aff7]"></i>
                                                {groupName}
                                            </h4>
                                            <span className="text-xs text-gray-500">({groupLines.length} article{groupLines.length > 1 ? 's' : ''})</span>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                    <table className="w-full text-sm" style={{minWidth:'1100px'}}>
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="px-2 py-2 text-left" style={{width:'30px'}}></th>
                                                <th className="px-2 py-2 text-left text-xs font-bold text-gray-600 uppercase">Code</th>
                                                <th className="px-2 py-2 text-left text-xs font-bold text-gray-600 uppercase">Description</th>
                                                <th className="px-2 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'60px'}}>Qté</th>
                                                <th className="px-2 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'60px'}}>Reçu</th>
                                                <th className="px-2 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'45px'}}>UM</th>
                                                <th className="px-2 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'75px'}}>Coûtant</th>
                                                <th className="px-2 py-2 text-left text-xs font-bold text-gray-600 uppercase" style={{width:'110px'}}>Fournisseur</th>
                                                <th className="px-2 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'90px'}}>Date réc.</th>
                                                <th className="px-2 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'100px'}}>Statut</th>
                                                <th className="px-2 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'80px'}}>PO#</th>
                                                <th className="px-2 py-2 text-left text-xs font-bold text-gray-600 uppercase" style={{width:'80px'}}>Source</th>
                                                <th className="px-2 py-2 text-center text-xs font-bold text-gray-600 uppercase" style={{width:'120px'}}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {groupLines.map(cmd => {
                                                const qtyCmd = parseFloat(cmd.qtyCommande) || 0;
                                                const qtyRec = parseFloat(cmd.qtyRecue) || 0;
                                                const backorderQty = Math.max(0, qtyCmd - qtyRec);
                                                return (
                                                <tr key={cmd.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                                                    <td className="px-2 py-2">
                                                        <input
                                                            type="checkbox"
                                                            checked={!!cmd._checked}
                                                            onChange={e => setCommandes(prev => prev.map(c => c.id === cmd.id ? { ...c, _checked: e.target.checked } : c))}
                                                            className="h-4 w-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                                                        />
                                                    </td>
                                                    <td className="px-2 py-2 font-semibold text-blue-600">{cmd.stockNo || '—'}</td>
                                                    <td className="px-2 py-2">
                                                        <div>{cmd.description || '—'}</div>
                                                        {cmd.noteSuivi && <div className="text-xs text-cyan-600 mt-0.5" title={cmd.noteSuivi}><i className="fa fa-clipboard-list mr-1"></i>{cmd.noteSuivi.length > 40 ? cmd.noteSuivi.slice(0,40) + '…' : cmd.noteSuivi}</div>}
                                                    </td>
                                                    <td className="px-2 py-2 text-center font-bold">{qtyCmd}</td>
                                                    <td className="px-2 py-2 text-center">
                                                        {qtyRec > 0 ? (
                                                            <span className={`font-bold ${qtyRec >= qtyCmd ? 'text-green-600' : 'text-orange-600'}`}>{qtyRec}</span>
                                                        ) : <span className="text-gray-300">—</span>}
                                                    </td>
                                                    <td className="px-2 py-2 text-center">{cmd.um || 'PC'}</td>
                                                    <td className="px-2 py-2 text-right text-xs">{cmd.coutant ? '$' + parseFloat(cmd.coutant).toFixed(2) : '—'}</td>
                                                    <td className="px-2 py-2">
                                                        <select
                                                            value={cmd.fournisseur || ''}
                                                            onChange={e => setCommandes(prev => prev.map(c => c.id === cmd.id ? { ...c, fournisseur: e.target.value } : c))}
                                                            className="w-full p-1 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-blue-400"
                                                            disabled={cmd.statut === 'Commandé' || cmd.statut === 'Reçu' || cmd.statut === 'Backorder'}
                                                        >
                                                            <option value="">— Assigner —</option>
                                                            {fournisseurs.map(f => <option key={f.name} value={f.name}>{f.name}</option>)}
                                                        </select>
                                                    </td>
                                                    <td className="px-2 py-2 text-center text-xs">
                                                        {cmd.dateReceptionPrevue ? (
                                                            <span className={new Date(cmd.dateReceptionPrevue) < new Date() && cmd.statut !== 'Reçu' ? 'text-red-600 font-bold' : 'text-gray-600'}>{cmd.dateReceptionPrevue}</span>
                                                        ) : '—'}
                                                    </td>
                                                    <td className="px-2 py-2 text-center">
                                                        <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                                                            cmd.statut === 'En attente' ? 'bg-yellow-100 text-yellow-700' :
                                                            cmd.statut === 'Envoyé au bureau' ? 'bg-orange-100 text-orange-700' :
                                                            cmd.statut === 'Commandé' ? 'bg-blue-100 text-blue-700' :
                                                            cmd.statut === 'Backorder' ? 'bg-amber-100 text-amber-700' :
                                                            cmd.statut === 'Reçu' ? 'bg-green-100 text-green-700' :
                                                            'bg-gray-100 text-gray-500'
                                                        }`}>{cmd.statut}{cmd.statut === 'Backorder' ? ` (${backorderQty})` : ''}</span>
                                                    </td>
                                                    <td className="px-2 py-2 text-center text-xs font-mono font-bold text-gray-600">{cmd.poNumber || '—'}</td>
                                                    <td className="px-2 py-2 text-xs text-gray-500">
                                                        {cmd.sourceInvoice && <span className="font-semibold">#{cmd.sourceInvoice}</span>}
                                                        {cmd.sourceClient && <span className="block text-gray-400">{cmd.sourceClient}</span>}
                                                    </td>
                                                    <td className="px-2 py-2 text-center">
                                                        {(cmd.statut === 'Commandé' || cmd.statut === 'Backorder') && (
                                                            <div className="flex gap-1 items-center justify-center">
                                                                <input
                                                                    type="number"
                                                                    min="1"
                                                                    max={backorderQty}
                                                                    defaultValue={backorderQty}
                                                                    className="w-14 p-0.5 border border-gray-300 rounded text-xs text-center"
                                                                    id={`recv-qty-${cmd.id}`}
                                                                />
                                                                <button
                                                                    onClick={() => {
                                                                        const input = document.getElementById(`recv-qty-${cmd.id}`);
                                                                        const qty = input ? parseFloat(input.value) : backorderQty;
                                                                        handleReceiveCommande(cmd.id, qty);
                                                                    }}
                                                                    className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded hover:bg-green-600 transition"
                                                                    title="Confirmer la réception"
                                                                >
                                                                    <i className="fa fa-check"></i>
                                                                </button>
                                                            </div>
                                                        )}
                                                        {cmd.statut === 'Reçu' && (
                                                            <span className="text-green-600 text-xs font-bold"><i className="fa fa-check-double mr-1"></i>Complet</span>
                                                        )}
                                                    </td>
                                                </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    )}
                </div>
                );
            })()}
        </div>
    );
};

const InventoryView = ({ t, inventory, setInventory }) => {
    const fileInputRef = useRef(null);
    const [editInventoryItem, setEditInventoryItem] = useState(null);
    
    const handleImportExcel = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const data = new Uint8Array(evt.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(firstSheet);
                
                // Trouver le prochain numéro de stock (commence à 10000)
                let nextNum = 10000;
                const existingNums = inventory
                    .map(item => parseInt(item.stockNo, 10))
                    .filter(n => !isNaN(n));
                if (existingNums.length > 0) {
                    const maxNum = Math.max(...existingNums);
                    nextNum = maxNum < 10000 ? 10000 : maxNum + 1;
                }
                
                const newItems = jsonData.map((row, idx) => {
                    // Fonction pour normaliser les clés (sans accents, minuscules)
                    const normalize = (str) => str.toLowerCase()
                        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                        .replace(/[^a-z0-9]/g, '');
                    
                    // Fonction pour trouver une valeur par nom de colonne (insensible accents/majuscules)
                    // Priorité au premier nom de la liste qui correspond
                    const getCol = (...names) => {
                        const normalizedNames = names.map(n => normalize(n));
                        // Chercher dans l'ordre de priorité des noms recherchés
                        for (const searchName of normalizedNames) {
                            for (const key of Object.keys(row)) {
                                const normalizedKey = normalize(key);
                                // Match exact ou partiel (le terme recherché est dans le nom de colonne)
                                if (normalizedKey === searchName || normalizedKey.includes(searchName)) {
                                    return row[key];
                                }
                            }
                        }
                        return '';
                    };
                    
                    const categorieVal = String(getCol('Catégorie', 'Categorie', 'Category', 'Cat') || '');
                    let stateVal = String(getCol('État', 'Etat', 'State', 'Statut') || '');
                    
                    // Mappages catégorie-état
                    if (categorieVal === '109') stateVal = 'Brut baker';
                    else if (categorieVal === '108') stateVal = 'Brut sec';
                    else if (categorieVal === '10') stateVal = 'Brut vert';
                    else if (categorieVal === '23') stateVal = 'REV. Exterieur';
                    else if (categorieVal === '106') stateVal = 'Ébénisterie';
                    else if (categorieVal === '18') stateVal = 'Plancher';
                    
                    // Si état est BRUT, changer en Brut Sec avec catégorie 15
                    let finalCategorie = categorieVal;
                    if (stateVal.toUpperCase() === 'BRUT') {
                        finalCategorie = '15';
                        stateVal = 'Brut Sec';
                    }
                    
                    const productCode = getCol('Code Produit', 'Code de produit', 'ProductCode', 'CodeProduit', 'Code');
                    
                    // Ne pas importer si pas de code de produit
                    if (!productCode || productCode.toString().trim() === '') {
                        return null;
                    }
                    
                    const description = getCol('Description', 'Desc', 'Détail', 'Detail');
                    let woodValue = getCol('Couleur');
                    
                    // Si la description contient "CEDRE D'ALASKA", utiliser comme essence
                    if (description && description.toUpperCase().includes("CEDRE D'ALASKA")) {
                        woodValue = "CEDRE D'ALASKA";
                    }
                    // Si la description contient "CEDRE BLANC", utiliser comme essence
                    else if (description && description.toUpperCase().includes("CEDRE BLANC")) {
                        woodValue = "CEDRE BLANC";
                    }
                    // Si la description contient "CEDRE ROUGE", utiliser comme essence
                    else if (description && description.toUpperCase().includes("CEDRE ROUGE")) {
                        woodValue = "CEDRE ROUGE";
                    }
                    // Si la description contient "PIN BLANC", utiliser comme essence
                    else if (description && description.toUpperCase().includes("PIN BLANC")) {
                        woodValue = "PIN BLANC";
                    }
                    // Si la description contient "PIN JAUNE", utiliser comme essence
                    else if (description && description.toUpperCase().includes("PIN JAUNE")) {
                        woodValue = "PIN JAUNE";
                    }
                    // Si la description contient "PEUPLIER JAUNE", utiliser comme essence
                    else if (description && description.toUpperCase().includes("PEUPLIER JAUNE")) {
                        woodValue = "PEUPLIER JAUNE";
                    }
                    // Si la description contient "PEUPLIER" (sans JAUNE), utiliser comme essence
                    else if (description && description.toUpperCase().includes("PEUPLIER")) {
                        woodValue = "PEUPLIER";
                    }
                    // Si la description contient "PIN ROUGE", utiliser comme essence
                    else if (description && description.toUpperCase().includes("PIN ROUGE")) {
                        woodValue = "PIN ROUGE";
                    }
                    // Si la description contient "MELEZE", utiliser comme essence
                    else if (description && description.toUpperCase().includes("MELEZE")) {
                        woodValue = "MELEZE";
                    }
                    // Si la description contient "EPINETTE", utiliser comme essence
                    else if (description && description.toUpperCase().includes("EPINETTE")) {
                        woodValue = "EPINETTE";
                    }
                    
                    return {
                        stockNo: null, // Sera assigné après filtrage
                        productCode: productCode,
                        wood: woodValue,
                        description: description,
                        grade: getCol('Style', 'Grade', 'Qualité', 'Quality'),
                        unite: getCol('CODE U. M. SURFAGEST', 'Unité', 'Unite', 'U.M.', 'UM', 'Unité de mesure', 'Code u. m. surfagest', 'surfagest', 'Unit', 'UOM'),
                        largeur: getCol('Largeur', 'Width', 'Larg', 'W'),
                        epaisseur: getCol('Épaisseur', 'Epaisseur', 'Thickness', 'Epais'),
                        qty: parseInt(getCol('Quantité', 'Quantite', 'Qty', 'Quantity', 'Qte') || 0, 10),
                        location: getCol('Emplacement', 'Location', 'Lieu', 'Position'),
                        state: stateVal,
                        categorie: finalCategorie,
                        dateAdded: new Date().toISOString()
                    };
                }).filter(item => item !== null);
                
                if (newItems.length === 0) {
                    DevExpress.ui.notify('Aucun produit valide trouvé (colonne Code de produit vide)', 'warning', 3000);
                    return;
                }
                
                setInventory(prev => {
                    let updatedCount = 0;
                    let addedCount = 0;
                    
                    // Créer une copie de l'inventaire existant
                    const updatedInventory = [...prev];
                    
                    // Trouver le prochain numéro de stock disponible
                    let currentNextNum = nextNum;
                    
                    newItems.forEach(newItem => {
                        // Chercher si le produit existe déjà (par productCode)
                        const existingIndex = updatedInventory.findIndex(
                            existing => existing.productCode === newItem.productCode
                        );
                        
                        if (existingIndex !== -1) {
                            // Mettre à jour seulement les colonnes descriptives/catalogue
                            // Préserver: stockNo, dateAdded, qty, location (données opérationnelles)
                            const existingItem = updatedInventory[existingIndex];
                            updatedInventory[existingIndex] = {
                                ...existingItem,
                                // Colonnes mises à jour depuis l'import Excel
                                description: newItem.description || existingItem.description,
                                wood: newItem.wood || existingItem.wood,
                                grade: newItem.grade || existingItem.grade,
                                unite: newItem.unite || existingItem.unite,
                                largeur: newItem.largeur || existingItem.largeur,
                                epaisseur: newItem.epaisseur || existingItem.epaisseur,
                                categorie: newItem.categorie || existingItem.categorie,
                                state: newItem.state || existingItem.state,
                                // Colonnes préservées (données opérationnelles)
                                stockNo: existingItem.stockNo,
                                dateAdded: existingItem.dateAdded,
                                qty: existingItem.qty,
                                location: existingItem.location,
                                dateUpdated: new Date().toISOString()
                            };
                            updatedCount++;
                        } else {
                            // Ajouter comme nouveau produit
                            updatedInventory.push({
                                ...newItem,
                                stockNo: String(currentNextNum++)
                            });
                            addedCount++;
                        }
                    });
                    
                    localStorage.setItem('inventory', JSON.stringify(updatedInventory));
                    return updatedInventory;
                });
                
                const skipped = jsonData.length - newItems.length;
                let msg = `Import terminé: ${newItems.length} produit(s) traité(s)`;
                if (skipped > 0) {
                    msg += ` (${skipped} lignes ignorées - code produit manquant)`;
                }
                DevExpress.ui.notify(msg, 'success', 4000);
            } catch (err) {
                console.error('Erreur import Excel:', err);
                DevExpress.ui.notify('Erreur lors de l\'import du fichier Excel', 'error', 3000);
            }
        };
        reader.readAsArrayBuffer(file);
        e.target.value = '';
    };
    
    useEffect(() => {
        const gridContainer = document.getElementById('inventoryGrid');
        if (!gridContainer) return;

        const dataGrid = new DevExpress.ui.dxDataGrid(gridContainer, {
            dataSource: inventory,
            keyExpr: 'stockNo',
            showBorders: true,
            height: 'calc(100vh - 250px)',
            scrolling: { mode: 'standard', useNative: true },
            filterRow: { visible: true },
            searchPanel: { visible: true, width: 240, placeholder: 'Rechercher...' },
            headerFilter: { visible: true },
            editing: {
                mode: 'cell',
                allowUpdating: true,
                allowDeleting: true,
                allowAdding: true,
                useIcons: true,
                texts: {
                    confirmDeleteMessage: 'Êtes-vous sûr de vouloir supprimer ce stock?',
                    saveRowChanges: t.save,
                    cancelRowChanges: t.cancel,
                    deleteRow: t.deleteStock,
                    editRow: t.editStock,
                    addRow: t.addStock
                }
            },
            paging: { pageSize: 50 },
            pager: {
                visible: true,
                showPageSizeSelector: true,
                allowedPageSizes: [10, 20, 50, 100],
                showInfo: true
            },
            export: {
                enabled: true,
                fileName: 'inventaire'
            },
            columns: [
                { 
                    dataField: 'stockNo', 
                    caption: t.colStockNo, 
                    width: 120,
                    validationRules: [{ type: 'required', message: 'Champ obligatoire' }],
                    cellTemplate: (container, options) => {
                        const link = document.createElement('a');
                        link.textContent = options.value || '';
                        link.href = '#';
                        link.style.color = '#51aff7';
                        link.style.fontWeight = '700';
                        link.style.textDecoration = 'none';
                        link.style.cursor = 'pointer';
                        link.addEventListener('mouseenter', () => { link.style.textDecoration = 'underline'; });
                        link.addEventListener('mouseleave', () => { link.style.textDecoration = 'none'; });
                        link.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditInventoryItem({ ...options.data });
                        });
                        container.append(link);
                    }
                },
                { 
                    dataField: 'productCode', 
                    caption: t.colProductCode, 
                    width: 150,
                    cellTemplate: (container, options) => {
                        if (!options.value) { container.textContent = ''; return; }
                        const link = document.createElement('a');
                        link.textContent = options.value;
                        link.href = '#';
                        link.style.color = '#6366f1';
                        link.style.fontWeight = '600';
                        link.style.textDecoration = 'none';
                        link.style.cursor = 'pointer';
                        link.addEventListener('mouseenter', () => { link.style.textDecoration = 'underline'; });
                        link.addEventListener('mouseleave', () => { link.style.textDecoration = 'none'; });
                        link.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditInventoryItem({ ...options.data });
                        });
                        container.append(link);
                    }
                },
                { 
                    dataField: 'description', 
                    caption: 'Description', 
                    width: 400
                },
                { 
                    dataField: 'wood', 
                    caption: t.colProduct, 
                    width: 150,
                    validationRules: [{ type: 'required', message: 'Champ obligatoire' }]
                },
                { 
                    dataField: 'grade', 
                    caption: t.colGrade, 
                    width: 120
                },
                { 
                    dataField: 'unite', 
                    caption: 'Unité', 
                    width: 70
                },
                { 
                    dataField: 'largeur', 
                    caption: 'Largeur', 
                    width: 80
                },
                { 
                    dataField: 'epaisseur', 
                    caption: 'Épaisseur', 
                    width: 90
                },
                { 
                    dataField: 'qty', 
                    caption: 'Qté en main', 
                    width: 100, 
                    dataType: 'number', 
                    format: '#,##0',
                    validationRules: [{ type: 'required', message: 'Champ obligatoire' }]
                },
                { 
                    dataField: 'qtyReserve', 
                    caption: 'Réservé', 
                    width: 100, 
                    dataType: 'number', 
                    format: '#,##0',
                    allowEditing: false,
                    calculateCellValue: (rowData) => rowData.qtyReserve || 0
                },
                {
                    dataField: 'qtyComm',
                    caption: 'Qté Comm',
                    width: 100,
                    dataType: 'number',
                    format: '#,##0',
                    allowEditing: false,
                    calculateCellValue: (rowData) => rowData.qtyComm || 0,
                    cellTemplate: (container, options) => {
                        const val = options.value || 0;
                        const el = document.createElement('span');
                        el.textContent = val;
                        if (val > 0) {
                            el.style.color = '#d97706';
                            el.style.fontWeight = 'bold';
                        }
                        container.append(el);
                    }
                },
                { 
                    dataField: 'qtyDisp', 
                    caption: 'Qté disp', 
                    width: 100, 
                    dataType: 'number', 
                    format: '#,##0',
                    allowEditing: false,
                    calculateCellValue: (rowData) => Math.max(0, (rowData.qty || 0) + (rowData.qtyComm || 0) - (rowData.qtyReserve || 0))
                },
                { 
                    dataField: 'location', 
                    caption: t.colLocation, 
                    width: 120
                },
                { 
                    dataField: 'categorie', 
                    caption: 'Catégorie', 
                    width: 100
                },
                {
                    dataField: 'prixDetail',
                    caption: 'Prix détail',
                    width: 110,
                    dataType: 'number',
                    format: { type: 'currency', precision: 2 },
                    calculateCellValue: (rowData) => {
                        if (rowData.prixDetail != null) return rowData.prixDetail;
                        const cat = String(rowData.categorie || '');
                        if (cat === '15' || cat === '10' || cat === '109') return 5.25;
                        return null;
                    }
                },
                { 
                    dataField: 'state', 
                    caption: t.colState, 
                    width: 200
                }
            ],
            onRowInserted: (e) => {
                const newItem = {
                    ...e.data,
                    dateAdded: new Date().toISOString()
                };
                setInventory(prev => {
                    const updated = [...prev, newItem];
                    localStorage.setItem('inventory', JSON.stringify(updated));
                    return updated;
                });
                DevExpress.ui.notify(t.stockAdded, 'success', 2000);
            },
            onRowUpdated: (e) => {
                setInventory(prev => {
                    const updated = prev.map(item => 
                        item.stockNo === e.key ? { ...item, ...e.data } : item
                    );
                    localStorage.setItem('inventory', JSON.stringify(updated));
                    return updated;
                });
                DevExpress.ui.notify(t.stockUpdated, 'success', 2000);
            },
            onRowRemoved: (e) => {
                setInventory(prev => {
                    const updated = prev.filter(item => item.stockNo !== e.key);
                    localStorage.setItem('inventory', JSON.stringify(updated));
                    return updated;
                });
                DevExpress.ui.notify(t.stockDeleted, 'success', 2000);
            },
            summary: {
                totalItems: [
                    {
                        column: 'qty',
                        summaryType: 'sum',
                        valueFormat: '#,##0',
                        displayFormat: 'Total: {0} pc'
                    }
                ]
            }
        });

        return () => {
            try {
                dataGrid.dispose();
            } catch (e) {}
        };
    }, [inventory, t]);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{t.inventoryTitle}</h2>
                <div className="flex gap-2">
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept=".xlsx,.xls"
                        onChange={handleImportExcel}
                        className="hidden"
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2"
                    >
                        <i className="fas fa-file-import"></i>
                        Importer Excel
                    </button>
                    <button
                        onClick={() => {
                            DevExpress.ui.dialog.confirm({
                                title: 'Vider l\'inventaire',
                                messageHtml: '<div class="text-center"><i class="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i><p class="text-lg">Êtes-vous sûr de vouloir supprimer <strong>tous les produits</strong> de l\'inventaire?</p><p class="text-gray-500 mt-2">Cette action est irréversible.</p></div>'
                            }).then((confirmed) => {
                                if (confirmed) {
                                    setInventory([]);
                                    localStorage.setItem('inventory', JSON.stringify([]));
                                    DevExpress.ui.notify('Inventaire vidé avec succès', 'success', 2000);
                                }
                            });
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center gap-2"
                    >
                        <i className="fas fa-trash"></i>
                        Vider l'inventaire
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <div id="inventoryGrid"></div>
            </div>

            {/* Editable Inventory Detail Modal */}
            {editInventoryItem && (() => {
                const item = editInventoryItem;
                const qtyDisp = Math.max(0, (item.qty || 0) + (item.qtyComm || 0) - (item.qtyReserve || 0));
                const handleInventoryFormKeyDown = (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const focusable = Array.from(form.querySelectorAll('input:not([disabled]), textarea:not([disabled]), select:not([disabled])'));
                        const idx = focusable.indexOf(document.activeElement);
                        if (idx >= 0 && idx < focusable.length - 1) {
                            focusable[idx + 1].focus();
                            if (focusable[idx + 1].select) focusable[idx + 1].select();
                        }
                    }
                };
                const Field = ({ label, field, type, disabled, placeholder }) => (
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{label}</label>
                        <input
                            type={type || 'text'}
                            value={item[field] ?? ''}
                            onChange={e => setEditInventoryItem(prev => ({ ...prev, [field]: type === 'number' ? (e.target.value === '' ? '' : parseFloat(e.target.value)) : e.target.value }))}
                            disabled={disabled}
                            className={`w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#51aff7] focus:border-[#51aff7] focus:outline-none transition ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                            placeholder={placeholder || ''}
                        />
                    </div>
                );
                return (
                    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center print:hidden" onClick={(e) => { if (e.target === e.currentTarget) setEditInventoryItem(null); }}>
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl m-4 overflow-hidden max-h-[90vh] flex flex-col" onKeyDown={handleInventoryFormKeyDown}>
                            {/* Header */}
                            <div className="p-5 border-b bg-gradient-to-r from-[#51aff7] to-blue-500 flex justify-between items-center rounded-t-2xl">
                                <h2 className="text-lg font-bold text-white">
                                    <i className="fa-solid fa-box-open mr-2"></i>
                                    Fiche inventaire — {item.stockNo}
                                </h2>
                                <button onClick={() => setEditInventoryItem(null)} className="text-white/80 hover:text-white text-xl transition">
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                            {/* Body */}
                            <div className="p-6 space-y-5 overflow-y-auto flex-1">
                                {/* Identifiers row */}
                                <div className="grid grid-cols-3 gap-4">
                                    <Field label="No de stock" field="stockNo" disabled={true} />
                                    <Field label="Code produit" field="productCode" placeholder="Ex: BF-025-CL" />
                                    <Field label="Catégorie" field="categorie" placeholder="Catégorie" />
                                </div>
                                {/* Description */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Description</label>
                                    <textarea
                                        value={item.description || ''}
                                        onChange={e => setEditInventoryItem(prev => ({ ...prev, description: e.target.value }))}
                                        rows={2}
                                        className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#51aff7] focus:border-[#51aff7] focus:outline-none resize-vertical"
                                        placeholder="Description du produit..."
                                    />
                                </div>
                                {/* Product specs */}
                                <div className="grid grid-cols-2 gap-4">
                                    <Field label="Essence / Produit" field="wood" placeholder="Ex: Merisier" />
                                    <Field label="Grade" field="grade" placeholder="Ex: Select" />
                                    <Field label="Épaisseur" field="epaisseur" placeholder='Ex: 3/4"' />
                                    <Field label="Largeur" field="largeur" placeholder='Ex: 5"' />
                                    <Field label="Unité" field="unite" placeholder="Ex: PC, PMP, PI" />
                                    <Field label="État" field="state" placeholder="Ex: Brut, fini" />
                                </div>
                                {/* Location & supplier */}
                                <div className="grid grid-cols-2 gap-4">
                                    <Field label="Emplacement" field="location" placeholder="Ex: Entrepôt A, Rack 3" />
                                    <Field label="Fournisseur" field="fournisseur" placeholder="Nom du fournisseur" />
                                </div>
                                {/* Pricing */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Prix détail ($)</label>
                                        <input
                                            type="text"
                                            inputMode="decimal"
                                            value={item.prixDetail ?? ''}
                                            onChange={e => {
                                                const val = e.target.value.replace(/[^0-9.]/g, '');
                                                const parts = val.split('.');
                                                const formatted = parts[0] + (parts.length > 1 ? '.' + parts[1].slice(0, 2) : '');
                                                setEditInventoryItem(prev => ({ ...prev, prixDetail: formatted }));
                                            }}
                                            onBlur={e => {
                                                const num = parseFloat(e.target.value);
                                                if (!isNaN(num)) setEditInventoryItem(prev => ({ ...prev, prixDetail: num.toFixed(2) }));
                                            }}
                                            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#51aff7] focus:border-[#51aff7] focus:outline-none transition text-right font-mono"
                                            placeholder="00000.00"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Coûtant ($)</label>
                                        <input
                                            type="text"
                                            inputMode="decimal"
                                            value={item.coutant ?? ''}
                                            onChange={e => {
                                                const val = e.target.value.replace(/[^0-9.]/g, '');
                                                const parts = val.split('.');
                                                const formatted = parts[0] + (parts.length > 1 ? '.' + parts[1].slice(0, 2) : '');
                                                setEditInventoryItem(prev => ({ ...prev, coutant: formatted }));
                                            }}
                                            onBlur={e => {
                                                const num = parseFloat(e.target.value);
                                                if (!isNaN(num)) setEditInventoryItem(prev => ({ ...prev, coutant: num.toFixed(2) }));
                                            }}
                                            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#51aff7] focus:border-[#51aff7] focus:outline-none transition text-right font-mono"
                                            placeholder="00000.00"
                                        />
                                    </div>
                                </div>
                                {/* Quantities */}
                                <div className="border-t pt-4">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Quantités</label>
                                    <div className="grid grid-cols-4 gap-3">
                                        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                            <span className="text-xs text-gray-500 uppercase block mb-1 text-center">En main</span>
                                            <input
                                                type="number"
                                                value={item.qty ?? 0}
                                                onChange={e => setEditInventoryItem(prev => ({ ...prev, qty: e.target.value === '' ? 0 : parseFloat(e.target.value) }))}
                                                className="w-full text-center text-xl font-black text-green-700 bg-transparent border-0 border-b-2 border-green-300 focus:border-green-500 focus:ring-0 focus:outline-none p-0"
                                            />
                                        </div>
                                        <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                                            <span className="text-xs text-gray-500 uppercase block mb-1 text-center">Réservé</span>
                                            <input
                                                type="number"
                                                value={item.qtyReserve ?? 0}
                                                onChange={e => setEditInventoryItem(prev => ({ ...prev, qtyReserve: e.target.value === '' ? 0 : parseFloat(e.target.value) }))}
                                                className="w-full text-center text-xl font-black text-orange-700 bg-transparent border-0 border-b-2 border-orange-300 focus:border-orange-500 focus:ring-0 focus:outline-none p-0"
                                            />
                                        </div>
                                        <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                                            <span className="text-xs text-gray-500 uppercase block mb-1 text-center">En commande</span>
                                            <input
                                                type="number"
                                                value={item.qtyComm ?? 0}
                                                onChange={e => setEditInventoryItem(prev => ({ ...prev, qtyComm: e.target.value === '' ? 0 : parseFloat(e.target.value) }))}
                                                className="w-full text-center text-xl font-black text-amber-700 bg-transparent border-0 border-b-2 border-amber-300 focus:border-amber-500 focus:ring-0 focus:outline-none p-0"
                                            />
                                        </div>
                                        <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                                            <span className="text-xs text-gray-500 uppercase block mb-1">Disponible</span>
                                            <span className="text-xl font-black text-blue-700">{qtyDisp}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Footer */}
                            <div className="p-4 border-t bg-gray-50 flex justify-between items-center rounded-b-2xl">
                                <button
                                    onClick={() => {
                                        if (window.confirm('Supprimer cet article de l\u0027inventaire?')) {
                                            setInventory(prev => {
                                                const updated = prev.filter(x => x.stockNo !== item.stockNo);
                                                localStorage.setItem('inventory', JSON.stringify(updated));
                                                return updated;
                                            });
                                            setEditInventoryItem(null);
                                            DevExpress.ui.notify('Article supprimé', 'warning', 2000);
                                        }
                                    }}
                                    className="px-4 py-2 text-red-600 hover:bg-red-50 font-bold rounded-lg transition text-sm"
                                >
                                    <i className="fa fa-trash mr-1"></i>Supprimer
                                </button>
                                <div className="flex gap-3">
                                    <button onClick={() => setEditInventoryItem(null)} className="px-5 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition">
                                        Annuler
                                    </button>
                                    <button
                                        onClick={() => {
                                            const { _checked, qtyReserve, qtyComm, ...saveData } = editInventoryItem;
                                            setInventory(prev => {
                                                const updated = prev.map(x => x.stockNo === saveData.stockNo ? { ...x, ...saveData, dateUpdated: new Date().toISOString() } : x);
                                                localStorage.setItem('inventory', JSON.stringify(updated));
                                                return updated;
                                            });
                                            setEditInventoryItem(null);
                                            DevExpress.ui.notify('Fiche inventaire mise à jour', 'success', 2000);
                                        }}
                                        className="px-5 py-2.5 bg-[#51aff7] text-white font-bold rounded-lg hover:bg-blue-600 transition"
                                    >
                                        <i className="fa fa-save mr-2"></i>Sauvegarder
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </div>
    );
};

const SettingsView = ({ t, appMode, setAppMode, stationConfig, setStationConfig, customProcesses = [], setCustomProcesses, woodTreatments = [], setWoodTreatments, inventoryStates = [], setInventoryStates, processCodes = {}, setProcessCodes, processParameters = {}, setProcessParameters }) => {
    const [newProcessName, setNewProcessName] = useState('');
    const [newWoodTreatmentName, setNewWoodTreatmentName] = useState('');
    const [newInventoryStateName, setNewInventoryStateName] = useState('');
    const [selectedProcessForParams, setSelectedProcessForParams] = useState('');
    const [newParamName, setNewParamName] = useState('');
    const [newParamLabel, setNewParamLabel] = useState('');

    // Code creation tables state
    const defaultCodeTables = {
        type: [
            { code: 'BE', label: 'ÉBÉNISTERIE' },
            { code: 'BF', label: 'BOIS FRANC' },
            { code: 'CO', label: 'COMPTOIR' },
            { code: 'ES', label: 'ESCALIER' },
            { code: 'MO', label: 'MOULURE' },
            { code: 'PL', label: 'PLANCHER' },
            { code: 'PO', label: 'POUTRE' },
            { code: 'PR', label: 'PREPARATION' },
            { code: 'RE', label: 'REVÊTEMENT EXTÉRIEUR' },
            { code: 'RI', label: 'REVÊTEMENT INTÉRIEUR' }
        ],
        essence: [
            { code: 'EP', label: 'ÉPINETTE' },
            { code: 'CR', label: 'CÈDRE ROUGE' },
            { code: 'FR', label: 'FRÊNE' },
            { code: 'PB', label: 'PIN BLANC' },
            { code: 'PR', label: 'PIN ROUGE' },
            { code: 'PP', label: 'PEUPLIER' },
            { code: 'ME', label: 'MÉLÈZE' },
            { code: 'BC', label: 'BCFIR' },
            { code: 'PU', label: 'PRUCHE' }
        ],
        grade: [
            { code: '00', label: 'N/A' },
            { code: 'N', label: 'GRADE NOUEUX' },
            { code: 'B', label: 'GRADE B' },
            { code: 'S', label: 'SELECT' },
            { code: 'D', label: 'SELECT DECLASSÉ' }
        ],
        dimensions: [
            { code: '0106', label: '01X06' },
            { code: '5406', label: '5/4X06' },
            { code: '6406', label: '6/4X06' },
            { code: '0206', label: '02X06' },
            { code: '0606', label: '06X06' },
            { code: '1218', label: '12X18' },
            { code: '2404', label: '1/2X04' },
            { code: '3406', label: '3/4X06' }
        ],
        modele: [
            { code: 'CLIN', label: 'CLIN' },
            { code: 'CLAS', label: 'CLASSIQUE' },
            { code: 'CONT', label: 'CONTEMPORAIN' },
            { code: 'GOCA', label: 'GORGE CARRÉE' },
            { code: 'GORO', label: 'GORGE RONDE' },
            { code: 'LOCA', label: 'LOGCABIN' },
            { code: 'P200', label: 'PATRON 20' },
            { code: '1719', label: 'PATRON 17/19' },
            { code: 'P240', label: 'PATRON 24' },
            { code: 'MOAS', label: 'MODÈLE ASSORTI' }
        ],
        attache: [
            { code: '0', label: 'N/A OU À CLOUS' },
            { code: 'C', label: 'À CRAMPES' },
            { code: 'E', label: 'EMBOUVETÉ 4 FACES' },
            { code: 'M', label: 'MAXI-CLIP' }
        ],
        etat: [
            { code: '0', label: 'N/A' },
            { code: 'A', label: 'AIR DRY (SÉCHÉ À L\'AIR)' },
            { code: 'G', label: 'VERT' },
            { code: 'K', label: 'SEC (KILN DRIED)' },
            { code: 'T', label: 'TORRÉFIÉ' }
        ]
    };

    const [codeTables, setCodeTables] = useState(() => {
        const saved = localStorage.getItem('codeTables');
        return saved ? JSON.parse(saved) : defaultCodeTables;
    });

    const [newCodeInputs, setNewCodeInputs] = useState({
        type: { code: '', label: '' },
        essence: { code: '', label: '' },
        grade: { code: '', label: '' },
        dimensions: { code: '', label: '' },
        modele: { code: '', label: '' },
        attache: { code: '', label: '' },
        etat: { code: '', label: '' }
    });

    useEffect(() => {
        localStorage.setItem('codeTables', JSON.stringify(codeTables));
    }, [codeTables]);

    const [editingCode, setEditingCode] = useState(null); // { category, index, code, label }

    const addCodeItem = (category) => {
        const input = newCodeInputs[category];
        if (input.code.trim() && input.label.trim()) {
            setCodeTables(prev => ({
                ...prev,
                [category]: [...prev[category], { code: input.code.trim().toUpperCase(), label: input.label.trim().toUpperCase() }]
            }));
            setNewCodeInputs(prev => ({
                ...prev,
                [category]: { code: '', label: '' }
            }));
        }
    };

    const removeCodeItem = (category, index) => {
        setCodeTables(prev => ({
            ...prev,
            [category]: prev[category].filter((_, i) => i !== index)
        }));
    };

    const startEditCodeItem = (category, index, item) => {
        setEditingCode({ category, index, code: item.code, label: item.label });
    };

    const saveEditCodeItem = () => {
        if (editingCode && editingCode.code.trim() && editingCode.label.trim()) {
            setCodeTables(prev => ({
                ...prev,
                [editingCode.category]: prev[editingCode.category].map((item, i) => 
                    i === editingCode.index 
                        ? { code: editingCode.code.trim().toUpperCase(), label: editingCode.label.trim().toUpperCase() }
                        : item
                )
            }));
            setEditingCode(null);
        }
    };

    const cancelEditCodeItem = () => {
        setEditingCode(null);
    };

    const updateNewCodeInput = (category, field, value) => {
        setNewCodeInputs(prev => ({
            ...prev,
            [category]: { ...prev[category], [field]: value }
        }));
    };

    // Hidden standard processes state
    const [hiddenProcesses, setHiddenProcesses] = useState(() => {
        const saved = localStorage.getItem('hiddenProcesses');
        return saved ? JSON.parse(saved) : [];
    });

    // Process order state
    const [processOrder, setProcessOrder] = useState(() => {
        const saved = localStorage.getItem('processOrder');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('hiddenProcesses', JSON.stringify(hiddenProcesses));
    }, [hiddenProcesses]);

    useEffect(() => {
        localStorage.setItem('processOrder', JSON.stringify(processOrder));
    }, [processOrder]);

    const handleConfigChange = (process, station) => {
        setStationConfig(prev => ({
            ...prev,
            [process]: station
        }));
    };

    const handleCodeChange = (processId, code) => {
        // Limiter à 3 caractères alphanumériques
        const sanitized = code.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3);
        setProcessCodes(prev => ({
            ...prev,
            [processId]: sanitized
        }));
    };

    const handleAddProcess = () => {
        if (!newProcessName.trim()) return;
        const newId = `procCustom_${Date.now()}`;
        const newProcess = { id: newId, label: newProcessName, order: customProcesses.length };
        setCustomProcesses([...customProcesses, newProcess]);
        setNewProcessName('');
    };

    const moveProcessUp = (index) => {
        if (index <= 0) return;
        const newOrder = [...processOrder];
        [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
        setProcessOrder(newOrder);
    };

    const moveProcessDown = (index) => {
        if (index >= processes.length - 1) return;
        const newOrder = [...processOrder];
        [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
        setProcessOrder(newOrder);
    };

    const handleAddWoodTreatment = () => {
        if (!newWoodTreatmentName.trim()) return;
        const newId = `woodTreat_${Date.now()}`;
        const newTreatment = { id: newId, label: newWoodTreatmentName };
        setWoodTreatments([...woodTreatments, newTreatment]);
        setNewWoodTreatmentName('');
    };
    
    // Restore hidden processes if created again via custom or specifically requested
    const restoreProcess = (id) => {
        setHiddenProcesses(hiddenProcesses.filter(h => h !== id));
    };

    const allProcessesList = [
        { id: 'procBaker', label: t.procBaker },
        { id: 'procMoulding', label: t.procMoulding },
        { id: 'procSanding1', label: t.procSanding1 },
        { id: 'procSanding2', label: t.procSanding2 },
        { id: 'procStaining', label: t.procStaining },
        { id: 'procBrushing', label: t.procBrushing },
        { id: 'procPolishing', label: t.procPolishing },
        { id: 'procOiling', label: t.procOiling },
        { id: 'procPainting', label: t.procPainting },
        ...customProcesses
    ].filter(p => !hiddenProcesses.includes(p.id));

    // Sync processOrder with current processes
    React.useEffect(() => {
        const currentIds = allProcessesList.map(p => p.id);
        const savedIds = processOrder.filter(id => currentIds.includes(id));
        const newIds = currentIds.filter(id => !processOrder.includes(id));
        if (savedIds.length !== currentIds.length || newIds.length > 0) {
            setProcessOrder([...savedIds, ...newIds]);
        }
    }, [allProcessesList.length, customProcesses.length]);

    // Sort processes by saved order
    const processes = processOrder.length > 0 
        ? processOrder.map(id => allProcessesList.find(p => p.id === id)).filter(Boolean)
        : allProcessesList;

    const stations = [
        { id: '', label: '-- None --' },
        ...stationDefinitions.map(s => ({ id: s.id, label: t[s.labelKey] })),
        { id: 'subcontractor', label: t.subcontractor },
    ];

    // -- Exclusive Assignment Logic --
    const standardProcessIds = [
        'procBaker', 'procMoulding', 'procSanding1', 'procSanding2',
        'procStaining', 'procBrushing', 'procPolishing', 'procOiling', 'procPainting',
        ...customProcesses.map(p => p.id)
    ];
    const rawProcessIds = woodTreatments.map(wt => wt.id);

    const stationsAssignedToStandard = new Set();
    const stationsAssignedToRaw = new Set();

    Object.entries(stationConfig).forEach(([procId, stationId]) => {
        if (!stationId || stationId === 'subcontractor') return;
        
        if (standardProcessIds.includes(procId)) {
            stationsAssignedToStandard.add(stationId);
        } else if (rawProcessIds.includes(procId)) {
            stationsAssignedToRaw.add(stationId);
        }
    });

    const isStationAllowed = (stationId, targetGroup) => {
        if (!stationId || stationId === 'subcontractor') return true;
        
        if (targetGroup === 'standard') {
            return !stationsAssignedToRaw.has(stationId);
        } else { // raw
            return !stationsAssignedToStandard.has(stationId);
        }
    };

    return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.settings}</h2>
        
        <div className="space-y-8">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.settingsMode}</label>
                <p className="text-sm text-gray-500 mb-4">Select the operational role for this terminal.</p>
                <div className="space-y-3">
                    {[
                        { id: 'admin', label: t.modeAdmin, icon: 'fa-user-tie' },
                        ...stationDefinitions.map(s => {
                            const assigned = Object.keys(stationConfig || {})
                                .filter(k => stationConfig[k] === s.id)
                                .map(k => t[k])
                                .filter(Boolean); // Ensure valid translations only
                            
                            const label = assigned.length > 0 
                                ? `${t[s.labelKey]} (${assigned.join(', ')})` 
                                : t[s.labelKey];

                            return { id: s.id, label, icon: s.icon };
                        })
                    ].map(mode => (
                        <button
                            key={mode.id}
                            onClick={() => {
                                if (mode.id === 'admin') {
                                    setAppMode('admin');
                                } else {
                                    window.open(`?mode=${mode.id}`, '_blank');
                                }
                            }}
                            className={`w-full flex items-center p-4 rounded-lg border transition-all ${
                                appMode === mode.id 
                                ? 'border-[#51aff7] bg-[#51aff7]/10 text-[#51aff7] shadow-sm' 
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                                appMode === mode.id ? 'bg-[#51aff7] text-white' : 'bg-gray-100 text-gray-500'
                            }`}>
                                <i className={`fa-solid ${mode.icon}`}></i>
                            </div>
                            <span className="font-bold">{mode.label}</span>
                            {appMode === mode.id && <i className="fa-solid fa-check ml-auto"></i>}
                        </button>
                    ))}
                </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{t.autoAssign}</h3>
                <p className="text-sm text-gray-500 mb-6">{t.configDesc}</p>
                
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    {processes.map((proc, index) => {
                        const isCustom = customProcesses.some(cp => cp.id === proc.id);
                        return (
                            <div key={proc.id} className="grid grid-cols-12 gap-2 items-center">
                                <div className="col-span-1 flex flex-col gap-1">
                                    <button
                                        onClick={() => moveProcessUp(index)}
                                        disabled={index === 0}
                                        className="text-gray-500 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
                                        title="Monter"
                                    >
                                        <i className="fa-solid fa-chevron-up"></i>
                                    </button>
                                    <button
                                        onClick={() => moveProcessDown(index)}
                                        disabled={index === processes.length - 1}
                                        className="text-gray-500 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
                                        title="Descendre"
                                    >
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </button>
                                </div>
                                <div className="col-span-1 text-center">
                                    <span className="inline-block w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">{index + 1}</span>
                                </div>
                                <span className="col-span-3 font-medium text-gray-700">{proc.label}</span>
                                <input
                                    type="text"
                                    value={processCodes[proc.id] || ''}
                                    onChange={(e) => handleCodeChange(proc.id, e.target.value)}
                                    placeholder="ABC"
                                    maxLength="3"
                                    className="col-span-1 p-2 border border-gray-300 rounded-lg text-sm text-center font-mono font-bold bg-white focus:ring-2 focus:ring-[#51aff7] focus:outline-none uppercase"
                                />
                                <div className="col-span-6 flex items-center gap-2">
                                    <select 
                                        value={stationConfig[proc.id] || ''}
                                        onChange={(e) => handleConfigChange(proc.id, e.target.value)}
                                        className="p-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-[#51aff7] focus:outline-none flex-1"
                                    >
                                        {stations.filter(st => isStationAllowed(st.id, 'standard')).map(st => (
                                            <option key={st.id} value={st.id}>{st.label}</option>
                                        ))}
                                    </select>
                                    <button 
                                        onClick={() => {
                                            if (isCustom) {
                                                setCustomProcesses(customProcesses.filter(p => p.id !== proc.id));
                                            } else {
                                                // Disable standard process by hiding it
                                                setHiddenProcesses([...hiddenProcesses, proc.id]);
                                                handleConfigChange(proc.id, '');
                                            }
                                        }}
                                        className="text-red-500 hover:text-red-700 p-2"
                                        title={isCustom ? "Supprimer le procédé" : "Masquer l'assignation"}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    {/* Add Custom Process */}
                    <div className="pt-4 mt-4 border-t border-gray-200 grid grid-cols-2 gap-4 items-center">
                         <input 
                            type="text"
                            value={newProcessName}
                            onChange={(e) => setNewProcessName(e.target.value)}
                            placeholder="Nouveau Procédé (ex: Coupe)"
                            className="p-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-[#51aff7] focus:outline-none"
                         />
                         <button 
                            onClick={handleAddProcess}
                            disabled={!newProcessName.trim()}
                            className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 disabled:opacity-50"
                         >
                            <i className="fa-solid fa-plus mr-2"></i> Ajouter
                         </button>
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                     <button className="text-sm text-[#51aff7] font-bold hover:text-blue-700">
                        <i className="fa-solid fa-save mr-2"></i>
                        {t.saveConfig}
                     </button>
                </div>
            </div>

            {/* États d'inventaire */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">États d'inventaire</label>
                <p className="text-sm text-gray-500 mb-4">Configurez les états possibles pour les produits en inventaire. Cochez "Qté obligatoire" pour les états qui nécessitent une quantité d'inventaire.</p>
                <div className="space-y-2">
                    {inventoryStates.map((state, index) => (
                        <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                            <i className="fa-solid fa-tag text-gray-400"></i>
                            <span className="flex-1 font-medium">{typeof state === 'string' ? state : state.name}</span>
                            <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1 rounded border">
                                <input
                                    type="checkbox"
                                    checked={typeof state === 'object' ? state.qtyRequired : false}
                                    onChange={(e) => {
                                        const newStates = [...inventoryStates];
                                        if (typeof newStates[index] === 'string') {
                                            newStates[index] = { name: newStates[index], qtyRequired: e.target.checked };
                                        } else {
                                            newStates[index] = { ...newStates[index], qtyRequired: e.target.checked };
                                        }
                                        setInventoryStates(newStates);
                                    }}
                                />
                                <span className="text-sm">Qté obligatoire</span>
                            </label>
                            <button
                                onClick={() => {
                                    setInventoryStates(inventoryStates.filter((_, i) => i !== index));
                                }}
                                className="text-red-500 hover:text-red-700 p-2"
                                title="Supprimer l'état"
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    ))}

                    {/* Ajouter un nouvel état */}
                    <div className="pt-4 mt-4 border-t border-gray-200 grid grid-cols-2 gap-4 items-center">
                        <input
                            type="text"
                            value={newInventoryStateName}
                            onChange={(e) => setNewInventoryStateName(e.target.value)}
                            placeholder="Nouvel état (ex: Brut non transformé sec)"
                            className="p-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-[#51aff7] focus:outline-none"
                        />
                        <button
                            onClick={() => {
                                if (newInventoryStateName.trim()) {
                                    setInventoryStates([...inventoryStates, { name: newInventoryStateName.trim(), qtyRequired: false }]);
                                    setNewInventoryStateName('');
                                }
                            }}
                            disabled={!newInventoryStateName.trim()}
                            className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 disabled:opacity-50"
                        >
                            <i className="fa-solid fa-plus mr-2"></i> Ajouter
                        </button>
                    </div>
                </div>
            </div>

            {/* Création de code */}
            <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Création de code</h3>
                <p className="text-sm text-gray-500 mb-6">Référence des codes pour la création de codes produits (modifiable) - Double-cliquez sur une ligne pour éditer</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[
                        { key: 'type', title: 'TYPE', headerBg: 'bg-blue-600', codeBg: 'text-blue-600', btnBg: 'bg-blue-500 hover:bg-blue-600' },
                        { key: 'essence', title: 'ESSENCE', headerBg: 'bg-green-600', codeBg: 'text-green-600', btnBg: 'bg-green-500 hover:bg-green-600' },
                        { key: 'grade', title: 'GRADE', headerBg: 'bg-purple-600', codeBg: 'text-purple-600', btnBg: 'bg-purple-500 hover:bg-purple-600' },
                        { key: 'dimensions', title: 'DIMENSIONS', headerBg: 'bg-orange-600', codeBg: 'text-orange-600', btnBg: 'bg-orange-500 hover:bg-orange-600' },
                        { key: 'modele', title: 'MODÈLE', headerBg: 'bg-teal-600', codeBg: 'text-teal-600', btnBg: 'bg-teal-500 hover:bg-teal-600' },
                        { key: 'attache', title: 'ATTACHE', headerBg: 'bg-pink-600', codeBg: 'text-pink-600', btnBg: 'bg-pink-500 hover:bg-pink-600' },
                        { key: 'etat', title: 'ÉTAT', headerBg: 'bg-red-600', codeBg: 'text-red-600', btnBg: 'bg-red-500 hover:bg-red-600' }
                    ].map(({ key, title, headerBg, codeBg, btnBg }) => (
                        <div key={key} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className={`${headerBg} text-white px-4 py-3 font-bold`}>
                                {title}
                            </div>
                            <div className="max-h-80 overflow-y-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-100 sticky top-0">
                                        <tr>
                                            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b w-28">Code</th>
                                            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">Description</th>
                                            <th className="w-20 border-b text-center text-gray-600 text-xs font-semibold">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(codeTables[key] || []).map((item, idx) => (
                                            editingCode && editingCode.category === key && editingCode.index === idx ? (
                                                <tr key={idx} className="bg-yellow-50 border-b border-gray-100">
                                                    <td className="px-2 py-1">
                                                        <input 
                                                            type="text" 
                                                            value={editingCode.code}
                                                            onChange={(e) => setEditingCode({...editingCode, code: e.target.value})}
                                                            className="w-full px-2 py-1 text-sm border border-blue-400 rounded font-mono font-bold"
                                                            autoFocus
                                                        />
                                                    </td>
                                                    <td className="px-2 py-1">
                                                        <input 
                                                            type="text" 
                                                            value={editingCode.label}
                                                            onChange={(e) => setEditingCode({...editingCode, label: e.target.value})}
                                                            className="w-full px-2 py-1 text-sm border border-blue-400 rounded"
                                                        />
                                                    </td>
                                                    <td className="px-2 py-1 text-center">
                                                        <button onClick={saveEditCodeItem} className="text-green-600 hover:text-green-800 mx-1" title="Sauvegarder">
                                                            <i className="fa-solid fa-check"></i>
                                                        </button>
                                                        <button onClick={cancelEditCodeItem} className="text-gray-500 hover:text-gray-700 mx-1" title="Annuler">
                                                            <i className="fa-solid fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ) : (
                                                <tr 
                                                    key={idx} 
                                                    className="hover:bg-blue-50 group border-b border-gray-100 cursor-pointer"
                                                    onDoubleClick={() => startEditCodeItem(key, idx, item)}
                                                >
                                                    <td className={`px-4 py-2 font-mono font-bold ${codeBg}`}>{item.code}</td>
                                                    <td className="px-4 py-2 text-gray-700">{item.label}</td>
                                                    <td className="px-2 text-center whitespace-nowrap">
                                                        <button 
                                                            onClick={() => startEditCodeItem(key, idx, item)} 
                                                            className="text-gray-300 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mx-1"
                                                            title="Modifier"
                                                        >
                                                            <i className="fa-solid fa-pen"></i>
                                                        </button>
                                                        <button 
                                                            onClick={() => removeCodeItem(key, idx)} 
                                                            className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity mx-1"
                                                            title="Supprimer"
                                                        >
                                                            <i className="fa-solid fa-trash-can"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 border-t flex gap-2 items-center">
                                <input 
                                    type="text" 
                                    placeholder="Code" 
                                    value={newCodeInputs[key]?.code || ''} 
                                    onChange={(e) => updateNewCodeInput(key, 'code', e.target.value)} 
                                    className="w-24 px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 focus:outline-none font-mono"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Description" 
                                    value={newCodeInputs[key]?.label || ''} 
                                    onChange={(e) => updateNewCodeInput(key, 'label', e.target.value)} 
                                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 focus:outline-none"
                                />
                                <button 
                                    onClick={() => addCodeItem(key)} 
                                    className={`px-4 py-2 ${btnBg} text-white rounded font-bold transition-colors`}
                                    title="Ajouter"
                                >
                                    <i className="fa-solid fa-plus mr-1"></i> Ajouter
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};

// Fonction pour générer automatiquement les notes de suivi basées sur les logs
const generateNotesFromLogs = (logs, existingNotes = '') => {
    if (!logs || logs.length === 0) return existingNotes;
    
    const noteLines = existingNotes ? [existingNotes, '\n--- HISTORIQUE DES ACTIONS ---'] : ['--- HISTORIQUE DES ACTIONS ---'];
    
    logs.forEach((log, index) => {
        const timestamp = new Date(log.timestamp).toLocaleString('fr-CA', { 
            year: 'numeric', month: '2-digit', day: '2-digit', 
            hour: '2-digit', minute: '2-digit' 
        });
        
        let actionText = '';
        switch (log.action) {
            case 'START':
                actionText = `[${timestamp}] ${log.user} - DÉMARRAGE de la production`;
                break;
            case 'PAUSE':
                actionText = `[${timestamp}] ${log.user} - PAUSE (${log.qty || 0} PL produits)`;
                break;
            case 'RESUME':
                actionText = `[${timestamp}] ${log.user} - REPRISE de la production`;
                break;
            case 'COMPLETE':
                actionText = `[${timestamp}] ${log.user} - TERMINÉ (${log.qty || 0} PL produits)`;
                break;
            case 'PALLET_CLOSED':
                actionText = `[${timestamp}] ${log.user} - PALETTE FERMÉE (${log.qty || 0} PL)`;
                break;
            case 'WOOD_RECLASSIFIED':
                actionText = `[${timestamp}] ${log.user} - RECLASSEMENT: ${log.qty || 0} PL → ${log.newGrade || 'N/A'}`;
                break;
            case 'STOCK_USED':
                actionText = `[${timestamp}] ${log.user} - STOCK UTILISÉ: ${log.description || ''} (${log.qty || 0} PC)`;
                break;
            case 'ISSUE_REPORTED':
                actionText = `[${timestamp}] ${log.user} - PROBLÈME SIGNALÉ: ${log.description || ''}`;
                break;
            default:
                if (log.action) {
                    actionText = `[${timestamp}] ${log.user} - ${log.action}`;
                }
        }
        
        if (actionText) {
            noteLines.push(actionText);
        }
    });
    
    return noteLines.join('\n');
};

const WorkerStationView = ({ t, stationId, productionData, updateJobStatus, stationConfig, inventory, deductFromInventory, addToInventory, adjustInventory, generateProductionTag, generatePalletLabel, generateProductCode, customProcesses = [], woodTreatments = [] }) => {
    // Helper to resolve process display name
    const getProcessName = (processId) => {
        if (!processId) return 'N/A';
        // Check translations first (standard processes)
        if (t[processId]) return t[processId];
        // Check custom processes
        const custom = customProcesses.find(p => p.id === processId);
        if (custom) return custom.label;
        // Check wood treatments
        const treatment = woodTreatments.find(p => p.id === processId);
        if (treatment) return treatment.label;
        // Fallback: return the ID itself
        return processId;
    };

    // Refs for DevExtreme widgets
    const formRef = useRef(null);
    const queueListRef = useRef(null);
    const historyGridRef = useRef(null);

    // Instances Refs
    const historyGridInstance = useRef(null);
    const formInstance = useRef(null);

    // Handlers Ref for Stale Closures
    const handlersRef = useRef(null);
    const activeJobRef = useRef(null);

    const [currentTime, setCurrentTime] = useState(new Date());
    const [elapsed, setElapsed] = useState(0);
    const [jobParams, setJobParams] = useState({
        productCode: '', pqtUsed: '', humidity: '', coverage: '', thickness: '', width: '', sandThickness: '', jobNotes: ''
    });

    // Auth & Modal State
    const [authRequired, setAuthRequired] = useState(false);
    const [pin, setPin] = useState('');
    const [loginError, setLoginError] = useState('');
    const [pendingAction, setPendingAction] = useState(null);

    // Filtres pour la file d'attente
    const [queueFilters, setQueueFilters] = useState({
        date: '',
        txn: '',
        client: '',
        wood: '',
        qty: ''
    });

    // Modal Ajout de matériel
    const [showMaterialModal, setShowMaterialModal] = useState(false);
    const [materialSearch, setMaterialSearch] = useState('');
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [materialQty, setMaterialQty] = useState('');
    const [isNonInventory, setIsNonInventory] = useState(false);
    const [nonInventoryName, setNonInventoryName] = useState('');
    const [nonInventoryQty, setNonInventoryQty] = useState('');
    const [productNameSuggestions, setProductNameSuggestions] = useState([]);

    const employees = React.useMemo(() => {
        const saved = localStorage.getItem('employees');
        if (saved) {
            const empList = JSON.parse(saved);
            // Convertir le tableau en objet { nip: name }
            const empObj = {};
            empList.forEach(emp => {
                empObj[emp.nip] = emp.name;
            });
            return empObj;
        }
        return {}; // Aucun employé par défaut
    }, []);

    // --- Data Preparation (Memoized) ---
    const queue = React.useMemo(() => {
        let filtered = productionData.filter(item => {
            if (item.status === 'completed') return false;
            if (item.station === stationId) return true;
            const assignedStation = stationConfig[item.process];
            if (!item.station && assignedStation === stationId) return true;
            return false;
        }).sort((a,b) => a.id - b.id);

        // Appliquer les filtres
        if (queueFilters.date) {
            filtered = filtered.filter(item => 
                (item.date || '').toLowerCase().includes(queueFilters.date.toLowerCase())
            );
        }
        if (queueFilters.txn) {
            filtered = filtered.filter(item => 
                (item.txn || '').toLowerCase().includes(queueFilters.txn.toLowerCase())
            );
        }
        if (queueFilters.client) {
            filtered = filtered.filter(item => 
                (item.client || '').toLowerCase().includes(queueFilters.client.toLowerCase())
            );
        }
        if (queueFilters.wood) {
            filtered = filtered.filter(item => 
                (item.wood || '').toLowerCase().includes(queueFilters.wood.toLowerCase()) ||
                (item.grade || '').toLowerCase().includes(queueFilters.wood.toLowerCase())
            );
        }
        if (queueFilters.qty) {
            filtered = filtered.filter(item => 
                (item.qty || '').toString().includes(queueFilters.qty)
            );
        }

        return filtered;
    }, [productionData, stationId, stationConfig, queueFilters]);

    const activeJob = React.useMemo(() => {
        return queue.find(item => item.status === 'running' || item.status === 'paused');
    }, [queue]);

    // Keep activeJobRef updated for async ops
    useEffect(() => { activeJobRef.current = activeJob; }, [activeJob]);
    
    // --- Timer Logic ---
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (!activeJob) {
            setElapsed(0);
            return;
        }

        const calculateTime = () => {
            const logs = activeJob.logs || [];
            let total = 0;
            let lastStartTime = null;
            
            // Sort logs chronologically
            const sortedLogs = [...logs].sort((a,b) => a.timestamp - b.timestamp);
            
            for (const log of sortedLogs) {
                const action = log.action ? log.action.toUpperCase() : '';
                if (action === 'START' || action === 'RESUME') {
                    lastStartTime = log.timestamp;
                } else if ((action === 'PAUSE' || action === 'COMPLETE') && lastStartTime) {
                    total += (log.timestamp - lastStartTime);
                    lastStartTime = null;
                }
            }
            
            if (activeJob.status === 'running' && lastStartTime) {
                total += (Date.now() - lastStartTime);
            }
            
            return Math.floor(total / 1000);
        };

        // Initial set
        setElapsed(calculateTime());
        
        let interval;
        if (activeJob.status === 'running') {
            interval = setInterval(() => {
                setElapsed(calculateTime());
            }, 1000);
        }

        return () => { if(interval) clearInterval(interval); };
    }, [activeJob?.id, activeJob?.status, activeJob?.logs]); 
    // Dependency on specific props avoids deep obj comparison issues

    // --- Sync Job Params ---
    useEffect(() => {
        if (activeJob) {
            // Calculer #PQT automatiquement depuis les logs PALLET_CLOSED
            const logs = activeJob.logs || [];
            const palletClosedCount = logs.filter(log => log.action === 'PALLET_CLOSED').length;
            
            const newParams = {
                productCode: activeJob.productCode || '',
                pqtUsed: palletClosedCount > 0 ? String(palletClosedCount) : (activeJob.pqtUsed || ''),
                humidity: activeJob.humidity || '',
                coverage: activeJob.coverage || '',
                thickness: activeJob.thickness || '',
                width: activeJob.width || '',
                sandThickness: activeJob.sandThickness || '',
                jobNotes: activeJob.notes || ''
            };
            setJobParams(newParams);
            if(formInstance.current) {
                formInstance.current.option("formData", newParams);
            }
        }
    }, [activeJob?.id, activeJob?.width, activeJob?.logs?.length]); // Sync when ID, width or logs change

    // --- Debounced Auto-Save for Job Params ---
    useEffect(() => {
        if (!activeJob) return;
        
        const saveTimer = setTimeout(() => {
            const currentJob = activeJobRef.current;
            if (!currentJob) return;

            // Detect changes to avoid unnecessary writes
            const hasChanges = 
                (currentJob.productCode || '') !== jobParams.productCode ||
                (currentJob.pqtUsed || '') !== jobParams.pqtUsed ||
                (currentJob.humidity || '') !== jobParams.humidity ||
                (currentJob.coverage || '') !== jobParams.coverage ||
                (currentJob.thickness || '') !== jobParams.thickness ||
                (currentJob.width || '') !== jobParams.width ||
                (currentJob.sandThickness || '') !== jobParams.sandThickness ||
                (currentJob.notes || '') !== jobParams.jobNotes;

            if (hasChanges) {
                const { updateJobStatus } = handlersRef.current;
                updateJobStatus(
                    currentJob.id,
                    currentJob.status,
                    currentJob.producedQty,
                    jobParams.jobNotes,
                    null, // No log entry for field edits
                    { ...jobParams } // Updated fields
                );
            }
        }, 800); // 800ms debounce

        return () => clearTimeout(saveTimer);
    }, [jobParams]);

    // --- Auth Logic (Restored) ---
    const handlePinInput = (num) => {
        if (pin.length < 4) setPin(prev => prev + num);
    };

    useEffect(() => {
        if (pin.length === 4) {
            const authUser = employees[pin];
            if (authUser) {
                setLoginError('');
                setTimeout(() => {
                    setAuthRequired(false);
                    setPin('');
                    if (pendingAction) {
                        pendingAction(authUser);
                        setPendingAction(null);
                    }
                }, 100);
            } else {
                setLoginError('NIP Invalide');
                const timer = setTimeout(() => {
                     setPin('');
                     setLoginError('');
                }, 500);
                return () => clearTimeout(timer);
            }
        }
    }, [pin, pendingAction]);

    const requireAuth = (callback) => {
        setPendingAction(() => callback);
        setAuthRequired(true);
    };

    // Fonction pour démarrer un job avec validation de largeur
    const handleStartJob = (jobData) => {
        // Chercher la largeur dans width, ou dans stockDetails[0].largeur, ou dans l'inventaire
        let width = parseFloat(jobData.width) || 0;
        let thickness = parseFloat(jobData.thickness) || 0;
        
        // Fallback 1: chercher dans les stockDetails si présents
        if (width === 0 && jobData.stockDetails && jobData.stockDetails.length > 0) {
            width = parseFloat(jobData.stockDetails[0].largeur) || 0;
        }
        if (thickness === 0 && jobData.stockDetails && jobData.stockDetails.length > 0) {
            thickness = parseFloat(jobData.stockDetails[0].epaisseur) || 0;
        }
        
        // Fallback 2: chercher dans l'inventaire par numéro de stock
        if (width === 0 && jobData.stockNo && inventory && inventory.length > 0) {
            // stockNo peut contenir plusieurs numéros séparés par des virgules
            const firstStockNo = jobData.stockNo.split(',')[0].trim();
            const invItem = inventory.find(inv => inv.stockNo === firstStockNo);
            if (invItem) {
                width = parseFloat(invItem.largeur) || 0;
                if (thickness === 0) thickness = parseFloat(invItem.epaisseur) || 0;
            }
        }
        
        if (width === 0) {
            DevExpress.ui.dialog.custom({
                title: "Informations requises",
                messageHtml: `<div style="margin: 20px 0;">
                    <p style="margin-bottom: 12px; color: #dc2626; font-weight: bold;">Veuillez confirmer les dimensions du produit avant de démarrer.</p>
                    <p style="margin-bottom: 12px; color: #666;">Client: <strong>${jobData.client || 'N/A'}</strong></p>
                    <p style="margin-bottom: 12px; color: #666;">Produit: <strong>${jobData.wood || 'N/A'}</strong></p>
                    <label style="display: block; margin-bottom: 8px; font-weight: bold;">Largeur (pouces):</label>
                    <input type="number" id="widthInputStart" value="" min="0" step="0.01"
                           style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px; margin-bottom: 16px;" 
                           placeholder="Entrez la largeur en pouces" />
                    <label style="display: block; margin-bottom: 8px; font-weight: bold;">Épaisseur (pouces):</label>
                    <input type="number" id="thicknessInputStart" value="${thickness > 0 ? thickness : ''}" min="0" step="0.01"
                           style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px;" 
                           placeholder="Entrez l'épaisseur en pouces (optionnel)" />
                </div>`,
                buttons: [
                    {
                        text: "Annuler",
                        onClick: () => false
                    },
                    {
                        text: "Démarrer",
                        onClick: () => {
                            const inputVal = document.getElementById('widthInputStart').value;
                            const widthValue = parseFloat(inputVal) || 0;
                            const thicknessVal = document.getElementById('thicknessInputStart').value;
                            const thicknessValue = parseFloat(thicknessVal) || 0;
                            
                            if (widthValue <= 0) {
                                alert("Veuillez entrer une largeur valide.");
                                return false;
                            }
                            
                            // Démarrer le job avec la largeur et l'épaisseur
                            requireAuth((u) => {
                                const startLog = { user: u, action: 'START', qty: 0, timestamp: Date.now() };
                                const updatedNotes = generateNotesFromLogs([startLog], jobData.notes || '');
                                const extras = { station: stationId, width: widthValue, logs: [startLog] };
                                if (thicknessValue > 0) extras.thickness = thicknessValue;
                                updateJobStatus(jobData.id, 'running', 0, updatedNotes, startLog, extras);
                            });
                            
                            return true;
                        }
                    }
                ]
            }).show();
        } else {
            // Largeur déjà présente, démarrer normalement avec width/thickness
            requireAuth((u) => {
                const startLog = { user: u, action: 'START', qty: 0, timestamp: Date.now() };
                const updatedNotes = generateNotesFromLogs([startLog], jobData.notes || '');
                const extras = { station: stationId, logs: [startLog] };
                if (width > 0) extras.width = width;
                if (thickness > 0) extras.thickness = thickness;
                updateJobStatus(jobData.id, 'running', 0, updatedNotes, startLog, extras);
            });
        }
    };

    // Update handlers ref
    handlersRef.current = { requireAuth, updateJobStatus, stationId, handleStartJob };

    const handleUndoLastQuantity = () => {
        if (!activeJob || !activeJob.logs || activeJob.logs.length === 0) {
            alert("Aucune action à annuler.");
            return;
        }
        
        // Trouver la dernière action avec une quantité (PAUSE ou COMPLETE)
        const logsWithQty = [...activeJob.logs].reverse().filter(log => 
            log.qty != null && log.qty > 0 && (log.action === 'PAUSE' || log.action === 'COMPLETE')
        );
        
        if (logsWithQty.length === 0) {
            alert("Aucune quantité à annuler.");
            return;
        }
        
        const lastQtyLog = logsWithQty[0];
        const qtyToRemove = parseFloat(lastQtyLog.qty) || 0;
        
        if (!confirm(`Annuler la dernière quantité ajoutée?\n\nAction: ${lastQtyLog.action}\nQuantité: ${qtyToRemove}\nUtilisateur: ${lastQtyLog.user}\nDate: ${new Date(lastQtyLog.timestamp).toLocaleString()}`)) {
            return;
        }
        
        // Retirer la quantité du total
        const newProducedQty = Math.max(0, (parseFloat(activeJob.producedQty) || 0) - qtyToRemove);
        
        // Retirer le log de la liste
        const newLogs = activeJob.logs.filter(log => log.timestamp !== lastQtyLog.timestamp);
        
        // Ajouter un log d'annulation
        const undoLog = {
            user: 'User',
            action: 'UNDO',
            qty: -qtyToRemove,
            timestamp: Date.now()
        };
        
        // Mettre à jour le job
        updateJobStatus(activeJob.id, activeJob.status, newProducedQty, activeJob.notes, undoLog, { logs: newLogs });
    };

    const handleActionClick = (action) => {
        if (!activeJob) return;
        
        if (action === 'pauseTimer') {
            requireAuth((userName) => {
                const pauseLog = {
                    user: userName, action: 'PAUSE', qty: 0, timestamp: Date.now()
                };
                const allLogs = [...(activeJob.logs || []), pauseLog];
                const updatedNotes = generateNotesFromLogs(allLogs, jobParams.jobNotes);
                updateJobStatus(activeJob.id, 'paused', activeJob.producedQty, updatedNotes, pauseLog, { ...jobParams });
            });
            return;
        }
        
        if (action === 'complete') {
            // Prompt for quantity before completing
            const currentQty = parseFloat(activeJob.producedQty) || 0;
            const width = parseFloat(activeJob.width) || 0;
            const thickness = parseFloat(activeJob.thickness) || 0;
            
            // Quantité planifiée (même valeur que la case bleue)
            const baseQty = parseFloat(activeJob.qty) || 0;
            const logs = activeJob.logs || [];
            const stockUsedFromLogs = logs
                .filter(log => log.action === 'STOCK_USED')
                .reduce((sum, log) => sum + (parseFloat(log.qty) || 0), 0);
            const totalPlanned = baseQty + stockUsedFromLogs;
            
            // Restante = planifiée - produite
            const remainingQty = Math.max(0, totalPlanned - currentQty);
            
            DevExpress.ui.dialog.custom({
                title: "Terminer le travail",
                messageHtml: '<div style="margin: 20px 0;">' +
                    '<p style="margin-bottom: 12px; color: #666;">Quantité déjà produite: <strong>' + currentQty.toFixed(2) + ' PL</strong></p>' +
                    '<p style="margin-bottom: 16px; color: #666;">Quantité restante: <strong>' + remainingQty.toFixed(2) + ' PL</strong></p>' +
                    
                    '<!-- Option Fermer Palette -->' +
                    '<div style="margin-bottom: 16px; padding: 12px; background-color: #f9fafb; border-radius: 6px; border: 2px solid #e5e7eb;">' +
                        '<label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">' +
                            '<input type="checkbox" id="closePalletCheckComplete" style="width: 18px; height: 18px; cursor: pointer;" />' +
                            '<span style="font-weight: bold; color: #1f2937; font-size: 15px;">Ajout. qté palette</span>' +
                        '</label>' +
                        '<div id="palletSectionComplete" style="display: none; margin-left: 26px; margin-top: 12px;">' +
                            '<p style="font-size: 13px; color: #059669; margin-bottom: 12px; font-style: italic;">' +
                                '<i class="fa-solid fa-info-circle"></i> La quantité de la palette sera ajoutée à la quantité produite totale' +
                            '</p>' +
                            '<label style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: bold; color: #4b5563;">Quantité de la palette (PL):</label>' +
                            '<input type="number" id="palletQtyInputComplete" value="' + remainingQty.toFixed(2) + '" min="0" step="0.01"' +
                                   'style="width: 100%; padding: 8px; border: 2px solid #3b82f6; border-radius: 4px; font-size: 16px; margin-bottom: 12px;" />' +
                            
                            // Champs largeur/épaisseur pour Baker
                            (activeJob.process === 'procBaker' ? 
                            '<div style="margin-bottom: 12px; padding: 10px; background-color: #fef3c7; border-radius: 6px; border: 1px solid #fbbf24;">' +
                                '<p style="font-size: 13px; font-weight: bold; color: #92400e; margin-bottom: 8px;"><i class="fa-solid fa-ruler-combined"></i> Confirmer les dimensions</p>' +
                                '<div style="display: flex; gap: 12px;">' +
                                    '<div style="flex: 1;">' +
                                        '<label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Largeur (po):</label>' +
                                        '<input type="number" id="palletWidthInputComplete" value="' + (width > 0 ? width : '') + '" min="0" step="0.01"' +
                                               'style="width: 100%; padding: 8px; border: 2px solid #f59e0b; border-radius: 4px; font-size: 16px;" placeholder="Largeur" />' +
                                    '</div>' +
                                    '<div style="flex: 1;">' +
                                        '<label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Épaisseur (po):</label>' +
                                        '<input type="number" id="palletThicknessInputComplete" value="' + (thickness > 0 ? thickness : '') + '" min="0" step="0.01"' +
                                               'style="width: 100%; padding: 8px; border: 2px solid #f59e0b; border-radius: 4px; font-size: 16px;" placeholder="Épaisseur" />' +
                                    '</div>' +
                                '</div>' +
                            '</div>' : '') +
                            
                        '</div>' +
                    '</div>' +
                    
                    '<!-- Option Reclasser Bois -->' +
                    '<div style="padding: 12px; background-color: #f9fafb; border-radius: 6px; border: 2px solid #e5e7eb;">' +
                        '<label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">' +
                            '<input type="checkbox" id="reclassifyCheckComplete" style="width: 18px; height: 18px; cursor: pointer;" />' +
                            '<span style="font-weight: bold; color: #1f2937; font-size: 15px;">Reclasser le bois</span>' +
                        '</label>' +
                        '<div id="reclassifySectionComplete" style="display: none; margin-left: 26px; margin-top: 12px;">' +
                            '<label style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: bold; color: #4b5563;">Nouveau classement:</label>' +
                            '<select id="gradeSelectComplete" style="width: 100%; padding: 8px; border: 2px solid #3b82f6; border-radius: 4px; font-size: 14px; margin-bottom: 12px;">' +
                                '<option value="">-- Sélectionner --</option>' +
                                '<option value="Select">Select</option>' +
                                '<option value="Noueux">Noueux</option>' +
                                '<option value="Grade B">Grade B</option>' +
                            '</select>' +
                            '<label style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: bold; color: #4b5563;">Quantité à reclasser (PL):</label>' +
                            '<input type="number" id="reclassifyQtyInputComplete" value="0" min="0" step="0.01"' +
                                   'style="width: 100%; padding: 8px; border: 2px solid #3b82f6; border-radius: 4px; font-size: 16px;" />' +
                        '</div>' +
                    '</div>' +
                    
                '</div>',
                buttons: [
                    {
                        text: "Annuler",
                        onClick: () => false
                    },
                    {
                        text: "Confirmer",
                        onClick: () => {
                            const closePallet = document.getElementById('closePalletCheckComplete').checked;
                            const palletQty = parseFloat(document.getElementById('palletQtyInputComplete').value) || 0;
                            
                            const reclassify = document.getElementById('reclassifyCheckComplete').checked;
                            const newGrade = document.getElementById('gradeSelectComplete').value;
                            const reclassifyQty = parseFloat(document.getElementById('reclassifyQtyInputComplete').value) || 0;
                            
                            // Lire les dimensions confirmées (Baker)
                            let confirmedWidthComplete = parseFloat(activeJob.width) || 0;
                            let confirmedThicknessComplete = parseFloat(activeJob.thickness) || 0;
                            if (closePallet && activeJob.process === 'procBaker') {
                                const wInput = document.getElementById('palletWidthInputComplete');
                                const tInput = document.getElementById('palletThicknessInputComplete');
                                if (wInput) confirmedWidthComplete = parseFloat(wInput.value) || 0;
                                if (tInput) confirmedThicknessComplete = parseFloat(tInput.value) || 0;
                                if (confirmedWidthComplete <= 0) {
                                    alert("Veuillez entrer une largeur valide.");
                                    return false;
                                }
                            }
                            
                            // Validation
                            if (closePallet && palletQty <= 0) {
                                alert("Veuillez entrer une quantité valide pour la palette à fermer.");
                                return false;
                            }
                            
                            if (reclassify && (!newGrade || reclassifyQty <= 0)) {
                                alert("Veuillez sélectionner un classement et entrer une quantité valide pour le reclassement.");
                                return false;
                            }
                            
                            // La quantité de la palette fermée s'ajoute à la quantité produite
                            const palletQtyToAdd = closePallet ? palletQty : 0;
                            const totalQty = currentQty + palletQtyToAdd;
                            
                            // Calculer la quantité planifiée actuelle incluant inventaire
                            const widthForCalc = confirmedWidthComplete > 0 ? confirmedWidthComplete : (parseFloat(activeJob.width) || 0);
                            const baseQty = parseFloat(activeJob.qty) || 0;
                            const logs = activeJob.logs || [];
                            const stockUsedFromLogs = logs
                                .filter(log => log.action === 'STOCK_USED')
                                .reduce((sum, log) => sum + (parseFloat(log.qty) || 0), 0);
                            const totalInventoryPC = baseQty + stockUsedFromLogs;
                            
                            // Convertir la quantité produite en PC
                            const producedPC = widthForCalc > 0 ? totalQty * (widthForCalc / 12) : totalQty;
                            
                            // Vérifier si on dépasse l'inventaire utilisé
                            if (producedPC > totalInventoryPC) {
                                alert('Impossible de terminer: La quantité produite (' + producedPC.toFixed(2) + ' PC) dépasse la quantité d\'inventaire utilisé (' + totalInventoryPC.toFixed(2) + ' PC).\n\nVeuillez ajouter plus de stock inventaire avant de continuer.');
                                return false;
                            }
                            
                            // Ajuster qty dans le tableau si la production dépasse la quantité d'origine
                            let newQty = baseQty;
                            if (producedPC > baseQty) {
                                newQty = producedPC;
                            }
                            
                            const totalPlannedPC = totalInventoryPC;
                            const plannedPL = widthForCalc > 0 ? totalPlannedPC / (widthForCalc / 12) : totalPlannedPC;
                            
                            // Demander l'authentification de l'employé
                            requireAuth((userName) => {
                                const completeLog = {
                                    user: userName, action: 'COMPLETE', qty: palletQtyToAdd, timestamp: Date.now()
                                };
                                
                                const extraLogs = [];
                                
                                // Ajouter le log de fermeture de palette si activé
                                if (closePallet) {
                                    const palletLogComplete = {
                                        user: userName,
                                        action: 'PALLET_CLOSED',
                                        qty: palletQty,
                                        timestamp: Date.now()
                                    };
                                    if (confirmedWidthComplete > 0) palletLogComplete.width = confirmedWidthComplete;
                                    if (confirmedThicknessComplete > 0) palletLogComplete.thickness = confirmedThicknessComplete;
                                    extraLogs.push(palletLogComplete);
                                }
                                
                                // Ajouter le log de reclassement si activé
                                if (reclassify) {
                                    extraLogs.push({
                                        user: userName,
                                        action: 'WOOD_RECLASSIFIED',
                                        qty: reclassifyQty,
                                        newGrade: newGrade,
                                        timestamp: Date.now()
                                    });
                                }
                                
                                // Générer les notes avec tous les logs
                                const allLogs = [...(activeJob.logs || []), completeLog, ...extraLogs];
                                const updatedNotes = generateNotesFromLogs(allLogs, jobParams.jobNotes);
                                
                                updateJobStatus(activeJob.id, 'completed', totalQty, updatedNotes, null, { 
                                    ...jobParams, 
                                    qty: newQty, 
                                    logs: allLogs,
                                    ...(confirmedWidthComplete > 0 ? { width: confirmedWidthComplete } : {}),
                                    ...(confirmedThicknessComplete > 0 ? { thickness: confirmedThicknessComplete } : {})
                                });
                                
                                // Demander si on veut générer un tag avec localisation
                                setTimeout(() => {
                                    DevExpress.ui.dialog.custom({
                                        title: "Production terminée",
                                        messageHtml: `<div style="margin: 20px 0;">
                                            <p style="margin-bottom: 12px; font-weight: bold;">Voulez-vous imprimer une étiquette 4x6 ?</p>
                                        </div>`,
                                        buttons: [
                                            {
                                                text: "Non, ne pas imprimer",
                                                onClick: () => true
                                            },
                                            {
                                                text: "Oui, imprimer",
                                                onClick: () => {
                                                    // Demander la localisation et le tally
                                                    DevExpress.ui.dialog.custom({
                                                        title: "Détails de l'étiquette",
                                                        messageHtml: `<div style="margin: 20px 0;">
                                                            <label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Liste de Tally:</label>
                                                            <textarea id="finishTallyInput" rows="3" 
                                                                style="width: 100%; padding: 6px; border: 1px solid #93c5fd; border-radius: 4px; font-size: 13px; font-family: monospace; resize: vertical; margin-bottom: 12px;" 
                                                                placeholder="Ex: 8x4, 10x6, 12x8..."></textarea>
                                                            <label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Localisation:</label>
                                                            <input type="text" id="storageLocation" placeholder="Ex: A-12, B-5, C-23..."
                                                                   style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px;" />
                                                        </div>`,
                                                        buttons: [
                                                            {
                                                                text: "Annuler",
                                                                onClick: () => false
                                                            },
                                                            {
                                                                text: "Imprimer",
                                                                onClick: () => {
                                                                    const location = document.getElementById('storageLocation').value.trim();
                                                                    const tally = document.getElementById('finishTallyInput').value.trim();
                                                                    generateProductionTag(activeJob, location, tally);
                                                                    return true;
                                                                }
                                                            }
                                                        ]
                                                    }).show();
                                                    return true;
                                                }
                                            }
                                        ]
                                    }).show();
                                }, 500);
                            });
                            
                            return true;
                        }
                    }
                ]
            }).show();
            // Attach event listeners after dialog renders
            setTimeout(() => {
                const closePalletCheckComplete = document.getElementById('closePalletCheckComplete');
                const reclassifyCheckComplete = document.getElementById('reclassifyCheckComplete');
                if (closePalletCheckComplete) {
                    closePalletCheckComplete.addEventListener('change', function(e) {
                        document.getElementById('palletSectionComplete').style.display = e.target.checked ? 'block' : 'none';
                    });
                }
                if (reclassifyCheckComplete) {
                    reclassifyCheckComplete.addEventListener('change', function(e) {
                        document.getElementById('reclassifySectionComplete').style.display = e.target.checked ? 'block' : 'none';
                    });
                }
            }, 100);
        }
        else if (action === 'pause') {
            // Demander le NIP d'abord, puis ouvrir la fenêtre d'options
            const currentQty = parseFloat(activeJob.producedQty) || 0;
            const width = parseFloat(activeJob.width) || 0;
            
            // Calculer les quantités accumulées non-imprimées depuis les logs
            const jobLogs = activeJob.logs || [];
            const unprintedPalletLogs = jobLogs.filter(log => log.action === 'PALLET_CLOSED' && !log.printed);
            const unprintedReclassLogs = jobLogs.filter(log => log.action === 'WOOD_RECLASSIFIED' && !log.printed);
            const accumulatedPalletQty = unprintedPalletLogs.reduce((sum, log) => sum + (parseFloat(log.qty) || 0), 0);
            const accumulatedReclassQty = unprintedReclassLogs.reduce((sum, log) => sum + (parseFloat(log.qty) || 0), 0);
            const accumulatedReclassGrade = unprintedReclassLogs.length > 0 ? unprintedReclassLogs[unprintedReclassLogs.length - 1].newGrade : '';
            
            requireAuth((userName) => {
                // Construire le résumé des quantités accumulées
                let accumulatedHtml = '';
                if (accumulatedPalletQty > 0 || accumulatedReclassQty > 0) {
                    accumulatedHtml = '<div style="margin-bottom: 16px; padding: 12px; background-color: #fef3c7; border-radius: 8px; border: 2px solid #f59e0b;">' +
                        '<p style="font-weight: bold; color: #92400e; margin-bottom: 8px; font-size: 14px;"><i class="fa-solid fa-box-open"></i> Quantités accumulées (non imprimées)</p>';
                    if (accumulatedPalletQty > 0) {
                        accumulatedHtml += '<div style="display: flex; justify-content: space-between; padding: 4px 0; font-size: 13px;">' +
                            '<span>Palettes fermées (' + unprintedPalletLogs.length + ' entrée' + (unprintedPalletLogs.length > 1 ? 's' : '') + '):</span>' +
                            '<strong style="color: #059669;">' + accumulatedPalletQty.toFixed(2) + ' PL</strong>' +
                        '</div>';
                    }
                    if (accumulatedReclassQty > 0) {
                        accumulatedHtml += '<div style="display: flex; justify-content: space-between; padding: 4px 0; font-size: 13px;">' +
                            '<span>Reclassement en ' + accumulatedReclassGrade + ' (' + unprintedReclassLogs.length + ' entrée' + (unprintedReclassLogs.length > 1 ? 's' : '') + '):</span>' +
                            '<strong style="color: #d97706;">' + accumulatedReclassQty.toFixed(2) + ' PL</strong>' +
                        '</div>';
                    }
                    accumulatedHtml += '</div>';
                }
                
                // Après authentification, ouvrir le dialogue d'options
                DevExpress.ui.dialog.custom({
                    title: "Ajouter de la production",
                    messageHtml: '<div style="margin: 10px 0; max-height: 60vh; overflow-y: auto; padding-right: 8px;">' +
                        '<p style="margin-bottom: 10px; color: #374151; font-size: 13px;">Employé: <strong>' + userName + '</strong></p>' +
                        '<p style="margin-bottom: 16px; color: #666;">Quantité déjà produite: <strong>' + currentQty.toFixed(2) + ' PL</strong></p>' +
                        
                        accumulatedHtml +
                        
                        '<!-- Option Fermer Palette -->' +
                        '<div style="margin-bottom: 16px; padding: 12px; background-color: #f9fafb; border-radius: 6px; border: 2px solid #e5e7eb;">' +
                            '<label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">' +
                                '<input type="checkbox" id="closePalletCheck" style="width: 18px; height: 18px; cursor: pointer;" />' +
                                '<span style="font-weight: bold; color: #1f2937; font-size: 15px;">Ajout. qté palette</span>' +
                            '</label>' +
                            '<div id="palletSection" style="display: none; margin-left: 26px; margin-top: 12px;">' +
                                '<p style="font-size: 13px; color: #059669; margin-bottom: 12px; font-style: italic;">' +
                                    '<i class="fa-solid fa-info-circle"></i> La quantité sera ajoutée au total produit' +
                                    (accumulatedPalletQty > 0 ? ' (accumulé: ' + accumulatedPalletQty.toFixed(2) + ' PL)' : '') +
                                '</p>' +
                                '<label style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: bold; color: #4b5563;">Quantité de la palette (PL):</label>' +
                                '<input type="number" id="palletQtyInput" value="0" min="0" step="0.01"' +
                                       'style="width: 100%; padding: 8px; border: 2px solid #3b82f6; border-radius: 4px; font-size: 16px; margin-bottom: 12px;" />' +
                                
                                // Champs largeur/épaisseur pour Baker
                                (activeJob.process === 'procBaker' ? 
                                '<div style="margin-bottom: 12px; padding: 10px; background-color: #fef3c7; border-radius: 6px; border: 1px solid #fbbf24;">' +
                                    '<p style="font-size: 13px; font-weight: bold; color: #92400e; margin-bottom: 8px;"><i class="fa-solid fa-ruler-combined"></i> Confirmer les dimensions</p>' +
                                    '<div style="display: flex; gap: 12px;">' +
                                        '<div style="flex: 1;">' +
                                            '<label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Largeur (po):</label>' +
                                            '<input type="number" id="palletWidthInput" value="' + (parseFloat(activeJob.width) || '') + '" min="0" step="0.01"' +
                                                   'style="width: 100%; padding: 8px; border: 2px solid #f59e0b; border-radius: 4px; font-size: 16px;" placeholder="Largeur" />' +
                                        '</div>' +
                                        '<div style="flex: 1;">' +
                                            '<label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Épaisseur (po):</label>' +
                                            '<input type="number" id="palletThicknessInput" value="' + (parseFloat(activeJob.thickness) || '') + '" min="0" step="0.01"' +
                                                   'style="width: 100%; padding: 8px; border: 2px solid #f59e0b; border-radius: 4px; font-size: 16px;" placeholder="Épaisseur" />' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' : '') +
                                
                                '<!-- Option inventaire + étiquette pour palette -->' +
                                '<div style="margin-top: 8px; padding: 10px; background-color: #eff6ff; border-radius: 6px; border: 1px solid #bfdbfe;">' +
                                    '<label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">' +
                                        '<input type="checkbox" id="palletPrintCheck" style="width: 16px; height: 16px; cursor: pointer;" />' +
                                        '<span style="font-weight: bold; color: #2563eb; font-size: 13px;"><i class="fa-solid fa-print"></i> Imprimer étiquette et ajouter à l\'inventaire' +
                                            (accumulatedPalletQty > 0 ? ' (total: accumulé + nouvelle qté)' : '') +
                                        '</span>' +
                                    '</label>' +
                                    '<div id="palletPrintSection" style="display: none; margin-left: 24px; margin-top: 8px;">' +
                                        (accumulatedPalletQty > 0 ? '<p style="font-size: 12px; color: #2563eb; margin-bottom: 8px; font-weight: bold;">Quantité totale pour l\'étiquette: accumulé (' + accumulatedPalletQty.toFixed(2) + ') + nouvelle qté</p>' : '') +
                                        '<label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Liste de Tally:</label>' +
                                        '<textarea id="palletTallyInput" rows="3" ' +
                                            'style="width: 100%; padding: 6px; border: 1px solid #93c5fd; border-radius: 4px; font-size: 13px; font-family: monospace; resize: vertical; margin-bottom: 8px;" ' +
                                            'placeholder="Ex: 8x4, 10x6, 12x8..."></textarea>' +
                                        '<label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Localisation:</label>' +
                                        '<input type="text" id="palletLocationInput" placeholder="Ex: A-12, B-5..."' +
                                               'style="width: 100%; padding: 6px; border: 1px solid #93c5fd; border-radius: 4px; font-size: 13px;" />' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        
                        '<!-- Option Reclasser Bois -->' +
                        '<div style="padding: 12px; background-color: #f9fafb; border-radius: 6px; border: 2px solid #e5e7eb;">' +
                            '<label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">' +
                                '<input type="checkbox" id="reclassifyCheck" style="width: 18px; height: 18px; cursor: pointer;" />' +
                                '<span style="font-weight: bold; color: #1f2937; font-size: 15px;">Reclasser le bois</span>' +
                            '</label>' +
                            '<div id="reclassifySection" style="display: none; margin-left: 26px; margin-top: 12px;">' +
                                '<label style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: bold; color: #4b5563;">Nouveau classement:</label>' +
                                '<select id="gradeSelect" style="width: 100%; padding: 8px; border: 2px solid #3b82f6; border-radius: 4px; font-size: 14px; margin-bottom: 12px;">' +
                                    '<option value="">-- Sélectionner --</option>' +
                                    '<option value="Select">Select</option>' +
                                    '<option value="Noueux">Noueux</option>' +
                                    '<option value="Grade B">Grade B</option>' +
                                '</select>' +
                                '<label style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: bold; color: #4b5563;">Quantité à reclasser (PL):</label>' +
                                '<input type="number" id="reclassifyQtyInput" value="0" min="0" step="0.01"' +
                                       'style="width: 100%; padding: 8px; border: 2px solid #3b82f6; border-radius: 4px; font-size: 16px; margin-bottom: 12px;" />' +
                                
                                '<!-- Option inventaire + étiquette pour reclassement -->' +
                                '<div style="margin-top: 8px; padding: 10px; background-color: #fef3c7; border-radius: 6px; border: 1px solid #fcd34d;">' +
                                    '<label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">' +
                                        '<input type="checkbox" id="reclassifyPrintCheck" style="width: 16px; height: 16px; cursor: pointer;" />' +
                                        '<span style="font-weight: bold; color: #92400e; font-size: 13px;"><i class="fa-solid fa-print"></i> Imprimer étiquette et ajouter à l\'inventaire' +
                                            (accumulatedReclassQty > 0 ? ' (total: accumulé + nouvelle qté)' : '') +
                                        '</span>' +
                                    '</label>' +
                                    '<div id="reclassifyPrintSection" style="display: none; margin-left: 24px; margin-top: 8px;">' +
                                        (accumulatedReclassQty > 0 ? '<p style="font-size: 12px; color: #92400e; margin-bottom: 8px; font-weight: bold;">Quantité totale pour l\'étiquette: accumulé (' + accumulatedReclassQty.toFixed(2) + ') + nouvelle qté</p>' : '') +
                                        '<label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Liste de Tally:</label>' +
                                        '<textarea id="reclassifyTallyInput" rows="3" ' +
                                            'style="width: 100%; padding: 6px; border: 1px solid #fcd34d; border-radius: 4px; font-size: 13px; font-family: monospace; resize: vertical; margin-bottom: 8px;" ' +
                                            'placeholder="Ex: 8x4, 10x6, 12x8..."></textarea>' +
                                        '<label style="display: block; margin-bottom: 4px; font-size: 13px; font-weight: bold; color: #4b5563;">Localisation:</label>' +
                                        '<input type="text" id="reclassifyLocationInput" placeholder="Ex: A-12, B-5..."' +
                                               'style="width: 100%; padding: 6px; border: 1px solid #fcd34d; border-radius: 4px; font-size: 13px;" />' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        
                    '</div>',
                    buttons: [
                        {
                            text: "Annuler",
                            onClick: () => false
                        },
                        {
                            text: "Confirmer",
                            onClick: () => {
                                const closePallet = document.getElementById('closePalletCheck').checked;
                                const palletQty = parseFloat(document.getElementById('palletQtyInput').value) || 0;
                                
                                const reclassify = document.getElementById('reclassifyCheck').checked;
                                const newGrade = document.getElementById('gradeSelect').value;
                                const reclassifyQty = parseFloat(document.getElementById('reclassifyQtyInput').value) || 0;
                                
                                // Lire les options d'impression AVANT de fermer le dialog
                                const palletPrint = closePallet ? document.getElementById('palletPrintCheck').checked : false;
                                const palletTally = palletPrint ? (document.getElementById('palletTallyInput').value.trim()) : '';
                                const palletLoc = palletPrint ? (document.getElementById('palletLocationInput').value.trim() || 'N/A') : '';
                                
                                const reclassifyPrint = reclassify ? document.getElementById('reclassifyPrintCheck').checked : false;
                                const reclassifyTally = reclassifyPrint ? (document.getElementById('reclassifyTallyInput').value.trim()) : '';
                                const reclassifyLoc = reclassifyPrint ? (document.getElementById('reclassifyLocationInput').value.trim() || 'N/A') : '';
                                
                                // Lire les dimensions confirmées (Baker)
                                let confirmedWidth = parseFloat(activeJob.width) || 0;
                                let confirmedThickness = parseFloat(activeJob.thickness) || 0;
                                if (closePallet && activeJob.process === 'procBaker') {
                                    const wInput = document.getElementById('palletWidthInput');
                                    const tInput = document.getElementById('palletThicknessInput');
                                    if (wInput) confirmedWidth = parseFloat(wInput.value) || 0;
                                    if (tInput) confirmedThickness = parseFloat(tInput.value) || 0;
                                    if (confirmedWidth <= 0) {
                                        alert("Veuillez entrer une largeur valide.");
                                        return false;
                                    }
                                }
                                
                                // Validation
                                if (closePallet && palletQty <= 0) {
                                    alert("Veuillez entrer une quantité valide pour la palette à fermer.");
                                    return false;
                                }
                                
                                if (reclassify && (!newGrade || reclassifyQty <= 0)) {
                                    alert("Veuillez sélectionner un classement et entrer une quantité valide pour le reclassement.");
                                    return false;
                                }
                                
                                // Si aucune action sélectionnée, fermer simplement
                                if (!closePallet && !reclassify) {
                                    DevExpress.ui.notify('Veuillez sélectionner au moins une option (fermer palette ou reclasser).', 'warning', 3000);
                                    return false;
                                }
                                
                                // La quantité de la palette fermée s'ajoute à la quantité produite
                                const palletQtyToAdd = closePallet ? palletQty : 0;
                                const totalQty = currentQty + palletQtyToAdd;
                                
                                // Calculer l'inventaire utilisé
                                const widthVal = confirmedWidth > 0 ? confirmedWidth : (parseFloat(activeJob.width) || 0);
                                const baseQty = parseFloat(activeJob.qty) || 0;
                                const logs = activeJob.logs || [];
                                const stockUsedFromLogs = logs
                                    .filter(log => log.action === 'STOCK_USED')
                                    .reduce((sum, log) => sum + (parseFloat(log.qty) || 0), 0);
                                const totalInventoryPC = baseQty + stockUsedFromLogs;
                                
                                // Convertir la quantité produite en PC
                                const producedPC = widthVal > 0 ? totalQty * (widthVal / 12) : totalQty;
                                
                                // Vérifier si on dépasse l'inventaire utilisé
                                if (producedPC > totalInventoryPC) {
                                    alert('Impossible de mettre en pause: La quantité produite (' + producedPC.toFixed(2) + ' PC) dépasse la quantité d\'inventaire utilisé (' + totalInventoryPC.toFixed(2) + ' PC).\n\nVeuillez ajouter plus de stock inventaire avant de continuer.');
                                    return false;
                                }
                                
                                // Ajuster qty dans le tableau si la production dépasse la quantité d'origine
                                let newQty = baseQty;
                                if (producedPC > baseQty) {
                                    newQty = producedPC;
                                }
                                
                                const extraLogs = [];
                                
                                // Ajouter le log de fermeture de palette si activé (pour traçabilité)
                                if (closePallet) {
                                    const palletLog = {
                                        user: userName,
                                        action: 'PALLET_CLOSED',
                                        qty: palletQty,
                                        printed: palletPrint, // marquer si imprimé
                                        timestamp: Date.now()
                                    };
                                    if (confirmedWidth > 0) palletLog.width = confirmedWidth;
                                    if (confirmedThickness > 0) palletLog.thickness = confirmedThickness;
                                    extraLogs.push(palletLog);
                                }
                                
                                // Ajouter le log de reclassement si activé (ne change pas la qté produite)
                                if (reclassify) {
                                    extraLogs.push({
                                        user: userName,
                                        action: 'WOOD_RECLASSIFIED',
                                        qty: reclassifyQty,
                                        newGrade: newGrade,
                                        printed: reclassifyPrint, // marquer si imprimé
                                        timestamp: Date.now()
                                    });
                                }
                                
                                // Si impression palette, marquer les anciens logs non-imprimés comme imprimés
                                let updatedLogs = [...(activeJob.logs || [])];
                                if (palletPrint) {
                                    updatedLogs = updatedLogs.map(log => {
                                        if (log.action === 'PALLET_CLOSED' && !log.printed) {
                                            return { ...log, printed: true };
                                        }
                                        return log;
                                    });
                                }
                                if (reclassifyPrint) {
                                    updatedLogs = updatedLogs.map(log => {
                                        if (log.action === 'WOOD_RECLASSIFIED' && !log.printed) {
                                            return { ...log, printed: true };
                                        }
                                        return log;
                                    });
                                }
                                
                                // Créer les logs complets pour générer les notes
                                const allLogs = [...updatedLogs, ...extraLogs];
                                const updatedNotes = generateNotesFromLogs(allLogs, jobParams.jobNotes);
                                
                                // Mettre à jour le statut — le job reste en 'running' (le compteur continue)
                                const extraParams = { ...jobParams, qty: newQty, logs: allLogs };
                                if (confirmedWidth > 0) extraParams.width = confirmedWidth;
                                if (confirmedThickness > 0) extraParams.thickness = confirmedThickness;
                                updateJobStatus(activeJob.id, 'running', totalQty, updatedNotes, null, extraParams);
                                
                                // Traiter impression étiquette pour palette
                                if (closePallet && palletQty > 0 && palletPrint) {
                                    // Quantité totale = accumulé non-imprimé + nouvelle quantité
                                    const totalPalletQtyForLabel = accumulatedPalletQty + palletQty;
                                    
                                    setTimeout(() => {
                                        // Générer le prochain numéro de stock (commence à 10000)
                                        let nextNum = 10000;
                                        const existingNums = inventory
                                            .map(item => parseInt(item.stockNo, 10))
                                            .filter(n => !isNaN(n));
                                        if (existingNums.length > 0) {
                                            const maxNum = Math.max(...existingNums);
                                            nextNum = maxNum < 10000 ? 10000 : maxNum + 1;
                                        }
                                        const stockNo = String(nextNum);
                                        
                                        const palletGrade = reclassify ? newGrade : (activeJob.grade || 'Standard');
                                        const palletJobData = { ...activeJob, grade: palletGrade, producedQty: totalPalletQtyForLabel };
                                        const productCode = activeJob.targetProductCode || generateProductCode(palletJobData);
                                        
                                        const widthPC = parseFloat(activeJob.width) || 0;
                                        const qtyPC = widthPC > 0 ? totalPalletQtyForLabel * (widthPC / 12) : totalPalletQtyForLabel;
                                        
                                        if (typeof addToInventory === 'function') {
                                            addToInventory(stockNo, activeJob.wood || 'N/A', palletGrade, activeJob.client || 'N/A', Math.round(qtyPC), palletLoc, getProcessName(activeJob.process), productCode);
                                        }
                                        
                                        const palletData = {
                                            id: activeJob.id, txn: activeJob.txn, client: activeJob.client || 'N/A',
                                            wood: activeJob.wood || 'N/A', grade: palletGrade, producedQty: totalPalletQtyForLabel,
                                            process: activeJob.process || '', steps: activeJob.steps || [],
                                            width: activeJob.width || 'N/A', coverage: activeJob.coverage || 'N/A',
                                            customStockNo: stockNo, tallyList: palletTally, productCode: productCode,
                                            targetProductCode: activeJob.targetProductCode || ''
                                        };
                                        generatePalletLabel(palletData, palletLoc);
                                        DevExpress.ui.notify('Stock ' + stockNo + ' créé — ' + totalPalletQtyForLabel.toFixed(2) + ' PL transférés à l\'inventaire', 'success', 4000);
                                    }, 300);
                                } else if (closePallet && palletQty > 0) {
                                    DevExpress.ui.notify('Palette fermée: ' + palletQty.toFixed(2) + ' PL ajoutés (total accumulé non-imprimé: ' + (accumulatedPalletQty + palletQty).toFixed(2) + ' PL)', 'success', 4000);
                                }
                                
                                // Traiter impression étiquette pour reclassement
                                if (reclassify && reclassifyQty > 0 && reclassifyPrint) {
                                    const totalReclassQtyForLabel = accumulatedReclassQty + reclassifyQty;
                                    
                                    setTimeout(() => {
                                        // Générer le prochain numéro de stock (commence à 10000)
                                        let nextNum = 10000;
                                        const existingNums = inventory
                                            .map(item => parseInt(item.stockNo, 10))
                                            .filter(n => !isNaN(n));
                                        if (existingNums.length > 0) {
                                            const maxNum = Math.max(...existingNums);
                                            nextNum = maxNum < 10000 ? 10000 : maxNum + 1;
                                        }
                                        const stockNo = String(nextNum);
                                        
                                        const reclassJobData = { ...activeJob, grade: newGrade, producedQty: totalReclassQtyForLabel };
                                        const productCode = activeJob.targetProductCode || generateProductCode(reclassJobData);
                                        
                                        const widthPC = parseFloat(activeJob.width) || 0;
                                        const qtyPC = widthPC > 0 ? totalReclassQtyForLabel * (widthPC / 12) : totalReclassQtyForLabel;
                                        
                                        if (typeof addToInventory === 'function') {
                                            addToInventory(stockNo, activeJob.wood || 'N/A', newGrade, activeJob.client || 'N/A', Math.round(qtyPC), reclassifyLoc, getProcessName(activeJob.process), productCode);
                                        }
                                        
                                        const reclassData = {
                                            id: activeJob.id, txn: activeJob.txn, client: activeJob.client || 'N/A',
                                            wood: activeJob.wood || 'N/A', grade: newGrade, producedQty: totalReclassQtyForLabel,
                                            process: activeJob.process || '', steps: activeJob.steps || [],
                                            width: activeJob.width || 'N/A', coverage: activeJob.coverage || 'N/A',
                                            customStockNo: stockNo, tallyList: reclassifyTally, productCode: productCode,
                                            targetProductCode: activeJob.targetProductCode || ''
                                        };
                                        generatePalletLabel(reclassData, reclassifyLoc);
                                        DevExpress.ui.notify('Stock ' + stockNo + ' créé — ' + totalReclassQtyForLabel.toFixed(2) + ' PL reclassés transférés à l\'inventaire', 'success', 4000);
                                    }, 600);
                                } else if (reclassify && reclassifyQty > 0) {
                                    DevExpress.ui.notify('Reclassement: ' + reclassifyQty.toFixed(2) + ' PL en ' + newGrade + ' (total accumulé non-imprimé: ' + (accumulatedReclassQty + reclassifyQty).toFixed(2) + ' PL)', 'info', 4000);
                                }
                                
                                return true;
                            }
                        }
                    ]
                }).show();
                // Attach event listeners after dialog renders
                setTimeout(() => {
                    const closePalletCheck = document.getElementById('closePalletCheck');
                    const reclassifyCheck = document.getElementById('reclassifyCheck');
                    const palletPrintCheck = document.getElementById('palletPrintCheck');
                    const reclassifyPrintCheck = document.getElementById('reclassifyPrintCheck');
                    if (closePalletCheck) {
                        closePalletCheck.addEventListener('change', function(e) {
                            document.getElementById('palletSection').style.display = e.target.checked ? 'block' : 'none';
                        });
                    }
                    if (reclassifyCheck) {
                        reclassifyCheck.addEventListener('change', function(e) {
                            document.getElementById('reclassifySection').style.display = e.target.checked ? 'block' : 'none';
                        });
                    }
                    if (palletPrintCheck) {
                        palletPrintCheck.addEventListener('change', function(e) {
                            document.getElementById('palletPrintSection').style.display = e.target.checked ? 'block' : 'none';
                        });
                    }
                    if (reclassifyPrintCheck) {
                        reclassifyPrintCheck.addEventListener('change', function(e) {
                            document.getElementById('reclassifyPrintSection').style.display = e.target.checked ? 'block' : 'none';
                        });
                    }
                }, 100);
            });
        }
        else if (action === 'reportIssue') {
            // Report an issue dialog
            DevExpress.ui.dialog.custom({
                title: "Signaler un problème",
                messageHtml: `<div style="margin: 20px 0;">
                    <label style="display: block; margin-bottom: 8px; font-weight: bold;">Description du problème:</label>
                    <textarea id="issueDescription" rows="5" 
                              style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; resize: vertical;"
                              placeholder="Décrivez le problème rencontré..."></textarea>
                </div>`,
                buttons: [
                    {
                        text: "Annuler",
                        onClick: () => false
                    },
                    {
                        text: "Envoyer",
                        onClick: () => {
                            const description = document.getElementById('issueDescription').value;
                            if (description.trim()) {
                                // Demander l'authentification de l'employé
                                requireAuth((userName) => {
                                    const issueLog = {
                                        user: userName,
                                        action: 'ISSUE_REPORTED',
                                        qty: 0,
                                        timestamp: Date.now(),
                                        description: description
                                    };
                                    
                                    // Générer les notes avec tous les logs
                                    const allLogs = [...(activeJob.logs || []), issueLog];
                                    const updatedNotes = generateNotesFromLogs(allLogs, jobParams.jobNotes);
                                    
                                    // Log the issue in the job's logs without changing status
                                    updateJobStatus(activeJob.id, activeJob.status, activeJob.producedQty, updatedNotes, issueLog, { issueDescription: description, issueResolved: false, issueTimestamp: Date.now() });
                                    DevExpress.ui.notify("Problème signalé avec succès", "success", 2000);
                                });
                            }
                            return true;
                        }
                    }
                ]
            }).show();
        }
    };

    // --- List Initialization (Remplacement du DataGrid par dxList) ---
    useEffect(() => {
        if (!queueListRef.current) return;
        // Nettoyage si déjà monté
        if (queueListRef.current._dxListInstance) {
            queueListRef.current._dxListInstance.dispose();
            queueListRef.current._dxListInstance = null;
        }
        // Création dxList
        const list = new DevExpress.ui.dxList(queueListRef.current, {
            dataSource: queue.filter(j => j.id !== activeJob?.id),
            height: '100%',
            itemTemplate: function(data, index, element) {
                // Construction de l'affichage d'un item de file d'attente
                const container = document.createElement('div');
                container.className = 'flex flex-col gap-1 p-2 border-b';
                // Ligne principale
                const top = document.createElement('div');
                top.className = 'flex justify-between items-center';
                const stockInfo = data.stockNo ? ' <span class="bg-gray-100 px-1 rounded text-gray-600">' + data.stockNo + '</span>' : '';
                top.innerHTML = '<span class="font-bold text-[#51aff7]">#' + data.id + '</span><span class="text-xs text-gray-500">' + (data.client || '') + stockInfo + '</span>';
                container.appendChild(top);
                // Détail produit
                const prod = document.createElement('div');
                prod.className = 'text-xs text-gray-700';
                const gradeText = data.grade ? ' (' + data.grade + ')' : '';
                const processName = getProcessName(data.process);
                prod.textContent = processName + ' - ' + (data.wood || '') + gradeText + ' - ' + (data.qty || '') + ' pc';
                container.appendChild(prod);
                // Boutons actions
                const actions = document.createElement('div');
                actions.className = 'flex gap-2 mt-1';
                // Bouton démarrer
                const btnStart = document.createElement('button');
                btnStart.className = 'px-2 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded flex items-center gap-1';
                btnStart.innerHTML = '<i class="fa-solid fa-play"></i> Démarrer';
                btnStart.onclick = (e) => {
                    e.stopPropagation();
                    const { handleStartJob } = handlersRef.current;
                    handleStartJob(data);
                };
                actions.appendChild(btnStart);
                container.appendChild(actions);
                element.append(container);
            },
            onItemClick: function(e) {
                // Démarrer aussi au clic sur l'item
                const { handleStartJob } = handlersRef.current;
                handleStartJob(e.itemData);
            },
            noDataText: t.waitingForJob || 'Aucun en attente',
            showScrollbar: 'always',
        });
        queueListRef.current._dxListInstance = list;
        return () => {
            if (queueListRef.current._dxListInstance) {
                queueListRef.current._dxListInstance.dispose();
                queueListRef.current._dxListInstance = null;
            }
        };
    }, [queue, activeJob?.id, t]);

    // 2. History Grid
    useEffect(() => {
        if (!activeJob || !historyGridRef.current) return;
        
        // Dispose existing if any (safety)
        if(historyGridInstance.current) {
            historyGridInstance.current.dispose();
            historyGridInstance.current = null;
        }

        const grid = new DevExpress.ui.dxDataGrid(historyGridRef.current, {
            dataSource: activeJob.logs || [],
            columns: [
                { 
                    dataField: 'timestamp', 
                    caption: 'Heure', 
                    dataType: 'datetime', 
                    format: 'HH:mm:ss', 
                    sortOrder: 'desc',
                    width: 95,
                    allowEditing: false
                },
                { 
                    dataField: 'user', 
                    caption: 'Utilisateur',
                    width: 130,
                    allowEditing: false
                },
                { 
                    dataField: 'action', 
                    caption: 'Action',
                    width: 130,
                    allowEditing: false,
                    calculateCellValue: (rowData) => {
                        const action = rowData.action || '';
                        const translations = {
                            'START': 'DÉMARRER',
                            'PAUSE': 'PAUSE',
                            'COMPLETE': 'TERMINER',
                            'RESUME': 'REPRENDRE',
                            'STOCK_USED': 'STOCK UTILISÉ',
                            'ISSUE_REPORTED': 'PROBLÈME SIGNALÉ',
                            'PALLET_CLOSED': 'PALETTE FERMÉE',
                            'WOOD_RECLASSIFIED': 'BOIS RECLASSÉ'
                        };
                        return translations[action] || action;
                    }
                },
                { 
                    dataField: 'description', 
                    caption: 'No. Stock / Grade',
                    width: 150,
                    allowEditing: false,
                    calculateCellValue: (rowData) => {
                        // Si c'est un reclassement, afficher le nouveau grade
                        if (rowData.action === 'WOOD_RECLASSIFIED' && rowData.newGrade) {
                            return '\u2192 ' + rowData.newGrade;
                        }
                        return rowData.description || '';
                    }
                },
                { 
                    dataField: 'qty', 
                    caption: 'Quantité',
                    width: 100,
                    dataType: 'number',
                    format: {
                        type: 'fixedPoint',
                        precision: 2
                    },
                    allowEditing: true
                },
                {
                    caption: 'Unité',
                    width: 70,
                    allowEditing: false,
                    calculateCellValue: (rowData) => {
                        const action = rowData.action || '';
                        if (action === 'PAUSE' || action === 'COMPLETE' || action === 'PALLET_CLOSED' || action === 'WOOD_RECLASSIFIED') {
                            return 'PL';
                        } else if (action === 'STOCK_USED') {
                            return 'PC';
                        } else {
                            return '—';
                        }
                    }
                }
            ],
            editing: {
                mode: 'cell',
                allowUpdating: true,
                selectTextOnEditStart: true,
                startEditAction: 'click',
                useIcons: true
            },
            onEditingStart: (e) => {
                // Permettre l'édition uniquement de la colonne qty
                if (e.column.dataField !== 'qty') {
                    e.cancel = true;
                }
            },
            onRowUpdating: (e) => {
                const oldQty = parseFloat(e.oldData.qty) || 0;
                const newQty = parseFloat(e.newData.qty) || 0;
                const difference = newQty - oldQty;
                
                // Si c'est un stock utilisé, ajuster l'inventaire
                if (e.oldData.action === 'STOCK_USED' && e.oldData.description) {
                    const stockMatch = e.oldData.description.match(/Stock\s+(STK-[\w]+)/i);
                    if (stockMatch && difference !== 0) {
                        const stockNo = stockMatch[1];
                        
                        // Trouver le stock dans l'inventaire
                        const stockItem = inventory.find(item => item.stockNo === stockNo);
                        if (stockItem) {
                            // Si on augmente la quantité utilisée (différence positive), on déduit plus de l'inventaire
                            // Si on diminue la quantité utilisée (différence négative), on remet dans l'inventaire
                            const newInventoryQty = stockItem.qty - difference;
                            
                            if (newInventoryQty < 0) {
                                e.cancel = true;
                                DevExpress.ui.notify({
                                    message: `Quantité insuffisante en stock (disponible: ${stockItem.qty} PC)`,
                                    type: "error",
                                    displayTime: 3000
                                });
                                return;
                            }
                            
                            // Mettre à jour l'inventaire
                            adjustInventory(stockNo, newInventoryQty);
                            
                            DevExpress.ui.notify({
                                message: `Inventaire ajusté: ${stockNo} - ${newInventoryQty.toFixed(2)} PC`,
                                type: "success",
                                displayTime: 2000
                            });
                        }
                    }
                }
                
                // Mettre à jour les logs du job
                const updatedLogs = (activeJob.logs || []).map(log => 
                    log.timestamp === e.oldData.timestamp ? { ...log, qty: newQty } : log
                );
                
                updateJobStatus(activeJob.id, activeJob.status, activeJob.producedQty, activeJob.notes, null, { logs: updatedLogs });
            },
            showBorders: true,
            height: 250,
            columnAutoWidth: false,
            wordWrapEnabled: false,
            showColumnHeaders: true,
            rowAlternationEnabled: true,
            hoverStateEnabled: true,
            noDataText: 'Aucune action enregistrée'
        });
        historyGridInstance.current = grid;
        // No dispose on return to prevent clearing while job is active
        return () => {
             if(historyGridInstance.current) {
                 historyGridInstance.current.dispose();
                 historyGridInstance.current = null;
             }
        };
    }, [!!activeJob]); // Re-mount when activeJob appears/disappears

    // Update History Data
    useEffect(() => {
        if (historyGridInstance.current && activeJob) {
            historyGridInstance.current.option('dataSource', activeJob.logs || []);
        }
    }, [activeJob?.logs]);

    // 3. Form (Form is tricky as it binds to inputs)
    useEffect(() => {
        if (!activeJob || !formRef.current) return;

        // Dispose previous if any
        if(formInstance.current) {
             formInstance.current.dispose();
             formInstance.current = null;
        }

        const form = new DevExpress.ui.dxForm(formRef.current, {
            formData: jobParams,
            items: [
                {
                    itemType: "group",
                    colCount: 3,
                    items: [
                        {
                            dataField: "productCode",
                            label: { text: "Ajout de matériel" },
                            editorType: "dxTextBox",
                            editorOptions: {
                                placeholder: "Cliquer pour ajouter...",
                                showClearButton: true,
                                readOnly: true,
                                buttons: [{
                                    name: "search",
                                    location: "after",
                                    options: { 
                                        icon: "add",
                                        stylingMode: "contained",
                                        type: "success",
                                        onClick: () => {
                                            // Pré-remplir la recherche avec le produit du job actif
                                            if (activeJobRef.current && activeJobRef.current.wood) {
                                                setMaterialSearch(activeJobRef.current.wood);
                                            }
                                            setShowMaterialModal(true);
                                        }
                                    }
                                }],
                                onFocusIn: () => {
                                    if (activeJobRef.current && activeJobRef.current.wood) {
                                        setMaterialSearch(activeJobRef.current.wood);
                                    }
                                    setShowMaterialModal(true);
                                }
                            }
                        },
                        {
                            dataField: "productCodeOld",
                            visible: false,
                            label: { text: "Code Produit / Stock (ancien)" },
                            editorType: "dxTextBox",
                            editorOptions: {
                                placeholder: "Rechercher un stock...",
                                showClearButton: true,
                                buttons: [{
                                    name: "search",
                                    location: "after",
                                    options: { 
                                        icon: "search",
                                        stylingMode: "contained",
                                        type: "default",
                                        onClick: () => {
                                            // Ouvrir une boîte de dialogue de recherche
                                            const searchValue = formInstance.current.getEditor("productCode").option("value") || "";
                                            const filteredInventory = inventory.filter(i => 
                                                i.qty > 0 && (
                                                    (i.stockNo || "").toLowerCase().includes(searchValue.toLowerCase()) ||
                                                    (i.wood || "").toLowerCase().includes(searchValue.toLowerCase()) ||
                                                    (i.grade || "").toLowerCase().includes(searchValue.toLowerCase()) ||
                                                    (i.location || "").toLowerCase().includes(searchValue.toLowerCase()) ||
                                                    (i.state || "").toLowerCase().includes(searchValue.toLowerCase())
                                                )
                                            );
                                            
                                            if (filteredInventory.length === 0) {
                                                DevExpress.ui.notify({
                                                    message: "Aucun stock trouvé",
                                                    type: "warning",
                                                    displayTime: 2000
                                                });
                                                return;
                                            }
                                            
                                            // Stocker la référence de l'inventaire dans window pour y accéder depuis onclick
                                            window._tempInventory = inventory;
                                            window._tempActiveJob = activeJob;
                                            window._tempFormInstance = formInstance;
                                            window._tempRequireAuth = requireAuth;
                                            window._tempUpdateJobStatus = updateJobStatus;
                                            window._tempDeductFromInventory = deductFromInventory;
                                            
                                            const itemsHtml = filteredInventory.map(data => {
                                                const escapedStockNo = data.stockNo.replace(/'/g, "\\'");
                                                const gradeText = data.grade ? ' (' + data.grade + ')' : '';
                                                return '<div class="stock-item" onclick="window.selectInventoryStock(\'' + escapedStockNo + '\');" style="cursor: pointer; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 8px; transition: background 0.2s;" ' +
                                                     'onmouseover="this.style.background=\'#f3f4f6\'" onmouseout="this.style.background=\'white\'">' +
                                                    '<div style="font-weight: bold; color: #1f2937; margin-bottom: 8px; font-size: 14px;">' + data.stockNo + '</div>' +
                                                    '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px; color: #6b7280;">' +
                                                        '<div><span style="font-weight: 600;">Essence:</span> ' + (data.wood || 'N/A') + gradeText + '</div>' +
                                                        '<div><span style="font-weight: 600;">État:</span> ' + (data.state || 'N/A') + '</div>' +
                                                        '<div><span style="font-weight: 600;">Localisation:</span> ' + (data.location || 'N/A') + '</div>' +
                                                        '<div><span style="font-weight: 600;">Quantité:</span> <span style="font-weight: bold; color: #059669;">' + data.qty + ' PC</span></div>' +
                                                    '</div>' +
                                                '</div>';
                                            }).join('');
                                            
                                            // Créer la fonction globale pour sélectionner un stock
                                            window.selectInventoryStock = function(stockNo) {
                                                const selectedStock = window._tempInventory.find(s => s.stockNo === stockNo);
                                                if (!selectedStock) return;
                                                
                                                const activeJob = window._tempActiveJob;
                                                const formInstance = window._tempFormInstance;
                                                const requireAuth = window._tempRequireAuth;
                                                const updateJobStatus = window._tempUpdateJobStatus;
                                                const deductFromInventory = window._tempDeductFromInventory;
                                                
                                                // Fermer toutes les boîtes de dialogue ouvertes
                                                const overlays = document.querySelectorAll('.dx-overlay-wrapper');
                                                overlays.forEach(overlay => {
                                                    overlay.style.display = 'none';
                                                });
                                                
                                                // Attendre un court instant avant d'ouvrir la nouvelle boîte
                                                setTimeout(() => {
                                                    // Demander la quantité
                                                // Demander la quantité
                                                DevExpress.ui.dialog.custom({
                                                    title: "Confirmer la quantité",
                                                    messageHtml: `<div style="margin: 20px 0;">
                                                        <p style="margin-bottom: 12px;"><strong>Stock sélectionné:</strong> ${selectedStock.stockNo}</p>
                                                        <p style="margin-bottom: 12px;"><strong>Produit:</strong> ${selectedStock.wood}</p>
                                                        <p style="margin-bottom: 12px;"><strong>Quantité disponible:</strong> ${selectedStock.qty} PC</p>
                                                        <p style="margin-bottom: 12px;"><strong>Localisation:</strong> ${selectedStock.location || 'N/A'}</p>
                                                        <label style="display: block; margin-bottom: 8px; font-weight: bold;">Quantité à utiliser (PC):</label>
                                                        <input type="number" id="qtyStockInput" value="${selectedStock.qty}" min="1" max="${selectedStock.qty}" step="0.01"
                                                               style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px;" />
                                                    </div>`,
                                                    buttons: [
                                                        {
                                                            text: "Annuler",
                                                            onClick: () => {
                                                                if (formInstance.current) {
                                                                    formInstance.current.getEditor("productCode").option("value", null);
                                                                }
                                                                return false;
                                                            }
                                                        },
                                                        {
                                                            text: "Confirmer",
                                                            onClick: () => {
                                                                const qtyInput = document.getElementById('qtyStockInput').value;
                                                                const qtyToUse = parseInt(qtyInput) || 0;
                                                                
                                                                if (qtyToUse <= 0 || qtyToUse > selectedStock.qty) {
                                                                    alert("Quantité invalide.");
                                                                    return false;
                                                                }
                                                                
                                                                requireAuth((userName) => {
                                                                    const stockLog = {
                                                                        user: userName,
                                                                        action: 'STOCK_USED',
                                                                        qty: qtyToUse,
                                                                        timestamp: Date.now(),
                                                                        description: 'Stock ' + selectedStock.stockNo + ' utilisé'
                                                                    };
                                                                    
                                                                    // Générer les notes avec tous les logs
                                                                    const allLogs = [...(activeJob.logs || []), stockLog];
                                                                    const updatedNotes = generateNotesFromLogs(allLogs, activeJob.notes);
                                                                    
                                                                    updateJobStatus(activeJob.id, activeJob.status, activeJob.producedQty, updatedNotes, stockLog, { 
                                                                        productCode: selectedStock.stockNo
                                                                    });
                                                                    
                                                                    deductFromInventory(selectedStock.stockNo, qtyToUse);
                                                                    
                                                                    DevExpress.ui.notify({
                                                                        message: 'Stock ' + selectedStock.stockNo + ' enregistré: ' + qtyToUse + ' PC utilisés',
                                                                        type: "success",
                                                                        displayTime: 3000,
                                                                        width: 400
                                                                    });
                                                                    
                                                                    if (formInstance.current) {
                                                                        formInstance.current.getEditor("productCode").option("value", null);
                                                                    }
                                                                });
                                                                
                                                                return true;
                                                            }
                                                        }
                                                    ]
                                                }).show();
                                                }, 100); // Petit délai pour s'assurer que la première boîte se ferme
                                            };
                                            
                                            DevExpress.ui.dialog.custom({
                                                title: "Sélectionner un stock",
                                                messageHtml: `<div style="max-height: 500px; overflow-y: auto; padding: 10px;">
                                                    ${itemsHtml}
                                                </div>`,
                                                buttons: [
                                                    {
                                                        text: "Annuler",
                                                        onClick: () => true
                                                    }
                                                ]
                                            }).show();
                                        }
                                    }
                                }]
                            }
                        },
                        { dataField: "pqtUsed", label: { text: "#PQT" }, editorOptions: { readOnly: true, hint: 'Calculé automatiquement depuis les palettes fermées' } },
                        { dataField: "humidity", label: { text: "%H" } },
                        { dataField: "coverage", label: { text: "Couvrance" } },
                        { dataField: "thickness", label: { text: "Épaisseur" } },
                        { dataField: "width", label: { text: "Largeur (pouces)" } },
                        { dataField: "sandThickness", label: { text: "Sortie Sableuse" } }
                    ]
                },
                {
                    dataField: "jobNotes",
                    editorType: "dxTextArea",
                    label: { text: t.notes },
                    editorOptions: { height: 80 }
                }
            ],
            onFieldDataChanged: (e) => {
                // Update React State
                    setJobParams(prev => {
                        const updated = { ...prev, [e.dataField]: e.value };
                        return updated;
                    });
            }
        });
        formInstance.current = form;
        
        return () => {
             if(formInstance.current) {
                 formInstance.current.dispose();
                 formInstance.current = null;
             }
        };
        
    }, [!!activeJob]); // Mount when activeJob appears

    // Update Form Data when job changes (switching jobs)
    // But NOT when typing, otherwise it resets cursor?
    // We only update IF the job ID changed from previous known ID?
    // Handled by the 'useEffect' that setsJobParams from activeJob above.
    // We just need to sync formInstance option
    useEffect(() => {
         if (formInstance.current && activeJob) {
             // Only update if external change? The loop is tricky.
             // If we type, jobParams updates. 
             // If we set option formData, does it reset cursor? Yes usually.
             // We should only update form IF the new ID is different strictly.
             // But jobParams is already updated by the other effect.
             
             // Check if data is different?
             const currentData = formInstance.current.option("formData");
             if(JSON.stringify(currentData) !== JSON.stringify(jobParams)){
                 formInstance.current.option("formData", jobParams);
             }
         }
    }, [jobParams]);

    // Save on Blur/Change logic needs to bridge form -> app state.
    // The previous implementation used onBlur on HTML inputs.
    // DevExtreme Form onFieldDataChanged is aggressive.
    // Let's attach a 'Save' action to the 'onDisposing' or manual save button?
    // User wants "compatible". Let's auto-save activeJob when these params change, throttled?
    useEffect(() => {
        if (activeJob) {
             // Avoid infinite loop: Only update if different? 
             // updateJobStatus triggers re-render -> new activeJob -> new params -> form update...
             // We need to differentiate "Form User Input" vs "Remote Update".
             // Actually, updateJobStatus saves to 'productionData'.
             // We should debounce this or only save on specific actions/blur if possible.
             // For now, to stop flicker, we should NOT call updateJobStatus on every keystroke if it causes full app re-render.
             // Let's rely on the variables 'jobParams' being passed to the Action Buttons (Pause/Complete).
             // AND a manual "Save" or "Blur". 
             // Since dxForm doesn't easily expose "Blur", let's leave it as "Saved on Action".
        }
    }, [jobParams]);


    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    };
    
    // Station Display Name
    const stationName = stationId.replace('station', 'Poste ');
    const producedQty = activeJob ? (parseInt(activeJob.producedQty) || 0) : 0;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col relative">
            {/* Auth Modal UI */}
            {authRequired && (
                <div className="fixed inset-0 z-[100] bg-black/80 flex flex-col items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl animate-fade-in-up">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-[#51aff7] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-blue-50">
                                <i className="fa-solid fa-lock text-2xl text-white"></i>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Authentification</h2>
                            <p className="text-gray-500 text-sm mt-1">Entrez votre code NIP (1234)</p>
                        </div>
                        
                        <div className="flex justify-center mb-8">
                            <div className="flex gap-4">
                                {[0,1,2,3].map(i => (
                                    <div key={i} className={`w-4 h-4 rounded-full transition-all duration-200 ${pin.length > i ? 'bg-[#51aff7] scale-110' : 'bg-gray-200'}`}></div>
                                ))}
                            </div>
                        </div>

                        {loginError && <div className="text-red-500 font-bold text-center mb-4 animate-shake">{loginError}</div>}

                        <div className="grid grid-cols-3 gap-3">
                            {[1,2,3,4,5,6,7,8,9].map(num => (
                                <button key={num} onClick={() => handlePinInput(num.toString())} className="h-16 rounded-xl bg-gray-50 text-xl font-bold text-gray-700 hover:bg-white hover:shadow-md hover:scale-105 transition active:bg-[#51aff7] active:text-white border border-gray-100">
                                    {num}
                                </button>
                            ))}
                            <div className="col-start-2">
                                <button onClick={() => handlePinInput('0')} className="h-16 w-full rounded-xl bg-gray-50 text-xl font-bold text-gray-700 hover:bg-white hover:shadow-md hover:scale-105 transition active:bg-[#51aff7] active:text-white border border-gray-100">0</button>
                            </div>
                            <div className="col-start-3">
                                <button onClick={() => { setPin(''); setAuthRequired(false); }} className="h-16 w-full rounded-xl bg-red-50 text-red-500 text-xl hover:bg-red-100 transition border border-red-100">
                                    <i className="fa-solid fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Ajout de matériel */}
            {showMaterialModal && (
                <div className="fixed inset-0 z-[90] bg-black/60 flex items-start justify-center pt-8 overflow-y-auto">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[95vh] flex flex-col m-4">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">
                                <i className="fas fa-boxes mr-2 text-blue-500"></i>
                                Ajout de matériel
                            </h2>
                            <button 
                                onClick={() => { setShowMaterialModal(false); setSelectedMaterial(null); setMaterialSearch(''); setIsNonInventory(false); }}
                                className="text-gray-400 hover:text-gray-600 text-2xl"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        
                        <div className="p-6 flex-1 overflow-y-auto">
                            {/* Option produit non inventorié */}
                            <div className="mb-4 flex items-center gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        checked={isNonInventory}
                                        onChange={(e) => {
                                            setIsNonInventory(e.target.checked);
                                            if (e.target.checked) {
                                                setSelectedMaterial(null);
                                                // Suggestions de noms de produits existants
                                                const existingNames = [...new Set(inventory.map(i => i.wood).filter(Boolean))];
                                                setProductNameSuggestions(existingNames);
                                            }
                                        }}
                                        className="w-5 h-5 rounded border-gray-300"
                                    />
                                    <span className="text-gray-700 font-medium">Produit non inventorié</span>
                                </label>
                            </div>

                            {isNonInventory ? (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom du produit</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={nonInventoryName}
                                                onChange={(e) => {
                                                    setNonInventoryName(e.target.value);
                                                    const filtered = [...new Set(inventory.map(i => i.wood).filter(Boolean))]
                                                        .filter(n => n.toLowerCase().includes(e.target.value.toLowerCase()));
                                                    setProductNameSuggestions(filtered);
                                                }}
                                                placeholder="Entrer le nom du produit..."
                                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            />
                                            {productNameSuggestions.length > 0 && nonInventoryName && (
                                                <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-40 overflow-y-auto">
                                                    {productNameSuggestions.slice(0, 10).map((name, idx) => (
                                                        <div 
                                                            key={idx}
                                                            onClick={() => { setNonInventoryName(name); setProductNameSuggestions([]); }}
                                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                        >
                                                            {name}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Quantité utilisée</label>
                                        <input
                                            type="number"
                                            value={nonInventoryQty}
                                            onChange={(e) => setNonInventoryQty(e.target.value)}
                                            placeholder="Quantité..."
                                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (!nonInventoryName || !nonInventoryQty) {
                                                DevExpress.ui.notify('Veuillez remplir tous les champs', 'warning', 2000);
                                                return;
                                            }
                                            const qty = parseInt(nonInventoryQty);
                                            if (isNaN(qty) || qty <= 0) {
                                                DevExpress.ui.notify('Quantité invalide', 'warning', 2000);
                                                return;
                                            }
                                            // Ajouter au log du job (STOCK_USED pour que ça compte dans Qté inventaire utilisé)
                                            if (activeJobRef.current) {
                                                const job = activeJobRef.current;
                                                updateJobStatus(job.id, job.status, job.producedQty, job.notes, null, {
                                                    logs: [...(job.logs || []), {
                                                        action: 'STOCK_USED',
                                                        timestamp: Date.now(),
                                                        user: 'Opérateur',
                                                        stockNo: 'N/A',
                                                        description: `${nonInventoryName} (non inventorié)`,
                                                        qty: qty
                                                    }]
                                                });
                                            }
                                            DevExpress.ui.notify(`${qty} unités de "${nonInventoryName}" ajoutées`, 'success', 2000);
                                            setShowMaterialModal(false);
                                            setNonInventoryName('');
                                            setNonInventoryQty('');
                                            setIsNonInventory(false);
                                        }}
                                        className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold"
                                    >
                                        <i className="fas fa-plus mr-2"></i>
                                        Ajouter le matériel
                                    </button>
                                </div>
                            ) : (
                                <>
                                    {/* Recherche inventaire */}
                                    <div className="mb-4">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={materialSearch}
                                                onChange={(e) => setMaterialSearch(e.target.value)}
                                                placeholder="Rechercher par produit, stock, grade, état..."
                                                className="w-full px-4 py-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            />
                                            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <button
                                                onClick={() => setMaterialSearch('')}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 px-2 py-1 rounded"
                                            >
                                                <i className="fas fa-search"></i> Tout afficher
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {/* Liste des produits */}
                                    <div className="border rounded-lg overflow-hidden" style={{ maxHeight: '70vh' }}>
                                        <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
                                            {inventory
                                                .filter(item => item.qty > 0 && (
                                                    !materialSearch ||
                                                    (item.stockNo || '').toLowerCase().includes(materialSearch.toLowerCase()) ||
                                                    (item.wood || '').toLowerCase().includes(materialSearch.toLowerCase()) ||
                                                    (item.grade || '').toLowerCase().includes(materialSearch.toLowerCase()) ||
                                                    (item.state || '').toLowerCase().includes(materialSearch.toLowerCase()) ||
                                                    (item.location || '').toLowerCase().includes(materialSearch.toLowerCase())
                                                ))
                                                .map(item => (
                                                    <div 
                                                        key={item.stockNo}
                                                        onClick={() => setSelectedMaterial(item)}
                                                        className={`p-4 border-b cursor-pointer hover:bg-blue-50 transition ${selectedMaterial?.stockNo === item.stockNo ? 'bg-blue-100 border-l-4 border-l-blue-500' : ''}`}
                                                    >
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <div className="font-bold text-gray-800">{item.stockNo}</div>
                                                                <div className="text-sm text-gray-600">
                                                                    {item.wood} {item.grade && `(${item.grade})`}
                                                                </div>
                                                                <div className="text-xs text-gray-500">{item.state} • {item.location}</div>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="text-lg font-bold text-green-600">{item.qty} PC</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    
                                    {/* Sélection et quantité */}
                                    {selectedMaterial && (
                                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                            <div className="flex justify-between items-center mb-3">
                                                <div>
                                                    <span className="font-bold">{selectedMaterial.stockNo}</span>
                                                    <span className="text-gray-600 ml-2">{selectedMaterial.wood}</span>
                                                </div>
                                                <span className="text-green-600 font-bold">Dispo: {selectedMaterial.qty} PC</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <input
                                                    type="number"
                                                    value={materialQty}
                                                    onChange={(e) => setMaterialQty(e.target.value)}
                                                    placeholder="Quantité à utiliser..."
                                                    max={selectedMaterial.qty}
                                                    className="flex-1 px-4 py-2 border rounded-lg"
                                                />
                                                <button
                                                    onClick={() => {
                                                        const qty = parseInt(materialQty);
                                                        if (isNaN(qty) || qty <= 0) {
                                                            DevExpress.ui.notify('Quantité invalide', 'warning', 2000);
                                                            return;
                                                        }
                                                        if (qty > selectedMaterial.qty) {
                                                            DevExpress.ui.notify('Quantité insuffisante', 'error', 2000);
                                                            return;
                                                        }
                                                        // Déduire de l'inventaire
                                                        deductFromInventory(selectedMaterial.stockNo, qty);
                                                        // Ajouter au log du job
                                                        if (activeJobRef.current) {
                                                            const job = activeJobRef.current;
                                                            updateJobStatus(job.id, job.status, job.producedQty, job.notes, null, {
                                                                logs: [...(job.logs || []), {
                                                                    action: 'STOCK_USED',
                                                                    timestamp: Date.now(),
                                                                    user: 'Opérateur',
                                                                    stockNo: selectedMaterial.stockNo,
                                                                    description: `${selectedMaterial.wood} (${selectedMaterial.stockNo})`,
                                                                    qty: qty
                                                                }]
                                                            });
                                                        }
                                                        DevExpress.ui.notify(`${qty} unités déduites de ${selectedMaterial.stockNo}`, 'success', 2000);
                                                        setShowMaterialModal(false);
                                                        setSelectedMaterial(null);
                                                        setMaterialSearch('');
                                                        setMaterialQty('');
                                                    }}
                                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold"
                                                >
                                                    <i className="fas fa-check mr-2"></i>
                                                    Confirmer
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Header */}
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-4">
                    <div className="bg-[#51aff7] w-12 h-12 rounded flex items-center justify-center font-bold text-xl">
                        {stationId.replace(/[^0-9]/g, '')}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{stationName}</h1>
                        <p className="text-[#51aff7] text-sm">{currentTime.toLocaleString()}</p>
                    </div>
                </div>
                <div className="text-right flex items-center gap-3">
                     <div>
                         <div className="text-xs text-gray-400 uppercase font-bold">Statut</div>
                         <div className="text-green-400 font-bold">EN LIGNE</div>
                     </div>
                     <button
                         className="ml-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold"
                         onClick={() => { try { if (window.returnToAdminProduction) window.returnToAdminProduction(); } catch(_) {} }}
                     >
                         <i className="fa-solid fa-door-open mr-2"></i> Fermer le poste
                     </button>
                </div>
            </header>

            <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 h-full"> 
                {/* Active Job Panel */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex-1">
                        <div className="flex justify-between items-center border-b pb-4 mb-6">
                            <div>
                                <h2 className="text-xl font-bold text-gray-700">{t.currentJob}</h2>
                                {activeJob && (
                                    <div className="text-2xl font-bold text-[#51aff7] mt-2">{getProcessName(activeJob.process)}</div>
                                )}
                            </div>
                            {activeJob && (
                                <span className={`px-3 py-1 rounded text-sm font-bold ${activeJob.status === 'running' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {activeJob.status}
                                </span>
                            )}
                        </div>

                        {activeJob ? (
                            <div className="flex flex-col gap-6">
                                {/* Big Metrics */}
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-sm text-gray-400 uppercase font-bold">Client / Stock No</div>
                                        <div className="text-3xl font-bold text-gray-800">{activeJob.client}</div>
                                        <div className="flex gap-4">
                                            <div className="text-[#51aff7] font-mono font-bold text-xl">{activeJob.txn}</div>
                                            {activeJob.stockNo && <div className="text-gray-500 font-mono text-xl">({activeJob.stockNo})</div>}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 uppercase font-bold">Essence</div>
                                        <div className="text-3xl font-bold text-gray-800">{activeJob.wood || 'N/A'}{activeJob.grade ? ` (${activeJob.grade})` : ''}</div>
                                    </div>
                                </div>
                                {/* Affichage du code produit voulu */}
                                {activeJob.targetProductCode && (
                                    <div className="mt-4 p-4 bg-purple-50 border-2 border-purple-200 rounded-lg">
                                        <div className="text-sm text-purple-600 uppercase font-bold mb-2">Produit Voulu</div>
                                        <div className="text-2xl font-bold text-purple-700">{activeJob.targetProductCode}</div>
                                        {activeJob.targetProductInfo && (
                                            <div className="mt-2 space-y-1">
                                                {activeJob.targetProductInfo.description && (
                                                    <div className="text-base text-gray-700"><span className="font-semibold text-purple-600">Description:</span> {activeJob.targetProductInfo.description}</div>
                                                )}
                                                {activeJob.targetProductInfo.wood && (
                                                    <div className="text-base text-gray-700"><span className="font-semibold text-purple-600">Type / Essence:</span> {activeJob.targetProductInfo.wood}{activeJob.targetProductInfo.grade ? ` (${activeJob.targetProductInfo.grade})` : ''}</div>
                                                )}
                                                {(activeJob.targetProductInfo.epaisseur || activeJob.targetProductInfo.largeur) && (
                                                    <div className="text-base text-gray-700">
                                                        <span className="font-semibold text-purple-600">Dimensions:</span>{' '}
                                                        {activeJob.targetProductInfo.epaisseur ? `Ép: ${activeJob.targetProductInfo.epaisseur}` : ''}
                                                        {activeJob.targetProductInfo.epaisseur && activeJob.targetProductInfo.largeur ? ' × ' : ''}
                                                        {activeJob.targetProductInfo.largeur ? `Larg: ${activeJob.targetProductInfo.largeur}` : ''}
                                                    </div>
                                                )}
                                                {activeJob.targetProductInfo.unite && (
                                                    <div className="text-base text-gray-700"><span className="font-semibold text-purple-600">Unité de mesure:</span> {activeJob.targetProductInfo.unite}</div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Additional Quantities Display */}
                                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
                                    <div style={{backgroundColor: '#f0fdf4', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #bbf7d0'}}>
                                        <div style={{fontSize: '0.75rem', color: '#6b7280', fontWeight: 'bold', marginBottom: '0.25rem', textTransform: 'uppercase'}}>Qté Produite</div>
                                        <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#15803d'}}>{producedQty.toFixed(2)}</div>
                                        <div style={{fontSize: '0.75rem', color: '#6b7280'}}>pieds linéaires</div>
                                    </div>
                                    <div style={{backgroundColor: '#eff6ff', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #bfdbfe'}}>
                                        <div style={{fontSize: '0.75rem', color: '#6b7280', fontWeight: 'bold', marginBottom: '0.25rem', textTransform: 'uppercase'}}>Qté Planifiée</div>
                                        <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1d4ed8'}}>{(() => {
                                            // Utiliser directement la quantité voulue du tableau de production
                                            const baseQty = parseFloat(activeJob.qty) || 0;
                                            const logs = activeJob.logs || [];
                                            const stockUsedFromLogs = logs
                                                .filter(log => log.action === 'STOCK_USED')
                                                .reduce((sum, log) => sum + (parseFloat(log.qty) || 0), 0);
                                            const qty = baseQty + stockUsedFromLogs;
                                            return qty.toFixed(2);
                                        })()}</div>
                                        <div style={{fontSize: '0.75rem', color: '#6b7280'}}>{(() => {
                                            const info = activeJob.targetProductInfo;
                                            if (info && info.unite) return info.unite;
                                            return 'PC';
                                        })()}</div>
                                    </div>
                                    <div style={{backgroundColor: '#f3e8ff', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d8b4fe'}}>
                                        <div style={{fontSize: '0.75rem', color: '#6b7280', fontWeight: 'bold', marginBottom: '0.25rem', textTransform: 'uppercase'}}>Qte inventaire utilisé</div>
                                        <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#7c3aed'}}>{(() => {
                                            // Utiliser la même logique que "Inventaire alloué" du tableau de production
                                            if (activeJob.inventoryAllocated !== undefined) return parseFloat(activeJob.inventoryAllocated).toFixed(2);
                                            const stockDetails = activeJob.stockDetails || [];
                                            if (stockDetails.length > 0) {
                                                return stockDetails.reduce((sum, s) => sum + (Number(s.qty) || 0), 0).toFixed(2);
                                            }
                                            return (parseFloat(activeJob.qty) || 0).toFixed(2);
                                        })()}</div>
                                        <div style={{fontSize: '0.75rem', color: '#6b7280'}}>{(activeJob.targetProductInfo && activeJob.targetProductInfo.unite) ? activeJob.targetProductInfo.unite : 'PC'}</div>
                                    </div>
                                    {activeJob.qtyPMP && (
                                        <div style={{backgroundColor: '#faf5ff', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e9d5ff'}}>
                                            <div style={{fontSize: '0.75rem', color: '#6b7280', fontWeight: 'bold', marginBottom: '0.25rem', textTransform: 'uppercase'}}>Qté PMP</div>
                                            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#7e22ce'}}>{activeJob.qtyPMP}</div>
                                            <div style={{fontSize: '0.75rem', color: '#6b7280'}}>BF</div>
                                        </div>
                                    )}
                                </div>

                                {/* DevExtreme Form for Inputs */}
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div ref={formRef}></div>
                                </div>

                                {/* Timer & Actions */}
                                <div className="grid grid-cols-2 gap-6 items-center">
                                    <div className="bg-gray-900 text-white p-4 rounded-xl text-center">
                                         <div className="text-xs text-gray-400 uppercase font-bold">Temps Écoulé</div>
                                         <div className="text-4xl font-mono font-bold mt-1">{formatTime(elapsed)}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        {activeJob.status === 'running' ? (
                                            <>
                                             <button 
                                                onClick={() => handleActionClick('pause')}
                                                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-xl shadow-lg transition"
                                             >
                                                <i className="fa-solid fa-plus mr-2"></i> {t.pauseJob}
                                             </button>
                                             <button 
                                                onClick={() => handleActionClick('pauseTimer')}
                                                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 rounded-xl shadow-lg transition"
                                             >
                                                <i className="fa-solid fa-pause mr-2"></i> {t.pauseTimerJob}
                                             </button>
                                            </>
                                        ) : (
                                            <button 
                                                onClick={() => requireAuth((userName) => {
                                                    const resumeLog = { 
                                                        user: userName, 
                                                        action: 'RESUME', 
                                                        qty: 0, 
                                                        timestamp: Date.now() 
                                                    };
                                                    
                                                    // Générer les notes avec tous les logs
                                                    const allLogs = [...(activeJob.logs || []), resumeLog];
                                                    const updatedNotes = generateNotesFromLogs(allLogs, jobParams.jobNotes);
                                                    
                                                    updateJobStatus(activeJob.id, 'running', activeJob.producedQty, updatedNotes, resumeLog, jobParams);
                                                })}
                                                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition"
                                            >
                                                <i className="fa-solid fa-play mr-2"></i> {t.startJob}
                                            </button>
                                        )}
                                        <button 
                                            onClick={() => handleActionClick('complete')}
                                            className="flex-1 bg-[#51aff7] hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg transition"
                                        >
                                            <i className="fa-solid fa-check mr-2"></i> {t.finishJob}
                                        </button>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleActionClick('reportIssue')}
                                    className="w-full py-3 border-2 border-red-100 text-red-500 font-bold rounded-xl hover:bg-red-50 transition"
                                >
                                    <i className="fa-solid fa-triangle-exclamation mr-2"></i> SIGNALER UN PROBLÈME
                                </button>


                                {/* History Grid */}
                                <div className="mt-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold text-gray-400 text-sm uppercase">Historique</h3>
                                        <button 
                                            onClick={handleUndoLastQuantity}
                                            className="px-3 py-1 text-xs bg-orange-100 text-orange-600 rounded hover:bg-orange-200 transition font-bold"
                                        >
                                            <i className="fa-solid fa-undo mr-1"></i> Annuler Dernière Qté
                                        </button>
                                    </div>
                                    <div ref={historyGridRef}></div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center p-6">
                                <div className="bg-gray-50 rounded-xl p-8 w-full max-w-md border-2 border-dashed border-gray-300">
                                    <div className="text-center">
                                        <i className="fa-solid fa-clipboard-check text-6xl mb-4 text-gray-300"></i>
                                        <h3 className="font-bold text-gray-700 text-xl mb-2">{t.waitingForJob}</h3>
                                        <p className="text-base text-gray-500 mt-3">Sélectionnez un travail depuis le tableau de production</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Queue Panel */}
                <div className="bg-white p-0 rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                    <div className="p-4 bg-gray-50 border-b">
                        <div className="flex items-center justify-between mb-3">
                            <div className="font-bold text-lg text-gray-700">
                                {t.jobQueue} <span className="text-sm bg-gray-200 px-2 rounded ml-2">{queue.length}</span>
                            </div>
                        </div>
                        
                        {/* Filtres */}
                        <div className="grid grid-cols-2 gap-2 mt-3">
                            <input
                                type="text"
                                placeholder="Date requise"
                                value={queueFilters.date}
                                onChange={(e) => setQueueFilters({...queueFilters, date: e.target.value})}
                                className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="No. Production"
                                value={queueFilters.txn}
                                onChange={(e) => setQueueFilters({...queueFilters, txn: e.target.value})}
                                className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Client"
                                value={queueFilters.client}
                                onChange={(e) => setQueueFilters({...queueFilters, client: e.target.value})}
                                className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Essence"
                                value={queueFilters.wood}
                                onChange={(e) => setQueueFilters({...queueFilters, wood: e.target.value})}
                                className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Quantité"
                                value={queueFilters.qty}
                                onChange={(e) => setQueueFilters({...queueFilters, qty: e.target.value})}
                                className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            />
                            <button
                                onClick={() => setQueueFilters({date: '', txn: '', client: '', wood: '', qty: ''})}
                                className="px-2 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                            >
                                <i className="fa-solid fa-times mr-1"></i> Effacer
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 p-2">
                        <div ref={queueListRef} className="h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ==================== AI Chat Widget ====================
const ChatWidget = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState(() => {
        try { return JSON.parse(localStorage.getItem('chatMessages') || '[]'); } catch { return []; }
    });
    const [input, setInput] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [apiKey, setApiKey] = React.useState(() => localStorage.getItem('gemini_api_key') || '');
    const [showSettings, setShowSettings] = React.useState(false);
    const [keyInput, setKeyInput] = React.useState('');
    const messagesEndRef = React.useRef(null);

    React.useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('chatMessages', JSON.stringify(messages.slice(-50)));
        }
    }, [messages]);

    React.useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isLoading]);

    const systemPrompt = `Tu es l'assistant intelligent de Surfagest, un logiciel de gestion de production, d'inventaire et de facturation pour une entreprise de traitement du bois et de surfaces.

Voici les modules et fonctionnalités de l'application que tu connais :

1. **Tableau de bord (Dashboard)** : Vue d'ensemble de la production avec statistiques, graphiques et indicateurs de performance.

2. **Production** : Gestion des lots de production avec stations de travail configurables (Sablage, Teinture, Scellant, Peinture, etc.). Chaque lot a un numéro, client, essence de bois, quantité de pièces, fini et couleur. Les lots passent par différents statuts: En attente, En cours, Terminé.

3. **Inventaire** : Gestion complète de l'inventaire avec numéros de stock séquentiels, codes produit, descriptions, spécifications, emplacements, fournisseurs, prix détail et coûtant (format 00000.00). Colonnes Qté (en main), Qté Rés (réservé par transactions), Qté Comm (en commande). Cliquer sur un numéro de stock ou code produit ouvre un modal d'édition.

4. **Saisie de données / Facturation** : 
   - Onglet Transactions : Liste des factures créées avec recherche et filtrage.
   - Onglet Formulaire : Création/édition de factures avec client, adresse, lignes de produit (stockNo, description, qty, prix, remise). Actions groupées : Expédier (crée bon de préparation, déduit inventaire), Commander (envoie en commande d'achat).
   - Onglet Commandes d'achat : Gestion des commandes fournisseurs avec bon de commande, réception partielle (backorder), suivi des coûtants.

5. **Efficacité employés** : Suivi de la performance des employés par station.

6. **Paramètres** : Configuration du mode (production/inventaire/les deux), stations, processus personnalisés, traitements du bois, états d'inventaire, codes de processus.

Fonctionnalités clés :
- Navigation par touche Entrée dans les formulaires
- Import/export Excel
- Impression de bons (préparation, commande)
- Gestion multi-fournisseurs (5 fournisseurs configurés)
- Calcul automatique des totaux, taxes TPS/TVQ
- Réservation automatique d'inventaire lors des transactions

Réponds toujours en français (sauf si l'utilisateur parle en anglais). Sois concis, utile et pratique. Si on te demande comment faire quelque chose dans l'application, donne des étapes claires. Tu peux aussi aider avec des questions générales sur la gestion d'inventaire, la production ou la comptabilité.`;

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;
        const userMsg = { role: 'user', content: input.trim() };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        if (apiKey) {
            try {
                // Build Gemini conversation history
                const geminiContents = [];
                // Add system instruction as first user/model exchange
                const recentMsgs = newMessages.slice(-20);
                recentMsgs.forEach(m => {
                    geminiContents.push({
                        role: m.role === 'assistant' ? 'model' : 'user',
                        parts: [{ text: m.content }]
                    });
                });

                const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        system_instruction: { parts: [{ text: systemPrompt }] },
                        contents: geminiContents,
                        generationConfig: {
                            maxOutputTokens: 800,
                            temperature: 0.7
                        }
                    })
                });
                const data = await response.json();
                if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                    setMessages(prev => [...prev, { role: 'assistant', content: data.candidates[0].content.parts[0].text }]);
                } else {
                    const errMsg = data.error?.message || JSON.stringify(data).substring(0, 200);
                    setMessages(prev => [...prev, { role: 'assistant', content: 'Erreur: ' + errMsg }]);
                }
            } catch (err) {
                setMessages(prev => [...prev, { role: 'assistant', content: 'Erreur de connexion: ' + err.message }]);
            }
        } else {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Pour activer l\'assistant IA, veuillez configurer votre clé API Google Gemini en cliquant sur l\'icône ⚙️ en haut du chat.\n\nObtenez une clé gratuite sur aistudio.google.com/apikey' }]);
        }
        setIsLoading(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const saveApiKey = () => {
        const k = keyInput.trim();
        setApiKey(k);
        if (k) {
            localStorage.setItem('gemini_api_key', k);
        } else {
            localStorage.removeItem('gemini_api_key');
        }
        setShowSettings(false);
        setKeyInput('');
    };

    const clearChat = () => {
        setMessages([]);
        localStorage.removeItem('chatMessages');
    };

    const formatMessage = (text) => {
        // Simple markdown-like formatting
        let html = text
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code style="background:#e5e7eb;padding:1px 4px;border-radius:3px;font-size:0.85em">$1</code>')
            .replace(/\n/g, '<br/>');
        return html;
    };

    return (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
            {/* Chat Panel */}
            {isOpen && (
                <div style={{
                    position: 'absolute', bottom: '64px', right: '0',
                    width: '380px', height: '520px',
                    backgroundColor: '#fff', borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                    display: 'flex', flexDirection: 'column',
                    overflow: 'hidden', border: '1px solid #e5e7eb'
                }}>
                    {/* Header */}
                    <div style={{
                        background: 'linear-gradient(135deg, #51aff7 0%, #3a9be0 100%)',
                        color: '#fff', padding: '14px 16px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        flexShrink: 0
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <i className="fas fa-robot" style={{ fontSize: '20px' }}></i>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '15px' }}>Surfagest AI</div>
                                <div style={{ fontSize: '11px', opacity: 0.85 }}>
                                    {apiKey ? 'Gemini connecté' : 'Clé API requise'}
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button onClick={clearChat} title="Effacer la conversation"
                                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', borderRadius: '8px', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-trash-alt" style={{ fontSize: '13px' }}></i>
                            </button>
                            <button onClick={() => { setShowSettings(!showSettings); setKeyInput(apiKey); }} title="Paramètres API"
                                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', borderRadius: '8px', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-cog" style={{ fontSize: '13px' }}></i>
                            </button>
                            <button onClick={() => setIsOpen(false)} title="Fermer"
                                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', borderRadius: '8px', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-times" style={{ fontSize: '14px' }}></i>
                            </button>
                        </div>
                    </div>

                    {/* Settings panel */}
                    {showSettings && (
                        <div style={{ padding: '12px 16px', backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb', flexShrink: 0 }}>
                            <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>
                                Clé API Google Gemini
                            </label>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input
                                    type="password"
                                    value={keyInput}
                                    onChange={e => setKeyInput(e.target.value)}
                                    placeholder="AIza..."
                                    style={{ flex: 1, padding: '8px 10px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
                                    onKeyDown={e => { if (e.key === 'Enter') saveApiKey(); }}
                                />
                                <button onClick={saveApiKey}
                                    style={{ padding: '8px 14px', background: '#51aff7', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>
                                    OK
                                </button>
                            </div>
                            <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
                                Gratuit: <a href="https://aistudio.google.com/apikey" target="_blank" style={{ color: '#51aff7' }}>aistudio.google.com/apikey</a>
                            </div>
                        </div>
                    )}

                    {/* Messages */}
                    <div style={{
                        flex: 1, overflowY: 'auto', padding: '16px',
                        display: 'flex', flexDirection: 'column', gap: '12px',
                        backgroundColor: '#f3f4f6'
                    }}>
                        {messages.length === 0 && (
                            <div style={{ textAlign: 'center', color: '#9ca3af', marginTop: '40px' }}>
                                <i className="fas fa-comments" style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.3 }}></i>
                                <div style={{ fontSize: '14px', fontWeight: 500 }}>Bienvenue!</div>
                                <div style={{ fontSize: '12px', marginTop: '4px' }}>
                                    Posez une question sur l'utilisation de Surfagest
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '16px' }}>
                                    {['Comment créer une facture?', 'Comment fonctionne l\'inventaire?', 'Comment passer une commande fournisseur?'].map((q, i) => (
                                        <button key={i} onClick={() => { setInput(q); }}
                                            style={{ padding: '8px 12px', fontSize: '12px', background: '#fff', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', color: '#374151', textAlign: 'left' }}>
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {messages.map((msg, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                            }}>
                                <div style={{
                                    maxWidth: '85%',
                                    padding: '10px 14px',
                                    borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                                    backgroundColor: msg.role === 'user' ? '#51aff7' : '#fff',
                                    color: msg.role === 'user' ? '#fff' : '#1f2937',
                                    fontSize: '13px', lineHeight: '1.5',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                                    wordBreak: 'break-word'
                                }}
                                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                                />
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <div style={{
                                    padding: '12px 18px', borderRadius: '14px 14px 14px 4px',
                                    backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                                    display: 'flex', gap: '5px', alignItems: 'center'
                                }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#51aff7', animation: 'chatDot 1.4s ease-in-out infinite', animationDelay: '0s' }}></span>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#51aff7', animation: 'chatDot 1.4s ease-in-out infinite', animationDelay: '0.2s' }}></span>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#51aff7', animation: 'chatDot 1.4s ease-in-out infinite', animationDelay: '0.4s' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div style={{
                        padding: '12px 16px', borderTop: '1px solid #e5e7eb',
                        backgroundColor: '#fff', display: 'flex', gap: '8px', alignItems: 'center',
                        flexShrink: 0
                    }}>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Tapez votre question..."
                            style={{
                                flex: 1, padding: '10px 14px', border: '1px solid #d1d5db',
                                borderRadius: '24px', fontSize: '13px', outline: 'none',
                                backgroundColor: '#f9fafb'
                            }}
                            disabled={isLoading}
                        />
                        <button onClick={sendMessage} disabled={isLoading || !input.trim()}
                            style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: (isLoading || !input.trim()) ? '#d1d5db' : '#51aff7',
                                border: 'none', color: '#fff', cursor: (isLoading || !input.trim()) ? 'default' : 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0, transition: 'background 0.2s'
                            }}>
                            <i className="fas fa-paper-plane" style={{ fontSize: '14px' }}></i>
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #51aff7 0%, #3a9be0 100%)',
                    border: 'none', color: '#fff', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(81,175,247,0.4)',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(81,175,247,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(81,175,247,0.4)'; }}
            >
                <i className={isOpen ? 'fas fa-times' : 'fas fa-comment-dots'} style={{ fontSize: '22px' }}></i>
            </button>
        </div>
    );
};

const App = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [lang, setLang] = useState('fr');
    const [subcontractModal, setSubcontractModal] = useState({ show: false, job: null });

    // Track unsaved invoice changes
    const invoiceDirtyRef = useRef(false);
    const saveInvoiceRef = useRef(null);

    const handleSetActiveTab = (newTab) => {
        if (activeTab === 'dataEntry' && invoiceDirtyRef.current && newTab !== 'dataEntry') {
            const result = window.confirm('Vous avez des changements non enregistrés dans la facturation.\n\nVoulez-vous sauvegarder avant de quitter ?');
            if (result) {
                if (saveInvoiceRef.current) {
                    saveInvoiceRef.current();
                }
            }
            invoiceDirtyRef.current = false;
        }
        setActiveTab(newTab);
    };
    
    // Initialize App Mode from URL
    const [appMode, setAppMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            return params.get('mode') || 'admin';
        }
        return 'admin';
    });
    
    // State initialization
    const [productionData, setProductionData] = useState(() => {
        const saved = localStorage.getItem('productionData');
        let parsed = saved ? JSON.parse(saved) : [];
        if (!Array.isArray(parsed)) {
            parsed = [];
        }
        return parsed;
    });
    const [stationConfig, setStationConfig] = useState(() => JSON.parse(localStorage.getItem('stationConfig')) || {});
    const [customProcesses, setCustomProcesses] = useState(() => JSON.parse(localStorage.getItem('customProcesses')) || []);
    const [woodTreatments, setWoodTreatments] = useState(() => JSON.parse(localStorage.getItem('woodTreatments')) || []);
    const [processCodes, setProcessCodes] = useState(() => JSON.parse(localStorage.getItem('processCodes')) || {});
    const [productCodes, setProductCodes] = useState(() => JSON.parse(localStorage.getItem('productCodes')) || []);
    const [inventoryStates, setInventoryStates] = useState(() => {
        // États prédéfinis basés sur les catégories d'inventaire - TOUJOURS utiliser ces états
        const defaultStates = [
            { name: 'Brut baker', qtyRequired: false },
            { name: 'Brut vert', qtyRequired: false },
            { name: 'Brut Sec', qtyRequired: false },
            { name: 'REV. Exterieur', qtyRequired: false },
            { name: 'Ébénisterie', qtyRequired: false },
            { name: 'Plancher', qtyRequired: false }
        ];
        
        // Récupérer les données sauvegardées pour préserver l'option qtyRequired
        const saved = localStorage.getItem('inventoryStates');
        const parsed = saved ? JSON.parse(saved) : null;
        
        if (parsed && parsed.length > 0 && typeof parsed[0] === 'object' && parsed[0].name) {
            // Fusionner les états par défaut avec les options sauvegardées (qtyRequired)
            return defaultStates.map(defaultState => {
                const savedState = parsed.find(s => s.name === defaultState.name);
                return savedState ? { ...defaultState, qtyRequired: savedState.qtyRequired } : defaultState;
            });
        }
        
        // Forcer les nouveaux états
        localStorage.setItem('inventoryStates', JSON.stringify(defaultStates));
        return defaultStates;
    });
    const [processParameters, setProcessParameters] = useState(() => {
        const saved = localStorage.getItem('processParameters');
        // Structure: { procId: [{ name: 'stainColor', label: 'Couleur Teinture', required: true }, ...] }
        return saved ? JSON.parse(saved) : {
            'procStaining': [{ name: 'stainColor', label: 'Couleur Teinture', required: false }],
            'procPainting': [{ name: 'paintColor', label: 'Couleur Peinture', required: false }]
        };
    });
    
    // Inventaire dynamique
    const [inventory, setInventory] = useState(() => {
        const saved = localStorage.getItem('inventory');
        let parsedInventory = saved ? JSON.parse(saved) : null;
        
        // Charger les états disponibles
        const availableStates = (() => {
            const savedStates = localStorage.getItem('inventoryStates');
            return savedStates ? JSON.parse(savedStates) : [];
        })();
        
        // Vérifier si les données ont le champ 'state', sinon réinitialiser
        if (parsedInventory && parsedInventory.length > 0 && !parsedInventory[0].hasOwnProperty('state')) {
            console.log('Migration de l\'inventaire vers la nouvelle structure avec état');
            parsedInventory = null; // Forcer la réinitialisation
        }
        
        // Vérifier si les données ont le champ 'grade', sinon réinitialiser
        if (parsedInventory && parsedInventory.length > 0 && !parsedInventory[0].hasOwnProperty('grade')) {
            console.log('Migration de l\'inventaire vers la nouvelle structure avec grade');
            parsedInventory = null; // Forcer la réinitialisation
        }
        
        // Si l'inventaire existe, le garder
        if (parsedInventory && parsedInventory.length > 0) {
            return parsedInventory;
        }
        
        // Retourner un inventaire vide
        return [];
    });

    // Persist
    useEffect(() => { localStorage.setItem('productionData', JSON.stringify(productionData)); }, [productionData]);
    useEffect(() => { localStorage.setItem('stationConfig', JSON.stringify(stationConfig)); }, [stationConfig]);
    useEffect(() => { localStorage.setItem('customProcesses', JSON.stringify(customProcesses)); }, [customProcesses]);
    useEffect(() => { localStorage.setItem('woodTreatments', JSON.stringify(woodTreatments)); }, [woodTreatments]);
    useEffect(() => { localStorage.setItem('inventoryStates', JSON.stringify(inventoryStates)); }, [inventoryStates]);
    useEffect(() => { localStorage.setItem('inventory', JSON.stringify(inventory)); }, [inventory]);
    useEffect(() => { localStorage.setItem('productCodes', JSON.stringify(productCodes)); }, [productCodes]);
    useEffect(() => { localStorage.setItem('processCodes', JSON.stringify(processCodes)); }, [processCodes]);
    useEffect(() => { localStorage.setItem('processParameters', JSON.stringify(processParameters)); }, [processParameters]);

    // Mettre à jour les états selon les catégories pour les produits existants
    useEffect(() => {
        const hasItemsToUpdate109 = inventory.some(item => item.categorie === '109' && item.state !== 'Brut baker');
        if (hasItemsToUpdate109) {
            setInventory(prev => prev.map(item =>
                item.categorie === '109' ? { ...item, state: 'Brut baker' } : item
            ));
        }
    }, []);

    // Assigner des quantités aléatoires (100-3000) aux catégories 15, 10, 109 si qty est 0 ou non définie
    useEffect(() => {
        const categoriesToUpdate = ['15', '10', '109'];
        const hasItemsToUpdateQty = inventory.some(item => 
            categoriesToUpdate.includes(item.categorie) && (!item.qty || item.qty === 0)
        );
        if (hasItemsToUpdateQty) {
            setInventory(prev => prev.map(item => {
                if (categoriesToUpdate.includes(item.categorie) && (!item.qty || item.qty === 0)) {
                    const randomQty = Math.floor(Math.random() * (3000 - 100 + 1)) + 100;
                    return { ...item, qty: randomQty };
                }
                return item;
            }));
        }
    }, []);

    useEffect(() => {
        const hasItemsToUpdate10 = inventory.some(item => item.categorie === '10' && item.state !== 'Brut vert');
        if (hasItemsToUpdate10) {
            setInventory(prev => prev.map(item =>
                item.categorie === '10' ? { ...item, state: 'Brut vert' } : item
            ));
        }
    }, []);

    // Assigner des localisations aléatoires (A1 à F10) aux items sans localisation
    useEffect(() => {
        const hasItemsWithoutLocation = inventory.some(item => !item.location || item.location === '');
        if (hasItemsWithoutLocation) {
            const generateRandomLocation = () => {
                const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
                const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                const letter = letters[Math.floor(Math.random() * letters.length)];
                const number = numbers[Math.floor(Math.random() * numbers.length)];
                return `${letter}${number}`;
            };
            
            setInventory(prev => prev.map(item => 
                !item.location || item.location === '' 
                    ? { ...item, location: generateRandomLocation() } 
                    : item
            ));
        }
    }, []);

    // Catégorie 23 = REV. Exterieur
    useEffect(() => {
        const hasItemsToUpdate23 = inventory.some(item => item.categorie === '23' && item.state !== 'REV. Exterieur');
        if (hasItemsToUpdate23) {
            setInventory(prev => prev.map(item =>
                item.categorie === '23' ? { ...item, state: 'REV. Exterieur' } : item
            ));
        }
    }, []);

    // Catégorie 106 = Ébénisterie
    useEffect(() => {
        const hasItemsToUpdate106 = inventory.some(item => item.categorie === '106' && item.state !== 'Ébénisterie');
        if (hasItemsToUpdate106) {
            setInventory(prev => prev.map(item =>
                item.categorie === '106' ? { ...item, state: 'Ébénisterie' } : item
            ));
        }
    }, []);

    // Catégorie 18 = Plancher
    useEffect(() => {
        const hasItemsToUpdate18 = inventory.some(item => item.categorie === '18' && item.state !== 'Plancher');
        if (hasItemsToUpdate18) {
            setInventory(prev => prev.map(item =>
                item.categorie === '18' ? { ...item, state: 'Plancher' } : item
            ));
        }
    }, []);

    // Mettre à jour l'essence selon la description (CEDRE D'ALASKA, CEDRE BLANC, CEDRE ROUGE, PIN BLANC, PIN JAUNE, PIN ROUGE, PEUPLIER JAUNE, PEUPLIER, EPINETTE)
    useEffect(() => {
        const hasItemsToUpdate = inventory.some(item => 
            item.description && (
                (item.description.toUpperCase().includes("CEDRE D'ALASKA") && item.wood !== "CEDRE D'ALASKA") ||
                (item.description.toUpperCase().includes("CEDRE BLANC") && item.wood !== "CEDRE BLANC") ||
                (item.description.toUpperCase().includes("CEDRE ROUGE") && item.wood !== "CEDRE ROUGE") ||
                (item.description.toUpperCase().includes("PIN BLANC") && item.wood !== "PIN BLANC") ||
                (item.description.toUpperCase().includes("PIN JAUNE") && item.wood !== "PIN JAUNE") ||
                (item.description.toUpperCase().includes("PIN ROUGE") && item.wood !== "PIN ROUGE") ||
                (item.description.toUpperCase().includes("MELEZE") && item.wood !== "MELEZE") ||
                (item.description.toUpperCase().includes("PEUPLIER JAUNE") && item.wood !== "PEUPLIER JAUNE") ||
                (item.description.toUpperCase().includes("PEUPLIER") && !item.description.toUpperCase().includes("PEUPLIER JAUNE") && item.wood !== "PEUPLIER") ||
                (item.description.toUpperCase().includes("EPINETTE") && item.wood !== "EPINETTE")
            )
        );
        if (hasItemsToUpdate) {
            setInventory(prev => prev.map(item => {
                if (item.description && item.description.toUpperCase().includes("CEDRE D'ALASKA")) {
                    return { ...item, wood: "CEDRE D'ALASKA" };
                }
                if (item.description && item.description.toUpperCase().includes("CEDRE BLANC")) {
                    return { ...item, wood: "CEDRE BLANC" };
                }
                if (item.description && item.description.toUpperCase().includes("CEDRE ROUGE")) {
                    return { ...item, wood: "CEDRE ROUGE" };
                }
                if (item.description && item.description.toUpperCase().includes("PIN BLANC")) {
                    return { ...item, wood: "PIN BLANC" };
                }
                if (item.description && item.description.toUpperCase().includes("PIN JAUNE")) {
                    return { ...item, wood: "PIN JAUNE" };
                }
                if (item.description && item.description.toUpperCase().includes("PIN ROUGE")) {
                    return { ...item, wood: "PIN ROUGE" };
                }
                if (item.description && item.description.toUpperCase().includes("MELEZE")) {
                    return { ...item, wood: "MELEZE" };
                }
                if (item.description && item.description.toUpperCase().includes("PEUPLIER JAUNE")) {
                    return { ...item, wood: "PEUPLIER JAUNE" };
                }
                if (item.description && item.description.toUpperCase().includes("PEUPLIER")) {
                    return { ...item, wood: "PEUPLIER" };
                }
                if (item.description && item.description.toUpperCase().includes("EPINETTE")) {
                    return { ...item, wood: "EPINETTE" };
                }
                return item;
            }));
        }
    }, []);

    useEffect(() => {
        const hasItemsToUpdateBrut = inventory.some(item => item.state && item.state.toUpperCase() === 'BRUT');
        if (hasItemsToUpdateBrut) {
            setInventory(prev => prev.map(item =>
                item.state && item.state.toUpperCase() === 'BRUT' 
                    ? { ...item, state: 'Brut Sec', categorie: '15' } 
                    : item
            ));
        }
    }, []);

    // Nettoyage catégorie 106 - garder 20 produits aléatoires
    useEffect(() => {
        const cleanupDone = localStorage.getItem('cat106CleanupDone');
        if (cleanupDone) return;
        
        const cat106Items = inventory.filter(item => item.categorie === '106');
        if (cat106Items.length > 20) {
            // Mélanger et garder 20 aléatoires
            const shuffled = [...cat106Items].sort(() => Math.random() - 0.5);
            const toKeep = new Set(shuffled.slice(0, 20).map(item => item.stockNo));
            const toRemove = cat106Items.filter(item => !toKeep.has(item.stockNo)).map(item => item.stockNo);
            
            setInventory(prev => prev.filter(item => item.categorie !== '106' || toKeep.has(item.stockNo)));
            localStorage.setItem('cat106CleanupDone', 'true');
            console.log(`Catégorie 106: ${toRemove.length} produits supprimés, 20 conservés`);
        }
    }, []);

    // Nettoyage catégorie 23 - garder 20 produits aléatoires
    useEffect(() => {
        const cleanupDone = localStorage.getItem('cat23CleanupDone');
        if (cleanupDone) return;
        
        const cat23Items = inventory.filter(item => item.categorie === '23');
        if (cat23Items.length > 20) {
            // Mélanger et garder 20 aléatoires
            const shuffled = [...cat23Items].sort(() => Math.random() - 0.5);
            const toKeep = new Set(shuffled.slice(0, 20).map(item => item.stockNo));
            const toRemove = cat23Items.filter(item => !toKeep.has(item.stockNo)).map(item => item.stockNo);
            
            setInventory(prev => prev.filter(item => item.categorie !== '23' || toKeep.has(item.stockNo)));
            localStorage.setItem('cat23CleanupDone', 'true');
            console.log(`Catégorie 23: ${toRemove.length} produits supprimés, 20 conservés`);
        }
    }, []);

    // Listen for cross-tab updates (Sync changes from Station tabs)
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'productionData') {
                try {
                    const newData = e.newValue ? JSON.parse(e.newValue) : [];
                    if (Array.isArray(newData)) {
                        setProductionData(newData);
                        window.dispatchEvent(new CustomEvent('productionDataUpdated'));
                    }
                } catch (err) { console.error("Storage sync error", err); }
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const addBatch = (batch) => {
        setProductionData(prev => {
             // Calculate ID safely ignoring NaNs (commence à 10000)
             const ids = prev.map(p => parseInt(p.id)).filter(n => !isNaN(n));
             const maxId = ids.length > 0 ? Math.max(...ids) : 9999;
             const id = maxId < 10000 ? 10000 : maxId + 1;
             
             // Create new array with new item at TOP
             const newData = [{...batch, id}, ...prev];
             
             // Check if we need to persist immediately just in case
             localStorage.setItem('productionData', JSON.stringify(newData));
             try { window.dispatchEvent(new CustomEvent('productionDataUpdated')); } catch (_) {}
             return newData;
        });
    };

    const deductFromInventory = (stockNo, quantity) => {
        setInventory(prev => {
            return prev.map(item => {
                if (item.stockNo === stockNo) {
                    const newQty = Math.max(0, item.qty - quantity);
                    return { ...item, qty: newQty };
                }
                return item;
            });
        });
    };

    const adjustInventory = (stockNo, newQty) => {
        setInventory(prev => {
            return prev.map(item => {
                if (item.stockNo === stockNo) {
                    return { ...item, qty: Math.max(0, newQty) };
                }
                return item;
            });
        });
    };

    const addToInventory = (stockNo, wood, grade, client, qty, location, state, productCode) => {
        setInventory(prev => {
            const newItem = {
                stockNo: stockNo,
                wood: wood,
                grade: grade || '',
                client: client,
                qty: parseFloat(qty) || 0,
                location: location || '',
                state: state || '',
                productCode: productCode || ''
            };
            const updated = [...prev, newItem];
            localStorage.setItem('inventory', JSON.stringify(updated));
            return updated;
        });
    };

    const generateProductCode = (job) => {
        console.log('=== GÉNÉRATION CODE PRODUIT ===');
        console.log('Job:', job);
        console.log('ProcessCodes disponibles:', processCodes);
        
        // Générer le code produit: Essence (complète) + ProcessCodes + Largeur
        const woodSpecies = (job.wood || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
        console.log('Essence formatée:', woodSpecies);
        
        // Récupérer les procédés utilisés
        const processes = job.steps && job.steps.length > 0 ? job.steps : [job.process];
        console.log('Procédés à traiter:', processes);
        
        const codes = processes
            .map(proc => {
                const code = processCodes[proc] || '';
                console.log(`Code pour ${proc}: ${code}`);
                return code;
            })
            .filter(code => code.length > 0)
            .join('');
        
        console.log('Codes combinés:', codes);
        
        // Ajouter la largeur à la fin
        const width = job.width ? Math.round(parseFloat(job.width)).toString() : '';
        console.log('Largeur:', width);
        
        const productCode = `${woodSpecies}${codes}${width}`;
        console.log('Code produit final:', productCode);
        console.log('Codes produits existants:', productCodes);
        
        // Vérifier si le code existe déjà
        if (productCode && productCode.length > 0 && !productCodes.includes(productCode)) {
            console.log('✓ Nouveau code produit créé!');
            setProductCodes(prev => {
                const updated = [...prev, productCode];
                localStorage.setItem('productCodes', JSON.stringify(updated));
                return updated;
            });
            
            // Afficher une notification
            try {
                DevExpress.ui.notify({
                    message: `✓ Nouveau code produit créé: ${productCode}`,
                    type: 'success',
                    displayTime: 5000,
                    position: { at: 'top center', my: 'top center', offset: '0 60' }
                });
            } catch (e) {
                alert(`✓ Nouveau code produit créé: ${productCode}`);
            }
        } else if (productCodes.includes(productCode)) {
            console.log('Code produit déjà existant:', productCode);
        } else {
            console.log('⚠ Code produit vide ou invalide');
        }
        
        return productCode;
    };

    const generatePalletLabel = (job, storageLocation = '') => {
        const stockNo = job.customStockNo || ('STK-' + Date.now().toString().slice(-6));
        const productCode = job.targetProductCode || job.productCode || generateProductCode(job);
        const orderNumber = job.txn || job.id;
        const barcodeSVG = generateBarcodeSVG(stockNo);
        const width = job.width || 'N/A';
        const tallyList = job.tallyList || '';
        
        // Formater la liste de tally en HTML
        let tallyHTML = '';
        if (tallyList) {
            const tallyLines = tallyList.split('\n').filter(l => l.trim());
            tallyHTML = `
                <div style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                    <div style="font-size: 11px; margin-bottom: 4px;"><strong>Liste de Tally:</strong></div>
                    <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
                        <thead>
                            <tr style="background-color: #f3f4f6;">
                                <th style="border: 1px solid #ccc; padding: 2px 4px; text-align: left;">#</th>
                                <th style="border: 1px solid #ccc; padding: 2px 4px; text-align: left;">Dimensions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tallyLines.map((line, i) => 
                                '<tr><td style="border: 1px solid #ccc; padding: 2px 4px;">' + (i + 1) + '</td><td style="border: 1px solid #ccc; padding: 2px 4px;">' + line.trim() + '</td></tr>'
                            ).join('')}
                        </tbody>
                    </table>
                    <div style="font-size: 10px; color: #666; margin-top: 2px;"><strong>Total pièces:</strong> ${tallyLines.length}</div>
                </div>`;
        }
        
        const tagContent = `
            <div style="width: 4in; padding: 12px; font-family: Arial, sans-serif; border: 2px solid #000; box-sizing: border-box;">
                <div style="text-align: center; margin-bottom: 8px;">
                    <h1 style="margin: 0; font-size: 18px; font-weight: bold;">ÉTIQUETTE DE PALETTE</h1>
                </div>
                
                <div style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                    <div style="font-size: 11px; margin-bottom: 2px;"><strong>Numéro de Stock:</strong></div>
                    <div style="font-size: 22px; font-weight: bold; color: #cc0000;">${stockNo}</div>
                    <div style="margin-top: 4px; text-align: center; height: 50px;">
                        ${barcodeSVG}
                    </div>
                    <div style="font-size: 10px; color: #666; margin-top: 4px;"><strong>No. Production:</strong> ${orderNumber}</div>
                </div>
                
                ${productCode ? `<div style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                    <div style="font-size: 11px; margin-bottom: 2px;"><strong>Code Produit:</strong></div>
                    <div style="font-size: 16px; font-weight: bold; color: #009900; font-family: monospace;">${productCode}</div>
                </div>` : ''}
                
                ${storageLocation ? `<div style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                    <div style="font-size: 11px; margin-bottom: 2px;"><strong>Localisation:</strong></div>
                    <div style="font-size: 14px; font-weight: bold; color: #ff8800;">${storageLocation}</div>
                </div>` : ''}
                
                <div style="margin-bottom: 3px;">
                    <div style="font-size: 12px;"><strong>Client:</strong> ${job.client || 'N/A'}</div>
                </div>
                <div style="margin-bottom: 3px;">
                    <div style="font-size: 12px;"><strong>Produit:</strong> ${job.wood || 'N/A'}</div>
                </div>
                <div style="margin-bottom: 3px;">
                    <div style="font-size: 12px;"><strong>Grade:</strong> ${job.grade || 'N/A'}</div>
                </div>
                <div style="margin-bottom: 3px;">
                    <div style="font-size: 12px;"><strong>Largeur:</strong> ${width}${typeof width === 'number' ? ' po' : ''}</div>
                </div>
                <div style="margin-bottom: 3px;">
                    <div style="font-size: 12px;"><strong>Procédé:</strong> ${job.process ? (t[job.process] || job.process) : 'N/A'}</div>
                </div>
                <div style="margin-bottom: 6px;">
                    <div style="font-size: 12px;"><strong>Quantité:</strong> ${job.producedQty?.toFixed(2) || '0'} PL</div>
                </div>
                
                ${tallyHTML}
                
                <div style="margin-top: 6px; text-align: center; font-size: 10px; color: #666;">
                    <div>Date: ${new Date().toLocaleDateString()} - Heure: ${new Date().toLocaleTimeString()}</div>
                </div>
            </div>
        `;
        
        const printWindow = window.open('', '_blank', 'width=600,height=900');
        printWindow.document.write(`
            <html>
            <head>
                <title>Étiquette Palette - ${stockNo}</title>
                <style>
                    @page { size: 4in auto; margin: 0; }
                    @media print {
                        body { margin: 0; }
                    }
                    body { margin: 0; padding: 0; }
                </style>
            </head>
            <body>
                ${tagContent}
                <script>
                    window.onload = function() {
                        window.print();
                    };
                <\/script>
            </body>
            </html>
        `);
        printWindow.document.close();
    };

    const generateProductionTag = (job, storageLocation = '', tallyList = '') => {
        // Générer le prochain numéro de stock séquentiel (commence à 10000)
        let newStockNo = job.customStockNo;
        if (!newStockNo) {
            let nextNum = 10000;
            const existingNums = inventory
                .map(item => parseInt(item.stockNo, 10))
                .filter(n => !isNaN(n));
            if (existingNums.length > 0) {
                const maxNum = Math.max(...existingNums);
                nextNum = maxNum < 10000 ? 10000 : maxNum + 1;
            }
            newStockNo = String(nextNum);
        }
        
        // Utiliser le code du produit voulu si disponible, sinon générer
        const productCode = job.targetProductCode || generateProductCode(job);
        
        // Ajouter à l'inventaire seulement si pas de numéro de stock personnalisé
        // (car dans ce cas, l'ajout a déjà été fait lors de la fermeture de la palette)
        if (!job.customStockNo) {
            const processState = job.process ? (t[job.process] || job.process) : 'N/A';
            const qtyPL = job.producedQty || 0;
            const jobGrade = job.grade || '';
            addToInventory(newStockNo, job.wood, jobGrade, job.client, qtyPL, storageLocation, processState, productCode);
        }
        
        // Générer le code-barres SVG pour le numéro de STOCK
        const orderNumber = job.txn || job.id;
        const barcodeSVG = generateBarcodeSVG(newStockNo);
        
        // Récupérer la largeur et la couvrance
        const width = job.width || 'N/A';
        const coverage = job.coverage || 'N/A';
        
        // Créer le contenu du tag
        const tagContent = `
            <div style="width: 4in; height: 6in; padding: 12px; font-family: Arial, sans-serif; border: 2px solid #000; box-sizing: border-box;">
                <div style="text-align: center; margin-bottom: 8px;">
                    <h1 style="margin: 0; font-size: 20px; font-weight: bold;">TAG DE PRODUCTION</h1>
                </div>
                
                <div style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                    <div style="font-size: 11px; margin-bottom: 2px;"><strong>Numéro de Stock:</strong></div>
                    <div style="font-size: 24px; font-weight: bold; color: #cc0000;">${newStockNo}</div>
                    <div style="margin-top: 4px; text-align: center; height: 50px;">
                        ${barcodeSVG}
                    </div>
                    <div style="font-size: 10px; color: #666; margin-top: 8px;"><strong>No. Production:</strong> ${orderNumber}</div>
                </div>
                
                ${productCode ? `<div style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                    <div style="font-size: 11px; margin-bottom: 2px;"><strong>Code Produit:</strong></div>
                    <div style="font-size: 16px; font-weight: bold; color: #009900; font-family: monospace;">${productCode}</div>
                </div>` : ''}
                
                ${storageLocation ? `<div style="margin-bottom: 6px; border-bottom: 1px solid #333; padding-bottom: 4px;">
                    <div style="font-size: 11px; margin-bottom: 2px;"><strong>Localisation:</strong></div>
                    <div style="font-size: 16px; font-weight: bold; color: #ff8800;">${storageLocation}</div>
                </div>` : ''}
                
                <div style="margin-bottom: 4px;">
                    <div style="font-size: 12px;"><strong>Client:</strong> ${job.client}</div>
                </div>
                
                <div style="margin-bottom: 4px;">
                    <div style="font-size: 12px;"><strong>Produit:</strong> ${job.wood || 'N/A'}</div>
                </div>
                
                <div style="margin-bottom: 4px;">
                    <div style="font-size: 12px;"><strong>Largeur:</strong> ${width}${typeof width === 'number' ? ' po' : ''}</div>
                </div>
                
                <div style="margin-bottom: 4px;">
                    <div style="font-size: 12px;"><strong>Couvrance:</strong> ${coverage}${typeof coverage === 'number' ? ' pi²/gal' : ''}</div>
                </div>
                
                <div style="margin-bottom: 4px;">
                    <div style="font-size: 12px;"><strong>Dernier Traitement:</strong> ${job.process ? (t[job.process] || job.process) : 'N/A'}</div>
                </div>
                
                <div style="margin-bottom: 4px;">
                    <div style="font-size: 12px;"><strong>Quantité Produite:</strong> ${job.producedQty?.toFixed(2) || '0'} PL</div>
                </div>
                
                ${(() => {
                    if (!tallyList) return '';
                    const tallyLines = tallyList.split('\n').filter(l => l.trim());
                    if (tallyLines.length === 0) return '';
                    return `
                    <div style="margin-bottom: 6px; border-top: 1px solid #333; padding-top: 4px;">
                        <div style="font-size: 11px; margin-bottom: 4px;"><strong>Liste de Tally:</strong></div>
                        <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
                            <thead>
                                <tr style="background-color: #f3f4f6;">
                                    <th style="border: 1px solid #ccc; padding: 2px 4px; text-align: left;">#</th>
                                    <th style="border: 1px solid #ccc; padding: 2px 4px; text-align: left;">Dimensions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${tallyLines.map((line, i) => 
                                    '<tr><td style="border: 1px solid #ccc; padding: 2px 4px;">' + (i + 1) + '</td><td style="border: 1px solid #ccc; padding: 2px 4px;">' + line.trim() + '</td></tr>'
                                ).join('')}
                            </tbody>
                        </table>
                        <div style="font-size: 10px; color: #666; margin-top: 2px;"><strong>Total pièces:</strong> ${tallyLines.length}</div>
                    </div>`;
                })()}
                
                <div style="margin-top: 8px; text-align: center; font-size: 10px; color: #666;">
                    <div>Date: ${new Date().toLocaleDateString()}</div>
                    <div>Heure: ${new Date().toLocaleTimeString()}</div>
                </div>
            </div>
        `;
        
        // Ouvrir dans une nouvelle fenêtre pour impression
        const printWindow = window.open('', '_blank', 'width=600,height=900');
        printWindow.document.write(`
            <html>
            <head>
                <title>Tag de Production - ${newStockNo}</title>
                <style>
                    @page { size: 4in 6in; margin: 0; }
                    @media print {
                        body { margin: 0; }
                    }
                    body { margin: 0; padding: 0; }
                </style>
            </head>
            <body>
                ${tagContent}
                <script>
                    window.onload = function() {
                        window.print();
                    };
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    };

    const updateJobStatus = (id, status, producedQty, notes, log, extras) => {
        setProductionData(prev => {
            const next = prev.map(item => {
                if (item.id === id) {
                    let updates = { 
                        status, 
                        producedQty: producedQty !== undefined ? producedQty : item.producedQty, 
                        notes: notes !== undefined ? notes : item.notes,
                        logs: log ? [...(item.logs || []), log] : item.logs,
                        ...extras 
                    };
                    
                    // Variable pour savoir si on doit générer le code produit
                    let shouldGenerateCode = false;
                    
                    // Si le statut est 'completed' et qu'il y a plusieurs processus (steps)
                    if (status === 'completed' && item.steps && Array.isArray(item.steps) && item.steps.length > 1) {
                        const currentStepIndex = item.stepIndex || 0;
                        const nextStepIndex = currentStepIndex + 1;
                        
                        // Vérifier s'il reste des processus
                        if (nextStepIndex < item.steps.length) {
                            const nextProcess = item.steps[nextStepIndex];
                            const nextStation = stationConfig[nextProcess] || '';
                            
                            // Passer au prochain processus
                            updates = {
                                ...updates,
                                status: 'planning',  // Remettre en planning pour le prochain processus
                                stepIndex: nextStepIndex,
                                process: nextProcess,
                                station: nextStation,
                                producedQty: 0  // Réinitialiser la quantité pour le nouveau processus
                            };
                        } else {
                            // Tous les processus sont terminés - générer le code produit
                            shouldGenerateCode = true;
                        }
                    } else if (status === 'completed' && (!item.steps || item.steps.length <= 1)) {
                        // Production avec un seul processus terminée - générer le code produit
                        shouldGenerateCode = true;
                    }
                    
                    // Générer le code produit si nécessaire
                    if (shouldGenerateCode) {
                        const updatedItem = { ...item, ...updates };
                        setTimeout(() => generateProductCode(updatedItem), 150);
                    }
                    
                    return { ...item, ...updates };
                }
                return item;
            });
            try { localStorage.setItem('productionData', JSON.stringify(next)); } catch (_) {}
            try { window.dispatchEvent(new CustomEvent('productionDataUpdated')); } catch (_) {}
            return next;
        });
    };

    const deleteBatch = (id) => {
        const targetId = Number(id);
        setProductionData(prev => {
            // Safety check: Only allow deleting 'planning' items (matches UI visibility)
            const item = prev.find(i => Number(i.id) === targetId);
            if (item && item.status !== 'planning') {
                  // If status changed (e.g. started in another tab), abort delete
                  try { console.warn(`Cannot delete job ${targetId} with status ${item.status}`); } catch (_) {}
                  return prev;
            }

            const next = prev.filter(i => Number(i.id) !== targetId);
            try { localStorage.setItem('productionData', JSON.stringify(next)); } catch (_) {}
            try { window.dispatchEvent(new CustomEvent('productionDataUpdated')); } catch (_) {}
            return next;
        });
    };
    const assignStation = (id, st) => setProductionData(prev => prev.map(i => i.id === id ? { ...i, station: st } : i));

    const t = translations[lang];
    customProcesses.forEach(p => t[p.id] = p.label);
    woodTreatments.forEach(p => t[p.id] = p.label);

    // Exposer generateProductionTag globalement pour le tableau
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.generateProductionTagFromTable = generateProductionTag;
        }
    }, [generateProductionTag]);

    // Pour permettre l'ajout depuis ProductionView (hack simple)
    if (typeof window !== 'undefined') {
        window.addBatch = addBatch;
        window.assignStation = assignStation;
        window.openSubcontractModal = (job) => {
            setSubcontractModal({ show: true, job });
        };
        // Global helper to return from station mode to admin/production
        window.returnToAdminProduction = () => {
            try {
                const params = new URLSearchParams(window.location.search);
                params.delete('mode');
                const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
                window.history.replaceState({}, '', newUrl);
            } catch (_) {}
            try { window.dispatchEvent(new CustomEvent('productionDataUpdated')); } catch (_) {}
            setAppMode('admin');
            handleSetActiveTab('production');
        };
    }
    if(appMode !== 'admin') return <WorkerStationView t={t} stationId={appMode} productionData={productionData} updateJobStatus={updateJobStatus} stationConfig={stationConfig} inventory={inventory} deductFromInventory={deductFromInventory} addToInventory={addToInventory} adjustInventory={adjustInventory} generateProductionTag={generateProductionTag} generatePalletLabel={generatePalletLabel} generateProductCode={generateProductCode} customProcesses={customProcesses} woodTreatments={woodTreatments} />;

    // Refresh event when returning to Production tab or Admin mode
    useEffect(() => {
        try {
            if (activeTab === 'production') {
                window.dispatchEvent(new CustomEvent('productionDataUpdated'));
            }
        } catch (_) {}
    }, [activeTab]);
    useEffect(() => {
        try {
            if (appMode === 'admin' && activeTab === 'production') {
                window.dispatchEvent(new CustomEvent('productionDataUpdated'));
            }
        } catch (_) {}
    }, [appMode, activeTab]);

    return (
        <div className="flex min-h-screen bg-gray-50">
            {subcontractModal.show && subcontractModal.job && (
                <SubcontractPOModal 
                    job={subcontractModal.job} 
                    t={t}
                    productionData={productionData}
                    woodTreatments={woodTreatments}
                    updateJobStatus={updateJobStatus}
                    onClose={() => setSubcontractModal({ show: false, job: null })}
                    onConfirm={(vendor, poNumber) => {
                        // Assigner le poste et enregistrer le sous-traitant
                        if (subcontractModal.job) {
                            setProductionData(prev => prev.map(i => 
                                i.id === subcontractModal.job.id 
                                    ? { ...i, station: 'subcontractor', subcontractorName: vendor.name, subcontractorInfo: vendor, poNumber: poNumber }
                                    : i
                            ));
                        }
                        setSubcontractModal({ show: false, job: null });
                    }}
                />
            )}
            <Sidebar activeTab={activeTab} setActiveTab={handleSetActiveTab} t={t} />
            <div className="flex-1 ml-64">
                <Header t={t} lang={lang} setLang={setLang} />
                <div className="absolute top-4 right-4 z-50">
                  <button
                    className="px-3 py-1 bg-red-100 text-red-600 rounded shadow text-xs font-bold hover:bg-red-200"
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    Vider le localStorage
                  </button>
                </div>
                <main className="mt-16 p-8">
                    {activeTab === 'dashboard' && <DashboardView t={t} productionData={productionData} customProcesses={customProcesses} woodTreatments={woodTreatments} />}
                    {activeTab === 'production' && <ProductionView key="production" t={t} productionData={productionData} assignStation={assignStation} updateJobStatus={updateJobStatus} deleteBatch={deleteBatch} customProcesses={customProcesses} woodTreatments={woodTreatments} stationConfig={stationConfig} inventory={inventory} deductFromInventory={deductFromInventory} inventoryStates={inventoryStates} />}
                    {activeTab === 'inventory' && <InventoryView t={t} inventory={inventory} setInventory={setInventory} />}
                    {activeTab === 'rawWood' && <div className="p-12 text-center text-gray-400">Le tableau de traitement inventaire brut est désactivé.</div>}
                    {activeTab === 'dataEntry' && <DataEntryView t={t} addBatch={addBatch} setActiveTab={handleSetActiveTab} customProcesses={customProcesses} woodTreatments={woodTreatments} processParameters={processParameters} inventory={inventory} setInventory={setInventory} onDirtyChange={(dirty) => { invoiceDirtyRef.current = dirty; }} onSaveRef={(fn) => { saveInvoiceRef.current = fn; }} />}
                    {activeTab === 'horaire' && <HoraireView t={t} />}
                    {activeTab === 'employeeEfficiency' && <EmployeeEfficiencyView t={t} productionData={productionData} />}
                    {activeTab === 'settings' && <SettingsView t={t} appMode={appMode} setAppMode={setAppMode} stationConfig={stationConfig} setStationConfig={setStationConfig} customProcesses={customProcesses} setCustomProcesses={setCustomProcesses} woodTreatments={woodTreatments} setWoodTreatments={setWoodTreatments} inventoryStates={inventoryStates} setInventoryStates={setInventoryStates} processCodes={processCodes} setProcessCodes={setProcessCodes} processParameters={processParameters} setProcessParameters={setProcessParameters} />}
                </main>
            </div>
            <ChatWidget />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);