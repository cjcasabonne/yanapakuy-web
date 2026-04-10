window.YANAPAKUY_INF_SESSIONS = {
  1: {
    number: 1,
    title: "Inicio, identidad y ciudadanía",
    theme: "Inicio, identidad y ciudadanía",
    internal_theme_note: "No conviertas la sesión en explicación sobre identidad o ciudadanía. El objetivo está entrar, ubicarse, esperar la señal y dejar una marca propia en el mural común.",
    conduct_objective: "Entrar al espacio, ocupar un lugar, responder a la señal de pausa y esperar turno antes de moverse.",
    rule: {
      all: "Entro, me ubico, escucho la señal y espero mi turno.",
      ages_3_5: "Para. Mira. Espera.",
      ages_6_10: "Entro, me ubico, escucho la señal y espero mi turno."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Recorrido guiado y aporte concreto al mural",
        entry_mode: "Ronda guiada por voluntario con contacto físico disponible"
      },
      ages_6_8: {
        rule_words: 6,
        signal_response_seconds: 7,
        activity_mode: "Recorrido con turno y aporte identitario simple",
        entry_mode: "Ronda autónoma con referencia visual en la pared"
      },
      ages_9_10: {
        rule_words: "regla completa",
        signal_response_seconds: 5,
        activity_mode: "Recorrido con turno y frase o símbolo propio",
        entry_mode: "Entrada en silencio siguiendo señal visual únicamente"
      }
    },
    structure: {
      entry: [
        "Formar una ronda al entrar.",
        "Decir el nombre con una palmada.",
        "Señalar su lugar asignado y quedarse allí hasta nueva señal.",
        "[3-5] El voluntario o par mayor acompaña físicamente si está necesario."
      ],
      routine: [
        "Practicar la señal de silencio tres veces.",
        "Caminar al centro y volver al lugar cuando el voluntario lo indique.",
        "Repetir en coro la regla de la sesión con versión adaptada por edad."
      ],
      core_activity: [
        "Armar entre todos un recorrido corto con inicio, espera y salida.",
        "Pasar uno por uno por el recorrido sin empujar.",
        "Al terminar su turno, colocar en el mural común su aportación personal.",
        "[3-5] Dejar huella de mano o dibujo de su cara.",
        "[6-8] Dejar nombre escrito o símbolo personal.",
        "[9-10] Dejar frase corta o símbolo que los represente."
      ],
      repetition: [
        "Repetir el recorrido cambiando el orden de salida.",
        "Volver a practicar esperar la señal antes de moverse.",
        "Rehacer la entrada completa con menos ayuda del voluntario."
      ],
      output: [
        "Cada niño entra al espacio y ocupa su lugar sin correr.",
        "Cada niño espera turno antes de pasar.",
        "El grupo completa un mural común con aportación identitaria de cada miembro."
      ],
      closing: [
        "Gesto colectivo: mano al pecho y golpe suave en el suelo con el pie.",
        "Decir juntos: Cuido mi lugar y cuido al grupo."
      ]
    },
    volunteer_role: {
      do: [
        "Mostrar la acción antes de pedirla.",
        "Dar una instrucción corta por vez.",
        "Corregir con gesto y modelado inmediato.",
        "Usar la regla corta con los menores de 6 años.",
        "Reforzar enseguida a quien espera turno y sigue la secuencia."
      ],
      avoid: [
        "Dar explicaciones largas sobre identidad o ciudadanía.",
        "Pedir opiniones abstractas.",
        "Resolver la fila empujando o gritando.",
        "Usar la regla completa con niños de 3 a 5 años.",
        "Hablar mientras el grupo esta en movimiento sin señal clara."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Mostrar como entrar, parar y esperar turno.",
        "Ubicarse al costado de un niño pequeño para marcar la secuencia con el cuerpo.",
        "Recordar la regla corta: para, mira, espera."
      ],
      constraints: [
        "No jalar de la mano si el niño puede hacerlo solo.",
        "No pasar el recorrido por el niño.",
        "No responder por el niño ni adelantarse a su turno."
      ]
    },
    transfer_to_home: null,
    metrics: {
      observable: [
        "Espera al menos una vez su turno sin invadir el espacio de otro.",
        "[3-5] Responde a la señal de silencio en menos de 10 segundos.",
        "[6-8] Responde a la señal de silencio en menos de 7 segundos.",
        "[9-10] Responde a la señal de silencio en menos de 5 segundos.",
        "Completa el recorrido siguiendo inicio, espera y salida.",
        "Coloca su aportación identitaria en el mural sin necesidad de instrucción repetida."
      ]
    }
  },
  2: {
    number: 2,
    title: "Metas personales, colegio y habitos de estudio",
    theme: "Secuencia de trabajo: empezar, terminar y guardar",
    internal_theme_note: "El titulo publico habla de metas. La guia operativa se centra en la secuencia concreta de trabajo. El voluntario no debe improvisar discursos sobre proyecto de vida ni metas futuras durante esta sesión.",
    conduct_objective: "Completar una secuencia de tres pasos de trabajo y guardar materiales al terminar.",
    rule: {
      all: "Empiezo, termino y guardo.",
      ages_3_5: "Empiezo, termino y guardo.",
      ages_6_10: "Empiezo, termino y guardo."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Tarea breve con tres pasos visibles",
        entry_mode: "Ingreso a mesa con tres materiales visibles"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Secuencia de tres pasos con apoyo visual",
        entry_mode: "Ingreso por mesa numerada"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Secuencia con tiempo visible y retiro de ayuda en segunda ronda",
        entry_mode: "Ingreso autónomo con lista de materiales visible"
      }
    },
    structure: {
      entry: [
        "Recibir una mesa con exactamente tres materiales visibles.",
        "Nombrar el material que usara primero.",
        "Sentarse y poner maños sobre la mesa para esperar la consigna."
      ],
      routine: [
        "Practicar abrir el material, usarlo y guardarlo en orden.",
        "Repetir la secuencia con conteo del 1 al 3.",
        "Decir: guardamos ahora para que mañana este listo.",
        "Decir juntos la regla antes de iniciar la tarea."
      ],
      core_activity: [
        "Completar una tarea corta de tres pasos: mirar, hacer, guardar.",
        "Poner un reloj de arena de 3 minutos visible sobre la mesa.",
        "Marcar con una ficha cada paso terminado.",
        "Entregar la tarea solo cuando los tres pasos esten completos."
      ],
      repetition: [
        "Hacer una segunda ronda con otra tarea breve.",
        "Retirar la tarjeta de pasos en la segunda ronda para que el niño los recuerde solo.",
        "Guardar y ordenar materiales sin ayuda verbal.",
        "Reforzar el proceso y no solo el producto final."
      ],
      output: [
        "Cada niño completa una tarea corta sin abandonar el puesto.",
        "Cada niño deja materiales guardados al final.",
        "El grupo termina la secuencia común de trabajo.",
        "En la segunda repetición, al menos parte del grupo completa sin tarjeta de pasos."
      ],
      closing: [
        "Gesto colectivo: pulgar arriba sobre la mesa y maños guardadas.",
        "Decir juntos: Empiezo, termino y guardo."
      ]
    },
    volunteer_role: {
      do: [
        "Preparar tareas muy cortas y visibles.",
        "Dividir la actividad en pasos concretos.",
        "Señalar el paso actual con dedo o tarjeta.",
        "Poner el reloj de arena al iniciar y nombrarlo.",
        "Retirar la tarjeta de pasos en la segunda ronda para forzar memoria autónoma.",
        "Reforzar la terminacion y el guardado, no solo el resultado estáético."
      ],
      avoid: [
        "Pedir metas futuras largas o personales.",
        "Hablar sobre proyecto de vida durante esta sesión.",
        "Entregar muchos materiales al mismo tiempo.",
        "Premiar solo a los más r?pidos.",
        "Dejar la tarjeta de pasos en la segunda ronda."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Mostrar la secuencia de tres pasos con su propio material.",
        "Recordar con una palabra por paso: mira, haz, guarda.",
        "En la segunda ronda preguntar cual sigue antes de decirlo."
      ],
      constraints: [
        "No hacer la tarea del niño pequeño.",
        "No guardar materiales ajenos si el niño puede hacerlo.",
        "No corregir con burlas ni apuro."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Enviar una secuencia simple para repetir en casa.",
      prompt: "Esta semana empiezo, termino y guardo una tarea o material en casa.",
      purpose: "El habito gana sentido cuando la misma secuencia se repite fuera de Yanapakuy."
    },
    metrics: {
      observable: [
        "Completa una secuencia de tres pasos en el orden indicado.",
        "Guarda sus materiales al terminar.",
        "Permanece en la actividad hasta la señal de cierre.",
        "En la segunda repetición completa la secuencia sin tarjeta de pasos.",
        "Necesita menos intervenciones verbales en la segunda ronda que en la primera."
      ]
    }
  },
  3: {
    number: 3,
    title: "Familia, agradecimiento y Dia de la Madre",
    theme: "Familia, gratitud y reconocimiento",
    internal_theme_note: "No forzar relatos personales ni asumir que la figura de cuidado está la madre. El objetivo está hacer un gesto concreto de cuidado y preparar una acción breve para la casa.",
    conduct_objective: "Realizar un gesto concreto de cuidado y entregar un mensaje breve a una figura de cuidado.",
    rule: {
      all: "Miro, ayudo y entrego.",
      ages_3_5: "Miro, ayudo y entrego.",
      ages_6_10: "Miro, ayudo y entrego."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Gesto de ayuda y tarjeta simple con dibujo o huella",
        entry_mode: "Mimica individual guiada"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Tarjeta breve y ensayo de entrega",
        entry_mode: "Entrada con mímica individual o en pareja segun seguridad del grupo"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Tarjeta con acción al dorso y ensayo en parejas",
        entry_mode: "Mimica en parejas para reducir inhibicion"
      }
    },
    structure: {
      entry: [
        "[3-7] Mostrar con mímica frente al grupo una acción de ayuda en casa.",
        "[8-10] Mostrar la mímica en parejas.",
        "Elegir una tarjeta con una figura de cuidado.",
        "Sentarse con la tarjeta al frente."
      ],
      routine: [
        "Practicar tres gestos de cuidado: alcanzar, ordenar, abrazar.",
        "Repetir los gestos siguiendo la señal del voluntario.",
        "Decir juntos la regla antes de iniciar la actividad central."
      ],
      core_activity: [
        "Hacer una tarjeta simple con dibujo, huella o palabras para la figura elegida.",
        "Agregar una frase de entrega: para ti, gracias, te ayudo o te cuido.",
        "Ensayar la entrega mirando al frente y usando tono suave.",
        "Escribir al dorso una acción concreta de ayuda para hacer en casa esta semana."
      ],
      repetition: [
        "Repetir el ensayo de entrega dos veces.",
        "Practicar otra acción concreta de ayuda con objetos del aula: ordenar, alcanzar, limpiar.",
        "Volver a decir la frase corta mientras realiza el gesto."
      ],
      output: [
        "Cada niño produce una tarjeta o mensaje para una figura de cuidado.",
        "Cada niño ejecuta al menos un gesto concreto de ayuda.",
        "Cada niño se lleva la tarjeta con una consigna de transferencia al hogar.",
        "El grupo realiza una secuencia común de cuidado sin desorden."
      ],
      closing: [
        "Gesto colectivo: extender las maños al frente y luego llevarlas al pecho.",
        "Decir juntos: Ayudo con mis maños."
      ]
    },
    volunteer_role: {
      do: [
        "Presentar el set ampliado de figuras de cuidado antes de elegir.",
        "Decir que puede ser mama, papa, abuela, tío, hermano mayor o alguien que cuida.",
        "Permitir dibujo, huellas o palabras cortas como mensaje valido.",
        "Modelar el gesto de entrega antes de pedirlo.",
        "Recordar al cierre la consigna de transferencia al hogar."
      ],
      avoid: [
        "Forzar relatos personales o emotivos.",
        "Corregir por ortografia o presentacion.",
        "Pedir discursos largos sobre la familia.",
        "Asumir que todos nombraran a la madre.",
        "Insistir en temas familiares sensibles."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Mostrar el gesto de entregar y saludar con respeto.",
        "Ayudar a sostener materiales mientras el niño pequeño termina su tarjeta.",
        "Sugerir una acción concreta de ayuda para escribir al dorso si el niño no sabe."
      ],
      constraints: [
        "No escoger por el niño a quien entregar.",
        "No dibujar ni escribir todo el mensaje por el niño.",
        "No insistir en temas familiares sensibles."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Escribir al dorso de la tarjeta una acción concreta para hacer en casa.",
      prompt: "Esta semana, hago en casa: [acción elegida por el niño].",
      purpose: "La sesión se prolonga al hogar cuando el gesto de cuidado sale de Yanapakuy y llega a la casa."
    },
    metrics: {
      observable: [
        "Completa una tarjeta o mensaje breve con apoyo mínimo.",
        "Elige autónomamente una figura de cuidado valida.",
        "Realiza al menos un gesto concreto de ayuda durante la sesión.",
        "Ensaya la entrega mirando al frente y sosteniendo su material.",
        "Acepta que una figura distinta a la madre también está valida."
      ]
    }
  },
  4: {
    number: 4,
    title: "Trabajo en equipo y cooperacion",
    theme: "Trabajo en equipo y cooperacion",
    internal_theme_note: "No conviertas la sesión en charla sobre amistad. El objetivo está que el grupo coordine acciones simples para lograr una meta común.",
    conduct_objective: "Coordinarse con otros para completar una tarea común respetando turno, rol y meta compartida.",
    rule: {
      all: "Juntos sale mejor.",
      ages_3_5: "Juntos, turnos, ya.",
      ages_6_10: "Escucho, espero y ayudo."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Parejas o trio con una sola meta visible",
        entry_mode: "Ingreso en ronda y ubicacion por color o imagen"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Equipos de 4 con rol simple por turno",
        entry_mode: "Ingreso por fila corta con rol asignado al entrar"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Equipos de 4 a 5 con secuencia de roles",
        entry_mode: "Ingreso autónomo leyendo cartel de equipo y rol"
      }
    },
    structure: {
      entry: [
        "Entrar y ubicarse con su equipo.",
        "[3-5] Tomar una cinta o ficha del mismo color para saber con quien trabajar.",
        "[6-10] Recibir un rol corto: lleva, espera, pasa o ordena.",
        "Repetir la regla juntos antes de iniciar."
      ],
      routine: [
        "Practicar pasar un objeto de mano en mano sin hablar encima del otro.",
        "Parar cuando suena la señal y volver a mirar al voluntario.",
        "Hacer una ronda corta de turno: uno hace, uno espera, uno ayuda."
      ],
      core_activity: [
        "Completar un reto de equipo: trasladar objetos, armar una torre o ordenar piezas en secuencia.",
        "Cada niño cumple solo su parte del reto.",
        "El equipo solo termina cuando todos completaron su turno.",
        "[6-10] Cambiar de rol en una segunda vuelta."
      ],
      repetition: [
        "Repetir el reto con menos ayuda verbal.",
        "Cambiar el orden de los turnos.",
        "Volver a empezar si el equipo corre o se adelanta al compañero."
      ],
      output: [
        "Cada equipo completa un reto común.",
        "Cada niño espera al menos un turno sin quitar el objeto a otro.",
        "El grupo nombra con gesto quien ayuda y quien espera."
      ],
      closing: [
        "Gesto colectivo: maños al centro y arriba.",
        "Decir juntos: Juntos sale mejor."
      ]
    },
    volunteer_role: {
      do: [
        "Mostrar el reto antes de empezarlo.",
        "Hablar corto: ahora pasa, ahora espera, ahora ayuda.",
        "Reforzar cuando un niño espera bien su turno.",
        "Parar el juego si un niño hace todo solo."
      ],
      avoid: [
        "Explicar demasiado antes de mover al grupo.",
        "Premiar al que manda más fuerte.",
        "Dejar equipos grandes sin rol claro.",
        "Resolver el reto por ellos."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Modelar como esperar y pasar el material.",
        "Recordar el rol con una palabra corta.",
        "Animar al menor a terminar su parte antes de ayudar."
      ],
      constraints: [
        "No hacer el turno del menor.",
        "No quitarle el material de la mano.",
        "No hablar por encima del voluntario."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir una acción breve de ayuda en casa hecha con otro.",
      prompt: "Esta semana hago una tarea con alguien: pasar, ordenar o guardar juntos.",
      purpose: "La cooperacion se fortalece cuando la acción se repite en casa y no solo en la sesión."
    },
    metrics: {
      observable: [
        "[3-5] Responde a la señal de parar en menos de 10 segundos.",
        "[6-8] Responde a la señal de parar en menos de 7 segundos.",
        "[9-10] Responde a la señal de parar en menos de 5 segundos.",
        "Espera al menos un turno sin invadir el del compañero.",
        "Completa su parte del reto antes de pasar al siguiente.",
        "Acepta cambio de rol sin salir del equipo."
      ]
    }
  },
  5: {
    number: 5,
    title: "Disciplina, orden y responsabilidad",
    theme: "Disciplina, orden y responsabilidad",
    internal_theme_note: "No hablar de obedecer por obedecer. La sesión entrena seguir una secuencia simple, cuidar materiales y terminar lo empezado.",
    conduct_objective: "Seguir una secuencia de orden, uso y guardado de materiales sin abandonar la tarea.",
    rule: {
      all: "Uso y guardo bien.",
      ages_3_5: "Uso. Guardo. Listo.",
      ages_6_10: "Uso, ordeno y guardo."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Mesa corta con tres objetos visibles",
        entry_mode: "Ingreso por estaciones marcadas con imagen"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Secuencia de cuatro pasos con apoyo visual",
        entry_mode: "Ingreso por mesa numerada"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Secuencia de cuatro pasos con control de tiempo",
        entry_mode: "Ingreso autónomo con lista de materiales visible"
      }
    },
    structure: {
      entry: [
        "Entrar y encontrar su mesa o estacion.",
        "Mirar que materiales hay y no tocarlos hasta la señal.",
        "Decir juntos la regla antes de empezar."
      ],
      routine: [
        "Practicar abrir, usar, cerrar y guardar un material.",
        "Hacer una ronda rápida de ordenar por color, tamano o uso.",
        "Parar a la señal y revisar si la mesa quedo limpia."
      ],
      core_activity: [
        "Completar una tarea breve con materiales concretos.",
        "Usar un material por vez y devolverlo a su lugar.",
        "Al terminar, revisar la mesa con una lista simple: use, ordene, guarde.",
        "[9-10] Hacer una segunda tarea corta con menos recordatorios."
      ],
      repetition: [
        "Repetir la secuencia con otro material.",
        "Quitar una ayuda visual en la segunda vuelta.",
        "Volver a empezar si los materiales quedan fuera de lugar."
      ],
      output: [
        "Cada niño termina una tarea corta.",
        "Cada niño deja la mesa ordenada.",
        "El grupo cierra la actividad con materiales completos y guardados."
      ],
      closing: [
        "Gesto colectivo: maños abiertas, luego maños guardadas sobre la mesa.",
        "Decir juntos: Uso y guardo bien."
      ]
    },
    volunteer_role: {
      do: [
        "Preparar pocos materiales y bien visibles.",
        "Nombrar un paso por vez.",
        "Mostrar como queda una mesa ordenada.",
        "Felicitar el proceso de ordenar, no solo el producto final."
      ],
      avoid: [
        "Llenar la mesa de cosas.",
        "Corregir cuando el grupo sigue en movimiento.",
        "Hablar de responsabilidad en abstracto.",
        "Guardar tu mismo los materiales de todos."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Mostrar como revisar una mesa antes de salir.",
        "Señalar el lugar de cada material.",
        "Preguntar que falta guardar antes de tocar algo."
      ],
      constraints: [
        "No ordenar por el menor.",
        "No apurar con tono burlon.",
        "No esconder materiales para probarlo."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Enviar una acción simple de orden para repetir en casa.",
      prompt: "Esta semana ordeno y guardo mis cosas después de usarlas.",
      purpose: "El habito se consolida cuando la misma secuencia se práctica en casa y en Yanapakuy."
    },
    metrics: {
      observable: [
        "[3-5] Responde a la señal en menos de 10 segundos.",
        "[6-8] Responde a la señal en menos de 7 segundos.",
        "[9-10] Responde a la señal en menos de 5 segundos.",
        "Usa un material por vez sin mezclar todos a la vez.",
        "Guarda materiales en su lugar al terminar.",
        "Necesita menos recordatorios en la segunda vuelta que en la primera."
      ]
    }
  },
  6: {
    number: 6,
    title: "Perú rural, trabajo y esfuerzo",
    theme: "Perú rural, trabajo y esfuerzo",
    internal_theme_note: "No romantices la pobreza ni hagas discurso largo sobre el campo. La sesión debe mostrar que el trabajo requiere secuencia, cuidado y constancia.",
    conduct_objective: "Completar una tarea manual por pasos sosteniendo esfuerzo hasta el final.",
    rule: {
      all: "Sigo hasta terminar.",
      ages_3_5: "Hago y termino.",
      ages_6_10: "Trabajo hasta terminar."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Actividad manual corta por imitacion",
        entry_mode: "Ingreso con objeto o imagen de trabajo visible"
      },
      ages_6_8: {
        rule_words: 3,
        signal_response_seconds: 7,
        activity_mode: "Tarea por estaciones con tres pasos",
        entry_mode: "Ingreso en fila con muestra de producto final"
      },
      ages_9_10: {
        rule_words: 3,
        signal_response_seconds: 5,
        activity_mode: "Tarea manual con tiempos y revisión intermedia",
        entry_mode: "Ingreso autónomo leyendo secuencia de pasos"
      }
    },
    structure: {
      entry: [
        "Entrar y mirar una imagen o material relacionado con trabajo del campo.",
        "Tocar el material solo cuando el voluntario lo muestre.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar una secuencia corta: tomar, hacer, dejar.",
        "Parar a la señal y revisar si el paso quedo completo.",
        "Volver a empezar sin correr."
      ],
      core_activity: [
        "Realizar una tarea manual por pasos: clasificar semillas, armar paquetes, ordenar productos o completar una secuencia de siembra simbólica.",
        "Cada niño termina un producto simple.",
        "El grupo trabaja con tiempo visible y pausa intermedia para revisar.",
        "Nombrar al final que parte costo más y cómo sí siguio."
      ],
      repetition: [
        "Repetir la tarea con un cambio pequeño en el orden.",
        "Reducir una ayuda visual en la segunda vuelta.",
        "Volver al paso anterior si el producto queda incompleto."
      ],
      output: [
        "Cada niño completa un producto simple.",
        "Cada niño sostiene la tarea hasta terminarla.",
        "El grupo deja el espacio listo para la siguiente mesa."
      ],
      closing: [
        "Gesto colectivo: brazos flexionados y maños al frente.",
        "Decir juntos: Sigo hasta terminar."
      ]
    },
    volunteer_role: {
      do: [
        "Mostrar primero y hablar después.",
        "Usar materiales concretos y conocidos.",
        "Marcar pausas cortas para revisar avance.",
        "Reforzar cuando un niño sigue después de equivocarse."
      ],
      avoid: [
        "Dar charla larga sobre economia o pais.",
        "Comparar el esfuerzo de los niños con el de adultos.",
        "Corregir todo al final.",
        "Retirar la tarea apenas se equivoca."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Modelar el paso lento y completo.",
        "Mostrar como corregir sin empezar de cero.",
        "Recordar con una frase corta: sigue, revisa, termina."
      ],
      constraints: [
        "No terminar el producto del menor.",
        "No reirse del error.",
        "No competir por acabar primero."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir una tarea corta en casa que implique terminar lo empezado.",
      prompt: "Esta semana termino una ayuda simple en casa antes de irme a jugar.",
      purpose: "El esfuerzo visible gana sentido cuando se conecta con tareas reales del hogar."
    },
    metrics: {
      observable: [
        "[3-5] Mantiene la tarea por al menos 3 minutos con apoyo.",
        "[6-8] Mantiene la tarea por al menos 5 minutos con pausas breves.",
        "[9-10] Mantiene la tarea por al menos 7 minutos sin abandonar su puesto.",
        "Retoma la actividad después de un error.",
        "Entrega un producto completo o funcional.",
        "Deja materiales en orden al terminar."
      ]
    }
  },
  7: {
    number: 7,
    title: "Historia, regiones y cultura del Perú",
    theme: "Historia, regiones y cultura del Perú",
    internal_theme_note: "No usar clase expositiva larga. La sesión debe mover, clasificar y relacionar elementos de la costa, sierra y selva con acciones concretas.",
    conduct_objective: "Clasificar elementos del Perú por region y explicar con acción o elección donde van.",
    rule: {
      all: "Miro, elijo y ubico.",
      ages_3_5: "Miro y ubico.",
      ages_6_10: "Miro, elijo y ubico."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Clasificacion con imagen grande y tres canastas",
        entry_mode: "Ingreso por imagen de costa, sierra o selva"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Clasificacion con tarjetas e intercambio por parejas",
        entry_mode: "Ingreso con tarjeta de region asignada"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Clasificacion y justificacion corta por equipo",
        entry_mode: "Ingreso autónomo a mesa de region"
      }
    },
    structure: {
      entry: [
        "Entrar y elegir o recibir una region.",
        "Mirar las imagenes del espacio sin moverlas aun.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar poner una imagen en la canasta o mural correcto.",
        "Parar a la señal y revisar si falta algo.",
        "Cambiar una tarjeta de lugar si el grupo detecta error."
      ],
      core_activity: [
        "Clasificar tarjetas de comida, ropa, paisaje, másica o animales en costa, sierra o selva.",
        "[3-5] Llevar la imagen a la region correcta.",
        "[6-8] Explicar con una palabra o gesto por qué va ahi.",
        "[9-10] Hacer una frase corta o ejemplo de uso o costumbre."
      ],
      repetition: [
        "Repetir con nuevas tarjetas.",
        "Cambiar de region y volver a clasificar.",
        "Hacer una ronda rápida de correccion entre equipos."
      ],
      output: [
        "Cada niño ubica al menos dos elementos en una region.",
        "El grupo completa un mural o mesa de regiones.",
        "El grupo corrige al menos un error sin pelear."
      ],
      closing: [
        "Gesto colectivo: brazos abiertos a los lados como mapa.",
        "Decir juntos: Perú tiene muchos lugares."
      ]
    },
    volunteer_role: {
      do: [
        "Usar imagenes grandes y conocidas.",
        "Mover al grupo entre regiones.",
        "Pedir una acción corta: elige, lleva, muestra.",
        "Aceptar respuestas por gesto, palabra o ejemplo."
      ],
      avoid: [
        "Dar datos largos antes de empezar.",
        "Corregir con tono de examen.",
        "Pedir memoria exacta de nombres dificiles.",
        "Burlarte si confunden una region."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Mostrar como clasificar una tarjeta.",
        "Ayudar a leer etiquetas cortas.",
        "Pedir al menor que muestre con el dedo antes de mover."
      ],
      constraints: [
        "No decidir todas las tarjetas.",
        "No mover rápido para ganar.",
        "No ridiculizar si hay confusion."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir que en casa nombren o busquen un objeto, comida o másica de alguna region.",
      prompt: "Esta semana pregunto a un adulto de casa, abuela, tío o vecino por una comida, másica o costumbre de costa, sierra o selva.",
      purpose: "La identidad se vuelve significativa cuando se conecta con recuerdos y objetos del hogar."
    },
    metrics: {
      observable: [
        "[3-5] Ubica al menos una imagen en la region correcta con apoyo.",
        "[6-8] Ubica al menos dos tarjetas correctas y explica una con palabra o gesto.",
        "[9-10] Ubica al menos tres tarjetas correctas y justifica una elección breve.",
        "Corrige al menos una tarjeta después de revisar.",
        "Respeta el turno al mover material común."
      ]
    }
  },
  8: {
    number: 8,
    title: "Perú, símbolos y orgullo",
    theme: "Perú, símbolos y orgullo",
    internal_theme_note: "No hacer discurso patriotero. La sesión debe reconocer símbolos, cuidarlos y usarlos en una acción de grupo.",
    conduct_objective: "Reconocer símbolos del Perú y tratarlos con cuidado durante una actividad común.",
    rule: {
      all: "Cuido lo que representa.",
      ages_3_5: "Miro y cuido.",
      ages_6_10: "Miro, cuido y respeto."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Reconocimiento con imagen y gesto",
        entry_mode: "Ingreso con bandera o símbolo grande visible"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Juego de asociar símbolo y uso",
        entry_mode: "Ingreso en equipos con tarjeta de símbolo"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Armado de mural y explicación breve",
        entry_mode: "Ingreso autónomo a estacion de símbolos"
      }
    },
    structure: {
      entry: [
        "Entrar y mirar los símbolos sin tocarlos.",
        "Escuchar la consigna de cuidado.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar tomar y devolver un material con cuidado.",
        "Señalar bandera, escudo o himno cuando el voluntario lo nombre.",
        "Parar a la señal y dejar maños quietas."
      ],
      core_activity: [
        "Relacionar símbolos del Perú con imagen, nombre o uso.",
        "Armar un mural o panel común con bandera, escudo, himno y otros referentes visibles.",
        "[3-5] Elegir y pegar una imagen del símbolo correcto.",
        "[6-10] Decir o escribir una frase corta de cuidado o respeto."
      ],
      repetition: [
        "Hacer una segunda ronda con tarjetas mezcladas.",
        "Cambiar de estacion y repetir con menos ayuda.",
        "Volver a ubicar un símbolo si quedo en lugar incorrecto."
      ],
      output: [
        "Cada niño reconoce al menos un símbolo del Perú.",
        "El grupo arma un panel común sin romper materiales.",
        "El grupo usa maños cuidadosas durante la actividad."
      ],
      closing: [
        "Gesto colectivo: mano al pecho y mano al frente.",
        "Decir juntos: Cuido lo que representa."
      ]
    },
    volunteer_role: {
      do: [
        "Usar pocos símbolos y bien visibles.",
        "Mostrar como tocar y devolver materiales.",
        "Pedir acciones cortas: mira, señala, pega, devuelve.",
        "Reforzar cuidado y respeto del material."
      ],
      avoid: [
        "Pedir definiciones largas.",
        "Convertir la sesión en acto escolar.",
        "Hablar demasiado antes de manipular.",
        "Corregir con verguenza si se equivoca."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Mostrar como ubicar y pegar sin arrugar.",
        "Leer palabras cortas del panel.",
        "Recordar que el símbolo se devuelve con cuidado."
      ],
      constraints: [
        "No pegar por el menor.",
        "No monopolizar el panel.",
        "No usar tono de examen."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir que pregunten a alguien de casa o del entorno por un símbolo o referente del Perú.",
      prompt: "Esta semana pregunto a una abuela, tío o vecino por un símbolo, color o lugar del Perú y lo cuento en la próxima sesión.",
      purpose: "Los símbolos se vuelven significativos cuando un adulto cercano media la conversacion fuera de Yanapakuy."
    },
    metrics: {
      observable: [
        "[3-5] Señala al menos un símbolo correcto cuando se le nombra.",
        "[6-8] Asocia al menos dos símbolos con su imagen o nombre.",
        "[9-10] Ubica al menos dos símbolos y escribe o dice una frase corta de cuidado.",
        "Manipula materiales sin romperlos.",
        "Devuelve el material a su lugar al terminar."
      ]
    }
  },
  9: {
    number: 9,
    title: "Esfuerzo, constancia y no rendirse",
    theme: "Esfuerzo, constancia y no rendirse",
    internal_theme_note: "No decir solo que no se rindan. La sesión debe hacer repetir, corregir y volver a intentar una tarea que cuesta un poco.",
    conduct_objective: "Volver a intentar una tarea después de un error hasta completarla o mejorarla.",
    rule: {
      all: "Intento otra vez.",
      ages_3_5: "Lo intento.",
      ages_6_10: "Paro, corrijo y sigo."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Reto motor o manual corto con repetición guiada",
        entry_mode: "Ingreso con ejemplo visible del reto"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Reto por estaciones con segunda oportunidad",
        entry_mode: "Ingreso por fila a estacion de reto"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Reto con registro de primer intento y mejora",
        entry_mode: "Ingreso autónomo con objetivo visible"
      }
    },
    structure: {
      entry: [
        "Entrar y mirar el reto del dia.",
        "Escuchar que se vale volver a intentar.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar un intento corto de prueba.",
        "Parar, mirar y corregir una sola cosa.",
        "Volver a intentar sin cambiar de estacion."
      ],
      core_activity: [
        "Hacer un reto que no sale perfecto a la primera: encajar, lanzar, armar, copiar un patron o completar una secuencia.",
        "Registrar primer intento y segundo intento con ficha, marca o conteo.",
        "Nombrar al final que se mejoro, aunque no haya salido perfecto."
      ],
      repetition: [
        "Repetir el mismo reto dos o tres veces.",
        "Cambiar solo una ayuda en cada vuelta.",
        "Comparar primer intento y ultimo intento."
      ],
      output: [
        "Cada niño hace más de un intento.",
        "Cada niño corrige al menos una acción entre intentos.",
        "El grupo reconoce la mejora sin burlarse del error."
      ],
      closing: [
        "Gesto colectivo: punos cerrados al pecho y brazos al frente.",
        "Decir juntos: Intento otra vez."
      ]
    },
    volunteer_role: {
      do: [
        "Mostrar que tu también puedes equivocarte y corregir.",
        "Nombrar lo que mejoro, no solo si gan? o perdio.",
        "Dar una sola correccion por vez.",
        "Reforzar al que vuelve a intentar."
      ],
      avoid: [
        "Decir no pasa nada y seguir sin corregir.",
        "Comparar a unos niños con otros.",
        "Quitar la tarea porque se frustro.",
        "Premiar solo al que lo hizo perfecto."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Modelar un segundo intento más lento.",
        "Preguntar que cambiara antes de repetir.",
        "Aplaudir el reintento, no solo el logro final."
      ],
      constraints: [
        "No decir esta mal de forma burlona.",
        "No resolver el reto por el menor.",
        "No cambiar todas las reglas del juego."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir que en casa vuelvan a intentar una tarea que no salio a la primera.",
      prompt: "Esta semana intento de nuevo una tarea antes de pedir que la hagan por mi.",
      purpose: "La constancia se fortalece cuando el niño repite la secuencia de error, correccion y nuevo intento fuera de la sesión."
    },
    metrics: {
      observable: [
        "Hace al menos dos intentos de la misma tarea.",
        "Acepta una correccion sin abandonar la actividad.",
        "[3-5] Retoma el reto en menos de 20 segundos después del error.",
        "[6-8] Retoma el reto en menos de 15 segundos después del error.",
        "[9-10] Retoma el reto en menos de 10 segundos después del error.",
        "Muestra mejora entre el primer y el ultimo intento."
      ]
    }
  },
  10: {
    number: 10,
    title: "Liderazgo: ser ejemplo y ayudar a otros",
    theme: "Liderazgo: ser ejemplo y ayudar a otros",
    internal_theme_note: "No presentar liderazgo como mandar. La sesión debe mostrar que liderar aquí significa modelar, esperar y ayudar sin reemplazar. Si la sesión parece igual a la de servicio, falta el foco en modelado. El líder aquí no ayuda porque le sobra tiempo: muestra porque sabe.",
    conduct_objective: "Modelar una acción correcta y ayudar a otro sin hacer la tarea por el.",
    rule: {
      all: "Muestro y ayudo.",
      ages_3_5: "Muestro y espero.",
      ages_6_10: "Muestro, ayudo y espero."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Modelado por imitacion en parejas",
        entry_mode: "Ingreso junto a un compañero referente"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Roles de muestra y ayuda en parejas",
        entry_mode: "Ingreso con rol de muestra o ayuda"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Mini retos con turno de liderazgo rotativo",
        entry_mode: "Ingreso autónomo con cartel de rol"
      }
    },
    structure: {
      entry: [
        "Entrar y ubicarse con pareja o equipo.",
        "Recibir el rol inicial: muestra o intenta.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar mostrar una acción corta antes de hablar.",
        "Practicar esperar a que el otro lo haga.",
        "Cambiar de rol después de una ronda."
      ],
      core_activity: [
        "Hacer un reto simple donde un niño modela y otro ejecuta.",
        "Cambiar de roles para que todos lideren una vez.",
        "[9-10] Agregar una tercera acción: ayudar verbalmente sin tocar.",
        "Cerrar nombrando quien ayudo bien y por qué."
      ],
      repetition: [
        "Repetir con otro reto breve.",
        "Quitar ayudas fisicas en la segunda vuelta.",
        "Pedir que la ayuda sea cada vez más corta y clara."
      ],
      output: [
        "Cada niño modela una acción al menos una vez.",
        "Cada niño recibe ayuda sin ser reemplazado.",
        "El grupo diferencia ayudar de hacer por otro."
      ],
      closing: [
        "Gesto colectivo: mano al frente y pulgar arriba.",
        "Decir juntos: Muestro y ayudo."
      ]
    },
    volunteer_role: {
      do: [
        "Repetir que liderar aquí está ayudar bien.",
        "Mostrar una ayuda corta y luego retirarte.",
        "Cambiar roles para que nadie quede siempre arriba o abajo.",
        "Felicitar al que espera mientras otro intenta.",
        "Recordar que primero se muestra y después se ayuda."
      ],
      avoid: [
        "Decir que lider está el que manda.",
        "Dejar siempre al mismo niño como ejemplo.",
        "Permitir que uno haga todo por el otro.",
        "Corregir con humillacion cuando ayuda mal."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Modelar primero y tocar menos después.",
        "Usar frases cortas: mira, ahora tu, otra vez.",
        "Esperar el intento del menor antes de intervenir."
      ],
      constraints: [
        "No tomar el control del reto.",
        "No empujar la mano del menor si puede hacerlo solo.",
        "No usar tono de jefe."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir una ayuda breve a alguien menor o igual en casa sin reemplazarlo.",
      prompt: "Esta semana muestro una tarea simple y dejo que el otro la haga.",
      purpose: "El liderazgo prosocial se vuelve real cuando pasa de la sesión a una ayuda concreta en casa."
    },
    metrics: {
      observable: [
        "Modela una acción antes de pedirla.",
        "Espera al menos un intento del otro antes de intervenir.",
        "Cambia de rol cuando se le indica.",
        "[3-5] Imita una acción mostrada por un par o voluntario.",
        "[6-10] Da una ayuda verbal corta sin hacer la tarea por el otro."
      ]
    }
  },
  11: {
    number: 11,
    title: "Servicio, vocación y ayuda a los demás",
    theme: "Servicio, vocación y ayuda a los demás",
    internal_theme_note: "No hablar de profesiones de forma larga. La sesión debe traducir servicio en acciones visibles de ayuda, cuidado y utilidad para otros. Si la sesión parece igual a la de liderazgo, falta el destinatario. El servicio aquí no está modelar: está dejar algo mejor para alguien concreto.",
    conduct_objective: "Realizar una acción de ayuda útil para otro dentro de una tarea común.",
    rule: {
      all: "Ayudo para servir.",
      ages_3_5: "Ayudo con algo.",
      ages_6_10: "Ayudo donde hace falta."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Ayuda concreta en parejas o mesa común",
        entry_mode: "Ingreso con tarea visible de ayuda"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Estaciones de servicio simple",
        entry_mode: "Ingreso con tarjeta de tarea útil"
      },
      ages_9_10: {
        rule_words: 5,
        signal_response_seconds: 5,
        activity_mode: "Rutas de apoyo con mini encargos",
        entry_mode: "Ingreso autónomo con elección de encargo"
      }
    },
    structure: {
      entry: [
        "Entrar y mirar tareas de ayuda preparadas.",
        "Elegir o recibir un encargo simple.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar pedir y ofrecer ayuda con frase corta.",
        "Parar a la señal y mostrar maños vacias o material listo.",
        "Cambiar de encargo cuando el primero termina."
      ],
      core_activity: [
        "Completar una rota de servicio: ordenar, alcanzar, limpiar, repartir, acompañar o cuidar un material.",
        "Hacer la tarea para que otro pueda seguir mejor.",
        "[9-10] Explicar al final a quien ayudo su acción."
      ],
      repetition: [
        "Cambiar de encargo y repetir.",
        "Hacer una segunda ronda con menos recordatorios.",
        "Revisar si la ayuda fue útil o solo rápida."
      ],
      output: [
        "Cada niño completa al menos una acción de ayuda útil.",
        "El grupo deja un espacio mejor que al inicio.",
        "El grupo reconoce que ayudar sirve a alguien concreto."
      ],
      closing: [
        "Gesto colectivo: mano en hombro propio y mano al frente.",
        "Decir juntos: Ayudo donde hace falta."
      ]
    },
    volunteer_role: {
      do: [
        "Preparar tareas útiles de verdad.",
        "Decir para quien sirve cada ayuda.",
        "Rotar encargos para que todos ayuden.",
        "Reforzar cuando la ayuda facilita la tarea de otro."
      ],
      avoid: [
        "Dar encargos falsos o solo decorativos.",
        "Asignar siempre al mismo niño para ayudar.",
        "Hablar de vocación sin acción concreta.",
        "Confundir servicio con sumision."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Mostrar una ayuda útil y corta.",
        "Avisar si el otro ya puede seguir solo.",
        "Recordar a quien le sirve el encargo."
      ],
      constraints: [
        "No quedarse con todos los encargos.",
        "No decidir por todos.",
        "No usar la ayuda para mandar."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir una ayuda útil en casa elegida por el niño.",
      prompt: "Esta semana hago una ayuda que deje mejor la casa o ayude a alguien.",
      purpose: "El servicio cobra sentido cuando la ayuda tiene destinatario real dentro del hogar."
    },
    metrics: {
      observable: [
        "[3-5] Sostiene la actividad de ayuda al menos 3 minutos con apoyo.",
        "[6-8] Sostiene la actividad de ayuda al menos 5 minutos con pausas breves.",
        "[9-10] Sostiene la actividad de ayuda al menos 7 minutos sin abandonar su encargo.",
        "Completa una acción de ayuda de principio a fin.",
        "Puede decir o mostrar a quien ayudo.",
        "Acepta cambiar de encargo cuando se le pide.",
        "[3-5] Sigue una tarea simple de ayuda con apoyo.",
        "[6-10] Elige una ayuda adecuada sin invadir la tarea de otro."
      ]
    }
  },
  12: {
    number: 12,
    title: "Convivencia, amistad y respeto",
    theme: "Convivencia, amistad y respeto",
    internal_theme_note: "No convertir la sesión en conversatorio sentimental. El objetivo está practicar escuchar, esperar, pedir y responder sin empujar ni burlarse.",
    conduct_objective: "Usar turnos, escuchar al otro y responder con trato respetuoso durante una actividad compartida.",
    rule: {
      all: "Escucho y respeto.",
      ages_3_5: "Escucho y espero.",
      ages_6_10: "Escucho, espero y respeto."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Juego de turnos con objeto de palabra",
        entry_mode: "Ingreso en circulo pequeño"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Parejas y rondas de peticion-respuesta",
        entry_mode: "Ingreso por dupla asignada"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Mini retos de escucha y acuerdo",
        entry_mode: "Ingreso autónomo a equipo pequeño"
      }
    },
    structure: {
      entry: [
        "Entrar y formar un circulo o dupla.",
        "Mirar quien habla y esperar material o turno.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar pedir algo con frase corta y tono suave.",
        "Practicar responder si, ahora o espera.",
        "Parar a la señal y revisar si todos tienen espacio."
      ],
      core_activity: [
        "Hacer juegos de turnos, escucha y acuerdo: pasar objeto, completar secuencia o resolver una tarea con un solo material compartido.",
        "Usar palabras cortas de trato: por favor, gracias, ahora tu, espera.",
        "[9-10] Resolver una diferencia pequena eligiendo entre dos opciones y acordando una."
      ],
      repetition: [
        "Repetir con cambio de compañero.",
        "Quitar una ayuda visual en la segunda vuelta.",
        "Volver a empezar si aparecen empujones o burlas."
      ],
      output: [
        "Cada niño usa al menos una acción de respeto visible.",
        "El grupo completa una actividad con material compartido.",
        "El grupo sostiene turnos sin pelea durante al menos una ronda."
      ],
      closing: [
        "Gesto colectivo: mano en la oreja y mano en el corazon.",
        "Decir juntos: Escucho y respeto."
      ]
    },
    volunteer_role: {
      do: [
        "Modelar tono de voz y distancia corporal.",
        "Nombrar rápido la acción correcta: espero, escucho, pido.",
        "Cortar la burla en el momento y reiniciar la acción.",
        "Reforzar cada gesto de respeto visible."
      ],
      avoid: [
        "Dar sermones largos sobre valores.",
        "Pedir amistad perfecta.",
        "Dejar pasar empujones pequeños.",
        "Obligar a compartir cosas personales."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Modelar como pedir turno.",
        "Mostrar como ceder espacio o material.",
        "Ayudar a reiniciar la actividad con frase corta."
      ],
      constraints: [
        "No corregir con burla.",
        "No quedar siempre con el objeto de palabra.",
        "No resolver el conflicto con gritos."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir una acción de respeto visible en casa.",
      prompt: "Esta semana escucho, espero o pido bien al menos una vez en casa.",
      purpose: "La convivencia mejora cuando las mismas acciones de respeto se repiten en el hogar."
    },
    metrics: {
      observable: [
        "Espera turno al menos una vez sin interrumpir.",
        "Usa una frase corta de respeto durante la actividad.",
        "Comparte material sin arrebatar.",
        "[3-5] Mantiene su lugar en la ronda hasta recibir señal.",
        "[6-10] Resuelve una diferencia pequena con opción o acuerdo guiado."
      ]
    }
  },
  13: {
    number: 13,
    title: "Naturaleza, estaciones y ciencia básica",
    theme: "Naturaleza, estaciones y ciencia básica",
    internal_theme_note: "No hacer clase de datos. La sesión debe observar, comparar, probar y registrar cambios simples con materiales concretos.",
    conduct_objective: "Observar un cambio simple, compararlo y registrar lo que paso con acción, dibujo o palabra.",
    rule: {
      all: "Miro, pruebo y cuento.",
      ages_3_5: "Miro y pruebo.",
      ages_6_10: "Miro, pruebo y cuento."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Exploracion sensorial guiada",
        entry_mode: "Ingreso por mesa de observacion"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Pequenos experimentos con comparacion",
        entry_mode: "Ingreso por estaciones de prueba"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Experimento simple con registro breve",
        entry_mode: "Ingreso autónomo con ficha de observacion"
      }
    },
    anchor_question: [
      "¿Qué pasa si mezclo esto con agua?",
      "¿Qué cambia cuando le da el sol?",
      "¿Cómo sé cuál pesa más?"
    ],
    structure: {
      entry: [
        "Entrar y mirar materiales de observacion sin tocarlos.",
        "Escuchar la pregunta simple del dia.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar tocar, mirar y dejar en su lugar.",
        "Hacer una prediccion corta por gesto, color o palabra.",
        "Parar a la señal y mirar de nuevo."
      ],
      core_activity: [
        "Realizar una observacion o experimento simple: mezclar, clasificar, comparar temperatura, luz, hojas, agua o sombra.",
        "[3-5] Mostrar qué cambia con gesto o dibujo.",
        "[6-8] Decir o marcar que paso antes y después.",
        "[9-10] Registrar con palabra o frase corta que observaron."
      ],
      repetition: [
        "Repetir la observacion con otro material.",
        "Cambiar una condicion y volver a mirar.",
        "Comparar dos resultados antes de cerrar."
      ],
      output: [
        "Cada niño observa un cambio o diferencia.",
        "Cada niño registra lo visto con gesto, dibujo o palabra.",
        "El grupo cuida materiales durante toda la actividad."
      ],
      closing: [
        "Gesto colectivo: mano sobre los ojos y luego mano arriba.",
        "Decir juntos: Miro, pruebo y cuento."
      ]
    },
    volunteer_role: {
      do: [
        "Preparar una sola pregunta clara.",
        "Usar materiales simples y seguros.",
        "Pedir observar antes de explicar.",
        "Aceptar respuesta en gesto, dibujo o palabra."
      ],
      avoid: [
        "Hablar mucho antes de probar.",
        "Llenar de conceptos dificiles.",
        "Cambiar demasiadas cosas a la vez.",
        "Corregir rápido sin dejar observar."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Modelar como mirar antes de tocar.",
        "Ayudar a registrar con marca o palabra.",
        "Preguntar qué cambió viste."
      ],
      constraints: [
        "No responder por el menor.",
        "No tocar todos los materiales primero.",
        "No inventar resultados para avanzar rápido."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir observar un cambio simple en casa o barrio.",
      prompt: "Esta semana miro un cambio en una planta, el clima, la luz o el agua y lo cuento.",
      purpose: "La curiosidad crece cuando la observacion se prolonga a otros microsistemas fuera de Yanapakuy."
    },
    metrics: {
      observable: [
        "Observa antes de tocar cuando se le indica.",
        "Identifica al menos un cambio o diferencia.",
        "Registra con gesto, dibujo, marca o palabra lo observado.",
        "[3-5] Mantiene atencion en la observacion breve con apoyo.",
        "[6-10] Compara un antes y después o dos resultados."
      ]
    }
  },
  14: {
    number: 14,
    title: "Decisiones, consecuencias y responsabilidad",
    theme: "Decisiones, consecuencias y responsabilidad",
    internal_theme_note: "No moralizar ni dar ejemplos lejaños. La sesión debe mostrar que una elección cambia lo qué pasa después en un juego o tarea concreta.",
    conduct_objective: "Elegir entre opciones simples y aceptar la consecuencia de la elección en la tarea.",
    rule: {
      all: "Elijo y respondo.",
      ages_3_5: "Elijo y sigo.",
      ages_6_10: "Elijo y respondo."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Eleccion entre dos opciones visibles",
        entry_mode: "Ingreso con tarjetas de opción"
      },
      ages_6_8: {
        rule_words: 3,
        signal_response_seconds: 7,
        activity_mode: "Mini juegos con decision y resultado inmediato",
        entry_mode: "Ingreso por mesa con dos caminos"
      },
      ages_9_10: {
        rule_words: 3,
        signal_response_seconds: 5,
        activity_mode: "Reto con varias opciones y revisión final",
        entry_mode: "Ingreso autónomo leyendo opciones"
      }
    },
    structure: {
      entry: [
        "Entrar y mirar dos o tres opciones de juego o tarea.",
        "Escuchar que no todas las opciones llevan al mismo resultado.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar elegir una opción y sostenerla hasta terminar.",
        "Parar a la señal y revisar que paso después.",
        "Nombrar con gesto o palabra si salio bien o si hay que corregir."
      ],
      core_activity: [
        "Resolver retos con decisiones concretas: que camino seguir, que material usar, a quien pasar, que orden tomar.",
        "Vivir la consecuencia inmediata de la decision.",
        "Hacer una segunda ronda cambiando la elección para comparar."
      ],
      repetition: [
        "Repetir con una nueva decision.",
        "Comparar una elección que ayudo y otra que complico la tarea.",
        "Volver a intentar con mejor elección."
      ],
      output: [
        "Cada niño hace al menos una elección visible.",
        "Cada niño puede mostrar que paso después de elegir.",
        "El grupo compara dos resultados sin pelear."
      ],
      closing: [
        "Gesto colectivo: dedo señalando al frente y mano al pecho.",
        "Decir juntos: Elijo y respondo."
      ]
    },
    volunteer_role: {
      do: [
        "Dar pocas opciones y bien visibles.",
        "Dejar que la consecuencia aparezca en la tarea.",
        "Preguntar que paso después de elegir.",
        "Permitir corregir en una segunda vuelta."
      ],
      avoid: [
        "Dar sermon sobre portarse bien.",
        "Decidir por ellos desde el inicio.",
        "Cambiar la consecuencia para que todos queden igual.",
        "Usar ejemplos lejaños o poléticos."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Leer o mostrar las opciones.",
        "Preguntar cual eliges antes de mover el material.",
        "Ayudar a comparar primer resultado y segundo resultado."
      ],
      constraints: [
        "No elegir por el menor.",
        "No burlarse si la elección no ayudo.",
        "No apurar la respuesta."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir una elección simple en casa y contar que paso después.",
      prompt: "Esta semana elijo una acción buena en casa y cuento que paso después.",
      purpose: "Las decisiones se vuelven significativas cuando se conectan con consecuencias reales en la vida diaria."
    },
    optional_reflection: {
      enabled: true,
      target_ages: "8-10",
      question: "¿Hay algo en tu barrio que cambiaría si pudieras elegir?",
      time_seconds: 60,
      note: "Solo si el grupo sostiene 1 minuto de diálogo real."
    },
    metrics: {
      observable: [
        "Elige entre opciones sin quedarse fuera de la tarea.",
        "Acepta el resultado de su elección al menos una vez.",
        "Prueba una segunda opción para comparar.",
        "[3-5] Señala o toma una opción visible cuando se le pide.",
        "[6-10] Puede decir o mostrar que paso después de elegir."
      ]
    }
  },
  15: {
    number: 15,
    title: "Tradiciones, memoria y sentido cultural",
    theme: "Tradiciones, memoria y sentido cultural",
    internal_theme_note: "No hacer clase de fechas. La sesión debe usar objetos, historias breves, canciones o costumbres para que los niños reconozcan y reproduzcan una tradicion concreta.",
    conduct_objective: "Reconocer una tradicion cercana y reproducir una acción, objeto o secuencia asociada a ella.",
    rule: {
      all: "Recuerdo y repito.",
      ages_3_5: "Miro y repito.",
      ages_6_10: "Recuerdo, hago y cuento."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Imitacion de gesto, canto o secuencia corta",
        entry_mode: "Ingreso con objeto o imagen tradicional visible"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Taller por estaciones de tradicion",
        entry_mode: "Ingreso por mesa de costumbre o fiesta"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Produccion breve con relato o muestra",
        entry_mode: "Ingreso autónomo con elección de tradicion"
      }
    },
    structure: {
      entry: [
        "Entrar y mirar objetos, imagenes o sonidos de una tradicion.",
        "Escuchar una historia muy breve o consigna de memoria.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar un gesto, canto, secuencia o armado simple ligado a la tradicion.",
        "Parar a la señal y mostrar lo que se recuerda.",
        "Repetir una vez más con menos ayuda."
      ],
      core_activity: [
        "Realizar una acción ligada a una tradicion cercana: armar un objeto, seguir una secuencia, cantar un fragmento, clasificar elementos o representar una costumbre.",
        "[6-10] Nombrar quien en casa o barrio también la conoce o la práctica.",
        "Cerrar con una muestra breve por mesa o equipo."
      ],
      repetition: [
        "Repetir la secuencia una segunda vez.",
        "Cambiar de estacion o de tradicion cercana.",
        "Volver a mostrar lo aprendido sin mirar el modelo."
      ],
      output: [
        "Cada niño reproduce una acción o secuencia cultural simple.",
        "El grupo relaciona al menos una tradicion con casa o barrio.",
        "El grupo completa una muestra breve sin perder materiales."
      ],
      closing: [
        "Gesto colectivo: maños juntas y luego abiertas hacia el grupo.",
        "Decir juntos: Recuerdo y repito."
      ]
    },
    volunteer_role: {
      do: [
        "Usar tradiciones cercanas y reconocibles.",
        "Mostrar con objeto, canción o acción antes de explicar.",
        "Pedir recuerdo por gesto, dibujo o frase corta.",
        "Valorar distintas formas familiares de una misma tradicion."
      ],
      avoid: [
        "Hablar solo de fechas y nombres.",
        "Corregir si una familia la vive distinto.",
        "Volver exotica una costumbre cercana.",
        "Pedir exposiciones largas."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Modelar la secuencia una vez.",
        "Ayudar a sostener el ritmo o el orden.",
        "Preguntar quien lo vio antes en casa o barrio."
      ],
      constraints: [
        "No imponer su propia versión como unica.",
        "No reirse si otro no la conoce.",
        "No hacer toda la muestra por el menor."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir que pregunten o miren una tradicion en casa o barrio.",
      prompt: "Esta semana pregunto a una abuela, tío o vecino por una costumbre, canción, comida o fiesta que se hace en mi casa o barrio.",
      purpose: "La memoria cultural gana sentido cuando se enlaza con personas y prácticas reales del entorno cercano."
    },
    optional_reflection: {
      enabled: true,
      target_ages: "8-10",
      question: "¿Qué costumbre de tu casa te gustaría que no se pierda?",
      time_seconds: 60,
      note: "Solo si el grupo sostiene 1 minuto de diálogo real."
    },
    metrics: {
      observable: [
        "[3-5] Sostiene la actividad al menos 3 minutos con apoyo.",
        "[6-8] Sostiene la actividad al menos 5 minutos con pausas breves.",
        "[9-10] Sostiene la actividad al menos 7 minutos sin abandonar la muestra.",
        "Reproduce una acción, secuencia o canto corto de la tradicion trabajada.",
        "Relaciona la actividad con una persona o lugar cercano.",
        "Mantiene materiales o ritmo hasta terminar la muestra.",
        "[3-5] Imita un gesto o secuencia simple.",
        "[6-10] Dice o escribe una referencia corta de casa o barrio."
      ]
    }
  },
  16: {
    number: 16,
    title: "Estudiar, carreras y proyecto de futuro",
    theme: "Estudiar, carreras y proyecto de futuro",
    internal_theme_note: "No hacer charla lejana sobre profesiones. La sesión debe conectar estudiar hoy con tareas, oficios y metas visibles que se pueden imaginar y representar.",
    conduct_objective: "Relacionar una acción de estudio actual con una meta futura visible mediante elección, representacion o secuencia.",
    rule: {
      all: "Estudio para seguir.",
      ages_3_5: "Aprendo y sigo.",
      ages_6_10: "Estudio para seguir."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Juego de oficios y herramientas por imitacion",
        entry_mode: "Ingreso con objetos o imagenes de oficios"
      },
      ages_6_8: {
        rule_words: 3,
        signal_response_seconds: 7,
        activity_mode: "Relacionar estudio, habilidad y oficio",
        entry_mode: "Ingreso por tarjetas de que hago hoy"
      },
      ages_9_10: {
        rule_words: 3,
        signal_response_seconds: 5,
        activity_mode: "Secuencia presente-futuro con produccion breve",
        entry_mode: "Ingreso autónomo con panel de opciones"
      }
    },
    structure: {
      entry: [
        "Entrar y mirar imagenes de oficios, trabajos o estudios.",
        "Elegir una imagen o recibir una tarjeta.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar una acción simple ligada al estudio: leer, contar, ordenar, escribir, preguntar.",
        "Unir esa acción con una imagen de oficio o meta.",
        "Parar a la señal y mostrar la union hecha."
      ],
      core_activity: [
        "Relacionar una acción de hoy con una posibilidad de mañana: estudiar, practicar, terminar tareas, aprender a leer mejor, cuidar materiales.",
        "[3-5] Hacer juego de roles con herramientas de carton o imagenes.",
        "[6-8] Unir tarjetas de habilidad con oficio o servicio.",
        "[9-10] Completar una secuencia corta: hoy hago - para poder - mañana."
      ],
      repetition: [
        "Cambiar de imagen o meta y repetir.",
        "Quitar una ayuda visual en segunda ronda.",
        "Volver a presentar la secuencia a un compañero."
      ],
      output: [
        "Cada niño relaciona una acción de estudio con una meta futura.",
        "Cada niño representa o muestra una posibilidad de futuro.",
        "El grupo entiende que estudiar hoy abre caminos después."
      ],
      closing: [
        "Gesto colectivo: mano en la cabeza y mano al frente.",
        "Decir juntos: Estudio para seguir."
      ]
    },
    volunteer_role: {
      do: [
        "Conectar futuro con acciones de hoy.",
        "Usar ejemplos cercaños a la vida de Manchay.",
        "Aceptar respuesta por dibujo, gesto, juego o frase corta.",
        "Reforzar que nadie sabe todo todavia y se aprende paso a paso.",
        "Usa un ejemplo de Yanapakuy mismo: hoy terminaste la tarea, eso está estudiar; con eso, mañana puedes explicar a otro."
      ],
      avoid: [
        "Prometer futuros irreales.",
        "Hablar solo de universidad o carreras largas.",
        "Ridiculizar oficios manuales o técnicos.",
        "Dar discurso motivacional sin acción concreta."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Contar una acción de estudio que ya hacen.",
        "Ayudar a unir una habilidad con una meta.",
        "Escuchar la secuencia del menor y repetirla con el."
      ],
      constraints: [
        "No imponer una carrera o trabajo.",
        "No decir eso no se puede.",
        "No hacer la produccion por el menor."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir que en casa pregunten por un trabajo, oficio o estudio que alguien realiza o quisiera realizar.",
      prompt: "Esta semana pregunto en casa qué trabajo, oficio o estudio ayuda a salir adelante.",
      purpose: "El proyecto de futuro se vuelve significativo cuando se conecta con personas reales del hogar y la comunidad."
    },
    metrics: {
      observable: [
        "[3-5] Sostiene la actividad al menos 3 minutos con apoyo.",
        "[6-8] Sostiene la actividad al menos 5 minutos con pausas breves.",
        "[9-10] Sostiene la actividad al menos 7 minutos sin abandonar su secuencia.",
        "Relaciona al menos una acción de estudio con una meta futura.",
        "Representa una opción de futuro con juego, dibujo o frase corta.",
        "[3-5] Imita una acción de trabajo o estudio con material concreto.",
        "[6-8] Une una habilidad de hoy con un oficio o servicio.",
        "[9-10] Completa una secuencia breve de presente y futuro."
      ]
    }
  },
  17: {
    number: 17,
    title: "Trabajo comunitario y apoyo mutuo",
    theme: "Trabajo comunitario y apoyo mutuo",
    internal_theme_note: "No hablar de comunidad en abstracto. La sesión debe hacer una mejora concreta del espacio o una acción común donde el beneficio se vea al final.",
    conduct_objective: "Participar en una tarea comunitaria breve que deje mejor el espacio para otros.",
    rule: {
      all: "Dejo mejor el lugar.",
      ages_3_5: "Cuido este lugar.",
      ages_6_10: "Cuido y mejoro."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Pequenas tareas de cuidado guiado",
        entry_mode: "Ingreso por zona de cuidado marcada"
      },
      ages_6_8: {
        rule_words: 3,
        signal_response_seconds: 7,
        activity_mode: "Equipos con encargos concretos",
        entry_mode: "Ingreso con pulsera o tarjeta de zona"
      },
      ages_9_10: {
        rule_words: 3,
        signal_response_seconds: 5,
        activity_mode: "Mini brigadas con revisión final",
        entry_mode: "Ingreso autónomo a zona asignada"
      }
    },
    structure: {
      entry: [
        "Entrar y mirar que necesita mejora o cuidado.",
        "Recibir zona o encargo.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar tomar, usar y devolver un material de limpieza u orden.",
        "Parar a la señal y mirar si la zona cambio.",
        "Cambiar de tarea solo cuando la anterior termino."
      ],
      core_activity: [
        "Realizar una tarea comunitaria breve: ordenar libros, limpiar mesas, acomodar sillas, clasificar materiales o mejorar un mural común.",
        "Trabajar por zonas para que el cambio se note.",
        "Al final, comparar antes y después del espacio."
      ],
      repetition: [
        "Hacer una segunda ronda en otra zona.",
        "Reducir recordatorios en la segunda vuelta.",
        "Revisar si algo quedo a medias y cerrarlo."
      ],
      output: [
        "Cada niño completa una tarea útil para el grupo.",
        "El espacio queda visiblemente mejor que al inicio.",
        "El grupo reconoce que el beneficio está para todos."
      ],
      closing: [
        "Gesto colectivo: maños hacia abajo como acomodando y luego pulgar arriba.",
        "Decir juntos: Dejo mejor el lugar."
      ]
    },
    volunteer_role: {
      do: [
        "Elegir tareas reales y cortas.",
        "Mostrar el antes y el después.",
        "Dividir el espacio por zonas claras.",
        "Nombrar a quien beneficia la mejora."
      ],
      avoid: [
        "Dar encargos simbolicos sin resultado visible.",
        "Hacer tu el trabajo mientras miran.",
        "Dejar zonas sin cerrar.",
        "Convertir la sesión en regan? por el desorden."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Modelar como dejar una zona terminada.",
        "Recordar que se cambia de tarea solo al cerrar la anterior.",
        "Ayudar a comparar antes y después."
      ],
      constraints: [
        "No quedarse con las tareas faciles.",
        "No mandar sin ayudar.",
        "No volver competencia una tarea comunitaria."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir una mejora visible en casa o pasaje cercano con permiso del adulto.",
      prompt: "Esta semana dejo mejor un espacio en casa y cuento qué cambió.",
      purpose: "La idea de comunidad se fortalece cuando el niño mejora un espacio real que comparten otros."
    },
    optional_reflection: {
      enabled: true,
      target_ages: "8-10",
      question: "¿Qué mejorarías en Manchay si te dejaran?",
      time_seconds: 60,
      note: "Solo si el grupo sostiene 1 minuto de diálogo real."
    },
    metrics: {
      observable: [
        "[3-5] Sostiene la actividad al menos 3 minutos con apoyo.",
        "[6-8] Sostiene la actividad al menos 5 minutos con pausas breves.",
        "[9-10] Sostiene la actividad al menos 7 minutos sin abandonar su zona.",
        "Completa un encargo de cuidado o mejora.",
        "Permanece en su zona hasta terminar la tarea.",
        "Puede mostrar qué cambió en el espacio.",
        "[3-5] Sigue una tarea simple de cuidado con apoyo.",
        "[6-10] Compara antes y después de una zona o mesa."
      ]
    }
  },
  18: {
    number: 18,
    title: "Evaluacion del año y reconocimiento",
    theme: "Evaluacion del año y reconocimiento",
    internal_theme_note: "No hacer evaluación solo verbal. La sesión debe mostrar logros, intentos y mejoras del año con productos visibles y reconocimiento concreto.",
    conduct_objective: "Identificar una mejora del año y mostrarla con evidencia simple, gesto, marca o produccion corta.",
    rule: {
      all: "Miro lo que logre.",
      ages_3_5: "Miro mi logro.",
      ages_6_10: "Miro, nombro y celebro."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Panel de logros con imagen o huella",
        entry_mode: "Ingreso con foto, muestra o tarjeta personal"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Linea de progreso con marcas y ejemplos",
        entry_mode: "Ingreso por mesa de recuerdos del año"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Balance breve con evidencia y reconocimiento mutuo",
        entry_mode: "Ingreso autónomo con ficha de logro"
      }
    },
    structure: {
      entry: [
        "Entrar y encontrar una tarjeta, ficha o espacio personal.",
        "Mirar trabajos, fotos, retos o recuerdos del año.",
        "Mostrar desde el inicio la lista de logros posibles: espere mejor, termine tareas, ayude, lei, ordene, coopere, repeti, no me rendi.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar elegir un logro o mejora.",
        "Mostrar con dedo, huella, marca o palabra lo elegido.",
        "Parar a la señal y mirar también un logro de otro."
      ],
      core_activity: [
        "Armar un panel o linea del año con logros visibles: espere mejor, termine tareas, ayude, lei, ordene, coopere, repeti, no me rendi.",
        "[3-5] Elegir una imagen o gesto que muestre su mejora.",
        "[6-8] Pegar una evidencia o hacer una marca con ayuda.",
        "[9-10] Escribir o decir una frase breve sobre algo que mejoro."
      ],
      repetition: [
        "Hacer una segunda elección: algo que ahora sale mejor.",
        "Reconocer un avance de otro sin burla.",
        "Volver a mirar el panel final completo."
      ],
      output: [
        "Cada niño muestra al menos una mejora del año.",
        "El grupo arma un panel de logros compartidos.",
        "El grupo reconoce avances sin comparar para humillar."
      ],
      closing: [
        "Gesto colectivo: aplauso lento de tres tiempos y maños al pecho.",
        "Decir juntos: Miro lo que logre."
      ]
    },
    volunteer_role: {
      do: [
        "Usar evidencias concretas del año.",
        "Nombrar progreso pequeño y real.",
        "Pedir reconocimiento entre pares con respeto.",
        "Incluir al que mejoro poco pero sostuvo el esfuerzo."
      ],
      avoid: [
        "Comparar quien fue el mejor.",
        "Premiar solo notas o rapidez.",
        "Hacer balance solo hablando.",
        "Dejar fuera al que tuvo más dificultad."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Ayudar a recordar una mejora concreta del menor.",
        "Mostrar una evidencia simple del año.",
        "Reconocer al otro con frase corta y respetuosa."
      ],
      constraints: [
        "No inventar logros para completar rápido.",
        "No bromear con errores pasados.",
        "No comparar logros como competencia."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir que compartan en casa un logro o mejora del año.",
      prompt: "Esta semana cuento en casa algo que ahora hago mejor que al inicio del año.",
      purpose: "El reconocimiento gana sentido cuando el logro se comparte con figuras de cuidado del hogar."
    },
    metrics: {
      observable: [
        "[3-5] Sostiene la actividad al menos 3 minutos con apoyo.",
        "[6-8] Sostiene la actividad al menos 5 minutos con pausas breves.",
        "[9-10] Sostiene la actividad al menos 7 minutos revisando y armando su panel.",
        "Identifica al menos una mejora del año.",
        "La muestra con gesto, evidencia, marca o frase breve.",
        "Reconoce un avance de otro sin burla.",
        "[3-5] Señala o elige una imagen que represente su logro.",
        "[6-10] Nombra o escribe una mejora concreta."
      ]
    }
  },
  19: {
    number: 19,
    title: "Compartir, cierre y sentido de Navidad",
    theme: "Compartir, cierre y sentido de Navidad",
    internal_theme_note: "No centrar la sesión en regalos o consumo. El objetivo está practicar compartir, agradecer, esperar y hacer un gesto de esperanza o cuidado para otro.",
    conduct_objective: "Compartir un recurso, gesto o mensaje de cierre con otro respetando turnos y cuidado común.",
    rule: {
      all: "Comparto con cuidado.",
      ages_3_5: "Comparto y espero.",
      ages_6_10: "Comparto, espero y cuido."
    },
    age_differentiation: {
      ages_3_5: {
        rule_words: 3,
        signal_response_seconds: 10,
        activity_mode: "Ronda de compartir con objeto o mensaje corto",
        entry_mode: "Ingreso en circulo con centro común"
      },
      ages_6_8: {
        rule_words: 4,
        signal_response_seconds: 7,
        activity_mode: "Mesa común de compartir y mensaje",
        entry_mode: "Ingreso con tarjeta o pequeño aporte"
      },
      ages_9_10: {
        rule_words: 4,
        signal_response_seconds: 5,
        activity_mode: "Cierre por equipos con gesto de esperanza",
        entry_mode: "Ingreso autónomo a mesa de cierre"
      }
    },
    structure: {
      entry: [
        "Entrar y formar circulo o mesa común.",
        "Colocar aporte, tarjeta o material en el centro cuando se indique.",
        "Decir juntos la regla."
      ],
      routine: [
        "Practicar pasar algo de mano en mano con cuidado.",
        "Esperar la señal antes de tomar o entregar.",
        "Decir una frase corta de cierre o deseo bueno para otro."
      ],
      core_activity: [
        "Realizar una actividad de compartir: repartir, intercambiar, entregar mensaje, armar canasta o mesa común, o construir un cierre colectivo.",
        "Hacer un gesto de cuidado o esperanza dirigido a otro niño, al grupo o a casa.",
        "[9-10] Explicar con una frase corta por qué compartir también cuida al grupo."
      ],
      repetition: [
        "Hacer una segunda ronda de entrega o intercambio.",
        "Cambiar de compañero o equipo.",
        "Volver a practicar espera y cuidado si hay apuro."
      ],
      output: [
        "Cada niño comparte algo sin arrebatar.",
        "Cada niño participa en un cierre común.",
        "El grupo termina con un gesto compartido de cuidado y esperanza."
      ],
      closing: [
        "Gesto colectivo: maños abiertas al centro y luego al pecho.",
        "Decir juntos: Comparto con cuidado.",
        "El voluntario deja una frase o tarjeta de apertura para el próximo ciclo: este año aprendiste X. El año que viene puedes Y."
      ]
    },
    volunteer_role: {
      do: [
        "Preparar una actividad simple de compartir real.",
        "Cuidar que todos tengan turno.",
        "Recordar que lo importante está el gesto, no el valor del objeto.",
        "Cerrar con tono sereno y alegre."
      ],
      avoid: [
        "Comparar quien trajo más o menos.",
        "Hablar solo de regalos.",
        "Dejar que algunos repartan y otros miren.",
        "Apurar el cierre final."
      ]
    },
    peer_mediation: {
      enabled: true,
      role_of_older: [
        "Modelar como entregar y esperar.",
        "Ayudar a sostener el orden de la ronda.",
        "Acompanar a un menor en su frase o gesto de cierre."
      ],
      constraints: [
        "No repartir todo ellos solos.",
        "No decidir quien recibe primero sin acuerdo.",
        "No usar tono de mando en el cierre."
      ]
    },
    transfer_to_home: {
      enabled: true,
      instruction: "Pedir un gesto simple de compartir o cuidado en casa durante la semana.",
      prompt: "Esta semana comparto algo o hago un gesto bueno por alguien en casa, y guardo una idea para el próximo año.",
      purpose: "El sentido de compartir se fortalece cuando se prolonga a la casa con un gesto concreto de cuidado."
    },
    metrics: {
      observable: [
        "[3-5] Sostiene la actividad al menos 3 minutos con apoyo.",
        "[6-8] Sostiene la actividad al menos 5 minutos con pausas breves.",
        "[9-10] Sostiene la actividad al menos 7 minutos hasta cerrar su mensaje o gesto.",
        "Espera su turno para entregar o recibir.",
        "Comparte un recurso, mensaje o gesto sin arrebatar.",
        "Participa en el cierre común hasta el final.",
        "[3-5] Entrega o recibe con apoyo y espera breve.",
        "[6-10] Dice o muestra una frase o gesto de cierre para otro."
      ]
    }
  }
};
