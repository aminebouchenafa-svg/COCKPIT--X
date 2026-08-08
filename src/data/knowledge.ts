export interface KnowledgeCard {
  slug: string
  title: string
  subtitle: string
  category: string
}

export const knowledgeCards: KnowledgeCard[] = [
  {
    slug: 'types-brouillard',
    title: 'Types de brouillard',
    subtitle: 'Radiation, advection, pente ascendante, vapeur',
    category: 'Météo',
  },
  {
    slug: 'vx-vy',
    title: 'Vx vs Vy',
    subtitle: 'Meilleure pente vs meilleur taux de montée',
    category: 'Performance',
  },
  {
    slug: 'signaux-lumineux-atc',
    title: 'Signaux lumineux ATC',
    subtitle: 'Communication par signaux lumineux (perte radio)',
    category: 'Réglementation',
  },
  {
    slug: 'decrochages',
    title: 'Décrochages',
    subtitle: 'Angle d\'attaque critique, types et récupération',
    category: 'Aérodynamique',
  },
  {
    slug: 'hypoxie',
    title: 'Hypoxie',
    subtitle: 'Reconnaître, comprendre, prévenir',
    category: 'Physiologie',
  },
  {
    slug: 'mayday-pan-pan',
    title: 'Mayday vs Pan Pan',
    subtitle: 'Appels de détresse et d\'urgence',
    category: 'Réglementation',
  },
  {
    slug: 'altitude-niveau-transition',
    title: 'Altitude / niveau de transition',
    subtitle: 'Passage du calage local au calage standard',
    category: 'Réglementation',
  },
]

export interface FogType {
  name: string
  description: string
  traits: string[]
}

export const fogTypes: FogType[] = [
  {
    name: 'Brouillard de rayonnement (radiation fog)',
    description:
      'Se forme par nuit claire et calme, quand le sol se refroidit rapidement et refroidit l\'air à son contact.',
    traits: [
      'Nuits claires et calmes',
      'Fréquent dans les vallées et zones basses',
      'Se dissipe après le lever du soleil',
    ],
  },
  {
    name: 'Brouillard d\'advection (advection fog)',
    description:
      'Se forme quand une masse d\'air chaud et humide se déplace au-dessus d\'une surface froide.',
    traits: [
      'Air chaud et humide sur surface froide',
      'Fréquent au-dessus des eaux froides',
      'Peut persister plusieurs heures, voire plusieurs jours',
    ],
  },
  {
    name: 'Brouillard de pente (upslope fog)',
    description:
      'Se forme lorsque de l\'air humide est forcé de monter le long d\'un relief, se refroidit et se condense.',
    traits: [
      'Air humide qui monte le long du relief',
      'Fréquent sur les versants exposés au vent',
      'Peut être persistant et localisé',
    ],
  },
  {
    name: 'Brouillard de vapeur (steam fog)',
    description:
      'Se forme quand de l\'air froid se déplace au-dessus d\'une eau plus chaude.',
    traits: [
      'Air froid au-dessus d\'eau chaude',
      'Fréquent en hiver près des eaux libres',
      'Se forme et se lève généralement rapidement',
    ],
  },
]

export const fogPilotTakeaway = [
  'Le brouillard réduit la visibilité et augmente le risque.',
  'Identifier le type de brouillard aide à anticiper son évolution.',
  'Rester informé, planifier à l\'avance et respecter les minimas de sécurité.',
]

export const vxVy = {
  vx: {
    title: 'Vx — Meilleure pente de montée',
    definition:
      'Offre le meilleur gain d\'altitude sur la plus courte distance horizontale.',
    usage: ['Franchissement d\'obstacles après décollage', 'Départs sur piste courte'],
    traits: ['Montée plus raide', 'Vitesse air plus faible que Vy', 'Refroidissement moteur moindre'],
    tag: 'FRANCHISSEMENT D\'OBSTACLES',
  },
  vy: {
    title: 'Vy — Meilleur taux de montée',
    definition: 'Offre le meilleur gain d\'altitude dans le temps le plus court.',
    usage: ['Montée normale après franchissement des obstacles', 'Atteindre l\'altitude de croisière efficacement'],
    traits: ['Vitesse de montée plus rapide que Vx', 'Meilleur refroidissement moteur', 'Taux de montée le plus élevé'],
    tag: 'MONTÉE LA PLUS RAPIDE',
  },
  comparison: [
    { feature: 'Nom complet', vx: 'Best Angle of Climb', vy: 'Best Rate of Climb' },
    { feature: 'Objectif', vx: 'Franchir des obstacles', vy: 'Gagner de l\'altitude au plus vite' },
    { feature: 'Angle de montée', vx: 'Le plus raide', vy: 'Modéré' },
    { feature: 'Taux de montée', vx: 'Plus faible', vy: 'Le plus élevé' },
    { feature: 'Vitesse air', vx: 'Plus faible', vy: 'Plus élevée' },
    { feature: 'Utilisation', vx: 'Obstacles présents', vy: 'Montée normale' },
  ],
  notes: [
    'Vx est utilisée immédiatement après le décollage quand le franchissement d\'obstacles est requis.',
    'Une fois les obstacles franchis, passer à Vy pour la montée la plus efficace.',
    'Les deux vitesses diminuent avec la masse de l\'avion et varient selon le type d\'appareil et les conditions.',
    'Toujours se référer au manuel de vol (AFM) ou au POH pour les valeurs exactes de Vx et Vy.',
  ],
}

export interface AtcLightSignal {
  signal: string
  ground: string
  air: string
}

export const atcLightSignals: AtcLightSignal[] = [
  { signal: 'Feu vert fixe', ground: 'Autorisé à décoller', air: 'Autorisé à atterrir' },
  { signal: 'Feu vert clignotant', ground: 'Autorisé à circuler (roulage)', air: 'Revenir pour atterrir' },
  { signal: 'Feu rouge fixe', ground: 'Arrêt', air: 'Cédez le passage et continuez le circuit' },
  { signal: 'Feu rouge clignotant', ground: 'Dégagez la piste en service', air: 'Aérodrome dangereux — n\'atterrissez pas' },
  { signal: 'Feu blanc clignotant', ground: 'Retournez au point de départ sur l\'aérodrome', air: 'Non applicable' },
  { signal: 'Feux rouge et vert alternés', ground: 'Extrême prudence', air: 'Extrême prudence' },
  { signal: 'Fusée rouge (pyrotechnique)', ground: 'N\'atterrissez pas pour le moment, quelles que soient les instructions précédentes', air: 'N\'atterrissez pas pour le moment, quelles que soient les instructions précédentes' },
]

export const stallInfo = {
  whatIsAStall: [
    'Un décrochage n\'est PAS causé par une faible vitesse.',
    'Il survient quand l\'angle d\'attaque (AoA) dépasse l\'angle d\'attaque critique.',
    'L\'écoulement d\'air se décolle de l\'aile, la portance chute rapidement.',
    'L\'avion peut décrocher à n\'importe quelle vitesse, assiette ou puissance.',
  ],
  criticalAoa: '≈ 15° à 18° (varie selon l\'avion)',
  howItHappens: [
    'Vol normal : écoulement lisse, portance normale.',
    'AoA en augmentation : la portance augmente.',
    'AoA critique dépassé : décollement de l\'écoulement, perte de portance, décrochage.',
  ],
  speedIncreasingFactors: [
    'Angle d\'inclinaison (virage)',
    'Facteur de charge élevé',
    'Turbulence',
    'Givre / gel',
    'Entrées de commandes brusques',
    'Masse élevée',
  ],
  types: [
    { name: 'Décrochage moteur réduit', context: 'Approche / atterrissage', cause: 'Puissance réduite, AoA élevé' },
    { name: 'Décrochage en puissance', context: 'Décollage / départ', cause: 'Forte puissance, AoA élevé' },
    { name: 'Décrochage accéléré', context: 'Manœuvre', cause: 'Facteur de charge excessif ou cabré brusque' },
    { name: 'Décrochage en dérapage croisé', context: 'Commandes croisées', cause: 'Mauvais usage palonnier/ailerons' },
    { name: 'Décrochage secondaire', context: 'Récupération', cause: 'Décrochage pendant la récupération d\'un premier décrochage' },
  ],
  warningSigns: [
    'Avertisseur de décrochage',
    'Vibrations de cellule (buffet)',
    'Commandes molles',
    'Efficacité des commandes réduite',
    'Assiette à cabrer élevée',
    'Taux de descente croissant',
  ],
  recovery: [
    'Réduire l\'angle d\'attaque',
    'Appliquer pleine puissance (si disponible)',
    'Mettre les ailes à plat',
    'Prévenir un décrochage secondaire',
    'Revenir à la trajectoire de vol désirée',
  ],
  stallSpeedByBank: [
    { bank: '0°', factor: '1.00 Vs' },
    { bank: '30°', factor: '1.15 Vs' },
    { bank: '45°', factor: '1.41 Vs' },
    { bank: '60°', factor: '2.00 Vs' },
  ],
}

export const hypoxiaInfo = {
  definition:
    'L\'hypoxie est un état causé par un manque d\'oxygène atteignant les tissus du corps. En altitude, l\'air contient moins d\'oxygène, ce qui peut altérer la réflexion, le jugement et la coordination sans que le pilote s\'en rende compte.',
  types: [
    { name: 'Hypoxie hypoxique', desc: 'Causée par un manque d\'oxygène ambiant (altitude). Type le plus courant en aviation.' },
    { name: 'Hypoxie hypoxémique', desc: 'Causée par un apport insuffisant d\'oxygène dans le sang, dû à un problème pulmonaire ou respiratoire.' },
    { name: 'Hypoxie anémique', desc: 'Causée par une capacité réduite du sang à transporter l\'oxygène (ex. anémie).' },
    { name: 'Hypoxie histotoxique', desc: 'Causée par l\'incapacité des cellules à utiliser l\'oxygène (ex. intoxication, comme au CO).' },
  ],
  causes: [
    'Altitude élevée (au-dessus de 10 000 ft sans oxygène)',
    'Décompression rapide',
    'Pressurisation inadéquate',
    'Panne du système d\'oxygène',
    'Effort prolongé en altitude',
    'Flux d\'air obstrué / difficultés respiratoires',
  ],
  symptoms: [
    'Légère euphorie',
    'Jugement altéré',
    'Mauvaise coordination',
    'Vision tunnel',
    'Maux de tête',
    'Somnolence / fatigue',
    'Confusion',
    'Perte de connaissance (à terme)',
  ],
  tuc: [
    { altitude: '10 000 ft (3 000 m)', tuc: '30 – 60 min' },
    { altitude: '15 000 ft (4 500 m)', tuc: '5 – 10 min' },
    { altitude: '20 000 ft (6 000 m)', tuc: '2 – 3 min' },
    { altitude: '25 000 ft (7 500 m)', tuc: '30 – 60 sec' },
    { altitude: '30 000 ft (9 000 m)', tuc: '15 – 20 sec' },
    { altitude: '35 000 ft (10 500 m)', tuc: '9 – 15 sec' },
    { altitude: '40 000 ft (12 000 m)', tuc: '5 – 10 sec' },
  ],
  tucNote:
    'Le temps de conscience utile (TUC) varie selon la condition physique, l\'effort, la ventilation et l\'âge. Utilise l\'oxygène — ne te fie pas au temps.',
  prevention: [
    'Utiliser l\'oxygène au-dessus de 10 000 ft (selon réglementation et exigences avion/équipage)',
    'Vérification prévol : système d\'oxygène en état et quantité suffisante',
    'Connaître les limites de pressurisation de l\'avion',
    'Reconnaître les premiers symptômes chez soi et chez les autres',
    'Utiliser l\'oxygène supplémentaire immédiatement en cas de symptômes',
    'Rester hydraté, bien reposé et éviter l\'alcool avant de voler',
  ],
  worseningFactors: [
    { name: 'Tabac', desc: 'Réduit l\'absorption d\'oxygène et endommage les poumons.' },
    { name: 'Effort physique', desc: 'Augmente la demande en oxygène du corps.' },
    { name: 'Alcool', desc: 'Déprime la respiration et altère le jugement.' },
    { name: 'Sédatifs / certains médicaments', desc: 'Peuvent causer somnolence et ralentir la respiration.' },
    { name: 'Fatigue / manque de sommeil', desc: 'Réduit la vigilance mentale et augmente le risque.' },
    { name: 'Déshydratation', desc: 'Épaissit le sang et réduit l\'apport d\'oxygène.' },
  ],
}

export const maydayPanPan = {
  mayday: {
    title: 'MAYDAY — Appel de détresse',
    definition:
      'Utilisé quand une situation implique un danger grave et imminent pour l\'avion ou les personnes à bord, nécessitant une assistance immédiate.',
    examples: [
      'Panne moteur avec danger imminent',
      'Feu ou fumée à bord',
      'Décompression rapide',
      'Dommages sérieux ou perte de contrôle',
      'Atterrissage forcé ou amerrissage',
    ],
    call: 'MAYDAY MAYDAY MAYDAY',
    meaning: 'Assistance immédiate requise.',
  },
  panPan: {
    title: 'PAN PAN — Appel d\'urgence',
    definition:
      'Utilisé quand une situation nécessite une attention ou une assistance urgente, mais sans danger grave et imminent pour l\'avion ou les personnes à bord.',
    examples: [
      'Problème médical nécessitant une assistance urgente',
      'Panne technique sans danger immédiat',
      'Problème de carburant nécessitant un traitement prioritaire',
      'Problème de communication ou de navigation',
      'Autre situation nécessitant une attention urgente',
    ],
    call: 'PAN PAN PAN PAN PAN PAN',
    meaning: 'Assistance ou attention urgente requise.',
  },
  radioPrinciples: ['Parler clairement', 'Indiquer la nature du problème', 'Donner sa position'],
}

export const transitionAltitudeLevel = {
  belowTa: {
    title: 'En dessous de l\'altitude de transition (TA)',
    detail: 'Calage local (QNH/QFE) utilisé sur l\'altimètre.',
  },
  layer: {
    title: 'Couche de transition',
    detail:
      'Couche entre TA et TL où l\'avion passe du calage local au calage standard.',
  },
  aboveTl: {
    title: 'Au-dessus du niveau de transition (TL)',
    detail: 'Calage standard 1013,25 hPa (29,92 inHg) utilisé sur l\'altimètre.',
  },
  keyPoints: [
    'En dessous de la TA : utiliser le calage local (QNH/QFE).',
    'Entre TA et TL : transition du calage local au calage standard.',
    'Au-dessus de la TL : utiliser le calage standard (1013,25 hPa / 29,92 inHg).',
    'Toujours suivre les instructions ATC et vérifier la TA et la TL applicables dans l\'AIP de la région — elles varient selon les pays et les aérodromes.',
  ],
  example: { ta: '5 000 ft', tl: 'FL 180' },
}
