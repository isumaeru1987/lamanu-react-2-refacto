# 🟢 À FAIRE — Tâches de refactoring

## 1) Corriger l’appel API (useEffect)

- Ajouter un tableau de dépendances []
- Ajouter les états loading et error

### ✅ Attendu
- Affichage de “Chargement…” pendant la requête
- Affichage d’un message d’erreur si la requête échoue

---

## 2) Extraire l’appel API dans un service

Créer le fichier suivant :
src/services/userService.js

### ✅ Attendu
- getUsers() retourne la liste des utilisateurs
- Gestion des erreurs via throw

---

## 3) Séparer Page / UI

Créer les fichiers suivants :

src/pages/UsersPage.jsx        // logique : state, fetch, handlers  
src/components/UserList.jsx    // affichage de la liste  
src/components/UserItem.jsx    // affichage d’un utilisateur  

### ✅ Attendu
- UserItem reçoit les props :
  - user
  - selected
  - onSelect
  - onDelete
- Aucun appel API dans le dossier components/

---

## 4) Corriger les anti-patterns

- Remplacer key={index} par key={user.id}
- Supprimer un utilisateur sans muter le state :
  setUsers(prev => prev.filter(...))
- Déplacer la logique “ville sélectionnée” hors du JSX :
  const city = selected?.address?.city ?? "none"

---

## 5) Ajouter une navigation

- Créer une page "/" de présentation (Bienvenue)
- Créer une page "/users"

---

## 6) (Bonus) Rendre le composant plus réutilisable

- UserList accepte une liste de users déjà filtrée
- Ajouter un composant SearchBar optionnel
- Ajouter une page dynamique pour accéder à un utilisateur
