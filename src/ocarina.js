(function(root) {
    'use strict';

    var ocarina;

    function Ocarina() {
        this.navi = {};
        this.sequence = '';
        this.sheetMusic = {};
        this.controller = {
            "up":      38,
            "down":    40,
            "left":    37,
            "right":   39,
            "back":    37,
            "forward": 39,
            "start":   32,
            "a":       65,
            "b":       66,
            "c":       67,
            "l":       76,
            "r":       82,
            "x":       88,
            "y":       84
        };

        return this;
    }

    Ocarina.prototype.listenTo = function(song, fn, context) {

        if (context !== void 0) {
            fn = function() {
                fn.apply(context, arguments);
            };
        }

        (this.navi[song] || (this.navi[song] = [])).push(fn);

        return this;
    };

    Ocarina.prototype.save = function(song, notes) {

        var songs = {},
            pattern,
            button,
            note;

        if (song && song.constructor === String) {
            songs[song] = notes;
        } else {
            songs = song;
        }

        for (song in songs) {

            notes = songs[song];
            pattern = notes.length;

            for (note = 0; note < pattern; note++) {
                button = notes[note];
                button = button.constructor === String ? button.toLowerCase() : button;
                if (this.controller[button]) {
                    notes[note] = this.controller[button];
                }
            }

            this.sheetMusic[song] = notes;
        }

        return this;
    };

    Ocarina.prototype.remove = function(song) {

        if (song === void 0) {
            this.sheetMusic = {};
        }

        this.sheetMusic[song] = null;
        delete this.sheetMusic[song];
        return this;
    };

    Ocarina.prototype.play = function(keycode) {

        var sequence = this.sequence += keycode,
            empty = true,
            trigger,
            sheet,
            song;

        for (sheet in this.sheetMusic) {
            song = this.sheetMusic[sheet].join('');
            trigger = sequence === song;
            if (!~song.indexOf(sequence) || trigger) {
                if (trigger) {
                    this.trigger(sheet);
                    empty = true;
                    break;
                }
                continue;
            }
            empty = false;
        }

        if (empty) {
            this.clear();
        }

        return this;
    };

    Ocarina.prototype.trigger = function(song) {

        var callbacks = this.navi[song] || [],
            comparator = callbacks.length,
            fn = 0;

        for (; fn < comparator; fn++) {
            callbacks[fn].call(this);
        }

        return this;
    };

    Ocarina.prototype.clear = function(empty) {

        if (empty) {
            this.navi = [];
        }

        this.sequence = '';

        return this;
    };

    Ocarina.prototype.addNotes = function (notes) {

        if (!(notes instanceof Object)) {
            throw new Error('declare new notes in object literal form, eg {"x": 88}');
        }

        for (var key in notes) {
            this.controller[key] = notes[key];
        }

        return this;

    };

    ocarina = new Ocarina();

    ocarina.save({
        "zeldasLullaby":    [37, 38, 39, 37, 38, 39],
        "eponasSong":       [38, 37, 39, 38, 37, 39],
        "sariasSong":       [40, 39, 37, 40, 39, 37],
        "sunsSong":         [39, 40, 38, 39, 40, 38],
        "songOfTime":       [39, 65, 40, 39, 65, 40],
        "songOfStorms":     [65, 40, 38, 65, 40, 38],
        "minuetOfForest":   [65, 38, 37, 39, 37, 39],
        "boleroOfFire":     [40, 65, 40, 65, 39, 40, 39, 40],
        "serenadeOfWater":  [65, 40, 39, 39, 37],
        "nocturneOfShadow": [37, 39, 39, 65, 37, 39, 40],
        "requiemOfSpirit":  [65, 40, 65, 39, 40, 65],
        "preludeOfLight":   [38, 39, 38, 39, 37, 38]
    });

    if (root.$ === void 0) {

        if (root.document !== void 0) {
            document.body.onkeydown = function(e) {
                ocarina.play(e.keyCode || e.which);
            };
        }

        root.ocarina = ocarina;

        return;
    }

    $(function() {

        $(document.body).on('keydown', function(e) {
            ocarina.play(e.keyCode || e.which);
        });

        $.ocarina = ocarina;

    });

})(this);
