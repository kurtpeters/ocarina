ocarina
=======

### Bower installation
```
bower install ocarina
```
===

###listenTo

```js
ocarina.listenTo('songOfTime', function() {
    console.log('songOfTime');
});
```

===

###save

```js
ocarina.save('songName', ['up', 'up', 'down']);
// or as a hash of arrays. Controller strings or keycodes are valid:
ocarina.save({
    'foo': ['x', 37, 'a'],
    'bar': [65, 'up', 'down', 'y']
});
```

===

###remove

```js
ocarina.remove('songName');
```

===

###trigger

```js
ocarina.trigger('songName');
```

===

###clear

```js
ocarina.clear();
```

===

###add

```js
ocarina.add({
    // string: keycode
    "x": 88,
    "q": 81
});

```

===

####Zelda's Lullaby

Song: zeldasLullaby

Sequence: `←` `↑` `→` `←` `↑` `→`

####Saria's Song

Song: sariasSong

Sequence: `↓` `→` `←` `↓` `→` `←`

####Epona's Song

Song: eponasSong

Sequence: `↑` `←` `→` `↑` `←` `→`

####Sun's Song

Song: sunsSong

Sequence: `→` `↓` `↑` `→` `↓` `↑`

####Song of Time

Song: songOfTime

Sequence: `→` `a` `↓` `→` `a` `↓`

####Song of Storms

Song: songOfStorms

Sequence: `a` `↓` `↑` `a` `↓` `↑`

####Minuet of Forest

Song: minuetOfForest

Sequence: `a` `↑` `←` `→` `←` `→`

####Bolero of Fire

Song: boleroOfFire

Sequence: `↓` `a` `↓` `a` `→` `↓` `→` `↓`

####Serenade of Water

Song: serenadeOfWater

Sequence: `a` `↓` `→` `→` `←`

####Nocturne of Shadow

Song: nocturneOfShadow

Sequence: `←` `→` `→` `a` `←` `→` `↓`

####Requiem of Spirit

Song: requiemOfSpirit

Sequence: `a` `↓` `a` `→` `↓` `a`

####Prelude of Light

Song: preludeOfLight

Sequence: `↑` `→` `↑` `→` `←` `↑`
