ocarina
=======

### Bower installation
```
bower install ocarina
```
===

###Ocarina Song List

####Zelda's Lullaby

`←` `↑` `→` `←` `↑` `→`

####Saria's Song

`↓` `→` `←` `↓` `→` `←`

####Epona's Song

`↑` `←` `→` `↑` `←` `→`

####Sun's Song

`→` `↓` `↑` `→` `↓` `↑`

####Song of Time

`→` `a` `↓` `→` `a` `↓`

####Song of Storms

`a` `↓` `↑` `a` `↓` `↑`

####Minuet of Forest

`a` `↑` `←` `→` `←` `→`

####Bolero of Fire

`↓` `a` `↓` `a` `→` `↓` `→` `↓`

####Serenade of Water

`a` `↓` `→` `→` `←`

####Nocturne of Shadow

`←` `→` `→` `a` `←` `→` `↓`

####Requiem of Spirit

`a` `↓` `a` `→` `↓` `a`

####Prelude of Light

`↑` `→` `↑` `→` `←` `↑`

===

###listenTo

```
ocarina.listenTo('songOfTime', function() {
    console.log('songOfTime');
});
```

===

###save

```
ocarina.save('songName', ['up', 'up', 'down']);
```

===

###remove

```
ocarina.remove('songName');
```

===

###trigger

```
ocarina.trigger('songName');
```

===

###clear

```
ocarina.clear();
```