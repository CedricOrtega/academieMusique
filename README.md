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

Des pattern ont été mis en place pour restreindre le formulaire de login et ne pas remplir n'importe quoi. Le minimum de sécurité a été effectué. Le mot de passe est crypté avec un système de 10 salages à l'aide de la librairie bcrypt.



