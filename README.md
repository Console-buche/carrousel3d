# Carrousel 3D - projet Twitch

Salut !
Le but de ce projet était de reverse engineer le carrousel du site nomminé Awwwwards J'avais 4 heures pour faire le carrousel complet avec les deux view (de côté et du dessus). Et vuuu comment je suis bavard j'ai fail :D
Mais quand même ! Résultat bien kiffant. On termine ça lors du prochain Twitch.

- Le site d'origine : ✨ https://www.clouarchitects.com/ ✨
- Ce repo est public, n'hésite pas à PR, cloner...
- Le code est "sorti de live à 3h du matin", c'est un gros WIP pas refacto et un peu crado, t'es prévenu :P
- Tu peux regarder la VOD du live sur ma chaîne Twitch.
- Pour me retrouver sur Twitch : https://www.twitch.tv/console_buche
- Twitter : https://twitter.com/Console_buche

## LA STACK

- React
- R3F & compagie : portage de Three.js en JSX <3
- React Query : c'était une expérimentation pour moi, simple à mettre en place et très cool (gestion des flags, cache de la query... )

## LANCER LE PROJET

Il te suffit de cloner le repo, puis :

```sh
npm run dev
```

Et tu run localhost:3000 dans ton naigateur

## PREREQUIS : API KEY UNSPLASH

> Attention, on utilise l'API de Unsplash pour les photos. Il te faudra une clé, que tu peux récupérer ici : https://unsplash.com/documentation
> Ensuite, récupère la key et met à jour la variable dans le fetch.
