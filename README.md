# Traduttore

Traduttore istantaneo inglese ↔ italiano, da usare sul telefono come un'app.

**Provalo:** https://kuba1709.github.io/Traduttore/

## Funzioni
- traduce mentre scrivi
- pulsanti Incolla, Copia e Ascolta (lettura ad alta voce)
- ⇄ per invertire le lingue
- si installa nella schermata Home del telefono

## Com'è fatto
- `index.html` – la pagina: struttura (HTML), aspetto (CSS) e comportamento (JavaScript)
- `manifest.json` – dice al telefono come installarla come app (nome, icona, colori)
- `sw.js` – il "service worker", che la rende installabile e veloce da aprire
- `icon-*.png`, `icon.svg` – le icone

Le traduzioni arrivano dal servizio gratuito [MyMemory](https://mymemory.translated.net/).
