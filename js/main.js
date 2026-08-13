document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       DATOS DE LAS MATERIAS
    ====================================================== */

    const subjects = {

        math: {
            name: "Matemática",

            icon: "assets/math_icon_244051.png",

            quote:
                "Las matemáticas son el alfabeto con el cual Dios ha escrito el universo.",

            author:
                "— Galileo Galilei"
        },

        fisica: {
            name: "Física",

            icon: "assets/icon_fisica.png",

            quote:
                "La ciencia es una forma de pensar mucho más que un conjunto de conocimientos.",

            author:
                "— Carl Sagan"
        },

        quimica: {
            name: "Química",

            icon: "assets/icon_quimica.png",

            quote:
                "La química es necesariamente una ciencia experimental.",

            author:
                "— Justus von Liebig"
        },

        dibujo: {
            name: "Dibujo Técnico",

            icon: "assets/icono_dibujoTecnico.png",

            quote:
                "El dibujo es la forma más sencilla de expresar una idea.",

            author:
                "— Idea atribuida a Leonardo da Vinci"
        },
          cursos: {
        name: "Cursos",
        icon: "assets/icono_cursos.png",
        quote:
            "El aprendizaje es un proceso que nunca termina.",
        author:
            "— Activamente"
    }
        

    };


    /* =====================================================
       ELEMENTOS
    ====================================================== */

    const buttons =
        document.querySelectorAll(".subject-button");

    const subjectIcon =
        document.getElementById("subjectIcon");

    const subjectName =
        document.getElementById("subjectName");

    const quoteText =
        document.getElementById("quoteText");

    const quoteAuthor =
        document.getElementById("quoteAuthor");

    const subjectInfo =
        document.getElementById("subjectInfo");

    const logoContainer =
        document.querySelector(".logo-container");


    /* =====================================================
       CAMBIAR MATERIA
    ====================================================== */

    function changeSubject(subjectKey) {

        const subject =
            subjects[subjectKey];

        if (!subject) {
            return;
        }


        /* Animación de salida */

        subjectInfo.classList.add("changing");

        logoContainer.classList.add("changing");


        setTimeout(function () {

            /* Cambiar icono */

            subjectIcon.src =
                subject.icon;

            subjectIcon.alt =
                subject.name;


            /* Cambiar nombre */

            subjectName.textContent =
                subject.name;


            /* Cambiar cita */

            quoteText.textContent =
                `"${subject.quote}"`;


            /* Cambiar autor */

            quoteAuthor.textContent =
                subject.author;


            /* Animación de entrada */

            subjectInfo.classList.remove("changing");

            logoContainer.classList.remove("changing");

        }, 250);


        /* Activar botón */

        buttons.forEach(function (button) {

            button.classList.remove("active");

        });


        const activeButton =
            document.querySelector(
                `[data-subject="${subjectKey}"]`
            );

        if (activeButton) {

            activeButton.classList.add("active");

        }

    }


    /* =====================================================
       EVENTOS
    ====================================================== */

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const subject =
                    this.dataset.subject;

                changeSubject(subject);

            }
        );

    });


    /* =====================================================
       ESTADO INICIAL
    ====================================================== */

    buttons.forEach(function (button) {

        button.classList.remove("active");

    });

});