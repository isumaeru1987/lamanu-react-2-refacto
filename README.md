# 🧾 Grille de notation — TP React : Écran "Collection"

## 🎯 Objectif

Refactoriser l’application existante en appliquant :

- Les Hooks correctement (`useEffect`, `useState`)
- La séparation des responsabilités
- Les bonnes pratiques React
- La mise en place du routing

---

## 1️⃣ Corriger l’appel API (useEffect) — **4/4**

- **1/1** Présence correcte du tableau de dépendances `[]`
- **1/1** Ajout de l’état `loading`
- **1/1** Ajout de l’état `error`
- **1/1** Affichage conditionnel :
  - “Chargement…” pendant la requête
  - Message d’erreur si la requête échoue

---

## 2️⃣ Extraire l’appel API dans un service — **3/3**

- **1/1** Création du fichier `src/services/userService.js`
- **1/1** Fonction `getUsers()` correctement exportée et utilisée
- **1/1** Gestion des erreurs avec `throw`

---

## 3️⃣ Séparer Page / UI — **5/5**

### Structure — 2/2

- **1/1** `UsersPage.jsx` contient la logique (state, fetch, handlers)
- **1/1** `UserList.jsx` et `UserItem.jsx` contiennent uniquement l’affichage

### Props — 2/2

`UserItem` reçoit correctement les props suivantes :
- `user`
- `selected`
- `onSelect`
- `onDelete`

### Bonne pratique — 1/1

- Aucun appel API dans le dossier `components/`

---

## 4️⃣ Correction des anti-patterns — **4/4**
- **1/1** Remplacement de `key={index}` par `key={user.id}`
- **1/1** Suppression d’un utilisateur sans mutation
- **1/1** Déplacement de la logique hors JSX
- **1/1** Code simplifié et plus lisible (suppression duplications)

---

## 5️⃣ Ajouter une navigation (React Router) — **4/4**
- **1/1** Installation et configuration correcte de React Router
- **1/1** Page "/" (Bienvenue) fonctionnelle
- **1/1** Page "/users" fonctionnelle
- **1/1** Navigation fluide sans rechargement

---

## 🧮 Barème
- **Note finale : 20/20**
