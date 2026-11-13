# ZLAND V1 — démarrage

Ce dossier contient une première vitrine bilingue (FR/EN) pour ZLAND, avec présentation des activités, catalogue de démonstration, panier visuel et formulaire de demande de service.

## Important avant toute ouverture au public

- Le catalogue est fictif et les boutons d'ajout au panier sont volontairement désactivés.
- L'adresse `hello@zland.example` est un exemple à remplacer.
- Le paiement n'est pas activé. La fonction Netlify/Stripe fournie est un squelette sécurisé côté serveur, pas une boutique prête à vendre.
- Il faut remplacer le catalogue de démonstration dans `app.js` ET dans `netlify/functions/create-checkout-session.js`, vérifier les prix, les stocks, les frais de livraison, les taxes, les conditions de vente et les obligations légales.
- Ne jamais mettre une clé Stripe secrète dans `app.js`, `index.html` ou tout fichier public.

## Prévisualisation locale

1. Installer Node.js (version LTS).
2. Ouvrir un terminal dans le dossier.
3. Exécuter `npm install`.
4. Exécuter `npm run dev`.
5. Ouvrir l'adresse locale affichée par Netlify CLI.

## Publication sur Netlify

1. Créer un compte Netlify et importer ce dossier depuis un dépôt GitHub.
2. Paramètres de build : dossier publié `.` ; dossier de fonctions `netlify/functions`.
3. Pour activer Stripe plus tard, ajouter `STRIPE_SECRET_KEY` dans les variables d'environnement Netlify.
4. Remplacer le catalogue de test dans les deux fichiers concernés et tester en mode test Stripe avant toute activation réelle.

## Prochaines étapes recommandées

1. Valider le nom, le logo et l'adresse e-mail.
2. Choisir les vrais services et les produits à vendre.
3. Configurer un vrai formulaire de contact (backend ou service de formulaires) et une adresse professionnelle.
4. Finaliser le paiement Stripe, les commandes, les emails de confirmation et la gestion des stocks.
5. Ajouter les pages légales nécessaires : mentions légales, CGV, politique de confidentialité, cookies si applicable, livraison et retours.
6. Tester sur mobile, ordinateur, les parcours de commande et les erreurs avant lancement.

## Arborescence

- `index.html` : contenu et structure
- `styles.css` : identité visuelle responsive
- `app.js` : traduction, catalogue de démonstration et interactions
- `netlify.toml` : configuration Netlify
- `netlify/functions/create-checkout-session.js` : exemple de création de session Stripe côté serveur
