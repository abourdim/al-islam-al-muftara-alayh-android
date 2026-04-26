/* الإسلام المفترى عليه — ISLAM FALSELY ACCUSED — app.js v1.0 */
/* Based on "Al-Islam al-Muftara Alayh" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الإسلام المفترى عليه',
    splashSub: 'الحقيقة في مواجهة الأباطيل',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الصف ٦١: ٨',
    tabHome: 'الرئيسية', tabTraits: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'ردود على الافتراءات',
    traitsDesc: '١٥ افتراءً شائعاً على الإسلام مع الردود العلمية — كل بطاقة بآية وحديث ومثال عملي',
    quizTitle: '🏆 من سيصبح مدافعاً؟',
    quizDesc: 'اختبر معلوماتك عن حقيقة الإسلام — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي في المعرفة',
    progressDesc: 'تقدمك وإنجازاتك في رحلة الدفاع عن الحقيقة',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية نصرة الحق',
    dailyLabel: '✨ حقيقة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 شارك الحقيقة',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ رداً على أشهر الافتراءات على الإسلام',
      'مسابقة "من سيصبح مدافعاً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Islam Falsely Accused',
    splashSub: 'Truth against falsehoods',
    splashHint: 'tap to skip',
    sacredRef: 'Surah As-Saff 61:8',
    tabHome: 'Home', tabTraits: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Responses to False Claims',
    traitsDesc: '15 common misconceptions about Islam with scholarly responses — each with a verse, hadith, and practical example',
    quizTitle: '🏆 Who Wants to Be a Defender?',
    quizDesc: 'Test your knowledge about the truth of Islam — 4 choices per question',
    progressTitle: 'My Knowledge Journey',
    progressDesc: 'Your progress and achievements in defending the truth',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Truth',
    dailyLabel: "✨ Today's Fact",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Share the Truth',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 responses to common misconceptions about Islam',
      '"Who Wants to Be a Defender?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: "L\'Islam Faussement Accuse",
    splashSub: 'La verite face aux mensonges',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate As-Saff 61:8',
    tabHome: 'Accueil', tabTraits: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Reponses aux Fausses Accusations',
    traitsDesc: '15 idees recues sur l\'Islam avec des reponses savantes — chacune avec un verset, un hadith et un exemple pratique',
    quizTitle: '🏆 Qui Veut Devenir Defenseur ?',
    quizDesc: 'Testez vos connaissances sur la verite de l\'Islam — 4 choix par question',
    progressTitle: 'Mon Parcours de Savoir',
    progressDesc: 'Vos progres et realisations dans la defense de la verite',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Verite',
    dailyLabel: '✨ Fait du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Partagez la Verite',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 reponses aux idees recues sur l\'Islam',
      'Quiz « Qui Veut Devenir Defenseur ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 REFUTATION CARDS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'🕊️',
    ar:{title:'الإسلام ليس دين عنف',desc:'يرد الغزالي في "الإسلام المفترى عليه": يدّعي البعض أن الإسلام دين عنف وقتال. الحقيقة أن كلمة "إسلام" مشتقة من السلام. القتال في الإسلام مشروع فقط للدفاع عن النفس ورد العدوان. النبي صلى الله عليه وسلم عاش معظم حياته يدعو بالحكمة والموعظة الحسنة دون قتال.',verse:'وَإِنْ جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا وَتَوَكَّلْ عَلَى اللَّهِ',verseRef:'الأنفال ٦١',hadith:'المسلم من سلم المسلمون من لسانه ويده — متفق عليه',action:'عندما يسألك أحد عن العنف، اشرح له أن الإسلام يعني السلام حرفياً',young:'الإسلام يعني السلام! المسلم الحقيقي لا يؤذي أحداً بل يحب الخير للجميع 🕊️'},
    en:{title:'Islam Is Not a Religion of Violence',desc:'Al-Ghazali responds in "Islam Falsely Accused": Some claim Islam is a religion of violence and war. The truth is that the word "Islam" derives from peace (salaam). Fighting in Islam is only permitted for self-defense and repelling aggression. The Prophet (PBUH) spent most of his life calling people to God with wisdom and gentle preaching, not warfare.',verse:'And if they incline to peace, then incline to it and rely upon Allah',verseRef:'Al-Anfal 61',hadith:'A Muslim is one from whose tongue and hand other Muslims are safe — Agreed upon',action:'When someone asks about violence, explain that Islam literally means peace',young:'Islam means peace! A true Muslim does not hurt anyone but wishes good for all 🕊️'},
    fr:{title:"L'Islam N'est Pas une Religion de Violence",desc:'Certains pretendent que l\'Islam est une religion de violence et de guerre. La verite est que le mot "Islam" derive de la paix (salaam). Le combat en Islam n\'est permis que pour la legitime defense. Le Prophete (PSL) a passe la majeure partie de sa vie a appeler les gens avec sagesse et douceur.',verse:'Et s\'ils inclinent vers la paix, incline vers elle et place ta confiance en Allah',verseRef:'Al-Anfal 61',hadith:'Le musulman est celui dont les autres musulmans sont a l\'abri de sa langue et de sa main — Unanimement reconnu',action:'Quand quelqu\'un pose des questions sur la violence, expliquez que l\'Islam signifie litteralement la paix',young:'L\'Islam signifie la paix ! Un vrai musulman ne fait de mal a personne et souhaite le bien a tous 🕊️'}
  },
  {
    id:2, emoji:'👩‍🎓',
    ar:{title:'الإسلام لا يظلم المرأة',desc:'يرد الغزالي في "الإسلام المفترى عليه": يُزعم أن الإسلام يضطهد المرأة. الحقيقة أن الإسلام أول من أعطى المرأة حق الملكية والميراث والتعليم والعمل قبل ١٤٠٠ سنة. خديجة رضي الله عنها كانت سيدة أعمال ناجحة، وعائشة كانت عالمة يرجع إليها الصحابة في الفتوى.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢٢٨',hadith:'النساء شقائق الرجال — رواه أبو داود',action:'تعرف على قصة خديجة أو عائشة وشاركها مع من يسأل عن المرأة في الإسلام',young:'في الإسلام، البنات والأولاد لهم نفس الحقوق في التعلم والاحترام! 👩‍🎓'},
    en:{title:'Islam Does Not Oppress Women',desc:'Al-Ghazali responds in "Islam Falsely Accused": Some claim that Islam oppresses women. The truth is that Islam was the first to grant women the right to own property, inherit, study, and work over 1400 years ago. Khadijah (RA) was a successful businesswoman, and Aisha was a scholar whom the Companions consulted for rulings.',verse:'And women have rights similar to what is expected of them, according to what is reasonable',verseRef:'Al-Baqarah 228',hadith:'Women are the twin halves of men — Abu Dawud',action:'Learn about the story of Khadijah or Aisha and share it with anyone who asks about women in Islam',young:'In Islam, girls and boys have equal rights to learn and be respected! 👩‍🎓'},
    fr:{title:"L'Islam N'opprime Pas les Femmes",desc:'Certains pretendent que l\'Islam opprime les femmes. La verite est que l\'Islam a ete le premier a accorder aux femmes le droit de propriete, d\'heritage, d\'education et de travail il y a plus de 1400 ans. Khadijah etait une femme d\'affaires prospere et Aisha etait une savante consultee par les Compagnons.',verse:'Et elles ont des droits equivalents a leurs obligations, selon la bienseance',verseRef:'Al-Baqarah 228',hadith:'Les femmes sont les moities jumelles des hommes — Abu Dawud',action:'Decouvrez l\'histoire de Khadijah ou Aisha et partagez-la avec ceux qui posent des questions',young:'En Islam, les filles et les garcons ont les memes droits a l\'education et au respect ! 👩‍🎓'}
  },
  {
    id:3, emoji:'🔬',
    ar:{title:'الإسلام ليس ضد العلم',desc:'يرد الغزالي في "الإسلام المفترى عليه": يُقال إن الإسلام ضد العلم والتقدم. الحقيقة أن أول كلمة نزلت في القرآن هي "اقرأ". العلماء المسلمون اخترعوا الجبر والخوارزميات والبوصلة وأسسوا علم البصريات. ابن الهيثم يُعتبر أبا المنهج التجريبي.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'ابحث عن عالم مسلم واحد وتعرف على إنجازاته العلمية',young:'هل تعلم أن أول كلمة في القرآن هي "اقرأ"؟ الإسلام يحب العلم جداً! 🔬'},
    en:{title:'Islam Is Not Against Science',desc:'Al-Ghazali responds in "Islam Falsely Accused": Some say Islam is against science and progress. The truth is that the first word revealed in the Quran was "Read." Muslim scholars invented algebra, algorithms, and the compass, and founded the field of optics. Ibn al-Haytham is considered the father of the scientific method.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Research one Muslim scientist and learn about their achievements',young:'Did you know the first word in the Quran is "Read"? Islam loves science so much! 🔬'},
    fr:{title:"L'Islam N'est Pas Contre la Science",desc:'Certains disent que l\'Islam est contre la science et le progres. La verite est que le premier mot revele dans le Coran etait "Lis". Les savants musulmans ont invente l\'algebre, les algorithmes et la boussole, et fonde l\'optique. Ibn al-Haytham est considere comme le pere de la methode experimentale.',verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'Quiconque emprunte un chemin a la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:'Recherchez un scientifique musulman et decouvrez ses realisations',young:'Savais-tu que le premier mot du Coran est "Lis" ? L\'Islam aime beaucoup la science ! 🔬'}
  },
  {
    id:4, emoji:'🤝',
    ar:{title:'الإسلام دين تسامح',desc:'يرد الغزالي في "الإسلام المفترى عليه": يُتهم الإسلام بعدم التسامح مع الآخرين. الحقيقة أن الإسلام أمر بالإحسان إلى غير المسلمين والعدل معهم. عاش اليهود والمسيحيون في بلاد المسلمين بأمان وحرية لقرون طويلة. صلاح الدين عندما فتح القدس لم يُسئ لأحد.',verse:'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ أَنْ تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ',verseRef:'الممتحنة ٨',hadith:'من آذى ذمياً فقد آذاني — رواه الطبراني',action:'كن لطيفاً اليوم مع جار أو زميل من دين مختلف',young:'كن لطيفاً مع الجميع بغض النظر عن دينهم أو لونهم! الله يحب العدل 🤝'},
    en:{title:'Islam Is a Religion of Tolerance',desc:'Al-Ghazali responds in "Islam Falsely Accused": Islam is accused of intolerance toward others. The truth is that Islam commands kindness and justice toward non-Muslims. Jews and Christians lived in Muslim lands safely and freely for centuries. When Saladin conquered Jerusalem, he harmed no one.',verse:'Allah does not forbid you from being good and just to those who have not fought you in religion',verseRef:'Al-Mumtahanah 8',hadith:'Whoever harms a non-Muslim under treaty has harmed me — Tabarani',action:'Be kind today to a neighbor or colleague of a different faith',young:'Be kind to everyone regardless of their religion or color! Allah loves fairness 🤝'},
    fr:{title:"L\'Islam Est une Religion de Tolerance",desc:'L\'Islam est accuse d\'intolerance envers les autres. La verite est que l\'Islam ordonne la bienveillance et la justice envers les non-musulmans. Les juifs et les chretiens ont vecu en terres musulmanes en securite et liberte pendant des siecles.',verse:'Allah ne vous defend pas d\'etre bons et justes envers ceux qui ne vous ont pas combattus en religion',verseRef:'Al-Mumtahanah 8',hadith:'Quiconque nuit a un non-musulman sous traite m\'a nui — Tabarani',action:'Soyez aimable aujourd\'hui avec un voisin ou collegue d\'une foi differente',young:'Sois gentil avec tout le monde, quelle que soit sa religion ou sa couleur ! Allah aime la justice 🤝'}
  },
  {
    id:5, emoji:'🚫',
    ar:{title:'الإسلام يرفض الإرهاب',desc:'يرد الغزالي في "الإسلام المفترى عليه": يربط البعض بين الإسلام والإرهاب. الحقيقة أن الإسلام يحرم قتل الأبرياء تحريماً قاطعاً. القرآن يقول إن من قتل نفساً فكأنما قتل الناس جميعاً. الإرهاب خيانة لتعاليم الإسلام وليس تطبيقاً لها.',verse:'مَنْ قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا',verseRef:'المائدة ٣٢',hadith:'لا ضرر ولا ضرار — رواه ابن ماجه',action:'اشرح لمن يسأل أن الإسلام يحرم إيذاء الأبرياء تحريماً مطلقاً',young:'الإسلام يقول: لا تؤذِ أحداً! كل حياة ثمينة وغالية عند الله 🚫'},
    en:{title:'Islam Rejects Terrorism',desc:'Al-Ghazali responds in "Islam Falsely Accused": Some link Islam with terrorism. The truth is that Islam categorically forbids killing innocent people. The Quran states that killing one person is like killing all of humanity. Terrorism is a betrayal of Islamic teachings, not an application of them.',verse:'Whoever kills a soul without justification, it is as if they killed all of humanity',verseRef:'Al-Maidah 32',hadith:'No harm and no reciprocating harm — Ibn Majah',action:'Explain to anyone who asks that Islam absolutely forbids harming innocents',young:'Islam says: do not hurt anyone! Every life is precious and valuable to Allah 🚫'},
    fr:{title:"L\'Islam Rejette le Terrorisme",desc:'Certains lient l\'Islam au terrorisme. La verite est que l\'Islam interdit categoriquement le meurtre d\'innocents. Le Coran declare que tuer une personne est comme tuer toute l\'humanite. Le terrorisme est une trahison des enseignements islamiques.',verse:'Quiconque tue une ame sans droit, c\'est comme s\'il avait tue toute l\'humanite',verseRef:'Al-Maidah 32',hadith:'Pas de prejudice ni de reciprocite de prejudice — Ibn Majah',action:'Expliquez a quiconque demande que l\'Islam interdit absolument de nuire aux innocents',young:'L\'Islam dit : ne fais de mal a personne ! Chaque vie est precieuse et chere a Allah 🚫'}
  },
  {
    id:6, emoji:'💚',
    ar:{title:'لا إكراه في الدين',desc:'يرد الغزالي في "الإسلام المفترى عليه": يُقال إن الإسلام ينتشر بالسيف. الحقيقة أن القرآن ينص صراحة على أنه لا إكراه في الدين. ملايين المسلمين في إندونيسيا وماليزيا وأفريقيا دخلوا الإسلام عبر التجار والدعاة لا عبر الجيوش.',verse:'لَا إِكْرَاهَ فِي الدِّينِ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'البقرة ٢٥٦',hadith:'بلغوا عني ولو آية — رواه البخاري',action:'تعلم كيف انتشر الإسلام في جنوب شرق آسيا عبر التجارة والأخلاق',young:'الإسلام لا يجبر أحداً! الناس يدخلون الإسلام لأنهم يحبونه بقلوبهم 💚'},
    en:{title:'No Compulsion in Religion',desc:'Al-Ghazali responds in "Islam Falsely Accused": Some say Islam was spread by the sword. The truth is that the Quran explicitly states there is no compulsion in religion. Millions of Muslims in Indonesia, Malaysia, and Africa embraced Islam through merchants and preachers, not armies.',verse:'There is no compulsion in religion. The right path has become clear from the wrong',verseRef:'Al-Baqarah 256',hadith:'Convey from me even if it is one verse — Bukhari',action:'Learn how Islam spread in Southeast Asia through trade and good character',young:'Islam does not force anyone! People enter Islam because they love it with their hearts 💚'},
    fr:{title:'Pas de Contrainte en Religion',desc:'Al-Ghazali répond dans "L\'Islam Accusé à Tort": Certains disent que l\'Islam s\'est repandu par l\'epee. La verite est que le Coran declare explicitement qu\'il n\'y a pas de contrainte en religion. Des millions de musulmans en Indonesie et en Afrique ont embrasse l\'Islam par les marchands et les predicateurs.',verse:'Nulle contrainte en religion. Le bon chemin s\'est distingue de l\'egarement',verseRef:'Al-Baqarah 256',hadith:'Transmettez de moi, ne serait-ce qu\'un verset — Bukhari',action:'Decouvrez comment l\'Islam s\'est repandu en Asie du Sud-Est par le commerce et la bonne conduite',young:'L\'Islam ne force personne ! Les gens entrent en Islam parce qu\'ils l\'aiment de tout coeur 💚'}
  },
  {
    id:7, emoji:'🚀',
    ar:{title:'الإسلام ليس ديناً متخلفاً',desc:'يُوصف الإسلام بالتخلف. الحقيقة أن الحضارة الإسلامية قادت العالم لقرون في العلوم والطب والفلك والهندسة. بغداد وقرطبة والقاهرة كانت عواصم العلم عندما كانت أوروبا في عصورها المظلمة.',verse:'كُنْتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ',verseRef:'آل عمران ١١٠',hadith:'اطلبوا العلم من المهد إلى اللحد',action:'ابحث عن ثلاثة اختراعات من الحضارة الإسلامية وشاركها مع أصدقائك',young:'المسلمون اخترعوا أشياء كثيرة مثل الجبر والبوصلة والمستشفيات! 🚀'},
    en:{title:'Islam Is Not Backward',desc:'Islam is described as backward. The truth is that Islamic civilization led the world for centuries in science, medicine, astronomy, and engineering. Baghdad, Cordoba, and Cairo were capitals of knowledge when Europe was in its Dark Ages.',verse:'You are the best nation produced for mankind',verseRef:'Al Imran 110',hadith:'Seek knowledge from the cradle to the grave',action:'Research three inventions from Islamic civilization and share them with your friends',young:'Muslims invented many things like algebra, the compass, and hospitals! 🚀'},
    fr:{title:"L'Islam N'est Pas Retarde",desc:'L\'Islam est decrit comme arriere. La verite est que la civilisation islamique a mene le monde pendant des siecles en science, medecine, astronomie et ingenierie. Bagdad, Cordoue et Le Caire etaient des capitales du savoir.',verse:'Vous etes la meilleure communaute produite pour les gens',verseRef:'Al Imran 110',hadith:'Cherchez le savoir du berceau a la tombe',action:'Recherchez trois inventions de la civilisation islamique et partagez-les avec vos amis',young:'Les musulmans ont invente beaucoup de choses comme l\'algebre, la boussole et les hopitaux ! 🚀'}
  },
  {
    id:8, emoji:'🗳️',
    ar:{title:'الإسلام والديمقراطية',desc:'يُقال إن الإسلام لا يتوافق مع الديمقراطية. الحقيقة أن مبدأ الشورى في الإسلام سبق الديمقراطية بقرون. أبو بكر اختاره المسلمون بالشورى. الإسلام يأمر بالعدل ومحاسبة الحاكم ورفض الظلم.',verse:'وَأَمْرُهُمْ شُورَى بَيْنَهُمْ',verseRef:'الشورى ٣٨',hadith:'خير أمرائكم الذين تحبونهم ويحبونكم — رواه مسلم',action:'تعلم عن مبدأ الشورى في الإسلام وكيف يشبه الديمقراطية',young:'في الإسلام، الناس يتشاورون ويقررون معاً! هذا يشبه التصويت 🗳️'},
    en:{title:'Islam and Democracy',desc:'Some say Islam is incompatible with democracy. The truth is that the principle of shura (consultation) in Islam preceded democracy by centuries. Abu Bakr was chosen by Muslims through consultation. Islam commands justice, accountability of rulers, and rejection of oppression.',verse:'And their affairs are conducted by mutual consultation among them',verseRef:'Ash-Shura 38',hadith:'The best of your rulers are those whom you love and who love you — Muslim',action:'Learn about the principle of shura in Islam and how it resembles democracy',young:'In Islam, people consult each other and decide together! That is similar to voting 🗳️'},
    fr:{title:"L\'Islam et la Democratie",desc:'Certains disent que l\'Islam est incompatible avec la democratie. La verite est que le principe de choura (consultation) en Islam a precede la democratie de plusieurs siecles. Abu Bakr a ete choisi par consultation. L\'Islam commande la justice et la responsabilite des dirigeants.',verse:'Et leurs affaires se reglent par consultation mutuelle entre eux',verseRef:'Ash-Shura 38',hadith:'Les meilleurs de vos dirigeants sont ceux que vous aimez et qui vous aiment — Muslim',action:'Decouvrez le principe de choura en Islam et comment il ressemble a la democratie',young:'En Islam, les gens se consultent et decident ensemble ! C\'est similaire au vote 🗳️'}
  },
  {
    id:9, emoji:'⚖️',
    ar:{title:'العقوبات في سياقها',desc:'يُنتقد الإسلام بسبب عقوباته. الحقيقة أن العقوبات في الإسلام لها شروط صارمة جداً يندر تحققها. الهدف هو الردع لا العقاب. الإسلام يفضل العفو ويشترط اليقين الكامل. عمر بن الخطاب أوقف حد السرقة عام المجاعة.',verse:'وَالَّذِينَ إِذَا أَصَابَهُمُ الْبَغْيُ هُمْ يَنْتَصِرُونَ',verseRef:'الشورى ٣٩',hadith:'ادرؤوا الحدود بالشبهات — رواه الترمذي',action:'ابحث عن شروط تطبيق الحدود في الإسلام وكيف يفضل الإسلام العفو',young:'الإسلام يحب العفو والمسامحة! العقاب آخر حل وليس أول حل ⚖️'},
    en:{title:'Punishments in Context',desc:'Islam is criticized for its punishments. The truth is that punishments in Islam have very strict conditions that are rarely met. The goal is deterrence, not punishment. Islam prefers forgiveness and requires absolute certainty. Umar ibn al-Khattab suspended the punishment for theft during a famine.',verse:'And those who, when wronged, defend themselves',verseRef:'Ash-Shura 39',hadith:'Avert the prescribed punishments through doubts — Tirmidhi',action:'Research the conditions for implementing punishments in Islam and how Islam prefers forgiveness',young:'Islam loves forgiveness and mercy! Punishment is the last solution, not the first ⚖️'},
    fr:{title:'Les Punitions dans Leur Contexte',desc:'Al-Ghazali répond dans "L\'Islam Accusé à Tort": L\'Islam est critique pour ses punitions. La verite est que les punitions en Islam ont des conditions tres strictes rarement reunies. L\'objectif est la dissuasion. L\'Islam prefere le pardon et exige une certitude absolue.',verse:'Et ceux qui, lorsqu\'ils sont victimes d\'injustice, se defendent',verseRef:'Ash-Shura 39',hadith:'Repoussez les peines prescrites par les doutes — Tirmidhi',action:'Recherchez les conditions d\'application des peines en Islam et comment l\'Islam prefere le pardon',young:'L\'Islam aime le pardon et la misericorde ! La punition est la derniere solution ⚖️'}
  },
  {
    id:10, emoji:'💍',
    ar:{title:'تعدد الزوجات في سياقه',desc:'يُنتقد تعدد الزوجات في الإسلام. الحقيقة أن التعدد كان موجوداً قبل الإسلام بلا حدود. الإسلام حدده بأربع بشرط العدل، وجعل الأصل التوحيد. نزلت آية التعدد بعد معركة أُحد لحماية الأرامل واليتامى.',verse:'فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً',verseRef:'النساء ٣',hadith:'من كانت له امرأتان فمال إلى إحداهما جاء يوم القيامة وشقه مائل — رواه أبو داود',action:'اقرأ عن السياق التاريخي لآية التعدد في سورة النساء',young:'الإسلام يطلب العدل دائماً! إذا لم تستطع أن تكون عادلاً، فالأفضل واحدة 💍'},
    en:{title:'Polygamy in Context',desc:'Polygamy in Islam is often criticized. The truth is that polygamy existed before Islam without limits. Islam limited it to four with the condition of justice, making monogamy the default. The verse on polygamy was revealed after the Battle of Uhud to protect widows and orphans.',verse:'But if you fear that you will not be just, then only one',verseRef:'An-Nisa 3',hadith:'Whoever has two wives and favors one over the other will come on the Day of Judgment with one side dragging — Abu Dawud',action:'Read about the historical context of the polygamy verse in Surah An-Nisa',young:'Islam always demands fairness! If you cannot be fair, then one wife is best 💍'},
    fr:{title:'La Polygamie dans Son Contexte',desc:'Al-Ghazali répond dans "L\'Islam Accusé à Tort": La polygamie en Islam est souvent critiquee. La verite est que la polygamie existait avant l\'Islam sans limites. L\'Islam l\'a limitee a quatre avec la condition de justice, faisant de la monogamie la norme.',verse:'Si vous craignez de ne pas etre justes, alors une seule',verseRef:'An-Nisa 3',hadith:'Quiconque a deux epouses et favorise l\'une viendra le Jour du Jugement avec un cote affaisse — Abu Dawud',action:'Lisez le contexte historique du verset sur la polygamie dans la Sourate An-Nisa',young:'L\'Islam exige toujours l\'equite ! Si tu ne peux pas etre juste, une seule epouse est mieux 💍'}
  },
  {
    id:11, emoji:'🧕',
    ar:{title:'الحجاب حرية لا قيد',desc:'يُقال إن الحجاب رمز للاضطهاد. الحقيقة أن ملايين المسلمات يرتدين الحجاب بإرادتهن كتعبير عن هويتهن وإيمانهن. الحجاب موجود في المسيحية واليهودية أيضاً. الحرية الحقيقية هي أن تختار المرأة ما تلبس.',verse:'يَا أَيُّهَا النَّبِيُّ قُلْ لِأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِنْ جَلَابِيبِهِنَّ',verseRef:'الأحزاب ٥٩',hadith:'الدين النصيحة — رواه مسلم',action:'تحدث مع مسلمة محجبة واسألها لماذا اختارت الحجاب بنفسها',young:'الحجاب مثل التاج! المسلمات يلبسنه لأنهن فخورات بإيمانهن 🧕'},
    en:{title:'Hijab Is Freedom Not Oppression',desc:'Some say the hijab is a symbol of oppression. The truth is that millions of Muslim women wear hijab by their own choice as an expression of their identity and faith. Hijab exists in Christianity and Judaism as well. True freedom is when a woman chooses what she wears.',verse:'O Prophet, tell your wives and daughters and the women of the believers to draw their outer garments over themselves',verseRef:'Al-Ahzab 59',hadith:'Religion is sincere advice — Muslim',action:'Talk to a hijab-wearing Muslim woman and ask her why she chose to wear it',young:'Hijab is like a crown! Muslim women wear it because they are proud of their faith 🧕'},
    fr:{title:'Le Hijab Est Liberte Pas Oppression',desc:'Al-Ghazali répond dans "L\'Islam Accusé à Tort": Certains disent que le hijab est un symbole d\'oppression. La verite est que des millions de musulmanes portent le hijab par choix comme expression de leur identite et de leur foi. Le hijab existe aussi dans le christianisme et le judaisme.',verse:'O Prophete, dis a tes epouses et tes filles et aux femmes des croyants de ramener sur elles leurs grands voiles',verseRef:'Al-Ahzab 59',hadith:'La religion c\'est le bon conseil — Muslim',action:'Parlez a une musulmane voilee et demandez-lui pourquoi elle a choisi de porter le hijab',young:'Le hijab est comme une couronne ! Les musulmanes le portent parce qu\'elles sont fieres de leur foi 🧕'}
  },
  {
    id:12, emoji:'🛡️',
    ar:{title:'الجهاد ليس حرباً عشوائية',desc:'يُفهم الجهاد خطأً على أنه حرب مقدسة. الحقيقة أن الجهاد الأكبر هو مجاهدة النفس. الجهاد العسكري محصور في الدفاع عن النفس فقط وله قواعد صارمة: لا تقتل شيخاً ولا امرأة ولا طفلاً ولا تقطع شجرة.',verse:'أُذِنَ لِلَّذِينَ يُقَاتَلُونَ بِأَنَّهُمْ ظُلِمُوا',verseRef:'الحج ٣٩',hadith:'رجعنا من الجهاد الأصغر إلى الجهاد الأكبر: جهاد النفس — البيهقي',action:'اشرح لمن يسأل أن الجهاد الحقيقي هو الاجتهاد في تحسين النفس',young:'الجهاد الحقيقي هو أن تحارب الكسل وتجتهد في المدرسة والعبادة! 🛡️'},
    en:{title:'Jihad Is Not Random Warfare',desc:'Jihad is wrongly understood as holy war. The truth is that the greater jihad is the struggle against oneself. Military jihad is restricted to self-defense only and has strict rules: do not kill an elder, a woman, or a child, and do not cut down a tree.',verse:'Permission is given to those who are fought because they were wronged',verseRef:'Al-Hajj 39',hadith:'We have returned from the lesser jihad to the greater jihad: the struggle of the soul — Bayhaqi',action:'Explain to anyone who asks that true jihad is striving to improve oneself',young:'Real jihad is fighting laziness and working hard in school and worship! 🛡️'},
    fr:{title:"Le Jihad N'est Pas une Guerre Aveugle",desc:'Le jihad est mal compris comme guerre sainte. La verite est que le grand jihad est la lutte contre soi-meme. Le jihad militaire est limite a la legitime defense uniquement et a des regles strictes.',verse:'Permission est donnee a ceux qui sont combattus parce qu\'ils ont ete opprimes',verseRef:'Al-Hajj 39',hadith:'Nous sommes revenus du petit jihad vers le grand jihad : la lutte de l\'ame — Bayhaqi',action:'Expliquez a quiconque demande que le vrai jihad est l\'effort pour s\'ameliorer',young:'Le vrai jihad c\'est combattre la paresse et travailler dur a l\'ecole et dans l\'adoration ! 🛡️'}
  },
  {
    id:13, emoji:'📜',
    ar:{title:'الإسلام وحقوق الإنسان',desc:'يُقال إن الإسلام لا يحترم حقوق الإنسان. الحقيقة أن خطبة الوداع للنبي تضمنت إعلاناً لحقوق الإنسان قبل الإعلان العالمي بـ ١٤ قرناً. الإسلام حرّم العنصرية وكفل حق الحياة والملكية والكرامة لكل إنسان.',verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',verseRef:'الإسراء ٧٠',hadith:'لا فضل لعربي على أعجمي إلا بالتقوى — رواه أحمد',action:'اقرأ خطبة الوداع وقارنها مع الإعلان العالمي لحقوق الإنسان',young:'في الإسلام، كل الناس متساوون! لا فرق بين أبيض وأسود أو عربي وأعجمي 📜'},
    en:{title:'Islam and Human Rights',desc:'Some claim Islam does not respect human rights. The truth is that the Farewell Sermon of the Prophet included a declaration of human rights 14 centuries before the Universal Declaration. Islam forbade racism and guaranteed the right to life, property, and dignity for every person.',verse:'And We have certainly honored the children of Adam',verseRef:'Al-Isra 70',hadith:'There is no superiority of an Arab over a non-Arab except through piety — Ahmad',action:'Read the Farewell Sermon and compare it with the Universal Declaration of Human Rights',young:'In Islam, all people are equal! There is no difference between white and black or Arab and non-Arab 📜'},
    fr:{title:"L'Islam et les Droits de l'Homme",desc:'Certains pretendent que l\'Islam ne respecte pas les droits de l\'homme. La verite est que le Sermon d\'Adieu contenait une declaration des droits de l\'homme 14 siecles avant la Declaration Universelle. L\'Islam a interdit le racisme et garanti le droit a la vie et a la dignite.',verse:'Et Nous avons certes honore les enfants d\'Adam',verseRef:'Al-Isra 70',hadith:'Il n\'y a pas de superiorite d\'un Arabe sur un non-Arabe sauf par la piete — Ahmad',action:'Lisez le Sermon d\'Adieu et comparez-le avec la Declaration Universelle des Droits de l\'Homme',young:'En Islam, toutes les personnes sont egales ! Pas de difference entre blanc et noir ou Arabe et non-Arabe 📜'}
  },
  {
    id:14, emoji:'🎨',
    ar:{title:'الإسلام والفنون',desc:'يُزعم أن الإسلام يعادي الفنون. الحقيقة أن الحضارة الإسلامية أنتجت أعظم الفنون: الخط العربي والزخرفة الهندسية والعمارة الرائعة. قصر الحمراء وتاج محل ومسجد قرطبة شواهد على الإبداع الإسلامي.',verse:'صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ',verseRef:'النمل ٨٨',hadith:'إن الله جميل يحب الجمال — رواه مسلم',action:'زر متحفاً أو ابحث عن أمثلة للفن الإسلامي وتأمل جمالها',young:'المسلمون أبدعوا فنوناً رائعة! الخط العربي والزخرفة من أجمل الفنون في العالم 🎨'},
    en:{title:'Islam and the Arts',desc:'Some claim Islam is against the arts. The truth is that Islamic civilization produced some of the greatest art forms: Arabic calligraphy, geometric ornamentation, and magnificent architecture. The Alhambra, the Taj Mahal, and the Mosque of Cordoba testify to Islamic creativity.',verse:'The artistry of Allah, Who perfected everything',verseRef:'An-Naml 88',hadith:'Indeed, Allah is beautiful and loves beauty — Muslim',action:'Visit a museum or search for examples of Islamic art and admire its beauty',young:'Muslims created amazing art! Arabic calligraphy and geometric designs are some of the most beautiful art in the world 🎨'},
    fr:{title:"L\'Islam et les Arts",desc:'Certains pretendent que l\'Islam est contre les arts. La verite est que la civilisation islamique a produit parmi les plus grandes formes d\'art : la calligraphie arabe, l\'ornementation geometrique et l\'architecture magnifique.',verse:'L\'oeuvre d\'Allah, Qui a parfait toute chose',verseRef:'An-Naml 88',hadith:'Certes, Allah est beau et aime la beaute — Muslim',action:'Visitez un musee ou recherchez des exemples d\'art islamique et admirez sa beaute',young:'Les musulmans ont cree un art incroyable ! La calligraphie arabe et les motifs geometriques sont parmi les plus beaux arts au monde 🎨'}
  },
  {
    id:15, emoji:'🌍',
    ar:{title:'الإسلام دين تقدم',desc:'يُتهم الإسلام بمعاداة التقدم. الحقيقة أن الإسلام يأمر بإعمار الأرض والعمل والإتقان. الابتكار والتطوير مطلوبان في الإسلام. النبي قال: إذا قامت الساعة وفي يد أحدكم فسيلة فليغرسها.',verse:'هُوَ أَنْشَأَكُمْ مِنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا',verseRef:'هود ٦١',hadith:'إذا قامت الساعة وفي يد أحدكم فسيلة فليغرسها — رواه أحمد',action:'ابدأ مشروعاً صغيراً اليوم يفيد مجتمعك — الإسلام يحب العمل والإنتاج',young:'الإسلام يحب العمل والتقدم! حتى لو كانت نهاية العالم، ازرع شجرة! 🌍'},
    en:{title:'Islam Is a Religion of Progress',desc:'Islam is accused of opposing progress. The truth is that Islam commands building the earth, working, and excelling. Innovation and development are encouraged in Islam. The Prophet said: If the Final Hour comes while you have a seedling in your hand, plant it.',verse:'He produced you from the earth and settled you in it',verseRef:'Hud 61',hadith:'If the Final Hour comes while you have a seedling in your hand, plant it — Ahmad',action:'Start a small project today that benefits your community — Islam loves work and productivity',young:'Islam loves work and progress! Even if it were the end of the world, plant a tree! 🌍'},
    fr:{title:"L\'Islam Est une Religion de Progres",desc:'L\'Islam est accuse de s\'opposer au progres. La verite est que l\'Islam ordonne de batir la terre, de travailler et d\'exceller. L\'innovation et le developpement sont encourages en Islam.',verse:'Il vous a produits de la terre et vous y a etablis',verseRef:'Hud 61',hadith:'Si l\'Heure finale vient et que vous avez un plant dans la main, plantez-le — Ahmad',action:'Commencez un petit projet aujourd\'hui qui profite a votre communaute',young:'L\'Islam aime le travail et le progres ! Meme si c\'etait la fin du monde, plante un arbre ! 🌍'}
  },
  {
    id:16, emoji:'⛓️',
    ar:{title:'الإسلام والعبودية',desc:'يُتهم الإسلام بإباحة العبودية. الحقيقة أن الإسلام جاء بنظام تدريجي لتحرير العبيد. جعل تحرير الرقاب كفارة لكثير من الذنوب وحثّ على المكاتبة والعتق. الإسلام سبق العالم في الدعوة لتحرير الإنسان.',verse:'فَلَا اقْتَحَمَ الْعَقَبَةَ وَمَا أَدْرَاكَ مَا الْعَقَبَةُ فَكُّ رَقَبَةٍ',verseRef:'البلد ١١-١٣',hadith:'من أعتق رقبة مسلمة أعتق الله بكل عضو منها عضواً منه من النار — متفق عليه',action:'ابحث عن موقف الإسلام من العبودية وكيف سبق حركات التحرير بقرون',young:'الإسلام يقول: الناس أحرار! تحرير الناس من أعظم الأعمال عند الله ⛓️'},
    en:{title:'Islam and Slavery',desc:'Islam is accused of permitting slavery. The truth is that Islam introduced a gradual system to free slaves. It made freeing slaves an atonement for many sins and encouraged manumission contracts. Islam preceded the world in calling for human liberation.',verse:'But he has not broken through the difficult pass. And what can make you know what the difficult pass is? It is the freeing of a slave',verseRef:'Al-Balad 11-13',hadith:'Whoever frees a Muslim slave, Allah will free every limb of his from the Fire — Agreed upon',action:'Research Islam\'s stance on slavery and how it preceded liberation movements by centuries',young:'Islam says: people are free! Freeing people is one of the greatest deeds before Allah ⛓️'},
    fr:{title:"L'Islam et l'Esclavage",desc:'L\'Islam est accuse de permettre l\'esclavage. La verite est que l\'Islam a introduit un systeme progressif pour liberer les esclaves. Il a fait de l\'affranchissement une expiation pour de nombreux peches et encourage les contrats de liberation.',verse:'Mais il n\'a pas entrepris la montee difficile. Et qu\'est-ce qui te fait comprendre la montee difficile ? C\'est liberer un esclave',verseRef:'Al-Balad 11-13',hadith:'Quiconque libere un esclave musulman, Allah liberera chaque membre de son corps du Feu — Unanimement reconnu',action:'Recherchez la position de l\'Islam sur l\'esclavage et comment il a precede les mouvements de liberation de plusieurs siecles',young:'L\'Islam dit : les gens sont libres ! Liberer les gens est l\'une des plus grandes actions devant Allah ⛓️'}
  },
  {
    id:17, emoji:'🌿',
    ar:{title:'الإسلام والبيئة',desc:'يُزعم أن الإسلام لا يهتم بالبيئة. الحقيقة أن الإسلام جعل الإنسان خليفة في الأرض مسؤولاً عن إعمارها وحمايتها. النبي نهى عن الإسراف في الماء حتى في الوضوء ودعا لغرس الأشجار.',verse:'وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا',verseRef:'الأعراف ٥٦',hadith:'إن قامت الساعة وفي يد أحدكم فسيلة فليغرسها — رواه أحمد',action:'ازرع شجرة أو قلل من استهلاكك للماء والكهرباء اليوم',young:'الإسلام يحب الطبيعة! لا تلوث البيئة وازرع الأشجار — هذا من الإيمان 🌿'},
    en:{title:'Islam and the Environment',desc:'Some claim Islam does not care about the environment. The truth is that Islam made humans stewards of the earth, responsible for building and protecting it. The Prophet forbade wasting water even during ablution and called for planting trees.',verse:'And do not cause corruption on the earth after its reformation',verseRef:'Al-A\'raf 56',hadith:'If the Hour comes while you have a seedling in your hand, plant it — Ahmad',action:'Plant a tree or reduce your water and electricity consumption today',young:'Islam loves nature! Do not pollute the environment and plant trees — this is part of faith 🌿'},
    fr:{title:"L'Islam et l'Environnement",desc:'Certains pretendent que l\'Islam ne se soucie pas de l\'environnement. La verite est que l\'Islam a fait de l\'humain un intendant de la terre, responsable de la batir et de la proteger. Le Prophete a interdit le gaspillage d\'eau meme pendant les ablutions.',verse:'Et ne semez pas la corruption sur terre apres sa reforme',verseRef:'Al-A\'raf 56',hadith:'Si l\'Heure arrive et que vous avez un plant dans la main, plantez-le — Ahmad',action:'Plantez un arbre ou reduisez votre consommation d\'eau et d\'electricite aujourd\'hui',young:'L\'Islam aime la nature ! Ne pollue pas l\'environnement et plante des arbres — c\'est un acte de foi 🌿'}
  },
  {
    id:18, emoji:'🎵',
    ar:{title:'الإسلام والموسيقى والفنون',desc:'يُقال إن الإسلام يحرم كل أنواع الموسيقى والفنون. الحقيقة أن هناك خلافاً فقهياً واسعاً في المسألة. الإسلام يرحب بالإنشاد والشعر والفنون الراقية. النبي استمع للإنشاد ولم ينهَ عنه.',verse:'وَمِنَ النَّاسِ مَنْ يَشْتَرِي لَهْوَ الْحَدِيثِ',verseRef:'لقمان ٦',hadith:'إن الله جميل يحب الجمال — رواه مسلم',action:'استمع لنشيد إسلامي جميل أو اقرأ قصيدة عربية وتأمل جمالها',young:'المسلمون يحبون الجمال! الأناشيد والشعر والفن الراقي جزء من حضارتنا 🎵'},
    en:{title:'Islam and Music and Arts',desc:'Some say Islam forbids all forms of music and art. The truth is that there is a wide juristic disagreement on the matter. Islam welcomes nasheed, poetry, and refined arts. The Prophet listened to nasheed and did not forbid it.',verse:'And of the people is he who buys the amusement of speech',verseRef:'Luqman 6',hadith:'Indeed, Allah is beautiful and loves beauty — Muslim',action:'Listen to a beautiful Islamic nasheed or read an Arabic poem and contemplate its beauty',young:'Muslims love beauty! Nasheeds, poetry, and refined art are part of our civilization 🎵'},
    fr:{title:"L\'Islam et la Musique et les Arts",desc:'Certains disent que l\'Islam interdit toutes les formes de musique et d\'art. La verite est qu\'il y a un large desaccord juridique sur la question. L\'Islam accueille le nasheed, la poesie et les arts raffines. Le Prophete a ecoute le nasheed et ne l\'a pas interdit.',verse:'Et parmi les gens, il y a celui qui achete le divertissement de la parole',verseRef:'Luqman 6',hadith:'Certes, Allah est beau et aime la beaute — Muslim',action:'Ecoutez un beau nasheed islamique ou lisez un poeme arabe et contemplez sa beaute',young:'Les musulmans aiment la beaute ! Les nasheeds, la poesie et l\'art raffine font partie de notre civilisation 🎵'}
  },
  {
    id:19, emoji:'📺',
    ar:{title:'صناعة الإسلاموفوبيا',desc:'الإسلاموفوبيا ليست خوفاً عفوياً بل صناعة ممنهجة تموّلها مؤسسات لتشويه صورة الإسلام. شبكات إعلامية ومراكز أبحاث تنفق ملايين الدولارات سنوياً لنشر الكراهية ضد المسلمين. الرد يكون بالعلم والحوار والقدوة الحسنة.',verse:'يُرِيدُونَ أَنْ يُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَيَأْبَى اللَّهُ إِلَّا أَنْ يُتِمَّ نُورَهُ',verseRef:'التوبة ٣٢',hadith:'إن الله ليؤيد هذا الدين بالرجل الفاجر — متفق عليه',action:'تعرف على حقيقة صناعة الإسلاموفوبيا وشارك المعلومات مع محيطك',young:'لا تحزن إذا أحد أساء للإسلام — كن قدوة حسنة وأجب بالعلم والأدب 📺'},
    en:{title:'The Islamophobia Industry',desc:'Islamophobia is not a spontaneous fear but a systematic industry funded by organizations to distort Islam\'s image. Media networks and think tanks spend millions annually to spread hatred against Muslims. The response should be through knowledge, dialogue, and good example.',verse:'They want to extinguish the light of Allah with their mouths, but Allah refuses except to perfect His light',verseRef:'At-Tawbah 32',hadith:'Indeed Allah supports this religion even through a sinful person — Agreed upon',action:'Learn about the reality of the Islamophobia industry and share information with those around you',young:'Do not be sad if someone insults Islam — be a good example and respond with knowledge and manners 📺'},
    fr:{title:"L'Industrie de l'Islamophobie",desc:'L\'islamophobie n\'est pas une peur spontanee mais une industrie systematique financee par des organisations pour deformer l\'image de l\'Islam. Des reseaux mediatiques et des centres de recherche depensent des millions annuellement pour repandre la haine contre les musulmans.',verse:'Ils veulent eteindre la lumiere d\'Allah avec leurs bouches, mais Allah refuse sinon de parfaire Sa lumiere',verseRef:'At-Tawbah 32',hadith:'Certes Allah soutient cette religion meme par un homme pecheur — Unanimement reconnu',action:'Decouvrez la realite de l\'industrie de l\'islamophobie et partagez les informations avec votre entourage',young:'Ne sois pas triste si quelqu\'un insulte l\'Islam — sois un bon exemple et reponds avec savoir et politesse 📺'}
  },
  {
    id:20, emoji:'📰',
    ar:{title:'التحيز الإعلامي',desc:'وسائل الإعلام الغربية غالباً ما تقدم صورة مشوهة عن الإسلام. تركز على الأحداث السلبية وتتجاهل الإيجابيات. المسلم العادي لا يظهر في الأخبار لكن المتطرف يحتل العناوين. نحتاج إعلاماً إسلامياً محترفاً يقدم الحقيقة.',verse:'وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَى أَلَّا تَعْدِلُوا اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَى',verseRef:'المائدة ٨',hadith:'بلغوا عني ولو آية — رواه البخاري',action:'شارك قصة إيجابية عن الإسلام أو المسلمين مع شخص غير مسلم',young:'لا تصدق كل ما تراه في الأخبار! ابحث بنفسك عن الحقيقة وكن منصفاً 📰'},
    en:{title:'Media Bias',desc:'Western media often presents a distorted image of Islam. It focuses on negative events and ignores the positives. The average Muslim does not appear in the news, but an extremist makes headlines. We need professional Islamic media that presents the truth.',verse:'And do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness',verseRef:'Al-Maidah 8',hadith:'Convey from me even if it is one verse — Bukhari',action:'Share a positive story about Islam or Muslims with a non-Muslim',young:'Do not believe everything you see in the news! Search for the truth yourself and be fair 📰'},
    fr:{title:'Le Biais Mediatique',desc:'Al-Ghazali répond dans "L\'Islam Accusé à Tort": Les medias occidentaux presentent souvent une image deformee de l\'Islam. Ils se concentrent sur les evenements negatifs et ignorent les positifs. Le musulman ordinaire n\'apparait pas dans les nouvelles mais l\'extremiste fait les gros titres.',verse:'Et que la haine d\'un peuple ne vous incite pas a etre injustes. Soyez justes : c\'est plus proche de la piete',verseRef:'Al-Maidah 8',hadith:'Transmettez de moi, ne serait-ce qu\'un verset — Bukhari',action:'Partagez une histoire positive sur l\'Islam ou les musulmans avec un non-musulman',young:'Ne crois pas tout ce que tu vois dans les nouvelles ! Cherche la verite toi-meme et sois juste 📰'}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Defender?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما معنى كلمة "إسلام" في اللغة العربية؟',opts:['الحرب','السلام والاستسلام لله','القوة','الحكم'],correct:1,hint:'الكلمة مشتقة من جذر يعني الأمان والسلام',quran:'الأنفال ٦١'},
    en:{q:'What does the word "Islam" mean in Arabic?',opts:['War','Peace and submission to God','Power','Governance'],correct:1,hint:'The word derives from a root meaning safety and peace',quran:'Al-Anfal 61'},
    fr:{q:'Que signifie le mot "Islam" en arabe ?',opts:['La guerre','La paix et la soumission a Dieu','Le pouvoir','La gouvernance'],correct:1,hint:'Le mot derive d\'une racine signifiant securite et paix',quran:'Al-Anfal 61'}
  },
  {
    ar:{q:'أول كلمة نزلت من القرآن الكريم هي:',opts:['قل','اكتب','اقرأ','اعبد'],correct:2,hint:'هذه الكلمة تدل على أهمية العلم في الإسلام',quran:'العلق ١'},
    en:{q:'The first word revealed from the Quran was:',opts:['Say','Write','Read','Worship'],correct:2,hint:'This word indicates the importance of knowledge in Islam',quran:'Al-Alaq 1'},
    fr:{q:'Le premier mot revele du Coran etait :',opts:['Dis','Ecris','Lis','Adore'],correct:2,hint:'Ce mot indique l\'importance du savoir en Islam',quran:'Al-Alaq 1'}
  },
  {
    ar:{q:'ما المبدأ الإسلامي الذي يشبه الديمقراطية؟',opts:['الزكاة','الشورى','الصيام','الحج'],correct:1,hint:'يعني التشاور في اتخاذ القرارات',quran:'الشورى ٣٨'},
    en:{q:'Which Islamic principle resembles democracy?',opts:['Zakat','Shura (Consultation)','Fasting','Hajj'],correct:1,hint:'It means consulting others in decision-making',quran:'Ash-Shura 38'},
    fr:{q:'Quel principe islamique ressemble a la democratie ?',opts:['La Zakat','La Choura (Consultation)','Le Jeune','Le Hajj'],correct:1,hint:'Cela signifie consulter les autres pour prendre des decisions',quran:'Ash-Shura 38'}
  },
  {
    ar:{q:'من هو العالم المسلم الذي يُعتبر أبا المنهج التجريبي؟',opts:['ابن سينا','الخوارزمي','ابن الهيثم','جابر بن حيان'],correct:2,hint:'اشتهر بأبحاثه في علم البصريات',quran:'الزمر ٩'},
    en:{q:'Which Muslim scholar is considered the father of the scientific method?',opts:['Ibn Sina','Al-Khwarizmi','Ibn al-Haytham','Jabir ibn Hayyan'],correct:2,hint:'Famous for his research in optics',quran:'Az-Zumar 9'},
    fr:{q:'Quel savant musulman est considere comme le pere de la methode experimentale ?',opts:['Ibn Sina','Al-Khwarizmi','Ibn al-Haytham','Jabir ibn Hayyan'],correct:2,hint:'Celebre pour ses recherches en optique',quran:'Az-Zumar 9'}
  },
  {
    ar:{q:'أكمل الآية: "لَا إِكْرَاهَ فِي ..."',opts:['الحياة','الدين','العمل','العلم'],correct:1,hint:'هذه الآية تؤكد حرية الاعتقاد',quran:'البقرة ٢٥٦'},
    en:{q:'Complete the verse: "There is no compulsion in ..."',opts:['Life','Religion','Work','Knowledge'],correct:1,hint:'This verse affirms freedom of belief',quran:'Al-Baqarah 256'},
    fr:{q:'Completez le verset : « Nulle contrainte en ... »',opts:['La vie','La religion','Le travail','Le savoir'],correct:1,hint:'Ce verset affirme la liberte de croyance',quran:'Al-Baqarah 256'}
  },
  {
    ar:{q:'من هي الصحابية التي كانت سيدة أعمال ناجحة؟',opts:['عائشة','فاطمة','خديجة','أسماء'],correct:2,hint:'كانت زوجة النبي الأولى',quran:'البقرة ٢٢٨'},
    en:{q:'Which female Companion was a successful businesswoman?',opts:['Aisha','Fatimah','Khadijah','Asma'],correct:2,hint:'She was the first wife of the Prophet',quran:'Al-Baqarah 228'},
    fr:{q:'Quelle Compagne etait une femme d\'affaires prospere ?',opts:['Aisha','Fatimah','Khadijah','Asma'],correct:2,hint:'Elle etait la premiere epouse du Prophete',quran:'Al-Baqarah 228'}
  },
  {
    ar:{q:'ما هو الجهاد الأكبر في الإسلام؟',opts:['القتال في الحرب','مجاهدة النفس','الدعوة','الهجرة'],correct:1,hint:'المعركة الحقيقية هي مع نفسك',quran:'الحج ٣٩'},
    en:{q:'What is the greater jihad in Islam?',opts:['Fighting in war','Struggling against oneself','Preaching','Migration'],correct:1,hint:'The real battle is with yourself',quran:'Al-Hajj 39'},
    fr:{q:'Quel est le grand jihad en Islam ?',opts:['Combattre a la guerre','Lutter contre soi-meme','La predication','La migration'],correct:1,hint:'La vraie bataille est avec soi-meme',quran:'Al-Hajj 39'}
  },
  {
    ar:{q:'أين حدثت خطبة الوداع التي تضمنت حقوق الإنسان؟',opts:['المدينة','مكة (عرفات)','القدس','الطائف'],correct:1,hint:'حدثت أثناء حجة الوداع',quran:'الإسراء ٧٠'},
    en:{q:'Where did the Farewell Sermon that included human rights take place?',opts:['Madinah','Makkah (Arafat)','Jerusalem','Taif'],correct:1,hint:'It happened during the Farewell Pilgrimage',quran:'Al-Isra 70'},
    fr:{q:'Ou a eu lieu le Sermon d\'Adieu qui comprenait les droits de l\'homme ?',opts:['Medine','La Mecque (Arafat)','Jerusalem','Taif'],correct:1,hint:'Cela s\'est passe pendant le Pelerinage d\'Adieu',quran:'Al-Isra 70'}
  },
  {
    ar:{q:'أكمل الحديث: "إن الله جميل يحب ..."',opts:['العلم','الجمال','القوة','الصبر'],correct:1,hint:'هذا الحديث يدل على موقف الإسلام من الفنون',quran:'النمل ٨٨'},
    en:{q:'Complete the hadith: "Indeed, Allah is beautiful and loves ..."',opts:['Knowledge','Beauty','Strength','Patience'],correct:1,hint:'This hadith indicates Islam\'s position on the arts',quran:'An-Naml 88'},
    fr:{q:'Completez le hadith : « Certes, Allah est beau et aime ... »',opts:['Le savoir','La beaute','La force','La patience'],correct:1,hint:'Ce hadith indique la position de l\'Islam sur les arts',quran:'An-Naml 88'}
  },
  {
    ar:{q:'أي خليفة أوقف حد السرقة في عام المجاعة؟',opts:['أبو بكر','عمر بن الخطاب','عثمان','علي'],correct:1,hint:'ثاني الخلفاء الراشدين',quran:'الشورى ٣٩'},
    en:{q:'Which caliph suspended the punishment for theft during famine?',opts:['Abu Bakr','Umar ibn al-Khattab','Uthman','Ali'],correct:1,hint:'The second of the Rightly Guided Caliphs',quran:'Ash-Shura 39'},
    fr:{q:'Quel calife a suspendu la peine pour vol durant la famine ?',opts:['Abu Bakr','Umar ibn al-Khattab','Uthman','Ali'],correct:1,hint:'Le deuxieme des Califes Bien Guides',quran:'Ash-Shura 39'}
  },
  {
    ar:{q:'ما موقف الإسلام من العبودية؟',opts:['أباحها مطلقاً','جاء بنظام تدريجي لتحريرها','لم يتطرق إليها','حرمها فوراً'],correct:1,hint:'الإسلام جعل تحرير الرقاب كفارة للذنوب',quran:'البلد ١٣'},
    en:{q:'What is Islam\'s position on slavery?',opts:['Fully permitted it','Introduced a gradual system for its abolition','Did not address it','Banned it immediately'],correct:1,hint:'Islam made freeing slaves an atonement for sins',quran:'Al-Balad 13'},
    fr:{q:'Quelle est la position de l\'Islam sur l\'esclavage ?',opts:['L\'a pleinement permis','A introduit un systeme progressif pour son abolition','Ne l\'a pas aborde','L\'a interdit immediatement'],correct:1,hint:'L\'Islam a fait de l\'affranchissement une expiation pour les peches',quran:'Al-Balad 13'}
  },
  {
    ar:{q:'أكمل الآية: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ ..."',opts:['خلقها','إصلاحها','تعميرها','بنائها'],correct:1,hint:'تتعلق بحماية البيئة في الإسلام',quran:'الأعراف ٥٦'},
    en:{q:'Complete the verse: "And do not cause corruption on earth after its..."',opts:['Creation','Reformation','Building','Construction'],correct:1,hint:'This verse relates to environmental protection in Islam',quran:'Al-A\'raf 56'},
    fr:{q:'Completez le verset : « Et ne semez pas la corruption sur terre apres sa... »',opts:['Creation','Reforme','Construction','Edifice'],correct:1,hint:'Ce verset concerne la protection de l\'environnement en Islam',quran:'Al-A\'raf 56'}
  },
  {
    ar:{q:'ما الحديث الذي يدل على موقف الإسلام من الفنون والجمال؟',opts:['الحلال بيّن والحرام بيّن','إن الله جميل يحب الجمال','الدين النصيحة','خير الناس أنفعهم للناس'],correct:1,hint:'يرفع مكانة الجمال في الإسلام',quran:'النمل ٨٨'},
    en:{q:'Which hadith indicates Islam\'s position on art and beauty?',opts:['The halal is clear and the haram is clear','Indeed, Allah is beautiful and loves beauty','Religion is sincere advice','The best people are those most beneficial to others'],correct:1,hint:'It elevates the status of beauty in Islam',quran:'An-Naml 88'},
    fr:{q:'Quel hadith indique la position de l\'Islam sur l\'art et la beaute ?',opts:['Le halal est clair et le haram est clair','Certes, Allah est beau et aime la beaute','La religion c\'est le bon conseil','Les meilleurs sont les plus utiles aux autres'],correct:1,hint:'Il eleve le statut de la beaute en Islam',quran:'An-Naml 88'}
  },
  {
    ar:{q:'ما الآية التي تؤكد مسؤولية الإنسان عن حماية البيئة؟',
      opts:['البقرة ٣٠','الأعراف ٥٦','النحل ١٢٥','الحجرات ١٣'],
      correct:1,
      hint:'تنهى عن الإفساد في الأرض بعد إصلاحها',
      quran:'الأعراف ٥٦'},
    en:{q:'Which verse affirms humanity\'s responsibility for environmental protection?',
      opts:['Al-Baqarah 30','Al-A\'raf 56','An-Nahl 125','Al-Hujurat 13'],
      correct:1,
      hint:'It forbids causing corruption on earth after its reformation',
      quran:'Al-A\'raf 56'},
    fr:{q:'Quel verset affirme la responsabilite de l\'humanite pour la protection de l\'environnement ?',
      opts:['Al-Baqarah 30','Al-A\'raf 56','An-Nahl 125','Al-Hujurat 13'],
      correct:1,
      hint:'Il interdit de semer la corruption sur terre apres sa reforme',
      quran:'Al-A\'raf 56'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء نصرة الحق',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ',tr:'الأعراف ٨٩'},
    en:{label:'Dua for Truth to Prevail',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ',tr:'Our Lord, decide between us and our people in truth, and You are the best of those who decide — Al-Araf 89'},
    fr:{label:'Dua pour la Victoire de la Verite',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ',tr:'Notre Seigneur, decide entre nous et notre peuple en verite — Al-Araf 89'} },
  { ar:{label:'دعاء الهداية',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Guidance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, do not let our hearts deviate after You have guided us — Al Imran 8'},
    fr:{label:'Dua pour la Guidee',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne laisse pas nos coeurs devier apres nous avoir guides — Al Imran 8'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'},
    fr:{label:'Dua pour la Fermete',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, deverse sur nous la patience et affermis nos pas — Al-Baqarah 250'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'Allah me suffit ; il n\'y a de dieu que Lui — At-Tawbah 129'} },
  { ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'اللهم اجعل في قلبي نوراً وفي بصري نوراً وفي سمعي نوراً'},
    en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O Allah, place light in my heart, light in my sight, and light in my hearing'},
    fr:{label:'Dua pour la Lumiere',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O Allah, place de la lumiere dans mon coeur, de la lumiere dans ma vue et de la lumiere dans mon ouie'} },
  { ar:{label:'دعاء الحق',text:'رَبَّنَا أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'ربنا أرنا الحق حقاً وارزقنا اتباعه وأرنا الباطل باطلاً وارزقنا اجتنابه'},
    en:{label:'Dua for Truth',text:'رَبَّنَا أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'Our Lord, show us the truth as truth and grant us to follow it, and show us falsehood as falsehood and grant us to avoid it'},
    fr:{label:'Dua pour la Verite',text:'رَبَّنَا أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'Notre Seigneur, montre-nous la verite comme verite et accorde-nous de la suivre, et montre-nous le faux comme faux et accorde-nous de l\'eviter'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'muftara-xp';
const BADGES_KEY = 'muftara-badges';
const READ_KEY = 'muftara-read';
const STREAK_KEY = 'muftara-streak';
const MODE_KEY = 'muftara-mode';
const QUIZ_BEST_KEY = 'muftara-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabTraits'); if(_e) _e.textContent=t.tabTraits; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=(document.getElementById('traitsTitle') || document.getElementById('cardsTitle')); if(_e) _e.textContent=t.traitsTitle; }
  { const _e=(document.getElementById('traitsDesc') || document.getElementById('cardsDesc')); if(_e) _e.textContent=t.traitsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS (CARDS) ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = (document.getElementById('traitsContainer') || document.getElementById('cardsContainer'));
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++; addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const wrongIdxs = [0,1,2,3].filter(i => i !== q.correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'مدافع حقيقي!':lang==='fr'?'Un vrai defenseur !':'A True Defender!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري. ألّف أكثر من ٩٤ كتاباً في الفكر الإسلامي والدعوة. تميز بالدفاع عن الإسلام ضد الافتراءات والشبهات بأسلوب علمي هادئ ومقنع.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«الإسلام المفترى عليه» كتاب يرد فيه الشيخ الغزالي على أشهر الافتراءات والشبهات المثارة حول الإسلام. يتناول قضايا المرأة والعنف والحرية والعلم بأسلوب علمي هادئ ومقنع.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "الإسلام المفترى عليه" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker. Author of 94+ books on Islamic thought. Distinguished for defending Islam against misconceptions with a calm and scholarly approach.',
      bookTitle: 'About the Book',
      bookDesc: '"Islam Falsely Accused" is a book in which Sheikh al-Ghazali responds to the most common misconceptions about Islam. It addresses issues of women, violence, freedom, and science with a calm and scholarly approach.',
      sourcesTitle: 'Sources',
      sources: ['"Islam Falsely Accused" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien. Auteur de plus de 94 livres. Distingue pour sa defense de l\'Islam contre les idees fausses avec une approche calme et savante.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"L\'Islam Faussement Accuse" est un livre dans lequel le Sheikh al-Ghazali repond aux idees recues les plus courantes sur l\'Islam avec une approche calme et savante.',
      sourcesTitle: 'Sources',
      sources: ['"L\'Islam Faussement Accuse" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر ردود الشيخ الغزالي على الافتراءات بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "الإسلام المفترى عليه" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/al-islam-al-muftara-alayh'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s responses to misconceptions interactively.'},
      {title:'📚 Sources',body:'"Islam Falsely Accused" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 cards, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/al-islam-al-muftara-alayh'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager les reponses du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"L\'Islam Faussement Accuse" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 cartes, quiz interactif, systeme XP et badges, 2 modes.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/al-islam-al-muftara-alayh'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء لنصرة الحق','⭐ أكمل ١٥ بطاقة لتصبح خبيراً'],
    en: ['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for truth','⭐ Complete all 15 cards to become an Expert'],
    fr: ['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour la verite','⭐ Completez les 15 cartes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => switchTab(tab.dataset.tab)); }); }
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
