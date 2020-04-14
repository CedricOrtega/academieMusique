# academieMusique
Développement d'un gestionnaire d'une académie de musique

Comment demarrer le projet ?

- Cloner le projet
- L'architecture comporte le back en node.js interrogeant la base mongodb et le front en angular qui va interroger notre api node.js

- En premier accéder au dossier backend
- Executer en ligne de commande : nodemon server
Pour lancer le serve node.js
La base de donnée mongodb est en cloud pas besoin d'importer les données, tout le monde peut l'interroger. Le lien se fait via mongoose entre la base et le serveur node.js .

Une fois le serveur lancé.

Avec un second terminal accéder au dossier frontend/academieMusique
-  Executer en ligne de commande :  ng serve --open

Le navigateur va ouvrir le bon lien.

La page de connexion va s'afficher pour se log :
email : ouioui@oui.oui
mdp : ouiouioui

Des pattern ont été mis en place pour restreindre le formulaire de login et ne pas remplir n'importe quoi. Le minimum de sécurité a été effectué. Le mot de passe est crypté avec un système de 10 salages à l'aide de la fonction de hachage : bcrypt.

A ce jour la fonctionnalité pour les étudiants fonctionne. Cependant selon la version, une update va être faite pour répondre à la contrainte suivante: un étudiant peut suivre plusieurs cours d'instrument et pas 1 seul.

Pour les professeurs, cette fonctionnalité arrive juste après la date d'échéance.
C'est un projet vivant dont les fonctionnalités et exigences sont amenés à être changé par le client.

Sur le sidebar (d'ailleurs dev avec angular material design, comme le datatable pour lister les élèves), on voit les fonctionnalités salles et planning qui seront dev plus tard. Elle ne rentre pas dans le rendu de ce projet.

Pour le design : Angular material et Bootstrap ont été utilisés.

Le choix de mongoDB a été long a se mettre en place, hésitant sur la façon de persister nos données (SQL vs NOSQL). Etant notamment un projet réalisé dans un contexte universitaire. On a opté pour une solution NoSQL et donc dans un soucis d'apprentissage, passer du temps à mettre en place un soucis fonctionnel en une solution technique via une base NoSQL. Donc un projet commencé avec une base en SQL a donc été avorté, pour être remplacé par celui ci.

Le code est optimisé, il est observé.
Je vous invite à analyser le code pour voir notre pensé de conception et la compréhension des technologies



