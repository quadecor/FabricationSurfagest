const { useState, useEffect } = React;

// --- Translations ---
const translations = {
    en: {
        // Sidebar
        systemOnline: "System Online",
        dashboard: "Dashboard",
        production: "Production",
        settings: "Settings",
        dataEntry: "Data Entry",
        rawWood: "Raw Wood Treatment",
        // Header
        headerTitle: "Production Overview",
        adminUser: "Admin User",
        // Dashboard Stats
        totalProduction: "Total Production",
        efficiency: "Efficiency",
        activeErrors: "Active Errors",
        revenue: "Revenue",
        vsLastMonth: "vs last month",
        productionTrend: "Daily Production Evolution",
        recentAlerts: "Recent Alerts",
        alertBeckage: "Calibration Required",
        descBeckage: "Station 1 - Precision deviation > 0.5mm",
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
        colProduct: "Product/Wood", // Renamed
        colProcess: "Process",
        colTreatment: "Treatment",
        colQty: "Quantity (pc)", // New
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
        statusRunning: "RUNNING",
        statusPaused: "PAUSED",
        statusError: "ERROR",
        statusPlanning: "PLANNING", 
        statusCompleted: "COMPLETED",
        procBeckage: "Beckage",
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
        pauseJob: "PAUSE",
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
        settingsMode: "Interface Mode",
        modeAdmin: "Administrator View",
        modeStation1: "Station 1 View",
        modeStation2: "Station 2 View",
        modeStation3: "Station 3 View",
        modeStation4: "Station 4 View",
        autoAssign: "Automatic Station Assignment",
        configDesc: "Map production processes to specific stations for auto-assignment.",
        processLabel: "Process Type",
        stationLabel: "Default Station",
        saveConfig: "Save Configuration",
        deleteLabel: "Delete",
        confirmDelete: "Are you sure you want to delete this item?",
        selectOption: "-- Select --",
    },
    fr: {
        // Sidebar
        systemOnline: "Système En Ligne",
        dashboard: "Tableau de Bord",
        production: "Production",
        settings: "Paramètre",
        dataEntry: "Saisie de Données",
        rawWood: "Traitement bois brut",
        // Header
        headerTitle: "Tableau de production",
        adminUser: "Administrateur",
        // Dashboard Stats
        totalProduction: "Production Totale",
        efficiency: "Efficacité",
        activeErrors: "Erreurs Actives",
        revenue: "Revenus",
        vsLastMonth: "vs mois dernier",
        productionTrend: "Évolution de la production journalière",
        recentAlerts: "Alertes Récentes",
        alertBeckage: "Requis Calibration",
        descBeckage: "Poste 1 - Écart précision > 0.5mm",
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
        colProduct: "Produit/Essence", // Renamed
        colProcess: "Procédé",
        colTreatment: "Traitement",
        colQty: "Quantité (pc)", // New
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
        statusRunning: "EN COURS",
        statusPaused: "PAUSE",
        statusError: "ERREUR",
        statusPlanning: "PLANIFICATION",
        statusCompleted: "TERMINÉ",
        procBeckage: "Beckage",
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
        pauseJob: "PAUSE",
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
        settingsMode: "Mode Interface",
        modeAdmin: "Vue Administrateur",
        modeStation1: "Vue Poste 1",
        modeStation2: "Vue Poste 2",
        modeStation3: "Vue Poste 3",
        modeStation4: "Vue Poste 4",
        autoAssign: "Assignation Automatique",
        configDesc: "Associez les procédés de fabrication à des postes spécifiques.",
        processLabel: "Type Procédé",
        stationLabel: "Poste par Défaut",
        saveConfig: "Sauvegarder Configuration",
        subcontractor: "Sous-traitant / Externe",
        printLabel: "Imprimer Étiquette",
        labelRecipe: "Recette / Procédé",
        labelSubOrder: "Commande Sous-traitance",
        labelStain: "Couleur Teinture",
        labelPaint: "Couleur Peinture",
        acknowledge: "ACCEPTER / RECONNAÎTRE",
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
                        <span className="block font-bold uppercase text-xs">Client / {t.colTxnId}</span>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold leading-tight">{job.client}</span>
                            <span className="text-sm font-bold text-gray-500">{job.txn}</span>
                        </div>
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
                        <span className="block font-bold uppercase text-xs">{t.labelQty}</span>
                        <span className="text-lg font-bold">{job.qty} PC</span>
                    </div>
                </div>

                {/* Specific Recipe Details (Stain/Paint) */}
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
                        <span className="font-bold text-xs uppercase tracking-widest">{t.colBatchId}</span>
                        <div className="text-2xl font-black font-mono mt-1">{job.id}</div>
                    </div>
                    <div className="h-24 w-full px-8">
                        {/* Using job.id as the value. Replce letters for simplicity if needed or ensure font support. */}
                        {/* Code 39 supports numbers and uppercase letters. */}
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
                    
                    /* Adjust sizes for label */
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
                    
                    /* Adjust sizes for label */
                    h1 { font-size: 1.8rem !important; }
                    .text-lg { font-size: 0.8rem !important; }
                    .text-2xl { font-size: 1.2rem !important; }
                    .text-4xl { font-size: 2rem !important; }
                }
            `}</style>
        </div>
    );
};

const Sidebar = ({ activeTab, setActiveTab, t }) => {
    const menuItems = [
        { id: 'dashboard', icon: 'fa-chart-line', label: t.dashboard },
        { id: 'rawWood', icon: 'fa-tree', label: t.rawWood },
        { id: 'production', icon: 'fa-industry', label: t.production },
        { id: 'dataEntry', icon: 'fa-edit', label: t.dataEntry },
        { id: 'settings', icon: 'fa-cog', label: t.settings }
    ];

    return (
        <aside className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto flex flex-col shadow-xl z-20">
            <div className="p-6 border-b border-gray-800 flex items-center gap-3">
                <img src="logo-surfagest_black%20png%2035.png" alt="Surfagest" className="w-1/2" />
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {menuItems.map(item => (
                        <li key={item.id}>
                            <button 
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all-300 ${
                                    activeTab === item.id 
                                    ? 'bg-[#51aff7] text-white shadow-lg shadow-[#51aff7]/30' 
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                }`}
                            >
                                <i className={`fa-solid ${item.icon} w-6`}></i>
                                <span className="font-medium">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-3 px-4 py-2 text-gray-400 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>{t.systemOnline}</span>
                </div>
            </div>
        </aside>
    );
};

const Header = ({ t, lang, setLang }) => (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 fixed left-64 right-0 top-0 z-10">
        
        {/* Left Side: Notifications & User */}
        <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-[#51aff7]">
                <i className="fa-regular fa-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                <div className="w-8 h-8 rounded-full bg-[#51aff7]/10 flex items-center justify-center text-[#51aff7] font-bold">
                    AD
                </div>
                <span className="text-sm font-medium text-gray-700">{t.adminUser}</span>
            </div>
        </div>

        {/* Center: Title */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-gray-800 font-bold text-2xl uppercase tracking-wide">{t.headerTitle}</h2>
        </div>
        
        {/* Right Side: Language */}
        <div className="flex bg-gray-100 rounded-lg p-1">
            <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${lang === 'en' ? 'bg-white shadow text-[#51aff7]' : 'text-gray-500 hover:text-gray-700'}`}
            >
                EN
            </button>
            <button 
                onClick={() => setLang('fr')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${lang === 'fr' ? 'bg-white shadow text-[#51aff7]' : 'text-gray-500 hover:text-gray-700'}`}
            >
                FR
            </button>
        </div>
    </header>
);

const StatCard = ({ title, value, change, icon, colorClass, t }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover transition-all-300">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-gray-500 text-sm mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
            </div>
            <div className={`p-3 rounded-lg ${colorClass}`}>
                <i className={`fa-solid ${icon} text-lg`}></i>
            </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
            {change && change.trim() !== '' && (
                <span className={change.startsWith && change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                    <i className={`fa-solid fa-arrow-${change.startsWith && change.startsWith('+') ? 'up' : 'down'} text-xs`}></i>
                    <span className="text-sm font-bold ml-1">{change}</span>
                </span>
            )}
            <span className="text-gray-400 text-xs">{t.vsLastMonth}</span>
        </div>
    </div>
);

const DashboardView = ({ t, productionData }) => {
    // Process Colors Configuration
    const processColors = {
        'procBeckage': 'bg-blue-500',
        'procSanding1': 'bg-yellow-400', 
        'procSanding2': 'bg-orange-500', 
        'procMoulding': 'bg-purple-500', 
        'procStaining': 'bg-red-500', 
        'procBrushing': 'bg-amber-700',
        'procPolishing': 'bg-teal-400',
        'procOiling': 'bg-lime-500',
        'procPainting': 'bg-green-500' // Using distinct colors
    };

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

    // Calculate stats
    const totalQty = productionData.reduce((acc, curr) => acc + parseInt(curr.qty || 0), 0);
    
    // Daily Stats (Last 5 Days)
    const getDays = () => {
        const dates = [];
        for (let i = 4; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            dates.push(d.toLocaleDateString());
        }
        return dates;
    };
    
    const displayDays = getDays();
    const dailyStats = displayDays.map(dateStr => {
        const dayProcesses = {};
        let dayTotal = 0;

        productionData.forEach(item => {
             const rawDate = item.assignedAt ? item.assignedAt.split(' ')[0] : new Date().toLocaleDateString();
             if (rawDate.trim() === dateStr.trim()) {
                 const qty = parseInt(item.qty || 0);
                 const proc = item.process || 'unknown';
                 dayProcesses[proc] = (dayProcesses[proc] || 0) + qty;
                 dayTotal += qty;
             }
        });

        return { date: dateStr, total: dayTotal, processes: dayProcesses };
    });

    // Calculate Monthly Stats for Comparison Chart (Current Month vs Previous Month)
    const getMonthlyStats = () => {
        const currentStats = {};
        const prevStats = {};
        
        // Initialize keys
        Object.keys(processColors).forEach(k => {
             currentStats[k] = 0;
             prevStats[k] = 0;
        });

        productionData.forEach(item => {
            const proc = item.process;
            // Only count valid processes that match our chart keys
            if (!proc || !processColors.hasOwnProperty(proc)) return;

            let loggedQty = 0;

            // Strategy 1: Accumulate from Logs (Time-based precision)
            if (item.logs && Array.isArray(item.logs)) {
                item.logs.forEach(log => {
                    // Check strict null/undefined to allow 0 quantities
                    if (log.timestamp && log.qty != null) {
                        const q = parseInt(log.qty);
                        if (!isNaN(q)) {
                            loggedQty += q;
                            const d = new Date(log.timestamp);
                            if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
                                 currentStats[proc] += q;
                            } else if (d.getMonth() === prevMonth && d.getFullYear() === prevYear) {
                                 prevStats[proc] += q;
                            }
                        }
                    }
                });
            }

            // Strategy 2: Handle Legacy/Unlogged Quantity (Hybrid Mode)
            // Any produced amount NOT accounted for in logs is attributed to the assignment date
            const totalProduced = parseInt(item.producedQty || 0);
            const remainder = totalProduced - loggedQty;

            if (remainder > 0) {
                let dateObj = new Date(); // Default to 'now' if date parse fails
                // Try parsing assignedAt
                if (item.assignedAt) {
                     const parts = item.assignedAt.split(/[\s/:]+/); 
                     if (parts.length >= 3) {
                         // Heuristic to detect MM/DD/YYYY vs DD/MM/YYYY
                         const p0 = parseInt(parts[0]);
                         if (p0 > 12) dateObj = new Date(parts[2], parts[1] - 1, parts[0]); // DD/MM/YYYY
                         else dateObj = new Date(parts[2], parts[0] - 1, parts[1]); // MM/DD/YYYY
                     }
                }

                if (dateObj.getMonth() === currentMonth && dateObj.getFullYear() === currentYear) {
                    currentStats[proc] += remainder;
                } else if (dateObj.getMonth() === prevMonth && dateObj.getFullYear() === prevYear) {
                    prevStats[proc] += remainder;
                }
            }
        });

        return { currentStats, prevStats };
    };

    const { currentStats, prevStats } = getMonthlyStats();

    // Calculate Totals for Top Cards
    const totalQtyCurrentMonth = Object.values(currentStats).reduce((a, b) => a + b, 0);
    const totalQtyPrevMonth = Object.values(prevStats).reduce((a, b) => a + b, 0);
    const prodDiff = totalQtyCurrentMonth - totalQtyPrevMonth;

    // Efficiency Calculation (Growth Rate)
    const efficiencyPct = totalQtyPrevMonth > 0 
        ? ((totalQtyCurrentMonth - totalQtyPrevMonth) / totalQtyPrevMonth * 100)
        : (totalQtyCurrentMonth > 0 ? 100 : 0);
    const efficiencyLabel = (efficiencyPct >= 0 ? "+" : "") + efficiencyPct.toFixed(1) + "%";
    
    // Find max for scaling
    const maxMonthlyVal = Math.max(
        ...Object.values(currentStats),
        ...Object.values(prevStats),
        10
    );

    // Dynamic Alerts from productionData (Active & History)
    const activeAlerts = productionData.filter(item => item.hasIssue || (item.status === 'error' && item.issueDescription));
    
    // Recent Alerts List (All items with an issue record, sorted by time)
    const allAlerts = productionData
        .filter(item => item.issueDescription)
        .sort((a, b) => (b.issueTimestamp || 0) - (a.issueTimestamp || 0));

    const errorsCurrentMonth = productionData.filter(item => {
        if (!item.issueTimestamp) return false;
        const d = new Date(item.issueTimestamp);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    }).length;

    const errorsLastMonth = productionData.filter(item => {
        if (!item.issueTimestamp) return false;
        const d = new Date(item.issueTimestamp);
        return d.getMonth() === prevMonth && d.getFullYear() === prevYear;
    }).length;

    const errorDiff = errorsCurrentMonth - errorsLastMonth;
    const errorChangeLabel = (errorDiff >= 0 ? "+" : "") + errorDiff;


    const recentAlertsDisplay = allAlerts.map(alert => ({
        title: `Problème Lot #${alert.id}`,
        desc: alert.issueDescription,
        time: alert.issueTimestamp ? new Date(alert.issueTimestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) + ' ' + new Date(alert.issueTimestamp).toLocaleDateString() : "À l'instant",
        color: alert.hasIssue ? "text-red-500" : "text-green-500",
        icon: alert.hasIssue ? "fa-circle-exclamation" : "fa-circle-check"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard t={t} title={t.totalProduction} value={totalQtyCurrentMonth.toString()} change={(prodDiff >= 0 ? "+" : "") + prodDiff} icon="fa-box" colorClass="bg-[#51aff7]/10 text-[#51aff7]" />
            <StatCard t={t} title={t.efficiency} value={efficiencyLabel} change="" icon="fa-tachometer-alt" colorClass={efficiencyPct >= 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"} />
            <StatCard t={t} title={t.activeErrors} value={errorsCurrentMonth.toString()} change={(errorsCurrentMonth > 0 ? "+" : "") + errorDiff} icon="fa-exclamation-triangle" colorClass={errorsCurrentMonth > 0 ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-400"} />
            <StatCard t={t} title={t.revenue} value="$42.5k" change="+8.4%" icon="fa-dollar-sign" colorClass="bg-purple-100 text-purple-600" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">{t.productionTrend}</h3>
                
                {/* Legend */}
                <div className="flex gap-4 mb-4 text-xs font-medium flex-wrap">
                     <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded bg-blue-500"></span><span className="text-gray-600 font-bold">{t.currentMonth || "Ce mois"}</span>
                     </div>
                     <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded bg-gray-300"></span><span className="text-gray-600 font-bold">{t.prevMonth || "Mois passé"}</span>
                     </div>
                </div>

                <div className="h-64 bg-gray-50 rounded p-4 flex items-end justify-around gap-2 overflow-x-auto">
                    {/* Render Grouped Bars for each Process */}
                    {Object.keys(processColors).map(procKey => {
                        const curVal = currentStats[procKey] || 0;
                        const prevVal = prevStats[procKey] || 0;
                        const curHeight = (curVal / maxMonthlyVal) * 100;
                        const prevHeight = (prevVal / maxMonthlyVal) * 100;

                        return (
                             <div key={procKey} className="flex-1 flex flex-col items-center gap-2 group min-w-[60px] h-full">
                                <div className="flex items-end justify-center w-full gap-1 flex-1 relative">
                                    {/* Previous Month Bar */}
                                    <div 
                                        className="w-1/3 bg-gray-300 rounded-t transition-all duration-1000 relative group-hover:bg-gray-400"
                                        style={{height: `${prevHeight}%`}}
                                    >
                                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 font-bold opacity-0 group-hover:opacity-100">{prevVal}</span>
                                    </div>
                                    {/* Current Month Bar */}
                                    <div 
                                        className={`w-1/3 ${processColors[procKey] || 'bg-blue-500'} rounded-t transition-all duration-1000 relative hover:brightness-110`}
                                        style={{height: `${curHeight}%`}}
                                    >
                                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-gray-800 font-bold">{curVal}</span>
                                    </div>
                                </div>
                                <span className="text-[10px] uppercase font-bold text-gray-500 truncate w-full text-center" title={t[procKey]}>
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
                        <div key={i} className="flex gap-4 items-start p-3 hover:bg-gray-50 rounded-lg transition">
                            <i className={`fa-solid ${alert.icon} ${alert.color} mt-1`}></i>
                            <div>
                                <h4 className="text-sm font-bold text-gray-800">{alert.title}</h4>
                                <p className="text-xs text-gray-500">{alert.desc}</p>
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
    { id: 'procBeckage', label: 'Beckage' },
    { id: 'procSanding1', label: 'Sablage (1)' },
    { id: 'procSanding2', label: 'Sablage (2)' },
    { id: 'procMoulding', label: "Moulurage" },
    { id: 'procStaining', label: 'Teinture' },
    { id: 'procBrushing', label: 'Brossage' },
    { id: 'procPolishing', label: 'Polissage' },
    { id: 'procOiling', label: 'Huilage' },
    { id: 'procPainting', label: 'Peinture' },
];

// Define Stations Centrally
const stationDefinitions = [
    { id: 'station1', labelKey: 'station1', icon: 'fa-scissors' },
    { id: 'station2', labelKey: 'station2', icon: 'fa-layer-group' },
    { id: 'station3', labelKey: 'station3', icon: 'fa-shapes' },
    { id: 'station4', labelKey: 'station4', icon: 'fa-paint-roller' },
];

const DataEntryView = ({ t, addBatch, setActiveTab, customProcesses = [], woodTreatments = [] }) => {
    const [formData, setFormData] = useState({
        client: '',
        txn: '',
        qty: '',
        wood: '',
        date: '',
        stainColor: '',
        paintColor: ''
    });

    // Valid Raw Wood Form State
    const [rawFormData, setRawFormData] = useState({
        orderNo: '',
        supplier: '',
        species: '',
        qtyPMP: '',
        process: ''
    });

    // Multi-process steps
    const [steps, setSteps] = useState([]);

    const toggleStep = (procId) => {
        if (steps.includes(procId)) {
            setSteps(steps.filter(s => s !== procId));
        } else {
            // Sort according to standard order
            const newSteps = [...steps, procId];
            newSteps.sort((a,b) => {
                const idxA = processOrder.findIndex(p => p.id === a);
                const idxB = processOrder.findIndex(p => p.id === b);
                return idxA - idxB;
            });
            setSteps(newSteps);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRawChange = (e) => {
        const { name, value } = e.target;
        setRawFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation basic
        if(!formData.client || !formData.qty || steps.length === 0) {
            alert("Please select at least one process.");
            return;
        }

        // Create the new batch object
        const newBatch = {
            ...formData,
            steps: steps, // Array of process IDs
            process: steps[0], // Start with the first process
            stepIndex: 0 // Track progress
        };

        addBatch(newBatch);
        
        // Reset
        setFormData({
            client: '',
            txn: '',
            qty: '',
            wood: '',
            date: '',
            stainColor: '',
            paintColor: ''
        });
        setSteps([]);

        // Redirect to production to see result
        setActiveTab('production');
    };

    const handleRawSubmit = (e) => {
        e.preventDefault();
        // Validation: Only OrderNo is strictly required now, process can be empty
        if(!rawFormData.orderNo) {
            alert("Order Number is required.");
            return;
        }

        const newRawBatch = {
            client: rawFormData.supplier, // Supplier maps to client field
            txn: rawFormData.orderNo,      // OrderNo maps to txn
            qty: 0,                        
            qtyPMP: rawFormData.qtyPMP,
            wood: rawFormData.species,
            process: rawFormData.process,
            status: 'planning',
            station: null, 
            progress: 0,
            date: new Date().toLocaleDateString()
        };

        addBatch(newRawBatch);
        
        setRawFormData({
            orderNo: '',
            supplier: '',
            species: '',
            qtyPMP: '',
            process: ''
        });

        setActiveTab('rawWood'); // Redirect to raw wood view
    };

    const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#51aff7] focus:border-transparent transition";
    const labelClass = "block text-sm font-medium text-gray-700 mb-1";

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.enterDataTitle}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Client */}
                    <div>
                        <label className={labelClass}>{t.labelClient}</label>
                        <input name="client" type="text" value={formData.client} onChange={handleChange} className={inputClass} placeholder="Ex: Acme Corp" required />
                    </div>

                    {/* Transaction */}
                    <div>
                        <label className={labelClass}>{t.labelTxn}</label>
                        <input name="txn" type="text" value={formData.txn} onChange={handleChange} className={inputClass} placeholder="Ex: TXN-123456" />
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className={labelClass}>{t.labelQty}</label>
                        <input name="qty" type="number" value={formData.qty} onChange={handleChange} className={inputClass} placeholder="100" required />
                    </div>

                    {/* Wood Species */}
                    <div>
                        <label className={labelClass}>{t.labelWood}</label>
                        <input name="wood" type="text" value={formData.wood} onChange={handleChange} className={inputClass} placeholder="Ex: All, Maple..." />
                    </div>

                    {/* PROCESS SELECTION (Multi) */}
                    <div className="md:col-span-2">
                        <label className={labelClass}>{t.labelProcess} (Sélection Multiple - Ordre Automatique)</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {[...processOrder, ...customProcesses].map(proc => (
                                <button
                                    key={proc.id}
                                    type="button"
                                    onClick={() => toggleStep(proc.id)}
                                    className={`px-4 py-3 rounded-lg text-sm font-bold border transition text-left relative overflow-hidden ${
                                        steps.includes(proc.id) 
                                        ? 'bg-[#51aff7] text-white border-[#51aff7] shadow-lg shadow-blue-500/30' 
                                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                                    }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>{t[proc.id] || proc.label}</span>
                                        {steps.includes(proc.id) && (
                                            <span className="bg-white/20 px-2 rounded-full text-xs">
                                                {steps.indexOf(proc.id) + 1}
                                            </span>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Date */}
                    <div>
                        <label className={labelClass}>{t.labelDate}</label>
                        <input name="date" type="date" value={formData.date} onChange={handleChange} className={inputClass} />
                    </div>

                     {/* Stain Color (Visible only if Staining is selected) */}
                    {steps.includes('procStaining') && (
                        <div>
                            <label className={labelClass}>{t.labelStain}</label>
                            <input name="stainColor" type="text" value={formData.stainColor} onChange={handleChange} className={inputClass} placeholder="Ex: Golden Oak" />
                        </div>
                    )}

                    {/* Paint Color (Visible only if Painting is selected) */}
                    {steps.includes('procPainting') && (
                        <div>
                            <label className={labelClass}>{t.labelPaint}</label>
                            <input name="paintColor" type="text" value={formData.paintColor} onChange={handleChange} className={inputClass} placeholder="Ex: RAL 9010" />
                        </div>
                    )}
                </div>

                <div className="pt-4 flex justify-end">
                    <button type="submit" className="px-6 py-3 bg-[#51aff7] text-white font-bold rounded-lg shadow hover:bg-blue-600 transition transform hover:-translate-y-1">
                        <i className="fa-solid fa-plus-circle mr-2"></i>
                        {t.btnAddData}
                    </button>
                </div>
            </form>
            </div>

            {/* RAW WOOD DATA ENTRY SECTION */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-orange-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <i className="fa-solid fa-tree text-orange-600"></i>
                    {t.titleRawWood}
                </h2>
                <form onSubmit={handleRawSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {/* Order No */}
                         <div>
                            <label className={labelClass}>{t.labelOrderNo}</label>
                            <input name="orderNo" type="text" value={rawFormData.orderNo} onChange={handleRawChange} className={inputClass} placeholder="CMD-123" required />
                         </div>
                         {/* Supplier */}
                         <div>
                            <label className={labelClass}>{t.labelSupplier}</label>
                            <input name="supplier" type="text" value={rawFormData.supplier} onChange={handleRawChange} className={inputClass} placeholder="Fournisseur ABC" />
                         </div>
                         {/* Species */}
                         <div>
                            <label className={labelClass}>{t.labelSpecies}</label>
                            <input name="species" type="text" value={rawFormData.species} onChange={handleRawChange} className={inputClass} placeholder="Erable, Chêne..." />
                         </div>
                         {/* Qty PMP */}
                         <div>
                            <label className={labelClass}>{t.labelQtyPMP}</label>
                            <input name="qtyPMP" type="number" value={rawFormData.qtyPMP} onChange={handleRawChange} className={inputClass} placeholder="1000" />
                         </div>
                         {/* State/Process Dropdown */}
                         <div className="md:col-span-2">
                            <label className={labelClass}>{t.labelState}</label>
                            <div className="relative">
                                <select name="process" value={rawFormData.process} onChange={handleRawChange} className={inputClass}>
                                    <option value="">-- Sélectionnez l'étape --</option>
                                    {woodTreatments.map(wt => (
                                        <option key={wt.id} value={wt.id}>{wt.label}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow hover:bg-orange-600 transition transform hover:-translate-y-1">
                            <i className="fa-solid fa-plus-circle mr-2"></i>
                            {t.btnAddRawWood}
                        </button>
                    </div>
                </form>
             </div>
        </div>
    );
};

const SubcontractPOModal = ({ job, t, onClose }) => {
    const today = new Date().toLocaleDateString();
    
    // State for editable fields
    const [vendor, setVendor] = useState({
        name: "SOUS-TRAITANT GÉNÉRAL",
        attention: "Département de production",
        address: "123 Rue Industriel, QC"
    });

    const [destination, setDestination] = useState({
        name: "SURFAGEST PRODUCTION", // Default is our company
        address: "123 Rue de l'Industrie, Saint-Georges, QC G5Y 5C3",
        contact: "Réception Marchandise"
    });

    // Mock list of vendors - in a real app this would come from settings/DB
    const vendors = [
        { name: "SOUS-TRAITANT GÉNÉRAL", attention: "Production", address: "123 Rue Industriel, QC", email: "production@soustraitant.com" },
        { name: "ATELIER BOIS PRO", attention: "Jean-Pierre", address: "456 Av du Bois, QC", email: "jp@atelierboispro.com" },
        { name: "PEINTURE EXPERT INC", attention: "Service commande", address: "789 Boul. Couleur, QC", email: "commandes@peintureexpert.com" }
    ];

    // Mock list of destinations
    const destinations = [
        { name: "SURFAGEST PRODUCTION", address: "123 Rue de l'Industrie, Saint-Georges, QC G5Y 5C3", contact: "Réception Marchandise" },
        { name: job.client, address: "Adresse Client (Sur dossier)", contact: "Expédition Directe" }
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
                             <img src="logo-surfagest_black%20png%2035.png" alt="Surfagest" className="h-16 mb-4" />
                             <div className="text-sm text-gray-600">
                                <p>123 Rue de l'Industrie</p>
                                <p>Saint-Georges, QC G5Y 5C3</p>
                                <p>Tél: (418) 555-0123</p>
                             </div>
                        </div>
                        <div className="text-right">
                            <h1 className="text-4xl font-black text-gray-800 uppercase mb-2">Bon de Commande</h1>
                            <p className="text-xl font-bold text-gray-600">#{job.txn || job.id}</p>
                            <p className="text-gray-500 mt-2">Date: {today}</p>
                        </div>
                    </div>

                    {/* Vendor / Ship To */}
                     <div className="flex justify-between gap-12 mb-8">
                        <div className="w-1/2">
                            <h3 className="font-bold uppercase text-gray-500 text-xs tracking-wider mb-2">Fournisseur (Sous-traitant)</h3>
                            
                            {/* Editable Vendor Selector (Hidden in print) */}
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

                            {/* Editable Destination Selector (Hidden in print) */}
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
                                    {(job.stainColor || job.paintColor) && (
                                        <p className="text-sm font-bold mt-1">
                                            Spécification: {job.stainColor || job.paintColor}
                                        </p>
                                    )}
                                </td>
                                <td className="p-3">{t[job.process] || job.process}</td>
                                <td className="p-3 text-right font-bold">{job.qty} PC</td>
                                <td className="p-3 text-right">{job.date || "ASAP"}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Notes */}
                    <div className="mb-12">
                         <h3 className="font-bold uppercase text-gray-500 text-xs tracking-wider mb-2">Notes & Instructions</h3>
                         <div className="p-4 border border-gray-200 rounded min-h-[100px] text-sm text-gray-600 italic">
                            Veuillez svp inclure ce bon de commande avec la facture.
                            Respecter les standards de qualité Surfagest.
                            Emballage sécuritaire requis pour le transport de retour.
                         </div>
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
                <div className="mt-6 grid grid-cols-2 gap-4 print:hidden">
                     <button 
                        onClick={onClose}
                        className="py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition"
                    >
                        <i className="fa-solid fa-times mr-2"></i>
                        Annuler
                    </button>
                    
                    <button 
                        onClick={() => {
                            alert("⚠️ LIMITATION DU NAVIGATEUR :\n\nPour des raisons de sécurité, le navigateur ne peut pas insérer automatiquement la pièce jointe.\n\nPROCÉDURE AVEC EM CLIENT :\n1. Cliquez sur 'Imprimer / Sauvegarder PDF' et enregistrez le fichier.\n2. Le courriel qui s'ouvrira sera un brouillon.\n3. Glissez-déposez le PDF enregistré directement dans la fenêtre du courriel.");
                            
                            const subject = `Bon de Commande ${job.txn || job.id}`;
                            const body = `Bonjour,\n\nVeuillez trouver ci-joint le bon de commande pour le lot #${job.id}.\n\nMerci,\n\nSurfagest Production`;
                            window.location.href = `mailto:${vendor.email || ''}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        }}
                        className="py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
                    >
                        <i className="fa-solid fa-envelope mr-2"></i>
                        Envoyer par Courriel
                    </button>

                    <button 
                        onClick={() => {
                            // Use html2pdf for reliable filename generation and direct download
                            const element = document.getElementById('purchase-order');
                            const filename = `BonCommande_${job.id}_${job.txn || 'NoTxn'}.pdf`;
                            
                            const opt = {
                                margin:       0.5,
                                filename:     filename,
                                image:        { type: 'jpeg', quality: 0.98 },
                                html2canvas:  { scale: 2 },
                                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                            };
                            
                            // Check if html2pdf is loaded
                            if (window.html2pdf) {
                                window.html2pdf().set(opt).from(element).save();
                            } else {
                                // Fallback if library fails loading
                                const oldTitle = document.title;
                                document.title = filename.replace('.pdf', '');
                                window.print();
                                setTimeout(() => document.title = oldTitle, 1000);
                            }
                        }}
                        className="col-span-2 py-3 bg-[#51aff7] text-white font-bold rounded-lg hover:bg-blue-600 transition"
                    >
                        <i className="fa-solid fa-file-pdf mr-2"></i>
                        Télécharger PDF / Imprimer
                    </button>
                </div>
            </div>
             <style>{`
                @media print {
                    @page { size: auto; margin: 0; }
                    
                    /* Hide EVERYTHING by default */
                    body * { 
                        visibility: hidden; 
                    }
                    
                    /* The modal container - make it visible and position it absolutely at top-left */
                    .fixed.inset-0.z-\\[100\\] { 
                        visibility: visible !important;
                        position: absolute !important;
                        left: 0 !important;
                        top: 0 !important;
                        width: 100% !important;
                        height: auto !important;
                        z-index: 9999 !important;
                        background: white !important;
                        display: block !important;
                    }

                    /* The content card inside the modal */
                    .fixed.inset-0.z-\\[100\\] > div {
                        visibility: visible !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        margin: 0 !important;
                        padding: 0.5in !important;
                        box-shadow: none !important;
                        border: none !important;
                        position: static !important; /* Let content flow naturally */
                    }

                    /* All children of the modal key elements must be visible */
                    .fixed.inset-0.z-\\[100\\] * { 
                        visibility: visible !important; 
                    }

                    /* Utilities */
                    .print\\:hidden { display: none !important; }
                    .print\\:border-none { border: none !important; }

                    /* Typography & Elements */
                    h1 { font-size: 24pt !important; }
                    h3 { font-size: 14pt !important; }
                    p, td, th, div, span { font-size: 11pt !important; color: black !important; }
                    img { max-width: 200px !important; }

                    /* Table Styling */
                    table { border-collapse: collapse !important; width: 100% !important; }
                    th { border-bottom: 2px solid black !important; background-color: #f3f4f6 !important; font-weight: bold !important; -webkit-print-color-adjust: exact; }
                    td { border-bottom: 1px solid #ddd !important; }
                }
            `}</style>
        </div>
    );
};

const ProductionView = ({ t, productionData, assignStation, updateJobStatus, deleteBatch, isRawWood = false, woodTreatments = [], stationConfig = {} }) => {
    const [printingJob, setPrintingJob] = useState(null);
    const [printingPO, setPrintingPO] = useState(null);
    // Default: Show all statuses except completed to reduce clutter? Or all? Let's show all by default per request logic
    const [activeStatuses, setActiveStatuses] = useState(['planning', 'running', 'paused', 'error', 'completed']);
    const [filterProcess, setFilterProcess] = useState('all');
    
    // Live Clock State
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Alert Logic
    const alerts = productionData.filter(item => item.hasIssue || (item.status === 'error' && item.issueDescription));

    // Local state to track which row is being edited for Product Code
    const [editingProductCodeId, setEditingProductCodeId] = useState(null);
    const [tempProductCode, setTempProductCode] = useState('');

    const startEditingProductCode = (id, currentCode) => {
        setEditingProductCodeId(id);
        setTempProductCode(currentCode || '');
    };

    const saveProductCode = (id, status) => {
        updateJobStatus(id, status, undefined, undefined, null, { productCode: tempProductCode });
        setEditingProductCodeId(null);
    };

    const toggleStatus = (status) => {
        if (activeStatuses.includes(status)) {
             setActiveStatuses(activeStatuses.filter(s => s !== status));
        } else {
            setActiveStatuses([...activeStatuses, status]);
        }
    };

    // Filter Logic
    const filteredData = productionData.filter(item => {
        // Status checks match the UI display logic
        let visualStatus = 'planning';
        if (item.status === 'completed' || item.progress === 100) visualStatus = 'completed';
        else if (item.status === 'running' || (item.steps && item.steps.length > 1 && item.stepIndex > 0)) visualStatus = 'running';
        else if (item.status === 'paused') visualStatus = 'paused';
        else if (item.status === 'error') visualStatus = 'error';

        if (!activeStatuses.includes(visualStatus)) return false;
        if (filterProcess !== 'all' && item.process !== filterProcess) return false;
        return true;
    });

    return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {printingJob && <SubcontractLabelModal job={printingJob} t={t} onClose={() => setPrintingJob(null)} />}
        {printingPO && <SubcontractPOModal job={printingPO} t={t} onClose={() => setPrintingPO(null)} />}
        
        {/* Status Bar & Alerts Combined Container */}
        <div className={`border-b ${alerts.length > 0 ? 'bg-red-50 border-red-100' : 'bg-gray-50 border-gray-100'} transition-colors`}>
            {/* Main Title Row - Everything in one line if possible */}
            <div className={`p-4 flex flex-col xl:flex-row justify-between xl:items-center gap-4`}>
                <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="font-bold text-gray-800 text-lg whitespace-nowrap">
                        {isRawWood ? t.rawWood.toUpperCase() : t.activeLines}
                    </h3>
                    
                    {/* Date Time Pill - Compact */}
                    <div className="flex items-center gap-3 bg-white p-1.5 rounded-lg border border-gray-200 shadow-sm text-xs">
                         <div className="flex items-center gap-2 text-gray-600 font-bold px-2 border-r border-gray-200">
                            <i className="fa-regular fa-calendar text-[#51aff7]"></i>
                            <span className="capitalize">{currentTime.toLocaleDateString(undefined, {weekday: 'short', day: 'numeric', month: 'short'})}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 font-mono font-bold px-2">
                            <i className="fa-regular fa-clock text-[#51aff7]"></i>
                            {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                    </div>

                    {/* Alert Badge Summary (Click to expand logic could apply, for now just shows count) */}
                    {alerts.length > 0 && (
                         <span className="bg-red-100 text-red-600 px-3 py-1.5 rounded-full text-xs font-bold animate-pulse flex items-center gap-2 shadow-sm border border-red-200">
                            <i className="fa-solid fa-circle-exclamation"></i>
                            {alerts.length} problème(s) en cours
                         </span>
                    )}
                </div>

                <div className="flex flex-wrap items-center gap-3 justify-end">
                    {/* Status Filter Toggles */}
                    <div className="flex bg-white rounded-lg p-1 gap-1 border border-gray-200">
                        {['planning', 'running', 'paused', 'error', 'completed'].map(status => (
                            <button
                                key={status}
                                onClick={() => toggleStatus(status)}
                                className={`px-3 py-1.5 text-xs font-bold rounded-md transition ${
                                    activeStatuses.includes(status)
                                    ? 'bg-gray-800 text-white shadow-sm'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                            >
                                {status === 'planning' ? t.statusPlanning :
                                 status === 'running' ? t.statusRunning :
                                 status === 'paused' ? t.statusPaused :
                                 status === 'error' ? t.statusError :
                                 t.statusCompleted}
                            </button>
                        ))}
                    </div>

                    {/* Process Filter */}
                    <select 
                        value={filterProcess}
                        onChange={(e) => setFilterProcess(e.target.value)}
                        className="p-1.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#51aff7] bg-white h-full"
                    >
                        <option value="all">All Processes</option>
                        {processOrder.map(proc => (
                            <option key={proc.id} value={proc.id}>{t[proc.id] || proc.label}</option>
                        ))}
                    </select>

                     <div className="text-xs font-bold bg-gray-200 text-gray-600 px-2 py-1 rounded ml-2">
                        {filteredData.length} / {productionData.length}
                    </div>
                </div>
            </div>

            {/* Detailed Alert List (Collapsible / Visible only on ALERT) */}
            {alerts.length > 0 && (
                <div className="px-4 pb-4 space-y-2">
                    {alerts.map(alert => (
                        <div key={alert.id} className="flex flex-col md:flex-row justify-between items-center bg-white p-2 rounded border border-red-200 shadow-sm gap-2">
                             <div className="text-sm flex items-center gap-2 flex-1">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse hidden md:block"></span>
                                <span className="font-bold text-red-700 whitespace-nowrap">Lot #{alert.id}</span>
                                <span className="hidden md:inline text-gray-300">|</span>
                                <span className="font-bold text-gray-700">{alert.client}</span>
                                <span className="text-gray-400 text-xs mx-2 border-l border-r border-gray-200 px-2 whitespace-nowrap">
                                    <i className="fa-regular fa-clock mr-1"></i>
                                    {alert.issueTimestamp ? new Date(alert.issueTimestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Now'}
                                </span> 
                                <span className="text-red-600 font-medium italic truncate">{alert.issueDescription || "Erreur signalée"}</span>
                             </div>
                             <button 
                                onClick={() => updateJobStatus(alert.id, 'paused', undefined, undefined, null, { hasIssue: false })}
                                className="w-full md:w-auto text-xs px-4 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 font-bold transition flex items-center justify-center gap-2 shadow-sm shadow-red-500/30"
                             >
                                <i className="fa-solid fa-check"></i>
                                {t.acknowledge || "ACKNOWLEDGE"}
                             </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <div className="overflow-x-auto">
        <table className="w-full">
            <thead className="bg-[#51aff7]">
                <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">
                        {isRawWood ? `${t.colOrderNo} / ${t.colStockNo}` : `${t.colBatchId} / ${t.colTxnId}`}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">
                        {isRawWood ? t.colSupplier : t.colClient}
                    </th>
                    {/* Removed duplicate column header for TXN since we combined logic */}
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase hidden"></th> 
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{t.colProduct}</th>
                    {isRawWood && (
                        <>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{t.colThickness}</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{t.colStateRaw}</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{t.colQtyPMP}</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{t.colQtySqFt}</th>
                        </>
                    )}
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{t.colQty}</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{isRawWood ? t.colTreatment : t.colProcess}</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{isRawWood ? t.colDateTreatment : t.colDate}</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{t.colStatus}</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{t.colProgress}</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase">{t.colStation}</th>
                    <th className="px-6 py-4 w-10"></th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {filteredData.map((item, i) => (
                    <tr key={item.id} className={`hover:bg-gray-50 transition ${item.station === 'subcontractor' ? 'bg-orange-50/50' : ''}`}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                             {/* Display logic: Local Process = Show TXN (Order #), Subcontractor = Show Internal Production ID */}
                             {item.station !== 'subcontractor' ? (
                                <div className="flex flex-col">
                                    <span className="font-mono font-bold text-[#51aff7] text-lg">{item.txn}</span>
                                    <span className="text-xs text-gray-400">#{item.id}</span>
                                </div>
                             ) : (
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-800 text-lg">#{item.id}</span>
                                    <span className="text-xs text-gray-400 font-mono">{item.txn}</span>
                                </div>
                             )}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-700">{item.client}</td>
                        <td className="hidden"></td> {/* Hidden cell to maintain alignment after removing header */}
                        <td className="px-6 py-4 text-sm text-gray-600">
                             <div className="mb-1">{item.wood || "N/A"}</div>
                             {/* Editable Product Code */}
                             {editingProductCodeId === item.id ? (
                                <div className="flex items-center gap-1">
                                    <input 
                                        type="text" 
                                        value={tempProductCode} 
                                        onChange={(e) => setTempProductCode(e.target.value)} 
                                        className="w-24 p-1 text-xs border rounded shadow-sm focus:ring-2 focus:ring-blue-300 outline-none"
                                        autoFocus
                                        onBlur={() => saveProductCode(item.id, item.status)}
                                        onKeyDown={(e) => e.key === 'Enter' && saveProductCode(item.id, item.status)}
                                    />
                                    <button onMouseDown={() => saveProductCode(item.id, item.status)} className="text-green-500 hover:text-green-700">
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                </div>
                             ) : (
                                <div 
                                    onClick={() => startEditingProductCode(item.id, item.productCode)}
                                    className="text-xs text-gray-500 bg-gray-50 hover:bg-yellow-50 px-2 py-1 rounded border border-transparent hover:border-yellow-300 cursor-pointer inline-flex items-center gap-1 transition-all"
                                    title="Click to edit Product Code/Stock"
                                >
                                    <i className="fa-solid fa-tag text-gray-400"></i>
                                    <span className="font-mono font-bold">{item.productCode || "Ajouter Inventaire"}</span>
                                </div>
                             )}
                        </td>
                        
                        {isRawWood && (
                            <>
                                <td className="px-6 py-4 text-sm">
                                    <input 
                                        type="text" 
                                        defaultValue={item.thickness || ''}
                                        onBlur={(e) => updateJobStatus(item.id, item.status, undefined, undefined, null, { thickness: e.target.value })}
                                        className="w-16 p-1 border border-gray-200 rounded text-xs focus:ring-2 focus:ring-[#51aff7] outline-none"
                                        placeholder='Ep.'
                                    />
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <div className="font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded inline-block text-xs">
                                        {woodTreatments.find(wt => wt.id === item.process)?.label || t[item.process] || item.process}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                     <input 
                                        type="number" 
                                        defaultValue={item.qtyPMP || ''}
                                        onBlur={(e) => updateJobStatus(item.id, item.status, undefined, undefined, null, { qtyPMP: e.target.value })}
                                        className="w-20 p-1 border border-gray-200 rounded text-xs font-bold text-gray-700 focus:ring-2 focus:ring-[#51aff7] outline-none"
                                        placeholder="0"
                                    />
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700 font-bold">
                                    {(item.qtyPMP && item.thickness) ? (parseFloat(item.qtyPMP) / (parseFloat(item.thickness) || 1)).toFixed(2) : '-'}
                                </td>
                            </>
                        )}

                        <td className="px-6 py-4 text-sm text-gray-600 font-bold">
                             {isRawWood ? (
                                <input 
                                    type="number" 
                                    defaultValue={item.qty || ''}
                                    onBlur={(e) => updateJobStatus(item.id, item.status, undefined, undefined, null, { qty: e.target.value })}
                                    className="w-16 p-1 border border-gray-200 rounded text-xs font-bold text-gray-700 focus:ring-2 focus:ring-[#51aff7] outline-none"
                                    placeholder="0"
                                />
                             ) : (
                                item.qty
                             )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                             {isRawWood ? (
                                <select 
                                    value={item.treatment || ""}
                                    onChange={(e) => {
                                        const newTreatment = e.target.value;
                                        const autoStation = stationConfig[newTreatment];
                                        const now = new Date();
                                        const timestamp = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                                        
                                        const updates = { treatment: newTreatment };
                                        if (autoStation) {
                                            updates.station = autoStation;
                                            updates.assignedAt = timestamp;
                                        }
                                        
                                        updateJobStatus(item.id, item.status, undefined, undefined, null, updates);
                                    }}
                                    className="p-1 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-[#51aff7] outline-none font-bold text-gray-800"
                                >
                                    <option value="">{t.selectOption || "-- Sélectionner --"}</option>
                                    {woodTreatments.map(wt => (
                                        <option key={wt.id} value={wt.id}>{wt.label}</option>
                                    ))}
                                </select>
                             ) : (
                                <>
                                    <div className="font-bold text-gray-800">{t[item.process] || item.process}</div>
                                    {item.steps && item.steps.length > 1 && (
                                        <div className="text-xs text-[#51aff7] font-bold mt-1 bg-blue-50 inline-block px-2 py-0.5 rounded">
                                            Step {(item.stepIndex || 0) + 1} / {item.steps.length}
                                        </div>
                                    )}
                                </>
                             )}
                        </td>
                         <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                        <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-bold rounded-full flex items-center gap-1 w-fit ${
                                item.hasIssue ? 'bg-red-500 text-white animate-pulse' :
                                item.status === 'completed' || item.progress === 100 ? 'bg-blue-100 text-blue-800' :
                                item.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                                item.status === 'error' ? 'bg-red-100 text-red-700' : 
                                item.status === 'running' || (item.steps && item.steps.length > 1 && item.stepIndex > 0) ? 'bg-green-100 text-green-700' :
                                item.station === 'subcontractor' ? 'bg-orange-100 text-orange-800' :
                                'bg-gray-100 text-gray-700'
                            }`}>
                                {item.hasIssue && <i className="fa-solid fa-triangle-exclamation"></i>}
                                {item.hasIssue ? "ALERTE" :
                                 item.status === 'completed' || item.progress === 100 ? t.statusCompleted :
                                 item.station === 'subcontractor' ? t.subcontractor :
                                 item.status === 'running' ? t.statusRunning : 
                                 item.status === 'paused' ? t.statusPaused :
                                 item.status === 'error' ? t.statusError :
                                 (item.steps && item.steps.length > 1 && item.stepIndex > 0) ? t.statusRunning :
                                 t.statusPlanning}
                            </span>
                        </td>
                        <td className="px-6 py-4">
                            {(() => {
                                let displayProgress = item.progress || 0;
                                if (item.steps && item.steps.length > 0) {
                                    const totalSteps = item.steps.length;
                                    const completedSteps = item.stepIndex || 0;
                                    const currentStepProgress = item.progress || 0;
                                    displayProgress = Math.round((completedSteps / totalSteps * 100) + (currentStepProgress / totalSteps));
                                }
                                return (
                                    <>
                                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div className={`h-full ${item.status === 'error' ? 'bg-red-500' : 'bg-[#51aff7]'}`} style={{width: `${displayProgress}%`}}></div>
                                        </div>
                                        <span className="text-xs text-gray-400 mt-1 block">{displayProgress}%</span>
                                    </>
                                );
                            })()}
                        </td>
                        <td className="px-6 py-4 text-sm">
                             <div className="flex flex-col gap-2">
                                <select 
                                    className={`text-xs border rounded p-2 focus:border-[#51aff7] focus:outline-none w-full font-medium ${
                                        item.station === 'subcontractor' ? 'bg-orange-50 text-orange-800 border-orange-200' : 
                                        item.station ? 'bg-white text-gray-700 border-gray-200' : 'bg-gray-50 text-gray-500 border-gray-200'
                                    }`}
                                    onChange={(e) => assignStation(item.id, e.target.value)}
                                    value={item.station || ""}
                                >
                                    <option value="" disabled>{t.stationPlaceholder}</option>
                                    <option value="station1">{t.station1}</option>
                                    <option value="station2">{t.station2}</option>
                                    <option value="station3">{t.station3}</option>
                                    <option value="station4">{t.station4}</option>
                                    <option className="bg-orange-50 font-bold" value="subcontractor">{t.subcontractor}</option>
                                </select>
                                
                                {item.station !== 'subcontractor' && (
                                     <button 
                                        onClick={() => setPrintingJob(item)}
                                        className="mt-2 w-full py-2 rounded bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition text-xs font-bold border border-gray-300"
                                        title={t.printLabel}
                                    >
                                        <i className="fa-solid fa-print mr-2"></i> {t.printLabel}
                                    </button>
                                )}

                                {item.station === 'subcontractor' && (
                                     <>
                                         <button 
                                            onClick={() => setPrintingJob(item)}
                                            className="w-full py-2 rounded bg-gray-900 text-white flex items-center justify-center hover:bg-orange-500 transition shadow text-xs font-bold"
                                            title={t.printLabel}
                                        >
                                            <i className="fa-solid fa-print mr-2"></i> {t.printLabel}
                                        </button>
                                         {!isRawWood && (
                                            <button 
                                                onClick={() => setPrintingPO(item)}
                                                className="w-full py-2 rounded bg-[#51aff7] text-white flex items-center justify-center hover:bg-blue-600 transition shadow text-xs font-bold"
                                                title="Bon de Commande"
                                            >
                                                <i className="fa-solid fa-file-invoice mr-2"></i> Commande
                                            </button>
                                         )}
                                     </>
                                )}

                                {item.station && item.assignedAt && item.station !== 'subcontractor' && (
                                    <div className="text-[10px] text-gray-400 px-1">
                                        <i className="fa-regular fa-clock mr-1"></i>
                                        {item.assignedAt}
                                    </div>
                                )}
                            </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                            <button 
                                onClick={() => {
                                    if(window.confirm(t.confirmDelete)) {
                                        deleteBatch(item.id);
                                    }
                                }}
                                className="text-gray-400 hover:text-red-500 transition-colors p-2"
                                title={t.deleteLabel}
                            >
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    );
};

const SettingsView = ({ t, appMode, setAppMode, stationConfig, setStationConfig, customProcesses = [], setCustomProcesses, woodTreatments = [], setWoodTreatments }) => {
    const [newProcessName, setNewProcessName] = useState('');
    const [newWoodTreatmentName, setNewWoodTreatmentName] = useState('');

    // Hidden standard processes state
    const [hiddenProcesses, setHiddenProcesses] = useState(() => {
        const saved = localStorage.getItem('hiddenProcesses');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('hiddenProcesses', JSON.stringify(hiddenProcesses));
    }, [hiddenProcesses]);

    const handleConfigChange = (process, station) => {
        setStationConfig(prev => ({
            ...prev,
            [process]: station
        }));
    };

    const handleAddProcess = () => {
        if (!newProcessName.trim()) return;
        const newId = `procCustom_${Date.now()}`;
        const newProcess = { id: newId, label: newProcessName };
        setCustomProcesses([...customProcesses, newProcess]);
        setNewProcessName('');
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

    const processes = [
        { id: 'procBeckage', label: t.procBeckage },
        { id: 'procMoulding', label: t.procMoulding },
        { id: 'procSanding1', label: t.procSanding1 },
        { id: 'procSanding2', label: t.procSanding2 }, // Added back missing procSanding2 if it was missing? No, I should stick to what was there or check full file?
        { id: 'procStaining', label: t.procStaining },
        { id: 'procBrushing', label: t.procBrushing },
        { id: 'procPolishing', label: t.procPolishing },
        { id: 'procOiling', label: t.procOiling },
        { id: 'procPainting', label: t.procPainting },
        ...customProcesses
    ].filter(p => !hiddenProcesses.includes(p.id));

    const stations = [
        { id: '', label: '-- None --' },
        ...stationDefinitions.map(s => ({ id: s.id, label: t[s.labelKey] })),
        { id: 'subcontractor', label: t.subcontractor },
    ];

    // -- Exclusive Assignment Logic --
    const standardProcessIds = [
        'procBeckage', 'procMoulding', 'procSanding1', 'procSanding2',
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
        // If the station is ALREADY assigned to the current process we are editing, it should be allowed (it's the current value)
        // But here we are filtering the list for ALL dropdowns.
        // If Station1 is assigned to StandardProcA, and we open dropdown for StandardProcB, Station1 SHOULD be available.
        // If Station1 is assigned to RawProcA, and we open dropdown for StandardProcB, Station1 SHOULD NOT be available.
        
        if (targetGroup === 'standard') {
            return !stationsAssignedToRaw.has(stationId);
        } else { // raw
            return !stationsAssignedToStandard.has(stationId);
        }
    };

    return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
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
                    {processes.map(proc => {
                        const isCustom = customProcesses.some(cp => cp.id === proc.id);
                        return (
                            <div key={proc.id} className="grid grid-cols-2 gap-4 items-center">
                                <span className="font-medium text-gray-700">{proc.label}</span>
                                <div className="flex items-center gap-2">
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

            {/* Raw Wood Treatment Section */}
            <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Etape de Traitement du bois brut</h3>
                <p className="text-sm text-gray-500 mb-6">Définir les étapes de traitement pour le bois brut.</p>
                
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    {woodTreatments.length === 0 && <p className="text-sm text-gray-400 italic">Aucun traitement défini.</p>}
                    {woodTreatments.map(treatment => (
                         <div key={treatment.id} className="grid grid-cols-2 gap-4 items-center p-3 bg-white border border-gray-200 rounded-lg">
                            <span className="font-medium text-gray-700">{treatment.label}</span>
                            
                            <div className="flex items-center gap-2">
                                <select 
                                    value={stationConfig[treatment.id] || ''}
                                    onChange={(e) => handleConfigChange(treatment.id, e.target.value)}
                                    className="p-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-[#51aff7] focus:outline-none flex-1"
                                >
                                    {stations.filter(st => isStationAllowed(st.id, 'raw')).map(st => (
                                        <option key={st.id} value={st.id}>{st.label}</option>
                                    ))}
                                </select>
                                <button 
                                    onClick={() => {
                                        setWoodTreatments(woodTreatments.filter(t => t.id !== treatment.id));
                                    }}
                                    className="text-red-500 hover:text-red-700 p-2"
                                    title="Supprimer"
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Add Wood Treatment */}
                    <div className="pt-4 mt-4 border-t border-gray-200 grid grid-cols-2 gap-4 items-center">
                         <input 
                            type="text"
                            value={newWoodTreatmentName}
                            onChange={(e) => setNewWoodTreatmentName(e.target.value)}
                            placeholder="Nouveau Traitement (ex: Séchage)"
                            className="p-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-[#51aff7] focus:outline-none"
                         />
                         <button 
                            onClick={handleAddWoodTreatment}
                            disabled={!newWoodTreatmentName.trim()}
                            className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 disabled:opacity-50"
                         >
                            <i className="fa-solid fa-plus mr-2"></i> Ajouter
                         </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

const WorkerStationView = ({ t, stationId, productionData, updateJobStatus, stationConfig }) => {
    // Authentication State
    const [currentUser, setCurrentUser] = useState(null);
    const [lastUser, setLastUser] = useState(null); // Track last successful user
    const [authRequired, setAuthRequired] = useState(false);
    const [pendingAction, setPendingAction] = useState(null); // Function to execute after auth
    const [pin, setPin] = useState('');
    const [loginError, setLoginError] = useState('');
    
    // Live Clock
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const employees = {
        '0000': 'Sylvain',
        '1234': 'Stéphane'
    };

    const handlePinInput = (num) => {
        if (pin.length < 4) {
            const newPin = pin + num;
            setPin(newPin);
            if (newPin.length === 4) {
                // Auto check
                const authUser = employees[newPin];
                if (authUser) {
                    // setCurrentUser(authUser); // We don't keep persistent session now per request
                    setLastUser(authUser); // Update last user on successful auth
                    setPin('');
                    setLoginError('');
                    setAuthRequired(false);
                    // Execute pending action if any
                    if (pendingAction) {
                        pendingAction(authUser);
                        setPendingAction(null);
                    }
                } else {
                    setLoginError('NIP Invalide');
                    setTimeout(() => {
                        setPin('');
                        setLoginError('');
                    }, 1000);
                }
            }
        }
    };

    // Helper to protect actions
    const requireAuth = (action) => {
        // ALWAYS require auth for critical actions regardless of previous sessions
        setPendingAction(() => action);
        setAuthRequired(true);
    };

    // Keyboard Listener for PIN
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!authRequired) return;

            if (e.key >= '0' && e.key <= '9') {
                handlePinInput(e.key);
            } else if (e.key === 'Backspace') {
                setPin(prev => prev.slice(0, -1));
                setLoginError('');
            } else if (e.key === 'Escape') {
                setPin(''); 
                setLoginError(''); 
                setAuthRequired(false); 
                setPendingAction(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [authRequired, pin, handlePinInput]);

    // Filter jobs for this station
    const stationJobs = productionData.filter(item => item.station === stationId && item.status !== 'completed');
    
    // Determine Station Name or Assigned Process
    const assignedProcesses = stationConfig ? Object.keys(stationConfig).filter(k => stationConfig[k] === stationId).map(k => t[k]) : [];
    const note = assignedProcesses.length > 0 ? assignedProcesses.join(" / ") : t[stationId];
    
    // Find active job
    const activeJob = stationJobs.find(j => j.status === 'running' || j.status === 'paused');
    const queue = stationJobs.filter(j => j.status !== 'running' && j.status !== 'paused');

    // State for modal and inputs
    const [elapsed, setElapsed] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalAction, setModalAction] = useState(null); // 'pause' or 'complete'
    const [modalQty, setModalQty] = useState(''); // Quantity for the current transaction
    const [producedQty, setProducedQty] = useState(0); // Cumulative quantity
    const [jobNotes, setJobNotes] = useState('');
    const [showOverProductionWarning, setShowOverProductionWarning] = useState(false);

    // Data Entry Fields
    const [pqtUsed, setPqtUsed] = useState('');
    const [humidity, setHumidity] = useState('');
    const [coverage, setCoverage] = useState('');
    const [thickness, setThickness] = useState('');
    const [sandThickness, setSandThickness] = useState('');
    const [productCode, setProductCode] = useState('');
    
    // Printing Completion State
    const [completedJob, setCompletedJob] = useState(null); // Updated when job finishes to show print option

    useEffect(() => {
        let timer;
        
        const calculateDuration = () => {
             if (!activeJob || !activeJob.logs) return 0;
             let total = 0;
             let lastStartTime = null;
             
             const sortedLogs = [...activeJob.logs].sort((a,b) => a.timestamp - b.timestamp);
             
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

        if (activeJob) {
            setElapsed(calculateDuration());

            setProducedQty(activeJob.producedQty || 0);
            setJobNotes(activeJob.notes || '');
            setPqtUsed(activeJob.pqtUsed || '');
            setHumidity(activeJob.humidity || '');
            setCoverage(activeJob.coverage || '');
            setThickness(activeJob.thickness || '');
            setSandThickness(activeJob.sandThickness || '');
            setProductCode(activeJob.productCode || '');
            
            if (activeJob.status === 'running') {
                timer = setInterval(() => setElapsed(calculateDuration()), 1000);
            }
        }
        return () => clearInterval(timer);
    }, [activeJob]);

    const formatTime = (sec) => {
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    };

    const handleActionClick = (action) => {
        setModalAction(action);
        if (action === 'complete') {
            // Suggest remaining quantity (Check PMP first)
            const targetQty = activeJob.qtyPMP ? parseInt(activeJob.qtyPMP) : parseInt(activeJob.qty);
            const remaining = (targetQty || 0) - (parseInt(activeJob.producedQty) || 0);
            setModalQty(remaining > 0 ? remaining : '');
        } else {
            // Do not suggest anything for pause
            setModalQty('');
        }
        setShowOverProductionWarning(false);
        setShowModal(true);
    };

    const handleConfirm = (force = false) => {
        const increment = parseInt(modalQty) || 0;
        const currentTotal = parseInt(activeJob.producedQty) || 0;
        const newTotal = currentTotal + increment;
        
        // Use PMP if available, else standard qty
        const needed = activeJob.qtyPMP ? parseInt(activeJob.qtyPMP) : parseInt(activeJob.qty);
        
        if (!force && newTotal > needed) {
            setShowOverProductionWarning(true);
            return;
        }

        if (modalAction === 'complete') {
            // Save job data for printing before it disappears from active view
            const jobToPrint = { ...activeJob, producedQty: newTotal, status: 'completed' };
            setCompletedJob(jobToPrint);
        }

        updateJobStatus(activeJob.id, modalAction === 'pause' ? 'paused' : 'completed', newTotal, jobNotes, {
            user: lastUser || 'Unknown',
            action: modalAction === 'pause' ? 'PAUSE' : 'COMPLETE',
            qty: increment,
            timestamp: Date.now()
        }, { pqtUsed, humidity, coverage, thickness, sandThickness, productCode });
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col relative">
            {/* Print Label Modal for Completed Jobs */}
            {completedJob && <ProductionLabelModal job={completedJob} t={t} onClose={() => setCompletedJob(null)} />}

            {/* Auth Modal */}
            {authRequired && (
                <div className="absolute inset-0 z-[60] bg-black/80 flex flex-col items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-[#51aff7] rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fa-solid fa-user-lock text-3xl text-white"></i>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Station Login</h2>
                            <p className="text-gray-500">Entrez votre NIP pour confirmer l'action</p>
                        </div>

                        <div className="flex justify-center mb-6 h-12">
                            <div className="flex gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`w-4 h-4 rounded-full border-2 ${pin.length >= i ? 'bg-[#51aff7] border-[#51aff7]' : 'border-gray-300'}`}></div>
                                ))}
                            </div>
                        </div>

                        {loginError && (
                            <div className="text-red-500 text-center font-bold mb-4 animate-pulse">
                                {loginError}
                            </div>
                        )}

                        <div className="grid grid-cols-3 gap-4 mb-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                                <button 
                                    key={num}
                                    onClick={() => handlePinInput(num.toString())}
                                    className="h-16 rounded-xl bg-gray-100 text-xl font-bold text-gray-700 hover:bg-gray-200 active:bg-[#51aff7] active:text-white transition shadow-sm"
                                >
                                    {num}
                                </button>
                            ))}
                            <div className="col-start-2">
                                    <button 
                                    onClick={() => handlePinInput('0')}
                                    className="w-full h-16 rounded-xl bg-gray-100 text-xl font-bold text-gray-700 hover:bg-gray-200 active:bg-[#51aff7] active:text-white transition shadow-sm"
                                >
                                    0
                                </button>
                            </div>
                            <div className="col-start-3">
                                <button 
                                    onClick={() => { 
                                        setPin(''); 
                                        setLoginError(''); 
                                        setAuthRequired(false); 
                                        setPendingAction(null); 
                                    }}
                                    className="w-full h-16 rounded-xl bg-red-50 text-red-500 text-lg font-bold hover:bg-red-100 transition"
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="absolute inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                        {showOverProductionWarning ? (
                             <div className="text-center">
                                <i className="fa-solid fa-triangle-exclamation text-yellow-500 text-5xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Attention: Surproduction</h3>
                                <p className="text-gray-600 mb-6 font-medium">
                                    La quantité totale ({parseInt(activeJob.producedQty || 0) + parseInt(modalQty)}) dépasse la quantité requise ({activeJob.qtyPMP || activeJob.qty}).
                                </p>
                                <p className="text-sm text-gray-400 mb-6">Voulez-vous vraiment confirmer cette quantité ?</p>
                                <div className="flex gap-4">
                                    <button 
                                        onClick={() => setShowOverProductionWarning(false)}
                                        className="flex-1 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200"
                                    >
                                        Corriger
                                    </button>
                                    <button 
                                        onClick={() => handleConfirm(true)}
                                        className="flex-1 py-3 bg-yellow-500 text-white font-bold rounded-xl hover:bg-yellow-600 shadow-lg shadow-yellow-500/30"
                                    >
                                        Confirmer quand même
                                    </button>
                                </div>
                             </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {modalAction === 'pause' ? t.pauseJob : t.finishJob}
                                </h3>
                                <p className="text-gray-500 mb-6">{t.qtyProducedPrompt || "Enter quantity produced in this session:"}</p>
                                
                                <div className="mb-6">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.labelQty}</label>
                                    <input 
                                        type="number" 
                                        value={modalQty} 
                                        onChange={(e) => setModalQty(e.target.value)} 
                                        className="w-full text-4xl font-bold p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-[#51aff7]/30 outline-none"
                                        placeholder="0"
                                        autoFocus
                                    />
                                    <p className="text-right text-sm text-gray-400 mt-1">Total Req: {activeJob.qtyPMP || activeJob.qty} | Current Total: {activeJob.producedQty || 0} </p>
                                </div>

                                <div className="flex gap-4">
                                    <button 
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200"
                                    >
                                        {t.cancel}
                                    </button>
                                    <button 
                                        onClick={() => handleConfirm(false)}
                                        className="flex-1 py-3 bg-[#51aff7] text-white font-bold rounded-xl hover:bg-blue-600 shadow-lg shadow-blue-500/30"
                                    >
                                        {t.confirm}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center px-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#51aff7] rounded-lg flex items-center justify-center text-xl font-bold">
                        {stationId.replace('station', 'S')}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-wide">{note.toUpperCase()}</h1>
                        <p className="text-[#51aff7] text-sm font-bold capitalize">
                            {currentTime.toLocaleDateString(undefined, {weekday: 'long', day: 'numeric', month: 'long'})} • {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                    </div>
                </div>
                <div>
                   <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30">ONLINE</span>
                   {lastUser && (
                       <div className="flex items-center gap-2 pl-4 border-l border-gray-700 ml-4 inline-flex align-middle h-full">
                            <span className="text-gray-400 text-xs uppercase font-bold">Dernier Usager:</span>
                            <span className="text-white font-bold">{lastUser}</span>
                            {activeJob && activeJob.status === 'paused' && activeJob.producedQty > 0 && (
                                <span className="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded text-xs ml-2">
                                    Last Qty: {activeJob.producedQty}
                                </span>
                            )}
                       </div>
                   )}
                </div>
            </div>

            <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1600px] w-full mx-auto">
                {/* Left: Active Job Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden min-h-[600px] flex flex-col">
                        <div className="p-6 border-b bg-gray-50 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                                <i className="fa-solid fa-play-circle text-[#51aff7]"></i>
                                {t.currentJob}
                            </h2>
                            {activeJob && (
                                <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                                    activeJob.status === 'running' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                }`}>
                                    {activeJob.status === 'running' ? 'IN PROGRESS' : 'PAUSED'}
                                </span>
                            )}
                        </div>

                        {activeJob ? (
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-4xl font-bold text-gray-800 mb-2">{activeJob.client}</h3>
                                        <p className="text-xl text-[#51aff7] font-mono">{activeJob.txn}</p>
                                    </div>
                                    <div className="flex gap-12 text-right">
                                        <div>
                                            <p className="text-gray-400 text-sm uppercase font-bold mb-1">{activeJob.qtyPMP ? t.labelQtyPMP : "Commandé"}</p>
                                            <p className="text-5xl font-bold text-gray-800">
                                                {activeJob.qtyPMP ? activeJob.qtyPMP : activeJob.qty}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-blue-500 text-sm uppercase font-bold mb-1">Produit</p>
                                            <p className="text-5xl font-bold text-blue-600">{producedQty}</p>
                                        </div>
                                        <div>
                                            <p className="text-green-500 text-sm uppercase font-bold mb-1">Balance</p>
                                            <p className="text-5xl font-bold text-green-600">
                                                {activeJob.qtyPMP 
                                                    ? (parseInt(activeJob.qtyPMP) - (parseInt(producedQty) || 0)) 
                                                    : (parseInt(activeJob.qty) - (parseInt(producedQty) || 0))
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <p className="text-gray-500 text-xs uppercase font-bold mb-1">{t.labelWood}</p>
                                        <p className="text-xl font-semibold text-gray-800">{activeJob.wood}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <p className="text-gray-500 text-xs uppercase font-bold mb-1">{activeJob.qtyPMP ? "Traitement" : t.labelProcess}</p>
                                        <p className="text-xl font-semibold text-gray-800">
                                            {activeJob.treatment 
                                                ? (stationConfig[activeJob.treatment] ? t[activeJob.treatment] || activeJob.treatment : activeJob.treatment) 
                                                // Resolve treatment name if possible using known translations or just ID if not found
                                                // But wait, the translation t object might not have dynamic custom wood treatments if they weren't added to t
                                                // Let's assume t has it or we show raw value.
                                                : (t[activeJob.process] || activeJob.process)
                                            }
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-6 gap-4 mb-8">
                                    <div className="col-span-6">
                                        <label className="block text-sm font-bold text-gray-500 uppercase mb-1">Code Produit / Stock</label>
                                        <input 
                                            type="text" 
                                            value={productCode}
                                            onChange={e => setProductCode(e.target.value)}
                                            onBlur={() => updateJobStatus(activeJob.id, activeJob.status, producedQty, jobNotes, null, { pqtUsed, humidity, coverage, thickness, sandThickness, productCode })}
                                            className="w-full p-3 bg-indigo-50/50 border border-indigo-100 rounded-lg text-gray-800 font-bold focus:ring-2 focus:ring-indigo-300 outline-none"
                                            placeholder="Code produit (ex: P-100) ou Stock (ex: S-200)"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-bold text-gray-500 uppercase mb-1">#PQT Utilisé</label>
                                        <input 
                                            type="text" 
                                            value={pqtUsed}
                                            onChange={e => setPqtUsed(e.target.value)}
                                            onBlur={() => updateJobStatus(activeJob.id, activeJob.status, producedQty, jobNotes, null, { pqtUsed, humidity, coverage, thickness, sandThickness, productCode })}
                                            className="w-full p-3 bg-blue-50/50 border border-blue-100 rounded-lg text-gray-800 font-bold focus:ring-2 focus:ring-blue-300 outline-none"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                         <label className="block text-sm font-bold text-gray-500 uppercase mb-1">%H</label>
                                         <input 
                                            type="text" 
                                            value={humidity}
                                            onChange={e => setHumidity(e.target.value)}
                                            onBlur={() => updateJobStatus(activeJob.id, activeJob.status, producedQty, jobNotes, null, { pqtUsed, humidity, coverage, thickness, sandThickness, productCode })}
                                            className="w-full p-3 bg-blue-50/50 border border-blue-100 rounded-lg text-gray-800 font-bold focus:ring-2 focus:ring-blue-300 outline-none"
                                         />
                                    </div>
                                    <div className="col-span-2">
                                         <label className="block text-sm font-bold text-gray-500 uppercase mb-1">Couvrance</label>
                                         <input 
                                            type="text" 
                                            value={coverage}
                                            onChange={e => setCoverage(e.target.value)}
                                            onBlur={() => updateJobStatus(activeJob.id, activeJob.status, producedQty, jobNotes, null, { pqtUsed, humidity, coverage, thickness, sandThickness, productCode })}
                                            className="w-full p-3 bg-blue-50/50 border border-blue-100 rounded-lg text-gray-800 font-bold focus:ring-2 focus:ring-blue-300 outline-none"
                                         />
                                    </div>
                                     <div className="col-span-3">
                                         <label className="block text-sm font-bold text-gray-500 uppercase mb-1">Épaisseur</label>
                                         <input 
                                            type="text" 
                                            value={thickness}
                                            onChange={e => setThickness(e.target.value)}
                                            onBlur={() => updateJobStatus(activeJob.id, activeJob.status, producedQty, jobNotes, null, { pqtUsed, humidity, coverage, thickness, sandThickness, productCode })}
                                            className="w-full p-3 bg-blue-50/50 border border-blue-100 rounded-lg text-gray-800 font-bold focus:ring-2 focus:ring-blue-300 outline-none"
                                         />
                                    </div>
                                     <div className="col-span-3">
                                         <label className="block text-sm font-bold text-gray-500 uppercase mb-1">Épaisseur Sortie Sableuse</label>
                                         <input 
                                            type="text" 
                                            value={sandThickness}
                                            onChange={e => setSandThickness(e.target.value)}
                                            onBlur={() => updateJobStatus(activeJob.id, activeJob.status, producedQty, jobNotes, null, { pqtUsed, humidity, coverage, thickness, sandThickness, productCode })}
                                            className="w-full p-3 bg-blue-50/50 border border-blue-100 rounded-lg text-gray-800 font-bold focus:ring-2 focus:ring-blue-300 outline-none"
                                         />
                                    </div>
                                </div>

                                {/* Notes Area (Always Visible) */}
                                <div className="mb-8">
                                    <label className="block text-sm font-bold text-gray-500 uppercase mb-2">
                                        <i className="fa-regular fa-comment-dots mr-2"></i>
                                        {t.notes}
                                    </label>
                                    <textarea 
                                        className="w-full p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-gray-700 resize-none h-24 focus:ring-2 focus:ring-yellow-300 outline-none"
                                        placeholder="Add notes, issues or observations here..."
                                        value={jobNotes}
                                        onChange={(e) => {
                                            setJobNotes(e.target.value);
                                            // Optional: Auto-save notes on change or blur could be added here
                                        }}
                                        onBlur={() => updateJobStatus(activeJob.id, activeJob.status, producedQty, jobNotes, null, { pqtUsed, humidity, coverage, thickness, sandThickness, productCode })} // Save on blur
                                    />
                                </div>

                                {/* Timer Large */}
                                <div className="mt-auto flex flex-col items-center justify-center p-8 bg-gray-900 rounded-2xl text-white mb-8">
                                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">{t.elapsedTime}</span>
                                    <div className="text-7xl font-mono font-bold tracking-wider">
                                        {formatTime(elapsed)}
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="grid grid-cols-2 gap-4">
                                    {activeJob.status === 'running' ? (
                                        <button 
                                            onClick={() => requireAuth(() => handleActionClick('pause'))}
                                            className="py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-bold text-xl transition shadow-lg shadow-yellow-500/30 flex items-center justify-center gap-3"
                                        >
                                            <i className="fa-solid fa-pause"></i>
                                            {t.pauseJob}
                                        </button>
                                    ) : (
                                        <button 
                                            // On blur logic removed from here as it's handled in textarea
                                            onClick={() => requireAuth((u) => updateJobStatus(activeJob.id, 'running', activeJob.producedQty, jobNotes, {
                                                 user: u,
                                                 action: 'RESUME',
                                                 qty: 0,
                                                 timestamp: Date.now()
                                            }, { pqtUsed, humidity, coverage, thickness, sandThickness, productCode }))}
                                            className="py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-xl transition shadow-lg shadow-green-500/30 flex items-center justify-center gap-3"
                                        >
                                            <i className="fa-solid fa-play"></i>
                                            {t.startJob}
                                        </button>
                                    )}
                                    
                                    <button 
                                        onClick={() => requireAuth(() => handleActionClick('complete'))}
                                        className="py-4 bg-[#51aff7] hover:bg-blue-600 text-white rounded-xl font-bold text-xl transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3"
                                    >
                                        <i className="fa-solid fa-check-circle"></i>
                                        {t.finishJob}
                                    </button>

                                    <div className="col-span-2">
                                         <button 
                                            onClick={() => {
                                                const issue = prompt("Description du problème (optionnel):");
                                                if (issue !== null) {
                                                     updateJobStatus(activeJob.id, 'error', activeJob.producedQty, jobNotes, {
                                                        user: lastUser || 'Unknown',
                                                        action: 'REPORT_ISSUE',
                                                        message: issue,
                                                        timestamp: Date.now()
                                                     }, { pqtUsed, humidity, coverage, thickness, sandThickness, productCode, hasIssue: true, issueDescription: issue, issueTimestamp: Date.now() });
                                                }
                                            }}
                                            className="w-full py-4 bg-red-100 text-red-600 border border-red-200 hover:bg-red-200 rounded-xl font-bold text-lg transition flex items-center justify-center gap-2"
                                        >
                                            <i className="fa-solid fa-triangle-exclamation"></i>
                                            SIGNALER UN PROBLÈME
                                        </button>
                                    </div>
                                </div>

                                {/* History Log Table */}
                                {activeJob.logs && activeJob.logs.length > 0 && (
                                    <div className="mt-8 border-t border-gray-100 pt-6">
                                        <h4 className="font-bold text-gray-400 text-sm uppercase mb-4">Historique des transactions</h4>
                                        <div className="overflow-hidden rounded-xl border border-gray-100">
                                            <table className="w-full text-sm text-left">
                                                <thead className="bg-gray-50 text-gray-500 font-bold uppercase text-xs">
                                                    <tr>
                                                        <th className="px-4 py-3">Heure</th>
                                                        <th className="px-4 py-3">Usager</th>
                                                        <th className="px-4 py-3">Action</th>
                                                        <th className="px-4 py-3 text-right">Qte</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[...activeJob.logs].reverse().map((log, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50">
                                                            <td className="px-4 py-3 text-gray-600 font-mono">
                                                                {new Date(log.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                                            </td>
                                                            <td className="px-4 py-3 font-bold text-gray-700">{log.user}</td>
                                                            <td className="px-4 py-3">
                                                                <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                                    log.action === 'complete' || log.action === 'COMPLETE' ? 'bg-blue-100 text-blue-700' :
                                                                    log.action === 'start' || log.action === 'START' || log.action === 'RESUME' ? 'bg-green-100 text-green-700' :
                                                                    'bg-yellow-100 text-yellow-700'
                                                                }`}>
                                                                    {log.action}
                                                                </span>
                                                            </td>
                                                            <td className="px-4 py-3 text-right font-mono font-bold text-gray-700">
                                                                {log.qty}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-gray-300 p-12">
                                <i className="fa-regular fa-clipboard text-6xl mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-400">{t.waitingForJob}</h3>
                                <p className="text-sm mt-2">Selectionnez une commande dans la file d'attente</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Queue */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
                    <div className="p-6 border-b bg-gray-50">
                        <h2 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                            <i className="fa-solid fa-list-ol text-gray-400"></i>
                            {t.jobQueue}
                            <span className="ml-auto bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">{queue.length}</span>
                        </h2>
                    </div>
                    <div className="p-4 flex-1 overflow-y-auto space-y-3">
                        {queue.length === 0 ? (
                             <p className="text-center text-gray-400 mt-10">Empty Queue</p>
                        ) : (
                            queue.map(item => (
                                <div key={item.id} className="p-4 border border-gray-100 rounded-xl hover:border-[#51aff7] hover:shadow-md transition group bg-white">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-gray-800">#{item.id}</span>
                                        <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded font-mono">{item.txn}</span>
                                    </div>
                                    <h4 className="font-bold text-gray-600 mb-1">{item.client}</h4>
                                    <div className="flex justify-between items-end">
                                        <p className="text-sm text-gray-400">{item.wood} • {item.qtyPMP ? (`${item.qtyPMP} PMP`) : (`${item.qty}pc`)}</p>
                                        <button 
                                            onClick={() => requireAuth((u) => updateJobStatus(item.id, 'running', 0, '', {
                                                user: u,
                                                action: 'START',
                                                qty: 0,
                                                timestamp: Date.now()
                                            }))}
                                            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg group-hover:bg-[#51aff7] group-hover:text-white font-bold text-sm transition"
                                            disabled={!!activeJob}
                                        >
                                            <i className="fa-solid fa-arrow-left mr-1"></i> Start
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main App Component ---

const App = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [lang, setLang] = useState('fr'); 
    
    // Check URL params for mode
    const urlParams = new URLSearchParams(window.location.search);
    const initialMode = urlParams.get('mode') || 'admin';
    const [appMode, setAppMode] = useState(initialMode);
    
    // Custom Process Definitions
    const [customProcesses, setCustomProcesses] = useState(() => {
        const saved = localStorage.getItem('customProcesses');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('customProcesses', JSON.stringify(customProcesses));
    }, [customProcesses]);

    // Raw Wood Treatments Definitions
    const [woodTreatments, setWoodTreatments] = useState(() => {
        const saved = localStorage.getItem('woodTreatments');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('woodTreatments', JSON.stringify(woodTreatments));
    }, [woodTreatments]);

    // Initial State with localStorage persistence
    const [productionData, setProductionData] = useState(() => {
        const saved = localStorage.getItem('productionData');
        return saved ? JSON.parse(saved) : [];
    });

    // Auto-assign config
    const [stationConfig, setStationConfig] = useState(() => {
        const saved = localStorage.getItem('stationConfig');
        return saved ? JSON.parse(saved) : {
            procBeckage: 'station1',
            procMoulding: 'station3',
            procSanding1: 'station2',
            procSanding2: 'station2',
            procStaining: 'station4', // Default guesses
            procBrushing: 'station4',
            procPolishing: 'station4',
            procOiling: 'station4',
            procPainting: 'station4'
        };
    });

    useEffect(() => {
        localStorage.setItem('stationConfig', JSON.stringify(stationConfig));
    }, [stationConfig]);

    // Save to localStorage whenever data changes
    useEffect(() => {
        localStorage.setItem('productionData', JSON.stringify(productionData));
    }, [productionData]);

    // Sync across tabs
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'productionData') {
                setProductionData(JSON.parse(e.newValue));
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const addBatch = (newItem) => {
        // Check auto-assign
        const autoStation = stationConfig[newItem.process] || null;
        const now = new Date();
        const timestamp = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        const newBatch = {
            id: productionData.length > 0 ? Math.max(...productionData.map(i => i.id)) + 1 : 202401,
            ...newItem,
            status: "planning", 
            progress: 0,
            station: autoStation,
            assignedAt: autoStation ? timestamp : null
        };
        setProductionData([newBatch, ...productionData]);
    };

    const assignStation = (id, station) => {
        const now = new Date();
        const timestamp = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        setProductionData(prev => prev.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    station: station,
                    assignedAt: timestamp,
                    status: 'planning', // Assigned but waiting in queue for worker
                    progress: 0
                };
            }
            return item;
        }));
    };

    const updateJobStatus = (id, newStatus, producedQty, notes, logEntry, additionalData = {}) => {
        setProductionData(prev => prev.map(item => {
            if (item.id === id) {
                let updates = { status: newStatus, ...additionalData };
                
                // Update data if provided
                if (producedQty !== undefined && producedQty !== null) {
                    updates.producedQty = parseInt(producedQty);
                }
                if (notes !== undefined && notes !== null) {
                    updates.notes = notes;
                }

                // Append History Log
                if (logEntry) {
                    updates.logs = [...(item.logs || []), logEntry];
                }

                if (newStatus === 'running') {
                    updates.progress = Math.max(10, item.progress || 0);
                }
                
                if (newStatus === 'completed') {
                    // Calculate Total Duration for statistics
                    const finalLogs = updates.logs || item.logs || [];
                    let totalDuration = 0;
                    let lastStartTime = null;
                    const sortedLogs = [...finalLogs].sort((a,b) => a.timestamp - b.timestamp);
                    
                    for (const log of sortedLogs) {
                        const action = log.action ? log.action.toUpperCase() : '';
                        if (action === 'START' || action === 'RESUME') {
                           lastStartTime = log.timestamp;
                        } else if ((action === 'PAUSE' || action === 'COMPLETE') && lastStartTime) {
                           totalDuration += (log.timestamp - lastStartTime);
                           lastStartTime = null;
                        }
                    }
                    updates.processingTime = Math.floor(totalDuration / 1000);

                    if (item.steps && item.steps.length > 0 && (item.stepIndex || 0) < item.steps.length - 1) {
                        // Advance to next step
                        const nextIdx = (item.stepIndex || 0) + 1;
                        const nextProc = item.steps[nextIdx];
                        const nextStation = stationConfig[nextProc] || null;

                        updates = {
                            ...updates,
                            status: 'planning',
                            progress: 0,
                            stepIndex: nextIdx,
                            process: nextProc,
                            station: nextStation,
                            producedQty: 0
                        };
                    } else {
                        updates.progress = 100;
                    }
                } else if (updates.producedQty && item.qty > 0) {
                     // Dynamic progress calculation based on reported quantity
                     const calcProgress = Math.min(95, Math.round((updates.producedQty / parseInt(item.qty)) * 100));
                     updates.progress = Math.max(updates.progress || 0, calcProgress);
                }

                return { ...item, ...updates };
            }
            return item;
        }));
    };

    const deleteBatch = (id) => {
        if(window.confirm("Êtes-vous sûr de vouloir supprimer ce lot ?")) {
            setProductionData(prev => prev.filter(item => item.id !== id));
        }
    };

    const baseT = translations[lang];
    const t = { ...baseT };
    // Augment with custom processes
    customProcesses.forEach(p => {
        t[p.id] = p.label;
    });
    // Augment with wood treatments
    woodTreatments.forEach(wt => {
        t[wt.id] = wt.label;
    });

    // If in Station Mode, render full screen worker interface
    if (appMode !== 'admin') {
        return <WorkerStationView t={t} stationId={appMode} productionData={productionData} updateJobStatus={updateJobStatus} stationConfig={stationConfig} />;
    }

    const renderContent = () => {
        switch(activeTab) {
            case 'dashboard': return <DashboardView t={t} productionData={productionData} />;
            case 'rawWood': 
                return <ProductionView 
                            t={t} 
                            productionData={productionData.filter(item => woodTreatments.some(wt => wt.id === item.process))} 
                            assignStation={assignStation} 
                            updateJobStatus={updateJobStatus}
                            deleteBatch={deleteBatch}
                            isRawWood={true}
                            woodTreatments={woodTreatments}
                            stationConfig={stationConfig}
                        />;
            case 'production': return <ProductionView t={t} productionData={productionData} assignStation={assignStation} updateJobStatus={updateJobStatus} deleteBatch={deleteBatch} />;
            case 'dataEntry': return <DataEntryView t={t} addBatch={addBatch} setActiveTab={setActiveTab} customProcesses={customProcesses} woodTreatments={woodTreatments} />;
            case 'settings': return <SettingsView t={t} appMode={appMode} setAppMode={setAppMode} stationConfig={stationConfig} setStationConfig={setStationConfig} customProcesses={customProcesses} setCustomProcesses={setCustomProcesses} woodTreatments={woodTreatments} setWoodTreatments={setWoodTreatments} />;
            default: return <div className="p-12 text-center text-gray-500">{t.settingsLoading}</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} t={t} />
            <Header t={t} lang={lang} setLang={setLang} />
            <main className="pl-64 pt-16 h-screen overflow-y-auto">
                <div className={`p-8 mx-auto ${activeTab === 'production' || activeTab === 'rawWood' ? 'max-w-full' : 'max-w-7xl'}`}>
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

// Mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);