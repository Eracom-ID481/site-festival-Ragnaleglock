const filters = document.getElementsByClassName("filter");
let current = document.getElementsByClassName("active");

drawTimetable(current[0].classList[1]);

for (let e of filters) {
    e.addEventListener("click", function() {
        current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
        document.getElementById("timetable").innerHTML = "";
        drawTimetable(current[0].classList[1]);
    });
}

function drawTimetable(day) {
    let timetable = new Timetable();

    // On dessine une nouvelle grille selon le jour.
    // Utilisez le nom de classe attribuée à chaque jour pour donner la condition
    if (day == "jeudi") {
        // Définir les heures de la grille (heure de début, heure de fin).
        timetable.setScope(10, 00);

        // Définir les lieux de la grille.
        timetable.addLocations([
            "2pacArena",
            "Jordan palace",
            "MC",
            "Rote Fabrik",

        ]);

        // Premier événement:

        timetable.addEvent(
            // Artiste
            "Big Flo & Oli",
            // Lieu
            "2pacArena",


            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2020, 10, 17, 11, 20),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2020, 10, 17, 13, 00),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "Air Force One Hall Of Fame",
            // Lieu
            "Rote Fabrik",


            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2020, 10, 17, 11, 20),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2020, 10, 17, 21, 00),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "Dance Show / Street T-jay / Moonwalk BIG / Biglesterne  / Brad Waave ",
            // Lieu
            "2pacArena",


            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2020, 10, 17, 18, 20),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2020, 10, 17, 21, 00),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            // Artiste
            "Booba",
            // Lieu
            "Jordan palace",


            // Date et heure de début (année, mois, jour, heure, minute)
            new Date(2020, 10, 17, 15, 20),
            // Date et heure de fin (année, mois, jour, heure, minute)
            new Date(2020, 10, 17, 17, 00),
            // URL Quand on clicke sur le lien
            {
                url: "../artiste.html"
            }
        );


        // Deuxième événement
        timetable.addEvent(
            "SCH",
            "MC",
            new Date(2020, 10, 17, 13, 00),
            new Date(2020, 10, 17, 14, 45), {
                url: "../artiste.html"
            }
        );

        let renderer = new Timetable.Renderer(timetable);
        renderer.draw(".timetable");
    }
    // Deuxième jour
    else if (day == "vendredi") {
        timetable.setScope(10, 00);
        timetable.addLocations(["2pacArena",
            "Jordan palace",
            "MC",
            "Rote Fabrik"
        ]);

        timetable.addEvent(
            "PNL",
            "MC",
            new Date(2020, 10, 17, 14, 20),
            new Date(2020, 10, 17, 15, 30), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "NISKA",
            "2pacArena",
            new Date(2020, 10, 17, 16, 20),
            new Date(2020, 10, 17, 17, 30), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Aya Nakamura",
            "Jordan palace",
            new Date(2020, 10, 17, 19, 20),
            new Date(2020, 10, 17, 20, 30), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Custom Contest",
            "Rote Fabrik",
            new Date(2020, 10, 17, 10, 20),
            new Date(2020, 10, 17, 21, 30), {
                url: "../artiste.html"
            }
        );



        timetable.addEvent(
            "Green Montana",
            "Jordan palace",
            new Date(2020, 10, 17, 12, 30),
            new Date(2020, 10, 17, 13, 45), {
                url: "../artiste.html"
            }



        );
        let renderer = new Timetable.Renderer(timetable);
        renderer.draw(".timetable");
    }
    // Troisième jour
    else if (day == "samedi") {
        timetable.setScope(10, 00);
        timetable.addLocations(["2pacArena",
            "Jordan palace",
            "MC",
            "Rote Fabrik",
        ]);
        timetable.addEvent(
            "Alpha Wann",
            "Jordan palace",
            new Date(2020, 10, 17, 11, 00),
            new Date(2020, 10, 17, 12, 00), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "Guizmo",
            "Jordan palace",
            new Date(2020, 10, 17, 13, 00),
            new Date(2020, 10, 17, 14, 00), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            " DanceShow RagnarTheGlock / Nafuyumen / GatoTheGro / NissoBANK ",
            "2pacArena",
            new Date(2020, 10, 17, 19, 00),
            new Date(2020, 10, 17, 21, 00), {
                url: "../artiste.html"
            }
        );

        timetable.addEvent(
            "The Decade Of Nike",
            "Rote Fabrik",
            new Date(2020, 10, 17, 10, 00),
            new Date(2020, 10, 17, 21, 00), {
                url: "../artiste.html"
            }
        );
        timetable.addEvent(
            "Orelsan",
            "MC",
            new Date(2020, 10, 17, 14, 00),
            new Date(2020, 10, 17, 15, 00), {
                url: "../artiste.html"
            }
        );
        let renderer = new Timetable.Renderer(timetable);
        renderer.draw(".timetable");
    }
}