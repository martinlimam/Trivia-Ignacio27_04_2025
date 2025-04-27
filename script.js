// === PREGUNTAS (NUEVO CONJUNTO ACTUALIZADO) ===
const questions = [
    // === Tema 1: Causas de la Independencia Paraguaya ===
    // Nivel Básico
    {
        question: "Según las fuentes, ¿cuál de estos eventos provocó una crisis en la monarquía española?",
        options: ["La Revolución Francesa", "La Revolución Americana", "Las batallas de Paraguarí y Tacuarí", "Las invasiones Napoleónicas"],
        correctAnswer: "Las invasiones Napoleónicas",
        topic: 1, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿mediante qué tratado reconoció Gran Bretaña la independencia de las Trece Colonias de Norteamérica en 1783?",
        options: ["El Tratado del 12 de octubre de 1811", "El Tratado de Madrid", "La Nota del 20 de julio de 1811", "El Tratado de Versalles"],
        correctAnswer: "El Tratado de Versalles",
        topic: 1, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿qué despertaron las victorias en las batallas de Paraguarí y Tacuarí en los paraguayos?",
        options: ["El deseo de anexarse a Buenos Aires", "El apoyo al régimen español", "La fundación de una Sociedad Patriótica", "Un fuerte orgullo nacional"],
        correctAnswer: "Un fuerte orgullo nacional",
        topic: 1, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál era una de las ideas que revitalizaron las Ideas de la Ilustración mencionadas como causa de la independencia?",
        options: ["El derecho divino de los reyes", "El monopolio comercial", "La importancia de los altos impuestos", "La soberanía del pueblo"],
        correctAnswer: "La soberanía del pueblo",
        topic: 1, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿qué pretendía la Junta de Buenos Aires con respecto al Paraguay?",
        options: ["Apoyar su autonomía", "Establecer un tratado de mutua defensa", "Mantener relaciones cordiales", "Anexar al Paraguay"],
        correctAnswer: "Anexar al Paraguay",
        topic: 1, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál fue una causa de la independencia relacionada con la economía colonial?",
        options: ["La libertad de comercio", "Bajos aranceles de importación", "Los altos impuestos", "El fin del monopolio del tabaco"],
        correctAnswer: "Los altos impuestos",
        topic: 1, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿quiénes fueron enviados por la Junta de Buenos Aires al Paraguay para buscar el reconocimiento de su autoridad?",
        options: ["Fulgencio Yegros y Dr. Francia", "José y Peña", "Pedro Juan Caballero y Vicente Ignacio Iturbe", "Mariano Roque Alonso y Carlos Antonio López"],
        correctAnswer: "José y Peña", // Asumiendo que se refiere a José Espínola y Peña
        topic: 1, difficulty: 'básico'
    },
    {
        question: "Las fuentes mencionan la Revolución Francesa como causa de la independencia. ¿Qué defendía, según el texto?",
        options: ["La restauración de la monarquía", "La superioridad de la corona española", "El monopolio comercial", "Los derechos, la libertad e igualdad de todos los seres humanos"],
        correctAnswer: "Los derechos, la libertad e igualdad de todos los seres humanos",
        topic: 1, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál de los siguientes NO fue señalado como motivo que propició la formación de la Junta de Buenos Aires?",
        options: ["La crisis de la monarquía Española", "Ideas de ilustración", "Limitaciones comerciales", "Las victorias en Paraguarí y Tacuarí"],
        correctAnswer: "Las victorias en Paraguarí y Tacuarí",
        topic: 1, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿qué tipo de factores se combinaron en la intención de la Junta de Buenos Aires de anexar al Paraguay?",
        options: ["Solo económicos", "Solo políticos", "Solo estratégicos", "Políticos, económicos y estratégicos"],
        correctAnswer: "Políticos, económicos y estratégicos",
        topic: 1, difficulty: 'básico'
    },
    // Nivel Medio
    {
        question: "Las invasiones napoleónicas son mencionadas como causa de la independencia. ¿Qué proceso generaron en la monarquía española, además de la crisis, según las fuentes?",
        options: ["La anexión a Francia", "La firma del Tratado de Versalles", "La formación del Consulado", "La guerra por la independencia Española"],
        correctAnswer: "La guerra por la independencia Española",
        topic: 1, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, la Revolución Americana es una causa de la independencia. ¿En qué año Gran Bretaña reconoció la independencia de las Trece Colonias?",
        options: ["1776", "1811", "1840", "1783"],
        correctAnswer: "1783",
        topic: 1, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿cómo influyeron las victorias en Paraguarí y Tacuarí en la postura de los paraguayos frente a la Junta de Buenos Aires?",
        options: ["Los hicieron más propensos a aceptar la autoridad de la Junta.", "No tuvieron ningún efecto significativo en su actitud política.", "Los motivaron a buscar apoyo en el régimen español.", "Reforzaron su sentido de identidad propia frente a la pretensión de anexión"],
        correctAnswer: "Reforzaron su sentido de identidad propia frente a la pretensión de anexión",
        topic: 1, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿cuál de las siguientes opciones combina correctamente una causa de la independencia con su efecto directo?",
        options: ["Ideas de la Ilustración -> Crisis de la monarquía española", "Altos impuestos -> Despertar del orgullo nacional", "Revolución Francesa -> Batallas de Paraguarí y Tacuarí", "Invasiones Napoleónicas -> Crisis en la monarquía Española"],
        correctAnswer: "Invasiones Napoleónicas -> Crisis en la monarquía Española",
        topic: 1, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, la Junta de Buenos Aires basó su intención de anexar Paraguay en factores políticos, económicos y estratégicos. ¿Cuál de estos factores está implícito en las \"limitaciones comerciales\" mencionadas como motivo para la formación de la Junta de Buenos Aires?",
        options: ["Factores políticos", "Factores estratégicos", "Factores económicos", "Factores sociales"],
        correctAnswer: "Factores económicos",
        topic: 1, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿cuál era la relación entre la Junta de Buenos Aires y el Paraguay antes de los eventos de 1811, que llevó a la intención de anexión?",
        options: ["Eran aliados militares contra los portugueses.", "Paraguay reconocía plenamente la autoridad de la Junta.", "La Junta de Buenos Aires pretendía que Paraguay reconociera su autoridad", "Existía un tratado de límites y mutua defensa."],
        correctAnswer: "La Junta de Buenos Aires pretendía que Paraguay reconociera su autoridad",
        topic: 1, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué papel jugaron las Ideas de la Ilustración en el contexto de las causas de la independencia paraguaya?",
        options: ["Fortalecieron el poder de la corona española.", "Promovieron la anexión a Buenos Aires.", "Propugnaron principios como la soberanía del pueblo, desafiando el orden existente.", "Justificaron los altos impuestos coloniales."],
        correctAnswer: "Propugnaron principios como la soberanía del pueblo, desafiando el orden existente.",
        topic: 1, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿cuál de las siguientes opciones explica mejor por qué las Invasiones Napoleónicas en España tuvieron un impacto en el proceso de independencia en América, según lo sugieren las causas mencionadas?",
        options: ["Napoleón apoyó activamente los movimientos independentistas en América.", "Debilitaron el control de la corona española sobre sus colonias.", "Establecieron un nuevo sistema de gobierno en las colonias.", "Aumentaron la lealtad de las colonias a la monarquía española."],
        correctAnswer: "Debilitaron el control de la corona española sobre sus colonias.",
        topic: 1, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué buscaba la Junta de Buenos Aires al enviar a José y Peña al Paraguay?",
        options: ["Firmar un tratado comercial", "Que Paraguay reconociera la autoridad de la Junta.", "Apoyar militarmente a Paraguay.", "Negociar la libertad de los esclavos."],
        correctAnswer: "Que Paraguay reconociera la autoridad de la Junta.",
        topic: 1, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿cuál de estos conceptos relacionados con las causas de la independencia está vinculado directamente a la soberanía del pueblo?",
        options: ["Las invasiones napoleónicas", "Los altos impuestos", "La intención de anexión de Buenos Aires", "Las ideas de la ilustración"],
        correctAnswer: "Las ideas de la ilustración",
        topic: 1, difficulty: 'intermedio'
    },
    // Nivel Avanzado
    {
        question: "Considerando las causas mencionadas, ¿cuál podría considerarse el detonante inmediato que precipitó la acción independentista en 1811?",
        options: ["Los altos impuestos", "Las ideas de la ilustración", "La Revolución Francesa", "La crisis monárquica por invasiones napoleónicas y la intención anexista de Bs.As."],
        correctAnswer: "La crisis monárquica por invasiones napoleónicas y la intención anexista de Bs.As.",
        topic: 1, difficulty: 'avanzado'
    },
    {
        question: "Las fuentes mencionan factores políticos, económicos y estratégicos en la intención anexista de Bs.As. ¿Cuál describe mejor la dimensión estratégica?",
        options: ["Control de puertos para tributos.", "Difusión de ideas ilustradas.", "Control territorial del Virreinato y defensa.", "Explotación de recursos naturales."],
        correctAnswer: "Control territorial del Virreinato y defensa.",
        topic: 1, difficulty: 'avanzado'
    },
    {
        question: "Las Revoluciones Americana y Francesa influyeron en la independencia. ¿Cuál es el nexo común relevante según las fuentes?",
        options: ["Liderazgo militar.", "Provocadas por altos impuestos.", "Disolución de monarquías absolutas.", "Promoción de ideas de libertad, igualdad y derechos."],
        correctAnswer: "Promoción de ideas de libertad, igualdad y derechos.",
        topic: 1, difficulty: 'avanzado'
    },
    {
        question: "¿Cuál fue la consecuencia principal del intento de anexión de Bs.As. y las victorias paraguayas en el desarrollo independentista local?",
        options: ["Aumento del apoyo a Bs.As. en Paraguay.", "Paraguay solicitó protección española.", "Afirmación de identidad paraguaya y deseo de independencia completa de España y Bs.As.", "Demostración de superioridad militar de Bs.As."],
        correctAnswer: "Afirmación de identidad paraguaya y deseo de independencia completa de España y Bs.As.",
        topic: 1, difficulty: 'avanzado'
    },
    {
        question: "¿Cómo se relaciona la formación de la Junta de Bs.As. (crisis española, ilustración, límites comerciales) con la intención de anexar Paraguay?",
        options: ["Para compartir altos impuestos.", "La crisis dio oportunidad a Bs.As. de expandir poder y controlar una provincia clave.", "Paraguay pidió ser anexado para protección.", "La Junta quería liberar a Paraguay del monopolio del tabaco."],
        correctAnswer: "La crisis dio oportunidad a Bs.As. de expandir poder y controlar una provincia clave.",
        topic: 1, difficulty: 'avanzado'
    },
    {
        question: "Las fuentes mencionan altos impuestos como causa. ¿Cuál es la implicación de esto en la relación colonial?",
        options: ["La corona invertía los impuestos en las colonias.", "La riqueza generada era transferida a España, generando descontento.", "Los impuestos eran bajos.", "Solo ciertos productos pagaban impuestos."],
        correctAnswer: "La riqueza generada era transferida a España, generando descontento.",
        topic: 1, difficulty: 'avanzado'
    },
    {
        question: "Invasiones Napoleónicas e Ideas de la Ilustración fueron causas. ¿Cómo interactuaron?",
        options: ["Las Invasiones bloquearon las Ideas.", "Las Ideas causaron las Invasiones.", "Las Invasiones debilitaron la monarquía, creando oportunidad para aplicar ideas ilustradas.", "Ambos reforzaron el poder español."],
        correctAnswer: "Las Invasiones debilitaron la monarquía, creando oportunidad para aplicar ideas ilustradas.",
        topic: 1, difficulty: 'avanzado'
    },
    {
        question: "La Revolución Americana y el Tratado de Versalles son causa. ¿Cuál es el aprendizaje clave sugerido para las colonias españolas?",
        options: ["Que era posible derrotar a una potencia colonial y lograr reconocimiento.", "Que los imperios respetarían los tratados.", "Que las ideas monárquicas eran superiores.", "Que la negociación pacífica era la única vía."],
        correctAnswer: "Que era posible derrotar a una potencia colonial y lograr reconocimiento.",
        topic: 1, difficulty: 'avanzado'
    },
    {
        question: "La combinación de factores políticos, económicos y estratégicos explica la anexión. ¿Cuál es el más político en el contexto de crisis monárquica?",
        options: ["Limitaciones comerciales.", "Necesidad de control territorial.", "Pretensión de Bs.As. de asumir la soberanía del Virreinato.", "Altos impuestos."],
        correctAnswer: "Pretensión de Bs.As. de asumir la soberanía del Virreinato.",
        topic: 1, difficulty: 'avanzado'
    },
    {
        question: "La Revolución Francesa defendió derechos, libertad e igualdad. ¿Cómo influyó indirectamente en las colonias españolas?",
        options: ["España concedió más libertades.", "Inspiró a élites locales a cuestionar el orden colonial.", "Fomentó apoyo a Napoleón.", "Propició aumento de impuestos."],
        correctAnswer: "Inspiró a élites locales a cuestionar el orden colonial.",
        topic: 1, difficulty: 'avanzado'
    },

    // === Tema 2: Paraguay en los albores de la Revolución de Mayo ===
    // Nivel Básico
    {
        question: "Según las fuentes, ¿cuál era el objetivo principal del plan de conspiración en los albores de la Revolución de Mayo?",
        options: ["Apoyar el régimen Español", "Anexar Paraguay a Buenos Aires", "Establecer el Consulado", "Derrocar al gobernador Velasco y declarar la autonomía del Paraguay"],
        correctAnswer: "Derrocar al gobernador Velasco y declarar la autonomía del Paraguay",
        topic: 2, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué ocurrió la noche del 14 de mayo de 1811?",
        options: ["El gobernador Velasco se rindió", "Se firmó el Tratado de Versalles", "Se proclamó la República del Paraguay", "Los próceres salieron de la casa de los hermanos Martínez Sáenz y tomaron cuarteles militares"],
        correctAnswer: "Los próceres salieron de la casa de los hermanos Martínez Sáenz y tomaron cuarteles militares",
        topic: 2, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿qué le pidió el Capitán Pedro Juan Caballero al gobernador Velasco en la madrugada del 15 de mayo de 1811?",
        options: ["Que reconociera la autoridad de la Junta de Buenos Aires", "Que firmara un tratado comercial", "Que permitiera la fundación de escuelas", "Que entregara las llaves de la Casa de Gobierno, la Tesorería y las Armas"],
        correctAnswer: "Que entregara las llaves de la Casa de Gobierno, la Tesorería y las Armas",
        topic: 2, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿quién tomó el Cuartel del Colegio la noche del 14 de mayo?",
        options: ["Juan Manuel Iturbe", "Mariano José Troche", "Pedro Juan Caballero", "Juan Bautista Rivarola"],
        correctAnswer: "Juan Bautista Rivarola",
        topic: 2, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿cuál fue una consecuencia de la Revolución de Mayo en Paraguay?",
        options: ["Mantener el monopolio del tabaco", "Anexar Paraguay a Buenos Aires", "Establecer una Dictadura Perpetua", "Establecer un gobierno independiente de España y Buenos Aires"],
        correctAnswer: "Establecer un gobierno independiente de España y Buenos Aires",
        topic: 2, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál de los siguientes grupos políticos buscaba la independencia del poder Español pero quería anexar a Buenos Aires?",
        options: ["Los Españolistas", "Los Independentistas", "Los Porteñistas", "Los Realistas"],
        correctAnswer: "Los Porteñistas",
        topic: 2, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿qué pretendían lograr los próceres al salir de la casa de los hermanos Martínez Sáenz la noche del 14 de mayo?",
        options: ["Negociar con el teniente Abreu", "Fundar una Sociedad Patriótica", "Tomar cuarteles militares", "Solicitar consejos al Dr. Francia"],
        correctAnswer: "Tomar cuarteles militares",
        topic: 2, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿quién se encontraba en el Cuartel de la Plaza que fue tomado primero por los próceres?",
        options: ["Mariano José Troche", "Juan Bautista Rivarola", "Dr. José Gaspar Rodríguez de Francia", "Juan Manuel Iturbe"],
        correctAnswer: "Juan Manuel Iturbe",
        topic: 2, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿qué se acordó en la madrugada del 15 de mayo de 1811 con el gobernador Velasco?",
        options: ["La proclamación de la República", "La formación de un gobierno provisorio", "La firma de un tratado de límites", "El establecimiento de la Dictadura Suprema"],
        correctAnswer: "La formación de un gobierno provisorio",
        topic: 2, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál fue una de las consecuencias directas de la Revolución de Mayo?",
        options: ["La firma del Tratado del 12 de octubre.", "El establecimiento del Consulado.", "La muerte de Fernando de la Mora.", "La destitución del gobernador español Bernardo de Velasco."],
        correctAnswer: "La destitución del gobernador español Bernardo de Velasco.",
        topic: 2, difficulty: 'básico'
    },
    // Nivel Medio
    {
        question: "Según las fuentes, ¿qué representaba el teniente portugués José de Abreu y cómo influyó su llegada en las acciones de los próceres?",
        options: ["Traía una oferta de anexión a Portugal.", "Venía a mediar entre paraguayos y Bs.As.", "Traía oferta de apoyo militar portugués al régimen español, acelerando la Revolución.", "Era un mensajero del Dr. Francia."],
        correctAnswer: "Traía oferta de apoyo militar portugués al régimen español, acelerando la Revolución.",
        topic: 2, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál fue la estrategia clave del plan de conspiración de la Revolución de Mayo?",
        options: ["Negociar pacíficamente con la Junta de Bs.As.", "Esperar la ayuda militar del teniente Abreu.", "Coordinar un golpe pacífico con apoyo militar para derrocar al gobernador.", "Declarar la independencia y buscar apoyo internacional."],
        correctAnswer: "Coordinar un golpe pacífico con apoyo militar para derrocar al gobernador.",
        topic: 2, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿qué diferencia principal existía entre los Porteñistas y los Independentistas?",
        options: ["Porteñistas querían seguir bajo dominio español.", "Porteñistas apoyaban a Velasco.", "Porteñistas buscaban independencia de España para anexarse a Bs.As., Independentistas querían liberarse de ambos.", "Porteñistas eran la élite social."],
        correctAnswer: "Porteñistas buscaban independencia de España para anexarse a Bs.As., Independentistas querían liberarse de ambos.",
        topic: 2, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál fue un factor que los conspiradores de la Revolución de Mayo buscaron aprovechar en su estrategia?",
        options: ["La llegada del teniente José de Abreu.", "El apoyo de los Españolistas.", "El resultado de las batallas de Paraguarí y Tacuarí.", "El descontento con el dominio Español."],
        correctAnswer: "El descontento con el dominio Español.",
        topic: 2, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿por qué los oficiales más jóvenes solicitaron consejo al Dr. Francia antes de la Revolución de Mayo?",
        options: ["Para convencerlo de apoyar el régimen español.", "Para recibir orientación sobre los pasos a seguir.", "Para informarle de la llegada del teniente Abreu.", "Para pedirle que fuera el líder del golpe."],
        correctAnswer: "Para recibir orientación sobre los pasos a seguir.",
        topic: 2, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué ocurrió en la madrugada del 15 de mayo después de las negociaciones?",
        options: ["Ataque violento a la Casa de Gobierno.", "Velasco se negó a ceder y huyó.", "Velasco se rindió, entregó llaves y se acordó gobierno provisorio sin violencia.", "La Junta de Bs.As. envió tropas para apoyar a Velasco."],
        correctAnswer: "Velasco se rindió, entregó llaves y se acordó gobierno provisorio sin violencia.",
        topic: 2, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿cuál de estas acciones se llevó a cabo antes de que Caballero enviara a Iturbe a intimar a Velasco?",
        options: ["La rendición de Velasco.", "La solicitud de consejos al Dr. Francia.", "La toma del Cuartel del Colegio por Rivarola.", "La salida de los oficiales de la casa Martínez Sáenz y toma del cuartel de la Plaza."],
        correctAnswer: "La salida de los oficiales de la casa Martínez Sáenz y toma del cuartel de la Plaza.",
        topic: 2, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál fue la consecuencia de la Revolución de Mayo relacionada con la estructura económica colonial?",
        options: ["Se aumentaron los impuestos a la corona española.", "Se levantó el monopolio del tabaco.", "Se estableció un nuevo monopolio estatal sobre el tabaco.", "Se prohibió todo el comercio exterior."],
        correctAnswer: "Se levantó el monopolio del tabaco.",
        topic: 2, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, el plan de conspiración tenía como resultado la destitución de Velasco. ¿Qué característica clave de esta destitución es destacada?",
        options: ["Fue resultado de un largo proceso judicial.", "Se logró sin derramamiento de sangre.", "Fue ordenada por la Junta de Bs.As.", "Implicó la erradicación de los Españolistas."],
        correctAnswer: "Se logró sin derramamiento de sangre.",
        topic: 2, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿cómo afectó la llegada del teniente portugués José de Abreu al timing de la Revolución de Mayo?",
        options: ["La retrasó.", "La detuvo.", "No tuvo influencia.", "Aceleró la decisión de los próceres de llevarla a cabo."],
        correctAnswer: "Aceleró la decisión de los próceres de llevarla a cabo.",
        topic: 2, difficulty: 'intermedio'
    },
    // Nivel Avanzado
    {
        question: "Analizando los tres grupos políticos, ¿cuál representaba continuidad colonial y cuál un quiebre radical?",
        options: ["Continuidad: Independentistas; Quiebre: Españolistas", "Continuidad: Porteñistas; Quiebre: Independentistas", "Continuidad: Independentistas; Quiebre: Porteñistas", "Continuidad: Españolistas; Quiebre: Independentistas"],
        correctAnswer: "Continuidad: Españolistas; Quiebre: Independentistas",
        topic: 2, difficulty: 'avanzado'
    },
    {
        question: "Las fuentes describen la Revolución como \"pacífica\". ¿Cuál es la base para considerar que se logró sin derramamiento de sangre?",
        options: ["Militares se negaron a usar la fuerza.", "Velasco se rindió de inmediato.", "Se alcanzó el objetivo mediante presión y entrega de poder, no combate.", "La Junta de Bs.As. intervino para evitar conflicto."],
        correctAnswer: "Se alcanzó el objetivo mediante presión y entrega de poder, no combate.",
        topic: 2, difficulty: 'avanzado'
    },
    {
        question: "El plan se basó en el descontento con el dominio español. ¿Cómo se relaciona con las causas del Tema 1?",
        options: ["Es un sentimiento aislado sin relación.", "Es manifestación local de problemas (impuestos, límites comerciales, falta soberanía) catalizado por crisis española.", "Surgió por la intención de anexión de Bs.As.", "Fue provocado por la llegada de Abreu."],
        correctAnswer: "Es manifestación local de problemas (impuestos, límites comerciales, falta soberanía) catalizado por crisis española.",
        topic: 2, difficulty: 'avanzado'
    },
    {
        question: "La cronología muestra solicitud de consejo a Francia después de llegada de Abreu y antes de salir de casa Martínez. ¿Implicación?",
        options: ["Francia fue el planificador principal desde el inicio.", "Llegada de Abreu no tuvo impacto.", "Llegada de Abreu fue desencadenante para buscar consejo urgente y adelantar plan.", "Francia envió a Abreu."],
        correctAnswer: "Llegada de Abreu fue desencadenante para buscar consejo urgente y adelantar plan.",
        topic: 2, difficulty: 'avanzado'
    },
    {
        question: "Una consecuencia fue destinar impuestos para un ejército. ¿Relación con situación política (Bs.As., España)?",
        options: ["Para apoyar al régimen español.", "Medida de defensa y afirmación de autonomía frente a amenazas (anexión Bs.As., reconquista española).", "Para unirse al ejército de Bs.As.", "Para financiar expulsión de portugueses."],
        correctAnswer: "Medida de defensa y afirmación de autonomía frente a amenazas (anexión Bs.As., reconquista española).",
        topic: 2, difficulty: 'avanzado'
    },
    {
        question: "Los cuarteles fueron cruciales el 14 de mayo. ¿Importancia estratégica de tomarlos para un plan pacífico?",
        options: ["Liberar presos políticos.", "Permitía controlar medios de fuerza y presionar al gobernador sin combate abierto.", "Unirse a tropas leales a Velasco.", "Eran puntos de reunión secretos."],
        correctAnswer: "Permitía controlar medios de fuerza y presionar al gobernador sin combate abierto.",
        topic: 2, difficulty: 'avanzado'
    },
    {
        question: "Los grupos políticos surgieron después de Paraguarí y Tacuarí. ¿Cómo estas batallas exacerbaron diferencias ideológicas?",
        options: ["Demostraron fuerza española, uniendo opositores.", "Capacidad militar propia y orgullo fortalecieron idea de autonomía total (Independentistas) vs anexión (Porteñistas).", "Debilitaron al grupo Españolista.", "Unieron a todos contra Bs.As."],
        correctAnswer: "Capacidad militar propia y orgullo fortalecieron idea de autonomía total (Independentistas) vs anexión (Porteñistas).",
        topic: 2, difficulty: 'avanzado'
    },
    {
        question: "La casa Martínez Sáenz fue lugar de reunión secreta. ¿Qué detalle adicional da la fuente?",
        options: ["Lugar donde se rindió Velasco.", "Se convirtió en museo en 1961.", "Construida en 1811.", "Pertenecía al Dr. Francia."],
        correctAnswer: "Se convirtió en museo en 1961.",
        topic: 2, difficulty: 'avanzado'
    },
    {
        question: "La Revolución logró gobierno autónomo. ¿Significado de \"autonomía\" en este contexto?",
        options: ["Plena independencia reconocida por todos.", "Gobierno que se rige a sí mismo, libre de control español y de Bs.As.", "Gobierno que seguía órdenes de Bs.As.", "Gobierno temporal hasta regreso español."],
        correctAnswer: "Gobierno que se rige a sí mismo, libre de control español y de Bs.As.",
        topic: 2, difficulty: 'avanzado'
    },
    {
        question: "Hubo negociaciones toda la noche del 14 de mayo. ¿Entre quiénes, implícitamente?",
        options: ["Próceres y teniente Abreu.", "Porteñistas e Independentistas.", "Próceres (o representantes) y gobernador Velasco (o representantes coloniales).", "Próceres y Junta de Bs.As."],
        correctAnswer: "Próceres (o representantes) y gobernador Velasco (o representantes coloniales).",
        topic: 2, difficulty: 'avanzado'
    },

    // === Tema 3: Los próceres de la Independencia ===
    // Nivel Básico
    {
        question: "Según las fuentes, ¿en qué año falleció Mauricio José Troche?",
        options: ["1821", "1825", "1830", "1840"],
        correctAnswer: "1830",
        topic: 3, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿dónde murió Fernando de la Mora?",
        options: ["Fusilado", "Ejecutado", "En la cárcel", "En su casa"],
        correctAnswer: "En la cárcel",
        topic: 3, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿a qué categoría de próceres pertenecía Francisco Javier Bogarín?",
        options: ["Civil", "Oficial", "Religioso", "Militar"],
        correctAnswer: "Religioso",
        topic: 3, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿quién fue uno de los próceres Civiles?",
        options: ["Pedro Juan Caballero", "Fulgencio Yegros", "Juana María de Lara", "José Agustín Molas"],
        correctAnswer: "Juana María de Lara",
        topic: 3, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿quién fue uno de los próceres Oficiales?",
        options: ["Fernando de la Mora", "Francisco Javier Bogarín", "Dr. José Gaspar Rodríguez de Francia", "Vicente Ignacio Iturbe"],
        correctAnswer: "Vicente Ignacio Iturbe",
        topic: 3, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿a qué categoría de próceres pertenecía el Presbítero José Agustín Molas?",
        options: ["Civil", "Oficial", "Religioso", "Abogado"],
        correctAnswer: "Religioso",
        topic: 3, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿quién fue uno de los próceres Militares (Oficiales)?",
        options: ["Juana María de Lara", "Dr. José Gaspar Rodríguez de Francia", "Fernando de la Mora", "Mauricio José Troche"],
        correctAnswer: "Mauricio José Troche",
        topic: 3, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál fue el rol del Capitán Pedro Juan Caballero en la madrugada del 15 de mayo?",
        options: ["Tomó el Cuartel del Colegio.", "Se rindió ante el gobernador Velasco.", "Realizó varias intimaciones al gobernador Velasco.", "Solicitó consejo al Dr. Francia."],
        correctAnswer: "Realizó varias intimaciones al gobernador Velasco.",
        topic: 3, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿quién fue uno de los próceres Civiles, además del Dr. Francia y Fernando de la Mora?",
        options: ["José Agustín Molas", "Mauricio José Troche", "Fulgencio Yegros", "Juana María de Lara"],
        correctAnswer: "Juana María de Lara",
        topic: 3, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué título militar tenía Fulgencio Yegros, mencionado como prócer Oficial?",
        options: ["Capitán", "Teniente", "General", "Mayor"],
        correctAnswer: "Teniente",
        topic: 3, difficulty: 'básico'
    },
    // Nivel Medio
    {
        question: "Según las fuentes, Fernando de la Mora murió en la cárcel. ¿A qué categoría de próceres pertenecía?",
        options: ["Oficial", "Civil", "Religioso", "Militar"],
        correctAnswer: "Civil",
        topic: 3, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, Mauricio José Troche falleció en 1830. ¿A qué categoría de próceres pertenecía?",
        options: ["Oficial", "Civil", "Religioso", "Político"],
        correctAnswer: "Oficial",
        topic: 3, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿quién de los siguientes próceres Oficiales tuvo una actuación destacada al controlar un Cuartel?",
        options: ["Fulgencio Yegros", "Vicente Ignacio Iturbe", "Juan Bautista Rivarola", "Mauricio José Troche"],
        correctAnswer: "Mauricio José Troche",
        topic: 3, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué rol jugó el Dr. Francia en relación con la llegada del teniente Abreu?",
        options: ["Apoyó el régimen español.", "Se unió a Abreu para defender a Velasco.", "Aconsejó a los oficiales jóvenes sobre los pasos a tomar.", "Lideró la toma del Cuartel de la Plaza."],
        correctAnswer: "Aconsejó a los oficiales jóvenes sobre los pasos a tomar.",
        topic: 3, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿qué se infiere sobre Juana María de Lara al ser listada como prócer Civil?",
        options: ["Tenía un cargo militar importante.", "Pertenecía al clero.", "Tuvo participación en los eventos sin ser militar ni religiosa.", "Lideró las negociaciones con Velasco."],
        correctAnswer: "Tuvo participación en los eventos sin ser militar ni religiosa.",
        topic: 3, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál de los siguientes próceres Religiosos participó en el Congreso del 17 de junio de 1811?",
        options: ["Dr. José Gaspar Rodríguez de Francia", "Presbítero José Agustín Molas", "Mauricio José Troche", "Fernando de la Mora"],
        correctAnswer: "Presbítero José Agustín Molas", //Ajustado a las preguntas dadas.
        topic: 3, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿qué acción clave realizó el Capitán Pedro Juan Caballero en la madrugada del 15 de mayo?",
        options: ["Toma del Cuartel de Artillería.", "Rendición del gobernador Velasco.", "Solicitud de consejos al Dr. Francia.", "Intimación al gobernador Velasco para entregar poder y elementos clave."],
        correctAnswer: "Intimación al gobernador Velasco para entregar poder y elementos clave.",
        topic: 3, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué próceres asumieron como cónsules de la República en 1813?",
        options: ["Caballero y Rivarola", "Francia y Zeballos", "Alonso y López", "Yegros y Francia"],
        correctAnswer: "Yegros y Francia",
        topic: 3, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿cuál de los próceres mencionados tuvo una muerte en prisión?",
        options: ["Mauricio José Troche", "Pedro Juan Caballero", "Fernando de la Mora", "Dr. José Gaspar Rodríguez de Francia"],
        correctAnswer: "Fernando de la Mora",
        topic: 3, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál de los próceres Oficiales controló el Cuartel de Artillería el 14 de mayo?",
        options: ["Juan Manuel Iturbe", "Juan Bautista Rivarola", "Pedro Juan Caballero", "Mariano José Troche"],
        correctAnswer: "Mariano José Troche",
        topic: 3, difficulty: 'intermedio'
    },
    // Nivel Avanzado
    {
        question: "Considerando la clasificación de próceres, ¿qué categorías estuvieron representadas en el Primer Gobierno Provisorio junto a Velasco?",
        options: ["Solo Oficiales", "Solo Civiles", "Oficial y Civil", "Religioso y Civil"],
        correctAnswer: "Oficial y Civil",
        topic: 3, difficulty: 'avanzado'
    },
    {
        question: "Los oficiales pidieron consejo al Dr. Francia. ¿Qué combinación de categorías participó en este evento?",
        options: ["Solo Oficiales.", "Oficiales y Religiosos.", "Oficiales (liderados por Caballero) y un Civil (Dr. Francia).", "Solo Civiles."],
        correctAnswer: "Oficiales (liderados por Caballero) y un Civil (Dr. Francia).",
        topic: 3, difficulty: 'avanzado'
    },
    {
        question: "Al examinar la lista de próceres y gobiernos posteriores, ¿qué próceres alcanzaron el cargo de Cónsul de la República?",
        options: ["Caballero y Iturbe.", "Yegros y Francia.", "Rivarola y Troche.", "De la Mora y Lara."],
        correctAnswer: "Yegros y Francia.",
        topic: 3, difficulty: 'avanzado'
    },
    {
        question: "Mauricio José Troche falleció en 1830. ¿Qué se infiere sobre su destino en el contexto del gobierno de Francia (1816-1840)?",
        options: ["Murió durante el Consulado.", "Sobrevivió a la Dictadura Perpetua.", "Murió durante la Dictadura Temporal.", "Murió durante la Dictadura Perpetua."],
        correctAnswer: "Murió durante la Dictadura Perpetua.",
        topic: 3, difficulty: 'avanzado'
    },
    {
        question: "Fernando de la Mora murió en la cárcel. Considerando la Conspiración de 1820, ¿qué es una posible explicación?",
        options: ["Murió por causas naturales durante el Primer Gobierno Provisorio.", "Pudo haber sido encarcelado como consecuencia de la Conspiración de 1820 o por otras acciones opositoras.", "Fue encarcelado por no apoyar la independencia.", "Fue fusilado por orden de Francia en 1830."],
        correctAnswer: "Pudo haber sido encarcelado como consecuencia de la Conspiración de 1820 o por otras acciones opositoras.",
        topic: 3, difficulty: 'avanzado'
    },
    {
        question: "Al comparar acciones de próceres el 14 de mayo, ¿cuál tomó una posición militar clave distinta a los cuarteles del centro?",
        options: ["Pedro Juan Caballero", "Mauricio José Troche", "Juan Manuel Iturbe", "Juan Bautista Rivarola"],
        correctAnswer: "Juan Bautista Rivarola",
        topic: 3, difficulty: 'avanzado'
    },
    {
        question: "El crucigrama menciona a Caballero (intimó a Velasco) y Troche (controló cuartel). ¿Cómo se relaciona con las fuentes?",
        options: ["Pista de Caballero incorrecta.", "Pista de Troche incorrecta.", "Pistas resumen acciones clave atribuidas a Caballero y Troche.", "Pistas describen roles civiles."],
        correctAnswer: "Pistas resumen acciones clave atribuidas a Caballero y Troche.",
        topic: 3, difficulty: 'avanzado'
    },
    {
        question: "Tte. Fulgencio Yegros fue prócer Oficial y luego Cónsul. ¿Qué indica esta progresión?",
        options: ["Cargos militares eran superiores.", "Próceres militares tuvieron papel político protagónico posterior.", "Solo oficiales podían ser cónsules.", "Abandonó carrera militar."],
        correctAnswer: "Próceres militares tuvieron papel político protagónico posterior.",
        topic: 3, difficulty: 'avanzado'
    },
    {
        question: "Dr. Francia, prócer Civil, asesoró a oficiales y gobernó. ¿Qué sugiere su papel inicial en la Revolución?",
        options: ["Líder militar encubierto.", "Aunque civil, tuvo influencia estratégica y fue considerado por militares.", "Participación simbólica al principio.", "Se opuso inicialmente."],
        correctAnswer: "Aunque civil, tuvo influencia estratégica y fue considerado por militares.",
        topic: 3, difficulty: 'avanzado'
    },
    {
        question: "Considerando la muerte de De la Mora en cárcel y la Conspiración de 1820, ¿quién estuvo implicado en la represión posterior?",
        options: ["Dr. José Gaspar Rodríguez de Francia.", "Fernando de la Mora.", "Fulgencio Yegros.", "Pedro Juan Caballero."],
        correctAnswer: "Dr. José Gaspar Rodríguez de Francia.",
        topic: 3, difficulty: 'avanzado'
    },

    // === Tema 4: Primeros Gobiernos del Paraguay Independiente (1811-1813) ===
    // Nivel Básico
    {
        question: "Según las fuentes, ¿quiénes asumieron como consocios de Velasco en el Primer Gobierno Provisorio el 16 de mayo de 1811?",
        options: ["Yegros y Dr. Francia", "Capitán Juan Valeriano Zeballos y Dr. José Gaspar Rodríguez de Francia", "Mariano Roque Alonso y Carlos Antonio López", "Caballero y Iturbe"],
        correctAnswer: "Capitán Juan Valeriano Zeballos y Dr. José Gaspar Rodríguez de Francia",
        topic: 4, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué se estableció como forma de gobierno en el Congreso General de 1813?",
        options: ["La Dictadura Suprema", "La Presidencia", "La Junta Superior Gubernativa", "El Consulado"],
        correctAnswer: "El Consulado",
        topic: 4, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿cuál fue una de las medidas adoptadas en el Congreso General del 17 de junio de 1811?",
        options: ["Proclamar la República del Paraguay", "Establecer el Consulado", "Elegir al Dr. Francia como Dictador Supremo", "Declarar que la provincia del Paraguay se gobernaría sola"],
        correctAnswer: "Declarar que la provincia del Paraguay se gobernaría sola",
        topic: 4, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué estableció el Tratado del 12 de octubre de 1811, firmado con la Junta de Buenos Aires?",
        options: ["Fundación de Sociedad Patriótica Literaria", "Comunicación de independencia Paraguaya", "Creación del Consulado", "Establecer los límites entre ambas provincias"],
        correctAnswer: "Establecer los límites entre ambas provincias",
        topic: 4, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿en qué fecha asumió el mando la Junta Superior Gubernativa?",
        options: ["16 de mayo de 1811", "20 de junio de 1811", "17 de junio de 1811", "12 de octubre de 1811"],
        correctAnswer: "20 de junio de 1811",
        topic: 4, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué tipo de institución se decidió fundar en el Bando del 6 de enero de 1812 para fomentar la educación?",
        options: ["Una Universidad", "Escuelas Militares", "Una Sociedad Patriótica Literaria", "Un Colegio Nacional"],
        correctAnswer: "Una Sociedad Patriótica Literaria",
        topic: 4, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿cuál fue el objetivo de la expedición militar realizada a fines de 1812?",
        options: ["Apoyar a la Junta de Buenos Aires.", "Defender la provincia de invasión española.", "Expulsar a los Portugueses del fuerte Borbón.", "Negociar límites con portugueses."],
        correctAnswer: "Expulsar a los Portugueses del fuerte Borbón.",
        topic: 4, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál de las siguientes opciones es una medida adoptada por la Junta Superior Gubernativa?",
        options: ["Elegir a los cónsules.", "Instaurar la Dictadura Perpetua.", "Comunicar a Bs.As. la libertad e independencia Paraguaya.", "Prohibir emitir juicios sobre Francia."],
        correctAnswer: "Comunicar a Bs.As. la libertad e independencia Paraguaya.",
        topic: 4, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿qué ocurrió el 20 de julio de 1811?",
        options: ["Asumió mando la Junta Superior Gubernativa.", "Se firmó Tratado con Bs.As.", "Se fundó Sociedad Patriótica Literaria.", "Se comunicó a Bs.As. la libertad e independencia Paraguaya."],
        correctAnswer: "Se comunicó a Bs.As. la libertad e independencia Paraguaya.",
        topic: 4, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿cuál fue una medida relacionada con los españoles adoptada en el Congreso del 17 de junio de 1811?",
        options: ["Expulsar a todos los españoles.", "Inhabilitar a los españoles para ocupar cargos públicos.", "Concederles ciudadanía plena.", "Exigirles altos impuestos."],
        correctAnswer: "Inhabilitar a los españoles para ocupar cargos públicos.",
        topic: 4, difficulty: 'básico'
    },
    // Nivel Medio
    {
        question: "Según las fuentes, ¿cuál era el propósito de que actos en el Primer Gobierno Provisorio fueran firmados por Velasco, Zeballos y Francia?",
        options: ["Mantener control exclusivo de Velasco.", "Asegurar decisiones consensuadas entre antiguo gobernador y nuevos consocios.", "Preparar regreso del dominio español.", "Delegar poder a grupos políticos."],
        correctAnswer: "Asegurar decisiones consensuadas entre antiguo gobernador y nuevos consocios.",
        topic: 4, difficulty: 'intermedio'
    },
    {
        question: "Congreso 17/06/1811 adoptó medidas. ¿Cuál fue declaración fundamental sobre estatus político?",
        options: ["Conformar Junta Superior Gubernativa.", "Declarar que la provincia del Paraguay se gobernaría sola.", "Inhabilitar españoles de cargos públicos.", "Mantener amistad con Bs.As."],
        correctAnswer: "Declarar que la provincia del Paraguay se gobernaría sola.",
        topic: 4, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿qué se aprobó en el Congreso de 1813 además de proclamación de República y reglamento?",
        options: ["Elección de Francia como Dictador Supremo.", "Tratado del 12 de octubre de 1811.", "Ley de Libertad de Vientres.", "Establecimiento del Consulado y elección de miembros."],
        correctAnswer: "Establecimiento del Consulado y elección de miembros.",
        topic: 4, difficulty: 'intermedio'
    },
    {
        question: "Junta Superior Gubernativa envió Nota 20/07/1811 a Bs.As. ¿Mensaje central?",
        options: ["Solicitar anexión.", "Pedir ayuda militar contra portugueses.", "Comunicar oficialmente que Paraguay era libre e independiente.", "Negociar límites territoriales."],
        correctAnswer: "Comunicar oficialmente que Paraguay era libre e independiente.",
        topic: 4, difficulty: 'intermedio'
    },
    {
        question: "Tratado 12/10/1811 con Bs.As. estableció límites y defensa mutua. ¿Qué revela sobre la relación?",
        options: ["Paraguay aceptó ser anexado.", "Bs.As. reconoció independencia de Paraguay.", "Acuerdo reconoció separación territorial y necesidad de cooperación.", "Bs.As. impuso autoridad militar."],
        correctAnswer: "Acuerdo reconoció separación territorial y necesidad de cooperación.",
        topic: 4, difficulty: 'intermedio'
    },
    {
        question: "Sociedad Patriótica Literaria (Bando 06/01/1812) fomentó educación. ¿Qué complementó formación de docentes?",
        options: ["Maestros enviados al extranjero.", "Documentos de instrucción para maestros de escuelas.", "Fundación de nuevas escuelas.", "Mejor pago a maestros."],
        correctAnswer: "Documentos de instrucción para maestros de escuelas.",
        topic: 4, difficulty: 'intermedio'
    },
    {
        question: "Según las fuentes, ¿qué evento clave ocurrió en la fecha del Congreso General del 17 de junio de 1811?",
        options: ["Asunción de la Junta Superior Gubernativa.", "Proclamación de la República.", "Se decidió conformar Junta Superior Gubernativa y declarar autonomía.", "Se eligió a Francia Dictador Supremo."],
        correctAnswer: "Se decidió conformar Junta Superior Gubernativa y declarar autonomía.",
        topic: 4, difficulty: 'intermedio'
    },
    {
        question: "Papel del Congreso 17/06/1811 en sucesión de gobiernos:",
        options: ["Disolvió Primer Gobierno Provisorio y creó Junta Superior Gubernativa.", "Eligió miembros del Primer Gobierno Provisorio.", "Proclamó fin de Junta Superior Gubernativa.", "Estableció Consulado."],
        correctAnswer: "Disolvió Primer Gobierno Provisorio y creó Junta Superior Gubernativa.",
        topic: 4, difficulty: 'intermedio'
    },
    {
        question: "Junta Superior Gubernativa asumió 20/06/1811. ¿Qué gobierno la precedió?",
        options: ["Dictadura Suprema.", "Consulado.", "Primer Gobierno Provisorio.", "Régimen de Velasco solo."],
        correctAnswer: "Primer Gobierno Provisorio.",
        topic: 4, difficulty: 'intermedio'
    },
    {
        question: "Congreso 1813 (30/09 y 12/10). ¿Qué tipo de decisiones importantes se aprobaron?",
        options: ["Represión de conspiraciones.", "Forma de gobierno (República, Consulado) y reglamento.", "Apertura total al comercio exterior.", "Anexión a Bs.As."],
        correctAnswer: "Forma de gobierno (República, Consulado) y reglamento.",
        topic: 4, difficulty: 'intermedio'
    },
    // Nivel Avanzado
    {
        question: "Característica que diferencia al Primer Gobierno Provisorio (16/05/1811) de gobiernos posteriores:",
        options: ["Único con próceres militares.", "Gobierno de transición que aún incluía al gobernador español depuesto.", "Único que comunicó independencia a Bs.As.", "Único donde participó Dr. Francia."],
        correctAnswer: "Gobierno de transición que aún incluía al gobernador español depuesto.",
        topic: 4, difficulty: 'avanzado'
    },
    {
        question: "Declaración 'Paraguay se gobernaría sola' (Congreso 17/06/1811). ¿Qué postura política refleja y fortalece?",
        options: ["Españolistas.", "Porteñistas.", "Independentistas.", "Realistas."],
        correctAnswer: "Independentistas.",
        topic: 4, difficulty: 'avanzado'
    },
    {
        question: "Tratado 12/10/1811 (límites, defensa mutua) vs Comunicación 20/07/1811 (libertad). ¿Relación?",
        options: ["Comunicación violó tratado.", "Tratado fue reconocimiento formal de independencia comunicada.", "Comunicación unilateral, tratado intentó regularizar relación con Paraguay autónomo.", "Ambos emitidos por Bs.As. para controlar."],
        correctAnswer: "Comunicación unilateral, tratado intentó regularizar relación con Paraguay autónomo.",
        topic: 4, difficulty: 'avanzado'
    },
    {
        question: "Congreso 1813 proclamó República y estableció Consulado. ¿Por qué Consulado y no otra forma?",
        options: ["Imitar modelo de Bs.As.", "Regresar a forma colonial.", "Solución colegiada (Yegros militar, Francia civil) reflejando diversidad y equilibrio.", "Impuesto por fuerza militar."],
        correctAnswer: "Solución colegiada (Yegros militar, Francia civil) reflejando diversidad y equilibrio.",
        topic: 4, difficulty: 'avanzado'
    },
    {
        question: "Expedición 1812 (expulsar portugueses Fuerte Borbón). ¿Qué prioridad de gobierno evidencia?",
        options: ["Educación.", "Relaciones comerciales.", "Defensa territorial y soberanía.", "Fomento de la cultura."],
        correctAnswer: "Defensa territorial y soberanía.",
        topic: 4, difficulty: 'avanzado'
    },
    {
        question: "Bando 06/01/1812 (Sociedad Patriótica) y Documentos instrucción maestros. ¿Área de desarrollo impulsada?",
        options: ["Comercio exterior.", "Organización militar.", "Educación y la cultura.", "Producción agrícola."],
        correctAnswer: "Educación y la cultura.",
        topic: 4, difficulty: 'avanzado'
    },
    {
        question: "Junta Superior Gubernativa (20/06/1811) vs Primer Gobierno Provisorio. ¿Diferencia principal en estructura de poder?",
        options: ["Primero un solo líder, Junta colegiada.", "Junta incluía religiosos, Primero no.", "Primero incluía gobernador español depuesto, Junta no.", "Primero elegido por Congreso, Junta no."],
        correctAnswer: "Primero incluía gobernador español depuesto, Junta no.",
        topic: 4, difficulty: 'avanzado'
    },
    {
        question: "Congreso 1813 ratificó República (ya declarada autonomía en 1811). ¿Significado de decisión de 1813?",
        options: ["Primera vez que se mencionó autogobierno.", "Anuló decisiones de 1811.", "Formalizó estatus de República independiente y gobierno propio (Consulado).", "Permitió anexión a Bs.As."],
        correctAnswer: "Formalizó estatus de República independiente y gobierno propio (Consulado).",
        topic: 4, difficulty: 'avanzado'
    },
    {
        question: "Primer Gobierno Provisorio debía decidir forma de gobierno. ¿Qué forma adoptó Congreso de 1813?",
        options: ["Junta Superior Gubernativa.", "Dictadura Suprema.", "Presidencia.", "El Consulado."],
        correctAnswer: "El Consulado.",
        topic: 4, difficulty: 'avanzado'
    },
    {
        question: "Obras Junta Superior Gubernativa (Nota, Tratado, Bando, Instrucción, Expedición). ¿Cuál afirmó identidad externa?",
        options: ["Bando 06/01/1812.", "Expedición 1812.", "Nota 20/07/1811 a Junta de Bs.As.", "Documentos instrucción maestros."],
        correctAnswer: "Nota 20/07/1811 a Junta de Bs.As.",
        topic: 4, difficulty: 'avanzado'
    },

     // === Tema 5: Los Gobiernos del Dr. Francia ===
    // Nivel Básico
    {
        question: "Según las fuentes, ¿por cuánto tiempo fue elegido el Dr. Francia como Dictador Supremo en 1814?",
        options: ["Hasta su muerte", "10 años", "3 años", "5 años"],
        correctAnswer: "5 años",
        topic: 5, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿hasta cuándo abarcó la Dictadura Perpetua del Dr. Francia?",
        options: ["Desde 1814 hasta 1816", "Desde 1816 hasta su muerte (1840)", "5 años", "10 años"],
        correctAnswer: "Desde 1816 hasta su muerte (1840)",
        topic: 5, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿cuál fue una de las tres obras que resumen el gobierno del Dr. Francia?",
        options: ["La anexión a Buenos Aires", "La restauración de la monarquía española", "Relaciones fluidas con vecinos", "El fortalecimiento de la independencia"],
        correctAnswer: "El fortalecimiento de la independencia",
        topic: 5, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué causó el gobierno autoritario del Dr. Francia en los próceres?",
        options: ["Orgullo nacional", "Golpe de estado exitoso", "Descontento", "Apoyo incondicional"],
        correctAnswer: "Descontento",
        topic: 5, difficulty: 'básico'
    },
    {
        question: "Según las fuentes, ¿cuál era el objetivo de la Conspiración de 1820 contra el Dr. Francia?",
        options: ["Anexar Paraguay a Bs.As.", "Restablecer monopolio del tabaco", "Apoyar llegada de Abreu", "Intentar sacar al Dr. Francia del poder"],
        correctAnswer: "Intentar sacar al Dr. Francia del poder",
        topic: 5, difficulty: 'básico'
    },
    {
        question: "Diferencia principal entre Dictador Supremo y Perpetuo, según duración:",
        options: ["Supremo limitado, Perpetuo no", "Supremo 5 años, Perpetuo hasta la muerte", "Supremo podía dictar leyes, Perpetuo no", "Supremo 1816, Perpetuo 1814"],
        correctAnswer: "Supremo 5 años, Perpetuo hasta la muerte",
        topic: 5, difficulty: 'básico'
    },
    {
        question: "Medida de Francia (Dictadura Temporal) respecto a españoles nacidos en España:",
        options: ["Les concedió tierras.", "Les permitió ocupar cargos.", "Los expulsó si cumplían funciones.", "Exigió lealtad a Bs.As."],
        correctAnswer: "Los expulsó si cumplían funciones.",
        topic: 5, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué le sucedió a Aime Bonpland durante gobierno de Francia?",
        options: ["Nombrado Ministro de Educación.", "Ayudó a establecer comercio.", "Fue retenido.", "Asesoró en asuntos militares."],
        correctAnswer: "Fue retenido.",
        topic: 5, difficulty: 'básico'
    },
    {
        question: "Comercio exterior durante gobierno de Francia, ¿cómo se realizaba?",
        options: ["Con todos los vecinos libremente.", "Solo a través de Bs.As.", "Solamente a través de los puertos.", "Con el Imperio Español."],
        correctAnswer: "Solamente a través de los puertos.",
        topic: 5, difficulty: 'básico'
    },
    {
        question: "De acuerdo con las fuentes, ¿qué hizo Francia respecto a la Iglesia Paraguaya?",
        options: ["Mantuvo dependencia de España.", "Nombró administrador y suprimió órdenes religiosas.", "Permitió total libertad religiosa.", "Le devolvió tierras."],
        correctAnswer: "Nombró administrador y suprimió órdenes religiosas.",
        topic: 5, difficulty: 'básico'
    },
    // Nivel Medio
    {
        question: "Congreso 1814 eligió a Francia Dictador Supremo. ¿Qué forma de gobierno reemplazó?",
        options: ["Dictadura Perpetua", "El Consulado", "Junta Superior Gubernativa", "Primer Gobierno Provisorio"],
        correctAnswer: "El Consulado",
        topic: 5, difficulty: 'intermedio'
    },
    {
        question: "Dictadura Perpetua (1816-1840). ¿Qué ocurrió en 1816 que marcó su inicio?",
        options: ["Fracaso de Conspiración 1820.", "Congreso 1814 extendió mandato.", "Designado Dictador Perpetuo por Congreso.", "Murió co-cónsul Yegros."],
        correctAnswer: "Designado Dictador Perpetuo por Congreso.",
        topic: 5, difficulty: 'intermedio'
    },
    {
        question: "Obra de Francia: defensa de límites. ¿Relación con Expedición 1812 (Tema 4)?",
        options: ["Expedición fue para atacar Bs.As.", "Expedición fue medida aislada.", "Expedición contra portugueses es ejemplo temprano de política de defensa.", "Francia se opuso a expedición."],
        correctAnswer: "Expedición contra portugueses es ejemplo temprano de política de defensa.",
        topic: 5, difficulty: 'intermedio'
    },
    {
        question: "Tierras pasaron a pertenecer al estado (gobierno Francia). ¿Implicación?",
        options: ["Fortaleció poder de terratenientes.", "Estado adquirió control centralizado de recurso económico.", "Eliminó agricultura.", "Repartió tierras a campesinos."],
        correctAnswer: "Estado adquirió control centralizado de recurso económico.",
        topic: 5, difficulty: 'intermedio'
    },
    {
        question: "Gobierno autoritario causó descontento en próceres. ¿Qué acción evidencia esto y sus consecuencias?",
        options: ["Fundación Sociedad Patriótica.", "Firma Tratado 12 Octubre.", "Elección Dictador Perpetuo.", "Conspiración 1820 (intentó sacarlo) y encarcelamientos."],
        correctAnswer: "Conspiración 1820 (intentó sacarlo) y encarcelamientos.",
        topic: 5, difficulty: 'intermedio'
    },
    {
        question: "De acuerdo con las fuentes, ¿por qué Francia retuvo a Aime Bonpland?",
        options: ["Espía de Bs.As.", "Evitar revelara secretos a Brasil.", "Presionar a Brasil para reconocimiento de independencia.", "Para trabajar en Sociedad Patriótica."],
        correctAnswer: "Presionar a Brasil para reconocimiento de independencia.",
        topic: 5, difficulty: 'intermedio'
    },
    {
        question: "Congreso 1816 designó a Francia Dictador Perpetuo. ¿Factor de elección inicial (1814) que pudo influir?",
        options: ["Conocimiento comercio exterior.", "Liderazgo militar.", "Su patriotismo.", "Habilidad para negociar con Velasco."],
        correctAnswer: "Su patriotismo.",
        topic: 5, difficulty: 'intermedio'
    },
    {
        question: "Escuelas y maestros durante gobierno de Francia:",
        options: ["Cerradas, maestros expulsados.", "Fundaron escuelas, maestros pagados por estado.", "Administradas por Iglesia.", "Financiamiento dependió de donaciones."],
        correctAnswer: "Fundaron escuelas, maestros pagados por estado.",
        topic: 5, difficulty: 'intermedio'
    },
    {
        question: "Obra: defensa límites. ¿Ejemplo de acción militar de defensa en primeros años independencia?",
        options: ["Batallas Paraguarí y Tacuarí.", "Conspiración 1820.", "Retención Bonpland.", "Expedición 1812 (expulsar portugueses)."],
        correctAnswer: "Expedición 1812 (expulsar portugueses).",
        topic: 5, difficulty: 'intermedio'
    },
    {
        question: "Francia logró poner de acuerdo a mayoría población políticamente. ¿Método principal?",
        options: ["Consultas populares frecuentes.", "Gobierno autoritario, control centralizado, represión oposición.", "Delegación poder en gobiernos locales.", "Promoción sistema partidos políticos."],
        correctAnswer: "Gobierno autoritario, control centralizado, represión oposición.",
        topic: 5, difficulty: 'intermedio'
    },
    // Nivel Avanzado
    {
        question: "Obras Francia: independencia, límites, tranquilidad. ¿Relación causal defensa límites y tranquilidad interna?",
        options: ["Defensa desestabilizó.", "Tranquilidad permitió dedicar recursos a defensa.", "Defensa efectiva de territorio contribuyó a estabilidad interna.", "No existe relación."],
        correctAnswer: "Defensa efectiva de territorio contribuyó a estabilidad interna.",
        topic: 5, difficulty: 'avanzado'
    },
    {
        question: "Francia \"logró Adhesión mayoría población\". Considerando autoritarismo, ¿cómo se explica?",
        options: ["Producto participación democrática.", "Basó en fuerte ideología compartida.", "Percepción de que garantizaba independencia, soberanía y estabilidad, a pesar de autoritarismo.", "Forzada por retención Bonpland."],
        correctAnswer: "Percepción de que garantizaba independencia, soberanía y estabilidad, a pesar de autoritarismo.",
        topic: 5, difficulty: 'avanzado'
    },
    {
        question: "Francia electo Dictador Supremo (5 años, patriotismo), luego Perpetuo (1816). ¿Qué sugiere cambio?",
        options: ["Retroceso en poder.", "Patriotismo cuestionado.", "Figura se volvió indispensable para garantizar independencia/gobernabilidad a largo plazo.", "Debido a presión Bs.As."],
        correctAnswer: "Figura se volvió indispensable para garantizar independencia/gobernabilidad a largo plazo.",
        topic: 5, difficulty: 'avanzado'
    },
    {
        question: "Consecuencias Conspiración 1820 más allá de encarcelamientos:",
        options: ["Llevó a Francia a relajar control.", "Fortaleció oposición.", "Pudo justificar/intensificar carácter autoritario y represivo.", "Resultó en anexión a Brasil."],
        correctAnswer: "Pudo justificar/intensificar carácter autoritario y represivo.",
        topic: 5, difficulty: 'avanzado'
    },
    {
        question: "Obra: tranquilidad interna. Considerando comercio restringido y retención Bonpland, ¿cómo la lograba?",
        options: ["Fomentando intenso comercio exterior.", "Controlando estrictamente fronteras y comunicaciones exteriores.", "Permitiendo libre circulación personas/ideas.", "Manteniendo ejército pequeño."],
        correctAnswer: "Controlando estrictamente fronteras y comunicaciones exteriores.",
        topic: 5, difficulty: 'avanzado'
    },
    {
        question: "Francia suprimió órdenes religiosas. ¿Implicación en contexto gobierno autoritario?",
        options: ["Promover diversidad religiosa.", "Centralizar poder estatal, eliminando focos autoridad independientes.", "Medida económica para confiscar bienes.", "Permitió Iglesia controlar educación."],
        correctAnswer: "Centralizar poder estatal, eliminando focos autoridad independientes.",
        topic: 5, difficulty: 'avanzado'
    },
    {
        question: "Educación financiada por estado (Francia) vs Medidas Junta (Sociedad, Instrucción). ¿Diferencia?",
        options: ["Junta solo superior, Francia básica.", "Junta no tomó medidas.", "Junta sentó bases, Francia consolidó sistema escuelas con financiamiento estatal.", "Francia revirtió medidas Junta."],
        correctAnswer: "Junta sentó bases, Francia consolidó sistema escuelas con financiamiento estatal.",
        topic: 5, difficulty: 'avanzado'
    },
    {
        question: "Dictador Supremo (patriotismo), Perpetuo (hasta muerte). ¿Por qué Francia instauró dictadura según fuente?",
        options: ["Aumentar riqueza personal.", "Permitir anexión a Brasil.", "Castigar conspiradores 1820.", "Asegurar independencia y soberanía Paraguay."],
        correctAnswer: "Asegurar independencia y soberanía Paraguay.",
        topic: 5, difficulty: 'avanzado'
    },
    {
        question: "Dictador Supremo (poder ilimitado 5 años), Perpetuo (poder ilimitado hasta muerte). ¿Qué aspecto NO los diferenciaba?",
        options: ["Duración mandato.", "Fecha inicio.", "Método elección.", "Alcance o límite de su poder."],
        correctAnswer: "Alcance o límite de su poder.",
        topic: 5, difficulty: 'avanzado'
    },
    {
        question: "Gobierno Francia: descontento próceres vs adhesión mayoría. ¿Cómo se reconcilia?",
        options: ["Adhesión implica todos de acuerdo.", "Sugiere división: élite descontenta, mayoría apoyó/toleró por estabilidad/seguridad.", "Afirmaciones se contradicen.", "Adhesión por fuerza militar."],
        correctAnswer: "Sugiere división: élite descontenta, mayoría apoyó/toleró por estabilidad/seguridad.",
        topic: 5, difficulty: 'avanzado'
    },
    // Agrega aquí más preguntas si es necesario, manteniendo el formato
];

// --- DOM Elements ---
const selectionScreen = document.getElementById('selection-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const topicSelect = document.getElementById('topic-select');
const difficultySelect = document.getElementById('difficulty-select');
const startButton = document.getElementById('start-button');
const startError = document.getElementById('start-error');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const finalScore = document.getElementById('final-score');
const finalMessage = document.getElementById('final-message');
const playAgainButton = document.getElementById('play-again-button');

// --- Audio Elements ---
let correctSound, incorrectSound, goodScoreSound, backgroundMusic;
// Se asignarán dentro del DOMContentLoaded listener

// --- Game State & Settings ---
let allFilteredQuestions = [];
let currentQuestions = []; // Preguntas para la ronda actual
let currentQuestionIndex = 0;
let score = 0;
let selectedTopic = 'all';
let selectedDifficulty = 'all';
const BASE_MUSIC_SPEED = 1.0;
const MAX_MUSIC_SPEED = 1.5;
let musicStarted = false;

const GAME_LENGTHS = {
    básico: 5,
    intermedio: 7,
    avanzado: 9,
    all: 12
};

// --- Utility Functions ---
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    const screenToShow = document.getElementById(screenId);
    if (screenToShow) {
        screenToShow.classList.add('active');
    } else {
        console.error(`Screen with id ${screenId} not found!`);
    }
}

// --- Audio Functions ---
function playSound(soundElement) {
    if (soundElement && typeof soundElement.play === 'function') {
        soundElement.currentTime = 0;
        soundElement.play().catch(error => {
            if (error.name !== 'AbortError') {
                console.error(`Error playing sound ${soundElement.id}:`, error);
            }
        });
    }
}

function attemptStartMusic() {
    if (!musicStarted && backgroundMusic && typeof backgroundMusic.play === 'function' && backgroundMusic.src && !backgroundMusic.ended) {
        backgroundMusic.currentTime = 0;
        backgroundMusic.playbackRate = BASE_MUSIC_SPEED;
        backgroundMusic.play().then(() => {
            musicStarted = true;
        }).catch(error => {
            console.error("Error starting background music:", error);
            musicStarted = false;
        });
    } else if (musicStarted && backgroundMusic && backgroundMusic.paused) {
        backgroundMusic.play().catch(e => console.error("Error resuming music:", e));
    }
}

function stopMusic() {
    if (backgroundMusic && typeof backgroundMusic.pause === 'function') {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        musicStarted = false;
    }
}

function adjustMusicSpeed() {
     if (musicStarted && backgroundMusic && currentQuestions.length > 0) {
        const progress = Math.max(0, currentQuestionIndex) / currentQuestions.length;
        let newSpeed = BASE_MUSIC_SPEED + (progress * (MAX_MUSIC_SPEED - BASE_MUSIC_SPEED));
        newSpeed = Math.min(newSpeed, MAX_MUSIC_SPEED);
        try {
             backgroundMusic.playbackRate = newSpeed;
        } catch (e) {
            console.error("Error setting playbackRate:", e)
        }
    }
}

// --- Game Logic Functions ---
function startGame() {
    attemptStartMusic();

    selectedTopic = topicSelect.value;
    selectedDifficulty = difficultySelect.value;
    startError.textContent = '';

    // 1. Filtrar preguntas
    try {
        allFilteredQuestions = questions.filter(q => {
            const topicMatch = selectedTopic === 'all' || String(q.topic) === String(selectedTopic);
            const difficultyMatch = selectedDifficulty === 'all' || String(q.difficulty).trim() === String(selectedDifficulty).trim();
            return topicMatch && difficultyMatch;
        });
    } catch(filterError) {
        console.error("Error during filtering questions:", filterError);
        startError.textContent = 'Error al procesar las preguntas.';
        return;
    }

    // 2. Determinar longitud objetivo
    const targetLength = GAME_LENGTHS[selectedDifficulty] || GAME_LENGTHS.all;

    // 3. Verificar si hay preguntas disponibles
    if (allFilteredQuestions.length === 0) {
        startError.textContent = '¡Ups! No hay preguntas para esa combinación. Intenta otra selección.';
        stopMusic();
        return;
    }

    // 4. Barajar y seleccionar subconjunto
    shuffleArray(allFilteredQuestions);
    currentQuestions = allFilteredQuestions.slice(0, targetLength);
    const actualLength = currentQuestions.length;

    // 5. Mostrar nota si se usan menos preguntas
    if (actualLength < targetLength && actualLength > 0) {
        startError.textContent = `Nota: Solo se encontraron ${actualLength} preguntas para esta selección. ¡Comenzando!`;
        // Opcional: Limpiar mensaje después de unos segundos
         setTimeout(() => { if (startError.textContent.startsWith("Nota:")) startError.textContent = ''; }, 4000); // Limpia el mensaje después de 4 seg
    }

    // 6. Resetear e iniciar juego
    currentQuestionIndex = 0;
    score = 0;
    feedback.textContent = '';
    nextButton.style.display = 'none';

    if (actualLength > 0) {
        loadQuestion();
        showScreen('game-screen');
    } else {
         startError.textContent = 'Error inesperado: No se cargaron preguntas.';
         stopMusic();
    }
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length || currentQuestionIndex < 0) {
        console.error(`Invalid question index: ${currentQuestionIndex}. Ending game.`);
        endGame();
        return;
    }
    const questionData = currentQuestions[currentQuestionIndex];
    if (!questionData) {
        console.error(`Question data is missing for index ${currentQuestionIndex}. Ending game.`);
        endGame();
        return;
    }

    optionsContainer.innerHTML = '';
    feedback.textContent = '';
    nextButton.style.display = 'none';

    questionText.textContent = questionData.question;
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    scoreDisplay.textContent = `Puntaje: ${score}`;

    adjustMusicSpeed();

    const shuffledOptions = shuffleArray([...questionData.options]);
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', handleAnswer);
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(event) {
    const selectedButton = event.target;
    const selectedAnswer = selectedButton.textContent;

    if (currentQuestionIndex >= currentQuestions.length) return;
    const correctAnswer = currentQuestions[currentQuestionIndex].correctAnswer;

    const optionButtons = optionsContainer.querySelectorAll('.option-button');
    optionButtons.forEach(btn => {
        btn.removeEventListener('click', handleAnswer);
        btn.classList.add('disabled');
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct-answer-reveal');
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        selectedButton.classList.add('correct');
        feedback.textContent = "¡Correcto! ¡Bien hecho!";
        feedback.style.color = 'var(--mc-green)';
        playSound(correctSound);
    } else {
        selectedButton.classList.add('incorrect');
        feedback.textContent = `Incorrecto. La respuesta era: ${correctAnswer}`;
        feedback.style.color = 'var(--mc-red)';
        playSound(incorrectSound);
    }

    scoreDisplay.textContent = `Puntaje: ${score}`;
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    stopMusic();
    const totalQuestionsInRound = currentQuestions.length;
    const percentage = totalQuestionsInRound > 0 ? (score / totalQuestionsInRound) * 100 : 0;
    finalScore.textContent = `Tu puntaje final es: ${score} de ${totalQuestionsInRound} (${percentage.toFixed(0)}%)`;

    let message = "¡Sigue explorando la historia!";
    let playEndSound = false;
    if (percentage === 100) {
        message = "¡Excelente! ¡Dominas esta parte de la historia!";
        playEndSound = true;
    } else if (percentage >= 80) {
        message = "¡Muy bien hecho! ¡Gran conocimiento!";
         playEndSound = true;
    } else if (percentage >= 50) {
        message = "¡Buen trabajo! Sigue repasando.";
    } else {
         message = "¡No te rindas! Cada partida es una oportunidad para aprender.";
    }
    finalMessage.textContent = message;

    if (playEndSound) {
        playSound(goodScoreSound);
    }
    showScreen('end-screen');
}

function playAgain() {
    stopMusic();
    startError.textContent = ''; // Limpiar mensajes de error/nota
    showScreen('selection-screen');
}

// --- Event Listeners (Se añaden cuando el DOM está listo) ---
document.addEventListener('DOMContentLoaded', () => {
    // Asignar elementos de audio
    try {
        correctSound = document.getElementById('correct-sound');
        incorrectSound = document.getElementById('incorrect-sound');
        goodScoreSound = document.getElementById('good-score-sound');
        backgroundMusic = document.getElementById('background-music');
    } catch (e) {
        console.error("Error getting audio elements on DOMContentLoaded:", e);
    }

    // Asignar listeners a botones
    const startBtn = document.getElementById('start-button');
    const nextBtn = document.getElementById('next-button');
    const playAgainBtn = document.getElementById('play-again-button');

    if (startBtn) startBtn.addEventListener('click', startGame);
    else console.error("Start button not found!");

    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    else console.error("Next button not found!");

    if (playAgainBtn) playAgainBtn.addEventListener('click', playAgain);
    else console.error("Play Again button not found!");

    // Mostrar pantalla inicial
    showScreen('selection-screen');
});