---
layout: ../../layouts/MarkdownPostLayout.astro
title: Découvrez les algorithmes
author: Astro Learner
description: "Avant de choisir un langage"
readtime: '10'
image: 
    url: "/img/post3/algo.webp"
    alt: "Algorithmes"
pubDate: 2023-05-27
tags: ["formation", "découverte"]
draft: false
---
Vous aussi vous voulez vous lancer dans le développement informatique, mais vous ne savez pas par quoi commencer ?

Avant même de se lancer dans un langage, il faut déjà comprendre la logique de programmation : quelles seront les différentes étapes à accomplir pour avoir un résultat avec des éléments en entrée ? Pour cela, <strong>découvrez les algorithmes !</strong>

A ce sujet, j'aime beaucoup la définition de la CNIL qui compare un algorithme à une recette de cuisine :

> Un algorithme est la description d'une suite d'étapes permettant d'obtenir un résultat à partir d'éléments fournis en entrée. Par exemple, une recette de cuisine est un algorithme permettant d'obtenir un plat à partir de ses ingrédients !

Et si je devais conseiller aux débutants comme moi une ressource, ce serait un site nommé Blockly Games qui va vous permettre d'apprendre cette logique :

><a href="https://blockly.games/?lang=fr" class="prose prose-zinc">Blocky Games</a>


(Ne vous fiez pas à l'apparente simplicité de son design enfantin, vous risquez d'être surpris par la difficulté des derniers niveaux).

Comment ? En empilant des blocs d'actions entre eux.

Une fois que vous aurez compris ça, ce sera beaucoup plus facile de retranscrire ça dans le langage que vous voudrez apprendre car pour la plupart des langages, la logique restera la même !

Une fois que vous aurez trouvé la solution, Blockly Games vous montre d'ailleurs ce que donnerait le résultat en Javascript, mais ce serait tout aussi applicable dans un autre langage comme le Python (d'ailleurs je mettrais un exemple plus bas).

Je vais donc tacher de faire le tour de Blockly Games tout en restant le plus simple possible.

### Puzzle

Puzzle vous apprends de manière très simple à créer vos premiers objets, qui possèdent chacun leurs propriétés :


<div class="flex justify-center items-center">
  <img src="/img/post3/puzzle.webp" alt="Puzzle" width="691" height="364">
</div>

### Labyrinthe

Labyrinthe vous apprends à décomposer les actions à effectuer pour arriver au bout,

Mais également de répéter des actions avec la boucle <code>WHILE</code> (dans mon exemple : <code>TANT QUE</code> l'arrivée n'est pas atteinte, on avance !)

<div class="flex justify-center items-center">
  <img src="/img/post3/laby.webp" alt="Labyrinthe" width="564" height="319">
</div>

### Tortue

Tortue va permettre également de répéter des actions avec la boucle <code>FOR</code>, mais là on va répéter X fois notre action <code>POUR</code> arriver au résultat,

Là où <code>WHILE</code> répètera l'action <code>TANT QUE</code> nous ne sommes pas arrivé au résultat :

<div class="flex justify-center items-center">
  <img src="/img/post3/tortue-1.webp" alt="Résolution" width="1000" height="494">
</div>

Le programme est en plus assez bien fait pour vous montrer que vous pouvez optimiser votre code ! A savoir qu'on aurait pu arriver au même résultat en duplicant 4 fois notre action, mais là elle est optimisée avec la boucle <code>FOR</code> (donc moins de lignes de codes) :

<div class="flex justify-center items-center">
  <img src="/img/post3/tortue-2.webp" alt="Optimisation" width="995" height="560">
</div>

### Oiseau

Oiseau va vous permettre d'effectuer des tests avec <code>IF...ELSE</code> 
(dans mon exemple : <code>SI</code> n'y a pas telle condition, <code>ALORS</code> on fait ça, <code>SINON</code> on fait ça) :

<div class="flex justify-center items-center">
  <img src="/img/post3/oiseau-1.webp" alt="Tests" width="1000" height="532">
</div>

En Javscript, ça donnerait le résultat suivant :

    if (noWorm()) {
        heading(0);
    } else {
        heading(90);
    }

### Film

Film va vous permettre de créer des formes simples et de les animer :
<div class="flex justify-center items-center">
  <img src="/img/post3/film-1.webp" alt="Animation" width="1000" height="710">
</div>

Ce qui donnerait en Javscript :

    penColour('#ff0000');
    circle(50, 70, 10);
    penColour('#3333ff');
    rect(50, 40, 20, 40);
    penColour('#999999');
    line(60, 50, 80, time(), 5);
    line(40, 50, 20, 70, 5);

### Musique

Musique va vous apprendre à créer des fonctions qui vont permettre d'exécuter d'un coup plusieurs éléments, mais ces fonctions pourront être réutilisées ensuite :

<div class="flex justify-center items-center">
  <img src="/img/post3/musique-1.webp" alt="Fonctions" width="700" height="337">
</div>

Dans mon exemple, la fonction frereJacques regroupe les 4 notes de la mélodie, elle est exécutée 2 fois quand j'appuie sur "start" (qui est d'ailleurs elle même une fonction) :

<div class="flex justify-center items-center">
  <img src="/img/post3/musique-2.webp" alt="Frère Jacques" width="900" height="575">
</div>

En Javscript, c'est tout de suite plus clair :

<pre>
    <code class="language-js">
    function start1() {
    frereJacques();
    frereJacques();
    }


    function frereJacques() {
    play(0.25, 7);
    play(0.25, 8);
    play(0.25, 9);
    play(0.25, 7);
    }

    start1();
    </code>
</pre>

On a là trois fonctions (et non pas deux) :
      <ul>
        <li><code>play()</code> qui n'est pas définie là, mais qui permettra de jouer chaque note indépendamment</li>
        <li><code>frereJacques()</code> qui va me permettre de jouer toutes les notes d'un coup</li>
        <li><code>start1()</code> qui va me permettre de lancer 2 fois frereJacques()</li>
      </ul>

D'ailleurs, qu'est ce que le même programme donnerait en Python ?

    def start1():
        frereJacques()
        frereJacques()

    def frereJacques():
        play(0.25, 7)
        play(0.25, 8)
        play(0.25, 9)
        play(0.25, 7)

    start1()
  
Vous voyez ? On est pas si éloigné que ça d'un langage à l'autre !


### Pond

Déjà, il y a une partie tutoriel qui intègre un éditeur de code et met en avant quelque chose qui sera indispensable dans notre vie de développeur : la documentation !

<div class="flex justify-center items-center">
  <img src="/img/post3/tutopond-1.webp" alt="Tutorial" width="561" height="660">
</div>

Une fois lue, ça devient tout de suite plus simple d'arriver à notre résultat :

<div class="flex justify-center items-center">
  <img src="/img/post3/tutopond-2.webp" alt="Documentation" width="583" height="653">
</div>

Et enfin Pond qui est un mini jeu à coder et qui permet de réviser tout ce qui a été fait jusqu'ici :

<div class="flex justify-center items-center">
  <img src="/img/post3/pond.webp" alt="Pond" width="955" height="630">
</div>


## En conclusion

Blockly Games m'est vraiment d'une aide très utile dans la manière de décomposer mes actions pour arriver à un résultat et comment cela se traduit ensuite dans un langage informatique.

Si vous comprenez qu'un programme est une suite de pleins d'algorithmes composés de boucles et de fonctions qui vont traiter toute sorte de données, alors vous aurez fait un grand pas dans la compréhension des langages !

<br/>

### Pour aller plus loin :
<ul>
    <li><a href="https://cnil.fr/fr/definition/algorithme">Définition de la CNIL</a></li>
    <li><a href="https://fabien-torre.fr/Enseignement/Cours/algo.php">Cours de Fabien Torre</a></li>
</ul>



